import cron from 'node-cron';

const task = () => {
    console.log("Running a scheduled task..." + new Date());
}

cron.schedule("* * * * *", task);