import React from 'react';

const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl w-11/12 md:w-1/2 lg:w-1/3">
                <div className="p-4">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="text-red-500">&times;</button>
                    </div>
                    <div className="p-4">
                        <iframe
                            src="/cv.pdf"
                            title="CV"
                            className="w-full h-96"
                        ></iframe>
                    </div>
                    <div className="p-4 flex justify-end">
                        <a
                            href="/cv.pdf"
                            download
                            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
