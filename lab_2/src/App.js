import React from 'react';
import College from './college';
import Student from './student';
class App extends React.Component { 
  render() { 
    return (
      <div>
        <Student name="Aramchik" number="tri" enrolled="1"/>
    <Student name="Arsen" number="1234" enrolled ="3"/>
    <Student name="Vados" number="228" enrolled = "2"/>
    <College name="Mirea" location="Mikasa Loma"/>
      </div>
    );
  }
}
 

export default App;