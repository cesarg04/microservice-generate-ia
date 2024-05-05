// Importa la clase Server
import SocketIo from 'socket.io';
import Server from './server';

class WebSocketServer extends Server {
    constructor() {
        super(); // Llama al constructor de la clase padre
    }

    // Método para obtener la conexión al servidor de WebSockets
    getWebSocketConnection(): SocketIo.Server {
        // Accede a la propiedad io de la clase base directamente
        return super.getIO();
    }
}

export default WebSocketServer;