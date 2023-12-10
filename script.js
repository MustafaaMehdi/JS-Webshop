/*------------------------------------------Header variables & Evt listeners------------------------------------------*/
//Variable for the navigation bar
const navBar = document.querySelector('.navBar')
const themeToggleBtn = document.querySelector('.themeToggleBtn')
themeToggleBtn.addEventListener('click', themeToggle)
//Search Input variabel - Variable & event listener for the search bar input variable in header
const navSearchBar = document.querySelector('.navSearchBar');
navSearchBar.addEventListener('input', searchBarFilter)

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
const sortBtn = document.querySelector('#filterBtn');
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
/*------------------------------------------Header variables & Evt listeners------------------------------------------*/

/*START------------------------------------------PAGEWRAPPERS------------------------------------------START*/
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
//Variable for the order confirmation page 
const orderConfirmationPage = document.querySelector('.orderConfirmation')
//Variable for summary page after user has submitted order
const orderSummaryPage = document.querySelector('.orderSummary')

//Variable to select the timeout message
const timeOutMsgBg = document.querySelector('.timeOutMsgBg');
//Variable for Button to close the timeout message which appears if user has been idle for more than 15 minutes
const timeOutMsgBtn = document.querySelector('.timeOutBtn');
timeOutMsgBtn.addEventListener('click', toggleTimeoutMsg);
/*END------------------------------------------PAGE WRAPPERS------------------------------------------END*/

/*START------------------------------------------Sorting & filtering variables & Evt listeners------------------------------------------START*/
//Variable for price range slider
const priceRangeSlider = document.querySelector('#pricerange');

//Add event to the slider
priceRangeSlider.addEventListener('input', adjustPriceRange);

//Variables for the shape filter Btns 
const heartShapeFilter = document.querySelector('.heart')
heartShapeFilter.addEventListener('click', selectedShapeFilter)
const roundShapeFilter = document.querySelector('.round')
roundShapeFilter.addEventListener('click', selectedShapeFilter)
const squareShapeFilter = document.querySelector('.square')
squareShapeFilter.addEventListener('click', selectedShapeFilter)
const bearFilter = document.querySelector('.bear')
bearFilter.addEventListener('click', selectedShapeFilter)

//Variables for the color filter Btns
const redFilter = document.querySelector('.red')
redFilter.addEventListener('click', selectedColorFilter)
const blueFilter = document.querySelector('.blue')
blueFilter.addEventListener('click', selectedColorFilter)
const whiteFilter = document.querySelector('.white')
whiteFilter.addEventListener('click', selectedColorFilter)
const blackFilter = document.querySelector('.black')
blackFilter.addEventListener('click', selectedColorFilter)
const pinkFilter = document.querySelector('.pink')
pinkFilter.addEventListener('click', selectedColorFilter)
const brownFilter = document.querySelector('.brown')
brownFilter.addEventListener('click', selectedColorFilter)
const grayFilter = document.querySelector('.gray')
grayFilter.addEventListener('click', selectedColorFilter)

const clearFilterBtn = document.querySelector('#toggleFilterBtn')
clearFilterBtn.addEventListener('click', clearFilter)


//Global variabel for the price element
const priceRangeValue = document.querySelector('.rangeVal');
//Variable for BTN to sort alphabetically
alphabetAscSorting = document.querySelector('.sortAlpha');
alphabetAscSorting.addEventListener('click', sortingBySelection);
alphaDecSorting = document.querySelector('.sortAlphaReverse')
alphaDecSorting.addEventListener('click', sortingBySelection);

priceAscSorting = document.querySelector('.sortPriceAsc')
priceAscSorting.addEventListener('click', sortingBySelection);
priceDecSorting = document.querySelector('.sortPriceDec')
priceDecSorting.addEventListener('click', sortingBySelection);

ratingAscSorting = document.querySelector('.sortRatingAsc')
ratingAscSorting.addEventListener('click', sortingBySelection);
ratingDecSorting = document.querySelector('.sortRatingDec')
ratingDecSorting.addEventListener('click', sortingBySelection);

/*END------------------------------------------Soritng & filtering variables and Evt listeners------------------------------------------END*/

/*START------------------------------------------Form variables & Evt listeners------------------------------------------START*/
//Contact detial input fields
const fnameField = document.querySelector('#fname');
fnameField.addEventListener('change', fNameError);
const lnameField = document.querySelector('#lname');
lnameField.addEventListener('change', lNameError);
const streetField = document.querySelector('#street-address');
streetField.addEventListener('input', streetError);
const zipField = document.querySelector('#zip');
zipField.addEventListener('change', zipError);
const cityField = document.querySelector('#city');
cityField.addEventListener('change', cityError);
const telField = document.querySelector('#tel');
telField.addEventListener('change', telError);
const emailField = document.querySelector('#email');
emailField.addEventListener('change', emailError);


//Variables & eventlisteners for the payment input fields
//Variable to select the payment input fields and change event to trigger the validation function
const ssnField = document.querySelector('#ssn');
ssnField.addEventListener('change', ssnError);
ssnField.addEventListener('input', activateSubmitOrder);
const cardNoField = document.querySelector('#cardno');
cardNoField.addEventListener('change', cardNoError);
cardNoField.addEventListener('input', activateSubmitOrder);
const cardCvvField = document.querySelector('#cvv');
cardCvvField.addEventListener('change', cvvError);
cardCvvField.addEventListener('input', activateSubmitOrder);
const cardExpiryField = document.querySelector('#expirydate');
cardExpiryField.addEventListener('change', expiryError);
cardExpiryField.addEventListener('input', activateSubmitOrder);


//Variable for form fields error message
const fNameErrorMsg = document.querySelector('#fNameErrorMsg');
const lNameErrorMsg = document.querySelector('#lNameErrorMsg');
const streetErrorMsg = document.querySelector('#streetError');
const zipErrorMsg = document.querySelector('#zipErrorMsg');
const cityErrorMsg = document.querySelector('#cityErrorMsg');
const telErrorMsg = document.querySelector('#telErrorMsg');
const emailErrorMsg = document.querySelector('#emailErrorMsg');
const ssnErrorMsg = document.querySelector('#ssnErrorMsg');
const cardNoErrorMsg = document.querySelector('#cardNoErrorMsg');
const expiryErrorMsg = document.querySelector('#expiryErrorMsg');
const cvvErrorMsg = document.querySelector('#cvvErrorMsg')
const toPaymentErrorMsg = document.querySelector('#toPaymentErrorMsg')


//Variables to define the different validation criteria - RegEx for different fields in the payment forms
const ssnRegEx = /^(?=[\s\S]{0,13}$)\d{6}(?:\d{2})?[-\s]?\d{4}/;
const cardNoRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
//Variables to hold criteria specific for the expiry date
const expiryDateRegEx = /^(0[1-9]|1[0-2])\/(20)?(24|25|26|27|28|29)$/;
const cvvRegex = /^\d{3,4}$/;
const fNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/
const lNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/
const streetRegex = /^(.+)$/
const zipRegex = /^[1-9]\d{2}\s?\d{2}$/
const cityRegx = /^[a-zA-ZåäöÅÄÖ\s-]+$/
const telRegex = /^(07\d{8}|\+46\s?\d{8,10})$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


//Variable & eventlistener for the T&Cs checkbox in complete-order section
const privacyCheckBox = document.querySelector('.privacyNotice')
privacyCheckBox.addEventListener('change', activateSubmitOrder)

//Variable & event listener for the "To Payment Button" in contact detail section
const toPaymentBtn = document.querySelector('#toPaymentBtn');
toPaymentBtn.addEventListener('click', activatePaymentForm);
//Variable for the go back to details Btn in payment selection page 
const backToDetailsBtn = document.querySelector('#backToDetails')
backToDetailsBtn.addEventListener('click', backToDetails)


//Variable for the contact details order form
const contactDetils = document.querySelector('.orderForm')
//Variable for the payment section
const paymentSection = document.querySelector('.paymentSection');
//variable for the complete-order sectionn 
const completeOrder = document.querySelector('.orderSubmit')

//Variable to select the card payment form
const cardPayment = document.querySelector('#cardPaymentForm');
//Variable to select the invoice payment form
const invoicePayment = document.querySelector('#invoicePaymentForm');


//reset BTN in the checkout section
const resetCart = document.querySelector('#resetBTN');
//Click event for the reset BTN in checkout section
resetCart.addEventListener('click', resetCartOrder);

//Variable for the order form submit order
const submitOrderBtn = document.querySelector('#submitorder');
submitOrderBtn.addEventListener('click', orderConfirmation)

//*Variable to select the invoice radio button option
const invoicePaymentBtn = document.querySelector('#invoicePaymentOption');
//*Click event for the button to trigger the display of invoice and hide card option
invoicePaymentBtn.addEventListener('click', selectedPaymentOption);
//*Variable to select the card radio button option
const cardPaymentBtn = document.querySelector('#cardPaymentOption');
//*Click event for the button to trigger the display of card and hide invoice option
cardPaymentBtn.addEventListener('click', selectedPaymentOption);

//Variable and event listener for the reset Btn in the checkout view
const resetToMainBtn = document.querySelector('.resetAllBtn')
resetToMainBtn.addEventListener('click', resetToMain)

/*END------------------------------------------Form variables & Evt listeners------------------------------------------END*/

//Variables for the message which is displayed upon adding a product to cart from product page
const addedToCartMsg = document.querySelector('.addedToCart');
const addedToCartProduct = document.querySelector('.addedMsg')
const addedToCartBtn = document.querySelector('.addedBtn')
addedToCartBtn.addEventListener('click', orderSummary)

//Variable which is set to validate if criteria for price markup is true or false used in weekendPriceBoost()
let priceBoost = 1;

//Variables used in updateTimers() to store the setTimeout to message and reset fucntion
let resetOrderTimer;
let msgTimer;

//Variable to set the default payment option to card
let currentPaymentOption = 'cardPaymentOption';

//Functions to alter between the card form and invoice form by applying display attribute directly to the section
function selectedPaymentOption(e) {
 currentPaymentOption = e.target.id;
	if (currentPaymentOption === 'cardPaymentOption') {
		cardPayment.style.display = 'grid';
		invoicePayment.style.display = 'none';
	} else if (currentPaymentOption === 'invoicePaymentOption') {
		cardPayment.style.display = 'none';
		invoicePayment.style.display = 'grid';
	}
	clearPaymentField();
}

//Function which is called by timeout to display timeoutmessage and for the Btn to close the Message
function toggleTimeoutMsg() {
	timeOutMsgBg.classList.toggle('toggleHide');
}

//Funciton which clears payment input
function clearPaymentField() {
	cardNoField.value = '';
	cardExpiryField.value = '';
	cardCvvField.value = '';
	ssnField.value = '';
}

//General inputValidation to shorten the amount of code for each individual field validation
function inputValidation(fieldRegex, inputField, fieldError) {
  if (fieldRegex.exec(inputField.value) === null) {
		fieldError.classList.remove('toggleHide');
    inputField.classList.remove('fieldValid');
    inputField.classList.add('fieldInvalid');
	} else {
    fieldError.classList.add('toggleHide');
    inputField.classList.add('fieldValid');
    inputField.classList.remove('fieldInvalid');
	}
}

//Functionns which call the inputValidation() individually upon interaction based on their own values
function fNameError() {
  inputValidation(fNameRegex, fnameField, fNameErrorMsg)
}
function lNameError() {
  inputValidation(lNameRegex, lnameField, lNameErrorMsg)
}
function streetError() {
  inputValidation(streetRegex, streetField, streetErrorMsg)
}
function zipError() {
  inputValidation(zipRegex, zipField, zipErrorMsg)
}
function cityError() {
  inputValidation(cityRegx, cityField, cityErrorMsg)
}
function telError() {
  inputValidation(telRegex, telField, telErrorMsg)
}
function emailError() {
  inputValidation(emailRegex, emailField, emailErrorMsg)
}
function ssnError() {
  inputValidation(ssnRegEx, ssnField, ssnErrorMsg)
}
function cardNoError() {
  inputValidation(cardNoRegEx, cardNoField, cardNoErrorMsg)
}
function cvvError() {
  inputValidation(cvvRegex, cardCvvField, cvvErrorMsg)
}
function expiryError() {
  inputValidation(expiryDateRegEx, cardExpiryField, expiryErrorMsg)
}

//Function for the back to details Btn in payment view which toggles the payment and calls on clear payment field function
function backToDetails() {
  backToDetailsBtn.classList.add('toggleHide')
  paymentSection.style.display = 'none'
  toPaymentErrorMsg.classList.remove('toggleHide')
  contactDetils.style.display = "grid"
  toPaymentBtn.classList.remove('toggleHide')
  completeOrder.style.display = "none"
  clearPaymentField()
}

//Function to validate the contact details in form - piror to payment section
function activatePaymentForm() {

//Variable which checks if all fields valid
  const allFieldsValid = (
    fnameField.classList.contains('fieldValid') &&
    lnameField.classList.contains('fieldValid') &&
    streetField.classList.contains('fieldValid') &&
    zipField.classList.contains('fieldValid') &&
    cityField.classList.contains('fieldValid') &&
    telField.classList.contains('fieldValid') &&
    emailField.classList.contains('fieldValid')
  );
  if (allFieldsValid) {
    backToDetailsBtn.classList.remove('toggleHide')
    paymentSection.style.display = 'grid';
    completeOrder.style.display = "grid"
    toPaymentErrorMsg.classList.add('toggleHide')
    contactDetils.style.display = "none"
    toPaymentBtn.classList.add('toggleHide')
  } else {
    paymentSection.classList.add('toggleHide');
    toPaymentBtn.classList.remove('toggleHide')
    fNameError()
    lNameError()
    streetError()
    zipError()
    cityError()
    telError()
    emailError()
    ssnError()
    cardNoError()
    cvvError()
    expiryError()
  }
  submitOrderBtn.setAttribute('disabled', '');
}

//Function which checks if payment fields are valid and activates submit Btn
function activateSubmitOrder() {
  const cardIsValid =
    cardNoRegEx.exec(cardNoField.value) &&
    expiryDateRegEx.exec(cardExpiryField.value) &&
    cvvRegex.exec(cardCvvField.value);

  const ssnIsValid = ssnRegEx.exec(ssnField.value);

  if ((currentPaymentOption === 'cardPaymentOption' && cardIsValid) && privacyCheckBox.checked) {
      // finalizeOrder()
      submitOrderBtn.removeAttribute('disabled');
      console.log('card is A OK')
      // orderConfirmation()
  }  else if ((currentPaymentOption === 'invoicePaymentOption' && ssnIsValid) && privacyCheckBox.checked) {
    // finalizeOrder()
    submitOrderBtn.removeAttribute('disabled');
    console.log('SSN is A OK')
  } else {
    console.log('Payment info is NOT OK')
    submitOrderBtn.setAttribute('disabled', '');
  }
}
//Function to display order confirmation message when user clicks on submit Btn
function orderConfirmation() {
  orderConfirmationPage.classList.remove('toggleHide')
  checkOutPage.classList.add('toggleHide')
  navBar.classList.add('toggleHide')
}

//Function to check if the weekend price increase citeria is matched
function weekendPriceBoost() {
	//Variable to store actual current date which is used to define the discount parameters
	const weekendCheck = new Date();
	// Defined variables which store certain days/hours to make the reading of conditions easier
	const boostrapFriday = weekendCheck.getDay() === 5; //5
	const inflationWeekend = (weekendCheck.getDay() === 6 || weekendCheck.getDay() === 0)
	const tomatoSaleMonday = weekendCheck.getDay() === 1; //1
	//Variable for actual current hour
	const rightNowHour = weekendCheck.getHours();
	//Sets condition for the priceBoost variable which increases the amount if certain days are true
	if (
		(boostrapFriday && rightNowHour >= 15) || inflationWeekend || (tomatoSaleMonday && rightNowHour < 3)
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
  backToShop.classList.remove('toggleHide')
	checkOutPage.classList.remove('toggleHide');
  cartPreviewBtn.classList.add('toggleHide')
	mainPageWrapper.classList.add('toggleHide');
	cartPreview.classList.add('toggleHide');
  backToDetails();
}
//Checkout section (close.button) - Function which hides checkout section and displays product page when clicking on continue shopping BTN in the checkout section
function toggleCheckout() {
  cartPreviewBtn.classList.remove('toggleHide')
  backToShop.classList.add('toggleHide')
	checkOutPage.classList.add('toggleHide');
	mainPageWrapper.classList.remove('toggleHide');
}

//Checkout section (toggle.button) - Function which displays/hides sorting menu when clicking the sort icon BTN
function sortToggle() {
  sortBtn.classList.add('toggleHide')
  clearFilterBtn.classList.remove('toggleHide')
	sortMenu.classList.remove('toggleHide');
}
//Function which toggles the darkTheme class in body depending on user preference
function themeToggle() {
document.body.classList.toggle('darkTheme')
}

//Array containing all the products
const productStock = [
	{
		name: "Segreto D'Amore",
		amount: 0,
		serialNo: 1,
		price: 28.99,
		category: { shape: 'heart', color: 'red' },
		rating: 4.8,
		image: {
			src: "Assets/Images/Warehouse/SegretoD'Amore.webp",
			alt: 'heartshaped black box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/CestoDiRose.webp',
			alt: 'white round box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating2.webp',
			alt: 'two roses indicating decent rating',
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
			src: 'Assets/Images/Warehouse/GioielloDiFiori.webp',
			alt: 'blue round box filled with blue roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating3.webp',
			alt: 'a single rose indicating low rating',
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
			src: 'Assets/Images/Warehouse/CuoreInfinito2.webp',
			alt: 'transparent square box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/NotteRomantica.webp',
			alt: 'black square box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/GioielloDiRoseBianche.webp',
			alt: 'white square box filled with pink roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/CuorediRoseBlu.webp',
			alt: 'white round box filled with blue roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a single rose indicating low rating',
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
			src: 'Assets/Images/Warehouse/AmoreEterno.webp',
			alt: 'black heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'three roses indicating decent rating',
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
			src: 'Assets/Images/Warehouse/DolcezzaInRosa.webp',
			alt: 'pink round box filled with blue roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating3.webp',
			alt: 'a single rose indicating low rating',
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
			src: 'Assets/Images/Warehouse/GioiaDelCuore.webp',
			alt: 'white heart shaped box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/SerenataRosata.webp',
			alt: 'round shaped pink box filled with pink roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'three roses indicating decent rating',
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
			src: 'Assets/Images/Warehouse/DolceAmore.webp',
			alt: 'white round shaped box filled with red roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/DolceAbbraccio.webp',
			alt: 'white bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/CoccoleDiNoce.webp',
			alt: 'brown bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'three roses indicating decent rating',
    },
	},
	{
		name: 'Gioiello Del Cuore',
		amount: 0,
		serialNo: 16,
		price: 21.99,
		category: { shape: 'bear', color: 'gray' },
		rating: 4.5,
		image: {
			src: 'Assets/Images/Warehouse/GioielloDelCuore.webp',
			alt: 'grey bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: "Assets/Images/Warehouse/OrsettoD'Amore.webp",
			alt: 'red bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/RosaIncanto.webp',
			alt: 'pink bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
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
			src: 'Assets/Images/Warehouse/SognoAzzurro.webp',
			alt: 'blue mini bear made out of plastic roses',
			height: 100,
			width: 100,
		},
    ratingImage: {
      src: 'Assets/icons/rating1.webp',
			alt: 'a bouqet of roses indicating high rating',
    },
	},
];
//Array for filtered products on category
let filteredProductStock = [...productStock];
//Array for filtered products on price range
let filteredPriceRange = [...productStock];

//Function to display the slider price and apply to array
function adjustPriceRange() {
  navSearchBar.value = ''
	const currentPriceValue = priceRangeSlider.value;
	priceRangeValue.innerHTML = currentPriceValue;
	filteredPriceRange = filteredProductStock.filter(
		(product) => product.price <= currentPriceValue
	);
	console.dir(priceRangeSlider)
	pushProductStock()
}


//Function to clear the filter/sorting/search values applied 
function clearFilter() {
  priceRangeSlider.value = 59.99; 
  navSearchBar.value = '';
  sortByShape('clearFilter')
  pushProductStock();
  sortBtn.classList.remove('toggleHide')
  clearFilterBtn.classList.add('toggleHide')
  sortMenu.classList.add('toggleHide');
}

//Generic function to allow the selection of the shape filtering based on the ID which is retrieved by the Btn that is clicked
function sortByShape(shape) {
  navSearchBar.value = '';
	filteredPriceRange = filteredProductStock.filter(
		(product) => product.category.shape === shape
	);
  if (shape === 'clearFilter') {
    filteredPriceRange = productStock
  }
	pushProductStock()
}

//Function to select the correct filtering radioBTN ID which is then run by sortByShape based on the shape = ID of the BTN
function selectedShapeFilter(e) {
	let currentFilterOption = e.currentTarget.classList[0];
	sortByShape(currentFilterOption)
}

//Generic function to allow the selection of the shape filtering based on the ID which is retrieved
function sortByColor(color) {
  navSearchBar.value = '';
	filteredPriceRange = filteredProductStock.filter(
		(product) => product.category.color === color
	);

	pushProductStock()
}

//Function to select the correct filtering radioBTN ID which is then run by sortByShape based on the shape = ID of the BTN
function selectedColorFilter(e) {
	let currentColorOption = e.currentTarget.classList[0];
	sortByColor(currentColorOption)
}

//Function for the search bar which resets the price range and filters the procuct array based on the keyword
function searchBarFilter(e) {
  priceRangeSlider.value = 59.99
  let keyWord = e.target.value
  if (keyWord.length > 0) {
    filteredPriceRange = productStock.filter((product) =>
      product.name.toLowerCase().includes(keyWord)
    );
  } else {
    filteredPriceRange = [...productStock];
  }
  pushProductStock()
}

// Function for sorting based on which Btn is clicked and class is retrieved from that Btn
function sortingBySelection(e) {
  let currentSortOption = e.currentTarget.classList[0]
	filteredPriceRange.sort((product1, product2) => {
    if (currentSortOption === 'sortAlpha') {
		if (product1.name < product2.name) {
			return -1;
		}
		if (product1.name > product2.name) {
			return 1;
		}
		return 0;
  } else if (currentSortOption === 'sortAlphaReverse') {
		if (product1.name < product2.name) {
			return 1;
		}
		if (product1.name > product2.name) {
			return -1;
		}
		return 0;
  } else if (currentSortOption === 'sortPriceAsc') {
		if (product1.price < product2.price) {
			return -1;
		}
		if (product1.price > product2.price) {
			return 1;
		}
		return 0;
  } else if (currentSortOption === 'sortPriceDec') {
		if (product1.price < product2.price) {
			return 1;
		}
		if (product1.price > product2.price) {
			return -1;
		}
		return 0;
  } else if (currentSortOption === 'sortRatingAsc') {
		if (product1.rating < product2.rating) {
			return -1;
		}
		if (product1.rating > product2.rating) {
			return 1;
		}
		return 0;
  } else if (currentSortOption === 'sortRatingDec') {
		if (product1.rating < product2.rating) {
			return 1;
		}
		if (product1.rating > product2.rating) {
			return -1;
		}
		return 0;
  } 
	});
	pushProductStock();
}

//Function to display a message to notify user of added product
function showAddedToCartMessage(addedProduct) {

  addedToCartProduct.innerHTML = `${addedProduct.name} added - In cart: ${addedProduct.amount}`;
  addedToCartMsg.style.opacity = '1';

  setTimeout(hideAddedToCartMessage, 5000);
  
}
//Function called by showAddedTocartMessage to hide it after 5Seconds
function hideAddedToCartMessage() {
  addedToCartMsg.style.opacity = '0';
}

//criteria which detects if user system has dark theme preference and adds dark class if true, else default is light theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('darkTheme');
} else {
  document.body.classList.remove('darkTheme')
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
								)} $<span class="articleRating"> <img src="${product.ratingImage.src}" alt="${product.ratingImage.alt}" height="50" width="50" loading="lazy">${
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
	filteredPriceRange[index].amount += 1;
	cart = productStock.filter((productStock) => productStock.amount > 0);
  const addedProduct = filteredPriceRange[index];
  showAddedToCartMessage(addedProduct);
	pushProductStock();
	addProductToCart();
}

//Functions to be able to decrease the amount of product in the cart view & Summary view
function subtractAProduct(e) {
	let index = e.target.id.replace('articleRemoveFromCart', '');
	if (filteredPriceRange[index].amount > 0) {
		index = Number(index);
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
		updateStock();
	}
}

//Function to sreamline products + cost for individual and total + shipping in cart preview, checkout section and summary section
function addProductToCart() {
	totalAmountIcon.innerHTML = '';
	cartSummary.innerHTML = '';
	checkoutSummary.innerHTML = '';
	totalPriceCartPreview.innerHTML = ``;
	totalPriceCheckout.innerHTML = ``;
  orderSummaryPage.innerHTML = ``
	totalPriceSummary.innerHTML = ``;
	let mondayIscountMessage = '';
  let tenForNineMsg = '';
	let totalPriceSum = 0;
	let totalProductsAmount = cart.reduce(
		(total, product) => total + product.amount,
		0
	);
	cart.forEach((product, index) => {
		//Variable to round up the price to a maximum of two decimal points
		let discountProuductOnAmount = product.price;
		if (product.amount >= 10) {
      tenForNineMsg =
				'10 for 9! Get the 10th product for free';
			discountProuductOnAmount *= 0.9;
		}

		const mondayCheck = new Date();
    const timeCheck = mondayCheck.getHours() 
		if (mondayCheck.getDay() === 1 && timeCheck < 10) { 
			mondayIscountMessage +=
				'10% OFF a wonderful discount on the entire order to start your week<3';
			discountProuductOnAmount *= 0.9;
		}

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
			><span class="productAmount">${product.amount}</span><button
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
			height="${product.image.height}" loading="lazy"
		/>

		<h3 class="ProductCheckoutTitle">${product.name}</h3>
		<p class="ProductCheckoutPrice">${totalPcsPrice}</p>
		<div class="productAmount">
		<button class="minusOneProduct" data-id="${index}" >-</button>
		<span class="productAmount">${product.amount}</span>
		<button
			class="addOneProduct" data-id="${index}"
			>
				+
			</button>

      <button class="previewProductRemoval" id="productRemove${product.serialNo}"><img src="Assets/icons/trashcan.svg" height="15" width="15">
      </button>

		</div>`;

    orderSummaryPage.innerHTML += `<li class="productAdded">
		<img
			class="productCheckoutImage"
			src="${product.image.src}"
			width="${product.image.width}"
			height="${product.image.height}"
		/>

		<h3 class="ProductCheckoutTitle">${product.name}</h3>
		<p class="ProductCheckoutPrice">${totalPcsPrice}</p>
		<div class="productAmount">
		<p class="productAmountValue">${product.amount}</p>
		</div>`

		let shippingCost = Math.round(25 + totalPriceSum * 0.1);
		if (totalProductsAmount >= 15) {
			shippingCost = 0;
		}
    
		totalAmountIcon.innerHTML = totalProductsAmount;
		
    totalPriceCartPreview.innerHTML = `<h3>Total PCS: ${totalProductsAmount}</h3><h3>Total amount: ${totalPriceSum.toFixed(
			2
		)} $</h3><div class="discountMessage">${mondayIscountMessage}</div><div class="discountMessage">${tenForNineMsg}</div>`;
		totalPriceCheckout.innerHTML = `<h4 class="ShippingCost">Shipping: ${shippingCost}$</h4></h4><div class="discountMessage">${mondayIscountMessage}</div><div class="discountMessage">${tenForNineMsg}</div><h4>Total PCS: ${totalProductsAmount}</h4><h4>Total amount + shipping: ${(
			shippingCost + totalPriceSum
		).toFixed(2)} $`;
		totalPriceSummary.innerHTML = `<li>
    <p class="orderTotalCost">Your total cost: <span id="totalPriceSummary">${(shippingCost + totalPriceSum).toFixed(
			2
		)}</p>
  </li>
  <li>
    <p class="orderTotalPcs">Total PCS: ${totalProductsAmount}</p>
  </li>`;

		disableInvoiceOption(totalPriceSum);
	});

//Criteria to start the "customer idle" message timer if there is a product in card based on the sum, else the timer is reset
  if (totalPriceSum > 0) {
    updateTimers(totalPriceSum);
  } else {
    clearTimeout(resetOrderTimer);
    clearTimeout(msgTimer);
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

//Function which checks if total price is more than 0 and starts timers, else the timer is reset
function updateTimers(totalPriceSum) {
  clearTimeout(resetOrderTimer);
  clearTimeout(msgTimer);

  if (totalPriceSum > 0) {
    resetOrderTimer = setTimeout(resetCartOrder, 1000 * 60 * 15);
    msgTimer = setTimeout(toggleTimeoutMsg, 1000 * 60 * 15);
  }
}

//Function to call both amount update functions 
function updateStock() {
	pushProductStock();
	addProductToCart();
}

//Function which disables invoice Btn if the totalamount is over or equal to 800
function disableInvoiceOption(totalPriceSum) {
	if (totalPriceSum >= 800) {
		invoicePaymentBtn.setAttribute('disabled', '');
		cardPayment.style.display = 'grid';
		invoicePayment.style.display = 'none';
	} else {
		invoicePaymentBtn.removeAttribute('disabled');
	}
}

//Function which clears the validation classes for the form inputs
function clearInputValidation() {
  const formFields = document.querySelectorAll('.checkoutInput');
  formFields.forEach(formField => {
    formField.classList.remove('fieldValid');
    formField.classList.remove('fieldInvalid');
  });

  const errorMessages = document.querySelectorAll('.errorMsg');
  errorMessages.forEach(errorMessage => {
    errorMessage.classList.add('toggleHide');
    // formField.classList.remove('activeField');
  });
}

//Function which resets products to 0 and displays the main page
function resetToMain() {
  resetCartOrder()
  orderConfirmationPage.classList.add('toggleHide')
  toggleCheckout()
  navBar.classList.remove('toggleHide')
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Function for reset BTN in the checkout section, also called when timer runs out for user
function resetCartOrder() {
	productStock.forEach((product) => {
		product.amount = 0;
	});
	totalAmountIcon.innerHTML = '';
	cart = [];
  backToDetails()
	updateStock();
	clearPaymentField()
  clearInputValidation()
  clearFilter()
}

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
		cart.splice(cartIndex, 1);

		productStock[productIndex].amount = 0;
		pushProductStock();
		addProductToCart();
	}
}
//Function called to print the product form the productStock array to main product container
pushProductStock();


