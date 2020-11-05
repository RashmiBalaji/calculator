import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

const socket = socketIOClient.connect(ENDPOINT);

export default socket;
