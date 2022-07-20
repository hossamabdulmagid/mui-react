import { Typography } from "@mui/material";


const MuiTypoGraphy = (count: any) => {
    return (
        <div>
            <Typography variant="h1" component="h1">h1. Heading </Typography>
            <Typography variant="h2" component="h2">h2. Heading</Typography>
            <Typography variant="h3" component="h3">h3. Heading</Typography>
            <Typography variant="h4" component="h4">h4. Heading</Typography>
            <Typography variant="h5" component="h5">h5. Heading</Typography>
            <Typography variant="h6" component="h6" marginBottom={'50px'}>h6. Heading</Typography>
        </div>

    )
}

export default MuiTypoGraphy;