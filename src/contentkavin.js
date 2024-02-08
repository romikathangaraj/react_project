import { Button, TextField, Typography } from "@mui/material"
import PublishIcon from '@mui/icons-material/Publish';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputAdornment from '@mui/material/InputAdornment';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Content=()=>{
    return(
        <>
           <div className="container-fluid ">
                <div className="row justify-content-center">
                    <div className="col-7 m-5 shadow-lg rounded-4 ">
                        <div className="row bg-body-secondary rounded-4" >
                            <Typography variant="h4" className="m-3" color="secondary" >
                                Participation in Taste
                            </Typography>
                        </div>
                        <div className="row ps-5">
                        <TextField
                        className="col-10 m-3"
                        name="name"
                        label="Name Of The Faculity Participated"
                        variant="outlined"        
                        InputProps={{
                            endAdornment: (
                              <InputAdornment >
                                <AccountCircle />
                              </InputAdornment>
                            )
                          }}    
                          helperText="Alphabetic Charecters Only"  
                        />
                        <TextField
                            className="col-10 m-3"
                            name="date"
                            label="Date"
                            variant="outlined"
                            focused      
                            type="date"
                            helperText="Date Of The Event"
                        />
                         <TextField
                            className="col-10 m-3"
                            name="topic"
                            label="Seminar topic"
                            InputProps={{
                                endAdornment:(
                                    <SchoolIcon/>
                                )
                            }}
                            variant="outlined"             
                        />
                        <TextField
                            className="col-10 m-3"
                            name="taste"
                            label="Taste Number"
                            variant="outlined"    
                            type="number"   
                            helperText="Numbers Only"            
                        /> 
                        <TextField
                            className="col-10 m-3"
                            name="person"
                            label="Resourse Person Name"
                            variant="outlined"    
                            InputProps={{
                                endAdornment:(
                                    <PersonPinIcon/>
                                )
                            }}               
                        />
                         <TextField
                            className="col-10 m-3"
                            name="outcome"
                            label="Outcome Of The Activity"
                            multiline
                            rows={4}
                            variant="outlined"
                            InputProps={{
                                endAdornment:(
                                    <MailOutlineIcon/>
                                )
                            }}                 
                        />
                        </div>
                        <div className="row justify-content-around ">
                            <Button variant="contained" className="col-2 mb-3" color="success" startIcon={<PublishIcon/>} >Submit</Button>
                            <Button variant="outlined" className="col-2 mb-3" color="error" startIcon={<DeleteForeverIcon/>}>Clear</Button>

                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Content