import React from 'react'

const PlaceholderCard = () => {
  return (
    <div className='row g-3'>
        {Array(8).fill(0).map((_, index)=>{
           return <div key={index} className='col-md-6 col-lg-3'>
                <div className="card" aria-hidden="true">
                  <div className='placeholder-card-img d-flex align-items-center justify-content-center card-image-top bg-light'>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6 "></a>
                    <a href="#" tabIndex="-1" className="btn btn-success disabled placeholder col-6 "></a>
                  </div>
                </div>
            </div>
        })}
    </div>
  )
}
export default PlaceholderCard