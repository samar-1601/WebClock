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


 