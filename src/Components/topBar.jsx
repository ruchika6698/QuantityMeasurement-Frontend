import React from "react";
import "../CSS/TopBar.css";
import Inactivescale from "../Assets/Inactivescale.svg";
import scale from "../Assets/scale.svg";
import hot from "../Assets/hot.svg";
import beaker from "../Assets/beaker.svg";
import Inactivehot from "../Assets/Inactivehot.svg";
import Inactivebeaker from "../Assets/Inactivebeaker.svg";
import {OptionType} from '../Components/optionType'
import {Link } from "react-router-dom";

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
            options:[],
            openImg: false,
            imagetrue:true
        };
    }
    handleColorToggle = () => {
      console.log(" this is toggle",this.state.openImg);
      this.setState({ openImg: !this.state.openImg });
      console.log(this.state.openImg);
//this.props.handleToggle(!this.state.open)
}
    handleToggle=()=>{
         this.setState({ imagetrue: !this.state.imagetrue });
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
    closePopper() {
        this.setState({
            openImg: false
        })
        console.log(this.state.openImg);
    }

render() {
    return (
    <div class="main">
      <div class="topbar-container"> 
        <div class="quanment">Quanment</div>
        <div/> 
         <Link to={{pathname:"/quantitymeasurement/history"}}><div class="history">History</div></Link>
      </div> 
      <div class="header-container">
         <span class="header-text" align="center">Welcome To Quantity Measurement</span>
      </div>
      <div class="header">
        <span class="header-span">CHOOSE TYPE</span>
      </div>
      <div class="home"> 
      {
        this.state.openImg ? 
        <div class="length"  onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
                          onMouseLeave={this.handleColorToggle}
               
                // onMouseLeave={this.handleToggle}
                ><img src={scale}  class="lengthimage" alt="Length"/>Length</div>:
          <div class="image1" onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
          // onMouseOver={this.handleToggle}
                onMouseLeave={this.handleColorToggle}
          ><img src={Inactivescale} class="lengthimage" alt="Length"/>Length</div>
      }
      {
        this.state.openImg ? 
          <div class="temperature" onClick={()=>this.temperatureOption()}
            onMouseOver={this.handleColorToggle}
                onMouseLeave={this.handleColorToggle}
              ><img src={hot}  class="tempimage" alt="Temperature"/>Temperature</div>:
          <div class="image2" onClick={()=>this.temperatureOption()}
           onMouseOver={this.handleColorToggle}
          // onMouseOver={this.handleToggle}
                onMouseLeave={this.handleColorToggle}
            ><img src={Inactivehot}  class="tempimage" alt="Temperature"/>Temperature</div>
      }  
      {
        this.state.openImg ? 
        <div class="volume"  onClick={()=>this.volumeOption()}
           onMouseOver={this.handleColorToggle}
                          onMouseLeave={this.handleColorToggle}
               
                // onMouseLeave={this.handleToggle}
                ><img src={beaker}  class="volumeimage" alt="Volume"/>Volume</div>:
          <div class="image3" onClick={()=>this.volumeOption()}
           onMouseOver={this.handleColorToggle}
          // onMouseOver={this.handleToggle}
                onMouseLeave={this.handleColorToggle}
          ><img src={Inactivebeaker}  class="volumeimage" alt="Volume"/>Volume</div>
      }
          <OptionType Units={this.state.options}/>
          
      </div>
    </div>
    )
  }
}