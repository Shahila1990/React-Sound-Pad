## Challenge part 1:
      1. Initialize state with the default value of the array pulled in from pads.js
      2. Map over that state array and display each one as a <button> (CSS is already written for you)
        (Don't worry about using the "on" or "color" properties yet)

## Challenge part 2:
      1. Create a separate component called "Pad" and replace the `button` above with our <Pad /> component
      2. Pass the Pad component a prop called `color` with the value of the same name from the `padsData` objects
      3. In the Pad component, apply an inline style to the <button> to set the backgroundColor of the button.
      
       
## Challenge part 3:
      Our buttons got turned off by default! Update the code so if the button is "on", it has the className of"on".  

## Challenge Part 4: 
      1. Create state controlling whether this box is "on" or "off". Use the incoming `props.on` to determine the initial state.
      2. Create an event listener so when the box is clicked, it toggles from "on" to "off".
      3. Goal: clicking each box should toggle it on and off.   