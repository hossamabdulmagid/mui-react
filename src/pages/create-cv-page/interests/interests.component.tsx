import { useState, useRef, ChangeEvent, useEffect } from 'react';
import RichEditor from '../../../lib/editor';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import SingleRichEditor from '../../../lib/single-editor';

interface typeI {
    onChange: (params: string) => string;
}


const interestsInformationSchema = object({
    note: string()
        .nonempty('Interests Information is required'),
    html: string().nonempty('Interests Information is required')

});

type InterestesInfo = TypeOf<typeof interestsInformationSchema>;

const QualificationsInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<InterestesInfo>({
        resolver: zodResolver(interestsInformationSchema),
    });
    const [interests, setInterests] = useState<{ note: string, html: string }>({ note: "", html: "" });
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        if (interests.note.length > 3) {
            setFlag(false);

        } else {
            setFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, interests, interests.note, interests.note.length]);


    const onSubmitHandler: SubmitHandler<InterestesInfo> = (values) => {
        console.log(values);

        values.note = interests.note;


        values.html = interests.html;


        console.log(errors, `errors from on Submit`);


        console.log(interests)


    };

    // console.log(errors, `errors`);

    const [isdisabled, setIsDisabled] = useState<boolean>(false);



    const HandleRichTextState = (value: any) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        setInterests({ note: `${dataOnEdtior}`, html: dataWithHtmlTags });
        console.log(interests, `interset`);
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
                    Interests Information
                </Typography>
                {flag ? (
                    <Typography style={{ padding: "4px", color: 'darkred' }} >
                        Please enter content in order to save this note.
                    </Typography>
                ) : null}
                <SingleRichEditor onChange={HandleRichTextState} value={interests.note} />
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

export default QualificationsInformation;