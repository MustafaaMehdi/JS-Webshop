//NAVIGATION

//VARIABLE to select the BURGER MENU open button
const burgerMenuBtn = document.querySelector('.OpenNavBtn');
//Event to burger menu BTN
burgerMenuBtn.addEventListener('click', burgerMenuOpen);

//Variable for the Navigation menu 
const openBurgeMenu = document.querySelector('.navMenu');
//Function to TOGGLE BURGER MENU
function burgerMenuOpen() {
	console.log(openBurgeMenu);
	openBurgeMenu.classList.remove('toggleHide');
}


//Variabel, event & function for NAVIGATION MENU - close
closeNavBtn = document.querySelector('.closeNavBtn')
closeNavBtn.addEventListener('click', burgerMenuClose);
function burgerMenuClose() {
	openBurgeMenu.classList.add('toggleHide');
}


//Variabel, event & function for CART PREVIEW - Toggle
const cartPreviewBtn = document.querySelector('.navCartBtn');
cartPreviewBtn.addEventListener('click', cartToggle);
const cartPreview = document.querySelector('.cartPreview');
function cartToggle() {
	console.log(openBurgeMenu);
	cartPreview.classList.toggle('toggleHide');
}

//Variabel, event & function for CART PREVIEW close BTN
const cartCloseBtn = document.querySelector('.cartCloseBtn');
cartCloseBtn.addEventListener('click', cartClose);
function cartClose() {
	console.log(openBurgeMenu);
	cartPreview.classList.add('toggleHide');
}

//Variabel, event & function for the proceed to checkout BTN
const checkoutBtn = document.querySelector('.checkoutBtn');
checkoutBtn.addEventListener('click', orderSummary);
function orderSummary() {
	checkOutPage.classList.remove('toggleHide');
	mainPageWrapper.classList.add('toggleHide');
	cartPreview.classList.add('toggleHide');
}

//Variable, event & function for back to shop BTN
const backToShop = document.querySelector('.continueShopping');
backToShop.addEventListener('click', toggleCheckout);
function toggleCheckout() {
	checkOutPage.classList.add('toggleHide');
	mainPageWrapper.classList.remove('toggleHide');
}

//2 SORTING:
//Variable, event & function for SORTING - toggle
const sortBtn = document.querySelector('.sortBtn');
sortBtn.addEventListener('click', sortToggle);
const sortMenu = document.querySelector('.sortMenu');
function sortToggle() {
	sortMenu.classList.toggle('toggleHide');
}

//Variable and function to display TOTALT AMOUNT of products in cart
// let productTotal = document.querySelector('.productInCart');
//Variable for total amount in cart
let cartTotalProducts = document.querySelector('.productInCart');
function updateTotalAmount() {
    let totalProductsAmount = cart.reduce((total, product) => total + product.amount, 0);

    const totalAmountDisplay = document.querySelector('.productInCart');
    if (totalAmountDisplay) {
        totalAmountDisplay.innerHTML = totalProductsAmount;
    }
}

//3 Page Wrappers

//Variable for:
// Main Page wrapper
const mainPageWrapper = document.querySelector('.mainSectionWrapper');
// Variable for Checkout page
const checkOutPage = document.querySelector('.checkoutWrapper');
// Product section Wrapper
const productContainer = document.querySelector('.productContainer');
//Cart preview Wrapper 
const cartSummary = document.querySelector('.productPreviewSummary');
//Checkout summary Wrapper
const checkoutSummary = document.querySelector('.productCheckoutSummary');




//Search function 
//Search Input variabel
const navSearchBar = document.querySelector('.navSearchBar')
//Search button variable
const searchBtn = document.querySelector('.navSearchBtn')
//Add input event to the searchbar and display function
navSearchBar.addEventListener('input', (e) => {

	let keyWord = e.target.value

	if (keyWord && keyWord.trim().length > 0) {
		// keyWord = keyWord.trim().toLowerCase()
		console.log(keyWord)
	} 
	// else {
		
	// }

})






//Array containing the product stock 
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

//SORTING & FILTER
//Have the price range react and show the price intervall set by user


//Variable for price range slider
const priceRangeSlider = document.querySelector('#pricerange')
//Add event to the slider
priceRangeSlider.addEventListener('input', adjustPriceRange)

function adjustPriceRange() {


}
//Function for sorting based on name A-Z
productStock.sort((product1, product2) => {
		if (product1.name < product2.name) {
		  return -1;
		}
		if (product1.name > product2.name) {
		  return 1;
		}
		return 0;
});

console.table(productStock)


//Function to print out the products
function pushProductStock() {
    productContainer.innerHTML = '';
    productStock.forEach((product, index) => {
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
    });

    //Variable and event for the IncreaseAmount BTN for each added product in cart
    const addToCartBtn = document.querySelectorAll('.articleAddToCart');
    addToCartBtn.forEach((button) => {
        button.addEventListener('click', addAProduct);
    });

    //Variable and event for the DecreaseAmount BTN for each added product in cart
    const subtractFromCartBtn = document.querySelectorAll('.articleRemoveFromCart');
    subtractFromCartBtn.forEach((button) => {
        button.addEventListener('click', subtractAProduct);
    });
}



//Function to be able to increase the amount of product in the cart view & Summary view
function addAProduct(e) {
	let index = e.target.id.replace('articleAddToCart', '');
	index = Number(index);
	productStock[index].amount += 1;
	cart = productStock.filter((productStock) => productStock.amount > 0);
	pushProductStock();
	addProductToCart();
}

//Function to be able to decrease the amount of product in the cart view & Summary view
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


//Function to get added products printed in CART and CHECKOUT
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

//Call two functions at the same time
function updateStock() {
	pushProductStock();
	addProductToCart();
}



//Function for remove BTN in cart and Checkout summary
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






pushProductStock();

// Total cart amount showing = all (product.amount > 0) should be summed together and loop through forEach (all products with amount > 0)



