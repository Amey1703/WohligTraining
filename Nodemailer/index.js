import nodeMailer from "nodemailer";

const html = `
<h1>Hello World</h1>
<p>Its Nodemailer here!</p>
<p>Nice to meet you</p>`;

async function main() {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "testuser@gmail.com",
      pass: "tset12345",
    },
  });

  const info = await transporter.sendMail({
    from: " Test User <testuser@gmail.com>",
    to: "ameypanchal1724@gmail.com",
    subject: "Hello World",
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
}

main()
.catch((e) => console.log(e));
