const axios = require("axios");



class weatherx{

    constructor(city) {
        this.baseUrl="https://api.openweathermap.org";
        this.clientID = "b3a423e8db7ac836addc5be83f0e7fd9";
       this.city = city;
      
    }

  async  weatherfınd(){

    try{

      
     
       const havadurumu = await axios.get(`${this.baseUrl}/data/2.5/weather?q=${this.city}&appid=${this.clientID}&lang=tr&units=metric`);
    const  {weather,main} = havadurumu.data;

    const {description} = weather[0];

      console.log("Hissedilen sıcaklık " + main.temp_max + " " + description);
      


  
    
    }catch(err){  
        console.log(err.response);
      
    }

    }


}

exports.havaınfo = function hava(parhv){
    const hv = new weatherx(parhv);
    hv.weatherfınd();
}
