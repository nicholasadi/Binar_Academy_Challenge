import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import {useContext, useState, useEffect} from 'react'
import { PlayerContext } from '../contexts/PlayerContextProvider'
import EditForm from './EditForm'

export default function Player({player}) {

  const {deletePlayer} = useContext(PlayerContext)

  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(()=>{
    handleClose()
  },[player])

  return (
    <>
    <td>{player.username}</td>
    <td>{player.email}</td>
    <td>{player.experience}</td>
    <td>{player.level}</td>
    <td>
      <OverlayTrigger
        overlay = {
          <Tooltip id={`tooltip-top`}>
            Edit
          </Tooltip>
        }
      >
      <button onClick={handleShow} className='btn text-warning btn-act' data-toggle='modal'><i className='material-icons'>&#xE254;</i></button>
      </OverlayTrigger>
      <OverlayTrigger
        overlay = {
          <Tooltip id={`tooltip-top`}>
            Delete
          </Tooltip>
        }
      >
      <button onClick={()=> deletePlayer(player.id)} className='btn text-danger btn-act' data-toggle='modal'><i className='material-icons'>&#xE872;</i></button>
      </OverlayTrigger>
    </td>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Update Player
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
          <EditForm thePlayer={player}/>
      </Modal.Body>
      <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close Button
          </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
