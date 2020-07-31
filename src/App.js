import React from 'react';
import logo from './logo.svg';
import './App.css';

// const abobrinha = require('readline-sync');
import { CommentCardFunction, CommentCardClass } from './components/CommentCard';
import Contador from './components/Contador';

function HelloWorld(props) {
  return (
    <div>Hello, {props.world}!</div>
  );
}

class UserCard extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h5>{name}</h5>
        <span>{this.props.email}</span>
      </div>
    );
  }
}

function UserList(props) {
  const users = props.users;

  const renderedUsers = [];
  users.forEach(user => {
    renderedUsers.push(
      <UserCard name={user.name} email={user.email} />
    );
  });

  return (
    <ul>
      {renderedUsers.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // nao sei de onde (pode ser do banco)
    const userList = [
      { name:"Max", email: "max@arbyte.com.br" },
      { name:"Miriã", email: "miria@arbyte.com.br" },
      { name:"Beatriz", email: "beatriz@arbyte.com.br" },
      { name:"Juliano", email: "juliano@arbyte.com.br" },
    ];
    // <HelloWorld world="Lasanha"/>
    // <UserList users={userList}/>
    return (
      <div className="App" style={{backgroundColor: 'blue'}}>
        <Contador/>
        <CommentCardFunction
          avatarUrl={'https://static.pokemonpets.com/images/monsters-images-300-300/5-Charmeleon.png'}
          comment={'O pai ta on'}
          userName={'Dr. Pompeu'}
        />
        <CommentCardClass
          avatarUrl={'https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png'}
          comment={'O pai ta off'}
          userName={'Dr. Pompilio'}
        />
      </div>
    );
  }
}

export default App;
