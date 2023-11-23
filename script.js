// HEADER:
// {

//1 Burge Menu:
// [] Create button for the burger menu
// [] Style button accordingly
// [] Create a requirement for an if menu is visible
// [] create a button for expanded Burger menu
// [] Create function to make the button able to Toggle the navigation menu on and off

// 1.1 Burge Menu navigation:
// [] When clicking on a menu option/Section menu should toggle and scroll to section

// 1.2 Add Dark Theme/Light Theme functionality button:
// [] Once the burger menu is expanded /create a button in CSS/
// [] customer should be able to toggle theme via button in navigation

//2 Navigation meny sticky on scroll up:
// [] on scroll down the navigation should collapse
// [] When user is scrolling upp, the navigation should expand

// 3.a Click on cart icon in the menu to show order preview
// [] Summary should be toggled
// [] When clicked a summary should be animated (css class)
// [] Create a toggle for the visually hidden class
// [] Show orders as individual articles in summary
// [] add possibility to remove individual items from the preview
// [] Add products variable to the summary
// [] Add totalprice variable to the summary
// [] Add product removal button to the summary

// 3.b Update shopping cart visuals on product addition:
// [] Per default, shopping card should be stock navBar color
// [] As customers adds a product, the shopping card should change color and expand
// [] TotalPrice value should be added upon a customer adding product
// [] For each product that is added, some kind of visual feedback is presented and TotalPrice value is updated

// }

// PAGECONTENT:
// {

// PRODUCTS PAGE
//1.a Add Products with a for loop:
// [x] Create a variable for the products container
// [x] Create an Array which holds the different product property objects
// [x] create an Array containing all objects


//Define an array with pre-defined object properties:
const productStock = [
	{
		name: "Segreto D'Amore",
		price: 28.99,
		category: { shape: 'heart', color: 'red' },
		rating: 4.8,
		image: {
			src: "/Assets/Images/Warehouse/SegretoD'Amore.jpg",
			alt: 'heartshaped black box filled with red roses',
			height: 50,
			width: 50,
		},
	},
	{
		name: 'Cesto Di Rose',
		price: 34.99,
		category: { shape: 'round', color: 'red' },
		rating: 3.9,
		image: {
			src: '/Assets/Images/Warehouse/CestoDiRose.jpg',
			alt: 'white round box filled with red roses',
			height: 50,
			width: 50,
		},
	},
	{
		name: 'Gioiello Di Fiori',
		price: 29.99,
		category: { shape: 'round', color: 'blue' },
		rating: 2.9,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDiFiori.jpg',
			alt: 'blue round box filled with blue roses',
			height: 50,
			width: 50,
		},
	},
	{
		name: 'Cuore Infinito',
		price: 49.99,
		category: { shape: 'square', color: 'transparent' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/CuoreInfinito2.jpg',
			alt: 'transparent square box filled with red roses',
			height: 50,
			width: 50,
		},
	},
	{
		name: 'Dolce Rose',
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/DolceRose.jpg',
			alt: 'round white box filled with pink roses',
			height: 50,
			width: 50,
		},
	},
    {
		name: 'Notte Romantica',
		price: 49.99,
		category: { shape: 'square', color: 'black' },
		rating: 4.9,
		image: {
			src: '/Assets/Images/Warehouse/NotteRomantica.jpg',
			alt: 'black square box filled with red roses',
			height: 50,
			width: 50,
		},
	},
    {
		name: 'Gioiello Di Rose Bianche',
		price: 34.99,
		category: { shape: 'square', color: 'white' },
		rating: 4.3,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDiRoseBianche.jpg',
			alt: 'white square box filled with pink roses',
			height: 50,
			width: 50,
		},
	},
    {
		name: 'Cuore di Rose Blu',
		price: 19.99,
		category: { shape: 'round', color: 'white' },
		rating: 3.3,
		image: {
			src: '/Assets/Images/Warehouse/CuorediRoseBlu.jpg',
			alt: 'white round box filled with blue roses',
			height: 50,
			width: 50,
		},
	},
    {
		name: 'Amore Eterno',
		price: 39.99,
		category: { shape: 'heart', color: 'black' },
		rating: 4.1,
		image: {
			src: '/Assets/Images/Warehouse/AmoreEterno.jpg',
			alt: 'black heart shaped box filled with red roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Dolcezza In Rosa',
		price: 19.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.1,
		image: {
			src: '/Assets/Images/Warehouse/DolcezzaInRosa.jpg',
			alt: 'pink round box filled with blue roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Gioia Del Cuore',
		price: 34.99,
		category: { shape: 'heart', color: 'white' },
		rating: 4.4,
		image: {
			src: '/Assets/Images/Warehouse/GioiaDelCuore.jpg',
			alt: 'white heart shaped box filled with red roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Serenata Rosata',
		price: 24.99,
		category: { shape: 'round', color: 'pink' },
		rating: 3.7,
		image: {
			src: '/Assets/Images/Warehouse/SerenataRosata.jpg',
			alt: 'round shaped pink box filled with pink roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Dolce Amore',
		price: 29.99,
		category: { shape: 'round', color: 'white' },
		rating: 4.5,
		image: {
			src: '/Assets/Images/Warehouse/DolceAmore.jpg',
			alt: 'white round shaped box filled with red roses',
			height: 50,
			width: 50,
		},
	},   

    //Bear products
    {
		name: 'Dolce Abbraccio',
		price: 29.99,
		category: { shape: 'bear', color: 'white' },
		rating: 4.6,
		image: {
			src: '/Assets/Images/Warehouse/DolceAbbraccio.jpg',
			alt: 'white bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Coccole Di Noce',
		price: 21.99,
		category: { shape: 'bear', color: 'brown' },
		rating: 3.6,
		image: {
			src: '/Assets/Images/Warehouse/CoccoleDiNoce.jpg',
			alt: 'brown bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Gioiello Del Cuore',
		price: 21.99,
		category: { shape: 'bear', color: 'grey' },
		rating: 4.5,
		image: {
			src: '/Assets/Images/Warehouse/GioielloDelCuore.jpg',
			alt: 'grey bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: "Orsetto D'Amore",
		price: 29.99,
		category: { shape: 'bear', color: 'red' },
		rating: 4.8,
		image: {
			src: "/Assets/Images/Warehouse/OrsettoD'Amore.jpg",
			alt: 'red bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},   
    {
		name: 'Rosa Incanto',
		price: 25.99,
		category: { shape: 'bear', color: 'pink' },
		rating: 4.4,
		image: {
			src: '/Assets/Images/Warehouse/RosaIncanto.jpg',
			alt: 'pink bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},     
    {
		name: 'Sogno Azzurro',
		price: 14.99,
		category: { shape: 'bear', color: 'blue' },
		rating: 4.7,
		image: {
			src: '/Assets/Images/Warehouse/SognoAzzurro.jpg',
			alt: 'blue mini bear made out of plastic roses',
			height: 50,
			width: 50,
		},
	},      
    
];
//Check if all 19 products have correct syntax in array
console.log(productStock.length);


// [X] Select the product container from the HTML DOM
// [Used Class since it's unique]   Add ID to the container in HTML ()
const productContainer = document.querySelector('.productContainer');
//Test to see if correct Element is selected
console.log(productContainer)
// [] Push the Image, Title and Price inside of an <article> with a class

//1.b Add Products buttons with a for loop:
// [] Select the productsContainer
// [] Push the subrtract and add buttons

//1.b Add Products buttons with a for loop:
// [] Select the productsContainer
// [] Push the subrtract and add buttons

// CHECKOUT PAGE
// 1.a Remove products:
// 1.b Add/subtract products in cart:
// 2.a Validation of forms
// 2.b Toggle between invoice and card
// 3.a Newsletter checked in per default
// 3.b submit button to complete order grayed out until information filled in/validated

// }
