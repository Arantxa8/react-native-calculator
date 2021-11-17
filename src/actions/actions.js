import { lastDigitOfArray, isNumber, calculate } from "./calculatorFunctions";

//TYPES
const PRESS_BUTTON = "PRESS_BUTTON";
const RESULT = "RESULT";
const OPERATION = "OPERATION";
const CLEAR = "CLEAR";
const CE = "CE";

// action
export const pressButton = (n) => ({
  type: PRESS_BUTTON,
  payload: n,
});

export const result = () => ({
  type: RESULT,
});

export const operation = (op) => ({
  type: OPERATION,
  payload: op,
});

export const clear = (clear) => ({
  type: CLEAR,
  payload: clear,
});

export const clearEntry = (cE) => ({
  type: CE,
  payload: cE,
});

//reducer

const initialState = {
  stack: [""],
  resultState: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CE:
      //Delete last digit
      let newStack = [state.stack[state.stack.length - 1].slice(0, -1)];
      return {
        ...state.stack,
        stack: newStack,
      };
    case CLEAR:
      //reset state
      return {
        ...state.stack,
        stack: [""],
      };
    case OPERATION:
      //Preventing start with an operator
      if (
        state.stack[0] === "" &&
        (payload === "/" ||
          payload === "x" ||
          payload === "-" ||
          payload === "+")
      ) {
        
        return {
          stack: ["0", payload],
        };
        //Preventing 2 or more operator consecutive
      }  else if (
        state.stack[state.stack.length - 1] === "/" ||
        state.stack[state.stack.length - 1] === "x" ||
        state.stack[state.stack.length - 1] === "-" ||
        state.stack[state.stack.length - 1] === "+"
      ) {
        state.stack.pop();
        return {
          ...state.stack,
          stack: [...state.stack, payload],
        };
        //just adding operator to the array
      } else {
        return {
          ...state.stack,
          stack: [...state.stack, payload],
        };
      }
    case RESULT:
      let resultOperation = state.stack;
      calculate(resultOperation);
      //Error handling
      if (resultOperation == "NaN" || resultOperation == "Infinity") {
        resultOperation = "Error";
      }
      return {
        stack: [""],
        resultState: resultOperation,
      };

    case PRESS_BUTTON:
      //Preventing start with "." only
      if (state.stack.length - 1 === 0 && payload === ".") {
        return {
          stack: ["0."],
        };
        //Preventing to have 2  or more "." for decimal numbers
      } else if (
        state.stack[state.stack.length - 1].includes(".") &&
        payload === "."
      ) {
        return state;
        //Adding numbers to the last item in the array if is a number
      } else if (
        isNumber(lastDigitOfArray(state.stack)) ||
        lastDigitOfArray(state.stack) === "."
      ) {
        let lastPop = state.stack.pop();
        return {
          ...state.stack,
          stack: [...state.stack, lastPop.concat(payload)],
        };
        //If last item in the array is an operator just adding new item
      } else {
        return {
          ...state.stack,
          stack: [...state.stack, payload],
        };
      }
      break;
    default:
      return state;
  }
};
