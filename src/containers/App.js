import React, { Component } from 'react';
import Classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Mark', age: '34' },
        { id: '2', name: 'Bill', age: '63' },
        { id: '3', name: 'Warrent', age: '88' }
      ],
      isShow: false
    }
    console.log('[App.js] inside constructor');
  }
  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[App.js] inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] inside shouldComponentUpdate', nextProps, nextState);
    // performance gain for component
    return nextState.persons !== this.state.persons || 
          nextState.isShow !== this.state.isShow;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] inside componentDidUpdate');
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

    const person = { ...this.state.persons[personIndex] };
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
    console.log('[App.js] inside render method');
    let persons = null;


    if (this.state.isShow) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changePersonHandler} />;
    }



    return (
      <WithClass classes={Classes.App}>
        <Cockpit
          isShow={this.state.isShow}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </WithClass>
    );
  }
}

export default App;
