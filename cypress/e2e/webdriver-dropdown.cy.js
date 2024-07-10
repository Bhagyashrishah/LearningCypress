/// <reference types="cypress"/>
describe('Dropdown,check Box,radio buttons',()=>{
    it('DropDown',()=>{

        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()
        cy.get('[id="dropdowm-menu-1"]').select('Python')
        cy.get('[id="dropdowm-menu-1"]').should('include.text','Python')
        cy.get('[id="dropdowm-menu-2"]').select('Maven')
        cy.get('[id="dropdowm-menu-2"]').should('include.text','Maven')
        cy.get('[id="dropdowm-menu-3"]').select(3)
        cy.get('[id="dropdowm-menu-3"]').should('include.text','JQuery')
                   })
    it('CheckBox',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()
      
        cy.get('[value="option-1"]').check()
        cy.get('[value="option-1"]').should('be.checked') //assertation

        cy.get('[value="option-2"]').check()
        cy.get('[value="option-2"]').should('be.checked')

        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck()
        cy.get('[value="option-3"]').should('not.be.checked')
    })
    it('RadioButton',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()
        cy.get('[value="green"]').check()
        cy.get('[value="blue"]').check()
        cy.get('[value="blue"]').should('be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        
    })

    it('MosueActions_Drag And Drop',()=>{

        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="actions"]').invoke('removeAttr','target').click()
        //drag the element
        cy.get('[id="draggable"]').trigger('mousedown',{which :1})
        //drop the element 
        cy.get('[id="droppable"]').trigger('mousemove').trigger('mouseup',{force:true})
        //Assertation
        cy.get('.ui-widget-header b').should('include.text','Dropped!') 

    })
    it('double click Actions',()=>{

        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="actions"]').invoke('removeAttr','target').click()
        //hover on the button
        //here here mosue over and using invoke it will show the options.
        cy.get('[class="dropdown-content"]').eq(0).invoke('show').should ('be.visible').click({force:true})   
        // double click 
        cy.get('[id="double-click"]').dblclick()

    })
        it('handling Popup and alter Actions',()=>{

             cy.visit('https://webdriveruniversity.com/');
             cy.get('[id="popup-alerts"]').invoke('removeAttr','target').click()
            //button click
            cy.get('[id="button1"]').click()
            //now popup comes validate popup and msg
            //here cypress will auto accpet the alert
            cy.on('window:alert',(message)=>{
            expect(message).to.include('I am an alert box!')
                                     })
                    })
            it('handling Popup and alter Actions-part 2',()=>{

                cy.visit('https://webdriveruniversity.com/');
                cy.get('[id="popup-alerts"]').invoke('removeAttr','target').click()
                //buuton click
                cy.get('[id="button4"]').click()
                //now popup comes validate popup and msg
                // when wants to select the "OK" button in poup
                cy.on('window:confirm',(message)=>{
                   expect(message).to.include('Press a button!')
                   return true // if wants to click on ok button if want to click on cancel use false
                    })
                    //assertation
                    cy.get('[id="confirm-alert-text"]').should('include.text','You pressed OK!')              
        
            })
            it.only('handling Popup and alter Actions-part 2',()=>{

                cy.visit('https://webdriveruniversity.com/');
                cy.get('[id="popup-alerts"]').invoke('removeAttr','target').click()
                //buuton click
                cy.get('[id="button4"]').click()
                //now popup comes validate popup and msg
                // when wants to select the "cancel" button in poup
                cy.on('window:confirm',(message)=>{
                   expect(message).to.include('Press a button!')
                   return false // if wants to click on cancel button if want to click on cancel use false
                    })
                    //assertation
                    cy.get('[id="confirm-alert-text"]').should('include.text','You pressed Cancel!')              
        
            })



})