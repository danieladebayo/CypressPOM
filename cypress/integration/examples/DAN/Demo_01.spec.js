const allureWriter = require("@shelex/cypress-allure-plugin/writer")

describe('Check if working', function () {
    before(function () {
       
        cy.LogIn()
        
    })

    it('use carguru website', function () {
        Cypress.config('pageLoadTimeout', 20000)
        
        cy.get('[title=Women]').contains('Women').click()
        cy.get('input[type=checkbox]').check(['4', '3_1'])
        cy.get('#selectProductSort').select('In stock').should('have.value', 'quantity:desc')
        
  
        
    })
    
})