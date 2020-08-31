import React,{useState} from 'react';
import {TextField, Button, Typography} from '@material-ui/core/';
import './RatingIntake.css'


function RatingIntake(props) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState({
        "line_1": '',
        "line_2": '',
        "city": '',
        "region": '',
        "postal": '' 
    });

    function updateAddress(label, e) {
        e.persist();
        setAddress( (prevState) => {
            var copy = {...prevState};
            copy[label] = e.target.value;

            return copy;
            }
        )
        
    }


    return (<div className="intake-form">
        {/* <Typography variant="subtitle1" sytle={{margin: "10px"}}> Rating Information</Typography> */}
        <div className="names"> 
            <TextField label="First Name" style={{ marginRight: "10px", marginBottom: "10px", width: "290px" }} value={first_name} onChange={(e)=> {setFirstName(e.target.value)}} variant="filled" />
            <TextField label="Last Name" style={{ marginLeft: "10px", marginBottom: "10px", width: "290px" }} value={last_name} onChange={(e) => {setLastName(e.target.value)}} variant="filled" />
        </div>
        <div className="address">
            <div className="line1">
                <TextField label="Address" value={address.line_1} onChange={(e) => updateAddress("line_1", e)} variant="filled" fullWidth/>
            </div>
            <div className="line2"></div>    
                <TextField value={address.line_2} onChange={(e) => updateAddress("line_2", e)} variant="filled" fullWidth/>
            </div>
            <div className="line3">
                <TextField label="City" style={{ marginRight: "10px", marginTop:"10px", width:"230px"}} value={address.city} onChange={(e) => updateAddress("city", e)} variant="filled" />
                <TextField label="Region" style={{ margin: "0px 10px", marginTop:"10px", width: "100px" }} value={address.region} onChange={(e) => updateAddress("region", e)} variant="filled" />
                <TextField label="Postal Code" style={{ marginLeft: "10px", marginTop:"10px", width: "230px"  }} value={address.postal} onChange={(e) => updateAddress("postal", e)} variant="filled" />
            </div>
            <Button fullWidth color="primary" style={{ marginTop:"10px" }} onClick={() => props.onSubmit(first_name,last_name,address)} variant="contained">Submit</Button>
        </div>);
}

export default RatingIntake;