import { useState } from "react";
import {
    Button,
    IconButton,
    Tooltip,
    makeStyles,
    Theme,
    Box,
    Grid,
    FormLabel
} from "@material-ui/core";
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

const FileUpload: React.FC<FormProps> = ({ saveFace }) => {

    const classes = useStyles();

    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [disButton, setDisButton] = useState<boolean>(false);
    const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;

        setSelectedFile(fileList[0]);
        setDisButton(true);
    };

    console.log(selectedFile, `selectedFile`);
    const handleSubmit = () => {

        alert(`${selectedFile && selectedFile.name}`);

    };

    return (
        <>

            <Box sx={{ textAlign: '' }}>
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
                <FormLabel id="">{selectedFile ? <span style={{ color: 'green' }}>{selectedFile.name}</span> : <span style={{ color: 'darkred' }}> Select Image</span>}</FormLabel>. . .
                <Button
                    onClick={() => handleSubmit()}
                    color="primary"
                    variant="contained"
                    size="small"
                    style={{ padding: '1', float: 'right', marginTop: '13px' }}
                    disabled={!disButton}>
                    Upload
                </Button>
            </Box>






        </>
    );
};

export default FileUpload;