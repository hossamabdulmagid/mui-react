import { useState } from "react";
import {
    Button,
    IconButton,
    Tooltip,
    Theme,
    Typography,
    FormLabel
} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

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
    };

    // console.log(selectedFile, `selectedFile`);
    const handleSubmit = () => {
        console.log(selectedFile, `selectedFile from OnSubmit`)
        alert(`${selectedFile && selectedFile.name}`);

    };
    let length = 21;


    return (
        <>
            <input
                accept="image/jpeg"
                className={classes.input}
                id="faceImage"
                type="file"
                onChange={(e) => handleCapture(e)}
            />
            <Tooltip title="Select Image" style={{ textAlign: 'left' }}>
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
                {selectedFile ?
                    <Typography component={'span'} color='success.main'>
                        {(selectedFile.name.length > length)
                            ? (selectedFile.name.substring(0, length - 3))
                            : (selectedFile.name)}
                    </Typography> :
                    <Typography component={'span'} color='error'> Select Image. . .</Typography>}
            </FormLabel>

            <Button
                onClick={() => handleSubmit()}
                color="primary"
                variant="contained"
                size="small"
                style={{ padding: '1', float: 'right', marginTop: '13px' }}
                disabled={!disButton}>
                Upload
            </Button>
        </>
    );
};

export default FileUpload;