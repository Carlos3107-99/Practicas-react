import React,{Component} from 'react';
/**Creamos nuestro componente que es un close stateful extende de compones 
 * 
 */

class hola extends Component{
    
    constructor(props){
    super(props);
    this.state={
        hello:'Me klñVoy'
    }
    }


render (){
    return(
    <h1>{this.state.hello}</h1>
    )
}
};

export default hola;