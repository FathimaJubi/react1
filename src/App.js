
import './App.css';
import Index from './components/home';
import Sign from './components/sign';
import Login from './components/login';
import Layout from './components/layout';
import Demo from './components/usestate';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Notfound from './components/notfound';
import Hello from './components/usestateobject';
import Sum from './components/useeffect';
import Form from './components/form';
import SignUp from './components/register';
import Joke from './components/fetch';
import Jokes from './components/fetch1';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path='signin' element={<Sign/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='demo' element={<Demo/>}/>
          <Route path='hello' element={<Hello/>}/>
          <Route path='sum' element={<Sum/>}/>
          <Route path='form'element={<Form/>}/>
          <Route path='register' element={<SignUp/>}/>
          <Route path='fetch' element={<Joke/>}/>
          <Route path='fetch1' element={<Jokes/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

      
      
    
    
      
  );
}

export default App;
