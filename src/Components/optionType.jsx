import React from "react";
import "../CSS/optiontype.css";
import options from '../Services/unitServices'
let service = new options();


export class OptionType extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            selectedUnitType: '',
            inputValue: 0,
            outputValue: 0
        };
    }

    onChangeFirst=(e)=>{  
         console.log("First event Value",e);
        let value = e.target.value;
        console.log("Second Value",value);
        this.setState({ inputUnit: value}, ()=>this.optiontype())
        
    }
    onChangeSecond=(e)=>{
        console.log("Second event Value",e);
        let value = e.target.value;
        console.log("Second Value",value);
        this.setState({ outputUnit: value}, ()=>this.optiontype());
        
    }

    onChangeInput=(e)=>{
        this.setState({  inputValue: e.target.value }, ()=>this.optiontype());
        console.log("number value:", e.target.value);
        
    }
    optiontype(){
        
        let unitVal = `${String(this.state.inputUnit)}To${String(this.state.outputUnit)}`;
        console.log("i & o",unitVal);
        
        let inputValue={
            Value: this.state.inputValue,
            OptionType: unitVal
        }
        console.log("inputvalue",inputValue);
        service.optiontype(inputValue).then((data)=>{
            console.log("input data",data);
            if(this.state.numberValue !== 0 || this.state.numberValue !== null){
                this.setState({ outputValue: data.data.data.result });
                console.log("output data",this.state.outputValue);
            }
            }).catch((err)=>{
                console.log(err);
            })
        }
render() {
    console.log("Quantity",this.props.Units);
    let Quantity=this.props.Units;
    return (
    <div className='box'>
                <br/>
                <div className="form">FROM <br/>
                    <input className="input" type={"number"} value={this.state.inputValue} onChange={(event)=>this.onChangeInput(event)}></input>
                    <br/>
                    <select className="select" value={this.state.inputUnit} onChange={(element)=>this.onChangeFirst(element)}>
                        {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
                <div className="form"> &nbsp;&nbsp;&nbsp;TO <br/>
                    <input className="input1" type={"number"} value={this.state.outputValue} onChange={(event)=>this.onChangeInput(event)}></input><br/>
                    <select className="select1" value={this.state.outputUnit} onChange={(element)=>this.onChangeSecond(element)}>
                        {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
            </div>
    )
  }
}