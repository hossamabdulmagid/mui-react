import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { formats } from "./edit-toolbar";
import { TextField, Box, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newSectionSchema = object({
    concept: string().nonempty("title Required"),
    content: string().nonempty('required')
});

type EditorType = TypeOf<typeof newSectionSchema>;






const EditorSection = () => {
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
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const [editorSection, setEditorSection] = useState<{ concept: string, content: string }>({ concept: '', content: "" })



    const onSubmitHandler: SubmitHandler<EditorType> = (values) => {
        console.log(values);
    };

    const HandleRichTextState = (value: any) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        // setInterests({ note: `${dataOnEdtior}`, html: dataWithHtmlTags });
        // console.log(interests, `interset`);
    };


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
            <Box>
                <TextField
                    type='text'
                    label='Section Name'
                    sx={{ mt: 2, padding: '2px' }}
                    variant="filled"
                    id="outlined-size-small"
                    fullWidth
                    error={!!errors['concept']}
                    helperText={errors['concept'] ? errors['concept'].message : ''}
                    {...register('concept')}
                     />
            </Box>
            <EditorToolbar Inter={'t1'} />
            <ReactQuill
                theme="snow"
                defaultValue={''}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                style={{ height: '200px', display: 'block', marginBottom: '40px' }}
                onChange={HandleRichTextState}
            />
            <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                <Button
                    variant="contained"
                    color='info'
                    type='submit'
                >
                    Save
                </Button>
            </Box>
        </div>
    );
}







export default EditorSection