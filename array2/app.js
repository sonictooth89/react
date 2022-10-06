const Item = (props) => <li>{`owoc ${props.content}`}</li>

class ListItems extends React.Component {
  state = {
    items: ["jablko", "sliwka", "gruszka"]
  }
  render () {

    const Items = this.state.items.map(item => <Item key={item} content={item} />)
    
    return (
      <div>
        <ul>
          {Items}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
