import React from 'react';
class College extends React.Component {
  
    render() { 
        return <p>College <b>{this.props.name} at {this.props.location}</b></p>;
    }
}
 
export default College;