//Assignment03 - create a dynamic golfScorecard app
//Author: Adam Cossin
//Contact: racossin@svsu.edu
//Date: 10/18/2021
let elem = [];

for(let i=1; i<=18; i++) {
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
}

//create a clear function
function clear (elem) {
	//get current value in 'score' and 'over' sections on given row and pass them to 'calcScoreTotal' and 'calcTotalOver' functions respectively to update the values of the totals
	let tempScore = elem.children[2].innerHTML;
	tempScore = Number.parseInt(tempScore);
	let tempOver = elem.children[3].innerHTML;
	tempOver = Number.parseInt(tempOver);
	calcScoreTotal(tempScore);
	calcTotalOver(tempOver);
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
	//I'm not sure why this isn't allowing me to check if the button has been clicked or not, but it's just ignoring this statement
	if(elem.children[4].children[1].clicked == true)
		totalScore--;
	else {
		totalScore++;
	}
	document.getElementById('scoreTotal').innerHTML = totalScore;
}

//calculates the total over
var totalOver = 0;
function calcTotalOver (elem) {
	let oneOver = elem.children[3].innerHTML;
	oneOver = Number.parseInt(oneOver);
	if(oneOver == "-")
		oneOver = 0;
	if(oneOver <= 0)
		totalOver--;
		totalOver++;
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
