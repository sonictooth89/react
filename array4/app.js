const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 24,
      name: "Anna",
      sex: "female",
    },
    {
      id: 3,
      age: 21,
      name: "Szczepan",
      sex: "male",
    },
    {
      id: 4,
      age: 61,
      name: "Karol",
      sex: "male",
    }
    
  ]
}

const Item = (props) => (
  <div className="userInfo">
    <h1>{props.user.name}</h1>
    <p>Informacje o uzytkowniku</p>
    <p>Wiek uzytkownika: <strong>{props.user.age}</strong></p>
    <p>Plec uzytkownika: <strong>{props.user.sex}</strong></p>
  </div>
)

class ListItems extends React.Component {
  //state = {
  //  items: ["jablko", "sliwka", "gruszka"]
  //}
  render () {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "male")
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
