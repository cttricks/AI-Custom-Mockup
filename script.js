console.log("MIT AppInventor Custom Mockup Of Phone");
console.log("Current Version : 1.0.1");
console.log("Made By Cttricks");

checkAndset();
function checkAndset(){
	var elem = document.querySelector("body table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div:nth-child(2) table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div div div div table tbody tr td div div:nth-child(1) table tbody tr:nth-child(1) td table tbody tr:nth-child(3) td div div div:nth-child(1) div:nth-child(3)");
	if(elem){
		elem.style.width = '330px';
		elem.style.height = '485px';
		setTimeout(setChild, 1000);
	}else{
		setTimeout(checkAndset, 1000);
	}
	
}

function setChild(){
	var childCon = document.querySelector("body table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div:nth-child(2) table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div div div div table tbody tr td div div:nth-child(1) table tbody tr:nth-child(1) td table tbody tr:nth-child(3) td div div div:nth-child(1) div:nth-child(3) div div");

	childCon.style.width = "330px";
	childCon.style.height = "485px";
	childCon.id = "mainContainer";
	console.log(childCon);
	console.log("DONE");
	
	/*Adding Event Listner*/
	document.getElementById("mainContainer").addEventListener('DOMSubtreeModified', (e)=>{
		setTimeout(updateChild, 5);
	})
}

function updateChild(){
	var childCon = document.querySelector("body table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div:nth-child(2) table tbody tr:nth-child(2) td table tbody tr td:nth-child(2) div div div div div table tbody tr td div div:nth-child(1) table tbody tr:nth-child(1) td table tbody tr:nth-child(3) td div div div:nth-child(1) div:nth-child(3) div div");

	childCon.style.width = "330px";
	childCon.style.height = "485px";
}


