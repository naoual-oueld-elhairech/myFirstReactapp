

export default function StudentItem(props){
   return <button style ={{

       width:200,
       marginBottom:10,
       background: props.index %2 ?'#ccc': '#eee',
       color:'fff',
       padding:10,
       borderRadius:7,
       border:0,



   }}>
   {props.student.first_name}   {props.student.last_name}


   </button>
}