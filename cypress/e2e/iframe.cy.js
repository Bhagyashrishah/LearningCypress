/// <reference types="cypress"/>
describe("iframe handling",()=>{
    it('validate text in iframe',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="iframe"]').invoke('removeAttr','target').click()
        //assign the variable to iframe
        //.then used because element will not going to direct intract with frame
        //frames can directly intract with cypress
        //iframevariable this is any random variable name
        //iframevariable = je kahe iframe madhe ahe te store honar
        //contents() je ek jquery ahe.mhanje iframevariable ahe tyavr focous kar full iframe var.
        //find('body') us maise body ko focous karega.
        cy.get('#frame').then((iframevariable)=>{
        const iniframe = iframevariable.contents().find('body')
        //as is alias method.
        //element she intract karanysathi wrap use karaycha ahe
        //as -> every time naav dyala lagu naye mahnun as use kela ahe
        cy.wrap(iniframe).as('insideiframe')
        //iframe madhe kahe findout karanycha asel tr find use karycha
        cy.get('@insideiframe').find('[id="button-find-out-more"]').click()
        cy.get('@insideiframe').find('.modal-body p').should('include.text','Welcome to webdriveruniversity.com we sell a wide range')
        cy.get('@insideiframe').find('[data-dismiss="modal"]').eq(1).click()
        
        })
        

    
    })


})