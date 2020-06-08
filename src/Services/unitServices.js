import axios from 'axios';

 const apiUrl = 'https://localhost:44313/api/measurement';

class Service {

    //API calling for get all history 
    history() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }
    //API calling for delete data by ID
    delete(Id){
        console.log(" Id in axios service ",Id);
    return   axios.delete('https://localhost:44313/api/measurement/'+Id);
    }
}
export default Service;