import { Paper, styled } from "@mui/material";

export const BodyWrapper = styled(Paper)(({ }) => ({
    color: 'white',
    padding: "10px 10px",
    width: "100%",
    overflowY: "scroll",
    height: '100vh'
}));