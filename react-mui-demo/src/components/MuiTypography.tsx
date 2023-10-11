import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return(
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            <Typography variant="subtitle1">Sub tittle 1</Typography>
            <Typography variant="subtitle2">Sub tittle 2</Typography>
            <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corporis deleniti neque non accusantium tenetur, aliquam iusto consequuntur dolores obcaecati totam dignissimos fugiat odit culpa quis cum ullam earum ab?</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio quis minus sequi praesentium assumenda eveniet, vel porro minima, sed eligendi, aut voluptatem sunt quaerat quibusdam nihil! Tempore, fugiat mollitia.</Typography>
        </div>
    )
}