import { useState, useEffect } from 'react';
import Loader from './Loader';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var terms = ["wild", "fire"];
    var qooby = "";
    for (var i = 0; i < terms.length; i++) {
      qooby += ('+' + terms[i])
    }
    console.log(qooby);
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+qooby+'&api-key=qOCPbjhSJd0RMlEa9iYVtN026kGBfkOE');
        const data = await res.json();
        setNewsData(data.response.docs || []); // Ensure newsData is an array
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (newsData.length > 0) {
      var dataString = newsData[0].abstract;
      for (var i = 1; i < newsData.length-1 || i < 10; i++) {
          dataString += newsData[i].abstract
      }
      console.log("NEWS DATA:", dataString);
    }
  }, [newsData]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : newsData.length > 0 ? (
        <h1>{newsData[0].abstract}</h1>
      ) : (
        <p>No news data available.</p>
      )}
    </div>
  );
}

export default News;
