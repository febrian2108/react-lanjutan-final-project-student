import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box className="footer" bg={"darkblue"} w='100%' color='white' >
            <Box className="studentName">Fahri Febriandika Pamungkas</Box>
            <Box className="studentId">FS10090676</Box>
        </Box>
    );
};

export default Footer;