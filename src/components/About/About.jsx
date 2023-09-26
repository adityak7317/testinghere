import React from "react";
import { Fade } from "react-reveal";

const style = {
  headerIcons: {
    padding: "0%",
    width: "150px",
    aspectRatio: "2/1",
    fontSize: "xx-large",
    borderRadius: "25px",
  },
};

const softSkills = [
  {
    no: 1,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Problem Solving",
    aboutSS:
      "I adeptly tackle intricate problems, especially as a software engineer, by innovatively resolving tough issues with practical solutions.",
  },
  {
    no: 2,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Adaptibility",
    aboutSS:
      "I skillfully adapt to change, technology and demands, learn fast and grow in a variety of scenarios to excel and assist in project success.",
  },
  {
    no: 3,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Team Player",
    aboutSS:
      "I like teaming up with others, believing in sharing ideas, cooperating, and contributing skills to reach our goals together.",
  },

  {
    no: 4,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Time Management",
    aboutSS:
      "I excel at efficiently managing my time as a full-stack developer, ensuring tasks are completed both effectively and on schedule.",
  },
];

const progressHeader = "18%";

const skillsProgress = [
  {
    name: "JavaScript",
    percentage: "70",
  },
  {
    name: "Python",
    percentage: "50",
  },
  {
    name: "Java",
    percentage: "30",
  },
  {
    name: "HTML",
    percentage: "90",
  },
  {
    name: "CSS",
    percentage: "90",
  },
  {
    name: "ReactJS",
    percentage: "70",
  },
  {
    name: "NodeJS",
    percentage: "50",
  },
  {
    name: "MySql",
    percentage: "70",
  },
  {
    name: "DJango",
    percentage: "60",
  },
];

export default function About() {
  return (
    <>
      <Fade bottom>
        {/* <div className="row">
        {softSkills.map((val, key) => (
          <>
            <div className="col-md-3"></div>
              <div class="card mb-3">
                <div class="p-1">
                  <div>
                    <div class="card-body p-0">
                      <h6 class="card-title m-0 p-0 text-center">
                        {val.headerSS}
                      </h6>
                      <span class="card-text">{val.aboutSS}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div> */}

        <div className="row" style={{ margin: "auto" }}>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <div className="row">
                <span>
                  Greetings, I'm Aditya Kumar, a seasoned Full Stack Developer
                  with two years of hands-on experience. My journey in the realm
                  of software craft has been a dynamic exploration, driven by a
                  passion for creating innovative digital solutions.
                </span>
                <div className="p-1"></div>
                <span>
                  Proficient in a spectrum of technologies, I specialize in
                  crafting seamless user experiences by skillfully blending the
                  power of ReactJS, HTML, CSS, and JavaScript. My backend
                  prowess encompasses Java, Python, Django, Node.js, and
                  Express.js, allowing me to construct robust foundations. I'm
                  well-versed in data management through MySQL and MongoDB,
                  ensuring integrity and accessibility.
                </span>

                <div className="p-1"></div>
                <span>
                  My portfolio is a testament to my commitment to functional
                  elegance. Each project reflects my dedication to innovation
                  and clean design. Join me in navigating the frontiers of
                  technology, where simplicity meets sophistication. Your
                  interest is greatly appreciated.
                </span>
                <div className="p-1"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-2 d-flex flex-column justify-content-center">
            {skillsProgress.map((val, key) => (
              <>
                <div className="progress progressBG0">
                  <div
                    className="progress-bar bg-dark progressBG1"
                    role="progressbar"
                    style={{ width: progressHeader }}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {val.name}
                  </div>

                  <div
                    className="progress-bar progressBG2"
                    role="progressbar"
                    style={{
                      width:
                        parseInt(val.percentage) -
                        parseInt(progressHeader) +
                        "%",
                    }}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="text-dark">{val.percentage}%</div>
                  </div>
                </div>
                <div className="p-2"></div>
              </>
            ))}
          </div>
        </div>
      </Fade>
    </>
  );
}
