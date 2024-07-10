describe('OrangeHRM Login Test', () => {
    it('should login with valid credentials', () => {
      // Visit to the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
      // Add intercept for login request
      cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');
      //https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate

  
      //  username input and type the username
      cy.get('input[name="username"]').type('Admin');
  
      //  password input and type the password
      
      cy.get('input[name="password"]').type('admin123');
  
      //  login button and click it
      cy.get('button[type="submit"]').click();
      //second page 
      //click on assign page
      cy.get('button[title="Assign Leave"]').click()
      //enter the name
      cy.get('input[placeholder="Type for hints..."]').type('sww  test');
 

      //from date
      cy.get('input[placeholder="yyyy-dd-mm"]').first().click()
     // cy.get('input[placeholder="yyyy-dd-mm"]').eq(0).click()
    //  cy.contains('.input.oxd-input[placeholder="yyyy-dd-mm"]', '25').click(); // 
       //  cy.get('.input.oxd-input[placeholder="yyyy-dd-mm"]').select('25'); // 


      //to date
      cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).click()
      cy.contains('.input.oxd-input[placeholder="yyyy-dd-mm"]', '26').click(); // Adjust the selector and date as per your calendar structure

      cy.get('.oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical').type('learning cypress');
     // cy.contains('div.oxd-select-text-input', 'All Days').click();


  
      // Wait for the login request to complete and log the request and response
      cy.wait('@loginRequest').then((interception) => {
        console.log('Request:', interception.request);
        console.log('Response:', interception.response);
            // Find and click on the "Assign Leave" button or link
    //cy.get('div[title="Assign Leave"]').should('be.visible').click();

    // assertions to verify that the assign leave page is displayed
   // cy.url().should('include', '/leave/assignLeave');


      });
  
    });
  });

//   describe('OrangeHRM Login Test', () => {
//     it('should login with valid credentials', () => {
//       // Visit the login page
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
//       //  username input and type the username
//       cy.get('input[name="username"]').type('Admin');
  
//       // password input and type the password
//       cy.get('input[name="password"]').type('admin123');
  
//       // login button and click it
//       cy.get('button[type="submit"]').click();
  
//       // assertion for  verify successful login
//       cy.url().should('include', '/dashboard');
//       cy.get('h6').should('contain', 'Dashboard');
//     });
//   });
  