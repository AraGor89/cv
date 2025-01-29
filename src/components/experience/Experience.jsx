import { Typography } from "@mui/material";

const Experience = () => {
  return (
    <Typography component="div">
      <Typography
        component="div"
        sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
      >
        WORK EXPERIENCE
      </Typography>
      <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
        <Typography component="ul">
          <Typography component="li">
            FREELANCE 2019-2020 (Front-end web developer)
          </Typography>
          <Typography component="li">
            REDKITE 2020 - present.
            <Typography component="ul">
              <i i>
                Worked in the medical field as a front-end developer and
                developer in QA automation.
                <li>
                  Participated in developing and optimizing the{" "}
                  <b>Medical Card</b>, which included modules like:
                  <ul>
                    <li>
                      <b>Admission Info</b> – Managed patient registrations,
                      admissions, and initial assessments.
                    </li>
                    <li>
                      <b>Appointment List</b> – Handled scheduling, tracking,
                      and managing patient appointments.
                    </li>
                    <li>
                      <b>Prescriptions History</b> – Developed a system for
                      tracking and managing prescribed medications, dosage
                      history.
                    </li>
                    {/* <li>
                      <b>Electronic Medical Records (EMR)</b> – Designed a
                      centralized system for storing and retrieving patient
                      medical histories, including diagnoses, treatments, and
                      prescriptions.
                    </li> */}
                    <li>
                      <b>Lab Results</b> – Integrated lab test results into
                      patient records for seamless access by doctors and medical
                      staff.
                    </li>
                    <li>
                      <b>Survey Card</b> – Implemented digital forms for
                      collecting patient history, feedback, and assessments.
                    </li>
                    <li>...</li>
                  </ul>
                </li>
              </i>

              <hr />
              {/* <i>Worked with "Warner Music Group"</i> */}
              <i>Worked in music industry as a developer in QA automation.</i>
              <ul>
                <li>
                  Integrated end-to-end testing(Cypress) and reporting system
                  for musical platform/application which was providing
                  possibility to upload song/album using aws alongside with
                  additional meta data and validation (track format, size...).
                </li>
                <li>ui tests</li>
                <li>api tests</li>
                <li>third party integrations tests</li>
              </ul>
              <Typography component="li">
                <Typography
                  component="a"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                  href="https://medium.com/@gorarakelyan1989/100-days-of-quality-assurance-e0e0ff0d6707"
                >
                  Wrote an article on the topic "What can be tested ?"
                </Typography>
              </Typography>
              <hr />
              <i>
                Worked in telecommunication field as a front-end developer.{" "}
              </i>
              <ul>
                <li>
                  created user friendly interfaces which includes
                  ag-grids(data-tables) and different variations of filters to
                  deal with data.
                </li>
                <li>added third party authorization</li>
                <li>added routing system</li>
                <li>
                  created configurable dashboards with bookmarking logic, saving
                  logic, exporting logic (pdf, xlsx, csv)
                </li>
              </ul>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Experience;
