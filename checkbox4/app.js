const ValidationMessage = (props) => {
    const { txt } = props;
    return (
        <p>{txt}</p> // bylo {props.txt}
        )
}

const OrderForm = (props) => {
    const {submit, isConfirmed, change} = props;
    return (
        <form onSubmit={props.submit}>
                <input 
                type="checkbox" 
                id="age" 
                onChange={props.change} 
                checked={props.isConfirmed} 
                />
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                <br />
                <button type="submit">Kup Bilet!</button>
            </form>
        )
    }

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
              return <ValidationMessage txt="Mozesz obejrzec film"/>
          } else {
              return <ValidationMessage txt="Nie mozesz obejrzec tego filmu"/>
            }
        } else {return null}  
    };

    render() {
        const { isConfirmed, isFormSubmitted } = this.state; // destrukturyzacja

        return (
            <>
            <h1>Kup bilet na horror roku</h1>
            <OrderForm 
                change={this.handleCheckboxChange} 
                submit={this.handleFormSubmit}
                checked={isConfirmed} 
            />

            {this.displayMessage()}

            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));