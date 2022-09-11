import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionWrapper = ({ title, children }) => {
  const styles = {
    color: "white",
    fontSize: "20px",
    marginTop: "15px",
    background: "black",
    paddingLeft: "50px",
    borderRadius: "10px",
  };

  return (
    <Accordion sx={{ backgroundColor: "#d3d3d378", borderRadius: "10px" }}>
      <AccordionSummary
        id={title}
        sx={styles}
        expandIcon={<ExpandMoreIcon color="info" />}
        aria-controls="panel1a-content"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionWrapper;
