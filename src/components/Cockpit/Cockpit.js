import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux';
class Cockpit extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let btnClass = classes.Button;
        let assignedClasses = [];

        if (this.props.isShow) {
            btnClass = [classes.Button, classes.Red].join(' ');
        }
        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        return (
            <Aux>
                <p>Hello, i'm reactjs!</p>
                <p className={assignedClasses.join(' ')}>This is the right thing!</p>
                <button
                    onClick={this.props.clicked}
                    className={btnClass}>Toggle Person</button>
            </Aux>
        )
    }
}

export default Cockpit;