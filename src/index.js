import Home from './components/Home'
import './styles/global.scss'

const home = new Home();
const app = document.getElementById('home');

app.appendChild(home.render());