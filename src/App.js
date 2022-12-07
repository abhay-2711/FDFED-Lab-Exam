import HomePage from "./pages/home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div>
    <Router>
      {/* {<Registration />} */}
      <Routes>
        <Route exact path="/" 
        element={<HomePage />} />
        <Route 
          path='/home'
          element={<HomePage />} 
        />
        <Route 
          path='/login'
          element={<Registration />} 
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
