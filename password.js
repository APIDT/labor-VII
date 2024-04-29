const prompt = require("prompt-sync")()
const bcrypt = require('bcrypt');

console.log("no fewer than 9 characters")
console.log("==================================")
const password = prompt("Enter :")

function checkPass(password){
  if(password.length > 8){
    return true
  }
}

async function hashPassword(Password){
  switch(checkPass(password)){
    case true:
      const hesh = await bcrypt.hash(Password, 5)
      console.log("Hash Password: " + hesh)
      checkHash(password, hesh)
      break
    default: console.log("no fewer than 9 characters")
  }
}

async function checkHash(x, y){
const ch = await bcrypt.compare(x, y)
switch(ch){
  case true : console.log("success");
  break;
  default: console.log("Error")
} 
}

hashPassword(password)

module.exports={
  hashPassword, checkHash, checkPass, password, hashPassword
}
