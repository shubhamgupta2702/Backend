// Nodejs is JS Runtime Environment.(wrapper on Chrome V8 engine).

import * as fs from "node:fs";

fs.writeFile("message.txt", "Shubham G", (err) => {
  if (err) console.log(err);
  console.log("File has been saved.");
});

fs.appendFile("message.txt", "Btech(IT) - HNBGU-27", (err) => {
  if (err) console.log(err);
  console.log("File appended successfully");
});

fs.rename("message.txt", "myInfo.txt", (err) => {
  if (!err) console.log("File renamed successfully");
  else console.log(err);
});

fs.copyFile("myInfo.txt", "Information.txt", (err) => {
  if (err) console.log(err);
  else console.log("File Copied Successfully");
});

fs.unlink("myInfo.txt", (err) => {
  if (err) console.log(err.message);
  else console.log("myInfo.txt -> File Deleted Successfully");
});

fs.readFile('Information.txt', 'utf8', (err, data) => {
  if(err) console.log(err.message);
  else console.log(data);
  
})