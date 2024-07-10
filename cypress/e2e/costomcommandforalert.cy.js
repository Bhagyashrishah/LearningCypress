/// <reference types="cypress"/>
describe('Cosutom commands for alerts',()=>{

it.only('handling Popup and alter Actions',()=>{

    // cy.visit('https://webdriveruniversity.com/');
    // cy.get('[id="popup-alerts"]').invoke('removeAttr','target').click()
    cy.visitPopupAlterts()
    //buuton click
    cy.get('[id="button1"]').click()
    //now popup comes validate popup and msg
    //here cypress will auto accpet the alert
    cy.on('window:alert',(message)=>{
    expect(message).to.include('I am an alert box!')
                             })
            })
        })