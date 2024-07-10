describe('Excel to Json convert', () => {
    it('Use data from excel', () => {
      const filePath = "c:/Users/Bhagyashri/Desktop/Book1.xlsx";
  
      cy.task('exceltoJson', filePath).then((reqData) => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[placeholder="First Name"]').should('be.empty').type(reqData.Sheet1[1].A);
        cy.get('[placeholder="Last Name"]').type(reqData.Sheet1[1].B);
        cy.get('[placeholder="Email Address"]').type(reqData.Sheet1[1].C);
        cy.get('[placeholder="Comments"]').type(reqData.Sheet1[1].D);
        cy.get('[type="submit"]').click();
        // Additional assertions or actions can be added as needed
      });
    });
  });
  