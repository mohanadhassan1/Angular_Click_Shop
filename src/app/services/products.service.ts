import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList: IProduct[] = [];
  categoryList: ICategory[] = [];
  filterProduct: IProduct[] = [];
  productListFilter: IProduct[] = [];

  constructor() {
    
    this.productList = [
      {
        id: 1,
        name: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        quantity: 94,
        brand: "Apple",
        categoryId: 1,
        img: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 2,
        name: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        quantity: 34,
        brand: "Apple",
        categoryId: 1,
        img: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 3,
        name: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        quantity: 36,
        brand: "Samsung",
        categoryId: 1,
        img: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 4,
        name: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        quantity: 123,
        brand: "OPPO",
        categoryId: 1,
        img: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 5,
        name: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        quantity: 32,
        brand: "Huawei",
        categoryId: 1,
        img: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 6,
        name: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        quantity: 83,
        brand: "Apple",
        categoryId: 2,
        img: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        IsPurshased: true
      },
      {
        id: 7,
        name: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        quantity: 50,
        brand: "Samsung",
        categoryId: 2,
        img: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 8,
        name: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        quantity: 68,
        brand: "Microsoft Surface",
        categoryId: 2,
        img: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 9,
        name: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        quantity: 96,
        brand: "Infinix",
        categoryId: 2,
        img: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 10,
        name: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        quantity: 89,
        brand: "HP Pavilion",
        categoryId: 2,
        img: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
        IsPurshased: true
      },
      {
        id: 11,
        name: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        quantity: 65,
        brand: "Impression of Acqua Di Gio",
        categoryId: 3,
        img: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 12,
        name: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        quantity: 52,
        brand: "Royal_Mirage",
        categoryId: 3,
        img: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 13,
        name: "Fog Scent Xpressio Perfume",
        description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        quantity: 61,
        brand: "Fog Scent Xpressio",
        categoryId: 3,
        img: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
        IsPurshased: true
      },
      {
        id: 14,
        name: "Non-Alcoholic Concentrated Perfume Oil",
        description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        quantity: 114,
        brand: "Al Munakh",
        categoryId: 3,
        img: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 15,
        name: "Eau De Perfume Spray",
        description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        quantity: 105,
        brand: "Lord - Al-Rehab",
        categoryId: 3,
        img: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 16,
        name: "Hyaluronic Acid Serum",
        description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        discountPercentage: 13.31,
        rating: 4.83,
        quantity: 110,
        brand: "L'Oreal Paris",
        categoryId: 4,
        img: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 17,
        name: "Tree Oil 30ml",
        description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        price: 12,
        discountPercentage: 4.09,
        rating: 4.52,
        quantity: 78,
        brand: "Hemani Tea",
        categoryId: 4,
        img: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 18,
        name: "Oil Free Moisturizer 100ml",
        description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        price: 40,
        discountPercentage: 13.1,
        rating: 4.56,
        quantity: 88,
        brand: "Dermive",
        categoryId: 4,
        img: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 19,
        name: "Skin Beauty Serum.",
        description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        price: 46,
        discountPercentage: 10.68,
        rating: 4.42,
        quantity: 54,
        brand: "ROREC White Rice",
        categoryId: 4,
        img: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 20,
        name: "Freckle Treatment Cream- 15gm",
        description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        discountPercentage: 16.99,
        rating: 4.06,
        quantity: 140,
        brand: "Fair & Clear",
        categoryId: 4,
        img: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 21,
        name: "- Daal Masoor 500 grams",
        description: "Fine quality Branded Product Keep in a cool and dry place",
        price: 20,
        discountPercentage: 4.81,
        rating: 4.44,
        quantity: 133,
        brand: "Saaf & Khaas",
        categoryId: 5,
        img: "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
        IsPurshased: true
      },
      {
        id: 22,
        name: "Elbow Macaroni - 400 gm",
        description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        price: 14,
        discountPercentage: 15.58,
        rating: 4.57,
        quantity: 146,
        brand: "Bake Parlor Big",
        categoryId: 5,
        img: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 23,
        name: "Orange Essence Food Flavou",
        description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        quantity: 26,
        brand: "Baking Food Items",
        categoryId: 5,
        img: "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 24,
        name: "cereals muesli fruit nuts",
        description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
        quantity: 113,
        brand: "fauji",
        categoryId: 5,
        img: "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 25,
        name: "Gulab Powder 50 Gram",
        description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        price: 70,
        discountPercentage: 13.58,
        rating: 4.87,
        quantity: 47,
        brand: "Dry Rose",
        categoryId: 5,
        img: "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 26,
        name: "Plant Hanger For Home",
        description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        quantity: 131,
        brand: "Boho Decor",
        categoryId: 6,
        img: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 27,
        name: "Flying Wooden Bird",
        description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        quantity: 17,
        brand: "Flying Wooden",
        categoryId: 6,
        img: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        IsPurshased: true
      },
      {
        id: 28,
        name: "3D Embellishment Art Lamp",
        description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        quantity: 54,
        brand: "LED Lights",
        categoryId: 6,
        img: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        IsPurshased: true
      },
      {
        id: 29,
        name: "Handcraft Chinese style",
        description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        quantity: 7,
        brand: "luxury palace",
        categoryId: 6,
        img: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        IsPurshased: true
      },
      {
        id: 30,
        name: "Key Holder",
        description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        quantity: 54,
        brand: "Golden",
        categoryId: 6,
        img: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        IsPurshased: true
      }
    ]


    this.categoryList = [
      {
        id: 1,
        name: "Smartphones"
      },
      {
        id: 2,
        name: "Laptops"
      },
      {
        id: 3,
        name: "fragrances"
      },
      {
        id: 4,
        name: "skincare"
      },
      {
        id: 5,
        name: "groceries"
      },
      {
        id: 6,
        name: "home-decoration"
      }
    ]

  }

  productListFun() {
    return this.productList;
  }

  categoryListFun() {
    return this.categoryList;
  }

  buyFun(prd: IProduct) {
    prd.quantity--;
    prd.IsPurshased = false;
  }

  searchByPrice(filterValue: string): IProduct[] {
    return this.productList.filter((product: IProduct) => product.price.toString().includes(filterValue))
  }

  selectFun(filterValue: string): IProduct[] {
    const categoryyId = parseInt(filterValue, 10)
    return this.productList.filter((product: IProduct) => product.categoryId === categoryyId)
  }


  getProductById(prdID: number): IProduct | undefined {
    return this.productList.find(product => product.id == prdID);
  }

  getProductByIdList(): number[] {
    return this.productList.map(product => product.id)
  }

}
