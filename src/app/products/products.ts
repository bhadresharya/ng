export interface Products {
    id: number,
    name: string,
    price: number,
    size: string,
    qty: number,
    image: string,
    description: string
}

export const products = [
    {
        "id": 1,
        "name": "Cheesy-7 Pizza",
        "price": 205,
        "size": "small",
        "qty": 1,
        "image": "cheesy-7-pizza.jpeg",
        "description": "An Exotic Combination of White Mozzarella, Cream White Cheese, Cheddar, Monterey Jack, Cream Orange Cheese, Colby, Orange Cheddar"
    },
    {
        "id": 2,
        "name": "Burn to Hell Pizza",
        "price": 205,
        "size": "small",
        "qty": 1,
        "image": "burn-to-hell-pizza.jpeg",
        "description": "Hot and Garlic Dip, Jalapenos, Mushrooms, Olives and Capsicum"
    },
    {
        "id": 3,
        "name": "Peri Peri Pizza",
        "price": 225,
        "size": "small",
        "qty": 1,
        "image": "peri-peri-pizza.jpeg",
        "description": "Onion, Capsicum, Mushroom, Paneer, Olives with Peri Peri Dip"
    },
    {
        "id": 4,
        "name": "English Retreat Pizza",
        "price": 225,
        "size": "small",
        "qty": 1,
        "image": "english-retreat-pizza.jpeg",
        "description": "Olives, Red Paprika, Tomatoes, Paneer, Capsicum, Cheese, Jalapeno dip"
    }
]