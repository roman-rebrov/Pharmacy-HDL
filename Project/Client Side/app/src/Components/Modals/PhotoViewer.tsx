import React from 'react'
import '../../SASS/modal-photo.sass'

const PhotoViewer : React.FC<{img : string, event : ()=>void}> = ({img, event} ) => {      // : {img : string, event : () => void}
    const close = () => {
        event();
    }
    return ( 
        <div className='modal-photo-viewer-wrap'
        onClick={() => {
            close();
            }}
        >
            <div className="modal-window">
                <div className="close-modal"
                    onClick={() => {
                        close();
                    }}
                >&times;
                </div>
                <div className=""
                    onClick={(e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                            e.stopPropagation();
                    }}
                >
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PhotoViewer;
