import { useEffect, useState } from 'react'

export default function Pagination({pages, setCurrentPage, currentPlayers, sortedPlayers}) {
  const numOfPages = []

  for (let i=1; i<=pages; i++){
    numOfPages.push(i)
  }

  const [currentButton,setCurrentButton] = useState(1)

  // masih error disini mas
  // useEffect(()=>{
  //   setCurrentPage(currentButton)
  // },[currentButton,setCurrentPage])

  return (
    <div className='clearfix'>
      <div className='hint-text'>Showing <b>{currentPlayers.length}</b> out of <b>{sortedPlayers.length}</b> entries</div>
      <ul className='pagination'>
      <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}>
        <a href="#!" onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>
          Previous
        </a>
      </li>

      {
      numOfPages.map((page,index)=>{
        return(
          <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}>
            <a href="#!" className="page-link" onClick={()=>setCurrentButton(page)}>{page}
            </a>
          </li>
        )
      })
      }

      <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`}>
        <a href="#!" onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}>
          Next
        </a>
      </li>

      
      </ul>
    </div>
  )
}
