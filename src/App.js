import React from 'react';
import {Table} from 'reactstrap'
import axios from 'axios';

export default class App extends React.Component {
  state = {
    input: []
  }

  componentDidMount() {
    axios.get(`https://btm-rn.herokuapp.com/api/v1/users/`)
      .then(res => {
        const input = res.data.results;
        this.setState({ input });
      })
  }

  render() {
    return (

    <Table dark>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{ this.state.input.map(val => <p>${val._id}</p>)}</th>
              <td>{ this.state.input.map(val => <p>{val.name}</p>)}</td>
              <td>{ this.state.input.map(val => (val.age) ? <p>{val.age}</p> : <p>-</p>)}</td>
            </tr>
          </tbody>
        </Table>
    )
  }
}