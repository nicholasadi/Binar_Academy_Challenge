import { Button, Form } from 'react-bootstrap'
import {PlayerContext} from '../contexts/PlayerContextProvider'
import {useContext, useState} from 'react'

export default function AddForm() {


  const {addPlayer} = useContext(PlayerContext)
  const [newPlayer, setNewPlayer] = useState({
    username:"", email:"", experience:"", level:""
  })
  const onInputChange = (e) =>{
    setNewPlayer({...newPlayer,[e.target.name]: e.target.value})
  }
  const {username, email, experience, level} = newPlayer
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(username, email, experience, level)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control 
        type='text' 
        placeholder='Username *'
        name="username"
        value={username}
        onChange={(e)=>onInputChange(e)}
        required
        />        
      </Form.Group>
      <Form.Group>
        <Form.Control 
        type='email' 
        placeholder='Email *'
        name="email"
        value={email}
        onChange={(e)=>onInputChange(e)}
        required
        />        
      </Form.Group>
      <Form.Group>
        <Form.Control 
        type='integer' 
        placeholder='Experience *'
        name="experience"
        value={experience}
        onChange={(e)=>onInputChange(e)}
        required
        />        
      </Form.Group>
      <Form.Group>
        <Form.Control 
        type='integer' 
        placeholder='Level *'
        name="level"
        value={level}
        onChange={(e)=>onInputChange(e)}
        required
        />        
      </Form.Group>
      <Button variant='success' type='submit'>
        Add New Player
      </Button>
    </Form>
  )
}
