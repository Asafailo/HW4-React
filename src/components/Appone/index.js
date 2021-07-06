import React from 'react';
import { render } from 'react-dom';


class Windowclass extends React.Component{
constructor(props){
    super(props);
    this.state={visibilityStatus:true};
    this.handleTurn=this.handleTurn.bind(this);
}

handleTurn(){
this.setState(state=>({
    visibilityStatus: !state.visibilityStatus}));
}


    

componentWillUnmount(){
console.log("Alert, element was unmount");
}


render(){
return(
    <div>
<h1>Main Title</h1>

{this.state.visibilityStatus?<div className="window">This window will appear or dissapear after button clicking</div>:<div></div>}

<button onClick={this.handleTurn}> 
On/Off
</button>
    </div>
)
}
}
export default Windowclass;





