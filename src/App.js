import React, { Component } from 'react';
import Classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Mark', age: '34'},
      {id: '2', name: 'Bill', age: '63'},
      {id: '3', name: 'Warrent', age: '88'}
    ],
    isShow: false
  }

  togglePersonHandler = () => {
    const showTogglePerson = this.state.isShow;
    this.setState({
      isShow: !showTogglePerson
    })
  }

  changePersonHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });

  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })

  }

  render() {
    let persons = null;
    let btnClass = '';


    if(this.state.isShow) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.changePersonHandler(event, person.id)}/>
            )
          })}
        </div>
      );
      btnClass = Classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(Classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(Classes.bold);
    } 
    
    return (
      <div className={Classes.App}>
        <p>Hello, i'm reactjs!</p>
        <p className={assignedClasses.join(' ')}>This is the right thing!</p>
        <button
          onClick={this.togglePersonHandler}
          className={btnClass}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
