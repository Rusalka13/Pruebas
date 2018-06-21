var inputValue = document.getElementById("myInput");
function suma(){
  if (2+2){
    alert('4');
  }
}

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hola soy un Vue.js'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  