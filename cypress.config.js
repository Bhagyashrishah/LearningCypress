// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

//     },
//     watchForFileChanges:false,
//     defaultCommandTimeout : 8000,
//     pageLoadTimeout : 6000
//   },
  
// });
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

          })
          return readFile
        }
      })
      includeShadowDom : true
    },
  }})
