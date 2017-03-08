//Réalisation de adsltv par Avatar Rousseau (Dark Best).
exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {

    case "runadsltv": //Ouvre adsltv
    var process = '%CD%/plugins/adsltv/bin/runadsltv.bat';
	var Txt = new Array; 
	Txt[0] = "Mode adsltv activé";
	break;	
		
    case "closeadsltv": //Ferme adsltv
	var process = '%CD%/plugins/adsltv/bin/closeadsltv.bat';
	var Txt = new Array; 
	Txt[0] = "fermeture D'adsltv";
	Txt[1] = "Tous de suite";
	break;
	
}    

 var child = exec(process,
 function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

}