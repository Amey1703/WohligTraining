/*  Job to check the invoices and if paid we archive the record */
import cron from "node-cron";
import fs from "fs";
import  invoiceArchive  from "./data/invoice.json"  assert { type: "json" };;
import path from "path";
import url from "url";

const checkInvoices = () => {
  console.log("Running a scheduled task: ", new Date());
  try {
    const paidInvoices = invoiceArchive.filter(
      (invoice) => invoice.status === "paid"
    );

    if (paidInvoices.length > 0) {
      paidInvoices.forEach((item) => {
        invoiceArchive.splice(
          invoiceArchive.findIndex((e) => e.status === item.status),
          1
        );
      });
      const __filename = url.fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      fs.writeFileSync(
        path.join(__dirname, "./", "data", "invoice.json"),
        JSON.stringify(invoiceArchive),
        "utf-8"
      );

      fs.writeFileSync(
        path.join(__dirname, "./", "data", "archive.json"),
        JSON.stringify(paidInvoices),
        "utf-8"
      );
    }
  } catch (error) {
    console.log("Error: " + error);
  }
  console.log("Scheduled task ended: ");
};

cron.schedule("*/30 * * * * *", checkInvoices);
