import React, { useState } from 'react';

const AddEvents = () => {

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
                                    <label htmlFor="">Event Name</label>
                                    <input type="text" name="" placeholder='Ceramics workshop' />
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                                    <label htmlFor="">Date</label>
                                    <input type="text" name="" placeholder='19/5/2024' />
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                                    <label htmlFor="">Time</label>
                                    <input type="text" name="" placeholder='02:00 pm' />
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box'>
                                    <label htmlFor="">Price</label>
                                    <input type="text" name="" placeholder='120 EGP' />
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box position-relative'>
                                    <label htmlFor="">Place</label>
                                    <input type="text" name="" placeholder='Roxy' />
                                    <i className='fas fa-plus add-icon'></i>
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box position-relative'>
                                    <label htmlFor="file-input">Event Main Image</label>
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
                                        placeholder='upload'
                                        value={fileName}
                                        readOnly
                                        onClick={() => document.getElementById('file-input').click()}
                                        style={{ cursor: 'pointer' }}
                                    />

                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=' upload'
                                        style={{ cursor: 'pointer', marginTop: '10px' }}>
                                        <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M15 6L10 1M10 1L5 6M10 1V13" stroke="#20473E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box position-relative'>
                                    <label htmlFor="file-input">Events Details</label>
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
                                        placeholder='Add details'
                                        value={fileName}
                                        readOnly
                                        onClick={() => document.getElementById('file-input').click()}
                                        style={{ cursor: 'pointer' }}
                                    />

                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=' upload'
                                        style={{ cursor: 'pointer', marginTop: '10px' }}>
                                        <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M15 6L10 1M10 1L5 6M10 1V13" stroke="#20473E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='d-flex flex-column col-md-12 col-lg-4 mb-5 form-box position-relative'>
                                    <label htmlFor="file-input">Upload Image</label>
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
                                        placeholder='upload image'
                                        value={fileName}
                                        readOnly
                                        onClick={() => document.getElementById('file-input').click()}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='upload'
                                        style={{ cursor: 'pointer', marginTop: '10px' }}>
                                        <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M15 6L10 1M10 1L5 6M10 1V13" stroke="#20473E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </div>
                            <div className='add-room-form-btns'>
                                <input className='btn-add-room px-5 rounded-5 py-2 mr-3' value='done' type='submit' />
                                <input className='btn-add-room px-5 rounded-5 py-2 clear-all' value='clear all' type='submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return <FileUpload />;
}

export default AddEvents;
