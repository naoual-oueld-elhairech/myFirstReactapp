
import './App.css';
import StudentList from './Student';

import Welcome,{Welcome2, Button} from './Welcome'





function App() {
  return (
    <div style={{padding:20,display: 'flex',flexDirection:'column'}}>
      <Welcome/>
      <Welcome2/>
      <Button text={"Submit"} style={{color:'red'}}/>
      <Button text={"Ok"}/>
      <Button text={"Save"}/>
     

     <div style={{padding:20}}>
     <StudentList/>

     </div>
     
    </div>
  );
}

export default App;
