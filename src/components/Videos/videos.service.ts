import axios from 'axios';

export const buscarVideo = async (busqueda: string) => {
    try {
        let cancion = {
            busqueda: busqueda,
        };
        return axios.post('http://localhost:3001/videos', cancion);
    } catch (error) {
        console.log(error);
        return { data: 'hola' };
    }
};
