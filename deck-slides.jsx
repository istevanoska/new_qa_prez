const {
    SlideRoot,
    useCountUp
} = window.Chrome;

/* ---------------- TITLE ---------------- */

window.TitleSlide = () => (

    <SlideRoot>

        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "70px",
                position: "relative",
                overflow: "hidden"
            }}
        >

            {/* MAIN GLOW */}

            <div
                style={{
                    position: "absolute",
                    width: "900px",
                    height: "900px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(142,164,255,0.18), transparent 70%)",
                    filter: "blur(50px)"
                }}
            />

            {/* SECONDARY GLOW */}

            <div
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(97,230,216,0.10), transparent 70%)",
                    bottom: "-120px",
                    right: "-100px",
                    filter: "blur(40px)"
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1300px"
                }}
            >

                {/* TOP LABEL */}

                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "32px"
                    }}
                >

                    <img
                        src="screenshots/finki_logo_white.png"
                        alt="FINKI"
                        style={{
                            height: "38px",
                            objectFit: "contain",
                            background: "transparent"
                        }}
                    />

                    <span
                        style={{
                            color: "rgba(255,255,255,0.28)",
                            fontSize: "22px",
                            fontWeight: "300",
                            lineHeight: 1
                        }}
                    >
                </span>

                    <img
                        src="screenshots/netcetera_logo_white.png"
                        alt="Netcetera"
                        style={{
                            height: "34px",
                            objectFit: "contain",
                            background: "transparent"
                        }}
                    />

                </div>

                {/* TITLE */}

                <h1
                    className="display"
                    style={{
                        fontSize: "clamp(52px,5vw,92px)",
                        lineHeight: "0.92",
                        maxWidth: "1500px",
                        margin: "0 auto",
                        letterSpacing: "-0.05em"
                    }}
                >

                    Evaluating the

                    <span
                        style={{
                            background:
                                "linear-gradient(90deg,#ffffff,#8EA4FF)",

                            WebkitBackgroundClip: "text",
                            color: "transparent",

                            marginLeft: "18px"
                        }}
                    >
        Impact of AI
    </span>

                    <br/>

                    on Software Quality Assurance

                </h1>
                {/* SUBTEXT */}

                <p
                    style={{
                        marginTop: "28px",
                        fontSize: "19px",
                        color: "rgba(255,255,255,0.62)",
                        lineHeight: "1.7",
                        maxWidth: "880px",
                        marginInline: "auto"
                    }}
                >
                    Manual, Exploratory, and Automated Testing
                    {/*Exploring manual, exploratory and automated testing*/}
                    {/*workflows while comparing traditional QA processes*/}
                    {/*with AI-assisted testing solutions.*/}
                </p>

                {/* TAGS */}

                <div
                    style={{
                        marginTop: "42px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "14px",
                        flexWrap: "wrap"
                    }}
                >

                    {
                        [
                            "AI Testing",
                            "Automation",
                            "Selenium",
                            "Exploratory QA"
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="glass"
                                style={{
                                    padding: "12px 22px",
                                    borderRadius: "999px",
                                    fontSize: "14px",
                                    color: "rgba(255,255,255,0.75)"
                                }}
                            >
                                {item}
                            </div>

                        ))
                    }

                </div>

                {/* MENTORS */}

                <div
                    style={{
                        marginTop: "42px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "18px",
                        flexWrap: "wrap"
                    }}
                >

                    {
                        [
                            "Savo Kostadinov",
                            "Biljana Mihajlovska",
                            "Nikola Gjurkovski"
                        ].map((mentor, index) => (

                            <div
                                key={index}
                                className="glass"
                                style={{
                                    padding: "14px 22px",
                                    borderRadius: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px"
                                }}
                            >

                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background:
                                            "linear-gradient(135deg,#8EA4FF,#61E6D8)",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        fontSize: "14px",
                                        fontWeight: "700",
                                        color: "#08111f"
                                    }}
                                >
                                    {mentor.charAt(0)}
                                </div>

                                <div
                                    style={{
                                        textAlign: "left"
                                    }}
                                >

                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        {mentor}
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.2em",
                                            color: "rgba(255,255,255,0.45)",
                                            marginTop: "3px"
                                        }}
                                    >
                                        PROJECT MENTOR
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    </SlideRoot>

)

/* ---------------- OVERVIEW ---------------- */

window.OverviewSlide = () => {

    const [hoveredTech, setHoveredTech] = React.useState(null);
    const [scanLine, setScanLine] = React.useState(0);

    React.useEffect(() => {
        const t = setInterval(() => setScanLine(n => (n + 1) % 7), 600);
        return () => clearInterval(t);
    }, []);

    const techniques = [
        { id: 0, name: "Exploratory Testing", color: "#61E6D8", short: "ET", desc: "Unscripted sessions focused on real user behaviour." },
        { id: 1, name: "Error Guessing", color: "#8EA4FF", short: "EG", desc: "Predicting failure points through tester intuition." },
        { id: 2, name: "Happy Path Testing", color: "#FFB86B", short: "HP", desc: "Validating ideal user flows and expected behaviour." },
        { id: 3, name: "Negative Testing", color: "#FF8DA1", short: "NT", desc: "Testing invalid inputs and unexpected scenarios." },
        { id: 4, name: "Boundary Value Analysis", color: "#A8FFD8", short: "BV", desc: "Testing system limits and edge conditions." },
        { id: 5, name: "Equivalence Partitioning", color: "#C4B5FD", short: "EP", desc: "Grouping inputs into equivalent classes." },
    ];

    const tools = [
        { id: 1, name: "Qase", color: "#61E6D8" },       // Test management
        { id: 2, name: "Dillinger", color: "#61E6D8" },
        { id: 3, name: "Excel", color: "#61E6D8" },
        { id: 4, name: "Canva", color: "#FFB86B" },      // Design
        { id: 5, name: "Taiga", color: "#61E6D8" },
        { id: 6, name: "IntelliJ", color: "#8EA4FF" },   // Development
        { id: 7, name: "WebStorm", color: "#8EA4FF" },
        { id: 8, name: "Selenium", color: "#8EA4FF" },
        { id: 9, name: "JUnit", color: "#8EA4FF" },
        { id: 10, name: "Vercel", color: "#FF8DA1" }     // Deployment
    ];

    return (

        <SlideRoot>

            <div
                style={{
                    height:"100%",
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr",
                    position:"relative",
                    overflow:"hidden"
                }}
            >

                {/* BG GLOWS */}

                <div
                    style={{
                        position:"absolute",
                        width:"700px",
                        height:"700px",
                        borderRadius:"50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.08), transparent 70%)",
                        right:"-100px",
                        top:"50%",
                        transform:"translateY(-50%)",
                        filter:"blur(60px)",
                        pointerEvents:"none"
                    }}
                />

                <div
                    style={{
                        position:"absolute",
                        width:"400px",
                        height:"400px",
                        borderRadius:"50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.10), transparent 70%)",
                        left:"10%",
                        bottom:"-60px",
                        filter:"blur(50px)",
                        pointerEvents:"none"
                    }}
                />

                {/* LEFT SIDE */}

                <div
                    style={{
                        padding:"44px 24px 44px 52px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        position:"relative",
                        zIndex:2
                    }}
                >

                    {/* LABEL */}

                    <div
                        style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"10px",
                            marginBottom:"20px"
                        }}
                    >

                        <span
                            style={{
                                width:"7px",
                                height:"7px",
                                borderRadius:"50%",
                                background:"#61E6D8",
                                boxShadow:"0 0 10px #61E6D8"
                            }}
                        />

                        <p
                            style={{
                                color:"#61E6D8",
                                letterSpacing:"0.45em",
                                fontSize:"10px",
                                fontWeight:600
                            }}
                        >
                            PROJECT OVERVIEW
                        </p>

                    </div>

                    {/* TITLE */}

                    <h1
                        className="display"
                        style={{
                            fontSize:"clamp(30px,3.8vw,56px)",
                            lineHeight:"0.95",
                            letterSpacing:"-0.04em",
                            marginBottom:"14px",
                            maxWidth:"620px"
                        }}
                    >
                        Testing beyond functionality,
                        <br/>

                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#fff,#8EA4FF)",
                                WebkitBackgroundClip:"text",
                                color:"transparent"
                            }}
                        >
                            through SCRUM on PrestaShop.
                        </span>

                    </h1>

                    {/* SUBTEXT */}

                    <p
                        style={{
                            color:"rgba(255,255,255,0.42)",
                            fontSize:"12px",
                            lineHeight:"1.65",
                            maxWidth:"460px",
                            marginBottom:"22px"
                        }}
                    >
                        Focused on user behavior, uncover usability issues, and validate edge cases.
                    </p>

                    {/* SCREENSHOT */}

                    <div
                        style={{
                            position:"relative",
                            height:"370px",
                            overflow:"hidden",
                            background:"#09111f",
                            borderRadius:"18px",
                            border:"1px solid rgba(255,255,255,0.08)",
                            boxShadow:"0 25px 70px rgba(0,0,0,0.45)"
                        }}
                    >

                        {/* IMAGE */}

                        <img
                            src="screenshots/prestashop-home.png"
                            alt="PrestaShop"
                            style={{
                                width:"100%",
                                height:"100%",
                                objectFit:"cover",
                                opacity:"0.95",
                                transform:"scale(1.02)"
                            }}
                        />

                        {/* OVERLAY */}

                        <div
                            style={{
                                position:"absolute",
                                inset:0,
                                background:
                                    `
                                    linear-gradient(
                                        to bottom,
                                        rgba(3,7,18,0.08),
                                        rgba(3,7,18,0.42)
                                    )
                                    `
                            }}
                        />

                        {/* SCAN LINE */}

                        <div
                            style={{
                                position:"absolute",
                                left:0,
                                right:0,
                                height:"2px",
                                background:"rgba(97,230,216,0.9)",
                                top:`${(scanLine / 6) * 100}%`,
                                transition:"top 0.6s linear",
                                boxShadow:"0 0 18px rgba(97,230,216,0.9)"
                            }}
                        />

                        {/* SCAN GLOW */}

                        <div
                            style={{
                                position:"absolute",
                                left:0,
                                right:0,
                                height:"70px",
                                top:`calc(${(scanLine / 6) * 100}% - 35px)`,
                                background:
                                    `
                                    linear-gradient(
                                        to bottom,
                                        transparent,
                                        rgba(97,230,216,0.14),
                                        transparent
                                    )
                                    `,
                                transition:"top 0.6s linear"
                            }}
                        />

                        {/* BUG */}

                        <div
                            style={{
                                position:"absolute",
                                top:"16px",
                                right:"16px",
                                background:"rgba(255,107,122,0.16)",
                                border:"1px solid rgba(255,107,122,0.4)",
                                borderRadius:"999px",
                                padding:"7px 14px",
                                fontSize:"10px",
                                letterSpacing:"0.14em",
                                color:"#FF8DA1",
                                backdropFilter:"blur(14px)",
                                fontWeight:"600"
                            }}
                        >
                            ⚠ BUG DETECTED
                        </div>

                        {/* QA CARD */}

                        <div
                            style={{
                                position:"absolute",
                                bottom:"18px",
                                left:"18px",
                                background:"rgba(8,17,31,0.58)",
                                border:"1px solid rgba(255,255,255,0.08)",
                                backdropFilter:"blur(18px)",
                                borderRadius:"18px",
                                padding:"14px 18px",
                                maxWidth:"260px"
                            }}
                        >

                            <div
                                style={{
                                    color:"#61E6D8",
                                    fontSize:"10px",
                                    letterSpacing:"0.18em",
                                    marginBottom:"8px"
                                }}
                            >
                                QA ANALYSIS
                            </div>

                            <div
                                style={{
                                    fontSize:"14px",
                                    lineHeight:"1.5",
                                    color:"rgba(255,255,255,0.78)"
                                }}
                            >
                                Exploratory testing identified
                                inconsistencies in filtering
                                and product rendering.
                            </div>

                        </div>

                        {/* STATUS BAR */}

                        <div
                            style={{
                                position:"absolute",
                                bottom:0,
                                left:0,
                                right:0,
                                background:"rgba(8,17,31,0.96)",
                                padding:"9px 16px",
                                display:"flex",
                                justifyContent:"space-between",
                                alignItems:"center",
                                borderTop:"1px solid rgba(255,255,255,0.06)"
                            }}
                        >

                            <span
                                style={{
                                    fontFamily:"monospace",
                                    fontSize:"10px",
                                    color:"rgba(97,230,216,0.72)"
                                }}
                            >
                                $ exploratory-session active
                            </span>

                            <span
                                style={{
                                    fontSize:"10px",
                                    color:"rgba(255,255,255,0.28)"
                                }}
                            >
                                sprint 01
                            </span>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div
                    style={{
                        padding:"44px 52px 44px 24px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        position:"relative",
                        zIndex:2
                    }}
                >

                    {/* APPROACH */}

                    <div
                        style={{
                            marginBottom:"28px"
                        }}
                    >

                        <p
                            style={{
                                color:"rgba(255,255,255,0.3)",
                                fontSize:"9px",
                                letterSpacing:"0.4em",
                                marginBottom:"14px"
                            }}
                        >
                            TESTING APPROACH
                        </p>

                        <div
                            style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:"8px"
                            }}
                        >

                            {
                                [
                                    {
                                        icon:"⏱",
                                        label:"Session-based exploratory testing"
                                    },
                                    {
                                        icon:"📋",
                                        label:"Manual testing without predefined scripts"
                                    },
                                    {
                                        icon:"👤",
                                        label:"Focus on real user behaviour and edge cases"
                                    }
                                ].map((item,i)=>(

                                    <div
                                        key={i}
                                        style={{
                                            display:"flex",
                                            alignItems:"center",
                                            gap:"12px",
                                            padding:"10px 16px",
                                            borderRadius:"12px",
                                            background:"rgba(255,255,255,0.04)",
                                            border:"1px solid rgba(255,255,255,0.07)"
                                        }}
                                    >

                                        <span
                                            style={{
                                                fontSize:"16px",
                                                flexShrink:0
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        <span
                                            style={{
                                                color:"rgba(255,255,255,0.78)",
                                                fontSize:"13px"
                                            }}
                                        >
                                            {item.label}
                                        </span>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    {/* TECHNIQUES + TOOLS */}

                    <div>

                        {/* TECHNIQUES */}

                        <p
                            style={{
                                color:"rgba(255,255,255,0.3)",
                                fontSize:"9px",
                                letterSpacing:"0.4em",
                                marginBottom:"14px"
                            }}
                        >
                            TESTING TECHNIQUES
                        </p>

                        <div
                            style={{
                                display:"grid",
                                gridTemplateColumns:"1fr 1fr",
                                gap:"8px",
                                marginBottom:"22px"
                            }}
                        >

                            {
                                techniques.map((t)=>(

                                    <div
                                        key={t.id}
                                        onMouseEnter={() => setHoveredTech(t.id)}
                                        onMouseLeave={() => setHoveredTech(null)}
                                        style={{
                                            padding:"12px 14px",
                                            borderRadius:"12px",
                                            background:
                                                hoveredTech === t.id
                                                    ? `${t.color}12`
                                                    : "rgba(255,255,255,0.04)",

                                            border:
                                                hoveredTech === t.id
                                                    ? `1px solid ${t.color}50`
                                                    : "1px solid rgba(255,255,255,0.07)",

                                            transition:"all 0.2s ease",
                                            position:"relative",
                                            overflow:"hidden"
                                        }}
                                    >

                                        <div
                                            style={{
                                                display:"flex",
                                                alignItems:"center",
                                                gap:"10px",
                                                marginBottom:
                                                    hoveredTech === t.id
                                                        ? "6px"
                                                        : "0"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width:"28px",
                                                    height:"28px",
                                                    borderRadius:"8px",
                                                    background:`${t.color}18`,
                                                    border:`1px solid ${t.color}35`,
                                                    display:"flex",
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    flexShrink:0
                                                }}
                                            >

                                                <span
                                                    style={{
                                                        fontSize:"10px",
                                                        fontWeight:800,
                                                        color:t.color,
                                                        fontFamily:"monospace"
                                                    }}
                                                >
                                                    {t.short}
                                                </span>

                                            </div>

                                            <span
                                                style={{
                                                    color:
                                                        hoveredTech === t.id
                                                            ? "#fff"
                                                            : "rgba(255,255,255,0.7)",

                                                    fontSize:"12px",
                                                    fontWeight:
                                                        hoveredTech === t.id
                                                            ? 600
                                                            : 400
                                                }}
                                            >
                                                {t.name}
                                            </span>

                                        </div>

                                        {
                                            hoveredTech === t.id && (

                                                <p
                                                    style={{
                                                        color:"rgba(255,255,255,0.5)",
                                                        fontSize:"10px",
                                                        lineHeight:"1.5",
                                                        margin:0,
                                                        paddingLeft:"38px"
                                                    }}
                                                >
                                                    {t.desc}
                                                </p>

                                            )
                                        }

                                    </div>

                                ))
                            }

                        </div>

                        {/* TOOLS */}

                        <p
                            style={{
                                color:"rgba(255,255,255,0.3)",
                                fontSize:"9px",
                                letterSpacing:"0.4em",
                                marginBottom:"14px"
                            }}
                        >
                            TOOLS USED
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "14px",
                                alignItems: "flex-start"
                            }}
                        >
                            {
                                [
                                    {
                                        category: "Test Management & Documentation",
                                        color: "#61E6D8",
                                        tools: ["Qase", "Taiga", "Excel", "Dillinger"]
                                    },
                                    {
                                        category: "Development & Automation",
                                        color: "#8EA4FF",
                                        tools: ["IntelliJ", "Selenium", "JUnit"]
                                    },
                                    {
                                        category: "Presentation",
                                        color: "#FFB86B",
                                        tools: ["Canva", "React", "WebStorm", "Tailwind CSS", "Babel"],
                                        subcategories: [
                                            {
                                                category: "Deployment",
                                                color: "#FF8DA1",
                                                tools: ["Vercel"]
                                            }
                                        ]
                                    },
                                ].map((group, index) => (

                                    <div
                                        key={index}
                                        style={{
                                            border: `1px solid ${group.color}45`,
                                            background: `${group.color}10`,
                                            borderRadius: "18px",
                                            padding: "12px 14px",
                                            boxShadow: `0 0 18px ${group.color}12`
                                        }}
                                    >

                                        <p
                                            style={{
                                                color: group.color,
                                                fontSize: "9px",
                                                letterSpacing: "0.18em",
                                                marginBottom: "10px",
                                                fontWeight: "700",
                                                textTransform: "uppercase"
                                            }}
                                        >
                                            {group.category}
                                        </p>

                                        {/* Main tools wrapper now houses both tools and subcategories */}
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                                flexWrap: "wrap",
                                                alignItems: "center"
                                            }}
                                        >
                                            {
                                                group.tools.map((tool, i) => (

                                                    <div
                                                        key={i}
                                                        style={{
                                                            padding: "8px 12px",
                                                            borderRadius: "12px",
                                                            background: "rgba(255,255,255,0.06)",
                                                            border: "1px solid rgba(255,255,255,0.08)",
                                                            color: "rgba(255,255,255,0.82)",
                                                            fontSize: "11px",
                                                            fontWeight: 600,
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        {tool}
                                                    </div>

                                                ))
                                            }

                                            {/* Subcategories render inside the flex row, directly after the tools list */}
                                            {
                                                group.subcategories?.map((sub, subIndex) => (

                                                    <div
                                                        key={subIndex}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            padding: "4px 10px",
                                                            borderRadius: "12px",
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: `1px solid ${sub.color}35`,
                                                            marginLeft: "4px"
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                color: sub.color,
                                                                fontSize: "8px",
                                                                letterSpacing: "0.18em",
                                                                fontWeight: "700",
                                                                textTransform: "uppercase",
                                                                margin: 0
                                                            }}
                                                        >
                                                            {sub.category}
                                                        </p>

                                                        <div style={{ display: "flex", gap: "8px" }}>
                                                            {
                                                                sub.tools.map((tool, i) => (

                                                                    <div
                                                                        key={i}
                                                                        style={{
                                                                            padding: "8px 12px",
                                                                            borderRadius: "12px",
                                                                            background: "rgba(255,255,255,0.06)",
                                                                            border: "1px solid rgba(255,255,255,0.08)",
                                                                            color: "rgba(255,255,255,0.82)",
                                                                            fontSize: "11px",
                                                                            fontWeight: 600
                                                                        }}
                                                                    >
                                                                        {tool}
                                                                    </div>

                                                                ))
                                                            }
                                                        </div>
                                                    </div>

                                                ))
                                            }
                                        </div>

                                    </div>

                                ))
                            }
                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>

    );

}

/* ---------------- SPRINT 1 — bold editorial style ---------------- */

window.Sprint1Slide = () => {

    const [tick, setTick] = React.useState(0);
    React.useEffect(() => {
        const t = setInterval(() => setTick(n => (n + 1) % 4), 900);
        return () => clearInterval(t);
    }, []);

    const cursor = ["_","_","_","_"].map((_, i) => i === tick ? "█" : " ").join("");

    const steps = [
        {
            icon: "◎",
            label: "STEP 01",
            text: "Explored 8+ components of the PrestaShop demo - navigation, filters, cart, authentication and more."
        },
        {
            icon: "⬡",
            label: "STEP 02",
            text: "Applied 7 testing techniques: exploratory, error guessing, boundary value analysis and more."
        },
        {
            icon: "⊡",
            label: "STEP 03",
            text: "Discovered 32+ defects and wrote 50+ different formal test cases - baseline for AI comparison."
        },
    ];

    return (
        <SlideRoot>
            <div style={{
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                position: "relative",
                overflow: "hidden",

            }}>

                {/* BG glow right */}
                <div style={{
                    position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(97,230,216,0.09), transparent 70%)",
                    right: "-150px", bottom: "-150px", filter: "blur(60px)", pointerEvents: "none", zIndex: 0
                }} />
                <div style={{
                    position: "absolute", width: "400px", height: "400px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(142,164,255,0.10), transparent 70%)",
                    left: "30%", top: "-80px", filter: "blur(50px)", pointerEvents: "none", zIndex: 0
                }} />

                {/* ───── LEFT ───── */}
                <div style={{
                    padding: "52px 48px 52px 56px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 2
                }}>

                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#61E6D8", boxShadow: "0 0 10px #61E6D8", flexShrink: 0 }} />
                            <p style={{ color: "#61E6D8", letterSpacing: "0.45em", fontSize: "11px", fontWeight: 600 }}>SPRINT 01</p>
                        </div>

                        <h1 className="display" style={{
                            fontSize: "clamp(46px, 5.5vw, 84px)",
                            lineHeight: "0.93",
                            letterSpacing: "-0.04em",
                            marginBottom: "24px"
                        }}>
                            Explore.<br/>
                            Document.<br/>
                            <span style={{ background: "linear-gradient(90deg,#fff,#61E6D8)", WebkitBackgroundClip: "text", color: "transparent" }}>
                                Report bugs.
                            </span>
                        </h1>

                        <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "14px", lineHeight: "1.7", maxWidth: "800px", marginBottom: "0px" }}>
                            The tester navigates the PrestaShop app like a real user -
                            no scripts, just instinct and technique.
                            Every defect is logged, classified, and tracked.
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Testing performed on:
                            <br></br> <p style={{fontWeight: 'bold'}}>Laptop &middot; Tablet &middot; Mobile devices</p>
                            From a real user perspective to defect documentation.
                        </p>
                    </div>

                    {/* MOCK DEFECT REPORT CARD */}
                    <div style={{
                        background: "rgba(8,17,31,0.85)",
                        border: "1px solid rgba(97,230,216,0.20)",
                        borderRadius: "18px",
                        padding: "20px 24px",
                        maxWidth: "460px",
                        boxShadow: "0 0 40px rgba(97,230,216,0.06)",
                        zoom:1.2
                    }}>
                        {/* card header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(142,164,255,0.15)", border: "1px solid rgba(142,164,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>🐛</div>
                                <div>
                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>PRESTASHOP DEMO</div>
                                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>DEFECT REPORT</div>
                                </div>
                            </div>
                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>32 reports</div>
                        </div>

                        {/* defect line */}
                        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "12px 16px", marginBottom: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                                <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#61E6D8", letterSpacing: "0.05em" }}>BUG-007</span>
                                <span style={{ fontSize: "10px", padding: "2px 10px", borderRadius: "999px", background: "rgba(255,107,122,0.15)", border: "1px solid rgba(255,107,122,0.3)", color: "#FF6B7A" }}>CRITICAL</span>
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px" }}>Quick View displays incorrect product data</div>
                        </div>

                        {/* terminal line */}
                        <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(97,230,216,0.55)", letterSpacing: "0.05em" }}>
                            $ running exploratory session {cursor}
                        </div>
                    </div>

                </div>

                {/* ───── RIGHT ───── */}
                <div style={{
                    padding: "52px 48px 52px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "0",
                    position: "relative",
                    zIndex: 2,
                    zoom:1.2
                }}>

                    {/* VERIFIED LABEL */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#61E6D8", boxShadow: "0 0 10px #61E6D8" }} />
                        <p style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.4em", fontSize: "10px" }}>32+ DEFECTS · 50+ TEST CASES</p>
                    </div>

                    {/* STEPS */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {steps.map((step, i) => (
                            <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? "28px" : "0", position: "relative" }}>

                                {/* connector line */}
                                {i < steps.length - 1 && (
                                    <div style={{ position: "absolute", left: "19px", top: "44px", width: "1px", height: "calc(100% - 16px)", background: "rgba(255,255,255,0.08)" }} />
                                )}

                                {/* icon box */}
                                <div style={{
                                    width: "40px", height: "40px", borderRadius: "12px",
                                    background: "rgba(142,164,255,0.08)",
                                    border: "1px solid rgba(142,164,255,0.18)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "16px", color: "#8EA4FF", flexShrink: 0
                                }}>
                                    {step.icon}
                                </div>

                                <div>
                                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", letterSpacing: "0.3em", marginBottom: "6px" }}>{step.label}</p>
                                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: "1.55" }}>{step.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* METRICS ROW */}
                    <div style={{
                        marginTop: "36px",
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: "12px"
                    }}>
                        {[
                            { val: "32+",    label: "Defects" },
                            { val: "50+",    label: "Test Cases" },
                            { val: "~90min", label: "Avg. Session" },
                        ].map((m, i) => (
                            <div key={i} style={{
                                padding: "14px 16px",
                                borderRadius: "14px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                textAlign: "center"
                            }}>
                                <div className="display" style={{ fontSize: "26px", color: "#fff", letterSpacing: "-0.03em" }}>{m.val}</div>
                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", marginTop: "4px" }}>{m.label.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>

                    {/* TECHNIQUES PILLS */}
                    <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {["Exploratory","Error Guessing","Happy Path","Negative","Boundary Value Analysis","Equivalence Partitioning","State Transition"].map((t, i) => (
                            <div key={i} style={{
                                padding: "6px 13px", borderRadius: "999px",
                                background: "rgba(97,230,216,0.07)",
                                border: "1px solid rgba(97,230,216,0.15)",
                                color: "rgba(97,230,216,0.8)", fontSize: "11px"
                            }}>{t}</div>
                        ))}
                    </div>

                </div>

            </div>
        </SlideRoot>
    );
}

/* ---------------- SPRINT 2 — editorial style + slideshow ---------------- */

window.Sprint2Slide = () => {

    const [slide, setSlide] = React.useState(0);
    const [animated, setAnimated] = React.useState(false);
    const [transitioning, setTransitioning] = React.useState(false);
    const totalSlides = 3;

    React.useEffect(() => {
        const t = setTimeout(() => setAnimated(true), 300);
        return () => clearTimeout(t);
    }, []);

    // React.useEffect(() => {
    //     const t = setInterval(() => goTo((slide + 1) % totalSlides), 5000);
    //     return () => clearInterval(t);
    // }, [slide]);

    const goTo = (n) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => { setSlide(n); setTransitioning(false); }, 280);
    };

    // ── SLIDE 0: Head-to-Head Comparison ──
    const ComparisonSlide = () => {
        const manualRows = [
            { label: "Time to create TCs", val: "12–15 hrs",    hl: false },
            { label: "Test cases",          val: "~20–34",       hl: false },
            { label: "Coverage type",       val: "deep, narrow", hl: true, hlColor: "#8EA4FF" },
            { label: "Edge cases",          val: "limited",      hl: false },
            { label: "Bug depth",           val: "high",         hl: true, hlColor: "#61E6D8" },
            { label: "Traceability",        val: "manual",       hl: false },
        ];
        const aiRows = [
            { label: "Time to create TCs", val: "~25 min – 8 hrs",   hl: false },
            { label: "Test cases",          val: "~21–36",            hl: false },
            { label: "Coverage type",       val: "broad, structured", hl: true, hlColor: "#61E6D8" },
            { label: "Edge cases",          val: "high",              hl: true, hlColor: "#61E6D8" },
            { label: "Bug depth",           val: "medium",            hl: false },
            { label: "Traceability",        val: "100% to bug IDs",   hl: true, hlColor: "#61E6D8" },
        ];

        const rowStyle = (row, last) => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 0",
            borderBottom: !last ? "1px solid rgba(255,255,255,0.05)" : "none",
        });

        const valStyle = (row) => ({
            fontSize: "11px",
            fontWeight: row.hl ? 600 : 400,
            color: row.hl ? row.hlColor : "rgba(255,255,255,0.85)",
            background: row.hl ? `${row.hlColor}18` : "transparent",
            border: row.hl ? `1px solid ${row.hlColor}35` : "1px solid transparent",
            padding: row.hl ? "2px 7px" : "2px 0",
            borderRadius: "6px",
        });

        return (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", zoom:1.5 }}>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.35em", flexShrink: 0 }}>
                    HEAD-TO-HEAD COMPARISON
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", flex: 1, minHeight: 0 }}>
                    {/* Manual */}
                    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexShrink: 0 }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8EA4FF" }} />
                            <span style={{ fontSize: "12px", fontWeight: 700 }}>Manual testing</span>
                        </div>
                        {manualRows.map((row, i) => (
                            <div key={i} style={rowStyle(row, i === manualRows.length - 1)}>
                                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>{row.label}</span>
                                <span style={valStyle(row)}>{row.val}</span>
                            </div>
                        ))}
                    </div>
                    {/* AI */}
                    <div style={{ background: "rgba(97,230,216,0.04)", border: "1px solid rgba(97,230,216,0.15)", borderRadius: "14px", padding: "14px 16px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexShrink: 0 }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#61E6D8" }} />
                            <span style={{ fontSize: "12px", fontWeight: 700 }}>AI-assisted testing</span>
                        </div>
                        {aiRows.map((row, i) => (
                            <div key={i} style={rowStyle(row, i === aiRows.length - 1)}>
                                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>{row.label}</span>
                                <span style={valStyle(row)}>{row.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // ── SLIDE 1: Bugs by approach + Severity donuts ──
    const BugsSlide = () => {

        const barData = [
            { label: "Leonida · tablet", manual: 16, ai: 11 },
            { label: "Tamara · desktop",  manual: 9,  ai: 11 },
            { label: "Ilina · mobile",  manual: 14, ai: 14 },
        ];

        const donutData = [
            {
                title: "Leonida · tablet · 16 bugs",
                segments: [
                    { pct: 12.5, color: "#d9534f", label: "Critical 12.5%" },
                    { pct: 31.3, color: "#e0a03b", label: "High 31.3%" },
                    { pct: 37.5, color: "#4d83d8", label: "Medium 37.5%" },
                    { pct: 18.8, color: "#8c8c86", label: "Low 18.8%" },
                ],
            },
            {
                title: "Tamara · desktop · 11 bugs",
                segments: [
                    { pct: 18, color: "#d9534f", label: "Critical 18%" },
                    { pct: 45, color: "#e0a03b", label: "High 45%" },
                    { pct: 27, color: "#4d83d8", label: "Medium 27%" },
                    { pct: 9,  color: "#8c8c86", label: "Low 9%" },
                ],
            },
            {
                title: "Ilina · mobile · 14 bugs",
                segments: [
                    { pct: 0,    color: "#d9534f", label: "Critical 0%" },
                    { pct: 35.7, color: "#e0a03b", label: "High 35.7%" },
                    { pct: 42.9, color: "#4d83d8", label: "Medium 42.9%" },
                    { pct: 21.4, color: "#8c8c86", label: "Low 21.4%" },
                ],
            },
        ];

        const radius = 44;
        const circumference = 2 * Math.PI * radius;
        const maxBug = 16;

        return (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", zoom:1.5 }}>

                {/* BAR CHART */}
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "12px 14px", flexShrink: 0 }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, marginBottom: "8px" }}>Bugs by approach</p>

                    {/* Legend */}
                    <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#243d78" }} />
                            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.72)" }}>Manual</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#4ca078" }} />
                            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.72)" }}>AI-assisted</span>
                        </div>
                    </div>

                    {/* Bars */}
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: "100px" }}>
                        {barData.map((item, i) => (
                            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                                <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "72px" }}>
                                    {/* Manual bar */}
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "72px", gap: "2px" }}>
                                        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{item.manual}</span>
                                        <div style={{ width: "28px", height: `${(item.manual / maxBug) * 52}px`, background: "#243d78", borderRadius: "4px 4px 0 0" }} />
                                    </div>
                                    {/* AI bar */}
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "72px", gap: "2px" }}>
                                        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{item.ai}</span>
                                        <div style={{ width: "28px", height: `${(item.ai / maxBug) * 52}px`, background: "#4ca078", borderRadius: "4px 4px 0 0" }} />
                                    </div>
                                </div>
                                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: "80px" }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DONUTS */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", flex: 1, minHeight: 0 }}>
                    {donutData.map((d, index) => {
                        let offset = 0;
                        return (
                            <div key={index} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "10px 12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <p style={{ textAlign: "center", fontSize: "9px", marginBottom: "6px", color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}>{d.title}</p>
                                <svg width="100" height="100" style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
                                    <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
                                    {d.segments.map((seg, i) => {
                                        const dash = (seg.pct / 100) * circumference;
                                        const el = (
                                            <circle
                                                key={i}
                                                cx="50" cy="50" r={radius}
                                                fill="none"
                                                stroke={seg.color}
                                                strokeWidth="14"
                                                strokeDasharray={`${dash} ${circumference}`}
                                                strokeDashoffset={-offset}
                                                strokeLinecap="butt"
                                            />
                                        );
                                        offset += dash;
                                        return el;
                                    })}
                                </svg>
                                <div style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "3px", width: "100%" }}>
                                    {d.segments.map((seg, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <div style={{ width: "7px", height: "7px", borderRadius: "2px", background: seg.color, flexShrink: 0 }} />
                                            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.62)" }}>{seg.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        );
    };

    // ── SLIDE 2: What each approach does better ──
    const WinsSlide = () => (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", zoom:1.5 }}>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.35em", flexShrink: 0 }}>
                WHAT EACH APPROACH DOES BETTER
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", flex: 1, minHeight: 0 }}>
                {[
                    { dot: "#8EA4FF", title: "Manual wins at", items: [
                            "Real user behaviour discovery",
                            "Precise functional defect reports",
                            "Tester intuition & context",
                            "Unexpected bug discovery",
                        ]},
                    { dot: "#61E6D8", title: "AI wins at", items: [
                            "Speed (~10× faster TCs)",
                            "Coverage breadth & structure",
                            "Edge cases & security scenarios",
                            "Regression-ready documentation",
                        ]},
                ].map((col, ci) => (
                    <div key={ci} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexShrink: 0 }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: col.dot }} />
                            <span style={{ fontSize: "12px", fontWeight: 700 }}>{col.title}</span>
                        </div>
                        {col.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "6px 0", borderBottom: ii < col.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                                <span style={{ color: col.dot, fontSize: "12px" }}>✓</span>
                                <span style={{ color: "rgba(255,255,255,0.68)", fontSize: "11px" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ background: "rgba(97,230,216,0.06)", border: "1px solid rgba(97,230,216,0.2)", borderRadius: "12px", padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", flexShrink: 0 }}>
                <span style={{ fontSize: "14px", flexShrink: 0 }}>💡</span>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#61E6D8" }}>Best strategy:</strong> explore manually first to discover unknown bugs, then use AI to formalise findings into structured, traceable, regression-ready test cases.
                </p>
            </div>
        </div>
    );

    const slides = [ComparisonSlide, BugsSlide, WinsSlide];
    const labels = ["Head-to-Head", "Bug Analytics", "AI vs Manual"];
    const ActiveSlide = slides[slide];

    return (
        <SlideRoot>
            <div style={{
                height: "100%",
                display: "grid",
                gridTemplateColumns: "0.85fr 1.15fr",
                position: "relative",
                overflow: "hidden",
            }}>

                {/* BG GLOWS */}
                <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(97,230,216,0.09), transparent 70%)", right: "-100px", bottom: "-100px", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
                <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(142,164,255,0.10), transparent 70%)", left: "5%", top: "-60px", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />

                {/* ── LEFT ── */}
                <div style={{ padding: "42px 32px 42px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 }}>

                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#61E6D8", boxShadow: "0 0 10px #61E6D8", flexShrink: 0 }} />
                            <p style={{ color: "#61E6D8", letterSpacing: "0.45em", fontSize: "11px", fontWeight: 600 }}>SPRINT 02</p>
                        </div>

                        <h1 className="display" style={{ fontSize: "clamp(32px,3.8vw,58px)", lineHeight: "0.93", letterSpacing: "-0.04em", marginBottom: "16px" }}>
                            Manual vs<br/>
                            AI-assisted<br/>
                            <span style={{ background: "linear-gradient(90deg,#fff,#61E6D8)", WebkitBackgroundClip: "text", color: "transparent" }}>
                                by the numbers.
                            </span>
                        </h1>

                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: "1.65", maxWidth: "340px" }}>
                            Exploratory · charter-based · AI-generated test cases · 3 testers combined across Desktop, Tablet and Mobile.
                        </p>
                    </div>

                    {/* METRICS */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            { val: "~40%",  label: "EFFORT SAVED" },
                            { val: "10×",   label: "FASTER TC CREATION" },
                            { val: "+22%",  label: "DEFECT COVERAGE" },
                            { val: "100%",  label: "TRACEABILITY (AI)" },
                        ].map((m, i) => (
                            <div key={i} style={{ padding: "12px 10px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
                                <div className="display" style={{ fontSize: "clamp(18px,2vw,28px)", color: "#fff", letterSpacing: "-0.02em" }}>{m.val}</div>
                                <div style={{ fontSize: "8px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", marginTop: "3px" }}>{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* PLATFORM PILLS */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", letterSpacing: "0.3em", marginBottom: "3px" }}>PLATFORMS TESTED</p>
                        {[
                            { icon: "🖥", label: "Desktop — Tamara",   color: "#8EA4FF" },
                            { icon: "📱", label: "Tablet — Leonida",   color: "#61E6D8" },
                            { icon: "📱", label: "Mobile — Ilina",     color: "#FFB86B" },
                        ].map((p, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: `1px solid ${p.color}25`, zoom:1.2 }}>
                                <span style={{ fontSize: "12px" }}>{p.icon}</span>
                                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>{p.label}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ── RIGHT: SLIDESHOW ── */}
                <div style={{ padding: "28px 40px 28px 16px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>

                    {/* TABS */}
                    <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexShrink: 0, zoom:1.3 }}>
                        {labels.map((lbl, i) => (
                            <button key={i} onClick={() => goTo(i)} style={{
                                padding: "5px 12px", borderRadius: "999px", fontSize: "10px", cursor: "pointer",
                                background: slide === i ? "rgba(97,230,216,0.15)" : "rgba(255,255,255,0.05)",
                                border: slide === i ? "1px solid rgba(97,230,216,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                color: slide === i ? "#61E6D8" : "rgba(255,255,255,0.45)",
                                transition: "all 0.2s ease",
                            }}>{lbl}</button>
                        ))}
                        <div style={{ marginLeft: "auto", display: "flex", gap: "5px", alignItems: "center" }}>
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <div key={i} onClick={() => goTo(i)} style={{
                                    width: slide === i ? "18px" : "5px", height: "5px", borderRadius: "99px",
                                    background: slide === i ? "#61E6D8" : "rgba(255,255,255,0.2)",
                                    cursor: "pointer", transition: "all 0.3s ease",
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* SLIDE CONTENT */}
                    <div style={{
                        flex: 1,
                        minHeight: 0,
                        opacity: transitioning ? 0 : 1,
                        transform: transitioning ? "translateY(8px)" : "translateY(0)",
                        transition: "opacity 0.28s ease, transform 0.28s ease",
                    }}>
                        <ActiveSlide />
                    </div>

                </div>

            </div>
        </SlideRoot>
    );
}
/* ---------------- SPRINT 3 ---------------- */

window.Sprint3Slide = () => {

    const [slide, setSlide] = React.useState(0);
    const [transitioning, setTransitioning] = React.useState(false);

    const [modIndex, setModIndex] = React.useState(0);
    const [modTransitioning, setModTransitioning] = React.useState(false);

    const totalSlides = 3;

    // React.useEffect(() => {
    //     const t = setInterval(() => {
    //         goTo((slide + 1) % totalSlides);
    //     }, 6000);
    //
    //     return () => clearInterval(t);
    //
    // }, [slide]);

    const goTo = (n) => {

        if (transitioning) return;

        setTransitioning(true);

        setTimeout(() => {

            setSlide(n);
            setTransitioning(false);

        }, 260);

    };

    const goToMod = (n) => {

        if (modTransitioning) return;

        setModTransitioning(true);

        setTimeout(() => {

            setModIndex(n);
            setModTransitioning(false);

        }, 220);

    };
    React.useEffect(() => {

        const t = setInterval(() => {

            setModTransitioning(true);

            setTimeout(() => {

                setModIndex(prev => (prev + 1) % 7);
                setModTransitioning(false);

            }, 220);

        }, 3500);

        return () => clearInterval(t);

    }, []);

    /* -------------------------------- CHART SLIDE -------------------------------- */

    const ChartSlide = () => {

        const modules = [
            { label: "Navigation", manual: 35, ai: 120 },
            { label: "Shopping Cart", manual: 35, ai: 90 },
            { label: "Search & Filter", manual: 30, ai: 225 },
            { label: "Checkout", manual: 25, ai: 120 },
            { label: "Error Handling", manual: 15, ai: 30 },
            { label: "Product Details", manual: 95, ai: 55 },
            { label: "User Account", manual: 80, ai: 50 },
        ];

        const maxVal = 250;

        return (

            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    zoom: 1.08,
                    transform: "translateY(-2px)"
                }}
            >

                {/* TITLE */}

                <p
                    style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "10px",
                        letterSpacing: "0.35em"
                    }}
                >
                    TIME PER MODULE — MANUAL (1 TEST) VS AI-ASSISTED (REST)
                </p>

                {/* CHART CARD */}

                <div
                    style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "24px",
                        padding: "20px 24px 18px 24px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >

                    {/* LEGEND */}

                    <div
                        style={{
                            display: "flex",
                            gap: "18px",
                            alignItems: "center",
                            marginBottom: "16px"
                        }}
                    >

                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "3px",
                                    background: "#3758a5"
                                }}
                            />

                            <span
                                style={{
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.7)"
                                }}
                            >
                            Manual (1 test)
                        </span>

                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "3px",
                                    background: "#61E6D8"
                                }}
                            />

                            <span
                                style={{
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.7)"
                                }}
                            >
                            AI-assisted (remaining tests)
                        </span>

                        </div>

                    </div>

                    {/* CHART */}

                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            padding: "10px 12px 0 12px",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                            position: "relative"
                        }}
                    >

                        {/* GRID LINES */}

                        {
                            [50,100,150,200,250].map((n, i) => (

                                <div
                                    key={i}
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom: `${(n/maxVal)*100}%`,
                                        borderTop: "1px solid rgba(255,255,255,0.05)"
                                    }}
                                />

                            ))
                        }

                        {
                            modules.map((m, i) => (

                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "100%"
                                    }}
                                >

                                    {/* VALUES */}

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-end",
                                            gap: "6px",
                                            height: "290px"
                                        }}
                                    >

                                        {/* MANUAL */}

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                height: "100%"
                                            }}
                                        >

                                        <span
                                            style={{
                                                fontSize: "10px",
                                                color: "#8EA4FF",
                                                marginBottom: "6px",
                                                fontWeight: 700
                                            }}
                                        >
                                            {m.manual}m
                                        </span>

                                            <div
                                                style={{
                                                    width: "26px",
                                                    height: `${(m.manual / maxVal) * 240}px`,
                                                    borderRadius: "8px 8px 0 0",
                                                    background: "linear-gradient(to top,#27498d,#3f67bf)"
                                                }}
                                            />

                                        </div>

                                        {/* AI */}

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                height: "100%"
                                            }}
                                        >

                                        <span
                                            style={{
                                                fontSize: "10px",
                                                color: "#61E6D8",
                                                marginBottom: "6px",
                                                fontWeight: 700
                                            }}
                                        >
                                            {m.ai}m
                                        </span>

                                            <div
                                                style={{
                                                    width: "26px",
                                                    height: `${(m.ai / maxVal) * 240}px`,
                                                    borderRadius: "8px 8px 0 0",
                                                    background: "linear-gradient(to top,#299a8e,#61E6D8)"
                                                }}
                                            />

                                        </div>

                                    </div>

                                    {/* LABEL */}

                                    <span
                                        style={{
                                            marginTop: "12px",
                                            fontSize: "10px",
                                            color: "rgba(255,255,255,0.52)",
                                            textAlign: "center",
                                            maxWidth: "70px",
                                            lineHeight: "1.3"
                                        }}
                                    >
                                    {m.label}
                                </span>

                                </div>

                            ))
                        }

                    </div>

                    {/* FOOTNOTE */}

                    <p
                        style={{
                            marginTop: "12px",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.4)",
                            fontStyle: "italic"
                        }}
                    >
                        AI time includes debugging & refinement. Product Details &
                        User Account became faster per TC after refactor.
                    </p>

                </div>

            </div>

        );

    };
    /* -------------------------------- MODULES SLIDE -------------------------------- */

    const ModulesSlide = () => {

        const modules = [

            {
                icon: "⬜",
                name: "Navigation & UI",
                rows: [
                    ["Manual (TC.03)", "~35 min"],
                    ["AI (TC.01, 02, 04)", "~2 hrs total"],
                    ["AI stability", "needed sync fixes", "#FFB86B"],
                    ["AI maintainability", "needed refactor", "#FFB86B"]
                ]
            },

            {
                icon: "🛒",
                name: "Shopping Cart",
                rows: [
                    ["Manual (cart)", "~35 min"],
                    ["AI (4 tests)", "~1.5 hrs total"],
                    ["AI stability", "stale fixes", "#FFB86B"],
                    ["AI maintainability", "good after refactor", "#61E6D8"]
                ]
            },

            {
                icon: "🔍",
                name: "Search & Filter",
                rows: [
                    ["Manual (TC.05)", "~30 min"],
                    ["AI (TC.06–12)", "~3 hrs 45 min"],
                    ["AI stability", "most complex", "#FF8DA1"],
                    ["AI maintainability", "repeated logic", "#FF8DA1"]
                ]
            },
            {
                icon: "💳",
                name: "Checkout",
                rows: [
                    ["Manual (empty cart)", "~25 min"],
                    ["AI (5 tests)", "~2 hrs total"],
                    ["AI stability", "iframe + dynamic UI", "#FF8DA1"],
                    ["AI maintainability", "good after refactor", "#61E6D8"]
                ]
            },

            {
                icon: "⚠️",
                name: "Error Handling",
                rows: [
                    ["Manual (empty cart)", "~15 min"],
                    ["AI (4 tests)", "~30 min"],
                    ["AI stability", "needed corrections", "#FFB86B"],
                    ["Fastest AI module", "✓", "#61E6D8"]
                ]
            },

            {
                icon: "👕",
                name: "Product Details",
                rows: [
                    ["Manual (TC32)", "~95 min/TC"],
                    ["AI (TC29–31)", "~55 min/TC"],
                    ["AI speed gain", "42% faster", "#61E6D8"],
                    ["Framework used", "FrameUtils, WaitUtils"]
                ]
            },

            {
                icon: "👤",
                name: "User Account",
                rows: [
                    ["Manual (TC28)", "~80 min/TC"],
                    ["AI (TC24–27)", "~50 min/TC"],
                    ["AI speed gain", "37% faster", "#61E6D8"],
                    ["M1/M2 fix needed", "frame context loss", "#FF8DA1"]
                ]
            },

        ];

        const mod = modules[modIndex];

        return (

            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    zoom: 1.18,
                    transform: "translateY(-8px)"
                }}
            >

                <p
                    style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "10px",
                        letterSpacing: "0.35em"
                    }}
                >
                    PER-MODULE BREAKDOWN
                </p>

                {/* TOP NAV */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}
                >

                    <button
                        onClick={() => goToMod((modIndex - 1 + modules.length) % modules.length)}
                        className="btn" style={{
                        fontSize: "10px"
                    }}
                    >
                        ←
                    </button>

                    {
                        modules.map((_, i) => (

                            <div
                                key={i}
                                onClick={() => goToMod(i)}
                                style={{
                                    width: modIndex === i ? "22px" : "6px",
                                    height: "6px",
                                    borderRadius: "999px",
                                    background:
                                        modIndex === i
                                            ? "#FFB86B"
                                            : "rgba(255,255,255,0.2)",

                                    cursor: "pointer",
                                    transition: "all 0.25s ease"
                                }}
                            />

                        ))
                    }

                    <button
                        onClick={() => goToMod((modIndex + 1) % modules.length)}
                        className="btn"
                        style={{
                            fontSize: "10px"
                        }}
                    >
                        →
                    </button>

                    <span
                        style={{
                            marginLeft: "auto",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.35)"
                        }}
                    >
                        {modIndex + 1}/{modules.length}
                    </span>

                </div>

                {/* CARD */}

                <div
                    style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "24px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        opacity: modTransitioning ? 0 : 1,
                        transform:
                            modTransitioning
                                ? "translateY(10px)"
                                : "translateY(0)",

                        transition: "all 0.22s ease"
                    }}
                >

                    {/* HEADER */}

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            marginBottom: "20px"
                        }}
                    >

                        <div
                            style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg,#ffffff,#d7b8ff)"
                            }}
                        />

                        <div>

                            <div
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 700
                                }}
                            >
                                {mod.name}
                            </div>

                            <div
                                style={{
                                    fontSize: "10px",
                                    color: "rgba(255,255,255,0.3)",
                                    letterSpacing: "0.2em",
                                    marginTop: "2px"
                                }}
                            >
                                MODULE {modIndex + 1} OF {modules.length}
                            </div>

                        </div>

                    </div>

                    {/* ROWS */}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >

                        {
                            mod.rows.map((row, i) => (

                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "14px 16px",
                                        borderRadius: "12px",
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.06)"
                                    }}
                                >

                                    <span
                                        style={{
                                            fontSize: "13px",
                                            color: "rgba(255,255,255,0.55)"
                                        }}
                                    >
                                        {row[0]}
                                    </span>

                                    <span
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                            color:
                                                row[2]
                                                    ? row[2]
                                                    : "rgba(255,255,255,0.9)",

                                            background:
                                                row[2]
                                                    ? `${row[2]}15`
                                                    : "transparent",

                                            border:
                                                row[2]
                                                    ? `1px solid ${row[2]}35`
                                                    : "none",

                                            padding:
                                                row[2]
                                                    ? "6px 12px"
                                                    : "0",

                                            borderRadius: "10px"
                                        }}
                                    >
                                        {row[1]}
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* BOTTOM MODULES */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7,1fr)",
                        gap: "8px"
                    }}
                >

                    {
                        [
                            ["⬜","Navigation"],
                            ["🛒","Shopping"],
                            ["🔍","Search"],
                            ["💳","Checkout"],
                            ["⚠️","Error"],
                            ["👤","User"]
                        ].map((m, i) => (

                            <div
                                key={i}
                                style={{
                                    height: "52px",
                                    borderRadius: "12px",
                                    background:
                                        modIndex === i
                                            ? "rgba(255,184,107,0.12)"
                                            : "rgba(255,255,255,0.03)",

                                    border:
                                        modIndex === i
                                            ? "1px solid rgba(255,184,107,0.35)"
                                            : "1px solid rgba(255,255,255,0.06)",

                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "2px"
                                }}
                            >

                                <span style={{ fontSize: "12px" }}>{m[0]}</span>

                                <span
                                    style={{
                                        fontSize: "9px",
                                        color:
                                            modIndex === i
                                                ? "#FFB86B"
                                                : "rgba(255,255,255,0.45)"
                                    }}
                                >
                                    {m[1]}
                                </span>

                            </div>

                        ))
                    }

                </div>

            </div>

        );

    };

    /* -------------------------------- AI VS MANUAL -------------------------------- */

    const FinalSlide = () => (

        <div
            style={{
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                zoom: 1.18
            }}
        >

            {
                [
                    {
                        title: "Manual strengths",
                        color: "#8EA4FF",
                        items: [
                            "Better bug intuition",
                            "Real user perspective",
                            "More precise bug reports",
                            "Faster single test creation"
                        ]
                    },
                    {
                        title: "AI strengths",
                        color: "#61E6D8",
                        items: [
                            "Mass TC generation",
                            "Structured coverage",
                            "Regression-ready flows",
                            "Better scalability"
                        ]
                    }
                ].map((c, i) => (

                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "24px",
                            padding: "24px"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "18px"
                            }}
                        >

                            <div
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: c.color
                                }}
                            />

                            <span
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 700
                                }}
                            >
                                {c.title}
                            </span>

                        </div>

                        {
                            c.items.map((item, ii) => (

                                <div
                                    key={ii}
                                    style={{
                                        padding: "12px 0",
                                        borderBottom:
                                            ii < c.items.length - 1
                                                ? "1px solid rgba(255,255,255,0.05)"
                                                : "none",

                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: "14px"
                                    }}
                                >
                                    ✓ {item}
                                </div>

                            ))
                        }

                    </div>

                ))
            }

        </div>

    );

    const slides = [ChartSlide, ModulesSlide, FinalSlide];
    const labels = ["Time Chart", "Per Module", "AI vs Manual"];

    const ActiveSlide = slides[slide];

    return (

        <SlideRoot
            style={{
                zoom: 1.15
            }}
        >

            <div
                style={{
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "0.85fr 1.15fr",
                    overflow: "hidden",
                    position: "relative"
                }}
            >

                {/* LEFT */}

                <div
                    style={{
                        padding: "42px 34px 42px 48px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >

                    <div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "24px"
                            }}
                        >

                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#FFB86B",
                                    boxShadow: "0 0 10px #FFB86B"
                                }}
                            />

                            <p
                                style={{
                                    color: "#FFB86B",
                                    letterSpacing: "0.45em",
                                    fontSize: "11px",
                                    fontWeight: 600
                                }}
                            >
                                SPRINT 03
                            </p>

                        </div>

                        <h1
                            className="display"
                            style={{
                                fontSize: "clamp(52px,5vw,82px)",
                                lineHeight: "0.92",
                                letterSpacing: "-0.05em",
                                marginBottom: "24px"
                            }}
                        >

                            Human-written
                            <br/>

                            vs AI-assisted
                            <br/>

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#fff,#FFB86B)",

                                    WebkitBackgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                automation.
                            </span>

                        </h1>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.45)",
                                fontSize: "14px",
                                lineHeight: "1.7",
                                maxWidth: "420px"
                            }}
                        >
                            Selenium · JUnit · Page Object Model ·
                            PrestaShop Demo · 7 modules analysed.
                        </p>

                    </div>

                    {/* METRICS */}

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "12px"
                        }}
                    >

                        {
                            [
                                ["7", "MODULES AUTOMATED", "#FFB86B"],
                                ["~37%", "AI FASTER (AVG)", "#61E6D8"],
                                ["100%", "HYBRID APPROACH", "#8EA4FF"],
                                ["POM", "PATTERN USED", "#FF8DA1"]
                            ].map((m, i) => (

                                <div
                                    key={i}
                                    style={{
                                        padding: "20px",
                                        borderRadius: "18px",
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)"
                                    }}
                                >

                                    <div
                                        className="display"
                                        style={{
                                            fontSize: "46px",
                                            color: m[2],
                                            marginBottom: "8px"
                                        }}
                                    >
                                        {m[0]}
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.25em",
                                            color: "rgba(255,255,255,0.35)"
                                        }}
                                    >
                                        {m[1]}
                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* RIGHT */}

                <div
                    style={{
                        padding: "26px 36px 26px 14px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >

                    {/* TOP TABS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "16px",

                        }}
                    >

                        {
                            labels.map((lbl, i) => (

                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    style={{
                                        padding: "10px 18px",
                                        borderRadius: "999px",
                                        border:
                                            slide === i
                                                ? "1px solid rgba(255,184,107,0.4)"
                                                : "1px solid rgba(255,255,255,0.08)",

                                        background:
                                            slide === i
                                                ? "rgba(255,184,107,0.12)"
                                                : "rgba(255,255,255,0.04)",

                                        color:
                                            slide === i
                                                ? "#FFB86B"
                                                : "rgba(255,255,255,0.45)",

                                        fontSize: "12px",
                                        cursor: "pointer"
                                    }}
                                >
                                    {lbl}
                                </button>

                            ))
                        }

                    </div>

                    {/* CONTENT */}

                    <div
                        style={{
                            flex: 1,
                            opacity: transitioning ? 0 : 1,
                            transform:
                                transitioning
                                    ? "translateY(8px)"
                                    : "translateY(0)",

                            transition:
                                "opacity 0.26s ease, transform 0.26s ease"
                        }}
                    >

                        <ActiveSlide />

                    </div>

                </div>

            </div>

        </SlideRoot>

    );

};
/* ---------------- AUTOMATION DEMO ---------------- */

window.AutomationDemoSlide = () => {

    return (

        <SlideRoot>

            <div
                style={{
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "0.9fr 1.1fr",
                    position: "relative",
                    overflow: "hidden"
                }}
            >

                {/* BG GLOWS */}

                <div
                    style={{
                        position: "absolute",
                        width: "800px",
                        height: "800px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.08), transparent 70%)",
                        right: "-180px",
                        top: "-100px",
                        filter: "blur(60px)"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.12), transparent 70%)",
                        left: "-120px",
                        bottom: "-120px",
                        filter: "blur(50px)"
                    }}
                />

                {/* GRID */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                            `,
                        backgroundSize: "120px 120px",
                        opacity: 0.35
                    }}
                />

                {/* LEFT */}

                <div
                    style={{
                        padding: "60px 40px 60px 60px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 2
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "24px"
                        }}
                    >

                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#61E6D8",
                                boxShadow: "0 0 12px #61E6D8"
                            }}
                        />

                        <p
                            style={{
                                color: "#61E6D8",
                                letterSpacing: "0.4em",
                                fontSize: "11px",
                                fontWeight: "600"
                            }}
                        >
                            AUTOMATION DEMO
                        </p>

                    </div>

                    <h1
                        className="display"
                        style={{
                            fontSize: "clamp(42px,4.6vw,74px)",
                            lineHeight: "0.9",
                            letterSpacing: "-0.055em",
                            marginBottom: "18px",
                            maxWidth: "580px"
                        }}
                    >

                        Executing
                        <br/>

                        automated
                        <br/>

                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#ffffff,#8EA4FF)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Selenium tests.
                        </span>

                    </h1>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            maxWidth: "430px",
                            marginBottom: "24px"
                        }}
                    >
                        Live execution of automated UI test cases
                        showcasing validation flows, assertions and
                        real-time browser interaction.
                    </p>

                    {/* FEATURES */}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            maxWidth: "520px"
                        }}
                    >

                        {
                            [
                                "Automated browser interaction using Selenium",
                                "Real execution of regression-ready test cases",
                                "Assertions, waits and validation checks",
                                "Demonstration of stable automation workflows",
                                "Tests executed directly from the framework"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        padding: "10px 14px",
                                        borderRadius: "12px",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(18px)"
                                    }}
                                >

                                    <div
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "8px",
                                            background: "rgba(97,230,216,0.12)",
                                            border: "1px solid rgba(97,230,216,0.25)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#61E6D8",
                                            fontSize: "12px",
                                            flexShrink: 0
                                        }}
                                    >
                                        ✓
                                    </div>

                                    <span
                                        style={{
                                            color: "rgba(255,255,255,0.78)",
                                            fontSize: "12px"
                                        }}
                                    >
                                        {item}
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* RIGHT VIDEO */}

                <div
                    style={{
                        padding: "10px 60px 42px 12px",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 2
                    }}
                >

                    <div
                        style={{
                            width: "100%",
                            height: "88%",
                            borderRadius: "28px",
                            overflow: "hidden",
                            position: "relative",
                            background: "#09111f",
                            border: "1px solid rgba(97,230,216,0.18)",
                            boxShadow:
                                `
                                0 30px 90px rgba(0,0,0,0.55),
                                0 0 60px rgba(97,230,216,0.08)
                                `
                        }}
                    >

                        {/* TOP BAR */}

                        <div
                            style={{
                                height: "56px",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 18px",
                                gap: "10px",
                                background:
                                    "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
                            }}
                        >

                            <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF6B7A" }} />
                            <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFB86B" }} />
                            <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#61E6D8" }} />

                            <div
                                style={{
                                    marginLeft: "16px",
                                    padding: "10px 18px",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.45)",
                                    width: "100%"
                                }}
                            >
                                automation-demo.local
                            </div>

                        </div>

                        {/* VIDEO */}

                        <video
                            src="Demo-automation.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                            style={{
                                width: "100%",
                                height: "calc(100% - 56px)",
                                objectFit: "cover"
                            }}
                        />

                        {/* BADGE */}

                        <div
                            style={{
                                position: "absolute",
                                top: "74px",
                                left: "18px",
                                padding: "8px 16px",
                                borderRadius: "999px",
                                background: "rgba(97,230,216,0.12)",
                                border: "1px solid rgba(97,230,216,0.28)",
                                backdropFilter: "blur(18px)",
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                color: "#61E6D8",
                                fontWeight: "700"
                            }}
                        >
                            LIVE TEST EXECUTION
                        </div>

                        {/* FOOTER */}

                        <div
                            style={{
                                position: "absolute",
                                bottom: "18px",
                                right: "18px",
                                padding: "10px 16px",
                                borderRadius: "999px",
                                background: "rgba(8,17,31,0.78)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                fontSize: "10px",
                                color: "rgba(255,255,255,0.5)",
                                letterSpacing: "0.18em",
                                backdropFilter: "blur(18px)"
                            }}
                        >
                            SELENIUM · JUNIT · AUTOMATION FRAMEWORK
                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>

    );

}
/* ---------------- COMPARISON ---------------- */

window.ComparisonSlide = () => (

    <SlideRoot>

        <div
            style={{
                padding: "90px 70px",
                height: "100%"
            }}
        >

            <p
                style={{
                    color: "#61E6D8",
                    letterSpacing: "0.4em",
                    fontSize: "11px",
                    marginBottom: "24px"
                }}
            >
                COMPARISON
            </p>

            <h1
                className="display"
                style={{
                    fontSize: "clamp(48px,5vw,92px)",
                    lineHeight: "0.92",
                    marginBottom: "60px"
                }}
            >
                Traditional QA
                <br/>
                vs AI-assisted QA
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "30px"
                }}
            >

                <div
                    className="glass"
                    style={{
                        flex: 1,
                        padding: "38px",
                        borderRadius: "30px"
                    }}
                >

                    <h2
                        style={{
                            fontSize: "30px",
                            marginBottom: "30px"
                        }}
                    >
                        Traditional QA
                    </h2>

                    <div
                        style={{
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: "2",
                            fontSize: "18px"
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
                        flex: 1,
                        padding: "38px",
                        borderRadius: "30px",
                        boxShadow: "0 0 60px rgba(97,230,216,0.08)"
                    }}
                >

                    <h2
                        style={{
                            fontSize: "30px",
                            marginBottom: "30px",
                            color: "#61E6D8"
                        }}
                    >
                        AI-assisted QA
                    </h2>

                    <div
                        style={{
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: "2",
                            fontSize: "18px"
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


window.ConclusionSlide = () => {

    const [slide, setSlide] = React.useState(0);
    const [transitioning, setTransitioning] = React.useState(false);
    const totalSlides = 3;

    // React.useEffect(() => {
    //     const t = setInterval(() => goTo((slide + 1) % totalSlides), 6000);
    //     return () => clearInterval(t);
    // }, [slide]);

    const goTo = (n) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => { setSlide(n); setTransitioning(false); }, 280);
    };

    // ── SLIDE 0: Key metrics + Manual vs AI wins ──
    const KeyTakeawaysSlide = () => (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.35em" }}>KEY TAKEAWAYS ACROSS ALL SPRINTS</p>

            {/* Metrics row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                {[
                    { val: "~37–42%", label: "FASTER WITH AI",     color: "#61E6D8" },
                    { val: "10×",     label: "FASTER TC CREATION",  color: "#8EA4FF" },
                    { val: "+22%",    label: "DEFECT COVERAGE",     color: "#FFB86B" },
                    { val: "100%",    label: "AI TRACEABILITY",     color: "#FF8DA1" },
                ].map((m, i) => (
                    <div key={i} style={{
                        padding: "14px 10px", borderRadius: "14px",
                        background: `${m.color}0A`,
                        border: `1px solid ${m.color}30`,
                        textAlign: "center",
                        zoom:1.5
                    }}>
                        <div className="display" style={{ fontSize: "clamp(18px,2vw,28px)", color: m.color, letterSpacing: "-0.02em" }}>{m.val}</div>
                        <div style={{ fontSize: "8px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.38)", marginTop: "4px" }}>{m.label}</div>
                    </div>
                ))}
            </div>

            {/* Manual vs AI wins */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", flex: 1, zoom: 1.4}}>
                {[
                    { dot: "#8EA4FF", title: "Where manual is irreplaceable", items: [
                            "Discovering unexpected, unknown bugs",
                            "iframe & sync stabilization",
                            "Page Object architecture design",
                            "Precise functional defect reports",
                            "Tester intuition & contextual judgment",
                            "Reusable helpers: FrameUtils, WaitUtils",
                        ]},
                    { dot: "#61E6D8", title: "Where AI gives the advantage", items: [
                            "Initial code generation (37–42% faster)",
                            "Bulk test case creation (10× faster)",
                            "CSS locator identification",
                            "Edge cases & security scenarios",
                            "Structured, regression-ready documentation",
                            "Complex validation logic",
                        ]},
                ].map((col, ci) => (
                    <div key={ci} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "16px 18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: col.dot }} />
                            <span style={{ fontSize: "12px", fontWeight: 700 }}>{col.title}</span>
                        </div>
                        {col.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 0", borderBottom: ii < col.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                                <span style={{ color: col.dot, fontSize: "11px" }}>✓</span>
                                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Insight note */}
            <div style={{ background: "rgba(97,230,216,0.06)", border: "1px solid rgba(97,230,216,0.18)", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "10px" }}>
                <span style={{ fontSize: "14px", flexShrink: 0 }}>💡</span>
                <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "11px", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#61E6D8" }}>Neither approach is sufficient alone.</strong> The winning pattern: AI generates the skeleton, human engineers the architecture. Best strategy: explore manually first, then use AI to formalise findings into structured, traceable test cases.
                </p>
            </div>
        </div>
    );

    // ── SLIDE 1: Who, when & why + Division of responsibilities ──
    const ResponsibilitiesSlide = () => (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.35em" }}>AI VS HUMAN — WHO, WHEN & WHY</p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px" }}>Optimal division of responsibilities and the best AI tool for each task</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", zoom:1.4 }}>
                {[
                    { dot: "#8EA4FF", title: "Human is required", items: [
                            "Page Object Model architecture",
                            "iframe & sync wait stabilization",
                            "Discovering unknown, unexpected bugs",
                            "Final validation & code review",
                            "Tester intuition & contextual reasoning",
                            "Helper methods: FrameUtils, WaitUtils",
                        ]},
                    { dot: "#61E6D8", title: "Ideal for AI", items: [
                            "Generating test code skeleton (37–42% faster)",
                            "Bulk test case creation (10× faster)",
                            "CSS locator identification",
                            "Edge cases & security scenarios",
                            "Regression-ready structured documentation",
                            "Complex validation logic",
                        ]},
                ].map((col, ci) => (
                    <div key={ci} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "16px 18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: col.dot }} />
                            <span style={{ fontSize: "12px", fontWeight: 700 }}>{col.title}</span>
                        </div>
                        {col.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 0", borderBottom: ii < col.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                                <span style={{ color: col.dot, fontSize: "11px" }}>✓</span>
                                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Optimal workflow */}
            <div style={{ background: "rgba(97,230,216,0.06)", border: "1px solid rgba(97,230,216,0.18)", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "10px" }}>
                <span style={{ fontSize: "14px", flexShrink: 0 }}>⇄</span>
                <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "11px", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#61E6D8" }}>Optimal workflow:</strong> Explore manually first → AI generates skeleton & test cases → Engineer builds POM architecture → AI fills in edge cases → Human finalizes, stabilizes & verifies. Neither AI nor human alone is enough — the win is in the synergy.
                </p>
            </div>
        </div>
    );

    // ── SLIDE 2: Which AI tool is best for what ──
    const AIToolsSlide = () => {
        const tools = [
            { name: "Claude (Anthropic)",   desc: "Test code generation, POM structures, complex Selenium scenarios, detailed analysis & refactoring",          tag: "code generation",    tagColor: "#8EA4FF" },
            { name: "ChatGPT / GPT-4o",     desc: "Test case writing, exploratory charter creation, bug report formatting, rapid scenario prototyping",          tag: "TC & documentation", tagColor: "#61E6D8" },
            { name: "GitHub Copilot",        desc: "Inline autocomplete in IDE, repetitive Selenium methods, fast assertion generation directly in code",          tag: "IDE integration",    tagColor: "#A8FFD8" },
            { name: "Gemini (Google)",       desc: "Log file analysis, quick documentation lookup, integration with Google Workspace reports",                     tag: "analysis & logs",    tagColor: "#FFB86B" },
            { name: "Perplexity / web AI",   desc: "Researching framework options, current Selenium/JUnit best practices, resolving specific errors",              tag: "research",           tagColor: "#FF8DA1" },
            { name: "Any AI model",          desc: "Should never replace the tester's final decision — AI makes mistakes with locators, waits, and iframe context", tag: "support only",       tagColor: "#888" },
        ];
        return (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.35em" }}>WHICH AI TOOL IS BEST FOR WHAT</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", flex: 1 }}>
                    {tools.map((t, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px", zoom:1.3 }}>
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>{t.name}</span>
                            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", lineHeight: "1.55", flex: 1, margin: 0 }}>{t.desc}</p>
                            <div style={{
                                display: "inline-block", padding: "3px 10px", borderRadius: "999px",
                                background: `${t.tagColor}18`, border: `1px solid ${t.tagColor}40`,
                                color: t.tagColor, fontSize: "9px", fontWeight: 600, letterSpacing: "0.05em",
                                alignSelf: "flex-start"
                            }}>{t.tag}</div>
                        </div>
                    ))}
                </div>
                {/* Optimal workflow */}
                <div style={{ background: "rgba(97,230,216,0.06)", border: "1px solid rgba(97,230,216,0.18)", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "10px", zoom:1.3 }}>
                    <span style={{ fontSize: "14px", flexShrink: 0 }}>⇄</span>
                    <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "11px", lineHeight: "1.6", margin: 0 }}>
                        <strong style={{ color: "#61E6D8" }}>Optimal workflow:</strong> Explore manually first → AI generates skeleton & test cases → Engineer builds POM architecture → AI fills in edge cases → Human finalizes, stabilizes & verifies. Neither AI nor human alone is enough — <strong style={{ color: "#fff" }}>the win is in the synergy.</strong>
                    </p>
                </div>
            </div>
        );
    };

    const slides = [KeyTakeawaysSlide, ResponsibilitiesSlide, AIToolsSlide];
    const labels = ["Key Takeaways", "Who & When", "AI Tools"];
    const ActiveSlide = slides[slide];

    return (
        <SlideRoot>
            <div style={{ height: "100%", display: "grid", gridTemplateColumns: "0.75fr 1.25fr", position: "relative", overflow: "hidden" }}>

                {/* BG GLOWS */}
                <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(97,230,216,0.08), transparent 70%)", right: "-150px", top: "-100px", filter: "blur(70px)", pointerEvents: "none", zIndex: 0 }} />
                <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(142,164,255,0.09), transparent 70%)", left: "0", bottom: "-80px", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

                {/* ── LEFT ── */}
                <div style={{ padding: "52px 36px 52px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2, zoom:1.1 }}>

                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#61E6D8", boxShadow: "0 0 10px #61E6D8", flexShrink: 0 }} />
                            <p style={{ color: "#61E6D8", letterSpacing: "0.45em", fontSize: "11px", fontWeight: 600 }}>SPRINT 1 · 2 · 3</p>
                        </div>

                        <h1 className="display" style={{ fontSize: "clamp(36px,4vw,60px)", lineHeight: "0.93", letterSpacing: "-0.04em", marginBottom: "22px" }}>
                            Final<br/>
                            Conclusion.<br/>
                            <span style={{ background: "linear-gradient(90deg,#fff,#61E6D8)", WebkitBackgroundClip: "text", color: "transparent" }}>
                                Key insights.
                            </span>
                        </h1>

                        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "12px", lineHeight: "1.7", maxWidth: "320px" }}>
                            Key takeaways across all sprints — test automation & exploratory testing.
                        </p>
                    </div>

                    {/* Sprint journey */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", letterSpacing: "0.3em", marginBottom: "4px" }}>SPRINT JOURNEY</p>
                        {[
                            { label: "Sprint 1", desc: "Exploratory testing · 32+ bugs · 25+ TCs",  color: "#61E6D8" },
                            { label: "Sprint 2", desc: "Manual vs AI · 3 testers · 3 platforms",     color: "#8EA4FF" },
                            { label: "Sprint 3", desc: "Selenium automation · 7 modules · ~37% AI+", color: "#FFB86B" },
                        ].map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "10px", background: `${s.color}08`, border: `1px solid ${s.color}22` }}>
                                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontSize: "11px", fontWeight: 700, color: s.color }}>{s.label}</div>
                                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final verdict */}
                    <div style={{ padding: "16px", borderRadius: "14px", background: "rgba(97,230,216,0.06)", border: "1px solid rgba(97,230,216,0.18)", marginTop: "10px" }}>
                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "8px", letterSpacing: "0.3em", marginBottom: "8px" }}>FINAL VERDICT</p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", lineHeight: "1.65", margin: 0 }}>
                            AI + Human together outperform either approach alone — every time.
                        </p>
                    </div>

                </div>

                {/* ── RIGHT: SLIDESHOW ── */}
                <div style={{ padding: "36px 48px 36px 16px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>

                    {/* TABS */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexShrink: 0, zoom:1.3}}>
                        {labels.map((lbl, i) => (
                            <button key={i} onClick={() => goTo(i)} style={{
                                padding: "6px 14px", borderRadius: "999px", fontSize: "11px", cursor: "pointer",
                                background: slide === i ? "rgba(97,230,216,0.15)" : "rgba(255,255,255,0.05)",
                                border: slide === i ? "1px solid rgba(97,230,216,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                color: slide === i ? "#61E6D8" : "rgba(255,255,255,0.45)",
                                transition: "all 0.2s ease"
                            }}>{lbl}</button>
                        ))}
                        <div style={{ marginLeft: "auto", display: "flex", gap: "6px", alignItems: "center" }}>
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <div key={i} onClick={() => goTo(i)} style={{
                                    width: slide === i ? "20px" : "6px", height: "6px", borderRadius: "99px",
                                    background: slide === i ? "#61E6D8" : "rgba(255,255,255,0.2)",
                                    cursor: "pointer", transition: "all 0.3s ease"
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* SLIDE CONTENT */}
                    <div style={{
                        flex: 1, minHeight: 0,
                        opacity: transitioning ? 0 : 1,
                        transform: transitioning ? "translateY(8px)" : "translateY(0)",
                        transition: "opacity 0.28s ease, transform 0.28s ease"
                    }}>
                        <ActiveSlide />
                    </div>

                </div>
            </div>
        </SlideRoot>
    );
}
/* ---------------- FINAL ---------------- */

window.FinalSlide = () => (

    <SlideRoot>

        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "70px"
            }}
        >

            <h1
                className="display"
                style={{
                    fontSize: "clamp(60px,7vw,130px)",
                    lineHeight: "0.95",
                    background: "linear-gradient(90deg,#fff,#61E6D8)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    maxWidth: "1100px"
                }}
            >
                Quality is
                <br/>
                never accidental.
            </h1>

            <p
                style={{
                    marginTop: "35px",
                    fontSize: "22px",
                    color: "rgba(255,255,255,0.6)"
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
    window.AutomationDemoSlide,
    window.ConclusionSlide,
    window.FinalSlide,

]