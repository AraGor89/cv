import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import {
  Brightness4,
  Brightness7,
  Download as DownloadIcon,
} from "@mui/icons-material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  //   Language,
  //   GitHub,
} from "@mui/icons-material";
import {
  MusicNote as MUSIC,
  Movie as MOVIES,
  MenuBook as READING,
  Pool as SWIMMING,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Avatar,
  Container,
  IconButton,
  Stack,
  Chip,
  Divider,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
  Link,
} from "@mui/material";

import pic from "../assets/img/avatar.jpg";

const currentYear = new Date().getFullYear();
const experienceYears = currentYear - 2020;

const dummyCV = {
  name: "Gor Arakelyan",
  title: "Frontend Developer",
  contact: [
    { icon: <Email fontSize="small" />, text: "gorarakelyan1989@gmail.com" },
    { icon: <Phone fontSize="small" />, text: "+374 94 899 926" },
    { icon: <LocationOn fontSize="small" />, text: "Yerevan, Armenia" },
    {
      icon: <LinkedIn fontSize="small" />,
      text: "linkedin",
      link: "https://www.linkedin.com/in/gor-arakelyan-7005581a9/",
    },
    // { icon: <Language fontSize="small" />, text: "janedoe.dev" },
    // { icon: <GitHub fontSize="small" />, text: "github.com/janedoe", link: "https://github.com/AraGor89" },
  ],
  languages: [
    { language: "ENGLISH", proficiency: "C1" },
    { language: "RUSSIAN", proficiency: "C2" },
    { language: "ARMENIAN", proficiency: "native" },
  ],
  hobbies: [
    { hobby: "MUSIC", img: MUSIC },
    { hobby: "MOVIES", img: MOVIES },
    { hobby: "READING", img: READING },
    { hobby: "SWIMMING", img: SWIMMING },
  ],
  summary: `${experienceYears}+ years of experience as a web developer with strong front-end expertise and a solid foundation in back-end technologies. I specialize in building clean, user-friendly interfaces and bring creativity to solving complex problems. Passionate about staying current with industry trends, I thrive in collaborative environments and am eager to contribute to impactful web development projects.`,
  experience: [
    {
      role: "Front-end Developer",
      company: "REDKITE",
      location: "Remote",
      period: "2022 – Present",
      details: [
        "Worked in the telecommunication field, creating user-friendly interfaces.",
        "Developed ag-grid data tables and various filters for managing large datasets.",
        "Implemented third-party authorization and a routing system for applications.",
        "Created configurable dashboards with bookmarking, saving, and exporting capabilities (PDF, XLSX, CSV).",
      ],
    },
    {
      role: "Developer in testing",
      company: "REDKITE",
      location: "Remote",
      period: "2022 – 2022 (6 months)",
      details: [
        "Worked in the music industry, contributing to QA automation for a music platform.",
        "Integrated end-to-end testing using Cypress and developed a reporting system.",
        "Tested features for uploading songs and albums, including validation for track format, size, and metadata.",
        "Performed UI tests, API tests, and third-party integration tests.",
        <Typography variant="body1" component="span">
          Wrote an{" "}
          <Link
            href="https://medium.com/@gorarakelyan1989/100-days-of-quality-assurance-e0e0ff0d6707"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            article
          </Link>{" "}
          titled 'What Can Be Tested?' on the topic of QA in the industry.
        </Typography>,
      ],
    },
    {
      role: "Front-end Developer / Developer in testing",
      company: "REDKITE",
      location: "Remote",
      period: "2020 – 2022",
      details: [
        "Worked in the medical field, contributing as both a front-end developer and a Developer in testing.",
        "Developed and optimized the 'Medical Card' project, including modules such as Admission Info, Appointment List, Prescriptions History, Lab Results, and Survey Cards.",
        "Integrated lab test results into patient records for easy access by medical staff.",
        "Implemented digital forms for collecting patient history and feedback.",
        "Collaborated with the medical team to improve user experience and ensure compliance with medical standards.",
        "Integrated end-to-end testing using Cypress and developed a reporting system.",
      ],
    },
    {
      role: "Front-end Web Developer",
      company: "FREELANCE",
      location: "Remote",
      period: "2019 – 2020",
      details: [
        "Worked as a junior front-end developer on freelance platforms such as Upwork, focusing on a range of small to mid-scale projects",
        "Responsibilities included building and refining responsive UI components, fixing layout and styling issues, implementing basic interactivity using JavaScript, and collaborating with clients to deliver user-friendly web interfaces tailored to their needs.",
      ],
    },
  ],

  education: [
    {
      degree: '"Programming basics" C++ course',
      school:
        "Russian-Armenian University and Ministry of High Tech Industry of the Republic of Armenia",
      period: "2020 / 3 months",
    },
    {
      degree: "Front-end development courses",
      school: "", // No specific school mentioned
      period: "2019 / 6 months",
    },
    {
      degree: "Moscow Institute of Linguistics",
      school: "", // Degree not specified
      period: "2012 - 2014",
    },
  ],
  hardSkills: [
    "JavaScript",
    "TypeScript",
    "node js",
    "React",
    "Next js",
    "AI-assisted development",
    "mongo db",
    "mongoose",
    "Redux",
    "REST API",
    "CYPRESS",
    "e2e testing",
    "HTML",
    "CSS",
    "LESS",
    "Prompt engineering",
    "Material-UI",
  ],
  softSkills: [
    "Teamwork",
    "Patience",
    "Positivity",
    "Accountability",
    "Problem solving",
    "Process management",
    "Adaptability",
    "Critical thinking",
    "Communication",
  ],
};

const CVComponent = () => {
  const [mode, setMode] = useState("dark");
  const cvRef = useRef(null);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const downloadPDF = () => {
    window.scrollTo(0, 0);
    const previousMode = mode;
    setMode("light"); // temporarily set to light mode

    setTimeout(() => {
      const element = cvRef.current;
      const opt = {
        margin: 0,
        filename: "Gor_Arakelyan_CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: "avoid-all" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          setMode(previousMode); // restore mode
        });
    }, 300); // wait for theme to switch before rendering
  };

  const handleLinkClick = (link) => {
    link && window.open(link, "_blank", "noopener,noreferrer");
  };

  const {
    name,
    title,
    contact,
    summary,
    experience,
    education,
    hardSkills,
    softSkills,
    languages,
    hobbies,
  } = dummyCV;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={2} display="flex" justifyContent="space-between">
        <IconButton onClick={toggleTheme} aria-label="Toggle theme">
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Button
          onClick={downloadPDF}
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{ position: "fixed", top: "15px", right: "10px" }}
        >
          Download PDF
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Box
          ref={cvRef}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          py={4}
        >
          {/* Sidebar */}
          <Box
            width={{ md: "30%" }}
            pr={{ md: 4 }}
            mb={{ xs: 4, md: 0 }}
            borderRight={{ md: "1px solid #ccc" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={3}
            >
              <Avatar
                alt={name}
                src={pic}
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Typography variant="h5">{name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {title}
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Contact
            </Typography>
            <Stack spacing={1} mb={2}>
              {contact.map((item, idx) => (
                <Box key={idx} display="flex" alignItems="center">
                  {item.icon}
                  <Typography
                    variant="body2"
                    ml={1}
                    sx={{ cursor: item.link ? "pointer" : "unset" }}
                    onClick={() => handleLinkClick(item.link)}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Languages
            </Typography>
            <Stack spacing={1} mb={2}>
              {languages.map((item, idx) => (
                <Box key={idx} display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ width: "100px" }}>
                    {item.language}
                  </Typography>
                  <Typography variant="body2">{item.proficiency}</Typography>
                </Box>
              ))}
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Hard Skills
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
              {hardSkills.map((skill) => (
                <Chip key={skill} label={skill.toLowerCase()} size="small" />
              ))}
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Soft Skills
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {softSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill.toLowerCase()}
                  size="small"
                  variant="outlined"
                  color="secondary"
                />
              ))}
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" mb={1} mt={1}>
              Hobbies
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              display="flex"
              justifyContent="space-evenly"
              mb={2}
            >
              {hobbies.map((hobby) => (
                <Typography
                  component="div"
                  textAlign="center"
                  key={hobby.hobby}
                >
                  <hobby.img />
                  <Typography component="div" fontSize={14}>
                    {hobby.hobby.toLowerCase()}
                  </Typography>
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Main Content */}
          <Box width={{ md: "70%" }} pl={{ md: 4 }}>
            <Typography variant="h6">Summary</Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              {summary}
            </Typography>

            <Typography variant="h6">Experience</Typography>
            {experience.map((job, idx) => (
              <Box key={idx} mb={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {job.role}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {job.period} @ {job.company}
                  {/* – {job.location} */}
                </Typography>
                <ul style={{ marginTop: 8 }}>
                  {job.details.map((point, i) => (
                    <li key={i}>
                      <Typography variant="body2">{point}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}

            <Typography variant="h6">Education</Typography>
            {education.map((edu, idx) => (
              <Box key={idx} mb={2}>
                <Typography variant="subtitle1">{edu.degree}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {edu.school} ({edu.period})
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CVComponent;
