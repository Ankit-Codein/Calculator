const cont = document.querySelector('.container');
const input = document.getElementById('input');
const button = document.querySelectorAll('.button');
const oprators = document.querySelectorAll('.oprator')


let ButtonArray = Array.from(button)
let string = ""

ButtonArray.forEach((Btns) => {
    Btns.addEventListener('click', (e) => {
        if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DE") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == "=") {
            if (!string) return;
            try {
                string = String(eval(string));
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } else {
            string += e.target.innerHTML; 
            input.value = string
        } 
        
    })
    
})