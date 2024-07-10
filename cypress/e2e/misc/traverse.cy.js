describe('handling shadowdown',()=>{

    it('Traversing with different methods',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="data-table"]').invoke('removeAttr', 'target').click();
        //child method
        cy.get('[class="traversal-drinks-list"]').children('#milk').should('include.text','Milk')
        cy.get('[class="traversal-drinks-list"]').find('li').eq(4).should('include.text','Sugar')
        //parent method
        cy.get('[class="traversal-mark"]').parent().should('include.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit, ')
        
        
    })
})