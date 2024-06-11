import React from 'react'
import { Link } from 'react-router-dom'

const AddRoom = () => {
  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="d-flex justify-content-between add-new">
            <div className="position-relative">
              <i className="fab fa-sistrix"></i>
              <input type="search" placeholder="search" className="border-0 bg-light rounded-5 p-2 px-5" />
            </div>
            <Link to="/add-room-form" className="btn-add-room px-4 rounded-5 py-2">
              new room
            </Link>
          </div>

          <div className="mt-5">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr className="table-head fw-bold">
                    <th scope="col" className="fw-bold">Room Name</th>
                    <th scope="col" className="fw-bold text-center">Number of seats</th>
                    <th scope="col" className="fw-bold text-center">Amenities</th>
                    <th scope="col" className="fw-bold text-center">Place</th>
                    <th scope="col" className="fw-bold text-center">Plan</th>
                    <th scope="col" className="fw-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(6).fill().map((_, index) => (
                    <tr key={index}>
                      <th>Meeting Room</th>
                      <td className="text-center">30</td>
                      <td className="text-center">Wi-Fi</td>
                      <td className="text-center">Roxy</td>
                      <td className="text-center">60.0 EGP/ hour</td>
                      <td className="text-danger edit-btn text-center">Edit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRoom
