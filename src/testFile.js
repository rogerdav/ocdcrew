const sgMail = require('@sendgrid/mail');
require('dotenv').config();


module.exports = function() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'roger@roger-davenport.com',
    from: 'web@ocdcrew.com',
    subject: 'Website Esitmate Request',
    text: 'test message',
    html: '<strong>this is where HTML goes</strong>',
  };
  sgMail.send(msg);
  console.log('message sent from sendgridmail');
  
}