import React from "react";
import { Typography } from "@mui/material";
import avatar from "../../assets/img/avatar.jpg";
import logoLin from "../../assets/img/logoLin.png";
import PoolTwoToneIcon from "@mui/icons-material/PoolTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import MusicVideoTwoToneIcon from "@mui/icons-material/MusicVideoTwoTone";
import MovieCreationTwoToneIcon from "@mui/icons-material/MovieCreationTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";

const headingsCss = {
  width: "70%",
  color: "white",
  marginTop: "15px",
  background: "black",
  paddingLeft: "50px",
  borderRadius: "30px",
};

const Main = () => {
  return (
    <Typography component="div" marginTop="30px" marginBottom="30px">
      <Typography component="div" sx={{ display: "flex" }}>
        <Typography component="div" sx={{ margin: "0 auto", display: "flex" }}>
          <Typography
            component="div"
            sx={{ background: "lightGrey", width: "400px", padding: "10px" }}
          >
            <Typography
              component="img"
              src={avatar}
              alt="avatar"
              width="200px"
              borderRadius="50%"
              border="5px solid black"
              sx={{ margin: "0 auto", display: "flex" }}
            />

            <Typography variant="h5" sx={headingsCss}>
              About me
            </Typography>
            <Typography component="div" sx={{ padding: "10px" }}>
              For a long time I was looking for myself. I tried myself in
              various fields, including business. Worked as a manager in a chain
              of cafeterias. Once a friend of mine who was in IT introduced to
              me what is IT and coding. I really liked it, especially the web
              (front-end) and I decided to become a web developer. I was very
              excited and started learn all by myself with books, different
              training sites and online classes. Worked as a freelancer for a
              while. Finally on 2020 I was hired by "RedKite" where I do work
              till now as a front end developer.
            </Typography>
            <Typography variant="h5" sx={headingsCss}>
              Languages
            </Typography>
            <Typography
              component="div"
              justifyContent="space-between"
              sx={{ padding: "10px", display: "flex" }}
            >
              <Typography component="div" textAlign="center">
                <Typography component="div">100%</Typography>
                <Typography component="div">ARMENIAN</Typography>
              </Typography>
              <Typography component="div" textAlign="center">
                <Typography component="div">75%</Typography>
                <Typography component="div">ENGLISH</Typography>
              </Typography>
              <Typography component="div" textAlign="center">
                <Typography component="div">95%</Typography>
                <Typography component="div">RUSSIAN</Typography>
              </Typography>
            </Typography>
            <Typography variant="h5" sx={headingsCss}>
              Hobbies
            </Typography>
            <Typography
              component="div"
              justifyContent="space-between"
              sx={{ padding: "10px", display: "flex" }}
            >
              <Typography component="div" textAlign="center">
                <PoolTwoToneIcon />
                <Typography component="div">SWIMMING</Typography>
              </Typography>
              <Typography component="div" textAlign="center">
                <MenuBookTwoToneIcon />
                <Typography component="div">READING</Typography>
              </Typography>
              <Typography component="div" textAlign="center">
                <MusicVideoTwoToneIcon />
                <Typography component="div">MUSIC</Typography>
              </Typography>
              <Typography component="div" textAlign="center">
                <MovieCreationTwoToneIcon />
                <Typography component="div">MOVIES</Typography>
              </Typography>
            </Typography>
            <Typography variant="h5" sx={headingsCss}>
              Contact info
            </Typography>
            <Typography
              component="div"
              sx={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="div" display="flex" marginBottom={1}>
                <LocalPhoneTwoToneIcon />
                <Typography component="span" marginLeft={1}>
                  +374 94 899 926
                </Typography>
              </Typography>
              <Typography component="div" display="flex" marginBottom={1}>
                <MarkEmailUnreadTwoToneIcon />
                <Typography component="span" marginLeft={1}>
                  gorarakelyan1989@gmail.com
                </Typography>
              </Typography>
              <Typography component="div" display="flex" alignItems="center">
                <Typography
                  width="25px"
                  height="25px"
                  alt="logoLin"
                  component="img"
                  src={logoLin}
                />
                <Typography
                  marginLeft={1}
                  component="a"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "unset" }}
                  href="https://www.linkedin.com/in/gor-arakelyan-7005581a9/"
                >
                  linkedin profile
                </Typography>
              </Typography>
            </Typography>
          </Typography>
          <Typography component="div" sx={{ width: "700px", padding: "20px" }}>
            <Typography component="div" variant="h4">
              Arakelyan Gor
            </Typography>

            <Typography component="div" sx={{ marginTop: "20px" }}>
              <Typography
                component="div"
                sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
              >
                PROFILE
              </Typography>
              <Typography
                component="div"
                sx={{
                  width: "80%",
                  paddingLeft: "25px",
                  borderLeft: "2px solid grey",
                }}
              >
                Innovative, creative and a proven team player. I am interested
                in IT and everything in its orbit and I am keen to gain more
                experience in the field.
              </Typography>
            </Typography>

            <DottedLine />

            <Typography component="div" sx={{ marginTop: "20px" }}>
              <Typography
                component="div"
                sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
              >
                WORK EXPERIENCE
              </Typography>
              <Typography
                component="div"
                sx={{
                  width: "80%",
                  borderLeft: "2px solid grey",
                }}
              >
                <Typography component="ul">
                  <Typography component="li">
                    FREELANCE 2019-2020 (Front-end web developer)
                  </Typography>
                  <Typography component="li">
                    REDKITE 2020 - till now
                    <Typography component="ul">
                      <Typography component="i">
                        Automation of hospital workflows. (cypress, react,
                        redux...)
                      </Typography>
                      <Typography component="li">
                        Worked with "Biopic Medical" (Front-end web developer)
                      </Typography>
                      <Typography component="li">
                        Worked with "Biopic Medical" (Developer in testing)
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Typography>
            </Typography>

            <DottedLine />

            <Typography component="div" sx={{ marginTop: "20px" }}>
              <Typography
                component="div"
                sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
              >
                EDUCATION
              </Typography>
              <Typography
                component="div"
                sx={{
                  width: "80%",
                  borderLeft: "2px solid grey",
                }}
              >
                <Typography component="ul">
                  <Typography component="li">
                    <strong>2020 / 3 months</strong> (“Programming basics”
                    course Russian-Armenian University and Ministry of High Tech
                    Industry of the Republic of Armenia)
                  </Typography>
                  <Typography component="li">
                    <strong>2012 - 2014</strong> ( Moscow Institute of
                    Linguistics)
                  </Typography>
                  <Typography component="li">
                    <strong>2007 - 2009</strong> ( Served in the Army)
                  </Typography>
                  <Typography component="li">
                    <strong>1996 - 2006</strong> ( Abovyan Basic school N 7)
                  </Typography>
                </Typography>
              </Typography>
            </Typography>

            <DottedLine />

            <Typography component="div" sx={{ marginTop: "20px" }}>
              <Typography
                component="div"
                sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
              >
                PROFESSIONAL DUTIES
              </Typography>
              <Typography
                component="div"
                sx={{
                  width: "80%",
                  borderLeft: "2px solid grey",
                }}
              >
                <Typography component="ul">
                  <Typography component="li">
                    Providing adaptive and cross-browser layout.
                  </Typography>
                  <Typography component="li">
                    Development and improving of autotests.
                  </Typography>
                  <Typography component="li">
                    Creation and completion of new program modules.
                  </Typography>
                  <Typography component="li">
                    Support and development of the current architecture.
                  </Typography>
                  <Typography component="li">
                    Refactoring (improving and optimizing the code) of existing
                    modules.
                  </Typography>
                  <Typography component="li">
                    Generating new ideas to improve the system.
                  </Typography>
                  <Typography component="li">
                    Active participation in the product team.
                  </Typography>
                  <Typography component="li">
                    Demonstrations of the work done (new features,
                    improvements).
                  </Typography>
                </Typography>
              </Typography>
            </Typography>

            <DottedLine />
            <Typography
              component="div"
              sx={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <Typography component="div">
                <Typography component="ul">
                  <strong>SOFT SKILLS</strong>
                  <Typography component="li">Teamwork</Typography>
                  <Typography component="li">Patience</Typography>
                  <Typography component="li">Positivity</Typography>
                  <Typography component="li">Accountability</Typography>
                  <Typography component="li">Problem-Solving</Typography>
                </Typography>
              </Typography>
              <Typography component="div">
                <strong>HARD SKILLS</strong>
                <Typography component="ul">
                  <Typography component="li">HTML</Typography>
                  <Typography component="li">CSS</Typography>
                  <Typography component="li">JavaScript</Typography>
                  <Typography component="li">TypeScript</Typography>
                  <Typography component="li">React</Typography>
                </Typography>
              </Typography>
              <Typography component="div" marginTop={3}>
                <Typography component="ul">
                  <Typography component="li">Redux</Typography>
                  <Typography component="li">Bootstrap</Typography>
                  <Typography component="li">CYPRESS</Typography>
                  <Typography component="li">LESS</Typography>
                  <Typography component="li">REST API</Typography>
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Main;

const DottedLine = () => {
  return (
    <Typography
      component="hr"
      sx={{
        border: "none",
        borderTop: "1px dashed black",
        height: "1px",
        width: "100%",
        marginTop: "20px",
      }}
    />
  );
};
