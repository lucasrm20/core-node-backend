const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

const handlebarsOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'util/email-templates',
    layoutsDir: 'util/email-templates',
    defaultLayout: false
  },
  viewPath: 'util/email-templates', 
  extName: '.hbs' 
};
transporter.use('compile', hbs(handlebarsOptions));

module.exports = transporter;
