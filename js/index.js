let form=document.querySelector('form')
let nom=document.querySelector('input[type=text]')
let tel=document.querySelector('input[type=tel]')
let errornom=document.querySelector('.errornom')
let errortel=document.querySelector('.errortel')

form.addEventListener('submit',function(e){
    e.preventDefault()

    if(nom.value.trim()===''){
        errornom.textContent="Ce champ est obligatoir"
    }else{
        errornom.textContent=""
    }

    if(tel.value.trim()===''){
        errortel.textContent="Ce champ est obligatoir"
    }else{
        errortel.textContent=""

    }
})
