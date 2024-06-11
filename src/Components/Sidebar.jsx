import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
    { text: 'Add Room', path: '/add-room' },
    { text: 'Add Events', path: '/add-event' },
    { text: 'Create Account', path: '/create-account' },
    { text: 'Orders', path: '/orders' }
];

const iconSVGs = [
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9575 0.2825C11.1006 0.165538 11.2679 0.0817769 11.4473 0.0372502C11.6267 -0.00727643 11.8138 -0.0114602 11.995 0.0250003L24.495 2.525C24.7783 2.58162 25.0332 2.73459 25.2164 2.95792C25.3996 3.18125 25.4998 3.46113 25.5 3.75V26.2425C25.4998 26.5314 25.3996 26.8113 25.2164 27.0346C25.0332 27.2579 24.7783 27.4109 24.495 27.4675L11.995 29.9675C11.8137 30.0037 11.6267 29.9993 11.4473 29.9545C11.2679 29.9098 11.1007 29.8258 10.9577 29.7086C10.8148 29.5914 10.6995 29.444 10.6204 29.277C10.5412 29.1099 10.5001 28.9274 10.5 28.7425V1.25M18 14.995C18 14.6635 17.8683 14.3455 17.6339 14.1111C17.3995 13.8767 17.0815 13.745 16.75 13.745C16.4185 13.745 16.1005 13.8767 15.8661 14.1111C15.6317 14.3455 15.5 14.6635 15.5 14.995C15.5 15.3265 15.6317 15.6445 15.8661 15.8789C16.1005 16.1133 16.4185 16.245 16.75 16.245C17.0815 16.245 17.3995 16.1133 17.6339 15.8789C17.8683 15.6445 18 15.3265 18 14.995ZM8 2.5H1.75C1.41848 2.5 1.10054 2.6317 0.866117 2.86612C0.631696 3.10054 0.5 3.41848 0.5 3.75V26.2425C0.5 26.574 0.631696 26.892 0.866117 27.1264C1.10054 27.3608 1.41848 27.4925 1.75 27.4925H8V2.5ZM10.9575 0.2825C10.8144 0.399839 10.6991 0.547497 10.62 0.714812C10.5409 0.882127 10.4999 1.06492 10.5 1.25L10.9575 0.2825Z" fill="#F04C29" />
    </svg>,
    <svg width="26" height="30" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.6667 16.25L28 17.9167L24.5833 14.5L26.25 12.8333C26.4214 12.6654 26.6517 12.5713 26.8917 12.5713C27.1316 12.5713 27.362 12.6654 27.5333 12.8333L29.6667 14.9667C30.0167 15.3167 30.0167 15.9 29.6667 16.25ZM13.5 25.5667L23.6 15.4667L27.0167 18.8833L16.9333 29H13.5V25.5667ZM13.5 17.3333C6.13334 17.3333 0.166672 20.3167 0.166672 24V27.3333H10.1667V24.1833L16.8333 17.5167C15.7333 17.3833 14.6167 17.3333 13.5 17.3333ZM13.5 0.666656C11.7319 0.666656 10.0362 1.36904 8.78596 2.61928C7.53572 3.86952 6.83334 5.56521 6.83334 7.33332C6.83334 9.10143 7.53572 10.7971 8.78596 12.0474C10.0362 13.2976 11.7319 14 13.5 14C15.2681 14 16.9638 13.2976 18.2141 12.0474C19.4643 10.7971 20.1667 9.10143 20.1667 7.33332C20.1667 5.56521 19.4643 3.86952 18.2141 2.61928C16.9638 1.36904 15.2681 0.666656 13.5 0.666656Z" fill="#F04C29" />
    </svg>
    ,
    <svg width="26" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5H27.5V2.5H25V5H15V2.5H12.5V5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H12.5V32.5H7.5V7.5H12.5V10H15V7.5H25V10H27.5V7.5H32.5V15H35V7.5Z" fill="#F04C29" />
        <path d="M26.25 18.75L29.4362 24.9225L36.25 25.9113L31.25 30.7162L32.5 37.5L26.25 34.2975L20 37.5L21.25 30.7162L16.25 25.9113L23.25 24.9225L26.25 18.75Z" fill="#F04C29" />
    </svg>
    ,
    <svg width="26" height="30" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.29667 3.09168C1.995 3.69168 1.84667 4.43501 1.55 5.91834L0.553336 10.9017C0.412084 11.5811 0.41099 12.2823 0.550121 12.9622C0.689252 13.6421 0.96568 14.2864 1.36248 14.8558C1.75929 15.4251 2.26811 15.9075 2.85782 16.2734C3.44752 16.6392 4.10569 16.8809 4.79204 16.9836C5.47839 17.0863 6.17847 17.0478 6.84943 16.8705C7.52039 16.6932 8.14811 16.3808 8.69415 15.9525C9.2402 15.5242 9.69309 14.989 10.0251 14.3796C10.3571 13.7702 10.5612 13.0994 10.625 12.4083L10.7417 11.2583C10.6785 11.9897 10.7686 12.7263 11.0062 13.4209C11.2438 14.1155 11.6237 14.7529 12.1216 15.2924C12.6195 15.8318 13.2244 16.2615 13.8978 16.5539C14.5712 16.8464 15.2981 16.9951 16.0322 16.9907C16.7663 16.9863 17.4914 16.8288 18.1612 16.5283C18.831 16.2277 19.4308 15.7908 19.9221 15.2454C20.4135 14.6999 20.7856 14.058 21.0149 13.3606C21.2441 12.6632 21.3253 11.9256 21.2533 11.195L21.375 12.4083C21.4388 13.0994 21.6429 13.7702 21.9749 14.3796C22.3069 14.989 22.7598 15.5242 23.3059 15.9525C23.8519 16.3808 24.4796 16.6932 25.1506 16.8705C25.8215 17.0478 26.5216 17.0863 27.208 16.9836C27.8943 16.8809 28.5525 16.6392 29.1422 16.2734C29.7319 15.9075 30.2407 15.4251 30.6375 14.8558C31.0343 14.2864 31.3108 13.6421 31.4499 12.9622C31.589 12.2823 31.5879 11.5811 31.4467 10.9017L30.45 5.91834C30.1533 4.43501 30.005 3.69334 29.7033 3.09168C29.389 2.46507 28.9464 1.91157 28.4043 1.46709C27.8622 1.02262 27.2327 0.697103 26.5567 0.511677C25.9067 0.333344 25.15 0.333344 23.6367 0.333344H8.36334C6.85 0.333344 6.09334 0.333344 5.44334 0.511677C4.76728 0.697103 4.13777 1.02262 3.59567 1.46709C3.05357 1.91157 2.611 2.46507 2.29667 3.09168ZM26.4483 19.5C27.7505 19.5033 29.0315 19.1697 30.1667 18.5317V20.3333C30.1667 26.6183 30.1667 29.7617 28.2133 31.7133C26.6417 33.2867 24.3 33.5917 20.1667 33.6517V27.8333C20.1667 26.275 20.1667 25.4967 19.8317 24.9167C19.6123 24.5367 19.2967 24.2211 18.9167 24.0017C18.3367 23.6667 17.5583 23.6667 16 23.6667C14.4417 23.6667 13.6633 23.6667 13.0833 24.0017C12.7033 24.2211 12.3877 24.5367 12.1683 24.9167C11.8333 25.4967 11.8333 26.275 11.8333 27.8333V33.6517C7.7 33.5917 5.35834 33.285 3.78667 31.7133C1.83334 29.7617 1.83334 26.6183 1.83334 20.3333V18.5317C2.96902 19.17 4.25056 19.5036 5.55334 19.5C7.47943 19.5014 9.33385 18.7696 10.74 17.4533C12.1731 18.7735 14.0515 19.5043 16 19.5C17.9484 19.5042 19.8268 18.7733 21.26 17.4533C22.6662 18.7696 24.5222 19.5014 26.4483 19.5Z" fill="#F04C29" />
    </svg>
];

const ResponsiveDrawer = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <img className='d-flex justify-content-center align-items-center m-auto mt-4' src="images/logo.png" alt="Logo" />
            <Toolbar />
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.text} disablePadding className='m-2' >
                        <ListItemButton className='sidebar-all-links'
                            component={NavLink}
                            to={item.path}
                            onClick={handleDrawerClose}
                            activeClassName="active"
                        >
                            <ListItemIcon>
                                {iconSVGs[index]}
                            </ListItemIcon>
                            <ListItemText primary={item.text} className='sidebar-links' />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'white',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: '#F04C29' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, paddingTop: '100px' }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
