import { InputAdornment, Stack, TextField } from "@mui/material"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from "react";

export const MuiTextField = () => {
    const [value, setValue] = useState("")
    return(
        <Stack padding={4} spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary"/>
                <TextField label="Medium secondary" size="medium" color="secondary" error required/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField 
                    label="Form Input" 
                    value={value} 
                    required 
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={value ? 'Required': 'Do not share your password with anyone'}
                />
                <TextField label="Form Input" helperText="Do not share your password with anyone"/>
                <TextField 
                    label="Form Input" 
                    type="password" 
                    helperText="Do not share your password with anyone"
                />
                <TextField label="Disabled Input" disabled/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Readonly Input" inputProps={{readOnly: true}} value={"Readonly Text"}/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }}/>
                <TextField label="Password" type="password" InputProps={{
                    endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon/></InputAdornment>
                }}/>
            </Stack>
        </Stack>
    )
}