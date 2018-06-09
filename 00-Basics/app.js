var app = new Vue({
  el: '#app',
  data: {
    message: 'Hey Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Loaded page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    yes: true,
    no: false
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    things: [
      {text: 'thine one'},
      {text: 'thine two'},
      {text: 'thine three'}
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message : 'Hey Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hey Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    thingList: [
      { id: 0, text: 'thing a'},
      { id: 1, text: 'thing b'},
      { id: 2, text: 'thing c'}
    ]
  }
})