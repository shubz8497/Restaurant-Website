import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5, ml: 7,
        "& h4": {
          fontWeight: "bold", mb: 2, fontFamily: "serif",
        },
        "& p": {
          fontFamily: "serif",
        },
        "@media (max-width:600px)": {
          width: "280px",
          "& h4": { fontSize: "1.3rem" },
          "& p": { textAlign: "justify" },
        },
      }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore veritatis dolores ratione placeat, eos architecto. Laborum temporibus id animi assumenda commodi repellat veniam quam eius officiis consequatur. Possimus, error sint?</p>
      </Box>
      <Box sx={{
        m: 5, pt: 7, width: '600px', ml: 7, fontFamily: "serif",
        "@media (max-width:600px)": {
          width: "280px",
        },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  bgcolor: 'black', color: 'goldenrod', fontFamily: "serif",
                }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontFamily: "serif" }}>
                  <SupportAgentIcon sx={{ color: 'goldenrod', pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontFamily: "serif" }}>
                  <MailIcon sx={{ color: 'goldenrod', pt: 1 }} /> HelpDesk@swagat.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontFamily: "serif" }}>
                  <CallIcon sx={{ color: 'goldenrod', pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontFamily: "serif" }}>
                  <PlaceIcon sx={{ color: 'goldenrod', pt: 1 }} /> 001, Food Street, Lane 4, Hometown -147852
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact;