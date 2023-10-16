let investmentMoney = 0;
let valueOfCompany = 0;

for (let month = 1; month <= 360; month++) {
  investmentMoney = investmentMoney + 100;
  valueOfCompany = valueOfCompany + 100;

  if (month % 12 === 0) {
    valueOfCompany = (valueOfCompany * 101) / 100;
  }
}

console.log("your total investment: " + investmentMoney);
console.log("value of company: " + valueOfCompany);
let gainratio = valueOfCompany / investmentMoney;
console.log("your gain ratio: " + gainratio);
