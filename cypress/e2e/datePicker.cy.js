describe("datepicker handling",()=>{
        it('selecting date',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="datepicker"]').invoke('removeAttr','target').click()
        //te calender chya side la jo icon ahe tyavr jaun click karnysathe he khalcha element ghetla ahe
        cy.get('[class="input-group-addon"]').click()
        //calender var je april 2024 hya side laje forwrd and backward arrows ahet tya vr jaun click kar
        //karaycha ahe so adhe tyacha elememnt ghetal tya 3 match hotey te wala 1st hota so te ghetla
        cy.get('[class="datepicker-switch"]').first().click()
        //ata tyacha button la ek function create karaycha
        function selectyear(){
            //function create kela ke then madhe ek variabke ghyacha mhnaje ata ethe apn year ghyacha try
            //try kartoy
            cy.get('[class="datepicker-switch"]').then((yearText)=>{
                let yearName = yearText.text()
                // if(!yearName.includes('2015')){
                //     cy.get('[class="prev"]').eq(2).click({force:true})
                //     selectyear()
                    if(!yearName.includes('2025')){
                        cy.get('[class="next"]').eq(0).click({force:true})
                        selectyear()
    
                }
            })
        }
        function selectMonth()
        {
            cy.get('.month').contains('Mar').click({force:true})
        }
        function selectDate()
        {
            cy.get('[class="day"]').contains('31').click({force:true})
        }
        selectyear()
        selectMonth()
        selectDate()
 
    })
})
