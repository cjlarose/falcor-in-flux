import React from 'react';

class Feature extends React.Component {
  render() {
    return (
      <li>
          <p> {this.props.name} {this.props.desc} </p>
          <div> {this.props.likes} <a href="#" onClick={this.props.onClick}> Like </a></div> 
      </li>
    );
  }
};

export default Feature;
