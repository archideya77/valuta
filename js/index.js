const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elFormSelect = document.querySelector(".form__select");
const elResult = document.querySelector(".form__result");

elForm.addEventListener('submit',function(evt){
    evt.preventDefault();
    const inputUserSumm = elFormInput.value;
    const ValeuSumm = elFormSelect.value;
    if(ValeuSumm == "dollar"){
    elResult.textContent = `${inputUserSumm*11.022}  ${ValeuSumm}`
    }
    else if(ValeuSumm == "yevro"){
        elResult.textContent = `${inputUserSumm*11.629}  ${ValeuSumm}`
    }
    else if(ValeuSumm == "yuan"){
        elResult.textContent = `${inputUserSumm*1.652}  ${ValeuSumm}`
    }
    else if(ValeuSumm == "rubl"){
        elResult.textContent = `${inputUserSumm* 192.35}  ${ValeuSumm}`
    }
    else if(ValeuSumm == "dinor"){
        elResult.textContent = `${inputUserSumm*3.017,6}  ${ValeuSumm}`
    }
    else if(ValeuSumm == "funt"){
        elResult.textContent = `${inputUserSumm*13.651,63 }  ${ValeuSumm}`
    }
})


