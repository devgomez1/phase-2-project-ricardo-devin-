import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";

function F1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/2008/drivers/alonso/results.json").then(
      (response) =>
        response.json().then((data) => {
          setData(data);
        })
    );
  }, []);

  return (
    <div>
      <Nav />
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          backgroundImage:
            "url('https://media.cnn.com/api/v1/images/stellar/prod/200708140500-fernando-alonso-celebrates.jpg?q=w_3000,h_2239,x_0,y_0,c_fill')",
          backgroundSize: "cover",
          backgroundPosition: "50% 35%",
        }}
      >
        <div class="container" style={{ color: "white" }}>
          <h1 class="display-4">Formula One</h1>
          <p class="lead">
            Formula One (more commonly known as Formula 1 or F1) is the highest
            class of international racing for open-wheel single-seater formula
            racing cars sanctioned by the Fédération Internationale de
            l'Automobile (FIA).
          </p>
        </div>
      </div>
      <div class="card-deck mb-4">
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHN89xu1PYuZrvFzYGWrdqiMcq_dbgcRD8g&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0V4a_d0hoxvgARn_rDCuoRMBC2wDhO5fCQ&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcAjI2k6n-PTuIDj9JwFyHglWieEpUjeY8w&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcAjI2k6n-PTuIDj9JwFyHglWieEpUjeY8w&usqp=CAU"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0V4a_d0hoxvgARn_rDCuoRMBC2wDhO5fCQ&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHN89xu1PYuZrvFzYGWrdqiMcq_dbgcRD8g&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default F1;