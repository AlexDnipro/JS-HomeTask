// https://www.codewars.com/kata/5721a78c283129e416000999
// Loop statement --for


function pickIt(arr){
  var odd=[],even=[];
  for (var i = 0; i < arr.length; i++) {
      
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  
  }
  
  return [odd,even];
}

//https://www.codewars.com/kata/5b39e3772ae7545f650000fc
//Remove duplicate wars

function removeDuplicateWords (s) {
  
  var array = s.split(" ");
  var uniq = [...new Set(array)].join(' ');
  
  console.log(uniq);
  return uniq;
 }

 //https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
 //Convert a string to an array
 
 function stringToArray(string){

	var array = string.split(" ");
  return array;

}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA replacement
function DNAtoRNA(dna) {
  
  var array = dna.split("");
  
  uniq = array.map(function(item) { return item == 'T' ? 'U' : item; });
  
  var rna = uniq.join('');
  
  return rna;
}

