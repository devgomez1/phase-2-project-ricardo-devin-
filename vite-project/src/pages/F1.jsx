import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";
import CardComponent from "./CardComponent";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import BigCards from "./BigCards";

let uniqueId = 0;

function F1() {
  const [data, setData] = useState({});

  function getUniqueUrls(imageUrls) {
    return imageUrls.map((url) => `${url}?unique=${uniqueId++}`);
  }
  function getUniqueDescriptions(descriptions) {
    return descriptions.map((description) => description);
  }

  const imageUrls = getUniqueUrls([
    "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/11/28/ecb47780-69e2-42c3-bf66-d8a8fe8a22f2/f1_action_canadian_f1_grand_prix_2018",
    "https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2019/Monaco/Sunday/1017527538-LAT-20190526-SNE19209.jpg",
    "https://formularapida.net/wp-content/uploads/2020/09/M242096.jpg",
    "https://www.thedrive.com/content/2021/12/Lewis-Hamilton-Max-Verstappen-Abu-Dhabi-Grand-Prix-2021.jpg?quality=85",
    "https://www.goodwood.com/globalassets/.road--racing/race/modern/2022/3-march/f1-2022-calendar/2022-f1-calendar-drivers-championship-standings-zak-mauger-mi-21032022.jpg?crop=(0,135,2600,1598)&width=1600",
    "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F01%2F31162230%2Fabu-dhabi-2022-grid-planetf1.jpg",
  ]);

  const descriptions = getUniqueDescriptions([
    `In 2018, Lewis Hamilton secured his fifth World Championship in another Mercedes-dominated season, facing a strong challenge from Ferrari's Sebastian Vettel. The year was marked by strategic battles and Hamilton's consistent performance, with Red Bull also showing flashes of brilliance.`,
    `The 2019 season was again dominated by Lewis Hamilton, who clinched his sixth World Championship. Mercedes' superiority was evident, though Ferrari and Red Bull provided stiff competition at various stages. The season also saw the rise of young talents like Charles Leclerc and Max Verstappen.`,
    `The 2020 Formula 1 season, affected by the COVID-19 pandemic, was dominated by Lewis Hamilton, who equaled Michael Schumacher's record of seven World Championships. The season featured a revised calendar and saw Pierre Gasly's surprise win at Monza and the emergence of McLaren as a competitive force.`,
    `The 2021 season was one of the most dramatic, culminating in a controversial finale where Max Verstappen claimed his first World Championship, narrowly defeating Lewis Hamilton. The season was a close battle between Mercedes and Red Bull, featuring intense on-track rivalries and strategic duels.`,
    `In 2022, Max Verstappen continued his strong form, securing his second World Championship. Red Bull Racing showed dominance throughout the season, with Ferrari and Mercedes trailing but providing consistent challenges. The season was marked by technical regulation changes and competitive midfield battles.`,
    `The 2023 Formula 1 season, as of my last update, was underway with fierce competition. Early races indicated a tight contest between Red Bull, Ferrari, and Mercedes. New talents and seasoned veterans were battling closely, with the championship looking to be one of the most competitive in recent years.`,
  ]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/seasons.json?limit=6&offset=68").then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setData(data);
        })
    );
  }, []);

  function chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  return (
    <div>
      <Nav />
      <Carousel />
      {data.MRData &&
        chunkArray(data.MRData.SeasonTable.Seasons, 3).map(
          (seasonsChunk, chunkIndex) => (
            <div key={chunkIndex} className="row">
              {seasonsChunk.map((season, cardIndex) => {
                const index = chunkIndex * 3 + cardIndex;
                return (
                  <div className="col-sm-4">
                    <CardComponent
                      name={"Formula One"}
                      season={season}
                      key={season.season}
                      imageUrls={imageUrls[index]}
                      description={descriptions[index]}
                    />
                  </div>
                );
              })}
            </div>
          )
        )}

      <BigCards />
      <Footer />
    </div>
  );
}

export default F1;
