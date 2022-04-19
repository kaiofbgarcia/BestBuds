var products = [
    {
        "photo": "img/Skunk.jpg",
        "name": "Baseado - Skunk",
        "price": 150,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/PurpleHaze.jpg",
        "name": "Baseado - Purple Haze",
        "price": 150,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/BlueDream.jpg",
        "name": "Baseado - Blue Dream",
        "price": 180,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/SuperLemonHaze.jpg",
        "name": "Baseado - Super Lemon Haze",
        "price": 180,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/AmneziaHaze.jpg",
        "name": "Baseado - Amnezia Haze",
        "price": 200,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/CinzasBob.jpg",
        "name": "Baseado - Cinzas do Bob",
        "price": 220,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/CBD.jpg",
        "name": "CBD",
        "price": 120,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Cigarro.jpg",
        "name": "Cigarro",
        "price": 8,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Bong.jpg",
        "name": "Bong Squadafum",
        "price": 200,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Chocolate.jpg",
        "name": "Brisadeiro / Chocolate",
        "price": 45,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Rosquinha.jpg",
        "name": "Rosquinha",
        "price": 40,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Confete.jpg",
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
