const {
    SlideRoot,
    useCountUp
} = window.Chrome;

/* ---------------- TITLE ---------------- */

window.TitleSlide = () => (

    <SlideRoot>

        <div
            style={{
                height:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                padding:"90px 70px"
            }}
        >

            <p
                style={{
                    color:"#8EA4FF",
                    letterSpacing:"0.45em",
                    fontSize:"12px",
                    marginBottom:"28px"
                }}
            >
                FINKI x NETCETERA
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(58px,6vw,120px)",
                    lineHeight:"0.9",
                    maxWidth:"1200px"
                }}
            >
                Evaluating the
                <br/>
                Impact of AI on
                <br/>
                Software Quality
                <br/>
                Assurance
            </h1>

            <p
                style={{
                    marginTop:"35px",
                    fontSize:"22px",
                    color:"rgba(255,255,255,0.6)"
                }}
            >
                Manual • Exploratory • Automated Testing
            </p>

        </div>

    </SlideRoot>

)

/* ---------------- OVERVIEW ---------------- */

window.OverviewSlide = () => (

    <SlideRoot>

        <div
            style={{
                padding:"90px 70px",
                height:"100%"
            }}
        >

            <p
                style={{
                    color:"#61E6D8",
                    letterSpacing:"0.45em",
                    fontSize:"11px",
                    marginBottom:"24px"
                }}
            >
                PROJECT OVERVIEW
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(48px,5vw,92px)",
                    lineHeight:"0.92",
                    maxWidth:"1050px",
                    marginBottom:"30px"
                }}
            >
                Evaluating AI impact
                <br/>
                on software quality assurance.
            </h1>

            <p
                style={{
                    color:"rgba(255,255,255,0.55)",
                    fontSize:"20px",
                    maxWidth:"820px",
                    lineHeight:"1.7"
                }}
            >
                Through multiple development sprints we explored
                manual, exploratory and automated testing,
                while comparing traditional QA workflows
                with AI-assisted testing solutions.
            </p>

        </div>

    </SlideRoot>

)

/* ---------------- SPRINT 1 ---------------- */

window.Sprint1Slide = () => (

    <SlideRoot>

        <div
            style={{
                padding:"90px 70px",
                height:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                gap:"50px"
            }}
        >

            <div
                style={{
                    maxWidth:"620px"
                }}
            >

                <p
                    style={{
                        color:"#8EA4FF",
                        letterSpacing:"0.4em",
                        fontSize:"11px",
                        marginBottom:"24px"
                    }}
                >
                    SPRINT 01
                </p>

                <h1
                    className="display"
                    style={{
                        fontSize:"clamp(48px,5vw,92px)",
                        lineHeight:"0.92",
                        marginBottom:"30px"
                    }}
                >
                    Manual &
                    <br/>
                    Exploratory
                    <br/>
                    Testing
                </h1>

                <p
                    style={{
                        color:"rgba(255,255,255,0.58)",
                        fontSize:"20px",
                        lineHeight:"1.7"
                    }}
                >
                    Understanding the foundations of QA through
                    manual testing, exploratory testing,
                    and structured test case design.
                </p>

            </div>

            <div
                className="glass"
                style={{
                    width:"360px",
                    padding:"34px",
                    borderRadius:"30px",
                    transform:"rotate(3deg)"
                }}
            >

                <div
                    style={{
                        color:"rgba(255,255,255,0.68)",
                        lineHeight:"2",
                        fontSize:"18px"
                    }}
                >
                    • Introduction to QA
                    <br/>
                    • Writing Test Cases
                    <br/>
                    • Manual Testing
                    <br/>
                    • Exploratory Testing
                </div>

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- SPRINT 2 ---------------- */

window.Sprint2Slide = () => (

    <SlideRoot>

        <div
            style={{
                padding:"90px 70px",
                height:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                gap:"50px"
            }}
        >

            <div
                className="glass"
                style={{
                    width:"360px",
                    padding:"34px",
                    borderRadius:"30px",
                    transform:"rotate(-3deg)"
                }}
            >

                <div
                    style={{
                        color:"rgba(255,255,255,0.68)",
                        lineHeight:"2",
                        fontSize:"18px"
                    }}
                >
                    • Selenium Automation
                    <br/>
                    • API Testing
                    <br/>
                    • Bug Reporting
                    <br/>
                    • Test Execution
                </div>

            </div>

            <div
                style={{
                    maxWidth:"620px",
                    textAlign:"right"
                }}
            >

                <p
                    style={{
                        color:"#61E6D8",
                        letterSpacing:"0.4em",
                        fontSize:"11px",
                        marginBottom:"24px"
                    }}
                >
                    SPRINT 02
                </p>

                <h1
                    className="display"
                    style={{
                        fontSize:"clamp(48px,5vw,92px)",
                        lineHeight:"0.92",
                        marginBottom:"30px"
                    }}
                >
                    Automation
                    <br/>
                    & API
                    <br/>
                    Testing
                </h1>

                <p
                    style={{
                        color:"rgba(255,255,255,0.58)",
                        fontSize:"20px",
                        lineHeight:"1.7"
                    }}
                >
                    Building automated workflows using Selenium
                    and validating backend functionality with API testing.
                </p>

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- SPRINT 3 ---------------- */

window.Sprint3Slide = () => (

    <SlideRoot>

        <div
            style={{
                padding:"90px 70px",
                height:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                gap:"50px"
            }}
        >

            <div
                style={{
                    maxWidth:"620px"
                }}
            >

                <p
                    style={{
                        color:"#FFB86B",
                        letterSpacing:"0.4em",
                        fontSize:"11px",
                        marginBottom:"24px"
                    }}
                >
                    SPRINT 03
                </p>

                <h1
                    className="display"
                    style={{
                        fontSize:"clamp(48px,5vw,92px)",
                        lineHeight:"0.92",
                        marginBottom:"30px"
                    }}
                >
                    AI Testing
                    <br/>
                    Comparison
                    <br/>
                    & Analysis
                </h1>

                <p
                    style={{
                        color:"rgba(255,255,255,0.58)",
                        fontSize:"20px",
                        lineHeight:"1.7"
                    }}
                >
                    Comparing traditional QA workflows with
                    AI-assisted testing and analyzing
                    automation efficiency and accuracy.
                </p>

            </div>

            <div
                className="glass"
                style={{
                    width:"360px",
                    padding:"34px",
                    borderRadius:"30px",
                    transform:"rotate(3deg)"
                }}
            >

                <div
                    style={{
                        color:"rgba(255,255,255,0.68)",
                        lineHeight:"2",
                        fontSize:"18px"
                    }}
                >
                    • Automated Test Suites
                    <br/>
                    • AI-Assisted Testing
                    <br/>
                    • Result Comparison
                    <br/>
                    • QA Workflow Analysis
                </div>

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- COMPARISON ---------------- */

window.ComparisonSlide = () => (

    <SlideRoot>

        <div
            style={{
                padding:"90px 70px",
                height:"100%"
            }}
        >

            <p
                style={{
                    color:"#61E6D8",
                    letterSpacing:"0.4em",
                    fontSize:"11px",
                    marginBottom:"24px"
                }}
            >
                COMPARISON
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(48px,5vw,92px)",
                    lineHeight:"0.92",
                    marginBottom:"60px"
                }}
            >
                Traditional QA
                <br/>
                vs AI-assisted QA
            </h1>

            <div
                style={{
                    display:"flex",
                    gap:"30px"
                }}
            >

                <div
                    className="glass"
                    style={{
                        flex:1,
                        padding:"38px",
                        borderRadius:"30px"
                    }}
                >

                    <h2
                        style={{
                            fontSize:"30px",
                            marginBottom:"30px"
                        }}
                    >
                        Traditional QA
                    </h2>

                    <div
                        style={{
                            color:"rgba(255,255,255,0.65)",
                            lineHeight:"2",
                            fontSize:"18px"
                        }}
                    >
                        • Manual effort
                        <br/>
                        • Slower execution
                        <br/>
                        • Human-based analysis
                        <br/>
                        • Repetitive workflows
                    </div>

                </div>

                <div
                    className="glass"
                    style={{
                        flex:1,
                        padding:"38px",
                        borderRadius:"30px",
                        boxShadow:"0 0 60px rgba(97,230,216,0.08)"
                    }}
                >

                    <h2
                        style={{
                            fontSize:"30px",
                            marginBottom:"30px",
                            color:"#61E6D8"
                        }}
                    >
                        AI-assisted QA
                    </h2>

                    <div
                        style={{
                            color:"rgba(255,255,255,0.65)",
                            lineHeight:"2",
                            fontSize:"18px"
                        }}
                    >
                        • Faster automation
                        <br/>
                        • Improved efficiency
                        <br/>
                        • AI-generated insights
                        <br/>
                        • Reduced repetitive work
                    </div>

                </div>

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- MENTORS ---------------- */

window.MentorsSlide = () => (

    <SlideRoot>

        <div
            style={{
                height:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                padding:"90px 70px"
            }}
        >

            <p
                style={{
                    color:"#61E6D8",
                    letterSpacing:"0.45em",
                    fontSize:"12px",
                    marginBottom:"20px"
                }}
            >
                MENTORS
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(50px,6vw,110px)",
                    marginBottom:"60px"
                }}
            >
                Project Guidance
            </h1>

            <div
                style={{
                    display:"flex",
                    gap:"24px",
                    flexWrap:"wrap"
                }}
            >

                {
                    [
                        "Savo Kostadinov",
                        "Biljana Mihajlovska",
                        "Nikola Gjurkovski"
                    ].map((mentor,index)=>(

                        <div
                            key={index}
                            className="glass"
                            style={{
                                padding:"30px 36px",
                                borderRadius:"28px",
                                fontSize:"24px"
                            }}
                        >
                            {mentor}
                        </div>

                    ))
                }

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- FINAL ---------------- */

window.FinalSlide = () => (

    <SlideRoot>

        <div
            style={{
                height:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                padding:"70px"
            }}
        >

            <h1
                className="display"
                style={{
                    fontSize:"clamp(60px,7vw,130px)",
                    lineHeight:"0.95",
                    background:"linear-gradient(90deg,#fff,#61E6D8)",
                    WebkitBackgroundClip:"text",
                    color:"transparent",
                    maxWidth:"1100px"
                }}
            >
                Quality is
                <br/>
                never accidental.
            </h1>

            <p
                style={{
                    marginTop:"35px",
                    fontSize:"22px",
                    color:"rgba(255,255,255,0.6)"
                }}
            >
                AI & Software Quality Assurance
            </p>

        </div>

    </SlideRoot>

)

/* ---------------- SLIDES ---------------- */

window.Slides = [

    window.TitleSlide,

    window.OverviewSlide,

    window.Sprint1Slide,

    window.Sprint2Slide,

    window.Sprint3Slide,

    window.ComparisonSlide,

    window.MentorsSlide,

    window.FinalSlide

]