var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Baseado - Skunk",
        "price": 150,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Baseado - Purple Haze",
        "price": 150,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Baseado - Blue Dream",
        "price": 180,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Baseado - Super Lemon Haze",
        "price": 180,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Baseado - Amnezia Haze",
        "price": 200,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Baseado - Cinzas do Bob",
        "price": 220,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "CBD",
        "price": 120,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Cigarro",
        "price": 8,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Bong Squadafum",
        "price": 200,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Brisadeiro / Chocolate",
        "price": 45,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Rosquinha",
        "price": 40,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Confetes",
        "price": 25,
        "active": false,
        "quantity": 1
    }
];

const SelfServiceMachine = {
data() {
    return {
        products: window.products,
        orderTotal: 0
    }
},
methods: {
    toggleActive: function(item){
        item.active = !item.active;
    },
    total: function(){
        var total = 0;
        this.products.forEach(function(item){
            if (item.active){
                total+= item.price * item.quantity;
            }
        });
       return total.toFixed(2);
    }
}
};

Vue.createApp(SelfServiceMachine).mount('#app');
