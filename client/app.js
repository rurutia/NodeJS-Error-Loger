var script = document.createElement('script');
/*script.onload = function() {
  alert("Script loaded and ready");
};*/
script.src = "https://code.jquery.com/jquery-2.1.3.js";
document.getElementsByTagName('head')[0].appendChild(script);


console.log('Hello from app.js!');
define(['./amdmodule'], function(amdmodule) {
	// foo();
	// bar.log();
});
