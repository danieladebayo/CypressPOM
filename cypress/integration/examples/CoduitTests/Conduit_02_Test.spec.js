describe('User Login2', function() {
    it('Sign into Website', function () {
        cy.visit('https://react-redux.realworld.io/#/?_k=c8kxwf')
        cy.get('.nav-link').contains('Sign in').click()
        cy.get('input[type=email]').type('lyricalwhiz@mail.com')
        cy.get('input[type=password]').type('Automation_Testing')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
      
    })
    
})