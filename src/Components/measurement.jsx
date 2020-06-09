import React from "react";
import {Link } from "react-router-dom";

export class MeasurementApp extends React.Component {
    

render() {
    return (
   <div>
        <div className="responsive">
          <div className="gallery">
              <Link to="/quantitymeasurement/length"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSgLzSiXpQdYWOOH1B8bMGxOtjTJpQnMeXZhQ3Yz69Dmw_IKM&usqp=CAU" alt="Length" width={600} height={400} /></Link>
            <div className="desc">Length</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
              <Link to="/quantitymeasurement/volume"><img src="https://img.grouponcdn.com/deal/2BAEEX5JVCrqnXbP8CB1PYw2kN6L/2B-1000x600/v1/sc600x600.jpg" alt="Volume" width={600} height={400} /></Link>
            <div className="desc">Volume</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
              <Link to="/quantitymeasurement/weight"><img src="https://sc02.alicdn.com/kf/HTB1zhZuJVXXXXafXVXXq6xXFXXXM.jpg" alt="Weight" width={600} height={400} /></Link>
            <div className="desc">Weight</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
              <Link to="/quantitymeasurement/temperature"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0qH6XSC85QdgWxLzamBsy4wFX5fnb3sbo8WkMuL9oAGaKQgQb&usqp=CAU" alt="Temerature" width={600} height={400} /></Link>
            <div className="desc">Temerature</div>
          </div>
        </div>
      </div>
    )
}
}