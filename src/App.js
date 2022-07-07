import "./App.css";
import React, { Component } from "react";
// import React, { useState } from "react";
import Person from "./Person/Person.js"; //importing the Person component
// import person from "./Person/Person.js";

// function App()  {
//   const [ages, setAges] = useState([{

//   },{

//   }, {

//   }]);

//   return (
//     <div>
//       <h1>Hi, I am react App by Functional Component.</h1>
//       {ages.map(age => {
//         return  <p>{age}</p>;
//       })}
//       <button onClick={() => setAge(prev => prev +1)}>Change Age</button>
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     name: "Fareed",
//     age: 75,
//   };

//   render() {
//     return (
//       <div>
//         <h1>Class Component</h1>
//         <p>{this.state.name}</p>
//         <p>{this.state.age}</p>
//         <button>Change Age</button>
//         <Person />
//       </div>
//     );
//   }
// }

// -----------OR-------------

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hi, I am  react App by Class Component.")
// );
// }
// }
// class App extends component {
//   state = {
//     university: "KU",
//     year: 2021,
//   };
//   render() {
//     return (
//       <div>
//         <h1>Class Component</h1>
//         <p>{this.state.university}</p>
//         <p>{this.state.year}</p>
//       </div>
//     );
//   }
// }
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h2", null, "Hi, I am class compponenet.")
// );

//-------------Functional Component-------------

// const App = () => {
//   return (
//     <div>
//       <h1>Class Component</h1>
//       <Person />
//     </div>
//   );
// };

//-------------Class Component-------------

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Class Component</h1>
//         <Person name="Faraz Alam" age="22">Web Developer</Person>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     Persons: [
//       { name: "Faraz Alam", age: 22 },
//       { name: "Ammad", age: 21 },
//     ],
//   };
//   render() {
//     return (
//       <div>
//         <Person name={this.state.Persons[1].name} />
//       </div>
//     );
//   }
// }
// ---------switchHandler------------

// class App extends Component {
//   state = {
//     persons: [
//       {
//         name: "Ammad Ali",
//         age: 20,
//       },
//       {
//         name: "Abu Huraira",
//         age: 21,
//       },
//     ],
//   };
//   switchHandler = () => {
//     alert("Switch Button was Clicked!");
//   };
//   render() {
//     return (
//       <div>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <button onClick={this.switchHandler}>Switch Button</button>
//       </div>
//     );
//   }
// }

// -----------Data Updating/setstate----------

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Ammad Ali", age: 20 },
//       { name: "Abu Huraira", age: 21 },
//     ],
//   };
//   switchHandler = () => {
//     this.setState({
//       persons: [
//         { name: "Mannan", age: 19 },
//         { name: "Hamad", age: 22 },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>Class Componenet</h1>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <button onClick={this.switchHandler}>Update Data</button>
//       </div>
//     );
//   }
// }

// --------setState---

// ------Only for Class Component-----

// class App extends Component {
//   state = { name: "Ammad Ali", age: 20 };

//   switchHandler = () => {
//     this.setState(
//         { name: "Mannan", age: 19 }
//     );
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>Class Component</h1>
//         <Person
//           name={this.state.name}
//           age={this.state.age}
//         />
//         <button onClick={this.switchHandler}>Update Data</button>
//       </div>
//     );
//   }
// }
// --------------------------------------------------------

class App extends Component {
  state = {
    name: "Faraz",
    age: 22,
  };
  updateData = () => {
    this.setState({
      name: "Mannan",
      age: 19,
    });
  };
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <Person name={this.state.name} age={this.state.age} />
        <button onClick={this.updateData}>
          Update data.
        </button>
      </div>
    );
  }
}

// setState is only for updating the state.
// and it is not for functional component.
//for functional component we have to use Hooks like useState.

// --------useState---------Only for functional Component-----

// const app = (props) => {
//   const stateArr = useState({
//     persons: [
//       { name: "Ammad Ali", age: 20 },
//       { name: "Abu Huraira", age: 21 },
//     ],
//   });

//   return (
//     <div className="App">
//       <h1>Hi, I am React App.</h1>
//     </div>
//   );
// };

// const app = (props) => {
//   const [values, setValues] = useState({
//     name: "Ammad Ali",
//     age: 21,
//   });

//   const switchHandler = () => {};

//   return (
//     <div className="App">
//       <h1>Functional Component</h1>
//       <Person name={values.name} age={values.age} />
//       <button onClick={switchHandler}>Update Data</button>
//     </div>
//   );
// };

export default App;
