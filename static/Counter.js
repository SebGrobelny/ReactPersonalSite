import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
 
//   render() {
//     return (
//       <button
//         onClick={() => {
//           this.setState({ count: this.state.count + 1 });
//         }}
//       >
//         Count: {this.state.count}
//       </button>
//     );
//   }
// }
// export default Counter;


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
      );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

    render() {
    return (
     <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
    );
  }
}
export default Clock;
//   ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
