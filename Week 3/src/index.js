// import React from 'react';
// import ReactDOM from 'react-dom';
// import HelloComponent from './Component/HelloComponent';
// import Login from './Component/Login';


// class App extends React.Component {
//  constructor(props)
//  {
//  super(props);
//  this.state = { hello : "World!" };
//  }
//  componentWillMount()
//  {
//  console.log("componentWillMount()");
//  }
//  componentDidMount()
//  {
//  console.log("componentDidMount()");
//  }
//  changeState()
//  {
//  this.setState({ hello : "Geek!" });
//  }
//  render()
//  {
//  return (
//  <div>
//  <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
//  <h2>
//  <a onClick={this.changeState.bind(this)}>Press Here!</a>
//  </h2>
//  </div>);
//  }
//  shouldComponentUpdate(nextProps, nextState)
//  {
//  console.log("shouldComponentUpdate()");
//  return true;
//  }
//  componentWillUpdate()
//  {
//  console.log("componentWillUpdate()");
//  }
//  componentDidUpdate()
//  {
//  console.log("componentDidUpdate()");
//  }
// }
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './Container/BlogPost/BlogPost';
import reportWebVitals from './reportWebVitals';
ReactDom.render(<BlogPost/>, document.getElementById('content'));
reportWebVitals();

//ReactDOM.render(
 //<App/>,
//<HelloComponent />,
//  <Login/>,
 //document.getElementById('root'));