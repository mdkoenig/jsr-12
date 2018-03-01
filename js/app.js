/*
  Please add all Javascript code to this file.
*/

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "94b720efc0c44d9cb007d6d6c57093fe"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  load(result);
}).fail(function(err) {
  throw err;
});

function load(result) {
	var articles = $(".article");
	//var articlesH3 =  $(".article h3");
	var numArticles = result.response.docs.length;

	var blankArticle = $('<article class="article"><section class="featuredImage"><img src="images/article_placeholder_1.jpg" alt="" /></section><section class="articleContent"><a href="#"><h3>Test article title</h3></a><h6>Lifestyle</h6></section><section class="impressions">526</section><div class="clearfix"></div></article>');

	for(i = 0; i < numArticles; i++) {
		console.log(i);
		//result.response.docs.length
		$("#main").append(blankArticle.clone()); // put it into the DOM  
		var articlesH3 =  $(".article h3");
		articlesH3[i].innerText = result.response.docs[i].headline.main;
		//var pic = result.response.docs[i].multimedia[2].url;
		//console.log(articlesH3[i]);
	}
			
	//$(".article").last().after(blankArticle); // put it into the DOM     

}
