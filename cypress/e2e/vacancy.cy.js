Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

describe('OrangeHRM Login Test', () => {
    it('testcase for vacancy',()=>{
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Input username and password, then submit
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
  cy.intercept('GET', '**/recruitment/**').as('getRecruitmentPage');
cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
cy.wait('@getRecruitmentPage');

// Ensure the "Vacancies" tab is visible and click it
//cy.get('li.oxd-topbar-body-nav-tab --visited a.oxd-topbar-body-nav-tab-item')
  //.contains('Vacancies').click();
cy.contains('.oxd-topbar-body-nav-tab .oxd-topbar-body-nav-tab-item','Vacancies').click();
cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('QA')
cy.get('[class="oxd-select-text oxd-select-text--active"]').click()
cy.get("[role='option']").each(($el,index) => {
      
    if ($el.text().trim() === 'Automaton Tester') {
      // Click the element
      cy.wrap($el).click();
    }
  })

  // cy.get('.oxd-autocomplete-text-input > input').type('Rahul Patil')
  // // cy.get('[placeholder="Type for hints..."]').type('Rahul Patil')
  //         cy.get("[role='option']").each(($el,index) => {       
  //            if ($el.text().trim() === 'Rahul Patil') {
  //              // Click the element
  //              cy.wrap($el).click();               
  //            }
  //         })

cy.get('[class="oxd-input oxd-input--active"]').eq(2).type('1')
cy.get('[type="submit"]').click()
//cy.contains('Success').should('be.visible');


    });

})