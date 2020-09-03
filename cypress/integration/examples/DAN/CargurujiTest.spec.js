describe('UserLogin', function(){
    it('Create New User', function() {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').contains('Sign in').click()
      cy.get('input[id="email"]').type('lyricalwhiz@mail.com')
      cy.get('input[id=passwd]').type('Automation_Testing')
      cy.get('.submit').contains('Sign in').should('be.visible').click()

    })


  })

  