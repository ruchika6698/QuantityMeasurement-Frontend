import React from "react";

export class Volume extends React.Component {
    

render() {
    return (
    <div>
        <div className="data-list-input" style={{width: '190px'}}>
            <h3>From:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="1" />
            <select className="data-list-input" style={{width: '190px'}}>
            <option value="Liter">Liter</option>
             <option value="Mililiter">Mililiter</option>
             <option value="Gallon">Gallon</option>
            </select>
        
      </div>
      <div className="data-list-input" style={{width: '190px'}}>
             <h3>To:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="1000" />
            <select className="data-list-input" style={{width: '190px'}}>
            <option value="Mililiter">Mililiter</option>
             <option value="Liter">Liter</option>
            <option value="Gallon">Gallon</option>
            </select>
        
      </div>
    </div>
    )
}
}