describe('API Test', function () {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it('GET - read', () =>{
        cy.request('GET', '/employees').then((response) => {
            expect(response).to.have.property('status', 200,)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
    })

    it('POST - Create', () =>{
        const PostItems = {"name":"test","salary":"123","age":"23"}	
        cy.request('POST', '/create', PostItems)
        .its('body')
        .its('data')
        //.should('deep.eq', PostItems)
        .should('include', {name:'test'})

    })

    it('PUT - update', () => {
        const PostItems = {"name":"test1"}
        cy.request('PUT', '/update/1', PostItems).then((response) =>{
           // expect(response).to.have.property('body',{status: 'success'})
           expect(response).to.have.property('duration', 821)

        })
        
    })
})