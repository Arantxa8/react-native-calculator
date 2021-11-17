
//last digit of the last element of the array
export const lastDigitOfArray = (arr) => arr[arr.length - 1][
    arr[arr.length - 1].length - 1
  ];

//Check if is a number passed from the buttons
  export const isNumber = (key) => {
    switch (key) {
      case "1":
        return true;
        break;
      case "2":
        return true;
        break;
      case "3":
        return true;
        break;
      case "4":
        return true;
        break;
      case "5":
        return true;
        break;
      case "6":
        return true;
        break;
      case "7":
        return true;
        break;
      case "8":
        return true;
        break;
      case "9":
        return true;
        break;
      case "0":
        return true;
        break;
      case undefined:
        return true;
        break;
      default:
        return false;
    }
  };

//Calculate function for result

export const calculate = (arr)=>{
  while (arr.includes("x")) {
  let multiplication =
    parseFloat(arr[arr.indexOf("x") - 1]) *
    parseFloat(arr[arr.indexOf("x") + 1]);

  arr[arr.indexOf("x") - 1] = multiplication;

  arr.splice(arr.indexOf("x"), 2);
}
while (arr.includes("/")) {
  let division =
    parseFloat(arr[arr.indexOf("/") - 1]) /
    parseFloat(arr[arr.indexOf("/") + 1]);

  arr[arr.indexOf("/") - 1] = division;

  arr.splice(arr.indexOf("/"), 2);
}

while (arr.includes("+")) {
  let division =
    parseFloat(arr[arr.indexOf("+") - 1]) +
    parseFloat(arr[arr.indexOf("+") + 1]);

  arr[arr.indexOf("+") - 1] = division;

  arr.splice(arr.indexOf("+"), 2);
}

while (arr.includes("-")) {
  let division =
    parseFloat(arr[arr.indexOf("-") - 1]) -
    parseFloat(arr[arr.indexOf("-") + 1]);

  arr[arr.indexOf("-") - 1] = division;

  arr.splice(arr.indexOf("-"), 2);
}

}

  