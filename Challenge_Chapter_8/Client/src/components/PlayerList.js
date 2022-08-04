import { Modal, Button, Alert } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../contexts/PlayerContextProvider'
import Player from './Player'
import AddForm from './AddForm'
import Pagination from './Pagination'


export default function PlayerList() {

  const {sortedPlayers} = useContext(PlayerContext)

  const [show,setShow] = useState(false)

  const [showAlert,setShowAlert] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const [currentPage,setCurrrentPage] = useState(1)
  const [playersPerPage] = useState(5) //change number to make list players to see in one page

  const indexOfLastPlayer = currentPage * playersPerPage
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage
  const currentPlayers = sortedPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer)
  const totalPagesNumber = Math.ceil(sortedPlayers.length / playersPerPage)

  const handleShowAlert = () =>{
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 2000);
  }

  useEffect(()=>{
    handleClose();
    handleShowAlert()
  },[sortedPlayers])




  return (
    <>
    <div className='table-title'>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Manage <b>Players</b></h2>
        </div>
        <div className='col-sm-6'>
        <button onClick={handleShow} className='btn btn-success' data-toggle='modal'>
          <i className='material-icons'>&#xE147;</i>
          <span> Add new Player</span>
        </button>
        </div>
      </div>
    </div>
    <Alert variant="success" show={showAlert}>
      Player List Updated Successfully!
    </Alert>
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Experience</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
          {
            currentPlayers.map(player =>{
              return(
              <tr key={player.id}>
                <Player player={player}/>
              </tr>
              )
            })
          }
      </tbody>
    </table>

    <Pagination pages = {totalPagesNumber}
                setCurrrentPage={setCurrrentPage}
                currentPlayers = {currentPlayers}
                sortedPlayers = {sortedPlayers}/>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Add Player
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <AddForm />
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
