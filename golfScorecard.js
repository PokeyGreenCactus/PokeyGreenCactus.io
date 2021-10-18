let elem = [];
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button

for(let i=1; i<=18; i++) {
  // console.log(i);
	elem[i] = document.getElementById(i.toString());
	elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
	elem[i].children[4].children[1].onclick = function(){sub1(elem[i]);};
	elem[i].children[5].children[0].onclick = function(){clear(elem[i]);};
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

//create a "sub1" function
function sub1 (elem) {
	if(elem.children[2].innerHTML == "-")
		elem.children[2].innerHTML = "0";
	//makes sure that the score isn't negative
	else if(elem.children[2].innerHTML == "0") {
		elem.children[2].innerHTML = "0";
	}
	else {
		let currentScore = elem.children[2].innerHTML;
		currentScore = Number.parseInt(currentScore);
		elem.children[2].innerHTML = currentScore - 1;
	}
}

function clear (elem) {
	elem.children[2].innerHTML = "-";
	document.getElementById('scoreTotal').innerHTML = "-";
}

function calcScoreTotal (elem) {
	document.getElementById('scoreTotal').innerHTML = "0";
}
