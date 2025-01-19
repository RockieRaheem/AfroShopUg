export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    } 
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/Jordan 4 Pink White.jpg",
    name: "Jordan 4 Pink White",
    rating: {
      stars: 4.5,
      count: 87
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "sneakers",
      "4"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/Jordan 4 colored.jpg",
    name: "Jordan 4 colored",
    rating: {
      stars: 4,
      count: 127
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "sneakers",
      "4"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/Air Force 1 White.jpg",
    name: "Air Force 1 White",
    rating: {
      stars: 4.5,
      count: 56
    },
    price: 110000,
    "keywords": [
      "Nike",
      "sneakers",
      "Air Force 1"
    ],
    type: "clothing",
    sizeChartLink: "Air Jordan 4.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/Air Jordan 4.jpg",
    name: "Air Jordan 4",
    rating: {
      stars: 5,
      count: 2197
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "sneakers",
      "4"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/Alexander McQueen Black White.jpg",
    name: "Alexander McQueen Black White",
    rating: {
      stars: 4,
      count: 37
    },
    price: 110000,
    "keywords": [
      "Alexander",
      "McQueen"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/Dr Martens.jpg",
    name: "Dr Martens",
    rating: {
      stars: 4.5,
      count: 175
    },
    price: 110000,
    keywords: [
      "Dr",
      "Mertens",
      "Dr Mertens"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/Jordan 1 Red White.jpg",
    name: "Jordan 1 Red White",
    rating: {
      stars: 4.5,
      count: 317
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "sneakers",
      "1"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/Jordan 6 Retro White Black.jpg",
    name: "Jordan 6 Retro White Black",
    rating: {
      stars: 4.5,
      count: 144
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "retro",
      "6"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/Loius Vuitton Grey Blue White.jpg",
    name: "Loius Vuitton Grey Blue White",
    rating: {
      stars: 4.5,
      count: 305
    },
    price: 110000,
    "keywords": [
      "Loius Vuitton",
      "Vuitton",
      "LV"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/Jordan 6 Retro Grey Blue White.jpg",
    name: "Jordan 6 Retro Grey Blue White",
    rating: {
      stars: 4,
      count: 89
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "Retro",
      "6"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/Nike Jordan 1 Blue White.jpg",
    name: "Nike Jordan 1 Blue White",
    rating: {
      stars: 4.5,
      count: 235
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "Nike",
      "1"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/Nike Jordan One Black White.jpg",
    name: "Nike Jordan One Black White",
    rating: {
      stars: 4.5,
      count: 30
    },
    price: 110000,
    "keywords": [
      "Jordan",
      "Nike",
      "1"
    ]
  }
];