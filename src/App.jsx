import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:"",
      password:""
    }
  
this.handleChange= this.handleChange.bind(this)
  }
handleChange(e){
  this.setState({[e.target.name]:e.target.value});
}


handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state)
  this.setState({username:"",email:"",password:""})
}

  render() {
    return (
      <div className="container">
         <h1>React Forms</h1>
      <form  onSubmit={this.handleSubmit}>
       
        <label htmlFor="">Username:</label>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email"onChange={this.handleChange} value={this.state.email}/>
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        <br />
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default App;