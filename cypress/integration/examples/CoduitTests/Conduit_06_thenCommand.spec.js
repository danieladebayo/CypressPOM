describe('Create and mark-unmark as favourite', function () {

    Cypress.config('pageLoadTimeout', 10000)

    before(function () {
        cy.SignIn()
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
        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        //cy.go('back')
        cy.go(-1)
        //cy.go('forward')
        //cy.go(1)

    })

})