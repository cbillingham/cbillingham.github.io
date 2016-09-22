$(document).ready(function() {

  function displaySearchResults(results, data) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = data[results[i].ref];
        appendString += '<li class="post-preview"><a href="' + item.url + '"><h3 class="post-title">' + item.title + '</h3></a>';
        appendString += '<p>' + item.subtitle + '</p>';
        appendString += '<p class="post-meta">' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query').toLowerCase();

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("placeholder", "");
    document.getElementById('search-box').setAttribute("value", searchTerm);
    $("#search-results-header").text(searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('categories');
      this.field('tags');
      this.field('content');
      this.field('subtitle');
    });

    $.getJSON('/posts.json', function(data) {

      for (var key in data) { // Add the data to lunr
        idx.add({
          'id': key,
          'title': data[key].title,
          'author': data[key].author,
          'categories': data[key].categories,
          'tags': data[key].tags,
          'content': data[key].content,
          'subtitle': data[key].subtitle
       });
      }

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, data); // We'll write this in the next section
    });
  }
});