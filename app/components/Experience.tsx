"use client";

import { Experience as ExperienceT, fetchExperiences } from "@/services/experienceData";
import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type FetchState = "initial" | "loading" | "success" | "error";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceT[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchExperiences()
      .then((experience) => {
        setExperiences(experience);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, []);

  return (
    <section
      id="resume"
      className="w-full min-h-screen pt-4 sm:pt-10 md:pt-40 overflow-hidden bg-slate-500 dark:bg-slate-600 text-black dark:text-white"
    >
      {state === "loading" && <h2 className="text-center py-8">Loading experiences...</h2>}
      {state === "error" && <h2 className="text-center py-8">Error while loading experiences...</h2>}
      {state === "success" && (
        <>
          <div className="col-md-12 mx-auto pb-10 pt-8">
            <div className="container mx-auto flex flex-col items-center">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 dark:border-pink-400">Experience</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <Timeline position="alternate">
              {experiences.map(({ id, category, date_range, position, organization, stack }, index) => (
                <TimelineItem key={id ?? index}>
                  <TimelineOppositeContent color="text.secondary">
                    <Typography variant="body2" className="dark:text-white">
                      {date_range}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: category === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)",
                      }}
                    >
                      {category === "work" ? <WorkIcon /> : <SchoolIcon />}
                    </TimelineDot>
                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg">
                      <Typography variant="h6" component="h3" className="font-semibold text-black dark:text-white">
                        {position}
                      </Typography>
                      {organization && (
                        <Typography variant="subtitle1" className="text-gray-600 dark:text-gray-300">
                          {organization}
                        </Typography>
                      )}
                      {stack && stack.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {stack.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                maxWidth: "100px",
                                fontSize: "0.75rem",
                                backgroundColor: "rgba(0, 0, 0, 0.08)",
                                color: "rgba(0, 0, 0, 0.87)",
                                ".dark &": {
                                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                                  color: "white",
                                },
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </>
      )}
    </section>
  );
};

export default Experience;
