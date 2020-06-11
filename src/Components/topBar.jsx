import React from "react";
import "../CSS/TopBar.css";
import Inactivescale from "../Assets/Inactivescale.svg";
import scale from "../Assets/scale.svg";
import Inactivehot from "../Assets/Inactivehot.svg";
import Inactivebeaker from "../Assets/Inactivebeaker.svg";
import {OptionType} from '../Components/optionType'
import {Link } from "react-router-dom";
import { History} from '../Components/history'

export class TopBar extends React.Component {
  constructor(props) {

        super(props);
        this.state = {
            unitType1: ['Length'],
            unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            unitType2: ['Temperature'],
            unit2: ['Celsius', 'Fahrenheit','Kelvin'],
            unitType3: ['Volume'],
            unit3: ['Liter', 'Gallon', 'Millilitre'],
            options:[]
        };
    }
    componentDidMount(){
      this.lengthOption();
    }
    lengthOption=()=>{
      console.log("Length option click");
       this.setState({options:this.state.unit1});
      console.log(this.state.options);

    }

    temperatureOption=()=>{
      console.log("Temperature option click",this.state);
      this.setState({options:this.state.unit2});
      console.log("temperature array",this.state.options);
    }
    volumeOption=()=>{
      console.log("Volume option click",this.state);
      this.setState({options:this.state.unit3});
      console.log(this.state.options);
    }

render() {
    return (
    <div class="main">
      <div class="topbar-container"> 
        <div class="quanment">Quanment</div>
        <div/> 
         <div class="history"><Link to={{pathname:'/quantitymeasurement/history'}}>History</Link></div>
      </div> 
      <div class="header-container">
         <span class="header-text" align="center">Welcome To Quantity Measurement</span>
      </div>
      <div class="header">
        <span class="header-span">CHOOSE TYPE</span>
      </div>
      <div class="home"> 

          <div class="length"><img src={Inactivescale} onClick={()=>this.lengthOption()} class="lengthimage" alt="Length"/>Length</div>
          <div class="temperature"><img src={Inactivehot} onClick={()=>this.temperatureOption()} class="tempimage" alt="Temperature"/>Temperature</div>
          <div class="volume"><img src={Inactivebeaker} onClick={()=>this.volumeOption()} class="volumeimage" alt="Volume"/>Volume</div>
          <OptionType Units={this.state.options}/>
          
      </div>
    </div>
    )
  }
}