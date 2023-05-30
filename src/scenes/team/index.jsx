import { Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id", 
            headerName: "ID"}, 
        {
            field: "name", 
            headerName: "Bank Name", 
            flex: 1, 
            cellClassName: "name-column-cell"
        },
        {
            field: "transactions", 
            headerName: "Number of transactions",
            type: "number", 
            headerAlign: "left",
            align: "left",
            flex: 1
        },
        {
            field: "phone", 
            headerName: "Phone Number",
            flex: 1, 
        },
        {
            field: "email", 
            headerName: "Email",
            flex: 1, 
        },
        {
            field: "access", 
            headerName: "Actions",
            flex: 1,
            renderCell: ({ row: { access }}) => {
                return (
                    <Box
                        width='60%'
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                            <Box>
                                <EditOutlinedIcon />
                                <SecurityOutlinedIcon />
                                <AdminPanelSettingsOutlinedIcon />
                                <DeleteOutlineIcon />
                            </Box>
                            
                        </Typography>
                    </Box>
                );
            }
        },
    ];

    return (
        <Box m="20px"> 
            <Header title="Process Banks" subtitle="Welcome Users"></Header>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom : "none"
                    },
                    "& .name-column-cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders" : {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    }
                 }}
            >
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;