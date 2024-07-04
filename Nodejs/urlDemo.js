import url from'url';

const urlString = 'https:// www.google.com/search?q=hello+world'

const urlObject = url.parse(urlString, true);

console.log(urlObject);

// format()
console.log(url.format(urlObject));

// import.meta.url
console.log(import.meta.url);

const params = new URLSearchParams(urlObject.search);
console.log(params);