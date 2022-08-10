import { useState } from "react";
import {
    Button,
    IconButton,
    Tooltip,
    Theme,
    Typography,
    FormLabel,
    Avatar,
    Box,
    Grid
} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';

import { PhotoCamera } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: "none",
    },
    faceImage: {
        color: theme.palette.primary.light,
    },
}));

interface FormProps {
    saveFace: (fileName: string) => void; //(fileName:Blob) => Promise<void>, // callback taking a string and then dispatching a store actions
}

const FileUpload: React.FC = ({ }): JSX.Element => {

    const classes = useStyles();

    const [selectedFile, setSelectedFile] = useState<any>(null);

    const [disButton, setDisButton] = useState<boolean>(false);

    const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;

        setSelectedFile(fileList[0]);
        console.log(selectedFile, `selectedFile from onChange`)
        setDisButton(true);
        var reader = new FileReader();
        var url = reader.readAsDataURL(selectedFile);

        reader.onloadend = function (e) {
            // this.setState({
            //     imgSrc: [reader.result];
            // })
        }
    };

    // console.log(selectedFile, `selectedFile`);
    const handleSubmit = () => {
        console.log(selectedFile, `selectedFile from OnSubmit`)
        alert(`${selectedFile && selectedFile.name}`);
        <img src={selectedFile.name} />

    };
    let length = 21;

    const handleRemoveImage = () => {
        setSelectedFile('');
        setDisButton(false);

    };
    return (
        <>
            <Grid item xs={4} md={4} sx={{
                textAlign: 'left',

            }}>
                <input
                    accept="image/jpeg"
                    className={classes.input}
                    id="faceImage"
                    type="file"
                    onChange={(e) => handleCapture(e)}
                />
                <Tooltip title="Select Image" sx={{ textAlign: '' }}>
                    <label htmlFor="faceImage">
                        <IconButton
                            className={classes.faceImage}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera fontSize="large" />
                        </IconButton>
                    </label>
                </Tooltip>
                <FormLabel id="">
                    {
                        selectedFile ?
                            (<Typography component={'span'} color='success.main'>
                                {(selectedFile.name.length > length)
                                    ? (selectedFile.name.substring(0, length - 10))
                                    : (selectedFile.name)}
                            </Typography>) :
                            (<Typography
                                component={'span'}
                                color='error'
                                sx={{
                                    fontSize: "11px",
                                    marginTop: '8px',
                                    padding: '',
                                    fontWeight: 600
                                }}>
                                uploadImage. . .
                            </Typography>)
                    }
                </FormLabel>
            </Grid>
            <Grid item xs={4} md={4}>
                {!selectedFile ?
                    <Typography
                        component={'div'}
                        color='error'
                        sx={{
                            fontSize: "11px",
                            marginTop: '9px',
                            padding: '10px',
                            fontWeight: 600,
                            backgroundColor: 'rgba(0, 0, 0, 0.06);',
                            borderRadius: '10px'
                        }}>
                        Please confirm photo for your cv
                    </Typography> : null}


                {selectedFile &&
                    <>
                        <IconButton aria-label="Example" onClick={handleRemoveImage}>
                            <Avatar
                                alt={URL.createObjectURL(selectedFile).toString()}
                                src={URL.createObjectURL(selectedFile)}
                                sx={{ width: 66, height: 66 }}
                            />
                            <CloseIcon />
                        </IconButton>

                    </>
                }

            </Grid>
            <Grid item xs={4} md={4}>
                <Button
                    onClick={() => handleSubmit()}
                    color="primary"
                    variant="contained"
                    size="small"
                    style={{ padding: '1', float: 'right', marginTop: '13px' }}
                    disabled={!disButton}>
                    Upload
                </Button>
            </Grid>





        </>
    );
};

export default FileUpload;