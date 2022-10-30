var container = document.createElement("div");
container.setAttribute("class", "container");
// container.innerHTML = "<h3>Restcountries & Weather using fetch API</h3>";
// document.body.style.backgroundImage = "url('/images/bg.jpg')";
document.body.style.backgroundColor = "#1E2737";




var row = document.createElement("div");
row.setAttribute("class", "row");
row.classList.add("row","m-3")
container.append(row);



var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1));


function foo(data1){

    for(var i=0; i<data1.length; i++){  
      var name=data1[i].name;
      
      try{
      if(data1[i].latlng===undefined){
          throw (error);
      }
      var lat = data1[i].latlng[0];
      var lng = data1[i].latlng[1];
      
        row.innerHTML+=`<div class="col-md-6 col-lg-4">
        <div class="card mb-5 text-center bg-dark">
        <div class="card-header"><h6>${data1[i].name}<h6></div>
        <img src="${data1[i].flag}" class="card-img-top" width="150px" height="150px">
        <div class="card-body bg-dark">
          <p class="card-text">Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">Country Code:${data1[i].alpha3Code}</p>
          <p class="card-text">Latitude:${data1[i].latlng[0]}</p>
          <p class="card-text">Longitude:${data1[i].latlng[1]}</p>
         
          
          <button type="button" onclick="btn()" class="btn btn-outline-success"><img src="/images/animation_500_l9s9jf07.gif" alt="" width="50px" height="50px" class="weather1"> Weather<img src="/images/animation_500_l9s9jf07.gif" alt="" width="50px" height="50px" class="weather"></button>
          
        </div>
      </div>

  
   </div>`;

 
  //  foo(data1[i].latlng[0],data1[i],latlng[1]);
   document.body.append(container); 
    }catch (error) {
    console.log("invalid "+error.message);
    
  }
  }
}

function btn(lat,lng){
  var res=fetch("https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207");
res.then((data)=>data.json())
.then((data2)=>foo(data2));

}
// console.log(res);
        
    

