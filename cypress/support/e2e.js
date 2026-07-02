// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Comando personalizado para manejar la sesión y evitar el Rate Limit
Cypress.Commands.add('loginUI', (correo, password) => {
  cy.session([correo, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="login-email"]').type(correo);
    cy.get('[data-testid="login-password"]').type(password);
    cy.get('[data-testid="login-submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});