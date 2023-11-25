
//HEADER: VARIABLE to select the BURGER MENU open button
const burgerMenuBtn = document.querySelector('.OpenNavBtn');

//AddCLICKevent to openBTN BURGER MENU
burgerMenuBtn.addEventListener('click', burgerMenuOpen);
//Define a variable for the Navigation menu to be used in open and close function
const openBurgeMenu = document.querySelector('.navMenu');
//define FUNCTION to TOGGLE BURGER MENU
function burgerMenuOpen() {
	console.log(openBurgeMenu);
	openBurgeMenu.classList.remove('toggleHide');
}

const closeNavBtn = document.querySelector('.closeNavBtn');

//CLICKevent to CLOSE BURGER MENU
closeNavBtn.addEventListener('click', burgerMenuClose);
//define FUNCTION to CLOSE BURGER MENU
function burgerMenuClose() {

	console.log(openBurgeMenu);
	openBurgeMenu.classList.add('toggleHide');
}

//2 CART PREVIEW:
// [] Create button for the CART PREVIEW
//VARIABLE to select the CART PREVIEW TOGGLE button
const cartPreviewBtn = document.querySelector('.navCartBtn');

//AddCLICKevent to cartpreviewBTN CART PREVIEW
cartPreviewBtn.addEventListener('click', cartToggle);
//Define a variable for the CART PREVIEW menu to be used in Toggle and close function
const cartPreview = document.querySelector('.cartPreview');
//define FUNCTION to CART PREVIEW TOGGLE to toggle between hide/unhide
function cartToggle() {
	console.log(openBurgeMenu);
	cartPreview.classList.toggle('toggleHide');
}

//2b CART PREVIEW CLOSE:
// [] Create button for the CART PREVIEW CLOSE BTN
//VARIABLE to select the CART PREVIEW CLOSE button
const cartCloseBtn = document.querySelector('.cartCloseBtn');

//AddCLICKevent to cartpreviewBTN CART PREVIEW
cartCloseBtn.addEventListener('click', cartClose);
//Define a variable for the CART PREVIEW menu to be used in Toggle and close function

//define FUNCTION to CART PREVIEW TOGGLE to toggle between hide/unhide
function cartClose() {
	console.log(openBurgeMenu);
	cartPreview.classList.add('toggleHide');
}

// PRODUCT SECTION:
// {
//2 SORTING:
// [] Create button for the SORTING BTN
//VARIABLE to select the SORT TOGGLE button
//ADD EventClick to the SORT BTN
const sortBtn = document.querySelector('.sortBtn');

//AddCLICKevent to cartpreviewBTN CART PREVIEW
sortBtn.addEventListener('click', sortToggle);
//Define a variable for the CART PREVIEW menu to be used in Toggle and close function
const sortOptions = document.querySelector('.sortMenu');
//define FUNCTION to CART PREVIEW TOGGLE to toggle between hide/unhide
function sortToggle() {
	sortOptions.classList.toggle('toggleHide');
}


// PRODUCTS PAGE
//1.a Add Products with a for loop:
// [x] Create a variable for the products container
// [x] Create an Array which holds the different product property objects
// [x] create an Array containing all objects

//Define an array with pre-defined object properties:
const productStock = [
	{
		name: "Segreto D'Amore",
		Amount: 0,
		price: 28.99,
		category: { shape: 'heart', color: 'red' },
		rating: 4.8,
		image: {
			src: "/Assets/Images/Warehouse/SegretoD'Amore.jpg",
			alt: 'heartshaped black box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cesto Di Rose',
		Amount: 0,
		price: 34.99,
		category: { shape: 'round', color: 'red' },
		rating: 3.9,
		image: {
			src: '/Assets/Images/Warehouse/CestoDiRose.jpg',
			alt: 'white round box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Di Fiori',
		Amount: 0,
		price: 29.99,
		category: { shape: 'round', color: 'blue' },
		rating: 2.9,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDiFiori.png',
			alt: 'blue round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cuore Infinito',
		Amount: 0,
		price: 49.99,
		category: { shape: 'square', color: 'transparent' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/CuoreInfinito2.jpg',
			alt: 'transparent square box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolce Rose',
		Amount: 0,
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/DolceRose.jfif',
			alt: 'round white box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Notte Romantica',
		Amount: 0,
		price: 49.99,
		category: { shape: 'square', color: 'black' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/NotteRomantica.jpg',
			alt: 'black square box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Di Rose Bianche',
		Amount: 0,
		price: 34.99,
		category: { shape: 'square', color: 'white' },
		rating: 4.3,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDiRoseBianche.jpg',
			alt: 'white square box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cuore di Rose Blu',
		Amount: 0,
		price: 19.99,
		category: { shape: 'round', color: 'white' },
		rating: 3.3,
		image: {
			src: '/Assets/Images/Warehouse/CuorediRoseBlu.jpg',
			alt: 'white round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Amore Eterno',
		Amount: 0,
		price: 39.99,
		category: { shape: 'heart', color: 'black' },
		rating: 4.1,
		image: {
			src: '/Assets/Images/Warehouse/AmoreEterno.jpg',
			alt: 'black heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolcezza In Rosa',
		Amount: 0,
		price: 19.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.1,
		image: {
			src: '/Assets/Images/Warehouse/DolcezzaInRosa.jpg',
			alt: 'pink round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioia Del Cuore',
		Amount: 0,
		price: 34.99,
		category: { shape: 'heart', color: 'white' },
		rating: 4.4,
		image: {
			src: '/Assets/Images/Warehouse/GioiaDelCuore.jpg',
			alt: 'white heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Serenata Rosata',
		Amount: 0,
		price: 24.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.7,
		image: {
			src: '/Assets/Images/Warehouse/SerenataRosata.jpg',
			alt: 'round shaped pink box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolce Amore',
		Amount: 0,
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.5,
		image: {
			src: '/Assets/Images/Warehouse/DolceAmore.jpg',
			alt: 'white round shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},

	//Bear products
	{
		name: 'Dolce Abbraccio',
		Amount: 0,
		price: 29.99,
		category: { shape: 'bear', color: 'white' },
		rating: 4.6,
		image: {
			src: '/Assets/Images/Warehouse/DolceAbbraccio.jpg',
			alt: 'white bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Coccole Di Noce',
		Amount: 0,
		price: 21.99,
		category: { shape: 'bear', color: 'brown' },
		rating: 3.6,
		image: {
			src: '/Assets/Images/Warehouse/CoccoleDiNoce.jpg',
			alt: 'brown bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Del Cuore',
		Amount: 0,
		price: 21.99,
		category: { shape: 'bear', color: 'grey' },
		rating: 4.5,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDelCuore.jpg',
			alt: 'grey bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: "Orsetto D'Amore",
		Amount: 0,
		price: 29.99,
		category: { shape: 'bear', color: 'red' },
		rating: 4.8,
		image: {
			src: "/Assets/Images/Warehouse/OrsettoD'Amore.jpg",
			alt: 'red bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Rosa Incanto',
		Amount: 0,
		price: 25.99,
		category: { shape: 'bear', color: 'pink' },
		rating: 4.4,
		image: {
			src: '/Assets/Images/Warehouse/RosaIncanto.jpg',
			alt: 'pink bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Sogno Azzurro',
		Amount: 0,
		price: 14.99,
		category: { shape: 'bear', color: 'blue' },
		rating: 4.7,
		image: {
			src: '/Assets/Images/Warehouse/SognoAzzurro.jpg',
			alt: 'blue mini bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
];


// [X] Select the product container from the HTML DOM
// [Used Class since it's unique]   Add ID to the container in HTML ()
const productContainer = document.querySelector('.productContainer');
//Test to see if correct Element is selected
// console.log(productContainer);



// [X] Push the Image, Title and Price inside of an <article> with a class

//2 Add Products buttons with a for loop:
// [X] Select the productsContainer
// [X] Push template for articles as innerHTML
// [X] Push the subrtract and add buttons
function pushProductStock() {
	productContainer.innerHTML = "";
for (let i = 0; i < productStock.length; i++) {
	productContainer.innerHTML += `<article class="productArticles">
	<h3 class="articleTitle">${productStock[i].name}</h3>
	<img
		class="articleImage"
		src="${productStock[i].image.src}"
		width="${productStock[i].image.width}"
		height="${productStock[i].image.height}"
		alt="${productStock[i].image.alt}"
		loading="lazy"
	/>

	<p class="articlePrice">
		${productStock[i].price} $<span class="articleRating">${productStock[i].rating} <img src="Assets/icons/Star.svg" alt=""></span>
	</p>
	
<div class="articleBtn">
	<button class="articleRemoveFromCart" id="articleRemoveFromCart${i}">Remove</button>
	<p class="articleAmnt">In cart: <span>${productStock[i].Amount}</span></p>
	<button class="articleAddToCart" id="articleAddToCart${i}">Add</button>
</div>


</article>`

  }
//Define a variable for the ADD TO CART
const addToCartBtn = document.querySelectorAll('.articleAddToCart');
//Create a loop to add click event for the ADD TO CART btns
for (let i = 0; i < addToCartBtn.length; i++) {
	addToCartBtn[i].addEventListener('click', addToCart)
}
//Define a variable for the REMOVE FROM CART btn
const removeFromCartBtn = document.querySelectorAll('.articleRemoveFromCart');
//Create a loop to add click event for the ADD TO CART btns
for (let i = 0; i < removeFromCartBtn.length; i++) {
	removeFromCartBtn[i].addEventListener('click', removeFromCart)
}

}

// pushProductStock()
//Create a function to update the cart amount value
function addToCart(e) {
	let index = e.target.id.replace('articleAddToCart', '');
	index = Number(index)
	productStock[index].Amount += 1;
	pushProductStock();
	addProductToCart();
}
function removeFromCart(e) {
	let index = e.target.id.replace('articleRemoveFromCart', '');
	if (productStock[index].Amount > 0) {
	index = Number(index)
	productStock[index].Amount -= 1;
	pushProductStock();
	addProductToCart();
}
	// console.log(productStock.Amount)
}

//Function to test that products are added to cart
function addProductToCart() {
    const cartSummary = document.querySelector('.productPreviewSummary');
    cartSummary.innerHTML = ""; 

    for (let i = 0; i < productStock.length; i++) {
        if (productStock[i].Amount > 0) {
            cartSummary.innerHTML += `<p>HEJ${productStock[i].name}HEJ</p>`;
        }
    }
}




// CHECKOUT PAGE
// 1.a Remove products:
// 1.b Add/subtract products in cart:
// 2.a Validation of forms
// 2.b Toggle between invoice and card
// 3.a Newsletter checked in per default
// 3.b submit button to complete order grayed out until information filled in/validated

// }

pushProductStock()