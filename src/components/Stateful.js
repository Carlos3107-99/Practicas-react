import React,{Component} from 'react';
/**Creamos nuestro componente que es un close stateful extende de compones 
 * 
 */

class Stateful extends Component{
    
    constructor(props){
    super(props);
    this.state={
        hello:'Hola Mundo',
        hola:'usando props'
    }
    }


render (){
    return(
    <h1>{this.state.hello},{this.state.hola}</h1>
    )
}
};

export default Stateful;