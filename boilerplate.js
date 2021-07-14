// ********************* NEW PROJECT BOILERPLATE ********************** //
// WHAT WE'RE CREATING HERE IS A NODE SCRIPT THAT CAN BE CALLED IN TERMINAL
// In Terminal ---> 'node boilerplate.js folderName'
// This will create a new file, with linked html, css, js files already in it
// Could, in theory, have a boilerplate for several prebuilt styles/layouts
  // and include full css and js that could be customized later
  // could also have boilerplate naming system for including different 
  // libraries (REACT, VUE, ETC).
// This can be called on a folder that already exists, and it will update/write to that 
// If given name does not exist, Node will create it.

// REQUIRE FILE SYSTEM MODULE INTO SCOPE
const { clear } = require('console');
const fs = require('fs'); 

// PROCESS MODULE IS AVAIL IN GLOBAL SCOPE. DOES NOT NEED TO BE REQUIRED
// HERE WE USE ARGV TO CREAT AN ARGUMENT PLACEHOLDER CALLED 'folderName'
// ALWAYS HAVE TO START AT INDEX 2. [0] IS NODE, [1] IS FILE SYSTEM PATH
const folderName = process.argv[2] || 'newProject' // SYNTAX FOR DEFAULT VALUE

// SAVE STANDARD HTML MARKUP AS A STRING VARIABLE
const htmlStamp = `<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <script type="text/javascript" src="scripts.js"></script>
</body>
</html>`;

try {
  fs.mkdirSync(folderName); // MAKE-DIRECTORY-SYNC, PASS IN NAME
  // has 3 params (----------FILE-----------)(---DATA---)(---OPTIONS---)
  fs.writeFileSync(`${folderName}/index.html`, htmlStamp); // creates files inside given directory
  fs.writeFileSync(`${folderName}/styles.css`, ""); // creates files inside given directory
  fs.writeFileSync(`${folderName}/scripts.js`, ""); // creates files inside given directory  
} catch (error) {
  console.log(error);
}
