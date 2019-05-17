function getQueryVariable(variable){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}

function checkauth(){
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			window.location.replace("./dash.htm")
		}
	})
}

function checkauthTF(){
	firebase.auth().onAuthStateChanged((user)=> {
		if (user) {
			return true
		}else{
			return false
		}
	})
}