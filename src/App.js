
import {Routes,Route} from "react-router-dom"
import Products from './Components/Product'
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
   <>
   <Routes>
   <Route path = "/" element = {<Products />} />
   <Route path = "*" element = {<ErrorPage />} />
   </Routes>
   </>
  );
}

export default App;