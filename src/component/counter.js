import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h3>Click the button if you like the post</h3>
      <h3> {count} likes</h3>
      <button onClick={() => { 
        setCount(count +1)
      }}>Click me</button>
    </div>
  )
}

export default Counter
