import React from 'react'
// import classes from './Person.module.css';
// import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }


  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }


  render() {
    console.log('[Person.js] inside render()')
    return (
      <Aux>
        {this.props.authenticated ? <p>i'm authenticated</p> : null}
        <p onClick={this.props.click}>My name is {this.props.name}, i'm {this.props.age} years old</p>
        <input
          ref={this.inputElement}
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


export default Person;