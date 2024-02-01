import React from 'react'

function Shows({ show, setShowdetail, setIsShowDetail }) {

  const handledetail = () => {
    setShowdetail(show)
    setIsShowDetail(true)
  }

  return (
    <div className='border d-flex  flex-column pb-3 shadow-sm p-md-3 mb-5 bg-body rounded' style={{ width: "250px" }}>
      <div className='w-100'>
        <img src={show.show.image?.medium} alt="" style={{ width: "100%" }} />
      </div>
      <div className='p-2'>
        <h3 >{show.show.name}</h3>
        <p className='fs-6'>{show.show.language}</p>
        <ul className='d-flex gap-3  align-items-center justify-content-start p-0 flex-wrap' style={{ listStyle: "none" }}>
          {show.show.genres.map(gener => <li className='border px-2 py-1 text-white bg-secondary rounded-pill fs-6' style={{ cursor: "default" }} key={gener}>{gener}</li>)}
        </ul>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <a className='border border-info text-white bg-info text-decoration-none text-uppercase px-3 py-2 rounded-pill ' href="#detail" onClick={handledetail}> show detail </a>
      </div>
    </div>
  )
}

export default Shows
