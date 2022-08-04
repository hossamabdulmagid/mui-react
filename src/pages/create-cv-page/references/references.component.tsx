import { useState, useRef, ChangeEvent, useEffect } from 'react';
import RichEditor from '../../../lib/editor';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const refInformationSchema = object({
    note: string()
        .nonempty('Interests Information is required'),
    html: string().nonempty('Interests Information is required')

});

type RefInfo = TypeOf<typeof refInformationSchema>;

const ReferencesInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<RefInfo>({
        resolver: zodResolver(refInformationSchema),
    });
    const [references, setReferences] = useState<{ note: string, html: string }>({ note: "", html: "" });
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        if (references.note.length > 3) {
            console.log('(if)from useEffect');
            setFlag(false);

        } else {
            console.log('(else)')
            setFlag(true)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, references, references.note, references.note.length]);


    const onSubmitHandler: SubmitHandler<RefInfo> = (values) => {
        console.log(values);
        values.note = references.note;
        values.html = references.html;

    };

    // console.log(errors, `errors`);

    const HandleRichTextState = (value: any) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        setReferences({ note: `${dataOnEdtior}`, html: `${dataWithHtmlTags}` });
        console.log(references, `references`);
    };




    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'snow',
                    marginTop: '5px',
                    minHeight: '300px',
                    boxShadow: 15,
                    padding: '15px',
                }}
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmitHandler)}>
                <Typography sx={{ fontWeight: 'bold', padding: '2px' }}>
                    References Information
                </Typography>
                {flag ? (
                    <Typography style={{ padding: "4px", color: 'darkred' }} >
                        Please enter content in order to save this Section.
                    </Typography>
                ) : null}
                <RichEditor onChange={HandleRichTextState} value={references.note} />
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
            </Box>
        </>
    )
}

export default ReferencesInformation;