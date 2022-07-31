let form = document.forms[0]
let register = document.querySelector('#register')
let sign = document.querySelector('#sign')
let home = document.querySelector('#home')

let inps = document.querySelectorAll('.inp')
let indexBnt = document.querySelector('.btn')
let nam = document.querySelector('.name')
let user1 = document.querySelector('.user1')
let exit = document.querySelector('.exit')
let mail = document.querySelector('.mail')
let proceed = document.querySelector('.proceed')
let password = document.querySelector('.password')

let users = []

if (register) {
   form.onsubmit = (event) => {
      event.preventDefault()
      submit()
   }


   inps.forEach(inp => {
      indexBnt.onclick = () => {
         if (inp.value.length > 0) {
            console.log(users);
            window.location.href = 'index3.html'
         } else {
            console.log('error');
         }
      }
   })
}

function submit() {
   let user = {
      id: Math.random()
   }

   let fm = new FormData(form)
   fm.forEach((value, key) => {
      user[key] = value
   })

   inps.forEach(inp => {
      if (inp.value.length > 0) {
         users.push(user)
      } else {
         console.log('good');
      }
   })


   localStorage.setItem('user', JSON.stringify(user))
   JSON.parse(localStorage.getItem('user'))

}

if (home) {
   user1.innerHTML = JSON.parse(localStorage.getItem('user')).name || ''

   exit.onclick = () => {
      if (JSON.parse(localStorage.getItem('user'))) {
         window.location.href = 'index2.html'
      } else {
         window.location.href = 'index.html'
      }
   }
}

if (sign) {
   let form = document.forms.form

   form.onsubmit = (event) => {
      event.preventDefault()
   }

   mail.value = JSON.parse(localStorage.getItem('user')).mail || ""
   proceed.onclick = () => {
      if (password.value === JSON.parse(localStorage.getItem('user')).password && mail.value === JSON.parse(localStorage.getItem('user')).mail) {
         window.location.href = 'index3.html'
      }
   }
}