const yargs = require("yargs");

const stapp = require("./ornek");

wheatherinforun();

function wheatherinforun(){

    yargs.command({
        command : "show",
        describe : "hava durumu bılgısı gösterirr",
        
        
        handler(argv){ 
        
            stapp();
        
          
        }
        
        });
        
        yargs.parse();
        


}

//bunu dısarı neden sunduk cunku bu klosoru npm sıtesıne publısh ettık kullanıcı sadece burdakı fonskıyonu kullanarak ıslemı yapıcak
module.exports = wheatherinforun;

