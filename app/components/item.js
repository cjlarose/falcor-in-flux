import React from 'react';
import FalcorStore from '../stores/model';
import dispatcher from '../lib/dispatcher';

import { doLike } from '../actions';
import Feature from './feature';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {} 
    };
  }
  componentWillMount() {
    this.updateState(this.props.id);
    FalcorStore.on("change", this.updateState.bind(this, this.props.id));
  }
  render() {
    let keys = Object.keys(this.state.features);
    return (
      <li>
        <div className="itemname">{this.props.name}</div>
        <ul>
          {keys.map(key => 
            <Feature
              key={key}
              onClick={this.onClick.bind(this, this.props.id, key)}
              {...this.state.features[key]}
            />
          )} 
        </ul>
      </li>
    );
  }
  updateState(id) {
    FalcorStore
      .get(["products", id, "features", {from:0, to: 10}, ["name", "likes", "liked", "desc"]])
      .then( envelope => {
        let features = envelope.json.products[id].features;
        this.setState({ features }) 
      });
  }
  onClick(itemId, featureIndex) {
    let action = doLike(itemId, featureIndex);
    dispatcher.dispatch(action);
  }
};

export default Item;
