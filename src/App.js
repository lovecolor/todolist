import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
let listToDo=[123,123];
export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      input:""
    }
  }
  handleTextChange=(event)=>{
    this.setState({
      input:event.target.value
    })
  }
  handleAdd=()=>{

    listToDo.push(this.state.input);
    this.setState({
      input:""
    })
  }
  handleDelete=(i)=>{
    listToDo=listToDo.filter((item,index)=>{
      return index!=i
    })
    this.setState({
      input:""
    })
  }
  
  render() {
    return (
      <div className='container'>
        <div className='top'>
        <form className='form'>
          <input className='input' type="text" name="fname" onChange={this.handleTextChange} value={this.state.input}></input>
          
        </form>
        <button className='add' onClick={this.handleAdd}>Add</button>
        </div>
        
        <div className='bottom'>
          {listToDo.map((item,index)=>(
            <>
            <div className='row'>
            <div className='content'>
              {item}
            </div>
            <button className='delete' onClick={()=>this.handleDelete(index)}>Delete</button>
            </div>
            </>
            
            
          ))}
        </div>
      </div>
    )
  }
}



