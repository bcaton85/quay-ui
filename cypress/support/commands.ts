/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare namespace Cypress {
//     interface Chainable {
//         loginByCSRF: (arg: string) => void;
//     }
// }

// const username = 'user1';
// const password = 'password';
// Cypress.Commands.add('loginByCSRF', (csrfToken) => {
//     cy.request({
//       method: 'POST',
//       url: `${Cypress.env('REACT_QUAY_APP_API_URL')}/api/v1/signin`,
//       failOnStatusCode: false, // dont fail so we can make assertions
//       headers: {
//         'X-CSRF-Token': csrfToken
//       },
//       body: {
//         username: username,
//         password: password,
//       },
//     })
//   })
