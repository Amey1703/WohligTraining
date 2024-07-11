import { Client } from "@elastic/elasticsearch";
const client = new Client({
  node: "https://92b829a1891c4463ae00232e0cf3bc29.us-central1.gcp.cloud.es.io:443",
  auth: {
    apiKey: "QmljMm9KQUJld0hIcG5BUmRPdUM6N1F0TmdzNEVTUzY3OE04YWxyWkYtUQ==",
  },
});

// API Key should have cluster monitor rights.
const resp = await client.info();

// console.log(resp);
/**
{
  name: 'instance-0000000000',
  cluster_name: 'd9dcd35d12fe46dfaa28ec813f65d57b',
  cluster_uuid: 'iln8jaivThSezhTkzp0Knw',
  version: {
    build_flavor: 'default',
    build_type: 'docker',
    build_hash: 'ca3dc3a882d76f14d2765906ce3b1cf421948d19',
    build_date: '2023-08-28T11:24:16.383660553Z',
    build_snapshot: true,
    lucene_version: '9.7.0',
    minimum_wire_compatibility_version: '7.17.0',
    minimum_index_compatibility_version: '7.0.0'
  },
  tagline: 'You Know, for Search'
}
*/

// Sample data books
const dataset = [
  {
    id: "101",
    name: "Snow Crash",
    author: "Neal Stephenson",
    release_date: "1992-06-01",
    page_count: 470,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },

  {
    id: "102",
    name: "Revelation Space",
    author: "Alastair Reynolds",
    release_date: "2000-03-15",
    page_count: 585,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },

  {
    id: "103",
    name: "1984",
    author: "George Orwell",
    release_date: "1985-06-01",
    page_count: 328,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },

  {
    id: "104",
    name: "Fahrenheit 451",
    author: "Ray Bradbury",
    release_date: "1953-10-15",
    page_count: 227,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },

  {
    id: "105",
    name: "Brave New World",
    author: "Aldous Huxley",
    release_date: "1932-06-01",
    page_count: 268,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },

  {
    id: "106",
    name: "The Handmaid's Tale",
    author: "Margaret Atwood",
    release_date: "1985-06-01",
    page_count: 311,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  },
];

// Index with the bulk helper
const result = await client.helpers.bulk({
  datasource: dataset,
  pipeline: "ent-search-generic-ingestion",
  onDocument: (doc) => ({ index: { _index: "student" } }),
});

// console.log(result);
/**
  {
    total: 6,
    failed: 0,
    retry: 0,
    successful: 6,
    noop: 0,
    time: 82,
    bytes: 1273,
    aborted: false
  }
  */

// Search Query

const searchResult = await client.search({
  index: "student",
  q: "snow",
});

// console.log(searchResult.hits);

const document = await client.get({
  index: "student",
  id: "MidFoJABewHHpnARcOto",
});
console.log("Get: ", document);

// Update Document
const updatedDocument = await client.update({
  index: "student",
  id: "MidFoJABewHHpnARcOto",
  body: {
    doc: {
      author: "Jainam Stephenson (Updated)",
    },
  },
});

const documentUpdated = await client.get({
  index: "student",
  id: "MidFoJABewHHpnARcOto",
});
console.log("Update: ", documentUpdated);

// Update by query
const documentUpdateByQuery = await client.updateByQuery({
  index: "student",
  body: {
    query: {
      match: {
        author: "Jainam Stephenson",
      },
    },
    script: {
      source: `ctx._source.author = "Jainam Nisar"`,
      lang: "painless",
    },
  },
});

const documentUpdatedByQuery = await client.get({
  index: "student",
  id: "MidFoJABewHHpnARcOto",
});
console.log("Update by query: ", documentUpdatedByQuery);

// msearch
const msearchResult = await client.msearch({
  searches: [
    { index: "student" },
    { query: { match: { author: "Jainam Nisar" } } },
    { index: "student" },
    { query: { match: { author: "Alastair Reynolds" } } },
  ],
});

console.log("Msearch Result: ", msearchResult.responses[1].hits.hits);

// Reindex
await client.reindex({
  wait_for_completion: true,
  refresh: true,
  source: {
    index: "student",
    query: {
      match: { author: "Jainam Nisar" },
    },
  },
  dest: { index: "student_updated" },
  script: {
    lang: "painless",
    source: `ctx._source.author = "Jainam Nisar (Reindexed)"`,
  }
});

const reindexdoc = await client.search({
  index: 'student_updated',
  query: { match_all: {} }
})

console.log(reindexdoc.hits.hits)