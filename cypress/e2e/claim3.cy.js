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

    it('Verify that the user cannot create a claim without filling up the required fields', () => {
        // Intercept the navigation to the Claim module
        cy.intercept('GET', '/web/index.php/claim/viewClaimModule').as('viewClaimModule');

        // Navigate to the Claim module
        cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();

        // Wait for the page to load
        cy.wait('@viewClaimModule');

        // Create claim
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        // Remove focus from any input field
        cy.get('body').click();

        // Click on the submit button
        cy.get('[type="submit"]').click();

        // Assert that there is an error message
        cy.contains('Required').should('exist');

        // Verify the 'Required' message for each field
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should('contain', 'Required');
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should('contain', 'Required');
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(2).should('contain', 'Required');
    });

    it('Verify that the user can create a claim', () => {
        // Intercept the navigation to the Claim module
        cy.intercept('GET', '/web/index.php/claim/viewClaimModule').as('viewClaimModule');

        // Navigate to the Claim module
        cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();

        // Wait for the page to load
        cy.wait('@viewClaimModule');

        // Intercept the request for employee search
        cy.intercept('GET', '/web/index.php/api/v2/pim/employees?nameOrId=b*').as('employeeSearch');

        // Intercept the request for saving the claim with dynamic URL
        cy.intercept('POST', '/web/index.php/api/v2/claim/assignClaim/id/*').as('saveClaim');

        // Create claim
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        // Employee Name
        cy.get('[placeholder="Type for hints..."]').type('b');

        // Wait for the employee search request to complete
        cy.wait('@employeeSearch');

        cy.get("[role='option']").contains('Ravi M B').click();

        // Event Name
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
        cy.get("[role='option']").contains('Travel Allowance').click();

        // Currency
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
        cy.get("[role='option']").contains('Lao Kip').click();

        // Remarks
        cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').type('You can use cy.pause() to pause the test at a specific point. This is useful if you want to manually inspect the state of the application at that point.');

        // Submit the claim
        cy.get('[type="submit"]').click();

        // Add a log to verify the request is being intercepted
        // cy.wait('@saveClaim').then((interception) => {
        //     console.log(interception);
        //     expect(interception.response.statusCode).to.eq(200);
        // });

        // Assertion
        cy.contains('Success').should('be.visible');

        // Verify that the claim status is 'Initiated'
       // cy.get('input.oxd-input--active').eq(4).should('have.value', 'Initiated');
    });
});
