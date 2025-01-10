import { useState, useEffect } from 'react';
import './App.css';
import { createClient } from 'pexels';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY; // Use correct environment variable
  const client = createClient(apiKey);
  const query = "face";
  const orientation = "portrait"
  
  const [photos, setPhotos] = useState([]); // Array to store fetched photos
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently displayed photo
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors
  
  const [start, setStart] = useState(false)
  const [nextPage, setNextPage] = useState(1)
  const page = nextPage

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.photos.search({ query, orientation, page, per_page: 10 });
        if (response.photos.length > 0) {
          setPhotos(response.photos); // Store all fetched photos
          //setCurrentIndex(0); // Reset index to 0 for the first photo

        } else {
          setError("No photos found.");
        }
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Failed to fetch photos.");
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchPhotos();
  }, [client, query]);

  const nextImage = () => {
    if (photos.length > 0 && currentIndex < photos.length - 1) {
      console.log(photos.length)
      console.log(currentIndex)
      console.log(photos[currentIndex].src.medium)

      setCurrentIndex((prevIndex) => (prevIndex + 1));
    }else{
      setCurrentIndex(0)
    }
    return
  };

  const prevImage = () => {
    if (photos.length > 0 && currentIndex >= 1) {
      console.log(photos.length)
      console.log(currentIndex)
      console.log(photos[currentIndex].src.medium)

      setCurrentIndex((prevIndex) => (prevIndex - 1));
    }else{
      setCurrentIndex(photos.length-1)
    }
    return
  };  

  function useNextPage(){
    setNextPage((currentlyPage)=> (currentlyPage + 1))
  }

  function usePrevPage(){
    if(nextPage > 1){
      setNextPage((currentlyPage)=> (currentlyPage - 1))
    }
    return
  }

  useEffect(() => {
    if(start === true){
      const intervalId = setInterval(nextImage, 5000); // Change image every 30 seconds
      console.log("next image")
  
      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
    return
  }, [start]); // Dependency array includes photos to reset interval when photos change


  return (
    <>
      <h1>ReferenceIT</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {photos.length > 0 && (
        <img src={photos[currentIndex].src.medium} alt="Fetched from Pexels" />
      )}

      <button onClick={()=>{setStart(true)}}>START</button>
      <button onClick={()=>{setStart(false)}}>PAUSE</button>
      
      <button onClick={prevImage}>PREV IMAGE</button>
      <button onClick={nextImage}>NEXT IMAGE</button>

      <button onClick={usePrevPage}>PREV PAGE</button>
      <button onClick={useNextPage}>NEXT PAGE</button>
    </>
  );
}

export default App;
