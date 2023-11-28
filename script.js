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

//SHOW TOTALT amount of products 
let productTotal = document.querySelector('.productInCart');






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
//Variabel for the proceed to checkout BTN
const checkoutBtn = document.querySelector('.checkoutBtn');
checkoutBtn.addEventListener('click', orderSummary);

const mainPageWrapper = document.querySelector('.mainSectionWrapper');
const checkOutPage = document.querySelector('.checkoutWrapper');

//Function for the proceed to checkout BTN
function orderSummary() {
	checkOutPage.classList.remove('toggleHide');
	mainPageWrapper.classList.add('toggleHide');
	cartPreview.classList.add('toggleHide');
}
const backToShop = document.querySelector('.continueShopping');
backToShop.addEventListener('click', toggleCheckout);

function toggleCheckout() {
	checkOutPage.classList.add('toggleHide');
	mainPageWrapper.classList.remove('toggleHide');
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
		amount: 0,
		serialNo: 1,
		price: 28.99,
		category: { shape: 'heart', color: 'red' },
		rating: 4.8,
		image: {
			src: "Assets/Images/Warehouse/SegretoD'Amore.jpg",
			alt: 'heartshaped black box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cesto Di Rose',
		amount: 0,
		serialNo: 2,
		price: 34.99,
		category: { shape: 'round', color: 'red' },
		rating: 3.9,
		image: {
			src: 'Assets/Images/Warehouse/CestoDiRose.jpg',
			alt: 'white round box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Di Fiori',
		amount: 0,
		serialNo: 3,
		price: 29.99,
		category: { shape: 'round', color: 'blue' },
		rating: 2.9,
		image: {
			src: 'Assets/Images/Warehouse/GioielloDiFiori.png',
			alt: 'blue round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cuore Infinito',
		amount: 0,
		serialNo: 4,
		price: 49.99,
		category: { shape: 'square', color: 'transparent' },
		rating: 4.9,
		image: {
			src: 'Assets/Images/Warehouse/CuoreInfinito2.jpg',
			alt: 'transparent square box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolce Rose',
		amount: 0,
		serialNo: 5,
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.9,
		image: {
			src: 'Assets/Images/Warehouse/DolceRose.jfif',
			alt: 'round white box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Notte Romantica',
		amount: 0,
		serialNo: 6,
		price: 49.99,
		category: { shape: 'square', color: 'black' },
		rating: 4.9,
		image: {
			src: 'Assets/Images/Warehouse/NotteRomantica.jpg',
			alt: 'black square box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Di Rose Bianche',
		amount: 0,
		serialNo: 7,
		price: 34.99,
		category: { shape: 'square', color: 'white' },
		rating: 4.3,
		image: {
			src: 'Assets/Images/Warehouse/GioielloDiRoseBianche.jpg',
			alt: 'white square box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Cuore di Rose Blu',
		amount: 0,
		serialNo: 8,
		price: 19.99,
		category: { shape: 'round', color: 'white' },
		rating: 3.3,
		image: {
			src: 'Assets/Images/Warehouse/CuorediRoseBlu.jpg',
			alt: 'white round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Amore Eterno',
		amount: 0,
		serialNo: 9,
		price: 39.99,
		category: { shape: 'heart', color: 'black' },
		rating: 4.1,
		image: {
			src: 'Assets/Images/Warehouse/AmoreEterno.jpg',
			alt: 'black heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolcezza In Rosa',
		amount: 0,
		serialNo: 10,
		price: 19.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.1,
		image: {
			src: 'Assets/Images/Warehouse/DolcezzaInRosa.jpg',
			alt: 'pink round box filled with blue roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioia Del Cuore',
		amount: 0,
		serialNo: 11,
		price: 34.99,
		category: { shape: 'heart', color: 'white' },
		rating: 4.4,
		image: {
			src: 'Assets/Images/Warehouse/GioiaDelCuore.jpg',
			alt: 'white heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Serenata Rosata',
		amount: 0,
		serialNo: 12,
		price: 24.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.7,
		image: {
			src: 'Assets/Images/Warehouse/SerenataRosata.jpg',
			alt: 'round shaped pink box filled with pink roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Dolce Amore',
		amount: 0,
		serialNo: 13,
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.5,
		image: {
			src: 'Assets/Images/Warehouse/DolceAmore.jpg',
			alt: 'white round shaped box filled with red roses',
			height: 100,
			width: 100,
		},
	},

	//Bear products
	{
		name: 'Dolce Abbraccio',
		amount: 0,
		serialNo: 14,
		price: 29.99,
		category: { shape: 'bear', color: 'white' },
		rating: 4.6,
		image: {
			src: 'Assets/Images/Warehouse/DolceAbbraccio.jpg',
			alt: 'white bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Coccole Di Noce',
		amount: 0,
		serialNo: 15,
		price: 21.99,
		category: { shape: 'bear', color: 'brown' },
		rating: 3.6,
		image: {
			src: 'Assets/Images/Warehouse/CoccoleDiNoce.jpg',
			alt: 'brown bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Gioiello Del Cuore',
		amount: 0,
		serialNo: 16,
		price: 21.99,
		category: { shape: 'bear', color: 'grey' },
		rating: 4.5,
		image: {
			src: 'Assets/Images/Warehouse/GioielloDelCuore.jpg',
			alt: 'grey bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: "Orsetto D'Amore",
		amount: 0,
		serialNo: 17,
		price: 29.99,
		category: { shape: 'bear', color: 'red' },
		rating: 4.8,
		image: {
			src: "Assets/Images/Warehouse/OrsettoD'Amore.jpg",
			alt: 'red bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Rosa Incanto',
		amount: 0,
		serialNo: 18,
		price: 25.99,
		category: { shape: 'bear', color: 'pink' },
		rating: 4.4,
		image: {
			src: 'Assets/Images/Warehouse/RosaIncanto.jpg',
			alt: 'pink bear made out of plastic roses',
			height: 100,
			width: 100,
		},
	},
	{
		name: 'Sogno Azzurro',
		amount: 0,
		serialNo: 19,
		price: 14.99,
		category: { shape: 'bear', color: 'blue' },
		rating: 4.7,
		image: {
			src: 'Assets/Images/Warehouse/SognoAzzurro.jpg',
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
    productContainer.innerHTML = '';
    productStock.forEach((product, index) => {
		// if (productStock.amount < 0) {
        productContainer.innerHTML += `<article class="productArticles">
            <h3 class="articleTitle">${product.name}</h3>
            <img
                class="articleImage"
                src="${product.image.src}"
                width="${product.image.width}"
                height="${product.image.height}"
                alt="${product.image.alt}"
                loading="lazy"
            />

            <p class="articlePrice">
                ${product.price} $<span class="articleRating">${product.rating} <img src="Assets/icons/Rating.webp" alt="" height="50"></span>
            </p>

            <div class="articleBtn">
                <button class="articleRemoveFromCart" id="articleRemoveFromCart${index}">Remove</button>
                <p class="articleAmnt">In cart: <span>${product.amount}</span></p>
                <button class="articleAddToCart" id="articleAddToCart${index}">Add</button>
            </div>
        </article>`;
	// }
    });

    //Variable and event for the add button in cart & summary
    const addToCartBtn = document.querySelectorAll('.articleAddToCart');
    addToCartBtn.forEach((button) => {
        button.addEventListener('click', addAProduct);
    });

    //Variable and event for the decrease button in cart & summary
    const subtractFromCartBtn = document.querySelectorAll('.articleRemoveFromCart');
    subtractFromCartBtn.forEach((button) => {
        button.addEventListener('click', subtractAProduct);
    });
}
//Copy of array for the products in cart
// let cart = [];
// pushProductStock()
//Create a function to be able to increase the amount of product in the cart view & Summary view
function addAProduct(e) {
	let index = e.target.id.replace('articleAddToCart', '');
	index = Number(index);
	productStock[index].amount += 1;
	cart = productStock.filter((productStock) => productStock.amount > 0);
	pushProductStock();
	addProductToCart();
}

//Create a function to update the decrease cart amount value
function subtractAProduct(e) {
	let index = e.target.id.replace('articleRemoveFromCart', '');
	if (productStock[index].amount > 0) {
		index = Number(index);
		productStock[index].amount -= 1;
		//Conditions the product to be removed from cart if the amount is set to 0
		if (productStock[index].amount === 0) {
			cart = cart.filter((product) => product.serialNo !==productStock[index].serialNo)
		}
		pushProductStock();
		addProductToCart();
	}
}

const cartSummary = document.querySelector('.productPreviewSummary');
const checkoutSummary = document.querySelector('.productCheckoutSummary');
let cartTotalProducts = document.querySelector('.productInCart');

//Göra om funtkion till forEach, lägg till function i add knappen sen också

function increaseCartPlus(e) {
	const index = e.currentTarget.dataset.id;
	cart[index].amount += 1;
	
	updateStock();
}

function decreaseCartMinus(e) {
	const index = e.currentTarget.dataset.id;
	//Condition only decreases the amount down to 0
	if (cart[index].amount > 0) {
		cart[index].amount -= 1;
		//When the .amount object reaches 0, the product is removed from the cart array
		if (cart[index].amount === 0) {
			cart.splice(index, 1);
		}
		//
		updateStock();
	}
}

function addProductToCart() {
	cartTotalProducts.innerHTML = '';
	cartSummary.innerHTML = '';
	checkoutSummary.innerHTML = '';
	// checkoutSummary.innerHTML = "";

	cart.forEach((product, index) => {
		//Variable to round up the price to a maximum of two decimal points
		let amountPrice = (
			(product.price * product.amount).toFixed(2)
		);
		
		checkoutSummary.innerHTML += `${product.amount}`;
		cartSummary.innerHTML +=
			//`<p>Product: ${productStock.name}Antal: ${productStock.amount}<button class="delete" id="delete-${productStock.serialNo}">radera</button></p>`;

			`<li>
			<img
				class="productPreviewImage"
				src="${product.image.src}"
				width="${product.image.width}"
				height="${product.image.height}"
			/>
			<h3 class="previewProductTitle">${product.name}</h3>
			<p class="previewProductPrice">${amountPrice}</p>

		<div class="productAmountActions">
			<button class="minusOneProduct" data-id="${index}" >-</button
			><input class="productAmount" type="number" value="${product.amount}" /><button
			class="addOneProduct" data-id="${index}"
			>
				+
			</button>
			<button class="previewProductRemoval" id="productRemove${product.serialNo}">Remove product
			</button>
		</li>`;

		checkoutSummary.innerHTML += `<li class="productAdded">
		<img
			class="productCheckoutImage"
			src="${product.image.src}"
			width="${product.image.width}"
			height="${product.image.height}"
		/>

		<h3 class="ProductCheckoutTitle">${product.name}</h3>
		<p class="ProductCheckoutPrice">${amountPrice}</p>
		<div class="productAmount">
		<button class="minusOneProduct" data-id="${index}" >-</button>
		<input class="productAmountValue" type="number" value="${product.amount}"/>
		<button
			class="addOneProduct" data-id="${index}"
			>
				+
			</button>
			<button class="previewProductRemoval" id="productRemove${product.serialNo}"> Remove product
								</button>
		</div>`;
	});

	//Add clickEvent to each of the removal Btns
	Array.from(document.querySelectorAll('.previewProductRemoval')).forEach(
		(btn) => {
			btn.addEventListener('click', removeFromCartBtn);
		}
	);

	const cartPlus = document.querySelectorAll('.addOneProduct');
	const cartMinus = document.querySelectorAll('.minusOneProduct')

	cartPlus.forEach(button => {
		button.addEventListener('click', increaseCartPlus)
	})

	cartMinus.forEach(button => {
		button.addEventListener('click', decreaseCartMinus)
	})

	updateTotalAmount();
}


function updateStock() {
	pushProductStock();
	addProductToCart();
}




function removeFromCartBtn(e) {
	const productSerialNo = Number(e.target.id.replace('productRemove', ''));

	let cartIndex = cart.findIndex(
		(productStock) => productStock.serialNo === productSerialNo
	);

	let productIndex = productStock.findIndex(
		(productStock) => productStock.serialNo === productSerialNo
	);

	if (cartIndex > -1) {
		// && productStock.amount === 0
		cart.splice(cartIndex, 1);

		productStock[productIndex].amount = 0;
		pushProductStock();
		addProductToCart();
	}
}






function updateTotalAmount() {
    let totalProductsAmount = cart.reduce((total, product) => total + product.amount, 0);

    const totalAmountDisplay = document.querySelector('.productInCart');
    if (totalAmountDisplay) {
        totalAmountDisplay.innerHTML = totalProductsAmount;
    }
}
pushProductStock();

// Total cart amount showing = all (product.amount > 0) should be summed together and loop through forEach (all products with amount > 0)



