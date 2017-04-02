// this is untidy as hell.

function myFunction() {
//Get the current year
  var today = new Date();
  var year = today.getFullYear();

//This is the value/ age which will make someone able to drink... else they don't get to drink.
  var remainder = 21;

//This fetches the value of that was entered/input.
  var urStuff = $("#birthYr").val();

//This produces the birth year of the person
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;

 //Esterlin- helped

  if (other >= remainder){
   document.getElementById('#two');
  //console.log("hi");
 }else{
  //console.log("bye");
  document.getElementById('#three');
 };
 console.log(other);
//getElementById within or instead of the console log.
};
// was trying to figure this out another way
//$('.letSee').on("click",myFunction());
//Making progress

/*Notes/ Ideas

/* onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
  //console.log(year - urStuff);
