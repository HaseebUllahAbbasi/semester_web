
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const list = [1, 2, 3];


function App() {
  const [data,setData] = useState("")
  const [json,setJson] = useState();
  const [images,setImages] = useState([]);
  
  const search_gif = (event)=>
  {
    setData(event.target.value)

    
    // console.log(event.target.value);

  } 

   const add_gif = ()=>
  {

    fetch(`https://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaTOxFJmzC`).then(response => response.json()).then(json => setJson(json))
    console.log(data + " is searched" );
    
     
    if(json!=undefined)
    {
      const rand_index = Math.floor(Math.random() * json.data.length);
      console.log( json.data[rand_index].images.original.url);
      setImages(prevImages => {
        const newItem = {
          id: json.data[rand_index].id,
          src: json.data[rand_index].images.original.url
          
        }
        console.log(prevImages);
        return [...prevImages, newItem]
      })
    }
    
    //setCurrentItem('')
    //console.log(json);
  }
  return (
    <div className="App">
      <div className="container">
     
      <div className="form-inline  justify-content-center mb-4">

    <div>
    <input type="text" id="search" name="search"  onChange={search_gif} value={data} placeholder="Enter a search term" className="form-control mr-2"/>
    
    </div>
    <div className="text-center">
      {/* <input  className="btn btn-primary" onClick={search_gif} onSubmit={search_gif} value="Search Gif" /> */}
      <button  id="add_buttons" onClick={add_gif} className="btn btn-secondary">Search Gif</button>
      
      <button  id="remove_button" className="btn btn-danger ml-2">Remove Images</button>
    </div>
    <div className="row" id="images">
      {images.map( (source,key)  =>
      {

        console.log(source);
        //console.log(source.toString()+ " "+ key);
        return <div key={source.id}>
        <img src={source.src}></img>
        
      </div>
      } 
        
 )}
    </div>
    
  </div>


      </div>
       
     </div>
  );
}

export default App;
