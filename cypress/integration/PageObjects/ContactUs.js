class ContactUs{

    SubjectHeading(value){
       const CustomerService = cy.get('[name=id_contact]').children().contains('Customer service')
       CustomerService.click({force: true})
       return this
    }

    Order_Email(value){
        const orderemail = cy.get('input[id=email]')
        orderemail.clear()
        orderemail.type(value)
        return this
    }

    Order_Ref(value){
        const orderef = cy.get('[name="id_order"]')
        orderef.type(value)
        return this
    }

    Message(value){
        const message = cy.get('[id=message]')
        message.clear()
        message.type(value)
        return this
    }

    Send(){
        const sendbtn = cy.contains('Send')
        sendbtn.click()
        return this
    }
}

export default ContactUs