describe('webdriveruniversity.com',()=>{
    let contactdeatils
    // contactdeatils ha vaible globally declear kela ahe 
    before(()=>{
        cy.fixture("contactData").then((data)=>{
            contactdeatils = data
        })
    })
    it('visit and check the application',()=>
    {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr','target').click();
    cy.get('[placeholder="First Name"]').should('be.empty').type(contactdeatils.firstName)
    cy.get('[placeholder="Last Name"]').type(contactdeatils.lastName)
    cy.get('[placeholder="Email Address"]').type(contactdeatils.email)
    cy.get('[placeholder="Comments"]').type(contactdeatils.comment)
    cy.get('[type="submit"]').click()
    cy.get('#contact_reply >h1').should('include.text',contactdeatils.message)
    })
})
