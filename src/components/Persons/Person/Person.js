import React from 'react'
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';

class Person extends React.Component {
    constructor(props) {
        super(props);
    }


  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }
    render() {
        console.log('[Person.js] inside render()')
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name}, i'm {this.props.age} years old</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </WithClass>
        )
    }
}

export default Person