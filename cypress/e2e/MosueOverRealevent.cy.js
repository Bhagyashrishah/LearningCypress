describe('MosueActions',()=>{

it('MosueActions_Drag And Drop',()=>{
    cy.visit('https://webdriveruniversity.com/');
    cy.get('[id="actions"]').invoke('removeAttr','target').click()
    //Drag and drop using Pulgin
    cy.get('[id="draggable"]').drag('[id="droppable"]',{force:true})
    //assertation
    cy.get('.ui-widget-header b').should('include.text','Dropped!') 
})
})