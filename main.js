let buttons = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results span")
let input = document.querySelector("#the-input");

// you needed to define the forEach when you work with selectorAll

buttons.forEach(span => {
    // to access to the evens you needed to define the span (Element)
    span.addEventListener("click",callBack);
})

function callBack(Event) {            
        
        if(Event.target.classList.contains("check-item")){
            checkItem();
        }

        if(Event.target.classList.contains("add-item")){
            addItem();
        }

        if(Event.target.classList.contains("delete-item")){
            deleteItem();
        }

        if(Event.target.classList.contains("show-items")){
            showItems();
        }
    }

function checkInput(){
    results.innerHTML = "This Is No Items!"
}

function checkItem() {
    if(input.value !== ''){
        if(localStorage.getItem(input.value)){
            results.innerHTML = `Your item is exist <span>${input.value}</span>`;
        }else{
            results.innerHTML = `Your item is not exist <span>${input.value}</span>`;
        }
    }else{
        checkInput();
    }
}

function addItem() {
    if(input.value != ''){
        localStorage.setItem(input.value,"add-item");
        results.innerHTML = `Your item is added successfully <span>${input.value}</span>`;
    }else{
        checkInput();
    }
}

function deleteItem() {
    if(input.value != ''){
        if(localStorage.getItem(input.value)){
            results.innerHTML = `Your item is deleted successfully <span>${input.value}</span>`;
            results.style.textDecoration = 'line-through';                
            localStorage.removeItem(input.value);
            
        }else{
            results.innerHTML = `Your item is not exist <span>${input.value}</span>`;
        }
    }else{
        checkInput();
    }
}

function showItems() {
    results.innerHTML = '';
    
    if(localStorage.length){
        for(let [key,value] of Object.entries(localStorage)){
            results.innerHTML += `<span>${key}</span> <br>`;
        }
    }else{
        checkInput();
    }
}

function clearInput(){
    input.value = '';
}