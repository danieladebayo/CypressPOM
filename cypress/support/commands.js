Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/?_k=c8kxwf')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('.nav-link').contains('Sign in').click()
        // cy.get('input[type=email]').type('lyricalwhiz@mail.com')
        // cy.get('input[type=password]').type('Automation_Testing')
        //cy.get('.btn').contains('Sign in').should('be.visible').click()

        cy.get('form').within(($form) => {
            cy.get('input[type=email]').type('lyricalwhiz@mail.com')
            cy.get('input[type=password]').type('Automation_Testing')
            cy.root().submit()
        })
        cy.contains('Your Feed', { timeout: 20000 }).should('be.visible')

})

Cypress.Commands.add("LogIn", () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').contains('Sign in').click()
    cy.get('input[id="email"]').type('lyricalwhiz@mail.com')
    cy.get('input[id=passwd]').type('Automation_Testing')
    cy.get('.submit').contains('Sign in').should('be.visible').click()
})


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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
