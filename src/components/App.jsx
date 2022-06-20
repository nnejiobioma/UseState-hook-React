import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

// import React, { useState } from "react"; //import useSate

// function App() {
//   const [count, setCount] = useState(0); //set useSate

//   function inCrease() {
//     //useSate Function
//     setCount(count + 1);
//   }

//   function decreseCount() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decreseCount}>-</button>
//       <button onClick={inCrease}>+</button>
//     </div>
//   );
// }

// export default App;
