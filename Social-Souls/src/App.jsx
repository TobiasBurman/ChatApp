import Landing from './Landing.jsx'
import axios from "axios";


export default function App(){
    axios.defaults.baseURL = "http://localhost:4040";
    axios.defaults.withCredentials = true;
    return <Landing />;
}

