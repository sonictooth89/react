const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek,"
    },
    {
      id: 2,
      age: 24,
      name: "Anna,"
    },
    {
      id: 3,
      age: 21,
      name: "Szczepan"
    },
    {
      id: 4,
      age: 61,
      name: "Karol"
    }
    
  ]
}

const Item = (props) => (
  <div>
    <h1>Uzytkownik {props.user.name}</h1>
    <h2>Ma {props.user.age} lat</h2>
  </div>
)

class ListItems extends React.Component {
  //state = {
  //  items: ["jablko", "sliwka", "gruszka"]
  //}
  render () {
    const users = this.props.data.users;
    const Items = users.map(user => <Item key={user.id} user={user} />)
    
    return (
      <div>
        <ul>
          {Items}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data}  />, document.getElementById('root'))
