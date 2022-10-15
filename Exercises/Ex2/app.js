const Person = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button onClick={props.delete}>Usun</button>
        </li>
    )
}


class List extends React.Component {
    state = {
        people: [
            {name: 'Ala B.', id: 1}, 
            {name: 'Dominik B.', id: 2}, 
            {name: 'Seba N.', id: 3},
            {name: 'Gosia N.', id: 4}
        ],
    } 

    //handleDelete(id) {
    //    const people = [...this.state.people]; // spread //operator - kopia tablicy
    //    const index = people.findIndex(person => person.//id === id);
    //    people.splice(index, 1); // usun 1 element z //wartoscia index
    //    this.setState({
    //        people: people, // przypisujemy people w //miejsce starego people
    //    })
    //}

    handleDelete(name) {
        let people = Array.from(this.state.people);
        people = people.filter(person => name !== person.name);
        this.setState({
            people: people,
        })
    }
    
    render() { 

        //const people = this.state.people.map(person => //<Person 
        //    key={person.id} 
        //    name={person.name} 
        //    delete={this.handleDelete.bind(this, person.//id)}/>
        //);

        const people = this.state.people.map(person => <Person 
            key={person.id} 
            name={person.name} 
            delete={this.handleDelete.bind(this, person.name)}/>
        );

        return (
            <ul>
                {people}
            </ul>
        );
    }
}
 
ReactDOM.render(<List />, document.getElementById('root'));