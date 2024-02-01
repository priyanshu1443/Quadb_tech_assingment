import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Shows from './Components/Shows'
import Details from './Components/Details'


function App() {
  const [data, setData] = useState([])
  const [showdetail, setShowdetail] = useState({})
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    // console.log(window.location.href)
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const fetchData = async () => {
    const data = await axios.get(" https://api.tvmaze.com/search/shows?q=all")
    setData(data.data)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className=' container-xxl d-md-flex justify-content-center align-items-start gap-3 w-100 vh-100'>
        <section className={`section_one w-100 w-md-50 h-100 overflow-hidden overflow-y-scroll ${screenWidth <= 768 ? isShowDetail ? "d-none" : "d-block" :
          "d-block"}`}>
          <h2 className='p-4'>Available Shows</h2>
          <div className='d-flex flex-wrap gap-2 gap-sm-5 py-3 align-items-start justify-content-center'>
            {
              data.map(show =>
                show?.show?.image !== null
                  ? <div key={show.show.id}><Shows show={show} setShowdetail={setShowdetail} setIsShowDetail={setIsShowDetail} /></div>
                  : null)
            }
          </div>
        </section>
        <section className={`section_two w-100 w-md-50 h-100 overflow-hidden overflow-y-scroll ${isShowDetail ? "d-block" : "d-none"} d-md-block flex-grow-1`}>
          {
            Object.keys(showdetail).length >= 1
              ? < Details showdetail={showdetail} setIsShowDetail={setIsShowDetail} />
              : null
          }
        </section>
      </div>
    </>
  )
}

export default App
