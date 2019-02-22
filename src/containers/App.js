import React, { Component } from 'react';
import Classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

// export const AuthContext = React.createContext(false);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Mark', age: 34 },
        { id: '2', name: 'Bill', age: 63 },
        { id: '3', name: 'Warrent', age: 88 }
      ],
      isShow: false,
      toggleClicked: 0,
      authenticated: false
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
    // performance gain for component pure component
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
    this.setState((prevState, props) => {
      return {
        isShow: !showTogglePerson,
        toggleClicked: prevState.toggleClicked + 1
      }
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

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    console.log('[App.js] inside render method');
    let persons = null;

    if (this.state.isShow) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changePersonHandler} 
        isAuthenticated={this.state.authenticated}/>;
    }

    return (
      <Aux>
        <Cockpit
          isShow={this.state.isShow}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler} />
        {/* <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider> */}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, Classes.App);
