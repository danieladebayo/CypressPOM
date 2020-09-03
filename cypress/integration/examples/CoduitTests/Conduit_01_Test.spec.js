describe('login into website', function(){
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/?_k=c8kxwf')
        cy.get('.nav-link').contains('Sign up').click()
        cy.get('input[type=text]').type('lyricalwhiz')
        cy.get('input[type=email]').type('lyricalwhiz@mail.com')
        cy.get('input[type=password]').type('Automation_Testing')
        //cy.get('button[type="submit"]').contains('Sign in').click
        cy.get('.btn').contains('Sign in').click()

    })

})