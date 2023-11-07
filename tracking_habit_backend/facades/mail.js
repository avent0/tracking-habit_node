const mailer = require('../config/mailer');
const crypto = require('crypto');

const Mail = {
    to: function (email) {
        this.email = email;
        return this;
    },

    generateRandomCode: function () {
        return crypto.randomBytes(3).toString('hex').toUpperCase(); // Change to 3 bytes for a 6-character code
    },

    send: async function (subject = "Objet du mail") {
        const randomCode = this.generateRandomCode();
        const bodyText = `Votre code de vérification est : ${randomCode}`;
        try {
            await mailer.sendMail({
                from: "ezev77@gmail.com.com",
                to: this.email,
                text: bodyText,
                subject: subject
            });
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Email sending failed:', error);
        }
    },
};

module.exports = Mail;
