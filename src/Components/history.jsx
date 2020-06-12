import React from "react";  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import "../CSS/table.css";
import historyService from '../Services/unitServices'
let service = new historyService();

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      History: []
    }
  }
  //for fetching Employee list from database
 componentDidMount()
 {
   this.history();
 }
 history=() => {
    service.history().then((data)=>{
      console.log(" All historyfound ",data.data.data);
      this.setState({History:data.data.data});
      console.log("History Array",this.state.History);
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  //for delete Employee data from database by ID
  delete= (Id) =>{  
    console.log("Delete Id",Id);
    service.delete(Id).then((json) => {  
      console.log("responce data==>",json);
    if(json.data.success==='True'){  
      alert('Record deleted successfully!!');
    }  
    })  
  }  

  render() {
    return (
      <TableContainer component={Paper}> 
      <h2 align="center">History </h2>
        <Table stickyHeader aria-label="sticky table" id='History'>  
          <TableHead>  
            <TableRow>  
              <TableCell align="center" >Option Type</TableCell>  
              <TableCell align="center" >Value</TableCell>  
              <TableCell align="center" >Result</TableCell>  
              <TableCell align="center" >Date On Creation</TableCell>  
              <TableCell align="center" >Delete</TableCell>
            </TableRow>  
          </TableHead>  

          <TableBody>  
            {  
              this.state.History.map((d, index) => {  
                return <TableRow key={index}>  
                  <TableCell align="center">{d.optionType}</TableCell>  
                  <TableCell align="center">{d.value}</TableCell>  
                  <TableCell align="center">{d.result}</TableCell>  
                  <TableCell align="center">{d.dateOnCreation}</TableCell>   
                  <TableCell align="center"><button type="button" onClick={()=>this.delete(d.id)} className="btn btn-danger"> Delete </button></TableCell> 
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
    );
  }
}