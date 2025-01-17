export const categories = [
  {
    id: 'womens-fashion',
    name: "Women's Fashion",
    description: 'Elegant and trendy fashion for women',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80'
  },
  {
    id: 'mens-fashion',
    name: "Men's Fashion",
    description: 'Stylish and comfortable fashion for men',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80'
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    description: 'Exquisite jewelry and accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80'
  }
];

export const products = [
  // Women's Fashion
  {
    id: 'wf-1',
    name: 'Silk Evening Gown',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80',
    description: 'Elegant silk evening gown with detailed embroidery',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-2',
    name: 'Designer Blazer',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?auto=format&fit=crop&q=80',
    description: 'Tailored designer blazer in classic black',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-3',
    name: 'Summer Floral Dress',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80',
    description: 'Light and breezy floral print summer dress',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-4',
    name: 'High-Waisted Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80',
    description: 'Classic high-waisted denim jeans',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-5',
    name: 'Cashmere Sweater',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    description: 'Luxurious cashmere sweater in soft pink',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-6',
    name: 'Leather Jacket',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80',
    description: 'Classic leather jacket with quilted details',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-7',
    name: 'Pleated Midi Skirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80',
    description: 'Elegant pleated midi skirt in metallic finish',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-8',
    name: 'Silk Blouse',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1604336737487-96c59a5d3a65?auto=format&fit=crop&q=80',
    description: 'Luxurious silk blouse with bow detail',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-9',
    name: 'Wrap Dress',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    description: 'Flattering wrap dress in floral print',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-10',
    name: 'Trench Coat',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1591900947067-851789555ef3?auto=format&fit=crop&q=80',
    description: 'Classic trench coat in beige',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-11',
    name: 'Wide-Leg Pants',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80',
    description: 'Sophisticated wide-leg pants in black',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-12',
    name: 'Knit Cardigan',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
    description: 'Cozy knit cardigan with pearl buttons',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-13',
    name: 'Maxi Dress',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80',
    description: 'Flowing maxi dress in botanical print',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-14',
    name: 'Tailored Shorts',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80',
    description: 'Sophisticated tailored shorts in white',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-15',
    name: 'Pencil Skirt',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&q=80',
    description: 'Classic pencil skirt in navy',
    categoryId: 'womens-fashion'
  },
  {
    id: 'wf-16',
    name: 'Jumpsuit',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80',
    description: 'Elegant jumpsuit with wide legs',
    categoryId: 'womens-fashion'
  },

  // Men's Fashion
  {
    id: 'mf-1',
    name: 'Classic Suit',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80',
    description: 'Timeless classic suit in navy blue',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-2',
    name: 'Leather Jacket',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80',
    description: 'Premium leather jacket for a bold look',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-3',
    name: 'Casual Blazer',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    description: 'Versatile casual blazer in gray',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-4',
    name: 'Slim-Fit Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80',
    description: 'Classic slim-fit jeans in dark wash',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-5',
    name: 'Oxford Shirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80',
    description: 'Classic Oxford shirt in white',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-6',
    name: 'Wool Coat',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80',
    description: 'Sophisticated wool coat in camel',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-7',
    name: 'Chino Pants',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80',
    description: 'Classic chino pants in khaki',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-8',
    name: 'Polo Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80',
    description: 'Classic polo shirt in navy',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-9',
    name: 'Dress Shoes',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80',
    description: 'Elegant leather dress shoes in brown',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-10',
    name: 'Cashmere Sweater',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&q=80',
    description: 'Luxurious cashmere sweater in charcoal',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-11',
    name: 'Denim Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80',
    description: 'Classic denim jacket in light wash',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-12',
    name: 'Dress Pants',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1594938374182-f8830c46b5e7?auto=format&fit=crop&q=80',
    description: 'Tailored dress pants in black',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-13',
    name: 'Henley Shirt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80',
    description: 'Casual henley shirt in gray',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-14',
    name: 'Bomber Jacket',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80',
    description: 'Classic bomber jacket in olive',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-15',
    name: 'Cargo Pants',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80',
    description: 'Functional cargo pants in military green',
    categoryId: 'mens-fashion'
  },
  {
    id: 'mf-16',
    name: 'V-Neck T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    description: 'Essential V-neck t-shirt in white',
    categoryId: 'mens-fashion'
  },

  // Electronics
  {
    id: 'el-1',
    name: 'Smart Watch Pro',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
    description: 'Advanced smartwatch with health tracking',
    categoryId: 'electronics'
  },
  {
    id: 'el-2',
    name: 'Wireless Earbuds',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80',
    description: 'Premium wireless earbuds with noise cancellation',
    categoryId: 'electronics'
  },
  {
    id: 'el-3',
    name: 'Gaming Laptop',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80',
    description: 'High-performance gaming laptop',
    categoryId: 'electronics'
  },
  {
    id: 'el-4',
    name: '4K Smart TV',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80',
    description: '55-inch 4K Smart TV with HDR',
    categoryId: 'electronics'
  },
  {
    id: 'el-5',
    name: 'Smartphone',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80',
    description: 'Latest flagship smartphone',
    categoryId: 'electronics'
  },
  {
    id: 'el-6',
    name: 'Bluetooth Speaker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80',
    description: 'Portable Bluetooth speaker with deep bass',
    categoryId: 'electronics'
  },
  {
    id: 'el-7',
    name: 'Digital Camera',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
    description: 'Professional digital camera with 4K video',
    categoryId: 'electronics'
  },
  {
    id: 'el-8',
    name: 'Gaming Console',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80',
    description: 'Next-gen gaming console',
    categoryId: 'electronics'
  },
  {
    id: 'el-9',
    name: 'Tablet',
    price: 649.99,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80',
    description: 'Powerful tablet with stylus support',
    categoryId: 'electronics'
  },
  {
    id: 'el-10',
    name: 'Smart Home Hub',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80',
    description: 'Central hub for smart home devices',
    categoryId: 'electronics'
  },
  {
    id: 'el-11',
    name: 'Wireless Keyboard',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
    description: 'Ergonomic wireless keyboard',
    categoryId: 'electronics'
  },
  {
    id: 'el-12',
    name: 'External SSD',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&q=80',
    description: '1TB portable external SSD',
    categoryId: 'electronics'
  },
  {
    id: 'el-13',
    name: 'Wireless Mouse',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
    description: 'Precision wireless gaming mouse',
    categoryId: 'electronics'
  },
  {
    id: 'el-14',
    name: 'Monitor',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80',
    description: '27-inch 4K monitor',
    categoryId: 'electronics'
  },
  {
    id: 'el-15',
    name: 'Webcam',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1590739293931-a28a7d675873?auto=format&fit=crop&q=80',
    description: 'HD webcam with microphone',
    categoryId: 'electronics'
  },
  {
    id: 'el-16',
    name: 'Smart Scale',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1576515652031-fc429bab6503?auto=format&fit=crop&q=80',
    description: 'Smart scale with body composition analysis',
    categoryId: 'electronics'
  },

  // Jewelry
  {
    id: 'jw-1',
    name: 'Diamond Ring',
    price: 2999.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
    description: 'Elegant diamond engagement ring',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-2',
    name: 'Gold Necklace',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    description: '18K gold necklace with pendant',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-3',
    name: 'Pearl Earrings',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    description: 'Classic pearl drop earrings',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-4',
    name: 'Silver Bracelet',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80',
    description: 'Sterling silver chain bracelet',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-5',
    name: 'Sapphire Ring',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80',
    description: 'Blue sapphire ring with diamonds',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-6',
    name: 'Diamond Studs',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80',
    description: 'Classic diamond stud earrings',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-7',
    name: 'Rose Gold Watch',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80',
    description: 'Elegant rose gold ladies watch',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-8',
    name: 'Tennis Bracelet',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
    description: 'Diamond tennis bracelet',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-9',
    name: 'Emerald Pendant',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&q=80',
    description: 'Emerald and diamond pendant',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-10',
    name: 'Gold Bangle',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80',
    description: '14K gold bangle bracelet',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-11',
    name: 'Pearl Necklace',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80',
    description: 'Freshwater pearl strand necklace',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-12',
    name: 'Ruby Ring',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
    description: 'Ruby and diamond cocktail ring',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-13',
    name: 'Silver Anklet',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80',
    description: 'Sterling silver charm anklet',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-14',
    name: 'Men\'s Ring',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80',
    description: 'Men\'s tungsten wedding band',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-15',
    name: 'Charm Bracelet',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80',
    description: 'Silver charm bracelet with charms',
    categoryId: 'jewelry'
  },
  {
    id: 'jw-16',
    name: 'Opal Earrings',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    description: 'Australian opal stud earrings',
    categoryId: 'jewelry'
  }
];