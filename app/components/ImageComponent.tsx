"use client";

import React, { useState } from "react";
import Image from 'next/image'; // Ensure this import is correct



export const ImageComponent = () => {

    const [popupVisible, setPopupVisible] = useState(false);
    const showPopup = (popupId: string) => {
        setPopupVisible(true);
    };
    const hidePopup = (popupId: string) => {
        setPopupVisible(false);
    };

    const chooseOption = (option: string) => {
        // Implement your chooseOption logic here
    };

    const handleFileUpload = () => {
        // Implement your handleFileUpload logic here
    };

    const customizeFrame = (frame: string) => {
        // Implement your customizeFrame logic here
    };

    const FrameSize = (size: string) => {
        // Implement your FrameSize logic here
    };

    const FrameEffect = (effect: string) => {
        // Implement your FrameEffect logic here
    };

    return (
        <>
            <div className="pageouter">
                <div className="upload-container">
                    <label className="upload-icon" onClick={() => showPopup('popup1')}>
                        <Image src="/img/plus.svg" alt="Upload Icon" width={32} height={32} />
                    </label>
                    <span>Start Creating</span>
                </div>

                {popupVisible && (
                    <div id="popup1" className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => hidePopup('popup1')}>&times;</span>
                            <h2>Select an Option</h2>
                            <ul>
                                <li><a href="#" onClick={() => chooseOption('Photo Wall')}>Photo Wall</a></li>
                                <li><a href="#" onClick={() => chooseOption('Collage')}>Collage</a></li>
                                <li><a href="#" onClick={() => chooseOption('Wall Sign')}>Wall Sign</a></li>
                            </ul>
                        </div>
                    </div>
                )}

                <div id="popup2" className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => hidePopup('popup2')}>&times;</span>
                        <h2>Select Photo Source</h2>
                        <ul>
                            <li>
                                <label className="upload-photo-label">
                                    Upload Photo
                                    <input id="file-upload" type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleFileUpload} />
                                </label>
                            </li>
                            <li><a href="#">Import from Facebook</a></li>
                            <li><a href="#">Import from Google Photos</a></li>
                        </ul>
                    </div>
                </div>

                <div id="frame-container" className="frame-container hidden">
                    <div className="frame">
                        <img id="uploaded-image" src="#" alt="Uploaded Image" />
                    </div>
                    <div className="d-flex">
                        <div className="frame-borders frame-options">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" style={{ width: '32px', height: '32px', color: 'rgb(43, 5, 20)' }}>
                                <path fill="currentColor" d="M25 7.5h.926A.926.926 0 0 0 25 6.574zm0 7v.926a.927.927 0 0 0 .926-.926zm-18-7v-.926a.926.926 0 0 0-.926.926zm0 7h-.926c0 .512.414.926.926.926zm.004 0h.926a.926.926 0 0 0-.926-.926zm0 11h-.927c0 .512.415.926.927.926zm7 0v.926a.926.926 0 0 0 .926-.926zm0-11v-.926a.927.927 0 0 0-.926.926zm10.07-7v7h1.852v-7zm-10.07.926H25V6.574H14.004zM7 8.426h7.004V6.574H7zm.926 6.074v-7H6.074v7zm-.922-.926H7v1.852h.004zM7.93 25.5v-11H6.077v11zm6.074-.926h-7v1.852h7zM13.078 14.5v11h1.852v-11zM25 13.574H14.004v1.852H25z"></path>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.853" d="M14 14.5 7.573 8.563"></path>
                            </svg>
                            <p>color</p>
                            <ul>
                                <li><button onClick={() => customizeFrame('frame1')}>Frame 1</button></li>
                                <li><button onClick={() => customizeFrame('frame2')}>Frame 2</button></li>
                                <li><button onClick={() => customizeFrame('frame3')}>Frame 3</button></li>
                            </ul>
                        </div>
                        <div className="frame-sizes frame-options">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="BulkCustomizationControlsstyles__SizeIcon-sc-1i87xv2-1 kWAogR">
                                <g stroke="#2B0514" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75">
                                    <path d="M19.498 1H1.5v18h17.998zM6.754 13.75l7.505-7.5"></path>
                                    <path d="M5.503 12.5V15h2.501M15.51 7.5V5h-2.502"></path>
                                </g>
                            </svg>
                            <p>size</p>
                            <ul>
                                <li><button onClick={() => FrameSize('size1')}>Size 1</button></li>
                                <li><button onClick={() => FrameSize('size2')}>Size 2</button></li>
                                <li><button onClick={() => FrameSize('size3')}>Size 3</button></li>
                            </ul>
                        </div>
                        <div className="frame-effects frame-options">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" style={{ width: '32px', height: '32px', color: 'rgb(43, 5, 20)' }}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M14.807 17.57c.46.27.819.705 1.015 1.23.893-.33 1.747-.773 2.544-1.32m-3.787-.02c.304-.97.713-1.898 1.218-2.765m2.568 2.786a12.5 12.5 0 0 0 3.578-3.786l2.91-4.735a1 1 0 0 0-.106-1.185.813.813 0 0 0-1.093-.116l-4.366 3.158a12.6 12.6 0 0 0-3.49 3.879M15.303 19.29a3.04 3.04 0 0 0-1.372-1.526 3.06 3.06 0 0 0-3.8.739 3.02 3.02 0 0 0-.695 1.927 2.27 2.27 0 0 1-.724 1.66A2.29 2.29 0 0 1 7 22.7a4.56 4.56 0 0 0 2.207 1.93c.929.385 1.96.453 2.931.194a4.57 4.57 0 0 0 2.444-1.623 4.53 4.53 0 0 0 .944-2.77 3 3 0 0 0-.223-1.14"></path>
                            </svg>
                            <p>effect</p>
                            <ul>
                                <li><button onClick={() => FrameEffect('effect1')}>Effect 1</button></li>
                                <li><button onClick={() => FrameEffect('effect2')}>Effect 2</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ImageComponent;