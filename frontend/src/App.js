import React from 'react'
import './App.css';
import axios from "axios";
import UserList from "./components/User";
import './css/main.css'
import Menu from "./components/Menu";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(resp => {
      this.setState({
        'users': resp.data
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (<div>
        <Menu title="Users"/>
        <main>
          <UserList users={this.state.users}/>
        </main>
          <Footer/>
    </div>
    )
  }
}

export default App;
