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


module.exports = wheatherinforun;

