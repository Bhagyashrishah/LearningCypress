

describe('webdriveruniversity.com',()=>{
    beforeEach('Repeating steps',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr','target').click();
    })
    it('visit and check the application',()=>
    {
    //cy.get('#contact-us').click();
    //cy.wait(10000)
    cy.get('[placeholder="First Name"]').should('be.empty').type('bhagya')
    cy.get('[placeholder="Last Name"]').type('Shah')
    cy.get('[placeholder="Email Address"]').type('bhagya@gamil.com')
    cy.get('[placeholder="Comments"]').type('learning cypress This is my 3rd application')
    cy.get('[type="submit"]').click()
    cy.get('#contact_reply >h1').should('include.text','Thank You for your Message!')
    })
    it('invalid email id message',()=>
        {
        cy.get('[placeholder="First Name"]').should('be.empty').type('bhagya')
        cy.get('[placeholder="Last Name"]').type('Shah')
        cy.get('[placeholder="Email Address"]').type('@.com')
        cy.get('[placeholder="Comments"]').type('learning cypress This is my 3rd application')
        cy.get('[type="submit"]').click()
        cy.get('body').should('include.text','Error: Invalid email address')
        })
        it('Blank form submission message',()=>
            {
            cy.get('[type="submit"]').click()
            cy.get('body').should('include.text', 'Error: all fields are required')
            })
    

})


















