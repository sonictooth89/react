const Cash = (props) => {
  const value = (props.cash / props.ratio * props.price).toFixed(2);
  return (
  <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity"
    //ratioDollar: 3.6,
    //ratioEuro: 4.2,
  }

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: 'zloty',
        ratio: 1,
        title: 'Wartosc w zlotych: '
      },
      {
        id: 1,
        name: 'dollar',
        ratio: 3.6,
        title: 'Wartosc w dolarach: '
      },
      {
        id: 2,
        name: 'euro',
        ratio: 4.55,
        title: 'Wartosc w euro: '
      },
      {
        id: 3,
        name: 'pound',
        ratio: 5.12,
        title: 'Wartosc w funtach: '
      },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    }
  }

  

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: "",
    })
  }

  insertSuffix(select) {
    if(select === "electricity") return <em>kWh</em>
    else if(select === "gas") return <em>litrow</em>
    else if(select === "oranges") return <em>kg</em>
    else return null
  }

  selecPrice (select) {
    const price = this.props.prices[select];
    return price;
  }

  render() { 

    const {amount, product} = this.state;

    const calculators = this.props.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={this.selecPrice(product)}/>
    ))
    return (
      <div className="app">
        <label>Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prad</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarancze</option>
          </select>
        </label>
        <br />
        <label>
          <input 
          type="number" 
          value={this.state.amount} 
          onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
      
      {calculators}
      </div>
    );
  }
}
 
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));