const PositiveMessage = () => <p>Mozesz obejrzec film</p>;
const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu</p>;

class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }
    
    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
        this.setState({
            isFormSubmitted: true,
        })

    }

    displayMessage = () => {
        if(this.state.isFormSubmitted) {
            if(this.state.isConfirmed) {
                return <PositiveMessage/>
            } else {
                return <NegativeMessage/>
            }
        } else {return null}
        
}

    render() {
        //console.log(this.state.isConfirmed);
        return (
            <>
            <h1>Kup bilet na horror roku</h1>
            <form onSubmit={this.handleFormSubmit}>
                <input 
                type="checkbox" 
                id="age" 
                onChange={this.handleCheckboxChange} 
                checked={this.state.isConfirmed} 
                />
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                <br />
                <button type="submit">Kup Bilet!</button>
            </form>
            {this.displayMessage()}

            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));