/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json');

describe('Checkout AppActions', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/');
  });

  it('Deve logar, escolher produto e fechar a compra', () => {
    cy.loginViaUI(email, senha);

    cy.goToBrowse();
    cy.openProductByIndex(6);
    cy.addProductToCart();

    cy.continueToPayment();
    cy.completeCheckout();

    cy.assertOrderSuccess();
  });
});
