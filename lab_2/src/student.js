import React from 'react';
import Courses from './courses';

const Student = (props) => {
    <div className='Courses'></div>
    return <div>
        <p>Student <b>{props.name}</b> with student <b>{props.number}</b> <Courses enrolled={props.enrolled}/></p>

    </div>;
};
 
export default Student;