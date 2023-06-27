let request = new XMLHttpRequest();

let clickButton=function() {
      var search_movies = document.getElementById("search").value;
      request.addEventListener('load',getData);
      request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+search_movies);
      request.send();
};

let getData =function() {
    var data = JSON.parse(request.responseText);
    showdata(data.results);
};

let showdata=function(data){
    data.forEach((item)=>{
    	let box=document.getElementById("box");
        box.innerHTML=`
            <p>Movie Name:-${item.title}</p>
            <p>Original_Title:-${item.original_title}</p>
            <p>Release_Date:-${item.release_date}</p>
            <p>Overview:-${item.overview}</p>
            <p>Original_Language:-${item.original_language}</p>`;
    });  
};

let button=document.getElementById("button");
button.addEventListener("click",clickButton);

	

