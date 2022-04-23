import React from 'react';
class Courses extends React.Component {
    
    render() { 
        return <div>
            <p>Student enroled in Course <b>{this.props.enrolled}</b></p>
            </div>
    };
}
 
export default Courses;