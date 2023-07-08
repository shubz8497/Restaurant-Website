import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: 'black', color: 'white', p: 2 }}>
                <Box sx={{
                    my: 1, "& svg": {
                        fontSize: "30px",
                        cursor: "pointer", mr: 2,
                    },
                    "& svg:hover":{
                        color:"goldenrod",
                        transform:"translateX(5px)",
                        transition:"all 400ms",
                    },
                }}
                >
                    {/*icons*/}
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                    <YouTubeIcon />

                </Box>
                <Typography variant="h6"
                    sx={{
                        "@media (max-width:600px)": { fontSize: "1rem" },
                    }}>
                    All Rights Reserved &copy; Shubham Yelange
                </Typography>
            </Box>
        </>
    )
}

export default Footer;