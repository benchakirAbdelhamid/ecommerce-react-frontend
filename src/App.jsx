import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// import { Typography } from "@material-tailwind/react";
// import { Progress } from "@material-tailwind/react";


// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Paper, { PaperProps } from '@mui/material/Paper';
// import Draggable from 'react-draggable';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './user/Signin';
import Signup from './user/Signup';


// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

const App = ()=> {

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
{/* 
    <br/>
    <br/>
    <br/>

<Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>



     <br/>
    <br/>
    <br/>
   <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Sara Lamalo
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Growth
        </Typography>
      </figcaption>
    </figure>
    <br/>
    <Box color="success" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    <br/>
    <br/>
    <div className="flex w-full flex-col gap-4">
      <Progress color="red" value={25} size="sm" label="Small" />
      <Progress value={50} size="md" label="Medium" />
      <Progress value={75} size="lg" label="Large" />
    </div> */}
    </>
  );
}

export default App;
