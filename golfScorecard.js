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
  calcOverRow(elem);
  calcScoreTotal(elem);
  calcTotalOver(elem);
  //clear(elem);
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
	calcOverRow(elem);
	calcScoreTotal(elem);
	calcTotalOver(elem);
	//clear(elem);
}

function clear (elem) {
	let currentScore = elem.children[2].innerHTML;
		currentScore=Number.parseInt(currentScore);
	let currentOver = elem.children[3].innerHTML;
		currentOver=Number.parseInt(currentOver);
	let totalScore = document.getElementById('scoreTotal').innerHTML;
		totalScore=Number.parseInt(totalScore);
	//let totalOver = document.getElementById('overTotal').innerHTML;
		//totalOver=Number.parseInt(totalOver);
	//if(currentOver<1)
		//currentOver = 0;
	//document.getElementById('scoreTotal').innerHTML = totalScore-currentScore;
	//document.getElementById('overTotal').innerHTML = totalOver-currentOver;
	elem.children[2].innerHTML = 0;
	elem.children[3].innerHTML = 0;
}

//calculates the total score
var totalScore = 0;
function calcScoreTotal (elem) {
	let oneScore = elem.children[2].innerHTML;
	oneScore = Number.parseInt(oneScore);
	if(oneScore == "-")
		oneScore = 0;
	totalScore++;
	document.getElementById('scoreTotal').innerHTML = totalScore;
}

//calculates the total over
var totalOver = 0;
function calcTotalOver (elem) {
	let oneOver = elem.children[3].innerHTML;
	oneOver = Number.parseInt(oneOver);
	if(oneOver == "-")
		oneOver = "0";
	totalOver+=oneOver;
	document.getElementById('overTotal').innerHTML = totalOver;
}

//create a function that shows the difference between par and score, and outputs it in 'over' for each row
function calcOverRow (elem) {
	let par = elem.children[1].innerHTML;
	let indScore = elem.children[2].innerHTML;
	let over = elem.children[3].innerHTML;
	if(indScore == "-")
		indScore = "0";
	over = indScore - par;
	elem.children[3].innerHTML = over;
}
