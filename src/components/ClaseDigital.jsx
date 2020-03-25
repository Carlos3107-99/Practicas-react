import React,{Component} from 'react';
/**Creamos nuestro componente que es un close stateful extende de compones 
 * 
 */

class holaaa extends Component{
    
    constructor(props){
    super(props);
    this.state={
        carloss:' Pero debo conectarme en classroghjklm'
    }
    }


render (){
    return(
    <h1>{this.state.carloss}</h1>
    )
}
};

export default holaaa;