import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Disclaimer = (props) => {
    const { open, handleClose, handleTermsAgreement } = props;

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div id="alert-dialog-title" className='pt-4 pb-0'>
                    <h5 className="fw-bold text-center mb-0">Instructions For Submitting Application</h5>
                </div>
                <DialogContent className='pb-2'>
                    <div className="d-flex align-items-center row mx-1 text-dark " id="alert-dialog-description">
                        <ul className='mb-0'>
                            <li className='ms-2'> I/we hereby solemnly declare that all the particulars given above are correct.</li>
                            <li className='ms-2'> I/we will abide by all Bahria byelaws applicable to residents/vendors.</li>
                            <li className='ms-2'> I/we hereby solemnly agree that any unlawful act / deed by employee of my firm/ company shall be construed to have been done by me and will be responsible for any such act in court of law.</li>
                            <li className='ms-2'> Bahria Town reserves the right to cancel my registration without any prior intimation.</li>
                            <li className='ms-2'> I also confirm that in the event of any changes of status or changes in the elements of aforementioned information, details shall be provided as and when changes take place.</li>
                        </ul>
                    </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => handleClose(true)} autoFocus className='btn btn-outline-primary py-1 fw-medium'
                        sx={{ paddingX: '43px' }}>
                        I Agree
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default Disclaimer;
