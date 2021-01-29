import bcrypt from 'bcryptjs';

export default {
  users: [
    {
      name: 'Chaabani',
      email: 'chaabani.mjs@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Boughdiri',
      email: 'anis.boughdiri1@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Robe Chanel',
        category: 'Robe',
        image: '/images/chanel.jpg',
        price: 3000 ,
        countInStock: 12,
        brand: ' Chanel',
        rating: 4.9,
        numReviews: 200
    
      },
      {
        
        name: 'Robe Shirt',
        category: 'Robes',
        image: '/images/Gucci.jpg',
        price: 2800 ,
        countInStock: 12,
        brand: ' Nike',
        rating: 4.2,
        numReviews: 145
      },
      {
       
        name: 'Robe Dior Pants',
        category: 'Robes',
        image: '/images/dior.jpg',
        price: 5600,
        countInStock: 12,
        brand: ' Dior',
        rating: 4.5,
        numReviews: 27
      }, {
       
        name: 'robe Louis Vuitton',
        category: 'Robes',
        image: '/images/Louis-Vuitton.jpg',
        price: 8899,
        countInStock: 12,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 8
      },
      {
        
        name: 'Robe Prada',
        category: 'Robes',
        image: '/images/prada.jpg',
        price: 2900,
        brand: ' Prada',
        rating: 4.5,
        numReviews: 23
      },
      {
      
        name: 'Robe hermès',
        category: 'Robes',
        image: '/images/hermes.jpg',
        price: 2900,
        countInStock: 12,
        brand: ' Hermès',
        rating: 4.5,
        numReviews: 8
    }
    ]
  }