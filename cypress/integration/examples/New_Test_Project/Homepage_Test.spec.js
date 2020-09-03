import LandingPage from '.././../PageObjects/LandingPage'
import LoginPage from '../../PageObjects/LoginPage'
import ContactUs from '../../PageObjects/Contactus'

describe('Visit Home PAge', function () {
    it('Should call both login and contactus pages', function () {
        const Hp = new LandingPage()
        Hp.visit()
        Hp.Signin()

    })
    
    it('Should login user', function () {

        const Lp = new LoginPage()
        Lp.fillEmail('lyricalwhiz@mail.com')
        Lp.fillPassword('Automation_Testing')
        Lp.SignInButton()
        cy.title().should('be.equal', 'My account - My Store')

    })

    // it('Contact customer service', function () {
    
    //     const ContUs = new ContactUs
    //     ContUs.SubjectHeading()
    //     ContUs.Order_Email('lyricalwhiz@mail.com')
    //     ContUs.Order_Ref()
    //     ContUs.Message('This is Page Object Model using Cypress')
        
    // })
})
