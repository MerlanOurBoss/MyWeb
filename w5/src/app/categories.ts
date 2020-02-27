import { Category} from './Category';

export const categories: Category[]  = [
  {
  id: 1,
  name: 'Women\'s clothes',
  products: [
    {
      id: 1,
      name: 'Woman\'s T-shirt',
      img: 'https://ae01.alicdn.com/kf/Hc2c80eb57fb042fb9934bf8d8765a0ef2/Harajuku.jpg',
      rating: '4/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://aliexpress.ru/item/4000523981274.html?spm=a2g0o.productlist.0.0.32987db3g1O87T&algo_pvid=6c90ec0b-77e7-4baf-8726-b679492db55a&algo_expid=6c90ec0b-77e7-4baf-8726-b679492db55a-0&btsid=0ab50f4915820397112471186ea12d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      description: 'Harajuku Women Long Sleeve Striped T-shirt Plus Size Korean Style Ladies Clothing Ladies T-shirt Camisas Mujer 2020'
    },
    {
      id: 2,
      name: 'Woman\'s Shirt',
      img: 'https://ae01.alicdn.com/kf/HTB1jpuXbdzvK1RkSnfoq6zMwVXaO/2020.jpg',
      rating: '5/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://aliexpress.ru/item/32976103493.html?spm=a2g0o.productlist.0.0.32987db3g1O87T&algo_pvid=6c90ec0b-77e7-4baf-8726-b679492db55a&algo_expid=6c90ec0b-77e7-4baf-8726-b679492db55a-1&btsid=0ab50f4915820397112471186ea12d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      description: 'Spring 2020 Fashion Women Shirt Solid Square Long Sleeve Tops Autumn Women Long Bodycon Shirt Mujer Pullover'
    },
    {
      id: 3,
      name: 'Woman\'s short t-shirts',
      img: 'https://ae01.alicdn.com/kf/HTB1qb3CnyCYBuNkHFCcq6AHtVXaY/-.jpg',
      rating: '4/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://aliexpress.ru/item/32884791909.html?spm=a2g0o.productlist.0.0.32987db3g1O87T&algo_pvid=6c90ec0b-77e7-4baf-8726-b679492db55a&algo_expid=6c90ec0b-77e7-4baf-8726-b679492db55a-2&btsid=0ab50f4915820397112471186ea12d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      description: 'Casual Women Transparent Short T-shirts with Boat Neck Short Sleeve 2018 Hot Sale'
    },
    {
      id: 4,
      name: 'Women\'s scarf',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/Hbc0b21797b074bfaa9e86a34df8bf12cu/Designer-2019-knitted-spring-winter-women-scarf-plaid-warm-cashmere-scarves-shawls-luxury-brand-neck-bandana.jpg',
      rating: '4.5/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/32852747923.html?spm=a2g01.12602323.fdpcl001.1.23ee753fwuLO4q&gps-id=5589723&scm=1007.23880.125255.0&scm_id=1007.23880.125255.0&scm-url=1007.23880.125255.0&pvid=32819612-6ff2-4de7-b80a-447ce3726b73',
      // tslint:disable-next-line:max-line-length
      description: 'Designer 2019 knitted spring winter women scarf plaid warm cashmere scarves shawls luxury brand neck bandana pashmina lady wrap'
    },
    {
      id: 5,
      name: 'Red Dress',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/HTB13qdoClmWBuNkSndVq6AsApXaL/Sexy-Women-Multiway-Wrap-Convertible-Boho-Maxi-Club-Red-Dress-Bandage-Long-Dress-Party-Bridesmaids-Infinity.jpg',
      rating: '5/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/32920674196.html?spm=a2g01.12597576.p99adbb.13.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5c232ff-c5e9-401e-a66a-65ea88600410',
      // tslint:disable-next-line:max-line-length
      description: 'Sexy Women Multiway Wrap Convertible Boho Maxi Club Red Dress Bandage Long Dress Party Bridesmaids Infinity Robe Longue Femme'
    },
    {
      id: 6,
      name: 'Body Suit',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/H2476f15364644ee59812e770d14118faw/YUMDO-Sexy-Women-s-Full-BodyShaper-Thong-Convertible-Seamless-U-Plunge-Cup-Body-Suit-Backless-Invisible.jpg',
      rating: '4.6/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/32776949077.html?spm=a2g01.12597576.p99adbb.14.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5c232ff-c5e9-401e-a66a-65ea88600410',
      // tslint:disable-next-line:max-line-length
      description: 'YUMDO Sexy Women\'s Full BodyShaper Thong Convertible Seamless U Plunge Cup Body Suit Backless Invisible Push Up Bra Bodysuit'
    },
    {
      id: 7,
      name: 'Silk Pajama',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/HTB1plYEK4TpK1RjSZR0q6zEwXXan/Half-Sleeve-Robe-Women-Faux-Silk-Pajama-Sexy-Night-Dress-Nighties-Nightgown-Nightdress-Sleepwear-Nightwear-Nightshirt.jpg',
      rating: '4.8/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/32982584987.html?spm=a2g01.12597576.p99adbb.16.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5c232ff-c5e9-401e-a66a-65ea88600410',
      // tslint:disable-next-line:max-line-length
      description: 'Half Sleeve Robe Women Faux Silk Pajama Sexy Night Dress Nighties Nightgown Nightdress Sleepwear Nightwear Nightshirt Bathrobe'
    },
    {
      id: 8,
      name: 'Coat',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/H8e58adaae7504086b1dbfb56f3c2098fN/Bella-Philosophy-2019-Women-Mink-Faux-Fur-Coat-Solid-Female-Turn-Down-Collar-Winter-Warm-Fake.jpg',
      rating: '4.3/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/4000330259661.html?spm=a2g01.12597576.p99adbb.26.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5c232ff-c5e9-401e-a66a-65ea88600410',
      // tslint:disable-next-line:max-line-length
      description: 'Bella Philosophy 2019 Women Mink Faux Fur Coat Solid Female Turn Down Collar Winter Warm Fake Fur Lady Coat Casual Jacket'
    },
    {
      id: 9,
      name: 'Women shirts',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/H2ee47bd960cf4697ac59ca2fcc463f051/Special-Offer-Hot-Sale-Korean2019-autumn-solid-color-vintage-new-women-shirts-puff-sleeve-square-sexy.jpg',
      rating: '3/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/4000160669404.html?spm=a2g01.12597576.p99adbb.31.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5c232ff-c5e9-401e-a66a-65ea88600410',
      // tslint:disable-next-line:max-line-length
      description: 'Special Offer Hot Sale Korean2019 autumn solid color vintage new women shirts puff sleeve square sexy small V-neck Slim blouse'
    },
    {
      id: 10,
      name: ' Bubble Jacket',
      // tslint:disable-next-line:max-line-length
      img: 'https://ae01.alicdn.com/kf/H4614c9bf07ea4acb9b9bf774963b68bcQ/FORERUN-8-Colors-Oversized-Bubble-Jacket-Women-Winter-Puffer-Coat-Stand-Collar-Mint-Green-Jackets-Thicken.jpg',
      rating: '5/5',
      // tslint:disable-next-line:max-line-length
      link: 'https://www.aliexpress.com/item/4000322688114.html?spm=a2g01.12597576.p99adbb.56.21a56501ChC5T4&gps-id=7314819&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=36b1c18c-d854-4a5a-8820-3631d0008359',
      // tslint:disable-next-line:max-line-length
      description: 'FORERUN 8 Colors Oversized Bubble Jacket Women Winter Puffer Coat Stand Collar Mint Green Jackets Thicken Parka Winterjas Dames'
    },
  ]
},
{
  id: 2,
    name: 'Men\'s clothes',
  products: [
  {
    id: 1,
    name: 'Men\'s walking shoes',
    img: 'https://ae01.alicdn.com/kf/H95d6eceb541e4503b506e58fcef0e956f/ASICS-GEL-MOYA.jpeg_640x640.jpeg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/4000075652303.html?spm=a2g01.12597576.p99adbb.13.1722124aPigRaX&gps-id=7315995&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=4157890c-3476-420b-86c5-fff0d98bc6c5',
    // tslint:disable-next-line:max-line-length
    description: 'fashionable men\'s casual shoes; mesh breathable sneakers; Men\'s walking shoes; New comfortable light shoes; big size 47'
  },
  {
    id: 2,
    name: 'Men\'s Watch',
    img: 'https://ae01.alicdn.com/kf/Hd7be328c51bc40f6855c1814376b9a99Y/-.jpg',
    rating: '3/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/4000272014043.html?spm=a2g0o.home.15002.2.bbea1b86J4qF8R&gps-id=pcJustForYou&scm=1007.13562.158406.0&scm_id=1007.13562.158406.0&scm-url=1007.13562.158406.0&pvid=2266390f-c761-437e-8540-6d4aa765b649&_t=gps-id:pcJustForYou,scm-url:1007.13562.158406.0,pvid:2266390f-c761-437e-8540-6d4aa765b649,tpp_buckets:668%230%23131923%2318_668%23808%234093%2393_668%23888%233325%233',
    description: 'LED Men\'s Sports Watch with Rubber Strap, Men\'s Military Wristwatch, Hodinky Ceasuri Men\'s Watch'
  },
  {
    id: 3,
    name: 'Men\'s sweatshirt',
    img: 'https://ae01.alicdn.com/kf/H5da0895450a8417885f1dc36cb175ccbw/Harajuku-kodak.png',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/4000270242636.html?spm=a2g01.12616982.tplist001.3.703972c3pohbQy&gps-id=5950812&scm=1007.23961.125497.0&scm_id=1007.23961.125497.0&scm-url=1007.23961.125497.0&pvid=e588651f-7bf0-4009-b822-fa6e7350b53a',
    description: 'Quality Brand Men Hoody 2019 Autumn Hip Hop Men Streetwear Streetwear Men Pullover Hoodies Men Solid Color Hoody'
  },
  {
    id: 4,
    name: 'Joggers',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/Hc3df675a8b2c4dabbc63e45508f90dc1v/HEFLASHOR-2020-New-Autumn-Winter-Mens-Sports-Pants-For-Casual-Sweatpants-Hip-Hop-Pants-Streetwear-Trousers.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000310102488.html?spm=a2g0o.productlist.0.0.13351a97PSqEKq&algo_pvid=362cf14f-fdb9-40d6-9cf7-ee45aacf53fb&algo_expid=362cf14f-fdb9-40d6-9cf7-ee45aacf53fb-5&btsid=0be3746c15820410434122329ea8a6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'HEFLASHOR 2020 New Autumn Winter Mens Sports Pants For Casual Sweatpants Hip Hop Pants Streetwear Trousers Men Cashmere Joggers\n'
  },
  {
    id: 5,
    name: 'Coat',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H994dc95a6cac4d919d1b23067f09c8aff/Kenntrice-Spring-Autumn-Brand-Leather-Jacket-Men-Slim-Short-Stand-Collar-Jaqueta-Couro-Bomber-Jacket-Faux.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32230873297.html?spm=a2g0o.productlist.0.0.13351a97PSqEKq&algo_pvid=362cf14f-fdb9-40d6-9cf7-ee45aacf53fb&algo_expid=362cf14f-fdb9-40d6-9cf7-ee45aacf53fb-6&btsid=0be3746c15820410434122329ea8a6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Kenntrice Spring Autumn Brand Leather Jacket Men Slim Short Stand Collar Jaqueta Couro Bomber Jacket Faux Leather Fur Coat Suede'
  },
  {
    id: 6,
    name: ' Jacket ',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H7554d06090d0419cb0f7edf40ea6faa7Y/Men-s-Blazer-Autumn-Winter-Casual-Corduroy-Slim-Long-Sleeve-Coat-Suit-Jacket-Blazer-tops-Mens.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000284680670.html?spm=a2g0o.productlist.0.0.6aac74e9LZGwnm&algo_pvid=82ebb1a9-04fc-4578-8c90-6ca9ca068899&algo_expid=82ebb1a9-04fc-4578-8c90-6ca9ca068899-0&btsid=0ab6fa8115820412420014024e962b&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Men\'s Blazer Autumn Winter Casual Corduroy Slim Long Sleeve Coat Suit Jacket Blazer tops Mens high quality Coat Blouse New style'
  },
  {
    id: 7,
    name: 'Pants',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H321a17499da44be6b87e41e8cb92689bs/Cool-Men-Casual-Slim-Fit-Plaid-Print-Fitness-flexible-men-pants-2019-Breathable-Plus-Size-Pants.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000163484094.html?spm=a2g0o.productlist.0.0.1ca27c61HmKyUN&algo_pvid=359c7b96-6fc0-41ac-8c86-0dfff999f5a5&algo_expid=359c7b96-6fc0-41ac-8c86-0dfff999f5a5-6&btsid=0ab6d69f15820413641812271e70be&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    description: 'Cool Men Casual Slim Fit Plaid Print Fitness flexible men pants 2019 Breathable Plus Size Pants in a cage Trousers'
  },
  {
    id: 8,
    name: 'Jeans',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/Haa4a80433d1148bbb846021e4595ea829/Jeans-New-Hot-Sale-Fashion-Mens-Hole-Pocket-Jeans-Overall-Long-Jumpsuit-Streetwear-Overall-Suspender-Pants.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000204615094.html?spm=a2g0o.productlist.0.0.1ca27c61i5lmh4&algo_pvid=288f0af4-db9e-4b68-9dc6-d9d31d67eb3b&algo_expid=288f0af4-db9e-4b68-9dc6-d9d31d67eb3b-7&btsid=0ab6fb8815820415162642850e19f0&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Jeans New Hot Sale Fashion Mens Hole Pocket Jeans Overall Long Jumpsuit Streetwear Overall Suspender Pants High Quality'
  },
  {
    id: 9,
    name: 'Running Shirt',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1GHoIdv5G3KVjSZPxq6zI3XXak/Puimentiua-Mens-Casual-Turn-down-Collar-Short-Sleeve-Shirt-Men-Skinny-Patchwork-Shirts-Summer-Fashion-Fitness.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/33042993781.html?spm=a2g0o.productlist.0.0.a2d41a972qVZfu&algo_pvid=62e9d764-d7ff-482b-8cfa-246d1138db4b&algo_expid=62e9d764-d7ff-482b-8cfa-246d1138db4b-35&btsid=0be3764515820423920736931e5855&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Puimentiua Mens Casual Turn-down Collar Short Sleeve Shirt Men Skinny Patchwork Shirts Summer Fashion Fitness Running Shirt Tops'
  },
  {
    id: 10,
    name: 'Outerwear Coat',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H1b9d866fe8054a4280a2f7e7222e8fc8r/Vertvie-Men-Gothic-Trench-Coat-Steampunk-Vintage-Long-Black-Jacket-Male-Hooded-Irregular-Design-Military-Cardigan.jpg',
    rating: '5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000212213105.html?spm=a2g0o.productlist.0.0.a2d41a972qVZfu&algo_pvid=62e9d764-d7ff-482b-8cfa-246d1138db4b&algo_expid=62e9d764-d7ff-482b-8cfa-246d1138db4b-41&btsid=0be3764515820423920736931e5855&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Vertvie Men Gothic Trench Coat Steampunk Vintage Long Black Jacket Male Hooded Irregular Design Military Cardigan Outerwear Coat'
  }
]
},
{
  id: 3,
    name: 'Toy\'s',
  products: [
  {
    id: 1,
    name: 'Night Light',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H2477ea70cd8542ed8e7e2dd3636ca893v/Starry-Sky-Night-Light-Projector-Children-Night-Light-Projector-Kids-Baby-Sleep-Toys-Projector-Christmas-Toys.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000125159805.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&s=p&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-16&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Starry Sky Night Light Projector Children Night Light Projector Kids Baby Sleep Toys Projector Christmas Toys For Children'
  },
  {
    id: 2,
    name: 'Educational Toy',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1vh6XugHqK1RjSZFEq6AGMXXak/Tumama-Multifunctional-Musical-Toys-Toddler-Baby-Box-Music-Activity-Cube-Gear-Clock-Geometric-Blocks-Sorting-Educational.jpg',
    rating: '3/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32958341738.html?spm=a2g0o.detail.1000060.2.793475dczRhbt9&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.146401.0&scm_id=1007.13339.146401.0&scm-url=1007.13339.146401.0&pvid=6d036b5a-0920-4cdc-9c0a-2ee542785cd8',
    // tslint:disable-next-line:max-line-length
    description: 'Tumama Multifunctional Musical Toys Toddler Baby Box Music Activity Cube Gear Clock Geometric Blocks Sorting Educational Toys'
  },
  {
    id: 3,
    name: 'Drawing Board ',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H825385e74c6b40a5b78646ac9e6cd84bC/Tumama-Portable-Drawing-Board-Book-Animal-Marine-Life-Coloring-Book-DIY-Blackboard-Painting-Drawing-Board-Felt.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32965046656.html?spm=a2g0o.detail.100009.1.44784119ZRTcka&gps-id=pcDetailLeftTopSell&scm=1007.13482.95643.0&scm_id=1007.13482.95643.0&scm-url=1007.13482.95643.0&pvid=640e57c0-3a41-4c2d-b713-9ccd921cdc2f',
    // tslint:disable-next-line:max-line-length
    description: 'Tumama Portable Drawing Board Book Animal Marine Life Coloring Book DIY Blackboard Painting Drawing Board Felt-tip Pens'
  },
  {
    id: 4,
    name: 'Gel Avocado',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1O8RYKeGSBuNjSspbq6AiipXaO/2019-New-Squishies-Simulated-Avocado-Slow-Rising-Cream-Scented-Squeeze-Stress-Relief-Toys-Cute-Dolls-High.jpg',
    rating: '3/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32955834469.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-27&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: '2019 New Squishies Simulated Avocado Slow Rising Cream Scented Squeeze Stress Relief Toys Cute Dolls High Quality Squeeze Ball'
  },
  {
    id: 5,
    name: 'Gel Banana',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/Hd125572db9e846cfbe20edd8a53ee874O/Anti-Novelty-Stress-Squeeze-Gel-Banana-Shape-Squishy-Toy-Simulate-Fruit-Reliever-Mood-Stretchy-Kid-Funny.jpg',
    rating: '4.3/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000174560890.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-25&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    description: 'Anti Novelty Stress Squeeze Gel Banana Shape Squishy Toy Simulate Fruit Reliever Mood Stretchy Kid Funny Gift'
  },
  {
    id: 6,
    name: 'Fake Poop',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/Ha7250cb1259d4c6cbb56f97692279c0dA/Toys-Realistic-Shit-Gift-Joke-Tricky-Fake-Poop-Piece-of-Shit-Prank-Antistress-Gadget-Squish-Toys.jpg',
    rating: '5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000192611300.html?spm=a2g0o.detail.1000060.1.5005213ftFe369&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.146401.0&scm_id=1007.13339.146401.0&scm-url=1007.13339.146401.0&pvid=00b1d702-2c61-42f2-a4ba-f567c6e3d81f',
    // tslint:disable-next-line:max-line-length
    description: 'Toys Realistic Shit Gift Joke Tricky Fake Poop Piece of Shit Prank Antistress Gadget Squish Toys Funny Toys Turd Mischief'
  },
  {
    id: 7,
    name: 'Airplane',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1Goy1XKbviK0jSZFNq6yApXXaz/diy-Foam-Throwing-Glider-Airplane-Inertia-Aircraft-kids-craft-TOYS-Hand-Launch-Airplane-Model-toys-for.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000125385071.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-45&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'diy Foam Throwing Glider Airplane Inertia Aircraft kids craft TOYS Hand Launch Airplane Model toys for children juguetes toys'
  },
  {
    id: 8,
    name: 'Gel Carrot',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1v..mfIyYBuNkSnfoq6AWgVXaH/TOFOCO-New-14cm-Kawaii-Carrot-Squishy-Jumbo-Slow-Rising-Toys-Antistress-Decorate-Cake-Squishies-Food-Squeeze.jpg',
    rating: '3/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32866824425.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-51&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'TOFOCO New 14cm Kawaii Carrot Squishy Jumbo Slow Rising Toys Antistress Decorate Cake Squishies Food Squeeze Scented Gadget'
  },
  {
    id: 9,
    name: 'Baby Toy',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1kk7QQa6qK1RjSZFmq6x0PFXaR/KEIUMI-Hot-Sale-22-Full-Silicone-Reborn-Menina-Boneca-Realistic-Princess-Fashion-Doll-Reborn-Baby-55.jpg',
    rating: '2/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32996717278.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6&algo_expid=8cbcbcee-a65b-487c-bd60-324fbfbe1ed6-55&btsid=0ab50f0815820426546043984e8b0c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'KEIUMI Hot Sale 22\'\' Full Silicone Reborn Menina Boneca Realistic Princess Fashion Doll Reborn Baby 55 cm Toy for Kids Playmates'
  },
  {
    id: 10,
    name: 'Prank Scare Box',
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1V5j_bifrK1RjSspbq6A4pFXap/Prank-Scare-Box-Toys-Harmless-Prank-Stuff-Shocking-Scary-Surprise-Wooden-Box-Toys-Halloween-April-Fools.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32981887263.html?spm=a2g0o.productlist.0.0.214e3b81vMMriC&algo_pvid=78d98672-e95d-4a03-8700-25f9a31973ac&algo_expid=78d98672-e95d-4a03-8700-25f9a31973ac-2&btsid=0ab6f83a15820436281617397e6133&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    // tslint:disable-next-line:max-line-length
    description: 'Prank Scare Box Toys Harmless Prank Stuff Shocking Scary Surprise Wooden Box Toys Halloween April-Fools\' Day Gift Decoration'
  }
]
},
{
  id: 4,
    name: 'Trash\'s',
  products: [
  {
    name: 'Male Shoulder Bag',
    id: 1,
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/HTB1kPZvaorrK1RkSne1q6ArVVXan/Male-Shoulder-Bags-USB-Charging-Crossbody-Bags-Men-Anti-Theft-Chest-Bag-School-Summer-Short-Trip.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/32859112398.html?spm=a2g01.12617084.fdpcl001.1.185eLksPLksPgQ&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=eff2b1bd-3f89-4d35-a9e4-e0181d479518',
    // tslint:disable-next-line:max-line-length
    description: 'Male Shoulder Bags USB Charging Crossbody Bags Men Anti Theft Chest Bag School Summer Short Trip Messengers Bag 2019 New Arrival'
  },
  {
    name: 'Leather Bracelets',
    id: 2,
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H54575feea5184e40812499e4f010370cG/Vnox-4Pcs-Set-Braided-Wrap-Leather-Bracelets-for-Men-Vintage-Life-Tree-Rudder-Charm-Wood-Beads.jpg',
    rating: '5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000311346574.html?spm=a2g01.12617084.fdpcl001.3.185eLksPLksPgQ&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=eff2b1bd-3f89-4d35-a9e4-e0181d479518',
    // tslint:disable-next-line:max-line-length
    description: 'Vnox 4Pcs/ Set Braided Wrap Leather Bracelets for Men Vintage Life Tree Rudder Charm Wood Beads Ethnic Tribal Wristbands',
  },
  {
    name: 'Power Bank',
    id: 3,
    // tslint:disable-next-line:max-line-length
    img: 'https://ae01.alicdn.com/kf/H70f0aaf582c6412cae6a84d77c030913i/Essager-10000mAh-Power-Bank-Slim-USB-10000-mAh-Powerbank-Portable-External-Battery-Charger-Pack-For-Xiaomi.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://www.aliexpress.com/item/4000382846051.html?spm=a2g01.12617084.fdpcl001.11.185eLksPLksPgQ&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=eff2b1bd-3f89-4d35-a9e4-e0181d479518',
    // tslint:disable-next-line:max-line-length
    description: 'Essager 10000mAh Power Bank Slim USB 10000 mAh Powerbank Portable External Battery Charger Pack For Xiaomi Mi 3 iPhone PoverBank'
  },
  {
    name: 'Mask',
    id: 4,
    img: 'https://ae01.alicdn.com/kf/HTB1O0DLX.LrK1Rjy0Fjq6zYXFXa5/50-3.jpg',
    rating: '4.9/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/32960387487.html?spm=a2g0o.home.15002.4.bbea1b86TzfqPL&gps-id=pcJustForYou&scm=1007.13562.158406.0&scm_id=1007.13562.158406.0&scm-url=1007.13562.158406.0&pvid=894d2bbf-15c8-48aa-8837-c16a103309cf&_t=gps-id:pcJustForYou,scm-url:1007.13562.158406.0,pvid:894d2bbf-15c8-48aa-8837-c16a103309cf,tpp_buckets:668%230%23131923%2318_668%23808%234093%2393_668%23888%233325%233',
    description: '50 pcs. disposable face mask Dental anti-dust surgical face mask medical bacteria pollution of ships in March 2020'
  },
  {
    name: 'Leather gloves',
    id: 5,
    img: 'https://ae01.alicdn.com/kf/Hf58a9df4ad634f1eb7bbfcbed739644cH/suotf.jpg',
    rating: '2/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/33031031422.html?spm=a2g01.12597576.p99adbb.39.6985124agzxKYO&gps-id=7317346&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=3a490440-837e-4f44-a1a4-27b6d7ea02b8',
    // tslint:disable-next-line:max-line-length
    description: 'Sports shorts black suotf Fights MMA Boxing sports leather gloves Tiger Muay Thai fights boxing MMA gloves boxing Sanda Boxing gloves pads MMA'
  },
  {
    name: 'Sleeve for bow',
    id: 6,
    img: 'https://ae01.alicdn.com/kf/HTB1MtfyX5rxK1RkHFCcq6AQCVXaA/-.jpg',
    rating: '4.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/32957464814.html?spm=a2g0o.detail.1000060.3.4cd56325SeKe9Q&gps-id=pcDetailBottomMoreThisSeller&scm=1007.14977.145068.0&scm_id=1007.14977.145068.0&scm-url=1007.14977.145068.0&pvid=d8b4e75b-d255-44b6-8a83-566ce69cb403&_t=gps-id:pcDetailBottomMoreThisSeller,scm-url:1007.14977.145068.0,pvid:d8b4e75b-d255-44b6-8a83-566ce69cb403,tpp_buckets:668%230%23131923%2318_668%23808%234093%2393_668%23888%233325%233',
    // tslint:disable-next-line:max-line-length
    description: 'Cow Leather Protective Arm Archery Recurve Bow Longbow Traditional American Hunting Back Arm Protection Safe Protector'
  },
  {
    name: 'Metal claws',
    id: 7,
    img: 'https://ae01.alicdn.com/kf/HTB1hFSSOXXXXXX5aXXXq6xXFXXXr/1.jpg',
    rating: '3.5/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/32763586606.html?spm=a2g01.12597576.p99adbb.68.1722124aPigRaX&gps-id=7317346&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=ef1b9792-8601-446d-8deb-99b5f5dd949c',
    description: '1 PC. metal claws Wolverines wolf claws high quality sophistication cosplay props Halloween for lovers + necklace'
  },
  {
    name: 'Ring',
    id: 8,
    img: 'https://ae01.alicdn.com/kf/HTB1IHAbX1bviK0jSZFNq6yApXXa8/Vnox-8.jpg',
    rating: '3.9/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/32885333554.html?spm=a2g01.12597576.p99adbb.48.1722124aPigRaX&gps-id=7315605&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5bfa42f-2292-4789-9970-246ff1d32e97',
    description: 'Vnox 8mm Rotating Main Ring for Men Black Stainless Steel Casual Mens Anel Stylish Punk Spinner Alliance Jewelry'
  },
  {
    name: 'cargo pants',
    id: 9,
    img: 'https://ae01.alicdn.com/kf/H9cad8ed531c04e8badd537b90edc58a98/-.jpg',
    rating: '4/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/4000142581828.html?spm=a2g01.12597576.p99adbb.47.1722124aPigRaX&gps-id=7315605&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=b5bfa42f-2292-4789-9970-246ff1d32e97',
    // tslint:disable-next-line:max-line-length
    description: 'Men\'s Hip Hop Ribbon Cargo Pants, Men\'s Jogging Pants, Street Fashion 2019, Men\'s Pants with Elastic Waist, Cotton Black Ribbon Pants, W117'
  },
  {
    name: 'Expanders',
    id: 10,
    img: 'https://ae01.alicdn.com/kf/HTB1r1oyhzTpK1RjSZKPq6y3UpXa8/-.jpg',
    rating: '2/5',
    // tslint:disable-next-line:max-line-length
    link: 'https://aliexpress.ru/item/32948555053.html?spm=a2g01.12597576.p99adbb.23.1722124aPigRaX&gps-id=7315995&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=4157890c-3476-420b-86c5-fff0d98bc6c5',
    // tslint:disable-next-line:max-line-length
    description: 'Expanders, elastic bands for training, fitness, the gym, rubber loops, latex, for yoga, the gym, strength training, sports elastic bands'
  }
]
}
];

