import React, { useState } from 'react'

  import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
   const CreateNote = (props)=>
   {

    const[expand,setExpand]=useState(false);
       const [note,setNote] = useState({

        title:'',
        content:' ',
       });
const expandIt=()=>{
  setExpand(true);
};
const btoNormal=()=>{
  setExpand(false);
}
 const InputEvent=(event)=>
 {
    //  const value= event.target.value; 
    //  const value= event.target.value; 

    const{name,value}=event.target;
    setNote((prevData)=>{
         return{
       ...prevData,          //spread operator is used to get previous data
       [name]:value,

     };
    }
     );
     console.log(note)
 };
      
 const addEvent=()=>
 {
  props.passNote(note);
  setNote({

    title:'',
    content:' ',
   });
 }

     return(
 <>
 <div className='main_note' onDoubleClick={btoNormal}>
  <form>
 
  {expand?
      <input type='text'
      name='title' style={{height:'5rem'}}
       value ={note.title}
        onChange={InputEvent}
         placeholder='Choose the Title'
         autoComplete="off" /> :  null}


       <textarea rows ='05' cols=" 50"
       name='content'
        value ={note.content}
        onChange={InputEvent} 
        placeholder="write your note.........." 
          onClick={expandIt}
        />
     { expand?
      <Button  onClick={addEvent}>
                    <AddIcon  className="plus_sign"/>
      </Button> :null}
       
  </form>


 </div>
 </>
     );

};export default CreateNote