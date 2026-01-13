
🔹 What are Hooks in React?

Hooks are special functions in React that let you use state and other React features in functional components.

👉 Before Hooks, these features were available only in class components.

In short:
Hooks allow functional components to be powerful.

🔹 Why were Hooks introduced?

Before Hooks:

State → only in class components

Lifecycle methods → only in class components

Code became complex and hard to reuse

Hooks solve these problems by:
✔ Making code simpler
✔ Reusing logic easily
✔ Avoiding class compontent
🔹 Commonly Used React Hooks
Hook	Purpose
useState	Manage state
useEffect	Side effects (API calls, lifecycle)
useContext	Share data globally
useRef	Access DOM or persist value
useReducer	Complex state logic
useMemo	Performance optimization
useCallback	Memoize functions

 // usestate hook 
🔹 What is useState?
useState is a React Hook that allows functional components to store and manage state (data).
👉 In simple words:
When your UI needs to change (button click, form input, counter, toggle), you use useState.
🔹 How to import useState
import { useState } from "react";
🔹 Basic Syntax
const [state, setState] = useState(initialValue);
Explanation:
Part	:Meaning
state	:Current value
setState :	Function to update the value
initialValue :	Starting value

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
