// this is untidy as hell.

function myFunction() {
  var today = new Date();
  var year = today.getFullYear();
  var remainder = 21;
  var urStuff = $("#birthYr").val();
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;
  //urStuff=Number(birthYr);
   /* onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
  //console.log(year - urStuff);

 //Esterlin- helped
  if (other > remainder){
   document.getElementById('#two');
  //console.log("hi");
 }else{
   //console.log("bye");
   document.getElementById('.three');
 };

 console.log(other);
//getElementById within or instead of the console log.
};
// was trying to figure this out another way
//$('.letSee').on("click",myFunction());
//Making progress
