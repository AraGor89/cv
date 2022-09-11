import { Button, Typography } from "@mui/material";
import About from "./../about/About";
import Duties from "./../duties/Duties";
import Avatar from "./../avatar/Avatar";
import Skills from "./../skills/Skills";
import Hobbies from "./../hobbies/Hobbies";
import Contacts from "./../contacts/Contacts";
import DottedLine from "./../common/DottedLine";
import Education from "./../education/Education";
import Languages from "./../languages/Languages";
import Experience from "./../experience/Experience";

const headingsCss = {
  color: "white",
  padding: "7px",
  fontSize: "20px",
  marginTop: "15px",
  marginBottom: "7px",
  background: "black",
  paddingLeft: "50px",
  borderRadius: "10px",
};

const Main = () => {
  const handleExport = () => {
    window.scrollTo(0, 0);
    const root = document.getElementById("cv");
    const opt = {
      filename: "Gor_Arakelyan-CV.pdf",
      pagebreak: { mode: "avoid-all" },
    };
    // NOTE: link to PDF transformer CDN => https://ekoopmans.github.io/html2pdf.js/#image-type-and-quality
    window.html2pdf().set(opt).from(root).save();
  };

  return (
    <Typography component="div" sx={{ margin: "0 auto", width: "1100px" }}>
      <Button
        size="medium"
        variant="contained"
        onClick={handleExport}
        sx={{ position: "fixed", top: "15px", right: "10px" }}
      >
        export file
      </Button>

      <Typography component="div" marginBottom="30px" id="cv" marginTop={6}>
        <Typography
          variant="h4"
          component="div"
          fontWeight={500}
          marginBottom={1}
        >
          Arakelyan Gor - web developer
        </Typography>

        <Typography component="div" sx={{ display: "flex" }}>
          <Typography
            component="div"
            sx={{
              background: "#d3d3d378",
              width: "500px",
              padding: "10px",
            }}
          >
            <Avatar />

            <About headingsCss={headingsCss} />

            <Languages headingsCss={headingsCss} />

            <Hobbies headingsCss={headingsCss} />

            <Contacts headingsCss={headingsCss} />
          </Typography>

          <Typography component="div" padding={3}>
            <Experience />

            <DottedLine />

            <Education />

            <DottedLine />

            <Duties />

            <DottedLine />

            <Skills />
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Main;
