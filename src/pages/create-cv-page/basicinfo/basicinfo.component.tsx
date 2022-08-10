import { Box, TextField, Container, Grid, Typography, Stack, Button, FilledInput } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { RootState } from '../../../redux/root-reducer';
import { actionCreators } from '../../../redux/index';
import InputForm from "../../../lib/TextFeild.component";

import { DoLogin } from '../../../redux/user/user-action';
import FileUpload from "../../../lib/upload";

const basicInformationSchema = object({
    fullName: string()
        .nonempty('Full Name is required'),
    email: string().nonempty('Email is required').email('Email is invalid'),
    phone: string()
        .nonempty('Phone is required')
        .min(8, 'Phone must be more than 8 characters')
        .max(32, 'Phone must be less than 32 characters'),
    addressLine1: string().nonempty('Please confirm your password'),
    addressLine2: string(),
    addressLine3: string(),
    website: string(),
});

type BasicInfo = TypeOf<typeof basicInformationSchema>;

type basicInformationSection = {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    website: string;
};

const BasicInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<BasicInfo>({
        resolver: zodResolver(basicInformationSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<BasicInfo> = (values) => {
        console.log(values);
    };

    // console.log(errors);


    const state = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const { DoLogin } = bindActionCreators(actionCreators, dispatch)


    useEffect(() => {
        DoLogin()
        console.log(state, `state from basic informations`);
    }, []);



    const [basicInformation, setBasicInformation] = useState<basicInformationSection>({
        fullName: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        website: ''
    });

    const HandleChangeBasicInformation = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBasicInformation({ ...basicInformation, [name]: value })
        console.log(basicInformation, `basicInformation while typing`);
    }
    return (
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
            <Typography sx={{ fontWeight: 'bold', padding: '2px' }} component={'div'} >
                Basic Information
            </Typography>

            <>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>
                            <InputForm
                                type='text'
                                register={register('fullName')}
                                label='Full Name'
                                error={!!errors['fullName']}
                                helperText={errors['fullName'] ? errors['fullName'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.fullName}
                            />

                            <InputForm
                                type='text'
                                register={register('phone')}
                                label='Phone numbers'
                                error={!!errors['phone']}
                                helperText={errors['phone'] ? errors['phone'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.phone}
                            />

                            <InputForm
                                type='text'
                                register={register('addressLine1')}
                                label='Address Line 1'
                                error={!!errors['addressLine1']}
                                helperText={errors['addressLine1'] ? errors['addressLine1'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.addressLine1}
                            />

                            <InputForm
                                type='text'
                                register={register('addressLine3')}
                                label='Address Line 3'
                                error={!!errors['addressLine3']}
                                helperText={errors['addressLine3'] ? errors['addressLine3'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.addressLine3}
                            />

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>
                            <InputForm
                                type='text'
                                register={register('email')}
                                label='E-mail address'
                                error={!!errors['email']}
                                helperText={errors['email'] ? errors['email'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.email}
                            />

                            <InputForm
                                type='text'
                                register={register('website')}
                                label='website'
                                error={!!errors['website']}
                                helperText={errors['website'] ? errors['website'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.website}
                            />

                            <InputForm
                                type='text'
                                register={register('addressLine2')}
                                label='Address Line 3'
                                error={!!errors['addressLine2']}
                                helperText={errors['addressLine2'] ? errors['addressLine2'].message : ''}
                                onChange={HandleChangeBasicInformation}
                                value={basicInformation.addressLine2}
                            />
                        </Typography>
                        <Box sx={{ p: 1 }}>
                            <FileUpload />
                        </Box>
                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>

                            <Button
                                variant="contained"
                                color='info'
                                type='submit'
                            >
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </>
        </Box>
    );
}

export default BasicInformation;