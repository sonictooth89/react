class App extends React.Component {
  state = {
    avaliableProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    })
  }

  handleBuy = () => {
    this.setState({
      avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render() {
    const {shoppingCart, avaliableProducts} = this.state;
    const style = this.state.shoppingCart === 0 ? {opacity: 0.3} : {};

    return (
      <>
        <button disabled={shoppingCart === 0 ? true: false} onClick={this.handleRemoveFromCart}>-</button>

        <span style={style}>{shoppingCart}</span>


        <button disabled={shoppingCart === avaliableProducts? true: false} onClick={this.handleAddToCart}>+</button>
       {shoppingCart > 0 && <button onClick={this.handleBuy}>KUP</button>}

      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
