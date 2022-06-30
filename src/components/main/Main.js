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
    const root = document.getElementById("cv");
    const content = root?.textContent;
    const element = document.createElement("a");
    const file = new Blob([content ?? ""], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Gor_Arakelyan-CV.txt";
    document.body.appendChild(element); // Required for working in FireFox
    element.click();
  };

  return (
    <Typography component="div" marginTop={2}>
      <Button
        size="medium"
        variant="outlined"
        onClick={handleExport}
        sx={{ position: "fixed", top: "15px", left: "10px" }}
      >
        export file
      </Button>
      <Typography component="div" marginBottom="30px" id="cv">
        <Typography
          component="div"
          variant="h4"
          fontWeight={500}
          marginBottom={1}
          sx={{ width: "1158px", margin: "0 auto" }}
        >
          Arakelyan Gor - web developer
        </Typography>
        {"\n"}
        {"\n"}
        <Typography component="div" sx={{ display: "flex", marginTop: "15px" }}>
          <Typography
            component="div"
            sx={{ margin: "0 auto", display: "flex" }}
          >
            <Typography
              component="div"
              sx={{ background: "#d3d3d378", width: "400px", padding: "10px" }}
            >
              <Avatar />

              <About headingsCss={headingsCss} />

              <Languages headingsCss={headingsCss} />

              <Hobbies headingsCss={headingsCss} />

              <Contacts headingsCss={headingsCss} />
            </Typography>

            <Typography
              component="div"
              sx={{ width: "700px", padding: "20px" }}
            >
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
    </Typography>
  );
};

export default Main;
