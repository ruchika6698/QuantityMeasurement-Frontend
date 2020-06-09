import React from "react";

export class Weight extends React.Component {
    

render() {
    return (
    <div>
        <div className="data-list-input" style={{width: '190px'}}>
            <h3>From:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="1" />
            <select className="data-list-input" style={{width: '190px'}}>
            <option value="Kilogram">Kilogram</option>
             <option value="Gram">Gram</option>
             <option value="Tonne">Tonne</option>
            </select>
        
      </div>
      <div className="data-list-input" style={{width: '190px'}}>
             <h3>To:</h3>
            <input className="data-list-input" style={{width: '190px', padding: '4px 6px', borderWidth: '2px', margin: 0}} type="text" name="Length" required="required" defaultValue="1000" />
            <select className="data-list-input" style={{width: '190px'}}>
             <option value="Gram">Gram</option>
             <option value="Kilogram">Kilogram</option>
             <option value="Tonne">Tonne</option>
            </select>
        
      </div>
    </div>
    )
}
}