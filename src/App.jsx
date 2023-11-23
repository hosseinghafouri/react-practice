// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.jsx';
import Home from './pages/content/Home.jsx';
import Profile from './pages/content/Profile.jsx';
import About from './pages/content/About.jsx';
import Register from './pages/content/Register.jsx';
import Counter from './pages/content/Counter.jsx';
import Login from './pages/content/Login.jsx';
import Erorr from './pages/Erorr.jsx';
import Footer from './pages/Footer.jsx';
import { store } from './components/Store.jsx';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
export const profileContext = createContext();


function App() {
  const client = new QueryClient({defaultOptions :{
    queries :{refetchOnWindowFocus: false},
  }});
  const [username, setUsername] = useState("Hossein");
  return (
    <Provider store={store}>
    <profileContext.Provider value={{username, setUsername}}>
    <div className="App">
      <QueryClientProvider client={client}>
     <Router>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/profile/:name?/:id?' element={<Profile />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/register' element={<Register />}/>
        <Route  path='/counter' element={<Counter />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='*' element={<Erorr />}/>          
      </Routes>
      <Footer />
     </Router>
     </QueryClientProvider>
    </div>
    </profileContext.Provider>
    </Provider>
  );
}

export default App;
