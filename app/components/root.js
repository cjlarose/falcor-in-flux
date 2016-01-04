import React from 'react';
import Item from './item';
import FalcorStore from '../stores/model';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: {}
    };
  }
  componentWillMount() {
    FalcorStore
      .get(["products", {from: 0, to: 10}, "name"])
      .then(function(envelope){
        let products = envelope.json.products;
        this.setState({ products })
      }.bind(this));
  }
  render() {
    let keys = Object.keys(this.state.products);
    return (
      <ul>
        {keys.map(key => 
          <Item 
            key={key} 
            id={key}
            name={this.state.products[key].name}
          />
        )}
      </ul>
    );
  }
};

export default Root;
