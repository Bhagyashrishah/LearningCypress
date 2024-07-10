describe('Excel to Json convert',()=>{
    const filePath= "c:/Users/Bhagyashri/Desktop/Book1.xlsx"
    // contactdeatils ha vaible globally declear kela ahe 
    it('Use data from excel',()=>
            {
    cy.task('exceltoJson',filePath).then((reqData)=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr','target').click();
        cy.get('[placeholder="First Name"]').should('be.empty').type(reqData.Sheet1[1].A)
        cy.get('[placeholder="Last Name"]').type(reqData.Sheet1[1].B)
        cy.get('[placeholder="Email Address"]').type(reqData.Sheet1[1].C)
        cy.get('[placeholder="Comments"]').type(reqData.Sheet1[1].D)
        cy.get('[type="submit"]').click()
     //   cy.get('#contact_reply >h1').should('include.text',reqData.sheet1[1].D) 
    })
    })
})
