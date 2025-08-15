/// <reference types="cypress" />

function uniqueEmail(prefix = 'qa.ebac', domain = 'example.com') {
  const ts = Date.now();
  const rnd = Math.floor(Math.random() * 1e6).toString().padStart(6, '0');
  return `${prefix}.${ts}.${rnd}@${domain}`;
}

function uniquePhone(ddd = '11') {
  const nineDigits = Math.floor(1e8 + Math.random() * 9e8);
  return `${ddd}${nineDigits}`;
}

module.exports = { uniqueEmail, uniquePhone };
