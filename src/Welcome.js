import {useState} from 'react'

function Welcome(){

    const [counter,setCounter] =  useState(0);

    return <div>welcome
        <button style={{fontSize:20 }} onClick ={() =>setCounter(counter+1)}>
            {counter}
        </button>
    </div>
}


export function Welcome2(){
    return <div>Welcome 2</div>
}


export function Button (props){

    return < button style ={{width :200, marginBottom :10, ...props.style}}>
       {props.text}
           </ button>
           
   
}



/*
const  welcome = () =>{
    return <div>welcome</div>
}
*/


export default Welcome;