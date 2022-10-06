/** 
        Jeden komponent z dwoma roznymi textami
        Destrukturyzacja
        Funkcja poza komponentem
 */
    const displayMessage = (isConfirmed, isFormSubmitted) => {
            if(isFormSubmitted) {
                if(isConfirmed) {
                    return <ValidationMessage txt="Mozesz obejrzec film"/>
                } else {
                    return <ValidationMessage txt="Nie mozesz obejrzec tego filmu"/>
                }
            } else {return null}
    }


const ValidationMessage = (props) => {
    const { txt } = props;
    return (
        <p>{txt}</p> // bylo {props.txt}
        )
}

//const PositiveMessage = () => <p>Mozesz obejrzec film</p>;
//const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu</p>;

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

    //displayMessage = () => {
    //    if(this.state.isFormSubmitted) {
    //        if(this.state.isConfirmed) {
    //            return <ValidationMessage txt="Mozesz obejrzec film"/>
    //        } else {
    //            return <ValidationMessage txt="Nie mozesz obejrzec tego filmu"/>
    //        }
    //    } else {return null}  
    //}

    render() {
        const { isConfirmed, isFormSubmitted } = this.state; // destrukturyzacja

        return (
            <>
            <h1>Kup bilet na horror roku</h1>
            <form onSubmit={this.handleFormSubmit}>
                <input 
                type="checkbox" 
                id="age" 
                onChange={this.handleCheckboxChange} 
                checked={isConfirmed} 
                />
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                <br />
                <button type="submit">Kup Bilet!</button>
            </form>
            {displayMessage(isConfirmed, isFormSubmitted)}

            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));