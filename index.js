//THİS KEYWORD
let user = {
  first_name: "bahar",
  last_name: "isikli",
  full_name: function () {
    return this.first_name + " " + this.last_name;
  },
};
console.log(user.full_name());
//BOOLEAN EXERCİSE
let age = 25;
let isadult = age > 18;
if (isadult) {
  console.log("this person is an adult");
} else {
  console.log("this person is not an adult");
}
