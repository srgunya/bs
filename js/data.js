let adidas = [
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/1.jpg', type: 'Кроссовки', model: 'ZX 8000 Fresh Mint Tea', price: '13 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/2.jpg', type: 'Мужские кроссовки', model: 'Ozelia', price: '10 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/3.jpg', type: 'Мужские кроссовки', model: 'Stan Smith', price: '9 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/4.jpg', type: 'Женские кроссовки', model: 'Astir', price: '10 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/1.jpg', type: 'Мужская куртка анорак', model: 'Adventure Blocked', price: '10 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/2.jpg', type: 'Женская куртка бомбер', model: 'x Disney Bambi', price: '18 990 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/3.jpg', type: 'Мужская куртка ветровка', model: 'Graphics Camo Windbreaker', price: '9 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/4.jpg', type: 'Женская куртка ветровка', model: 'Adicolor Windbreaker', price: '9 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/5.jpg', type: 'Мужская куртка', model: 'Polar Fleece Storm', price: '10 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/6.jpg', type: 'Мужская куртка парка', model: 'Utilitas Down', price: '22 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/kurtki/7.jpg', type: 'Мужской пуховик', model: 'Optimus', price: '20 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/bruki/1.jpg', type: 'Мужские брюки', model: 'Bekenbauer Primeblue', price: '7 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/bruki/2.jpg', type: 'Женские брюки', model: 'Adicolor Joggers', price: '7 890 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/5.jpg', type: 'Мужские кеды', model: 'Matchbreak Super', price: '8 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/6.jpg', type: 'Мужские сланцы', model: 'x Kevin Lyons  Adilette', price: '6 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/krosovki/7.jpg', type: 'Женские сланцы', model: 'Adilette Bonega', price: '8 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/bruki/3.jpg', type: 'Мужские шорты', model: '3-Stripe', price: '5 290 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/1.jpg', type: 'Кепка', model: 'Adicolor Vintage Baseball', price: '2 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/2.jpg', type: 'Кепка', model: 'Adicolor', price: '2 190 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/3.jpg', type: 'Кепка', model: 'Baseball', price: '2 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/1.jpg', type: 'Мужской лонгслив', model: 'LS Face Graphic', price: '4 190 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/2.jpg', type: 'Мужской лонгслив', model: 'LS Adicolor Classics 3-Stripes', price: '4 190 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/3.jpg', type: 'Мужская олимпийка', model: 'Adicolor Classics Primeblue SST', price: '7 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/4.jpg', type: 'Женская олимпийка', model: 'Adicolor Classics High-Shine', price: '7 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/noski/1.jpg', type: 'Комплект носков', model: '3-Pack Trefoil Liner', price: '1 290 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/noski/2.jpg', type: 'Комплект носков', model: 'x Rich Mnisi 2-Pack Crew', price: '1 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/4.jpg', type: 'Панама', model: 'Adicolor Trefoil', price: '2 990 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/5.jpg', type: 'Панама', model: 'Adventure', price: '2 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/head/6.jpg', type: 'Панама', model: 'Unite', price: '2 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/5.jpg', type: 'Мужское поло', model: 'Sports Club', price: '5 290 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/6.jpg', type: 'Мужское поло', model: 'Tennis', price: '5 190 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/sumki/1.jpg', type: 'Рюкзак', model: 'Shiny Jacquard', price: '5 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/sumki/2.jpg', type: 'Сумка', model: 'Adicolor Archive Messenger Small', price: '3 890 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/sumki/3.jpg', type: 'Сумка', model: 'Shopper Small', price: '4 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/sumki/4.jpg', type: 'Сумка на пояс', model: 'x Rich Mnisi L', price: '3 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/sumki/5.jpg', type: 'Сумка на пояс', model: 'Unite Graphic', price: '2 790 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/7.jpg', type: 'Мужская толстовка', model: 'Shmoofoil Butterfly Hoodie', price: '7 890 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/8.jpg', type: 'Мужская толстовка', model: 'Graphics Camo Hoodie', price: '8 490 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/9.jpg', type: 'Женская толстовка', model: 'Graphics Valentine Day', price: '7 690 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/10.jpg', type:'Женская футболка', model: 'Always Original Graphic', price: '3 890 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/11.jpg', type:'Мужская футболка', model: 'Floral', price: '3 290 ₽'},
	{brand: 'adidas Originals', img: '../img/data/adidas/body/12.jpg', type:'Мужская футболка', model: 'SS Adicolor Classics 3-Stripes', price: '2 790 ₽'},
]