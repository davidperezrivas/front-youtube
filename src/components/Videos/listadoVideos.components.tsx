import React from 'react';
import { Videos } from './Interfaces/Videos.intertace';

interface Props {
    video: Videos;
}

const ListadoVideo = ({ video }: Props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={video.imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{video.titulo}</h5>
                <p className="card-text">{video.descripcion}</p>
            </div>
        </div>
    );
};

export default ListadoVideo;
