import apisauce from 'apisauce'

const SERVER_PORT = 1337;
const baseURL = "http://0.0.0.0:" + SERVER_PORT;
const api = apisauce.create({ baseURL });

const Api = {};

Api.getLocationData = (location) => (new Promise((res, rej) => res({uv: 3, air: 7})))//api.post('/location', {location});

export default Api;
