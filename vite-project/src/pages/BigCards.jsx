import React from "react";
import "../App.css";

function BigCards({ title, article }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <h2 className="reset-margin">Max Verstappen is Too Good.</h2>
            </div>
            <div className="col-8">
              <p>
                Formula One driver Max Verstappen is having one of the most
                dominant seasons ever by any athlete in any sport. And it's
                boring. The Dutch driver has won 17 of the 20 races run so far
                this season, has clinched the championship, and will soon move
                into third place on F1's all-time-wins leader board. The records
                he has achieved on the way to a third title speak for
                themselves. Nineteen wins from 22 races, 21 podium places, a
                10-race consecutive win streak and becoming the first driver to
                lead for over 1,000 laps in a season. Yet they do not tell the
                whole story. In amassing them Verstappen demonstrated what a
                complete driver he is. The car was exceptional, but Verstappen
                has exploited it with consummate mastery and consistency. A
                glance at his teammate Sergio Pérez’s performance in the same
                machinery demonstrates how the 26-year old was operating on a
                different plane. There were superb drives, coming back from 15th
                to second in Saudi Arabia, from ninth to victory in Miami – a
                win that surely broke Pérez who had started from pole – from
                sixth in Spa and overcoming pressure and challenging conditions
                in a masterclass at Zandvoort. Verstappen’s dominance may have
                robbed the season of dramatic tension at the front but his
                performance cannot be faulted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCards;
