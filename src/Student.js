import { useState } from "react";
import StudentItem from "./StudentItem";

export default function StudentList(){
  
  const [search,setSearch] = useState('')

    const students=[
      {id:2, first_name:'EEE', last_name:'FFF'},
        {id:0, first_name:'AAA', last_name:'BBB'},
        {id:1, first_name:'ACC', last_name:'DDD'},
        
    ];


   return <div style ={{display:'flex', flexDirection:'column'}}>

    
  <input type="text" onChange={e=>setSearch(e.target.value.toLowerCase())} 
   placeholder="search" style={{padding:6, margin:30, width:200}}
  />

{students.filter(std=> std.first_name.toLowerCase().includes(search) 
|| std.last_name.toLowerCase().includes(search)).map((std,idx)=>{

   return <StudentItem
   key ={std.id}
   student={std}
   index={idx}
 />
}
)}


   
       


       
   </div>
}