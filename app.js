window.onload = () => {

	let searchB = document.getElementById("search-bttn");
	searchB.onclick= ()=>{
	    let searchQ = document.querySelector('#search').value;
		$.get("superheroes.php", 
		{ 
		    query: searchQ 
		}).done(function(response){ 
		    let res = response; $('#result').html(res); 
		}).fail(function(){ 
		    alert('Something just went wrong'); 
		});
	};
};