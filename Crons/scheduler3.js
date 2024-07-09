/*  Job to check the invoices and if paid we archive the record */
import cron from "node-cron";
import fs from "fs";
import invoiceArchive from "./data/archive.json" assert { type: "json" };
import path from "path";
import url from "url";

const houseKeepingTask = () => {
  console.log("Running a houdsekeeping scheduled task: ", new Date());
  try {
    invoiceArchive.map((item, index) => {
      const presentDate = new Date().getTime();
      const recordDate = new Date(item.date).getTime();
      const dayDifference = Math.floor(
        (presentDate - recordDate) / (1000 * 60 * 60 * 24)
      );
      console.log("Record date: ", dayDifference);

      if (dayDifference > 180) {
        invoiceArchive.splice(index, 1);

        const __filename = url.fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        fs.writeFileSync(
          path.join(__dirname, "./", "data", "archive.json"),
          JSON.stringify(invoiceArchive),
          "utf-8"
        );
      }
    });
  } catch (error) {
    console.log("Error: " + error);
  }
  console.log("Housekeeping  task ended: ");
};

cron.schedule("* * * * * *", houseKeepingTask);
