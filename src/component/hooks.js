import React, { useState } from "react"

const intialState = {
  name: "Hemant Negi",
  age: 25,
  github: "https://github.com/nhemnt",
}

function StateInFunctionalComponent() {
  // Declare a new state variable, which we'll call "state"
  const [state, setState] = useState(intialState)

  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const { name, age, github } = state
  return (
    <div>
      <p>
        <span>Name: </span>{" "}
        <input type="text" name="name" onChange={handleChange} value={name} />
      </p>
      <p>
        <span>Age: </span>{" "}
        <input type="text" name="age" onChange={handleChange} value={age} />
      </p>
      <p>
        <span>Github: </span>{" "}
        <input type="text" name="github" onChange={handleChange} value={github} />
      </p>
    </div>
  )
}
