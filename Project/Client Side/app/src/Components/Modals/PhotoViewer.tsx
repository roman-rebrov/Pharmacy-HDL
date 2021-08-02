import React from 'react'
import '../../SASS/modal-photo.sass'

interface IProps {
    img : string;
    event : ()=>void;
}

const PhotoViewer : React.FC<IProps> = ({img, event} ) => {   

    const close = () => {
        event();
    }

    return ( 
        <div className='modal-photo-viewer-wrap'
        onClick={() => {
            close();
            }}>

            <div className="modal-window">
                <div className="close-modal"
                    onClick={() => {
                        close();
                    }} >
                    &times;
                </div>
                <div className=""
                    onClick={(e : React.MouseEvent<HTMLDivElement>) => {
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
