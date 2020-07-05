# WebClock
This is Javascript Project which shows the current time of any selected country from the navbar.

## Installation

Just install any Text Editor like vscode and get started on your browser.

## Get Code
Html Code

```bash
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">MyClock</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <select onchange="changeCountry(this.value)" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"">
                    <option value="India" class="dropdown-item">Choose Your Country</option>
                    <option value="Italy" class="dropdown-item">Italy</option>
                    <option value="France" class="dropdown-item">France</option>
                    <option value="USA" class="dropdown-item">USA</option>
                </select> 
            </li>
          </ul>
          
        </div>
      </nav>
      
      <div class="jumbotron container my-4">
        <h1 class="display-4 ">Current time : <span id="time"></span></h1>
        <p class="lead">This is the current time in <span id="country">India</span></p>
        <hr class="my-4">
        <p>It uses simple JavaScript to check for the country you had input in the navbar and then tells u the time of the selected location.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Contact me</a>
      </div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>
</html>
```
Javascript Code
```bash
let time, showtime, seconds, hour, minutes, enteredCountry = 'India', hourBuffer = 0, minutesBuffer = 0;

function changeCountry(country) {
    enteredCountry = country;
    if(country == 'USA')
    {  
        hourBuffer = -9;
        minutesBuffer = -30;
    }
    else if(country == 'Italy')
    {  
        hourBuffer = -3;
        minutesBuffer = -30;
    }
    else if(country == 'France')
    {  
        hourBuffer = -3;
        minutesBuffer = -30;
    }

    document.getElementById('country').innerHTML = enteredCountry;
   }

setInterval(() => {
    time = new Date();
    seconds = time.getSeconds();
    
    hour = time.getHours() + hourBuffer;
    minutes = time.getMinutes() + minutesBuffer;

    if (minutes < 0)
        hour = (hour - 1);

    minutes = (minutes +60) %60;
    hour = (hour + 24) % 24;
    
    if(minutes < 10)
        minutes = '0' + minutes.toString();
    if(hour < 10)
        hour = '0' + hour.toString();
    if(seconds < 10)
        seconds = '0' + seconds.toString();
        
    showtime = hour + ':' + minutes + ':' + seconds;

    document.getElementById('time').innerHTML = showtime;
    
},1000);


 
```

## Contributing
Pull requests are welcome. 

Please make sure to update tests as appropriate.

## Follow me at
[Facebook](https://www.facebook.com/samar.pp.singh/)

[Instagram](https://www.instagram.com/samar_1601/)
