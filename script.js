function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let lower1 = s1.toLowerCase();
	let lower2 = s2.toLowerCase();

	let index = lower1.indexOf(lower2);

	return index;
	
}

//Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
