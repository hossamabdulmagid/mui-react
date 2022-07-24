import { useState, Fragment } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Header from '../../component/header/header.component';


type TypeLanguages = {
    lang: string;
    author: string;
};
const LanguagePage: React.FC = (): JSX.Element => {
    const [languages, setLanguages] = useState<TypeLanguages[]>([
        { lang: "English", author: "Boyko" },
        { lang: "العربية", author: "Badr Alharbi " },
        { lang: "Български", author: "Stan Filipcik (@murdochay), Jan Chudoba" },
        { lang: "Čeština", author: "Thomas Jensen" },
        { lang: "Dansk", author: "Akaki Peikrishvili (@PeikrishviliGE)" },
        { lang: "Deutsch", author: "Eric Ericson (@idleherb)" },
        { lang: "Eesti", author: "Bas van Dijk" },
        { lang: "keel", author: "Alexandr Burdiyan" },
        { lang: "ქართული", author: "Aleksandr Oleshko" },
        { lang: "Dutch", author: "Aliakbar Majidi (majidi.info)" },
        {
            lang: "Español",
            author: "Amélie Coulombe, Samy Dindane (samy.dindane.com)",
        },
        { lang: "فارسی", author: "Xesús M. Mosquera Carregal (@xesusmmc)" },
        { lang: "Français", author: "Christos Vlachos (blaxosxr.gr)" },
        { lang: "Galician", author: "Marko Knezevic" },
        { lang: "Έλληνικά", author: "Bálint Vass" },
        {
            lang: "Hungarian",
            author: "Giulio Fronterotta (Italian Developer, Milano)",
        },
        { lang: "Italiano", author: "Nehemia Harel" },
        { lang: "עברית", author: "Keedi Kim (@keedi)" },
        { lang: "한국어", author: "Kristian" },
        { lang: "Norsk", author: "Ludwik Trammer (ludwik.trammer.pl)" },
        { lang: "Polski", author: "Afraneo Galan (lemonblue.com.br)" },
        { lang: "Português", author: "Minacio (minacio.pt)" },
        { lang: "Român", author: "Valentin Goia" },
        { lang: "Pусский", author: "Alex Shiyanov, Alexandr Burdiyan" },
        { lang: "Slovenščina", author: "Andraž Radovan (LinkedIn)" },
        { lang: "Slovenský", author: "Jarka Dubasova" },
        { lang: "Shqip", author: "Jantso Porali (@JantsoPorali)" },
        { lang: "Suomi", author: "Johannes Andersson (thejoltjoker.com)" },
        { lang: "Svenska", author: "Genti Ereqi (gentiereqi.com)" },
        { lang: "Türkçe", author: "Doğancan Özturan (dogancan.org)" },
        { lang: "Українська", author: "Українська" },
        { lang: "Tiếng-Se Nguyen", author: "Se Nguyen " },
        { lang: "Việt", author: "Radovan Genti" },
        { lang: "മലയാളം", author: "Kailash Nadh (nadh.in)" },
        { lang: "中文", author: "Tiger Zhang (zhangtai.me)" },
        { lang: "繁體中文", author: "Caton Chong" },
        { lang: "Hrvatski", author: "Marko Knezevic" },
    ]);
    return (
        <Fragment>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px" }}>
                <Container>
                    <Typography variant='h5' component='h5'>
                        Language credits
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            {languages && languages.map((singlelanguage, idx) => {
                                return (
                                    <Typography key={idx} sx={{ padding: '10px', borderBottom: "1px solid darkgrey" }}>
                                        {singlelanguage.lang} <br />
                                        {singlelanguage.author}
                                    </Typography>
                                )
                            })}

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>

    );
}


export default LanguagePage;