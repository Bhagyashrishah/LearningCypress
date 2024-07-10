describe('handling shadowdown',()=>{

    it('ShdownDom solutions',()=>{
        cy.visitApp()
        //cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom');
        //1) first way using shadow () command
      //  cy.get('[id="shadow_host"]').shadow().find('[placeholder="Name"]').type('bhagya')
      //2) second way by using flag {includeShadowDom:true}
      cy.get('[placeholder="Name"]',{includeShadowDom:true}).type('BhagyaShah')
      //3rd way to use
      //config file madhe jaun includeShadowDom:true asa set kela and ethun te kadhun takala
     // cy.get('[placeholder="Name"]').type('BhagyaShah')


    })
})
