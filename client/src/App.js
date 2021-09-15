
import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Homescreen from './screens/Homescreen';
import {BrowserRouter , Route , Link , Switch} from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Userslist from './screens/Userslist';
import Editpizza from './screens/Editpizza';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Route path="/" exact component={Homescreen}/>
      <Route path="/cart" exact component={Cartscreen}/>
      <Route path="/register" exact component={Registerscreen}/>
      <Route path="/login" exact component={Loginscreen}/>
      <Route path="/orders" exact component={Ordersscreen}/>
      <Route path="/admin" exact component={Adminscreen}/>
      <Route path="/admin/userslist" exact component={Userslist}/>
      <Route path="/admin/orderslist" exact component={Orderslist}/>
      <Route path="/admin/pizzaslist" exact component={Pizzaslist}/>
      <Route path="/admin/addpizza" exact component={Addpizza}/>
      <Route path="/admin/editpizza/:pizzaid" exact component={Editpizza}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
