// VALUES, FUNCTİON, SWİTCH EXERCİSES
function celcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let heat = celcius(77);
console.log("The temperature is " + heat + " ");
if (heat > 24) {
  console.log(" you should wear summer-weight");
} else if (heat > 10) {
  console.log("tempereature is normal :)");
} else {
  console.log("it's cold out there, you should wear winter clothes.");
}
switch (heat) {
  case 25:
    console.log("system calculated right");
    break;

  default:
    console.log("system calculated it wrong");
}
