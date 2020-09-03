import LandingPage from '.././../PageObjects/LandingPage'
import ContactUs from '../../PageObjects/Contactus'

describe('Contact the Website', function () {
    it('User able to send message', function () {
        const Hp = new LandingPage()
        Hp.visit()
        Hp.ContactUs()
        const ContUs = new ContactUs
        ContUs.SubjectHeading()
        ContUs.Order_Email('lyricalwhiz@mail.com')
        ContUs.Order_Ref('cypress!')
        ContUs.Message('This is Page Object Model using Cypress')
        ContUs.Send()
        cy.contains('There is 1 error').should('be.visible')
        
    })
    
})