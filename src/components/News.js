import { useState, useEffect } from 'react';
import Loader from './Loader';

function News(term1, term2, term3, term4) {
  console.log(term1)
  console.log(term2)
  console.log(term3)
  console.log(term4)
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState("");

  useEffect(() => {
    var terms = [term1, term2, term3, term4];
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
        setNewsData(data.response.docs || []);
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
      console.log(term1)
      console.log(term2)
      console.log(term3)
      console.log("NEWS DATA:", dataString);
      setFullData(dataString);
    }
  }, [newsData]);

  return fullData;
}

export default News;
