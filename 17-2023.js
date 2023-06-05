/* You create the stack
You split your string
You loop
You push to stack
Once done, you pop it off */

const reverseString = (string) => {
  const stack = [];
  const array = string.split("");

  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  const newstring = "";

  while (stack.length > 0) {
    newstring + stack.pop();
  }

  return newstring;
};
