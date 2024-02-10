import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import About from "./component/About"
import Van from "./component/Van"
import Login from "./component/Login"
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Host from "./component/Host"
import Dashboard from "./component/Dashboard"
import Vandetails from "./component/Vandetails"
import Income from "./component/Income"
import Vanme from './component/Vanme'
import Reviews from "./component/Reviews"
import VanmeDetails from "./component/VanmeDetails"
// import NotFound from "./component/Not-found"
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Van" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />

          <Route path="/host" element={<Host />} >
            <Route path="/host/dashboard" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/vanme" element={<Vanme />} />
            <Route path="/host/vanme/:id" element={<VanmeDetails />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>



      </Routes>
    </>
  )
}

export default App
