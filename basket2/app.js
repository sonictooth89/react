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
    return (
      <>
        <button disabled={this.state.shoppingCart===0? true: false} onClick={this.handleRemoveFromCart}>-</button>
        <span>{this.state.shoppingCart}</span>
        <button disabled={this.state.shoppingCart===this.state.avaliableProducts? true: false} onClick={this.handleAddToCart}>+</button>
       {this.state.shoppingCart > 0 && <button onClick={this.handleBuy}>KUP</button>}

      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
