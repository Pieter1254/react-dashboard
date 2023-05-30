import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography 
                variant="h2" 
                colors={colors.grey[100]} 
                fontWeight="bold" 
                sx={{ mr: "5px"}}
            >{title}</Typography>

            <Typography
                variant="h5"
                marginTop="5px"
                color={colors.greenAccent[400]}
            >{subtitle}</Typography>
        </Box>
    );
};

export default Header;