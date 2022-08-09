import { useState, useEffect, ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { formats } from "./edit-toolbar";
import { TextField, Box, Button, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { unknown, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StringLiteral } from 'typescript';

const newSectionSchema = object({
    sectionName: string().nonempty("title Required"),
    description: unknown(),
    descriptionHtml: unknown(),
});



type EditorType = TypeOf<typeof newSectionSchema>;

type EditorSectionType = {
    sectionName: string;
    description: string;
    descriptionHtml: string;
};


const EditorSection = () => {

    const [editorSection, setEditorSection] = useState<EditorSectionType>({ sectionName: '', description: "", descriptionHtml: '' })

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<EditorType>({
        resolver: zodResolver(newSectionSchema),
    });


    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
            if (editorSection.descriptionHtml.length > 3) {
                setFlag(false);
            } else {
                setFlag(true)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, editorSection, editorSection.descriptionHtml, editorSection.descriptionHtml.length]);



    const [flag, setFlag] = useState<boolean>(false);

    const onSubmitHandler: SubmitHandler<EditorType> = async (values) => {
        values.descriptionHtml = await editorSection.description;
        values.description = await editorSection.description.replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        console.log(values, `from OnSubmit xD`);


    };

    const HandleRichTextState = (value: any) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        setEditorSection({ ...editorSection, description: `${dataOnEdtior}`, descriptionHtml: `${dataWithHtmlTags}` });
        console.log(editorSection, `editorSection`);
    };




    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setEditorSection({ ...editorSection, [name]: value });
        console.log(editorSection, `editor section`);
    }


    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'direction': 'rtl' }],                         // text direction
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'align': [] }],

            ],
        },
        clipboard: { matchVisual: false }
    };


    return (
        <div className="form-group col-md-12 editor">
            {!flag ? (
                <Typography style={{ padding: "5px", color: 'darkred' }} >
                    Please enter content in order to save this note.
                </Typography>
            ) : null}
            <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmitHandler)}>

                <TextField
                    type='text'
                    label='Section Name'
                    sx={{ mt: 2, padding: '2px' }}
                    variant="filled"
                    id="outlined-size-small"
                    fullWidth
                    error={!!errors['sectionName']}
                    helperText={errors['sectionName'] ? errors['sectionName'].message : ''}
                    {...register('sectionName')}
                    required
                    onChange={(event) => handleChange(event)}
                    value={editorSection && editorSection.sectionName}
                />
                <EditorToolbar Inter={'t1'} />
                <ReactQuill
                    theme="snow"
                    defaultValue={editorSection && editorSection.descriptionHtml}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                    style={{ height: '200px', display: 'block', marginBottom: '40px' }}
                    onChange={HandleRichTextState}
                />
                {(editorSection && editorSection.description && editorSection.description.length > 3) ?
                    <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                color='info'
                                type='submit'
                                disabled={flag}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box> :
                    <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>

                            <Button
                                variant="contained"
                                color='info'
                                type='submit'
                                disabled={true}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>

                }
            </Box>

        </div >
    );
}







export default EditorSection