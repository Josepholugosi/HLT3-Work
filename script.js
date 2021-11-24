const form = document.getElementById('form')
const name = document.getElementById('nameInput')
const mobile = document.getElementById('mobileInput')
const email = document.getElementById('emailInput')
const country = document.getElementById('country')
const gender = document.getElementById('emailInput')
const errorElement = document.getElementById('error')
const errorElement1 = document.getElementById('error1')
const errorElement2 = document.getElementById('error2')
const errorElement3 = document.getElementById('error3')
const errorElement4 = document.getElementById('error4')


form.addEventListener('submit', (e) =>{
  let messages = []
  if(nameInput.value === '' || nameInput.value === null){
    messages.push ('Please enter your name')
  }



  if (messages.length > 0){
  e.preventDefault()
 errorElement.innerText = messages.join(', ')
}
 
})

form.addEventListener('submit', (e) =>{
  let messages3 = []
if( emailInput.value === null || emailInput.value === ''){
    messages3.push('Please enter your email')
  }


  if (messages3.length > 0){
  e.preventDefault()
 errorElement1.innerText = messages3.join(', ')
}
 
})



  form.addEventListener('submit', (e) =>{
  let messages2 = []
if( mobileInput.value === null || mobileInput.value === ''){
    messages2.push('Please enter your mobile number')
  }


  if (messages2.length > 0){
  e.preventDefault()
 errorElement2.innerText = messages2.join(', ')
}
 
})

 form.addEventListener('submit', (e) =>{
  let messages4 = []
if( country.value === Select ){
    messages4.push('Please select your country')
  }


  if (messages4.length > 0){
  e.preventDefault()
 errorElement3.innerText = messages4.join(', ')
}
 
})

 form.addEventListener('submit', (e) =>{
  let messages5 = []
if( gender.value === null || gender.value === ''){
    messages5.push('Please select your gender')
  }


  if (messages5.length > 0){
  e.preventDefault()
 errorElement4.innerText = messages5.join(', ')
}
 
})