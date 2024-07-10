describe('FileUpload',()=>{

    it('FileUploading test',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('[id="file-upload"]').invoke('removeAttr','target').click()
        //upload the file
        cy.get('[id="myFile"]').selectFile('cypress/fixtures/uplod.txt')
        cy.get('[id="submit-button"]').click()
        cy.on('window:alert',(message)=>{
            expect(message).to.include('Your file has now been uploaded!')
                     })


    })
})