import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FAQ = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px'">
            <Header title="FAQ" subtitle="Frequently Asked Question Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5"> 
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas laudantium vitae molestiae facere cupiditate amet officiis, ipsam eligendi ab aut animi corrupti inventore praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5"> 
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas laudantium vitae molestiae facere cupiditate amet officiis, ipsam eligendi ab aut animi corrupti inventore praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5"> 
                        your favourite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas laudantium vitae molestiae facere cupiditate amet officiis, ipsam eligendi ab aut animi corrupti inventore praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5"> 
                        Final question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas laudantium vitae molestiae facere cupiditate amet officiis, ipsam eligendi ab aut animi corrupti inventore praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;