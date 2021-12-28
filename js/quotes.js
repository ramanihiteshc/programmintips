//Random Quote Generator


var quotes = [
  {
    quote: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    author: "John Muir",
    image: "google-earth-view-marshallislands.jpg",
    where: "Marshall Islands",
    number:'1'
  },
  {
	quote:"Variables should be declared as close to their usage as possible, Because our functions are very short, local variables should appear a the top of each function . .",
	author:"Variable Declarations 🔝",
	image:"google-earth-view-Huisduinen-TheNetherlands.jpg",
	where:"Variable Declarations 🔝",
	number:'97'
  }
 
];



function getNewQuote() {

	//Randomly select one group from the array
	var random = quotes[Math.floor(Math.random() * quotes.length)];

	var quoteHTML = random.quote;
	var authorHTML = "-" + random.author;
	var imageHTML = random.image;
	var locationHTML = random.where;
	var numberHTML = random.number;
	var picRefresh = '?' + numberHTML;
	var urlRefresh = 'vers' + numberHTML;


	//For changing Twitter quote source
	var baseTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Framanihiteshc.github.io%2Fprogrammingtips%2F%23&text=";
	var newText = "'" + quoteHTML + "' " + authorHTML;
	var encoded = encodeURI(newText);
	var customTweet = baseTweet + encoded;

	
	$(document).ready(function() {
		$('#quote').fadeOut(800, function(){ $('#quote').html(quoteHTML).fadeIn(800); });
		$('#speaker').fadeOut(800, function(){ $('#speaker').html(authorHTML).fadeIn(800); });
		$('#location').fadeOut(800, function(){ $('#location').html(locationHTML).fadeIn(800); });

		$('body').css('background', 'url(img/' + imageHTML + ') no-repeat center center fixed');

		$('meta[property="og:url"]').attr('content', 'http://sonora.github.io/programmingtips/#' + urlRefresh);
		$('meta[property="og:description"]').attr('content', 'Location: ' + locationHTML);
		$('meta[property="og:image"]').attr('content', 'http://ramanihiteshc.github.io/programmingtips/img/' + imageHTML + picRefresh);

		
		$('.tweet > a').attr('href', customTweet);

	});

}





