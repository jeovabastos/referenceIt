import { useState, useEffect } from 'react';
// import '../App.css';
import './Slider.css'
import { createClient } from 'pexels';
const apiKey = import.meta.env.VITE_API_KEY;
const client = createClient(apiKey);

function Slider() {
  const [query, setQuery] = useState("cosplay")
  const orientation = "portrait"

  const [photos, setPhotos] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const [start, setStart] = useState(false)
  const [nextPage, setNextPage] = useState(1)
  const page = nextPage

  const [endSession, setEndSession] = useState(false)

  const [secondsRemaining, setSecondsRemaining] = useState(0)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.photos.search({ query, orientation, page, per_page: 10 });
        if (response.photos.length > 0) {
          setPhotos(response.photos);
        } else {
          setError("No photos found.");
        }
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Failed to fetch photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  const nextImage = () => {
    if (photos.length > 0 && currentIndex < photos.length - 1) {
      console.log("currentIndex: ", currentIndex)

      setCurrentIndex((prevIndex) => (prevIndex + 1));
      setSecondsRemaining(60)
    }else{
      setStart(false)
      setCurrentIndex(0)
      setEndSession(true)
    }
    return
  };

  const prevImage = () => {
    if (photos.length > 0 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1));
    }
    return
  };

  function nextSession(){
    setCurrentIndex(0)
    setNextPage((currentlyPage)=> (currentlyPage + 1))

    setEndSession(false)
  }

useEffect(() => {
  let intervalId;
  
  if (start && !endSession && currentIndex < photos.length) {
    // Reseta os segundos restantes ao iniciar
    setSecondsRemaining(60);

    intervalId = setInterval(nextImage, 60000);

    // Intervalo para atualizar os segundos restantes
    const countdownId = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo de troca de imagem
      clearInterval(countdownId); // Limpa o intervalo de contagem regressiva
    };
  }

  return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar ou mudar as dependências
}, [start, currentIndex]);

  return (
    <>

      {/* SLIDER */}
      <div className='slider'>
        {/* LADO ESQUERDO */}
        
        <div className='slider__container left'>
          <p>Use dynamic sketching para masterizar o traço fluído em seu desenho com uma das categorias abaixo!</p>

          {/* CATEGORIAS */}
          <div className='slider__categorias'>
            <ul>
              <li>
                <button onClick={()=>{setQuery("man")}}>Figura Humana Masculina</button>
                <button onClick={()=>{setQuery("woman")}}>Figura Humana Feminina</button>
                <button onClick={()=>{setQuery("room")}}>Cenário interno</button>
                <button onClick={()=>{setQuery("landscape")}}>Cenário externo</button>
              </li>
            </ul>
          </div>
          
          {/* ESTADOS */}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {endSession && (<div>Fim da sessão! Gostaria de iniciar outra? Clique em NEXT SESSION abaixo :P</div>)}

          {/* action buttons */}
          <div className='actionButtons'>
            <button onClick={()=>{setStart(true)}}>START</button>
            <button onClick={()=>{setStart(false)}}>PAUSE</button>

            <button onClick={prevImage}>PREV IMAGE</button>
            <button onClick={nextImage}>NEXT IMAGE</button>
          </div>

          {/* informações */}
          <div className='sliderInfo'>
            <div>Page: {nextPage}</div>
            <div>CurrentIndex: {currentIndex}</div>
            {!endSession && <div>Segundos restantes: {secondsRemaining}</div>}
          </div>

          {endSession && (<button onClick={nextSession}>NEXT SESSION</button>)}
        </div>

        {/* LADO DIREITO */}
        <div className='slider__container'>
          {photos.length > 0 && endSession === false && (
            <img src={photos[currentIndex].src.large2x} alt="Fetched from Pexels" className='slider__img'/>
          )}
        </div>
      </div>
    </>
  );
}

export default Slider;
