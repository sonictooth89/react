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

  render() {
    return (
      <>
        <button disabled={this.state.shoppingCart===0? true: false} onClick={this.handleRemoveFromCart}>-</button>
        <span>{this.state.shoppingCart}</span>
        <button disabled={this.state.shoppingCart===this.state.avaliableProducts? true: false} onClick={this.handleAddToCart}>+</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
