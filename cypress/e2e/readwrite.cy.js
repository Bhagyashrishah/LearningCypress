describe('read_write using cypress commands.com',()=>{
    it('write in the file',()=>
        {
            //using Text file
        cy.writeFile('./cypress/fixtures/test.txt','This is generated using cypress and have used writefile')
           // Using json file
        cy.writeFile('./cypress/fixtures/test.json','{"firstName": "John","lastName": "Doe","email": "john.doe@example.com","comment": "This is a test comment","message": "Thank You for your Message!"}')
        })
     it('Read  the file',()=>
            {
            cy.readFile('./cypress/fixtures/test.txt').should('contain','This is generated using cypress and have used writefile')
            //json read karnyasathe have.property use karayche ane eka element cha naav dyacha jasa 
            //ethe firstname dila ahe.sagala nai deu shkat karan json file mothi he asu shaktey.
            cy.readFile('./cypress/fixtures/test.json').should('have.property',"firstName")
                    })
    
    
})