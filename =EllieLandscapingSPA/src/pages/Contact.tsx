import { useState, type ReactElement, type ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import {styled} from '@mui/material/styles'


export default function Contact(): ReactElement {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const[errorMessage, setErrorMessage] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
      },
    }));

    const  handleSubmit = () => {
      const tname: string = name.trim()
      const tmessage = message.trim()
      const tphone = phone.trim()
      const temail = email.trim()
      console.log(tname.length)
      if (!name || tname.length === 0) {
        setErrorMessage('Please enter a name!')
        setOpen(true)
      } else if (!message || tmessage.length === 0) {
        setErrorMessage("Please enter a message!")
        setOpen(true)
      } else if ((!phone && !email) ||(tphone.length == 0 && temail.length == 0)){
        setErrorMessage('Please enter a phone number, email address, or both!')
        setOpen(true)
      }
      /* if we make it to here we can submit email */
    };
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '250px'}}>
              <BootstrapDialog 
                onClose={handleClose} 
                open={open}
                >
                  <DialogTitle sx={{m: 0, p: 2, minWidth: 200}}>Submission Error!</DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent>
                    <Typography gutterBottom>{errorMessage}</Typography>
                  </DialogContent>
              </BootstrapDialog>
                <Box component="form" sx={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <TextField 
                            id='name' 
                            label='Name' 
                            variant='outlined' 
                            color='primary' 
                            value={name}
                            onInput={ (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) }
                            sx={{
                                width: '50ch', 
                                input: {color: 'white'}, 
                                "& label": {
                                    color: 'white'
                                }, 
                                "& label.Mui-focused": {
                                    color: 'white'
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "white"
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "white",
                                      borderWidth: 2
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "white"
                                    }
                                  }
                            }}/>
                            <TextField 
                            id='phone' 
                            label='Phone Number' 
                            variant='outlined' 
                            color='primary'
                            value={phone}
                            onInput={ (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value) } 
                            sx={{
                                width: '50ch', 
                                marginTop: '25px',
                                input: {color: 'white'}, 
                                "& label": {
                                    color: 'white'
                                },
                                "& label.Mui-focused": {
                                    color: 'white'
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "white"
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "white",
                                      borderWidth: 2
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "white"
                                    }
                                  }
                            }}/>
                            <TextField 
                            id='email' 
                            label='Email Address' 
                            variant='outlined' 
                            color='primary'
                            value={email}
                            onInput={ (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) } 
                            sx={{
                                width: '50ch', 
                                marginTop: '25px',
                                input: {color: 'white'}, 
                                "& label": {
                                    color: 'white'
                                },
                                "& label.Mui-focused": {
                                    color: 'white'
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "white"
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "white",
                                      borderWidth: 2
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "white"
                                    }
                                  }
                            }}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField 
                            id='message' 
                            label='Message' 
                            variant='outlined' 
                            multiline
                            rows={8}
                            value={message}
                            onInput={ (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value) }
                            sx={{
                                width: '50ch', 
                                marginLeft:'35px', 
                                input: {color: 'white'},
                                "& .MuiOutlinedInput-input":{
                                    color: 'white'
                                }, 
                                "& label": {
                                    color: 'white'
                                },
                                "& label.Mui-focused": {
                                    color: 'white'
                                }, 
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "white"
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                    borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                    borderColor: "white",
                                    borderWidth: 2
                                    },
                                    "&.Mui-focused fieldset": {
                                    borderColor: "white"
                                    }
                                }
                            }}/>
                            
                        </div>
                    </div>
                    <Button 
                        variant='contained'
                        onClick={handleSubmit}
                        sx={{
                            color: '#00a650',
                            backgroundColor: 'white', 
                            width: 125, 
                            height: 40, 
                            marginLeft: '44%', 
                            marginTop:'25px', 
                            fontSize: '20px',
                            "&:hover": {
                                backgroundColor: 'white',
                                textDecorationLine: 'underline'
                            }
                        }}> 
                        Submit
                    </Button>
                    
                </Box>
            </div>
        </>
      
    );
  }