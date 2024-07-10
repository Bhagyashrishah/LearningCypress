Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('OrangeHRM Login Test', () => {
    let claimdeatils;
    beforeEach(() => {
            // Visit to the login page 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //  username input and type the username
        cy.get('input[name="username"]').type('Admin');

        //  password input and type the password

        cy.get('input[name="password"]').type('admin123');

        //  login button and click it
        cy.get('button[type="submit"]').click();
    });
    it('should login with valid credentials', () => {
         cy.url().should('include', '/dashboard');
    })

    it('Verify that the user cannot create a claim without filling up the required field', () => {
        //Claim 
        cy.get('[href="/web/index.php/claim/viewClaimModule"]').click()
        //Assign claim//create claim
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()


        // Remove focus from any input field
        cy.get('body').click();

        // Click on the submit button.
        cy.get('[type="submit"]').click();

        // Assert that there is an error message.
        cy.contains('Required').should('exist');
  //  })

   // it('Verify that the word Required is present and correctly spelled in the validation message for each required field',()=>{
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should('contain', 'Required');
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should('contain', 'Required');
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(2).should('contain', 'Required');

})
it('Verify that the user can create a claim.'),()=>{
cy.get('[href="/web/index.php/claim/viewClaimModule"]').click()
//Assign claim//create claim
cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
//Employee Name
cy.get('[placeholder="Type for hints..."]').type('b')
cy.wait(2000)
cy.get("[role='option']").each(($el, index) => {
    if ($el.text().trim() === 'Ravi M B') {
        // Click the element
        cy.wrap($el).click();
    }
})
//event name
cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click()
cy.get("[role='option']").each(($el, index) => {

    if ($el.text().trim() === 'Travel Allowance') {
        // Click the element
        cy.wrap($el).click();
    }
})
cy.wait(2000)
//Currency
cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click()
cy.get("[role='option']").each(($el, index) => {

    if ($el.text().trim() === 'Lao Kip') {
        // Click the element
        cy.wrap($el).click();
    }
})
//remarks
cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').type('You can use cy.pause() to pause the test at a specific point. This is useful if you want to manually inspect the state of the application at that point')
//create
cy.get('[type="submit"]').click()
cy.wait(8000)
//submit
  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click()
  //assertation
  cy.contains('Sucessfully').should ('be.visible')
}
})

// cy.scrollTo('bottom')
// //  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').scrollIntoView()
// cy.wait(3000)
// cy.get('.oxd-button--secondary').click()
// //  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click()
// cy.get('[href="#"]').eq(3).click()
// cy.wait(4000)
// cy.get('[class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space"]').eq(0).click()

// cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > .oxd-button').click()
   