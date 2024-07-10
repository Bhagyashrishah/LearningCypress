
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});


describe('OrangeHRM Login Test', () => {
    let recruitmentdeatils;

    beforeEach(() => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Input username and password, then submit
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
    });

    it('should login with valid credentials', () => {
        cy.url().should('include', '/dashboard');
    });

    it('Verify that the user cannot create a recruitment without filling up the required fields', () => {
        // Navigate to the Claim module
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        // Create claim
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"').click();

        // Remove focus from any input field
        cy.get('body').click();

        // Click on the submit button
        cy.get('[type="submit"]').click();

        // Assert that there is an error message
        cy.contains('Required').should('exist');

        // Verify the 'Required' message for each field
        cy.get('[placeholder="First Name"]').should('contain', 'Required');
        cy.get('[placeholder="Last Name"]').should('contain', 'Required');
        cy.get('[placeholder="Type here"]').eq(0).should('contain', 'Required');
    })
    it('Verify that the user can create a recruitment', () => {
    cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('[placeholder="First Name"]').type('bhagya')
    cy.get('[placeholder="Middle Name"]').type('sanjay')
    cy.get('[placeholder="Last Name"]').type('shah')
    cy.get('[class="oxd-select-text-input]').type('A')
    cy.get("[class=oxd-select-text-input]").each(($el,index) => {
           if ($el.text().trim() === 'Senior QA Lead') {
         // Click the element
         cy.wrap($el).click();
                         }
    })
    cy.get('[placeholder="Type here"]').eq(0).type('bhagya@gmail.com')
    cy.get('[type="submit"]').click() 
      //assertation
  cy.contains('Sucessfully').should ('be.visible')
    })

    it('Verify that the user can create a Vacancy', () => {   
    cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()
    cy.wait(3000)
    cy.get('[class="oxd-topbar-body-nav-tab --visited"]').click()
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('QA')
    cy.get('[class="oxd-select-text oxd-select-text--active"]').type('A')
    cy.get('[class="oxd-select-text oxd-select-text--active"]').each(($el,index) => {
           if ($el.text().trim() === 'Automaton Tester') {
         // Click the element
         cy.wrap($el).click();
                         }
    })
    cy.get('[placeholder="Type for hints..."]').type('A')
    cy.get('[placeholder="Type for hints..."]').each(($el,index) => {
           if ($el.text().trim() === 'Amelia  Brown') {
         // Click the element
         cy.wrap($el).click();
       }
    })

   cy.get('[type="submit"]').click()
    }) //Vacancy

})









