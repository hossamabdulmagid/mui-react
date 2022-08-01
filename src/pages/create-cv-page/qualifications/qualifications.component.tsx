import { useState, useRef, ChangeEvent, useEffect } from 'react';
import RichEditor from '../../../lib/editor';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const qualificationsInformationSchema = object({
    qualificationsInformation: string()
        .nonempty('Qualifications Information is required'),

});

type QualificationsInfo = TypeOf<typeof qualificationsInformationSchema>;

const QualificationsInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<QualificationsInfo>({
        resolver: zodResolver(qualificationsInformationSchema),
    });
    const [qualifications, setQualifications] = useState<{ note: string, html: string }>({ note: "", html: "", });
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        if (qualifications.note.length > 3) {
            setFlag(false);

        } else {
            setFlag(true)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, qualifications, qualifications.note, qualifications.note.length]);

    const onSubmitHandler: SubmitHandler<QualificationsInfo> = (values) => {
        console.log(values);
    };

    console.log(errors);



    const HandleRichTextState = (updatedText: any) => {
        const dataWithHtmlTags = updatedText;
        const dataOnEdtior = updatedText
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        setQualifications({ note: `${dataOnEdtior}`, html: dataWithHtmlTags });
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
                    Qualifications Information
                </Typography>
                {flag ? (
                    <Typography style={{ padding: "4px", color: 'darkred' }} >
                        Please enter content in order to save this note.
                    </Typography>
                ) : null}
                <RichEditor onChange={HandleRichTextState} initVal={" "} />
                <Box sx={{ mt: 1, mb: 1, p: 1 }}>
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

export default QualificationsInformation;