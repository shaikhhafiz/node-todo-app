const exec = require('child_process').exec;
const os = require('os');

// Run command depending on the OS
if (os.type() === 'Linux') 
   exec("NODE_ENV=env/prod node src/app/app.js"); 
else if (os.type() === 'Darwin') 
   exec(""); //TODO set NODE_ENV for darwin later 
else if (os.type() === 'Windows_NT') 
   exec("SET NODE_ENV=env/prod& node src/app/app.js");
else
   throw new Error("Unsupported OS found: " + os.type());