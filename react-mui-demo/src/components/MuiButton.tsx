import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AdsClickIcon from '@mui/icons-material/AdsClick';

export const MuiButton = () => {
    return(
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"} alignContent={"center"}>
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="error">error</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>
            
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" color="primary">Primary</Button>
                <Button variant="text" color="secondary">secondary</Button>
                <Button variant="text" color="error">error</Button>
                <Button variant="text" color="warning">warning</Button>
                <Button variant="text" color="info">info</Button>
                <Button variant="text" color="success">success</Button>
            </Stack>
            
            <Stack spacing={2} direction={"row"}>
                <Button variant="outlined" color="primary">Primary</Button>
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="outlined" color="error">error</Button>
                <Button variant="outlined" color="warning">warning</Button>
                <Button variant="outlined" color="info">info</Button>
                <Button variant="outlined" color="success">success</Button>
            </Stack>
            
            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>
            
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
                <IconButton aria-label="send">
                    <SendIcon/>
                </IconButton>
            </Stack>
            
            
            <Stack spacing={2} direction={"row"}>
                <Button 
                    variant="contained" 
                    endIcon={<AdsClickIcon/>} 
                    disableElevation 
                    onClick={() => alert("clicked!")}
                >
                    Click Me
                </Button>
            </Stack>
        </Stack>
    )
}