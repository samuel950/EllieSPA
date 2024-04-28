import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function TrainingPopup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
      <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{
              color: "#00a650",
              backgroundColor: "white",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "white",
                textDecorationLine: "underline",
              },
            }}
          >
            New Training!
          </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          New Training!
        </DialogTitle>
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
        <DialogContent dividers>
          <Typography gutterBottom >
            We wanted to share some exciting news! We have recently completed
            training on retaining walls, paver patios, and flat stone work.
          </Typography>
          <Typography gutterBottom >
            As part of our commitment to staying updated on the latest techniques and technologies for sustainability,
            we are thrilled to bring this skillset to our potential clients.
          </Typography>
          <Typography gutterBottom >
            Please keep an eye out for updates to our site which will showcase our dedication to ongoing education!
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
    );
}