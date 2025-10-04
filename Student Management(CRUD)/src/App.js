

import './index.css';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { useEffect, useState } from 'react';

import { Button, EditableText, InputGroup, Toaster, Position, Intent } from "@blueprintjs/core";


import './App.css';
const AppToaster = Toaster.create({ position: Position.TOP });
function App() {

  const [users, setusers] = useState([]);
  
  const[newName, setNewName] =useState("")
  const[newEmail, setNewEmail]=useState("")
  const[newWebsite, setNewWebsite]=useState("")
  

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then((respons) => respons.json())

      .then((json) => setusers(json))

  }, [])

  function adduser() {
    const name = newName.trim();
    const email = newEmail.trim();
    const website = newWebsite.trim();

    if (name && email && website){
      fetch("https://jsonplaceholder.typicode.com/users",
        {
        method:"POST",
        body: JSON.stringify({
          name,
          email,
          website

        }),
        headers:{
          "Content-Type": "application/json;charset=UTF-8"
        }
        }    
      ).then((response)=>response.json())
       .then(data=>{
        setusers([...users,data]);
        AppToaster.show({
          message:"user added successfully",
          intent:"success",
          timeout: 3000
          
          
        })
        setNewName("")
        setNewEmail("")
        setNewWebsite("")

       })
      

    }

  }

  function onChangeHandler(id, key, value) {
  setusers((prevUsers) => 
    prevUsers.map((user) => 
      user.id === id ? { ...user, [key]: value } : user
    )
  );
}

  function updateuser(id){
    const user = users.find((user)=>user.id===id);
          fetch(`https://jsonplaceholder.typicode.com/users/10`,

            {
              method:"PUT",
              body:JSON.stringify(user),
              headers:{
                "Content-Type": "application/json;charset=UTF-8"
              }
            }
            
          )
     
      
       .then((response)=>response.json())
       .then(data=>{ 
        AppToaster.show({
          message:"user updated successfully",
          intent:"success",
          timeout: 3000
        })
       })

  }

  function deleteuser(id){
     const user = users.find((user)=>user.id===id);
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
             {
        method:"DELETE", 
       
        })      
       .then((response)=>response.json())
       .then(data=>{
        setusers((users)=>{
          return users.filter(user=> user.id !==id)

       }) 
        AppToaster.show({
          message:"user deleted successfully",
          intent:"success",
          timeout: 3000
        })
       })

  }

  return (

    <div className="App">

      <table className='bp4-html-table modifire'>

        <thead>

          <th>ID</th>

          <th>Name</th>

          <th>Email</th>

          <th>website</th>

          <th>Action</th>

        </thead>

        <tbody>

          {users.map(user =>

            <tr key={user.id}>

              <td><EditableText value={user.id}/></td>

              <td><EditableText value={user.name}/></td>

              <td><EditableText onChange={value=>onChangeHandler(user.id, 'email', value)} value={user.email}/></td>

              <td><EditableText onChange={value=>onChangeHandler(user.id, 'website', value)} value={user.website}/></td>

              <td>

                <Button intent="success" onClick={()=>updateuser(user.id)}>update</Button>
                 &nbsp;
                <Button intent='danger'onClick={()=>deleteuser(user.id)}>Delete</Button>

              </td>

            </tr>

          )}

        </tbody>
        <tfoot>
          <tr>
            <td/>
            <td><InputGroup 
                 value={newName}onChange={(e)=>setNewName(e.target.value)}
                 placeholder='Enter Name...'/></td>
            <td><InputGroup 
                value={newEmail}onChange={(e)=>setNewEmail(e.target.value)}
                placeholder='Enter Email...'/>
            </td>
            <td><InputGroup 
                 value={newWebsite}onChange={(e)=>setNewWebsite(e.target.value)}
                 placeholder='Enter Website'/></td>
            <td>
              <Button intent='none'onClick={adduser
              }>Add user</Button>
            </td> 
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
export default App;
