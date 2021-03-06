import React from 'react';
import Person from '../Persons/Person/Person';
import {AuthContext} from '../../containers/App';
class Persons extends React.Component {
    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log("[Persons.js] inside componentWillMount()");
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }
    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js] inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] inside shouldComponentUpdate', nextProps, nextState);
        //performance gain for component
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Persons.js] inside componentWillUpdate', nextProps, nextState);        
    }

    componentDidUpdate() {
        console.log('[Persons.js] inside componentDidUpdate');
    }
    render() {
        console.log('[Persons.js] inside render()')
        const person = (person, index) => {
            return (
                <Person
                    position={index}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    ref={this.lastPersonRef}
                    authenticated={this.props.isAuthenticated}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        }
        return (
            this.props.persons.map(person, this));
    }
}
export default Persons; 