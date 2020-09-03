class LoginPage{

    fillEmail(value){
        const emailAdress = cy.get('input[id=email]')
        emailAdress.clear()
        emailAdress.type(value)
        return this

    }

    fillPassword(value){
        const Password = cy.get('input[id=passwd]')
        Password.clear()
        Password.type(value)
        return this
    }

    SignInButton(){

        const Signinbtn = cy.get('#SubmitLogin > span')
        Signinbtn.click()
        return this
    }
}
export default LoginPage