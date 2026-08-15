const express = require("express");
const app = express();

const listings = [
    {
        name: "Oxidised Silver Jhumka",
        price: 599,
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236"
    },
    {
        name: "Antique Oxidised Necklace",
        price: 1299,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
    },
    {
        name: "Oxidised Chandbali Earrings",
        price: 699,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"
    },
    {
        name: "Tribal Oxidised Necklace",
        price: 1499,
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
    },
    {
        name: "Oxidised Silver Ring",
        price: 399,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
    },
    {
        name: "Oxidised Peacock Jhumka",
        price: 749,
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36"
    },
    {
        name: "Antique Silver Kada",
        price: 899,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
        name: "Oxidised Floral Earrings",
        price: 549,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584"
    },
    {
        name: "Boho Oxidised Necklace Set",
        price: 1799,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    },
    {
        name: "Oxidised Lotus Pendant",
        price: 649,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a"
    },
    {
        name: "Silver Oxidised Stud Earrings",
        price: 349,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0"
    },
    {
        name: "Oxidised Elephant Necklace",
        price: 1199,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e"
    },
    {
        name: "Oxidised Long Jhumka",
        price: 799,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59"
    },
    {
        name: "Handcrafted Oxidised Choker",
        price: 1399,
        image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8"
    },
    {
        name: "Oxidised Coin Necklace",
        price: 999,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
        name: "Oxidised Silver Anklet",
        price: 699,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0"
    },
    {
        name: "Traditional Oxidised Earrings",
        price: 599,
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236"
    },
    {
        name: "Oxidised Temple Necklace",
        price: 1599,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
    },
    {
        name: "Bohemian Oxidised Ring",
        price: 449,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
    },
    {
        name: "Oxidised Leaf Earrings",
        price: 499,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"
    },
    {
        name: "Oxidised Silver Bracelet",
        price: 799,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
        name: "Tribal Oxidised Jhumka",
        price: 699,
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36"
    },
    {
        name: "Oxidised Moon Pendant",
        price: 599,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a"
    },
    {
        name: "Antique Oxidised Kada Set",
        price: 1099,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
        name: "Oxidised Floral Choker",
        price: 1299,
        image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8"
    },
    {
        name: "Silver Oxidised Hoop Earrings",
        price: 449,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584"
    },
    {
        name: "Oxidised Rajasthani Necklace",
        price: 1699,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e"
    },
    {
        name: "Oxidised Sunflower Ring",
        price: 399,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
    },
    {
        name: "Oxidised Ghungroo Anklet",
        price: 749,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0"
    },
    {
        name: "Statement Oxidised Necklace",
        price: 1899,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    },
    {
        name: "Oxidised Drop Earrings",
        price: 549,
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236"
    },
    {
        name: "Vintage Oxidised Pendant",
        price: 699,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a"
    },
    {
        name: "Oxidised Tribal Bracelet",
        price: 849,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
        name: "Oxidised Peacock Necklace",
        price: 1499,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
    },
    {
        name: "Ethnic Oxidised Jhumka Set",
        price: 899,
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36"
    },
    {
        name: "Oxidised Star Earrings",
        price: 499,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"
    },
    {
        name: "Handmade Oxidised Choker Set",
        price: 1599,
        image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8"
    },
    {
        name: "Oxidised Silver Toe Rings",
        price: 299,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
    },
    {
        name: "Antique Tribal Earrings",
        price: 649,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584"
    },
    {
        name: "Oxidised Multi-Layer Necklace",
        price: 1799,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    }
];

module.exports = {data: listings};