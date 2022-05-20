fetch("https://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=1638b89d6e64f023f97a553751920bc1&units=metric")
.then(res => res.json())
.then(data => {})

$('.more-options a').click(function(e) {
    $(this).next('.additional-options').slideToggle();
    e.preventDefault();
  });