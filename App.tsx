import './globals.css';
import {Routes, Route} from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import {Home} from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
const App = () => {
return(
   <main className= 'flex h-screen'>
    <Routes>
        {/* public routes */}
        <Route element={AuthLayout}/>
        <Route path='/sign-in' element = {<SigninForm/>} />
        <Route path='/sign-in' element = {<SignupForm/>} />

         {/* private routes */}
        <Route index element {<Home/>} />
    </Routes>
   </main>
)
}

export default App