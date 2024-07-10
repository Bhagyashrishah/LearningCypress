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
require('cypress-real-events/support');
require('@4tw/cypress-drag-drop')
// cypress/support/index.js

// At the top of the file, import the command from the plugin
//import 'cypress-iframe';
require('cypress-iframe');

 Cypress.Commands.add('visitPopupAlterts', () => { 
    cy.visit('https://webdriveruniversity.com/');
    cy.get('[id="popup-alerts"]').invoke('removeAttr','target').click()
                                 })
      
     Cypress.Commands.add('visitApp', () => { 
           cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')

     })
