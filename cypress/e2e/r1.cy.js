Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

describe('OrangeHRM Login Test', () => {
    beforeEach(() => {
        // Intercept the login request
        cy.intercept('POST', '/web/index.php/auth/validate').as('login');

        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Input username and password, then submit
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        // Wait for the login request to complete
        cy.wait('@login');
    });

    it('should login with valid credentials', () => {
        cy.url().should('include', '/dashboard');
    });

    it('recruitment flow', () => {
        // Intercept the navigation to the Recruitment module
        cy.intercept('GET', '/web/index.php/recruitment/viewRecruitmentModule').as('viewRecruitmentModule');

        // Navigate to the Recruitment module
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();

        // Wait for the page to load
        cy.wait('@viewRecruitmentModule');

        // Intercept the request for adding a candidate
        cy.intercept('POST', '/web/index.php/recruitment/addCandidate').as('addCandidate');

        // Click the Add button to add a new candidate
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        // Fill in candidate details
        cy.get('[placeholder="First Name"]').type('bhagya');
        cy.get('[placeholder="Middle Name"]').type('sanjay');
        cy.get('[placeholder="Last Name"]').type('shah');
        cy.get('[class="oxd-select-text-input"]').type('A')
        cy.get("[class=oxd-select-text-input]").each(($el,index) => {
     
           if ($el.text().trim() === 'Senior QA Lead') {
             // Click the element
             cy.wrap($el).click();
           
           }
        })
        cy.get('[placeholder="Type here"]').eq(0).type('bhagya@gmail.com')
    

        // Upload the file
        const fileName = 'resume.pdf';
        cy.get('input[type="file"]').attachFile(fileName);

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Wait for the add candidate request to complete and validate
        cy.wait('@addCandidate').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.eq(200);
        });

        // Assertion to verify successful addition of candidate (this is hypothetical and might need adjustment based on actual implementation)
        cy.contains('Successfully Saved').should('be.visible');
    });
});
