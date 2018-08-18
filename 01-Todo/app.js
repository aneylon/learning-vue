console.log('test')

const todoApp = new Vue({
  el: '#todoApp',
  data: {
    subjects: [],
    products: [],
    newItem: {name: '', quantity: 0}
  },
  methods: {
    addNewItem: function () {
      console.log(typeof Number(this.newItem.quantity))
      this.products.push({
        name: this.newItem.name,
        quantity: Number(this.newItem.quantity)
      })
      this.newItem.name = ''
      this.newItem.quantity = 0
    }
  },
  computed: {
    totalProducts () {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity
      }, 0)
    }
  },
  created(){
    fetch('https://api.myjson.com/bins/x43zw')
      .then(response => response.json())
      .then(json => {
        this.subjects = json.Subjects
      })
    fetch('https://api.myjson.com/bins/74l63')
      .then(response => response.json())
      .then(json => this.products = json.products)
  }
})