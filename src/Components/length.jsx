import React from "react";

export class Length extends React.Component {
    
render() {
    return (
    <div>
        <div className="data-list-input" style={{width: '190px'}}>
            <h3>From:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="1" />
            <select className="data-list-input" style={{width: '190px'}}>
            
             <option value="Feet">Feet</option>
             <option value="Inch">Inch</option>
             <option value="Centimeter">Centimeter</option>
             <option value="Yard">Yard</option>
            </select>
        
      </div>
      <div className="data-list-input" style={{width: '190px'}}>
            <h3>To:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="12" />
            <select className="data-list-input" style={{width: '190px'}}>
            <option value="Inch">Inch</option>
            <option value="Feet">Feet</option>
            <option value="Centimeter">Centimeter</option>
            <option value="Yard">Yard</option>
            </select>
        
      </div>
    </div>
    )
  }
}