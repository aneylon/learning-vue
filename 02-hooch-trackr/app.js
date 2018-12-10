console.log('trackr it')

Vue.component('list-item', {
  props: ['item'],
  template: '<li> {{ item.name }} : {{ item.rating}} </li>'
})

var trackr = new Vue({
  el: '#trackr',
  data: {
    appName: 'Hooch Trackr',
    searchString: '',
    entries: [
      { id: 0, name: '4 Roses', description: '', rating: 3 },
      { id: 1, name: 'Jim Beam', description: '', rating: 2 }
    ]
  },
  methods: {
    searchEntries: function() {
      console.log('searching entries')
    }
  }
})