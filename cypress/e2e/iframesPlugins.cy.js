/// <reference types="cypress"/>
describe("iframe handling",()=>{
    it('iframe using plugins',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="iframe"]').invoke('removeAttr','target').click()
        //iframe chya iframe madhe gelo
        cy.frameLoaded('[id="frame"]');
        //tya iframe madhe home button hota tyala click kela 
        cy.iframe().contains('Home').click()
})
})