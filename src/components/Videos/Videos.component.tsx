import { InputHTMLAttributes, useEffect, useState } from 'react';
import { Videos } from './Interfaces/Videos.intertace';
import * as videosService from './videos.service';
import ListadoVideo from './listadoVideos.components';

export default function VideosComponent() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [listarVideo, setVideos] = useState<Videos[]>([]);
    const [busqueda, setBusqueda] = useState('');

    const listadoVideos = async (e: any) => {
        e.preventDefault();
        let respuesta = await videosService.buscarVideo(busqueda);
        setVideos(respuesta.data);
    };

    const obtenerValorBusqueda = (e: any) => {
        setBusqueda(e.target.value);
    };

    return (
        <div className="row mx-auto">
            <div className="col-md-4 offset-md-4">
                <form className="form-inline" onSubmit={listadoVideos}>
                    <input
                        type="text"
                        name="busqueda"
                        placeholder="Ingrese nombre canción"
                        className="form-control"
                        onChange={obtenerValorBusqueda}
                    ></input>
                    <div className="col-md-4 ">
                        <button type="submit" className="btn btn-primary mb-2">
                            Buscar Cancion
                        </button>
                    </div>
                </form>
            </div>

            <hr />
            {listarVideo.map((video) => {
                return (
                    <div className="col-md-4">
                        <ListadoVideo video={video} />
                    </div>
                );
            })}
        </div>
    );
}
