import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from T using React!</h1>
// }
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}! I see your {props.age} years old. {props.greeting} {props.name}!</h1>;
};

export default FunctionalGreetingWithProps;
