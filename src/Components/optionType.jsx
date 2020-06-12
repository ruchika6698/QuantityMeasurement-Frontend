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
        let value = e.target.value;
        this.setState({ inputUnit: value}, ()=>this.optiontype());
        
    }
    onChangeSecond=(e)=>{
        let value = e.target.value;
        this.setState({ outputUnit: value}, ()=>this.optiontype());
        
    }

    onChangeInput=(e)=>{
        this.setState({  inputValue: e.target.value }, ()=>this.optiontype());
    }
    optiontype(){
        
        let unitVal = `${String(this.state.inputUnit)}To${String(this.state.outputUnit)}`;
        
        let inputValue={
            Value: this.state.inputValue,
            OptionType: unitVal
        }
        service.optiontype(inputValue).then((data)=>{
            if(this.state.numberValue !== 0 || this.state.numberValue !== null){
                this.setState({ outputValue: data.data.data.result });
            }
            }).catch((err)=>{
                console.log(err);
            })
        }
render() {
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
                <div className="form"> TO <br/>
                    <input className="output" type={"number"} value={this.state.outputValue} onChange={(event)=>this.onChangeInput(event)}></input><br/>
                    <select className="outputselect" value={this.state.outputUnit} onChange={(element)=>this.onChangeSecond(element)}>
                        {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
            </div>
    )
  }
}