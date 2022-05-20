let weather;

let api = "https://api.openweathermap.org/data/2.5/weather?q=";
let apikey = "&APPID=1638b89d6e64f023f97a553751920bc1";
let units = "&units=metric";

let input;

let windSpeed = 0;
let noisePos = 0;
let windInc = 0.01;

function setup() {
  canvas = createCanvas(500,500);
  canvas.position(windowWidth/3,windowHeight/2.5);
  let button = select("#search_button");
  button.mousePressed(askWeather);

  input = select("#city");
}

function askWeather() {
  let url = api + input.value() + apikey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);

  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    let wind = weather.wind.speed;
    let mintemp = weather.main.temp_min;
    let maxtemp = weather.main.temp_max;

    //background color change
    push();
    fill(10, mintemp * 7, maxtemp * 7);
    rect(0, 0, 500, 400);
    pop();

//condensation droplets

    for (let x = 0; x < width; x = x + 150) {
      push();
      angleMode(DEGREES);
      translate(10, 200);
      noStroke();
      fill(65, 205, 255, humidity * 10);
      rotate(20);
      rect(x, -230, humidity *0.5, humidity *0.5, 0, 90, 90, 90);
      pop();
    }

//condensation droplets

    for (let x = 0; x < width; x = x + 100) {
      push();
      angleMode(DEGREES);
      translate(150, 200);
      noStroke();
      fill(65, 205, 255, humidity * 10);
      rotate(50);
      rect(x, 30, humidity *0.5, humidity *0.5, 0, 90, 90, 90);
      pop();
    }

//condensation droplets

    for (let x = 0; x < width; x = x + 120) {
      push();
      angleMode(DEGREES);
      translate(10, 200);
      noStroke();
      fill(65, 205, 255, humidity * 10);
      rotate(30);
      rect(x, -150, humidity *0.5, humidity *0.5, 0, 90, 90, 90);
      pop();
    }

//condensation droplets

    for (let x = 0; x < width; x = x + 100) {
      push();
      angleMode(DEGREES);
      translate(10, 200);
      noStroke();
      fill(65, 205, 255, humidity * 10);
      rotate(60);
      rect(x, 0, humidity *0.5, humidity *0.5, 0, 90, 90, 90);
      pop();
    }

//tree
    push();
    translate(width / 2, 400);
    rotate(radians(windSpeed));
    fill(100, 200, 0);
    ellipse(0, -180, 200);
    stroke(10);
    strokeWeight(10);
    line(0, 0, 0, -150);
    pop();

    windSpeed = noise(noisePos) * wind * 200;
    noisePos += windInc;

//land rectangle
    push();
    noStroke();
    fill(100, 50, 0);
    rect(0, 400, 500, 100);
    pop();
  }
}
