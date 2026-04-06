"use client";

import { Experience as ExperienceT, fetchExperiences } from "@/lib/experienceData";
import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
      className="w-full pt-4 sm:pt-10 md:pt-40 overflow-hidden bg-slate-500 dark:bg-slate-600 text-black dark:text-white"
    >
      {state === "loading" && <h2>Loading experiences...</h2>}
      {state === "error" && <h2>Error while loading experiences...</h2>}
      {state === "success" && (
        <>
          <div className="col-md-12 mx-auto pb-10 pt-8">
            <div className="container mx-auto flex flex-col items-center">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 dark:border-pink-400">Experience</p>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <VerticalTimeline>
              {experiences.map(({ id, type, date, title, subtitle, tags }, index) => (
                <VerticalTimelineElement
                  key={index}
                  className={`vertical-timeline-element--${type}`}
                  date={date}
                  intersectionObserverProps={{
                    rootMargin: "0px 0px 0% 0px",
                    threshold: 0.1,
                  }}
                  iconStyle={{ background: type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", color: "#fff" }}
                  icon={type === "work" ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="text-xl font-semibold text-black">{title}</h3>
                  {subtitle && <h4 className="vertical-timeline-element-subtitle text-black">{subtitle}</h4>}
                  {tags && (
                    <Grid container spacing={1} className="pt-4 text-xs">
                      {tags.map((tag) => (
                        <Grid key={tag} size="auto">
                          <Chip label={tag} style={{ width: "100px", textOverflow: "ellipsis", overflow: "hidden" }} />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </>
      )}
    </section>
  );
};

export default Experience;
