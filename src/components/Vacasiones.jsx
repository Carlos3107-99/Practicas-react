import React,{Component} from 'react';
/**Creamos nuestro componente que es un close stateful extende de compones 
 * 
 */

class holaa extends Component{
    
    constructor(props){
    super(props);
    this.state={
        carlos:'De vacacioneshjkl '
    }
    }


render (){
    return(
    <h1>{this.state.carlos}</h1>
    )
}
};

export default holaa;