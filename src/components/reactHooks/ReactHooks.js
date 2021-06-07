import React, { useState, useEffect } from "react";


function ReactHooks () {
    const [count, setCount] = useState(0);

let even
useEffect(() => {
 even = `Count: ${count}`;
  }, [count]);

  if (count % 2 == 0) {
               even = count;
              } else {
                even = even;
              }
            
          return (
            <div>
              <h3>Number of Clicks: {count}</h3>
              <h3>Even numbers: {even}</h3>
              <button onClick={() => setCount((count) => count + 1)}>Count</button>
    
            </div>
          );

          
        };
      
      

    export default ReactHooks;