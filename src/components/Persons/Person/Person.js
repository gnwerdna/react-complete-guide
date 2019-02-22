import React from 'react'
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }

  }
  render() {
    console.log('[Person.js] inside render()')
    return (
      <Aux>
        <p onClick={this.props.click}>My name is {this.props.name}, i'm {this.props.age} years old</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}


export default withClass(Person, classes.Person);