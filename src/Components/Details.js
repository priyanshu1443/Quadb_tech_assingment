import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Details({ showdetail, setIsShowDetail }) {
  return (
    <div id='detail'>
      {
        showdetail ? (
          <div className=' w-100 d-flex flex-column gap-1 pb-3 border'>
            <button onClick={() => setIsShowDetail(false)} className='border-0 d-md-none bg-transparent outline-none p-2' style={{ width: "100px" }}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
            <img className='align-self-center' style={{ maxWidth: "300px" }} src={showdetail.show.image.original} alt="" />
            <h1 className='align-self-center'>{showdetail.show.name}</h1>
            <p className='px-3 ' style={{ letterSpacing: "1.5px" }} dangerouslySetInnerHTML={{ __html: showdetail.show.summary }} />
            <div className='d-flex px-2'>
              <p className='fw-bold fs-5'>Genres : </p>
              <ul className='d-flex align-items-center justify-content-start gap-2' style={{ listStyle: "none" }}>
                {showdetail.show.genres.map(gener => <li className='border px-2 py-1 text-white bg-secondary rounded-pill fs-6' style={{ cursor: "default" }} key={gener}>{gener}</li>)}
              </ul>
            </div>
            <div className={`d-flex px-2 ${showdetail.show.rating.average ? "d-block" : "d-none"} gap-5 align-items-center justify-content-start`} >
              <p className='fw-bold fs-5'>Rating : </p>
              <p style={{ fontSize: "16px", fontWeight: "500", letterSpacing: "2px" }} className='d-flex align-items-center'>
                {showdetail.show.rating.average}
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", padding: "5px" }} />
              </p>
            </div>
            <div className='px-2 d-flex align-items-center justify-content-between'>
              <a className='border px-3 py-2 rounded-pill border-primary text-primary text-decoration-none ' style={{ cursor: "pointer" }} target='_blank' rel="noreferrer" href={showdetail.show.officialSite} >Official website</a>
              <button className='px-3 py-2 border rounded-pill border-success bg-success text-white'>Book now</button>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default Details
