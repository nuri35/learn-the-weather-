const weather = require("./weatherapp");

const readline = require("readline");


class startapp{

constructor() {
   
}


start(){


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hava durumu bilgisi mi öğrenmek istiyorsunuz ? ", function(name) {
    if(name == "e"){

        rl.question("Hangi şehrin hava durumunu öğrenmek istiyorsunuz ", function(dataısım) {
           
            weather.havaınfo(dataısım);
    
        
        });

    }else{
        rl.close();
    }
   
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

}

}



module.exports = function st(){
   const abc =  new startapp();
   abc.start();
}

