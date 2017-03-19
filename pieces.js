function myFunction() {
  var today = new Date();
  var year = today.getFullYear();
  var remainder = 21;
  var urStuff = $("#birthYr").val();
  //urStuff=Number(birthYr);
   /* onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
  //console.log(year - urStuff);

 //Esterlin- helped
  if (year - urStuff > remainder){
   document.getElementById('two');
 }else{
   document.getElementById('three');
 };

 console.log(remainder);
//getElementById within or instead of the console log.
};

$('.letSee').on("click",myFunction());
//Making progress 
