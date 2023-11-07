const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "35e21fe28aa59c",
    pass: "2cfc8d20bd37c2"
  }
});

module.exports = mailer;