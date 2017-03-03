//var img; 



function setup() {
  //img = loadImage("https://cdn.pbrd.co/images/ETTVyYGtU.jpg");
  //set Canvas to size of window
  createCanvas(800,800);
 
  loadWeather();
  //image
  
}



  function loadWeather(){
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kings%20cross%2CLondon%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  ,gotWeather);
}

///f2 




function gotWeather(data){
  
  console.log(data.query.results.channel.wind.direction);
  var direction=Number(data.query.results.channel.wind.direction);
  
  
  
  rectMode(CENTER);
  translate(width/2,height/2);
  angleMode(DEGREES);
  rotate(direction);
  
  
  x=50
  y=100
  //shape
  noStroke()
  fill(0);
  
fill(0); 
text("wind", 10, 35, 40, 40);


 
  
  
}




 


 //function draw() {
   
  //image(img, 0, 0);
  //image(img, 0,0);
  
//} 
 


   
    
  