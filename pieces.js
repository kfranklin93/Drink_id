function myFunction() {
  var today = new Date();
  var year = today.getFullYear();
  var remainder = 21;
  var urStuff = document.getElementById("birthYr").value;

  //urStuff=Number(birthYr);
   /* onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
  //console.log(year - urStuff);

  if (year - birthYr > remainder){
   console.log("yes, drink");
 }else{
   console.log("nope");
 };

};
