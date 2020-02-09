import React from 'react';

import { Paper, TextField, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Slide, DialogActions, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ValidationForm from './../../utils/ValidationForms';
import ValidateInputs from './../../utils/ValidateInputs';
import SendIcon from '@material-ui/icons/Send';

import './Contacto.scss';

const infoInitial = {
    name: '',
    surname: '',
    mail: '',
    subject: '',
    message: ''
  };

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Contact(props) {

    const { handleSubmit, handleChange, handleBlur, info, errors, isSubmitting, isError, isLoading } = ValidationForm(infoInitial,ValidateInputs);
    const classes = useStyles();
    const load = true;
    return (
        <div className="Contacto">
            <h1>Contacto</h1>
            {isSubmitting && !isError && !isLoading? <ThankYou /> : null}
            {isLoading? <div className={classes.root}>
                <LinearProgress color="secondary"/>
            </div> : null }
            <Paper className="paper">
                <form onSubmit={handleSubmit}>
                    <div className="paper__elements">
                        {/* fila 1 */}
                        <div className="inputs__user">
                            <div className="input__contact">
                                <TextField
                                    name="name"
                                    error={errors.name}
                                    required
                                    label="Name"
                                    placeholder="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={info.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="input__contact">
                                <TextField
                                    name="surname"
                                    label="Surname"
                                    placeholder="Surname"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    value={info.surname}
                                />
                            </div>
                        </div>
                        <div className="input__contact">
                            <TextField
                                name="mail"
                                error={errors.mail}
                                required
                                label="Mail"
                                placeholder="Mail"
                                type="email"
                                variant="outlined"
                                fullWidth
                                value={info.mail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="input__contact">
                            <TextField
                                name="subject"
                                error={errors.subject}
                                required
                                label="Title"
                                placeholder="Title"
                                variant="outlined"
                                fullWidth
                                value={info.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="input__contact">
                            <TextField
                                name="message"
                                error={errors.message}
                                required
                                multiline
                                rows="4"
                                label="Message"
                                placeholder="Message"
                                variant="outlined"
                                fullWidth
                                value={info.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="input__contact">
                            <div className="flex__end">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<SendIcon />}
                                    type="submit"
                                    className="width-button"
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

function ThankYou () {

    const isError = false;
    const [open, setOpen] = React.useState(true);

    const titulo = isError? 'Oops!': 'Thank you';
    const body = isError? 'Something was wrong! Try it again.': 'I will respond as soon as possible';

    const handleClick = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Slide}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{titulo}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Contact;