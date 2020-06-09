import React from "react";

export class Temperature extends React.Component {
    

render() {
    return (
    <div>
        <div className="data-list-input" style={{width: '190px'}}>
            <h3>From:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="0" />
            <select className="data-list-input" style={{width: '190px'}}>
            <option value="Celcius">Celcius</option>
             <option value="Fahrenheit">Fahrenheit</option>
             <option value="Kelvin">Kelvin</option>
            </select>
        
      </div>
      <div className="data-list-input" style={{width: '190px'}}>
             <h3>To:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="32" />
            <select className="data-list-input" style={{width: '190px'}}>
             <option value="Fahrenheit:">Fahrenheit</option>
             <option value="Celcius">Celcius</option>
              <option value="Kelvin">Kelvin</option>
            </select>
        
      </div>
    </div>
    )
}
}