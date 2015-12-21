$(function() {
console.log('js is working');

$('#popUp').toggleClass('hidden');
$('.closePopUp').hide();

$.ajax({
	url: 'https://www.reddit.com/top.json',
  dataType: 'json',
  success: function(results){    
    // Process all the returned articles.
    var articles = results.data.children; 
    var container = $('#main');
    for (var i = 0; i < articles.length; i++) {
      // Extract data from the downloaded object.
      var data = articles[i].data; 
      var title = data.title;
      var thumbnail = data.thumbnail;
      var subreddit = data.subreddit;
      var ups = data.ups;
      var url = data.url;
      //console.log(results);

      // Clean up invalid thumbnails.
      var thumb = data.thumbnail;
      if (thumb == "self" || thumb == "") {
        thumb = "";
      }


      // Clean up invalid default / nsfw

      // Create the article element.
      var article = $(
        '<article class="article">' +
        '  <section class="featuredImage">' +
        '    <img src="' + thumb + '"alt="" />' +
        '  </section>' +
        ' <section class="articleContent">' +
        ' <p class="hidden">' + url + '</p>'+ 
        '   <a href="#">' +
        '   <h3>' + title + '</h3>'+
            '</a>'+
        '   <h6>'+ subreddit + '</h6>'+ 
        '  </section>'+
        '  <section class ="impressions">'+ ups +'</section>'+
        '  <div class="clearfix">' +
        '  </div>'+
        '</article>');

      // Insert the article
      container.append(article);
        
    }
    //hides the loader 
    $('#popUp').toggleClass('hidden');

    //click on article show #popUp
    //remove loader class when toggling info in pop-up
  


    } // end of results

  }) // end of ajax function
  $(document).on('click', '.closePopUp', function(e){
    e.preventDefault;
    $(this).parent().hide();
      // debugger;
  });


  $(document).on('click','.articleContent', function() {
    $('#popUp').toggleClass('hidden');
    $('#popUp').removeClass('loader');
    $('.closePopUp').show();
    var title = $(this).parent().find('h3').text();
    var url  = $(this).parent().find('p').text();
    $('#popUp h1').text(title);
     $('#popUp .articleContent a').attr('href', url);


    // debugger; 
  });

}) // end of function 

  



    // close popup
    // change link of read more from url source button
    // popupAction.toggle();
    

  

    // dropdown menu, replace content of page with articles from newly selected ones
    




