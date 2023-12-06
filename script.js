/*------------------------------------------Header------------------------------------------*/

//Burger Menu(Open.Button) - VARIABLE to select the BURGER MENU open button
const burgerMenuBtn = document.querySelector('.OpenNavBtn');
//Burger Menu(Open.Button) - Click EVENT for the burger menu open BTN
burgerMenuBtn.addEventListener('click', burgerMenuOpen);
//Burger Menu(Navigation screen) - Variable for the Navigation menu
const openBurgeMenu = document.querySelector('.navMenu');
//Burger Menu(Close.Button) - VARIABLE to select the BURGER MENU close BTN
const closeNavBtn = document.querySelector('.closeNavBtn');
// Burger Menu(Close.Button) - Click EVENT for the burger menu close BTN
closeNavBtn.addEventListener('click', burgerMenuClose);

//Cart preview (Toggle.Button) - VARIABLE to select the Cart preview toggle BTN
const cartPreviewBtn = document.querySelector('.navCartBtn');
//Cart preview (Toggle.Button) - Click EVENT for the Cart preview toggle BTN
cartPreviewBtn.addEventListener('click', cartToggle);
//Cart preview screen - VARIABLE which selects the Cart preview screen
const cartPreview = document.querySelector('.cartPreview');
//Cart preview (Close.Button) - VARIABLE to select the Cart preview close BTN
const cartCloseBtn = document.querySelector('.cartCloseBtn');
//Cart preview (Close.Button) - Click EVENT for the Cart preview close BTN
cartCloseBtn.addEventListener('click', cartClose);

///Checkout section (open.Btn) - VARIABLE for proceed to checkout in the Cart preview BTN
const checkoutBtn = document.querySelector('.checkoutBtn');
//Checkout section (open.Btn) - Click EVENT for proceed to checkout in the Cart preview BTN
checkoutBtn.addEventListener('click', orderSummary);

//Back to shopping (close.Btn) - VARIABLE for continue shopping (from checkout) BTN
const backToShop = document.querySelector('.continueShopping');
//Checkout section (close.Btn) - Click EVENT for continue shopping (from checkout) BTN
backToShop.addEventListener('click', toggleCheckout);

//Sorting menu (Toggle.Button) - VARIABLE for sorting menu toggle BTN
const sortBtn = document.querySelector('.sortBtn');
//Sorting menu (Toggle.Button) - Click EVENT for sorting menu toggle BTN
sortBtn.addEventListener('click', sortToggle);
//Sort menu screen - VARIABLE which selects the sort menu screen
const sortMenu = document.querySelector('.sortMenu');

//Cart icon total amount <span> element - VARIABLE for the mini cart icon in the Navigation
const totalAmountIcon = document.querySelector('.productInCart');
//Cart icon total amount <span> element inside cart preview - VARIABLE for the total PCS <span> in cart preview
const totalAmountcartPreview = document.querySelector('.cartProductSum');
//Checkout section total amount <span> element - VARIABLE for the total PCS <span> element in the Navigation
const totalAmountCheckout = document.querySelector('#totalAmountCheckout');
//order confirmation section total amount <span> element - VARIABLE for the total PCS <span> element in order confirmation section msg
const totalAmountSummary = document.querySelector('#totalAmountSummary');

//Cart preview total price inside cart preview - VARIABLE for the total PRICE in cart preview
const totalPriceCartPreview = document.querySelector('#totalPriceCartPreview');
//Checkout section total price inside cart preview - VARIABLE for the total PRICE in checkout section
const totalPriceCheckout = document.querySelector('.checkoutProductSum');
//Order confirmation section total price inside cart preview - VARIABLE for the total PRICE in order confirmation section
const totalPriceSummary = document.querySelector('#totalPriceSummary');
/*------------------------------------------Header------------------------------------------*/

/*------------------------------------------PAGE WRAPPERS------------------------------------------*/
// Main Page wrapper - Variable to select the main page container
const mainPageWrapper = document.querySelector('.mainSectionWrapper');
// Product section Wrapper - Variable to select the product page container
const productContainer = document.querySelector('.productContainer');
//Cart preview Wrapper - Variable which selects the cart preview product
const cartSummary = document.querySelector('.productPreviewSummary');
//Checkout section wrapper - Variable to select the checkout section
const checkOutPage = document.querySelector('.checkoutWrapper');
//Checkout summary Wrapper - Variable to select the checkout product summary section
const checkoutSummary = document.querySelector('.productCheckoutSummary');
/*------------------------------------------PAGE WRAPPERS------------------------------------------*/
//reset BTN in the checkout section
const resetCart = document.querySelector('#resetBTN');
//Click event for the reset BTN in checkout section
resetCart.addEventListener('click', resetCartOrder);

//Variable to select the card payment option

// const paymentOptions = Array.from(document.querySelectorAll('input[name="payment"]'))

// paymentOptions.forEach(paymentBtn => {
// 	paymentBtn.addEventListener('change', choiceOfPayment)
// })

// function choiceOfPayment(e) {
// 	console.log(e.target.id)
// }

//*Variable to select the invoice radio button option
const invoicePaymentBtn = document.querySelector('#invoicePaymentOption');
//*Click event for the button to trigger the display of invoice and hide card option
invoicePaymentBtn.addEventListener('click', selectedPaymentOption);
//*Variable to select the card radio button option
const cardPaymentBtn = document.querySelector('#cardPaymentOption');
//*Click event for the button to trigger the display of card and hide invoice option
cardPaymentBtn.addEventListener('click', selectedPaymentOption);

//Variable to select the card payment form
const cardPayment = document.querySelector('#cardPaymentForm');
//Variable to select the invoice payment form
const invoicePayment = document.querySelector('#invoicePaymentForm');
//Functions to alter between the card form and invoice form by applying display attribute directly to the section
let currentPaymentOption = 'cardPaymentOption';
function selectedPaymentOption(e) {
	currentPaymentOption = e.target.id;
	if (currentPaymentOption === 'cardPaymentOption') {
		cardPayment.style.display = 'flex';
		invoicePayment.style.display = 'none';
	} else if (currentPaymentOption === 'invoicePaymentOption') {
		cardPayment.style.display = 'none';
		invoicePayment.style.display = 'block';
	}
	clearPaymentField();
	console.log(currentPaymentOption);
}

// function displayInvoice() {
// 	cardPayment.style.display = 'none';
// 	invoicePayment.style.display = 'block';
// 	console.log('change2');
// }

//Variable to select the timeout message
const timeOutMsgBg = document.querySelector('.timeOutMsgBg');
//Variable for Button to close the timeout message which appears if user has been idle for more than 15 minutes
const timeOutMsgBtn = document.querySelector('.timeOutBtn');
timeOutMsgBtn.addEventListener('click', toggleTimeoutMsg);
function toggleTimeoutMsg() {
	timeOutMsgBg.classList.toggle('toggleHide');
}

//Variable to select the payment input fields and change event to trigger the validation function
const ssnField = document.querySelector('#ssn');
ssnField.addEventListener('input', activateSubmitOrder);
const cardNoField = document.querySelector('#cardno');
cardNoField.addEventListener('input', activateSubmitOrder);
const cardCvvField = document.querySelector('#cvv');
cardCvvField.addEventListener('input', activateSubmitOrder);
const cardExpiryField = document.querySelector('#expirydate');
cardExpiryField.addEventListener('input', activateSubmitOrder);

//Variables to define the different validation criteria - RegEx for different fields in the payment forms
const ssnRegEx = /^(?=[\s\S]{0,13}$)\d{6}(?:\d{2})?[-\s]?\d{4}/;
const cardNoRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
//Variables to hold criteria specific for the expiry date
const expiryDateRegEx = /^(0[1-9]|1[0-2])\/(20)?(24|25|26|27|28|29)$/;
const cvvRegex = /^\d{3,4}$/;
const fNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/
const lNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/
const zipRegex = /^[1-9]\d{2}\s?\d{2}$/
const telRegex = /^(07\d{8}|(\+46\s?)?\d{10})$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//Variable for the order form submit order
const submitOrderBtn = document.querySelector('#submitorder');

function clearPaymentField() {
	//Kolla om det går applicera form.clear istället
	cardNoField.value = '';
	cardExpiryField.value = '';
	cardCvvField.value = '';
	ssnField.value = '';
	submitOrderBtn.setAttribute('disabled', '');
}




//ERROR MESSAGES
//Variable for first name field error message
const fNameErrorMsg = document.querySelector('#fNameErrorMsg');
const lNameErrorMsg = document.querySelector('#lNameErrorMsg');
const streetErrorMsg = document.querySelector('#streetError');
const zipErrorMsg = document.querySelector('#zipErrorMsg');
const cityErrorMsg = document.querySelector('#cityErrorMsg');
const telErrorMsg = document.querySelector('#telErrorMsg');
const emailErrorMsg = document.querySelector('#emailErrorMsg');

//Variables & event listeners for fields in the contact detail form
const fnameField = document.querySelector('#fname');
fnameField.addEventListener('change', activatePaymentForm);
fnameField.addEventListener('change', fNameError);
const lnameField = document.querySelector('#lname');
lnameField.addEventListener('focusout', activatePaymentForm);
lnameField.addEventListener('change', lNameError);
const streetField = document.querySelector('#street-address');
streetField.addEventListener('focusout', activatePaymentForm);
streetField.addEventListener('change', streetError);
const zipField = document.querySelector('#zip');
zipField.addEventListener('focusout', activatePaymentForm);
zipField.addEventListener('change', zipError);
const cityField = document.querySelector('#city');
cityField.addEventListener('focusout', activatePaymentForm);
cityField.addEventListener('change', cityError);
const telField = document.querySelector('#tel');
telField.addEventListener('focusout', activatePaymentForm);
telField.addEventListener('change', telError);
const emailField = document.querySelector('#email');
emailField.addEventListener('focusout', activatePaymentForm);
emailField.addEventListener('change', emailError);


function fNameError() {
  if (fNameRegex.exec(fnameField.value) === null) {
		fNameErrorMsg.classList.remove('toggleHide', 'activeField');
    fnameField.classList.remove('fieldValid');
    fnameField.classList.add('fieldInvalid');
	} else {
    fNameErrorMsg.classList.add('toggleHide', 'activeField');
    fnameField.classList.add('fieldValid');
    fnameField.classList.remove('fieldInvalid');
	}
}
function lNameError() {
	if (lNameRegex.exec(lnameField.value) === null) {
		lNameErrorMsg.classList.remove('toggleHide', 'activeField');
    lnameField.classList.remove('fieldValid');
    lnameField.classList.add('fieldInvalid');
	} else {
    lNameErrorMsg.classList.add('toggleHide', 'activeField');
    lnameField.classList.add('fieldValid');
    lnameField.classList.remove('fieldInvalid');
	}
}
function streetError() {
	if (streetField.value.trim() === '') {
		streetErrorMsg.classList.remove('toggleHide', 'activeField');
    streetField.classList.remove('fieldValid');
    streetField.classList.add('fieldInvalid');
	} else {
    streetErrorMsg.classList.add('activeField', 'toggleHide');
		streetField.classList.add('fieldValid');
    streetField.classList.remove('fieldInvalid');
	}
}
function zipError() {
	if (zipRegex.exec(zipField.value) === null) {
		zipErrorMsg.classList.remove('toggleHide', 'activeField');
    zipField.classList.remove('fieldValid');
    zipField.classList.add('fieldInvalid');
	} else {
    zipErrorMsg.classList.add('toggleHide', 'activeField');
		zipField.classList.add('fieldValid');
    zipField.classList.remove('fieldInvalid');
	}
}
function cityError() {
	if (cityField.value.trim() === '') {
		cityErrorMsg.classList.remove('toggleHide', 'activeField');
    cityField.classList.remove('fieldValid');
    cityField.classList.add('fieldInvalid');
	} else {
    // cityErrorMsg.classList.add('activeField');
		cityErrorMsg.classList.add('toggleHide', 'activeField');
    cityField.classList.add('fieldValid');
    cityField.classList.remove('fieldInvalid');
	}
}
function telError() {
	if (telRegex.exec(telField.value) === null) {
		telErrorMsg.classList.remove('toggleHide', 'activeField');
    telField.classList.remove('fieldValid');
    telField.classList.add('fieldInvalid');
	} else {
		telErrorMsg.classList.add('toggleHide', 'activeField');
		telField.classList.add('fieldValid');
    telField.classList.remove('fieldInvalid');
	}
}
function emailError() {
	if (emailRegex.exec(emailField.value) === null) {
		emailErrorMsg.classList.remove('toggleHide', 'activeField');
    emailField.classList.remove('fieldValid');
    emailField.classList.add('fieldInvalid');
	} else {
    emailErrorMsg.classList.add('toggleHide', 'activeField');
		emailField.classList.add('fieldValid');
    emailField.classList.remove('fieldInvalid');
	}
}
//Variable & event listener for the "To Payment Button"
const toPaymentBtn = document.querySelector('#toPaymentBtn');
toPaymentBtn.addEventListener('click', activatePaymentForm);
//Variable for the payment section
const paymentSection = document.querySelector('.paymentSection');

//Function to validate the contact details in form - piror to payment section
  //Variable which checks if all fields valid

function activatePaymentForm() {
  fNameError()
  lNameError()
  streetError()
  zipError()
  cityError()
  telError()
  emailError()
  // If
  const allFieldsValid = (
    fNameErrorMsg.classList.contains('activeField') &&
    lNameErrorMsg.classList.contains('activeField') &&
    streetErrorMsg.classList.contains('activeField') &&
    zipErrorMsg.classList.contains('activeField') &&
    cityErrorMsg.classList.contains('activeField') &&
    telErrorMsg.classList.contains('activeField') &&
    emailErrorMsg.classList.contains('activeField')
  );
  if (allFieldsValid) {
    paymentSection.classList.remove('toggleHide');
  } else {
    paymentSection.classList.add('toggleHide');
  }
}

function activateSubmitOrder() {
	submitOrderBtn.setAttribute('disabled', '');
	if (currentPaymentOption === 'cardPaymentOption') {
		if (cardNoRegEx.exec(cardNoField.value) === null) {
			console.log('Invalid card no');
			return;
		} else if (expiryDateRegEx.exec(cardExpiryField.value) === null) {
			console.log('Invalid expiry format');
			return;
		} else if (cvvRegex.exec(cardCvvField.value) === null) {
			console.log('Invalid cvv no');
			return;
		}
	} else if (currentPaymentOption === 'invoicePaymentOption' ) {
		if (ssnRegEx.exec(ssnField.value) === null) {
			submitOrderBtn.setAttribute('disabled', '');
			console.log('Invalid SSN format');
			return;
		}
	}
	submitOrderBtn.removeAttribute('disabled');
}

// function displayError() {
//   if (email.validity.valueMissing) {

//   }
// }

//Search function
//Search Input variabel - Variable to slect the search bar input variable in header
const navSearchBar = document.querySelector('.navSearchBar');
//Search button variable - Variable to slect the search button in the header
const searchBtn = document.querySelector('.navSearchBtn');

//Variable which is multiplied with the price of all individual inside both the print products function and print to cart function to display the individual prices accumilated and not only the total
// - should the criterie meet, the prices are increased, if not the price is unchanged
let priceBoost = 1;
//Function to check if the weekend price increase citeria is matched
function weekendPriceBoost() {
	//Variable to store actual current date which is used to define the discount parameters
	const weekendCheck = new Date();
	// Defined variables which store certain days/hours to make the reading of conditions easier
	//Variable for friday
	const boostrapFriday = weekendCheck.getDay() === 6; //6
	//Variable for Monday
	const tomatoSaleMonday = weekendCheck.getDay() === 1; //1
	//Variable for actual current hour
	const rightNowHour = weekendCheck.getHours();
	//Sets condition for the priceBoost variable which increases the amount if certain days are true
	if (
		(boostrapFriday && rightNowHour >= 15) ||
		(tomatoSaleMonday && rightNowHour <= 3)
	) {
		priceBoost *= 1.15;
	}
}
weekendPriceBoost();

//Burger Menu (open.button) - Function for displaying navigation menu when clicking on burger menu BTN
function burgerMenuOpen() {
	openBurgeMenu.classList.remove('toggleHide');
}

//Burger Menu (close.button) - Function for hiding navigation menu when clicking on close in nav menu BTN
function burgerMenuClose() {
	openBurgeMenu.classList.add('toggleHide');
}

//Cart preview (Toggle.button) - Function which displays/collapses cart preview when clicking on cart BTN
function cartToggle() {
	cartPreview.classList.toggle('toggleHide');
}
//Cart preview (close.button) - Function which collapses cart preview when clicking on close BTN in the cart preview
function cartClose() {
	console.log(openBurgeMenu);
	cartPreview.classList.add('toggleHide');
}

//Checkout section (open.button) - Function which displays checkout section when clicking on proceed to checkout BTN in the cart preview
function orderSummary() {
	checkOutPage.classList.remove('toggleHide');
	mainPageWrapper.classList.add('toggleHide');
	cartPreview.classList.add('toggleHide');
}

//Checkout section (close.button) - Function which hides checkout section and displays product page when clicking on continue shopping BTN in the checkout section
function toggleCheckout() {
	checkOutPage.classList.add('toggleHide');
	mainPageWrapper.classList.remove('toggleHide');
}

//Checkout section (toggle.button) - Function which displays/hides sorting menu when clicking the sort icon BTN
function sortToggle() {
	sortMenu.classList.toggle('toggleHide');
}

//Total amount(Pieces/products) to update/streamline - Function to streamline the total amount accross the cart preview, checkout and order confirmation
function updateTotalAmount() {
	//Define a variable to hold a reduce function which accumilates the total amount value
	//Print the total amount accumilated at the same time into the different sections based on the totalProductsAmunt
	// totalAmountIcon.innerHTML = totalProductsAmount;
	// totalAmountcartPreview.innerHTML = `<h3>Total PCS: ${totalProductsAmount}</h3>`;
	// totalAmountCheckout.innerHTML = totalProductsAmount;
	// totalAmountSummary.innerHTML = totalProductsAmount;
}

//Total Price to be updated & streamline - Function to streamline the total price accross the cart preview, checkout and order confirmation
function updateTotalPrice() {
	// let discountMessage = '';
	// //Define a variable to hold a reduce function which accumilates the total price value
	// let totalProductsPrice = cart.reduce(
	// 	(total, product) => total + product.price * priceBoost * product.amount,
	// 	0
	// );
	// //Condition which provides user with a discount for the total price alongside a message
	// if (weekDay.getDay() === 1) {
	// 	discountMessage =
	// 		'10% OFF a wonderful discount on the entire order to start your week<3';
	// 	totalProductsPrice *= 0.9;
	// }
	// // let adjustedPriceOnAmount = product.price;
	// if (product.amount > 0) {
	//   adjustedPriceOnAmount *= 0.9
	// }
	// // Print the total price accumilated into the different sections
	// totalPriceCartPreview.innerHTML = `<h3>Total amount: ${totalProductsPrice.toFixed(
	// 	2
	// )} $</h3><div class="discountMessage">${discountMessage}</div>`;
	// totalPriceCheckout.innerHTML = `<h4>Total amount: ${totalProductsPrice.toFixed(
	// 	2
	// )} $</h4><div class="discountMessage">${discountMessage}</div>`;
	// totalPriceSummary.innerHTML = `${totalProductsPrice.toFixed(2)} $`;
	// // }
}

//Variable for:

//Add input event to the searchbar and display function
navSearchBar.addEventListener('input', (e) => {
	let keyWord = e.target.value;

	if (keyWord && keyWord.trim().length > 0) {
		// keyWord = keyWord.trim().toLowerCase()
		console.log(keyWord);
	}
	// else {

	// }
});

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

/*------------------------------------------SORTING & FILTER------------------------------------------*/
//Have the price range react and show the price intervall set by user

//Variable for price range slider
const priceRangeSlider = document.querySelector('#pricerange');
//Add event to the slider
priceRangeSlider.addEventListener('input', adjustPriceRange);

//Global variabel for the price element
const priceRangeValue = document.querySelector('.rangeVal');
//Variable for BTN to sort alphabetically
alphabetSorting = document.querySelector('.sortAlpha');
alphabetSorting.addEventListener('click', sortByAlphabet);
//Array for filtered products on category
let filteredProductStock = [...productStock];
//Array for filtered products on price range
let filteredPriceRange = [...productStock];
//Function to display the slider price and apply to array
function adjustPriceRange() {
	const currentPriceValue = priceRangeSlider.value;
	priceRangeValue.innerHTML = currentPriceValue;
	filteredPriceRange = filteredProductStock.filter(
		(product) => product.price <= currentPriceValue
	);
	console.log(filteredPriceRange);
	updateStock();
}

// Function for sorting based on name A-Z
function sortByAlphabet() {
	filteredPriceRange.sort((product1, product2) => {
		if (product1.name < product2.name) {
			return -1;
		}
		if (product1.name > product2.name) {
			return 1;
		}
		return 0;
	});
	pushProductStock();
}

//Function to print out the products to the main product cataloge page
function pushProductStock() {
	productContainer.innerHTML = '';
	filteredPriceRange.forEach((product, index) => {
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
                ${(product.price * priceBoost).toFixed(
									2
								)} $<span class="articleRating"> <img src="Assets/icons/Rating.webp" alt="" height="50">${
			product.rating
		}</span>
            </p>

            <div class="articleBtn">
                <button class="articleRemoveFromCart" id="articleRemoveFromCart${index}">Remove</button>
                <p class="articleAmnt">In cart: <span>${
									product.amount
								}</span></p>
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
	const subtractFromCartBtn = document.querySelectorAll(
		'.articleRemoveFromCart'
	);
	subtractFromCartBtn.forEach((button) => {
		button.addEventListener('click', subtractAProduct);
	});
}

//Function to be able to increase the amount of product in the cart view & Summary view
function addAProduct(e) {
	let index = e.target.id.replace('articleAddToCart', '');
	index = Number(index);
	// productStock[index].amount += 1;
	filteredPriceRange[index].amount += 1;
	cart = productStock.filter((productStock) => productStock.amount > 0);
	pushProductStock();
	addProductToCart();
}

//Function to be able to decrease the amount of product in the cart view & Summary view
function subtractAProduct(e) {
	let index = e.target.id.replace('articleRemoveFromCart', '');
	if (filteredPriceRange[index].amount > 0) {
		index = Number(index);
		// productStock[index].amount -= 1;
		filteredPriceRange[index].amount -= 1;
		//Conditions the product to be removed from cart if the amount is set to 0
		if (filteredPriceRange[index].amount === 0) {
			cart = cart.filter(
				(product) => product.serialNo !== productStock[index].serialNo
			);
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

//Function to sreamline products + cost for individual and total + shipping in cart preview, checkout section and summary section
function addProductToCart() {
	// weekendPriceBoost()
	totalAmountIcon.innerHTML = '';
	cartSummary.innerHTML = '';
	checkoutSummary.innerHTML = '';
	totalPriceCartPreview.innerHTML = ``;
	totalPriceCheckout.innerHTML = ``;
	totalPriceSummary.innerHTML = ``;
	let discountMessage = '';
	// checkoutSummary.innerHTML = "";
	let totalPriceSum = 0;
	let totalProductsAmount = cart.reduce(
		(total, product) => total + product.amount,
		0
	);
	cart.forEach((product, index) => {
		//Variable to round up the price to a maximum of two decimal points
		let discountProuductOnAmount = product.price;
		if (product.amount >= 10) {
			discountProuductOnAmount *= 0.9;
		}

		// discountEntireOrder(discountMessage, discountProuductOnAmount);
		const MondayCheck = new Date();
		console.log(MondayCheck.getDay());
		if (MondayCheck.getDay() === 2) {
			//1
			discountMessage =
				'10% OFF a wonderful discount on the entire order to start your week<3';
			discountProuductOnAmount *= 0.9;
		}

		// if ()
		totalPriceSum += product.amount * discountProuductOnAmount * priceBoost;
		let totalPcsPrice = (
			discountProuductOnAmount *
			priceBoost *
			product.amount
		).toFixed(2);

		cartSummary.innerHTML += `<li class="productsInCart">
			<div>
			<img
				class="productPreviewImage"
				src="${product.image.src}"
				width="${product.image.width}"
				height="${product.image.height}"
			/>
			<h3 class="previewProductTitle">${product.name}</h3>
			</div>
			<p class="previewProductPrice">${totalPcsPrice}$</p>
		<div class="productAmountActions">
			<button class="minusOneProduct" data-id="${index}" >-</button
			><input class="productAmount" type="number" value="${product.amount}" /><button
			class="addOneProduct" data-id="${index}"
			>
				+
			</button>
			<button class="previewProductRemoval" id="productRemove${product.serialNo}">Remove
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
		<p class="ProductCheckoutPrice">${totalPcsPrice}</p>
		<div class="productAmount">
		<button class="minusOneProduct" data-id="${index}" >-</button>
		<input class="productAmountValue" type="number" value="${product.amount}"/>
		<button
			class="addOneProduct" data-id="${index}"
			>
				+
			</button>

			<button class="previewProductRemoval" id="productRemove${product.serialNo}">Remove
			</button>

      <button class="previewProductRemoval" id="productRemove${product.serialNo}"><img src="Assets/icons/trashcan.svg" height="30" width="30">
      </button>

		</div>`;

		let shippingCost = Math.round(25 + totalPriceSum * 0.1);
		if (totalProductsAmount >= 15) {
			shippingCost = 0;
		}
		totalAmountIcon.innerHTML = totalProductsAmount;
		totalPriceCartPreview.innerHTML = `<h3>Total PCS: ${totalProductsAmount}</h3><h3>Total amount: ${totalPriceSum.toFixed(
			2
		)} $</h3><div class="discountMessage">${discountMessage}</div>`;
		totalPriceCheckout.innerHTML = `<h4 class="ShippingCost">Shipping: ${shippingCost}$</h4></h4><div class="discountMessage">${discountMessage}</div><h4>Total PCS: ${totalProductsAmount}</h4><h4>Total amount + shipping: ${(
			shippingCost + totalPriceSum
		).toFixed(2)} $`;
		totalPriceSummary.innerHTML = `${(shippingCost + totalPriceSum).toFixed(
			2
		)} ${totalProductsAmount}`;

		disableInvoiceOption(totalPriceSum);
	});

	if (totalProductsAmount > 0) {
		resetOrderTimer =
			setTimeout(resetCartOrder, 1000 * 60 * 15) &&
			setTimeout(toggleTimeoutMsg, 1000 * 60 * 15);
	} else {
		clearTimeout(resetOrderTimer);
	}
	//Add clickEvent to each of the removal Btns
	Array.from(document.querySelectorAll('.previewProductRemoval')).forEach(
		(btn) => {
			btn.addEventListener('click', removeFromCartBtn);
		}
	);

	const cartPlus = document.querySelectorAll('.addOneProduct');
	const cartMinus = document.querySelectorAll('.minusOneProduct');

	cartPlus.forEach((button) => {
		button.addEventListener('click', increaseCartPlus);
	});

	cartMinus.forEach((button) => {
		button.addEventListener('click', decreaseCartMinus);
	});
}

// function discountEntireOrder(discountMessage, discountProuductOnAmount) {
//   const MondayCheck = new Date();
//   console.log(MondayCheck.getDay())
// 	if (MondayCheck.getDay() === 3) { //1
// 		discountMessage =
// 			'10% OFF a wonderful discount on the entire order to start your week<3';
// 		discountProuductOnAmount *= 0.9;
// 	}
//   // return {
//   //   discountMessage: discountMessage,
//   //   discountProuductOnAmount: discountProuductOnAmount
//   // };
// }
//Call two functions at the same time
function updateStock() {
	pushProductStock();
	addProductToCart();
}
function disableInvoiceOption(totalPriceSum) {
	if (totalPriceSum >= 800) {
		invoicePaymentBtn.setAttribute('disabled', '');
		cardPayment.style.display = 'flex';
		invoicePayment.style.display = 'none';
	} else {
		invoicePaymentBtn.removeAttribute('disabled');
	}
}
//Function for reset BTN in the checkout section, also called when timer runs out for user
function resetCartOrder() {
	productStock.forEach((product) => {
		product.amount = 0;
	});
	totalAmountIcon.innerHTML = '';
	cart = [];
	updateStock();
	clearPaymentField();
	// cartClose()
	// toggleTimeoutMsg()
}
//Function to reset cart and push message to user informing that they were too slow
// function tooSlow() {
//       console.log('stan')
//       resetCartOrder()
// }

//Function for removing-product button in cart and Checkout summary
function removeFromCartBtn(e) {
	const productSerialNo = Number(
		e.currentTarget.id.replace('productRemove', '')
	);

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
