

let result= document.querySelector('.calc-screen')
let body= document.querySelector('body')
let slider =document.querySelector('.slider')
let firstTheme =document.querySelector('.firstTheme')
let secondTheme =document.querySelector('.secondTheme')
let thirdTheme =document.querySelector('.thirdTheme')


const themes = ["theme2", "theme3"]
console.log(result)

function inputNumber(val){
    result.value += val;
}

function equal(){

    if(result.value === ''){
        result.value === ''
    } else {

        let input= result.value;
        let output= eval(input);
        result.value= output;
}
    }
    

function clr(){
    document.querySelector('.calc-screen').value= '';
}

function del(){
   let delLastcharacter = result.value.slice(0, result.value.length-1)
   result.value =delLastcharacter;
}


const theme= localStorage.getItem('theme')


const defaultTheme = () =>{
    if (theme === 'light'){
        body.classList.remove("theme2")
        body.classList.remove("theme3")
    }
}


defaultTheme()



firstTheme.addEventListener('click', ()=>{
    defaultTheme()
})

secondTheme.addEventListener('click', ()=>{
    body.classList.add('theme2')  
    body.classList.remove('theme3')
})

thirdTheme.addEventListener('click', ()=>{
    body.classList.add('theme3')  
    body.classList.remove('theme2')
})


