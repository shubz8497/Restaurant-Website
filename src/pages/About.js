import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 13,
        textAlign:"center",
        p: 2,
        fontFamily:"serif",
        "& h4": {
          fontWeight: "bold",
          fontFamily:"serif",
          my: 2,
        fontSize: "2.5rem",        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt:0,
          fontFamily:"serif",
          "& h4": {
            fontSize: "1.5rem",
            fontFamily:"serif",
          },
        },
        }}>
        <Typography variant='h4'>Welcome to my Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vero corporis omnis, eligendi, accusantium officia quas harum, beatae praesentium reiciendis neque nostrum! Enim quis provident esse reprehenderit consequatur veniam culpa deserunt repellat, unde, eveniet nam, tempora nulla! Maiores, et, sunt assumenda libero qui architecto molestiae necessitatibus voluptatem, molestias error sit facilis magni praesentium soluta blanditiis nihil enim harum ut suscipit accusamus quis repellat doloremque placeat voluptate. Blanditiis excepturi, nulla fugiat facere necessitatibus odio dolorum ullam accusamus commodi quam similique a, esse ducimus vitae omnis atque, inventore aperiam. Quidem eos expedita corporis quaerat hic? Ad eum voluptate repellendus eos praesentium cum!
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illum quos amet molestiae in alias voluptatem optio deleniti ratione est, quaerat magnam similique suscipit corporis. Iste, molestiae. Laudantium sequi, tempora repellat possimus veniam adipisci nihil est unde ad maiores fugit nisi hic praesentium ea amet eligendi necessitatibus dolor quisquam repudiandae vel tempore dolorem esse! Tempora itaque animi nemo officia earum, optio dolores nisi, aliquid quam blanditiis praesentium recusandae quidem sequi? Animi exercitationem beatae optio, veniam architecto unde rerum. Suscipit voluptatum doloremque assumenda labore laboriosam, tenetur impedit quibusdam eligendi veritatis quisquam ullam nostrum sit ipsam similique velit aliquam distinctio necessitatibus. Molestiae!
        </p>
      </Box>
    </Layout>
  )
}

export default About;