var RCSS = require('rcss');

var staff = {
  margin: '0 auto',
  padding: 0,
  overflow: 'hidden',
  '@media screen and (min-width: 601px)': {
    padding: '1.5em',
    background: 'rgba(157, 90, 75, 0.06)',
  },
};

var contact = {
  margin: '0 auto',
  maxWidth: '800px',
  padding: '3em 10% 3em',
};

var contactTitle = {
  color: '#1dc7ba',
};

module.exports = {
  staff: RCSS.registerClass(staff),
  contact: RCSS.registerClass(contact),
  contactTitle: RCSS.registerClass(contactTitle),
};
