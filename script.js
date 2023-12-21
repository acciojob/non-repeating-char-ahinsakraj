function firstNonRepeatedChar(str) {
 // Write your code here
	let temp=str.split("").sort().join("");
	
	console.log(temp);
	for(let i=0;i<temp.length;i++){
		if(i==0 && temp[i]!==temp[i+1] || i==temp.length-1 && temp[i]!==temp[i-1] || temp[i]!==temp[i-1] && temp[i]!==temp[i+1])return temp[i];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 