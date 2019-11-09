window.onload= function() {
    var button  = document.getElementById("btn");
    //const fetch = require('node-fetch');
    
    button.addEventListener("click", function(){
        fetch('superheroes.php')
        .then(response => response.text())
        .then (data => {
          alert(data);  
        })
        
        
    })
    
}