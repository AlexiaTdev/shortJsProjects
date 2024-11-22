const confObject = [
    { "field": "email", "type": "email", "required": true },
    { "field": "password", "type": "password", "required": true, "minLength": 6 }
    ]

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const emailRegexExp =new RegExp(emailRegex, 'g');


//valid email example : test@gmail.com
//valid pwd example : -Secr3t.


function createFormfromData(objectData){
    let parentNode = document.getElementById('formValidation');
    
    objectData.map((element) =>{
        let elementNode = document.createElement('input');
        elementNode.placeholder= element.field;
        elementNode.id=element.field;
        elementNode.type= element.type;
        elementNode.required= element.required;
        parentNode.appendChild(elementNode);
    })


}

function useValidInput(){
    confObject.map((element) =>{
        let elementNode = document.getElementById(element.field);
        (elementNode.type==="email" && elementNode.value=='')? 
            alert('Email is required')
        : (elementNode.type==="email" && !emailRegex.test(elementNode.value))?
            alert('Email is not valid')
        : (elementNode.type==="password" && elementNode.value<=element.minLength)?
            alert('Password must be at least 6 characters' + elementNode.value)
        : console.log('valid input')

        customValidationRules(elementNode);

    })
}

function customValidationRules(elementNode){
    const pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(elementNode.type==="password" && !pwdRegex.test(elementNode.value)){
        alert('Password is not valid')
    }

}

createFormfromData(confObject);