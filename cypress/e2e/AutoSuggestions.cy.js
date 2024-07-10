describe('AutoSuggestions',()=>{

    it('Autosuggestions for drop down',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="autocomplete-textfield"]').invoke('removeAttr','target').click()
        // drop madhe select karaycha asel tr
        cy.get('[id="myInput"]').type('c')
        //select any food item populated from list of typed letter
        //.each method is for itrations
        //wrap karan fooditem is not intracting with directly cypress so
        //generally .then and .each jevha use karto tyaveli weap use kartoch 
        cy.get('#myInputautocomplete-list div').each((FoodItem)=>{
            if(FoodItem.text()=='Coffee')
                {
                    cy.wrap(FoodItem).click()
                    cy.get('[id="submit-button"]').click()
                    cy.url().should('include','Coffee')
                }
        })
    })
})