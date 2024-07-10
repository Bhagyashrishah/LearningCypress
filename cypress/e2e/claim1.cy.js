Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

describe('OrangeHRM Login Test', () => {
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

    it('Verify that the user cannot create a claim without filling up the required fields', () => {
        // Navigate to the Claim module
        cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();
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
        // Navigate to the Claim module
        cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();
        // Create claim
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        // Employee Name
        cy.get('[placeholder="Type for hints..."]').type('b');
        cy.wait(2000);
        cy.get("[role='option']").each(($el) => {
            if ($el.text().trim() === 'Ravi M B') {
                cy.wrap($el).click();
            }
        });

        // Event Name
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
        cy.get("[role='option']").each(($el) => {
            if ($el.text().trim() === 'Travel Allowance') {
                cy.wrap($el).click();
            }
        });

        cy.wait(2000);

        // Currency
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
        cy.get("[role='option']").each(($el) => {
            if ($el.text().trim() === 'Lao Kip') {
                cy.wrap($el).click();
            }
        });

        // Remarks
        cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').type('You can use cy.pause() to pause the test at a specific point. This is useful if you want to manually inspect the state of the application at that point.');

        // Create
        cy.get('[type="submit"]').click();
                // Assertion
     cy.contains('Success').should('be.visible');
     cy.wait(2000)
// Asseration for claim is created.
cy.get('input.oxd-input--active').eq(4).should('have.value', 'Initiated');
    });
});
                                                          
