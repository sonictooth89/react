class App extends React.Component {
    state = {
        prophecies: [
            "pierwsza wrozba",
            "druga wrozba",
            "trzecia wrozba",
            "czwarta wrozba",
            "piata wrozba",
            "szosta wrozba",
            "siodma wrozba",
            "osma wrozba",
            "dziewiata wrozba",
            "dziesiata wrozba",
        ],
        text: "",
        value: "",
        
        
      } 
      
      handleShowOption = () => {
            this.setState({
            text: this.state.prophecies[Math.floor(Math.random() * this.state.prophecies.length)],
        })
      }

      handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
      }

      handleAddItem = () => {
            if (this.state.value === "") return alert('Wpisz cos');
            const prophecies = [...this.state.prophecies];
            prophecies.push(this.state.value);
            this.setState({
                prophecies: prophecies,
                value: '',
            })
            alert(`Wrozba dodana: Aktualne wrozby: ${prophecies}`)
      }

    render() { 

        return (
                <div>
                <button onClick={this.handleShowOption}>
                    Zobacz wrozbe
                </button>
                <br /><br />
                <input 
                    type="text" 
                    placeholder="twoja wlasna wrozba" 
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                <button 
                type="submit" 
                onClick={this.handleAddItem}
                >Dodaj wrozbe</button>
                <br />
                {this.state.text ? <h1>{this.state.text}</h1> : null}
            </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'))