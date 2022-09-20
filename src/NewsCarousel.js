import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsCarousel = () => {
  const [generalNews, setGeneralNews] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      const data = await axios.get(
        "https://CompatibleValuablePentagon.mantoshkichni.repl.co/general"
      );
      console.log(data.data.articles);
      setGeneralNews(data.data.articles);
    };

    fetchNews();
  }, []);
  return (
    <div className="carousel">
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        transitionTime="1500"
        interval="5000"
        showStatus=""
      >
        {generalNews?.map((item) => {
          return (
            <div className="carosel">
              <div>
                <img src={item.urlToImage}></img>
              </div>
              <div>
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
