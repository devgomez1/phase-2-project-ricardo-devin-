function Carousel() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mb-5"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://motorsportmagazine.b-cdn.net/wp-content/uploads/2021/05/F1-car-cost-lead-McLaren-2021.jpg"
                alt="First slide"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeElfAh0w6ygTmWbvyNtfWP5_2COq4meqCizahnj-yOHrTZOjPk80pxQurw0eSj06yf0K9A81AuIKweU6g29_sjgdHb43R7B8n0G.jpg?r=c2c"
                alt="Second slide"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.freightwaves.com/wp-content/uploads/2022/03/F1-Red-Bull_6.jpg"
                alt="Third slide"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://media.cnn.com/api/v1/images/stellar/prod/200708140500-fernando-alonso-celebrates.jpg?q=w_3000,h_2239,x_0,y_0,c_fill"
                alt="Third slide"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default Carousel;
  