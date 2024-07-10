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
         cy.get('[placeholder="Type for hints..."]').type('A')
         cy.wait(2000)
         cy.get("[role='option']").each(($el,index) => {
    
            if ($el.text().trim() === 'Ajin  Ajin486') {
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
              cy.wait(8000)         

              cy.get('[type="password"]').eq(0).type('bhagya0606@66')
              cy.get('[type="password"]').eq(1).type('bhagya0606@66')
              //save button
              cy.get('[type="submit"]').click({force: true})  
            //  cy.wait(8000)         

         }
        //    it('Checks and clicks on newly created admin', () => {
              // Visit the page where the admin list is displayed
    //           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    //           cy.get('[type="submit"]').click()
    //           cy.get(':nth-child(2) > .oxd-input').type(randomUsername)
    //           //user role
    //           cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click()
    //           cy.get("[role='option']").each(($el,index) => {
           
    //              if ($el.text().trim() === 'Admin') {
    //                // Click the element
    //                cy.wrap($el).click();
                  
    //             }
    //          })
    //           //employee Name
    //           cy.get('[placeholder="Type for hints..."]').type('A')
    //           cy.wait(2000)
    //           cy.get("[role='option']").each(($el,index) => {
           
    //              if ($el.text().trim() === 'Ajin  Ajin486') {
    //                // Click the element
    //                cy.wrap($el).click();
                  
    //              }
    //           })
    //     //                // select Status
    //      cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click({force: true})
    //      cy.get("[role='option']").each(($el,index) => {
      
    //       if ($el.text().trim() === 'Enabled') {
    //         // Click the element
    //         cy.wrap($el).click();
    //       }
    //     })
      
    //    //  cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').eq(0).click({force: true})
    //      //[class="oxd-select-text oxd-select-text--active"]
    //  //    cy.get('[class="oxd-select-text-input"]').eq(1).click()
    //    cy.get('[type="submit"]').click({force: true})
           

             });
          
                // Assuming the admin list is contained within the orangehrm-container
  // //  cy.get('.orangehrm-container').within(() => {
    //   // Locate the admin by their username
   //  cy.contains('randomUsername').click();
    //   //[class="oxd-icon bi-check oxd-checkbox-input-icon"]
    // });
    // cy.wait(5000)
    // cy.get('.orangehrm-container').contains(randomUsername).parent().within(() => {
    //   // Click on the icon associated with the admin
    //   cy.get('.oxd-icon.bi-check.oxd-checkbox-input-icon').eq(0).click();
    //   // Use eq(0) to click on the first matching icon, assuming it's the correct one
   //  });

                // Verify the new admin user is created
    // Navigate back to the Admin module to search for the new user
  //  cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();

    // Search for the new admin user
    // cy.wait(8000)
    // cy.get('.oxd-input-group > input').eq(1).type('randomUsername');
    // cy.get('button[type="submit"]').click();

    // // Check if the new admin user appears in the search results
    // cy.contains('randomUsername').should('exist');

            //*********************************************************************** */
            //Claim 
    //         cy.get('[href="/web/index.php/claim/viewClaimModule"]').click()
    //         //Assign claim//create claim
    //         cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

      
    //           // Remove focus from any input field
    //           cy.get('body').click();
      
    //           // Click on the submit button.
    //           cy.get('[type="submit"]').click();
      
    //           // Assert that there is an error message.
    //           cy.contains('Required').should('exist');
    //        //   cy.get('class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"').eq(0).contains('Required')
    //         //  cy.get('class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"').eq(1).contains('Required')
    //           //cy.get('class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"').eq(2).contains('Required')
    //           cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should('contain', 'Required');
    //           cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should('contain', 'Required');
    //           cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(2).should('contain', 'Required');

      
    //         cy.get('[href="/web/index.php/claim/viewClaimModule"]').click()
    //         //Assign claim//create claim
    //         cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    //         //Employee Name
    //         cy.get('[placeholder="Type for hints..."]').type('b')
    //         cy.wait(2000)
    //         cy.get("[role='option']").each(($el,index) => {       
    //            if ($el.text().trim() === 'Ravi M B') {
    //              // Click the element
    //              cy.wrap($el).click();               
    //            }
    //         })
    //         //event name
    //         cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click()
    //         cy.get("[role='option']").each(($el,index) => {
         
    //             if ($el.text().trim() === 'Travel Allowance') {
    //               // Click the element
    //               cy.wrap($el).click();
    //             }
    //         })
    //               cy.wait(2000)
    //               //Currency
    //               cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click()
    //               cy.get("[role='option']").each(($el,index) => {
         
    //                 if ($el.text().trim() === 'Lao Kip') {
    //                   // Click the element
    //                   cy.wrap($el).click();               
    //             }
    //          })
    //       //remarks
    //      cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').type('You can use cy.pause() to pause the test at a specific point. This is useful if you want to manually inspect the state of the application at that point')
    //      //create
    //      cy.get('[type="submit"]').click()
    //      cy.wait(8000)
    //      //submit
    //    //  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click()
    //    cy.scrollTo('bottom')
    //    //  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').scrollIntoView()
    //    cy.wait(3000)
    //    cy.get('.oxd-button--secondary').click()
    //    //  cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click()
    //    cy.get('[href="#"]').eq(3).click()
    //    cy.wait(4000)
    //  //  cy.get('[class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space"]').eq(0).click()
    //  cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > .oxd-button').click()
          })
       //  cy.wait(4000)
        //  //apply
        //  // cy.get('[href="#"]').eq(0).click()
        //  cy.get('[href="#"]').contains('Apply').click()
        //  cy.get('[class="oxd-select-text oxd-select-text--active"]').click()
        //  cy.get("[role='option']").each(($el,index) => {
         
        //   if ($el.text().trim() === '') {
        //     // Click the element
        //     cy.wrap($el).click();
        //   }
      })
      //from date 
      // cy.get('[placeholder="dd-mm-yyyy"]').eq(0).click()
      // // To date 
      // cy.get('[placeholder="dd-mm-yyyy"]').eq(1).click()
       
      // //commnets
      // cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').type(' personal leaves ')

      // //apply button
      // cy.get('[type="submit"]').click()



         //cy.get('[class="oxd-select-text-input"]').eq(1).click()
         // cy.get('.orangehrm-header-container .oxd-button').click()
         // leave 
       //  cy.get(':nth-child(3) > .oxd-main-menu-item')
      //   cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click()       
        // cy.contains('[href="#"]','Apply').click()
      //  cy.get('.oxd-topbar-body .oxd-topbar-body-nav .oxd-topbar-body-nav-tab .oxd-topbar-body-nav-tab-item:nth-child(1)').click()
        // .oxd-topbar-body .oxd-topbar-body-nav .oxd-topbar-body-nav-tab .oxd-topbar-body-nav-tab-item
        // .oxd-topbar-body .oxd-topbar-body-nav .oxd-topbar-body-nav-tab .oxd-topbar-body-nav-tab-item:first-child {
         //   #app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(1) > a
        //  }
      //  cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
     //   cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.oxd-topbar-body-nav-tab.--visited > a').click()
      //leave type 
     // cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
     // cy.get('.oxd-select-text-input').click()
   //   cy.get('div.oxd-select-text-input').click(); // Click to open the dropdown
  //  cy.contains('div.oxd-select-text-input', 'CAN - FMLA').click(); // Click on the dropdown item "CAN - FMLA"

    
//  })


   

   
