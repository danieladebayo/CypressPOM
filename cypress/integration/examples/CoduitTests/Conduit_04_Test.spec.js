describe('Create and mark-unmark as favourite', function () {
    it('favourite task', function () {
        cy.visit('https://react-redux.realworld.io/#/?_k=c8kxwf')
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

    it('Create a post', function () {
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include', '#/editor')
        //cy.get('input[type=text]').type('My First Article')
        cy.get('form').within(($form) => {

            cy.get('input').first().type('My First Article')
            cy.get('input').eq(1).type('Cypress Automation')
            cy.get('textarea').last().type('This is a Test')
            cy.get('input[placeholder="Enter tags"]').type('Forward & upwards ever #45 degrees')
            cy.contains('Publish Article').click()
        })
            cy.url().should('include', 'article')
    
    })

    it('Mark-unmark as favorite', function () {
        //cy.get('.nav-link').contains('lyricalwhiz').click()
        cy.get('ul.navbar-nav').children().contains('lyricalwhiz').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        //cy.contains('No articles are here... yet.').should('be.visible')
        //cy.go('back')
        cy.go(-1)
        //cy.go('forward')
        //cy.go(1)

    })

})