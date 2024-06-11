import React, { useState } from 'react';

const Orders = () => {

  const FileUpload = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
      setFileName(event.target.files[0].name);
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <form className='add-room-form'>
              <div className='row'>

                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                  <label htmlFor="">Item Name</label>
                  <input type="text" name="" placeholder='Coffee' />
                </div>

                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                  <label htmlFor="">Price</label>
                  <input type="text" name="" placeholder='20 EGP' />
                </div>

                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                  <label htmlFor="">Type</label>
                  <input type="text" name="" placeholder='Hot Drinks' />
                </div>

                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box position-relative'>
                  <label htmlFor="file-input">Room Main Image</label>
                  <input
                    type="file"
                    id="file-input"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    className=''
                  />
                  <input
                    type="text"
                    name="upload"
                    placeholder='Event Main Image'
                    value={fileName}
                    readOnly
                    onClick={() => document.getElementById('file-input').click()}
                    style={{ cursor: 'pointer' }}
                  />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=' upload'
                    style={{ cursor: 'pointer', marginTop: '10px' }}>
                    <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M15 6L10 1M10 1L5 6M10 1V13" stroke="#20473E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
                      <th scope="col" className="fw-bold">Item Name</th>
                      <th scope="col" className="fw-bold text-center">Price</th>
                      <th scope="col" className="fw-bold text-center">Type</th>
                      <th scope="col" className="fw-bold text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(6).fill().map((_, index) => (
                      <tr key={index}>
                        <th>Coffee</th>
                        <td className="text-center">20 EGP</td>
                        <td className="text-center">Hot Drinks</td>
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
    );
  };

  return <FileUpload />;
};

export default Orders;
