// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

const { homePage }    = require('./pages/home.page');
const loginPage       = require('./pages/login.page');
const { profilePage } = require('./pages/profile.page');

Cypress.Commands.add('loginViaUI', (email, password) => {
  homePage.openMenu('Account');
  loginPage.login(email, password);

  homePage.openMenu('Account');
  profilePage.customerName().should('be.visible');

  homePage.goHome();
});

Cypress.Commands.add('goToBrowse', () => {
  homePage.openMenu('Browse');
});

Cypress.Commands.add('openProductByIndex', (index = 6) => {
  const selector = `:nth-child(${index}) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]`;
  cy.get(selector).click();
});

Cypress.Commands.add('addProductToCart', () => {
  cy.get('[data-testid="addToCart"]').click();
});

Cypress.Commands.add('continueToPayment', () => {
  cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();
});

Cypress.Commands.add('completeCheckout', () => {
  cy.get('[data-testid="completeCheckout"]').click();
});

Cypress.Commands.add('assertOrderSuccess', () => {
  cy.contains(/Order Success/i).should('be.visible');

  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1')
    .should('be.visible');
});
