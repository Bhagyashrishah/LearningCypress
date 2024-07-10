describe("DataTable handling",()=>{

it('Age of the user present in the table',()=>{

    cy.visit('https://webdriveruniversity.com/');
    cy.get('[id="data-table"]').invoke('removeAttr','target').click()
    //iterate thru the selected web element to validate age
    cy.get('#thumbnail-1 tr td:nth-child(2)').each((ele,index) =>{
        const userLname = ele.text()
        if(userLname === 'Doe'){
            cy.log(userLname)
            cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
            const userAge= age.text()
            expect(userAge).to.equal('20')
                })
            }

    })
})
})