const mailTransporter = require('../config/mailer-transporter');

const _generateMailOptions = (to, subject, template, templateData) => {
  return {
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    template: template,
    context: templateData
  };
};

exports.sendMail = (to, subject, template, templateData) => {

  const mailOptions = _generateMailOptions(to, subject, template, templateData);

  return new Promise((resolve, reject) => {
    
    mailTransporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        reject({ message: "Erro ao enviar email." });
      }

      resolve();
    });
  });

};
