function passwordgenerator(){


let lenght = document.getElementById('lenght')
let upper = document.getElementById('Uppercase')
let Lower = document.getElementById('Lowercase')
let Symbols = document.getElementById('Symbols')
let Number = document.getElementById('Numbers')
let display = document.getElementById('userInp')
let type1 = document.getElementById('error')
let type = document.getElementById('error2')


let lenghtvalue = lenght.value
let uppervalue = upper.checked
let lowervalue = Lower.checked
let sumbolvalue = Symbols.checked
let numbervalue = Number.checked

if(lenghtvalue === ""){
    type1.innerText = "PLEASE ENTER THE LENGTH OF PASSWORD"

}
else{
    type1.innerText = ""
    let char = ""

if(uppervalue) char +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(lowervalue) char +="abcdefghijklmnopqrstuvwxyz";
if(sumbolvalue) char +="!@#$%^&*()_+[]{}|;:',.<>?"
if(numbervalue) char +="0123456789"


if (char === ""){
     
    type.innerText="PLEASE SELECT AT LEAST ON CHAR TYPE"

}
    
      let password = ""

    for(let i =0 ; i < lenghtvalue; i++){
    
        
    
        const randompassword =Math.floor (Math.random() * char.length) 
        
        password += char[randompassword]
        
    }
    display.innerText=password
}

    
    
}