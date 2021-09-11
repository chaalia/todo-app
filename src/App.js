import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import { Component } from 'react';
import AddItems from './components/AddItems/AddItems';

class App extends Component {
  state = {
    items : [
      {id: 1, name:"Hamza", age:"20"},
      {id: 2, name:"Mohamed", age:"26"},
      {id: 3, name:"Rjab", age:"19"}
    ]
  }

  deleteItems = (id) =>{
    let items = this.state.items
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  render(){
  return (
    <div className="App">
       <h2> Todo list items </h2>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>

        {/* <h3> <AddItems/></h3> */}
    </div>
  );
}
}

export default App;
