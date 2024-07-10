Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('OrangeHRM Login Test', () => {
    it('should not login with invalid credentials', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Enter invalid username
        cy.get('input[name="username"]').type('InvalidUser');

        // Enter invalid password
        cy.get('input[name="password"]').type('InvalidPass');

        // Click the login button
        cy.get('button[type="submit"]').click();

        // Verify the error message is displayed
        cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials');
    });

    it('should login with valid credentials', () => {
        // Visit the login page 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Enter username
        cy.get('input[name="username"]').type('Admin');
        // Enter password
        cy.get('input[name="password"]').type('admin123');
        // Click the login button
        cy.get('button[type="submit"]').click();
    });

    it('Create Admin', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Login with valid credentials
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        // Navigate to Admin page
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();

        // Add new admin
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        var randomUsername = "bhagya_Testing" + Math.floor(Math.random() * 1000);

        // Select User Role
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
        cy.get("[role='option']").each(($el, index) => {
            if ($el.text().trim() === 'Admin') {
                cy.wrap($el).click();
            }
        });

        // Select Employee Name
        cy.get('[placeholder="Type for hints..."]').type('A');
        cy.get("[role='option']").each(($el, index) => {
            if ($el.text().trim() === 'Ajin  Ajin486') {
                cy.wrap($el).click();
            }
        });

        // Select Status
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
        cy.get("[role='option']").each(($el, index) => {
            if ($el.text().trim() === 'Enabled') {
                cy.wrap($el).click();
                cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(randomUsername);

                // Enter password
                cy.get('[type="password"]').eq(0).type('bhagya0606@66');
                cy.get('[type="password"]').eq(1).type('bhagya0606@66');

                // Intercept network request to wait for completion
                cy.intercept('POST', '**/admin/saveAdmin', (req) => {}).as('saveAdmin');

                // Save admin
                cy.get('.oxd-button--secondary').click();

                // Wait for the network request to complete
                cy.wait('@saveAdmin');
            }
        });
    });
});
