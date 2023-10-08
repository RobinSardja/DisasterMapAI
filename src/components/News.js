import { useState, useEffect } from 'react';
import Loader from './Loader';

function News(term1, term2, term3, term4) {
  console.log("Term 1: ",term1)
  console.log("Term 2: ",term2)
  console.log("Term 3: ",term3)
  console.log("Term 4: ",term4)
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState("");

  useEffect(() => {
    var terms = [term1, term2, term3];
    var qooby = "";
    for (var i = 0; i < terms.length; i++) {
      qooby += ('+' + terms[i])
    }
    qooby = qooby.replace(/\s/g,'');
    console.log(qooby);
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+qooby+"fq="+term4+'&api-key=qOCPbjhSJd0RMlEa9iYVtN026kGBfkOE');
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
      for (var i = 1; i < newsData.length-1 || i < 5; i++) {
        dataString += newsData[i].abstract
      }
      console.log("NEWS DATA:", dataString);
      setFullData(dataString);
    }
  }, [newsData]);

  return fullData;
}

export default News;
