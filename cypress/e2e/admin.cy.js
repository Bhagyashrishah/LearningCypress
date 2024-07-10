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
    // Visit to the login page 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
          //  username input and type the username
          cy.get('input[name="username"]').type('Admin');

          //  password input and type the password
          
          cy.get('input[name="password"]').type('admin123');
});
      it('Create Admin',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
        cy.get('input[name="username"]').type('Admin');        
        cy.get('input[name="password"]').type('admin123');


          //  login button and click it
          cy.get('button[type="submit"]').click();
         // cy.url().should('include', '/dashboard');
         //********************************************************* */
          cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
         // cy.contains('.oxd-text','Admin').click()
         //cy.get('.oxd-text')
         //****ADD admin******* */
         cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
      
         var randomUsername = "bhagya_Testing" + Math.floor(Math.random() * 1000);

      
            
         //inside admin
         //user role
         cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click()
         cy.get("[role='option']").each(($el,index) => {
      
            if ($el.text().trim() === 'Admin') {
               // Click the element
              cy.wrap($el).click();
             
             }
          })
         //employee Name
         cy.get('[placeholder="Type for hints..."]').type('Chinmay',{enter:true})

        // cy.wait(2000)
         cy.get("[role='option']").each(($el,index) => {
    
            if ($el.text().trim() === 'Chinmay Vijay Joshi') {
              // Click the element
              cy.wrap($el).click();       
             
            }
            
         })

         // select Status
         cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click()
         cy.get("[role='option']").each(($el,index) => {
      
            if ($el.text().trim() === 'Enabled') {
              // Click the element
              cy.wrap($el).click();
              cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(randomUsername)

              cy.get('[type="password"]').eq(0).type('bhagya0606@66')
              cy.get('[type="password"]').eq(1).type('bhagya0606@66')
              //save button
             // cy.get('[type="submit"]').click({force: true})  
              cy.get('.oxd-button--secondary').click()
           //   cy.contains('Success').should('be.visible');

         }
         })
        })
    })