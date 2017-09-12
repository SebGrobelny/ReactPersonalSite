function sendRequest(param)
{
	//baseline url
	var url = "https://sebgrobelny.herokuapp.com/";

	url = url+param;

		// function reqListener(){
	window.location.replace(url);

	// }

	// //put a request into FLASK
	// var oReq = new XMLHttpRequest();
 //    oReq.addEventListener("load", reqListener);
 //    oReq.open("GET", url);
 //    oReq.send();
}