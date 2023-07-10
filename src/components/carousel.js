import React from 'react'
import cropped from "../images/cropped.jpg";
import img from "../images/img.png";
import footer from "../images/footer.png";
export default function Carousel() {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={footer} alt="First slide"  style={{height:'40rem'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WHEEL OF CHANGE</h5></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={cropped} alt="Second slide" style={{height:'40rem'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WHEEL OF CHANGE</h5></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img} alt="Third slide" style={{height:'40rem'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WHEEL OF CHANGE</h5></div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  )
}
