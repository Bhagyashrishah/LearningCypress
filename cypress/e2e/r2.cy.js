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

    it('Verify that the user cannot create a recruitment without filling up the required fields', () => {
        // Navigate to the Recruitment module
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        // Create recruitment
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

    it('Verify that the user can create a recruitment', () => {
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
        cy.get('[placeholder="First Name"]').type('bhagya');
        cy.get('[placeholder="Middle Name"]').type('sanjay');
        cy.get('[placeholder="Last Name"]').type('shah');
    //      cy.get('[class="oxd-select-text oxd-select-text--active"]').click().type('Software',{force: true })
    //      cy.get('[class="oxd-select-text-input"]').each(($el,index,$div) => {

    //   //   cy.get('.oxd-select-text-input div:nth-child(4)').each(($el,index,$div) => {
    //         cy.log($el.text())
    //         if($el.text()==='Software Engineer')
    //             {
    //               cy.wrap($el).click();

    //             }
    //      })
   // cy.get('[class="oxd-select-text oxd-select-text--active"]').select('Software Engineer').should('have.value','Software Engineer')
  //  cy.get('.oxd-select-text-input').select('Software Engineer').should('have.value','Software Engineer')
// //});
// cy.get('.oxd-select-text-input').click(); // Click to open the dropdown

// cy.contains('.oxd-select-text-input .oxd-select-text-item', 'Software Engineer',{ timeout: 10000 }).click();

// // Optionally, you can assert that the selected value matches your expectation
// cy.get('.oxd-select-text-input').should('have.text', 'Software Engineer');
//cy.get('[class="oxd-select-text oxd-select-text--active"]').click().type('Software',{force: true })
// cy.get('.oxd-select-wrapper div').click().type('Software',{force: true })

// cy.get('class="oxd-select-wrapper div').each(($el,index,$div) => {

//                  if($el.text()==='Software Engineer')
//                     {
                    
//                         cy.wrap($el).click();

//                     }
//                 })

    //                //[class="oxd-select-text oxd-select-text--active"]
       //   cy.get('[class="oxd-select-text-input"]').select('Senior QA Lead',{force : true})
    //    cy.get('.oxd-select-text-input').click();
    //    cy.wait(8000); 
    //   // cy.contains('.dropdown-option', 'Senior QA Lead').click();

    //    cy.get('.oxd-select-text-input').contains('Senior QA Lead',{force : true})
    //    cy.focused().click({force : true});

     //    cy.get('.oxd-select-text-input').select('Senior QA Lead',{force : true})
        //  cy.get('class="oxd-select-text oxd-select-text--active"').each(($el,index) => {
     
        //     if ($el.text().trim() === 'Software Engineer') {
        //       // Click the element
        //       cy.wrap($el).click();
            
        //     }
        //  })
       // cy.get('.oxd-select-dropdown').contains('Software Engineer').click(); // Select the option

        cy.get('[placeholder="Type here"]').eq(0).type('bhagya@gmail.com');
        cy.get('div>input[type="file"]').selectFile('C:\\Users\\Bhagyashri\\Downloads\\Rohit Kurup_QA Automation.pdf',{force: true})
      //  cy.get('input.oxd-file-input').selectFile('C:\\Users\\Bhagyashri\\Downloads\\Rohit Kurup_QA Automation.pdf', {force: true});

    //   //  cy.get('input[type="file"]').attachFile({
    //         filePath: 'C:\\Users\\Bhagyashri\\Downloads\\Rohit Kurup_QA Automation.pdf',
    //         encoding: 'base64'
    //       });
      

        //cy.get('[class="oxd-file-div oxd-file-div--active"]').selectFile('C:\Users\Bhagyashri\Downloads\Rohit Kurup_QA Automation.pdf')
       // const p = 'Rohit Kurup_QA Automation.pdf'
        //cy.get('[class="oxd-file-div oxd-file-div--active"]').attachFile(p)
        //cy.get('[class="oxd-file-div oxd-file-div--active"]').click()
  


        cy.get('[type="submit"]').click();
        // Assertion
        cy.contains('Successfully').should('be.visible');
    });

   // it('Verify that the user can create a Vacancy', () => {
  //  cy.contains('.oxd-topbar-body-nav-tab --visited .oxd-topbar-body-nav-tab-item').select('Vacancies').click();
     //   cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
       // cy.get('[class="oxd-topbar-body-nav-tab --visited"]').click();
//         cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
//         cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('QA');
//         cy.get('[class="oxd-select-text oxd-select-text--active"]').click();
//         cy.get('.oxd-select-dropdown--below').contains('Automation Tester').click();
//         cy.get('[placeholder="Type for hints..."]').type('A');
//         cy.get('.oxd-autocomplete-dropdown--below').contains('Amelia Brown').click();
//         cy.get('[type="submit"]').click();
   });
// });
