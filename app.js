window.onload= function() {
    var button  = document.getElementById("btn");
    var search = document.getElementById("srchbar").value;
    //const fetch = require('node-fetch');
    
    button.addEventListener("click", function(){
        fetch('superheroes.php')
        .then(response => response.text())
        .then (data => {
          //alert(data);  
         data.forEach(i =>{
             
         })
          
        })
        
        
    })
    
}