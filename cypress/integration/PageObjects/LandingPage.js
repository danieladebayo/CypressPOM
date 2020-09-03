class LandingPage {

    visit(){

        cy.visit("http://automationpractice.com/index.php")
    }

    Signin(){

        const SigninWord = cy.get('[class=login]')
        SigninWord.click()
        return this
    }
 
    ContactUs(){

        const Contactusbtn = cy.get('#contact-link > a')
        Contactusbtn.click()
        return this
    }

}

export default LandingPage