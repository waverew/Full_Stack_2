const element = React.createElement; 
class _tg extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { _tg: false }; 
  } 
 
  render() { 
    if (this.state._tg) { 
      return element( 
          'button',
          { onClick: () => this.setState({ _tg: false})},
          'ON'
          
      ) 
    } 
 
    return element( 
      'button', 
      { onClick: () => this.setState({ _tg: true }) }, 
      'OFF' 
    ); 
  } 
  
} 
const doc = document.querySelector('#button-container'); 
ReactDOM.render(element(_tg), doc);