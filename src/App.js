import axios from 'axios'
import './App.css';
import { useState,useEffect} from 'react'
import ImgPage from './components/ImgPage';
import Spinner from 'react-bootstrap/Spinner'



function App() {

  const [data, setData] =useState ([])

  const [isLoading, setIsLoading] = useState(false)

  

  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=ZJARJISmPZemXKLsDDf5PZiGUlEsVj6BvLVPJGNg'
 
 

     useEffect(()=> {
         axios.get(url).then((response)=>{
          setData(response.data.photos)

          })
            setIsLoading (true)
     }, [url])   


     
  
 
    return (
      <div className="App">


         <div className='project__header'>
            <h1 className='header'> Spacestagram </h1>
                  
            <h2 className='sub__head'> Front End Developer Inten Challenge- Summer 2022.</h2>
        
          </div>

        <div className='wrapper'>
  
          {isLoading ? data.map(e=> <ImgPage key={e.id} data ={e} />) : <Spinner animation="border" />}


        </div>

       
       

     

      </div>
     
    )
      
  }

  export default App;
