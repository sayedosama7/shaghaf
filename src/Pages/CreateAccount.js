import React from 'react'

const CreateAccount = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <form className='add-room-form'>
            <div className='row'>

              <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                <label htmlFor="">Full Name</label>
                <input type="text" name="" placeholder='sayed osama' />
              </div>

              <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                <label htmlFor="">Password</label>
                <input type="text" name="" placeholder='abc123' />
              </div>

              <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                <label htmlFor="">E-mail</label>
                <input type="text" name="" placeholder='sayedosama088@gmail.com' />
              </div>
            </div>
            <div className='add-room-form-btns'>
              <input className='btn-add-room px-5 rounded-5 py-2 mr-3' value='done' type='submit' />
              <input className='btn-add-room px-5 rounded-5 py-2 clear-all' value='clear all' type='submit' />
            </div>
          </form>


          <div className="mt-5">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr className="table-head fw-bold">
                    <th scope="col" className="fw-bold">Full Name</th>
                    <th scope="col" className="fw-bold text-center">Password</th>
                    <th scope="col" className="fw-bold text-center">Email</th>
                    <th scope="col" className="fw-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(6).fill().map((_, index) => (
                    <tr key={index}>
                      <th>sayed osama</th>
                      <td className="text-center">abd123</td>
                      <td className="text-center">sayedosama088@gmail.com</td>
                      <td className="text-center">
                        <i className='fas fa-pen-to-square main-color mr-2 fa-sm'></i>
                        <i className='fas fa-trash-can text-danger fa-sm'></i>
                      </td>
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

export default CreateAccount
