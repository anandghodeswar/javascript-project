// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const cssClass =  e.currentTarget.classList;
        if(cssClass.contains("decrease")) {
            count--;            
        }
        else if(cssClass.contains("increase")){
            count++;            
        }
        else{
            count = 0;
        }

        if(count > 0) {
            value.classList.add("text-success");
        } else if (count < 0) {
            value.classList.add("text-danger");
        } else {
            value.classList.remove("text-danger");
            value.classList.remove("text-success");
        }

        value.textContent = count;
    })
});

