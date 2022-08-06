
import { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';


function App() {
  const [news, setNews] = useState([]);
  const [queryTitle, setQueryTitle] = useState("");
  const [queryDesc, setQueryDesc] = useState("");

  const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-07-05&sortBy=publishedAt&apiKey=78ca30e422d14ca8a7b08b356749a8e3";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.articles))
  }, [])

  function handleTittleSearch(e){
    const data=e.target.value
    setQueryTitle(data);
    setQueryDesc(data);

  }

  return (
    <div className='container'>
      <div className='input-group m-4 justify-content-center'>
        <input className='from-control w-75' onKeyUp={handleTittleSearch}></input>
        <button className='btn btn-warning' >
        <span className='bi bi-search'></span>
        </button>
        
      </div>
      <hr/>

      <div className="d-flex flex-wrap justify-content-around">

        {
          news.filter((items)=>(items.title.toLowerCase().includes(queryTitle))).map((item, i) => (
            <div key={i}>
              <CardComponent urlToImage={item.urlToImage} title={item.title} desc={item.description} />
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
