import React, {useState, useEffect} from 'react';
import Cards from './components/cards';
import Nav from './components/nav';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }

  useEffect(()=>{
    getUsers();
  }, []);

  return(
    <div className=' bg-[url("https://transparenttextures.com/patterns/crissxcross.png")] h-screen'>
      <Nav />
      <div className='grid grid-cols-3 mt-10 '>
        {
          users.map((currElem) => {
            return <Cards name={currElem.login} img={currElem.avatar_url} followers={currElem.followers_url} />
          }) 
        }
      </div>
    </div>
  );
}

export default App;
