const { defineConfig } = require("cypress");
const fs = require("fs")
//fs file structure module
//whatever file sturetures we have uske sath deal karega fs
const exceltoJson = require("convert-excel-to-json")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
      //here we have created task
      
      on('task',{
        //
        exceltoJson(filePath){
          const readFile=exceltoJson({
            source : fs.readFileSync(filePath)
            //will read that file in synchronous way

          })
          return readFile
        }
        
      })
      includeShadowDom : true

    },
    specPattern: 'cypress/integration/example/*.cy.js'

    //specPattern : 'LearningCypress/cypress/e2e/*.cy.js'
  },

});
module.exports = (on, config) => {
  on('task', {
    exceltoJson(filePath) {
      // Here you should implement your logic to convert Excel to JSON
      // Example implementation using a library like exceljs:
      const excelToJson = require('convert-excel-to-json');

      const result = excelToJson({
        sourceFile: filePath,
      });

      return result;
    }
  });
};
