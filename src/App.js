// import logo from './logo.svg'; import './App.css';
import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      articulos : [
        {
          codigo:1,
          descripcion:'coca-cola',
          precio:2.50
        },
        {
          codigo:2,
          descripcion:'inka-cola',
          precio:2.20
        },
        {
          codigo:3,
          descripcion:'fanta',
          precio:1.70
        }
      ]
    }

    this.borrar = this.borrar.bind(this)
  }

  render() {
    return (
      <div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Código</th> <th>Descripción</th> <th>Precio</th> <th>Borra</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.precio}</td>
                  <td>
                    <button onClick={() => this.borrar(elemento.codigo)}>Borrar</button>
                  </td>
                </tr>
                
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }

  borrar(cod){
    var temp = this.state.articulos.filter((el) => el.codigo !== cod)
    this.setState({
      articulos: temp
    })
  }
}

export default App;
