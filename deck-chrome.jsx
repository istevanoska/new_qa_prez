const {
    useEffect,
    useState
} = React;

function Particles(){

    return(

        <>
            {

                [...Array(35)].map((_,i)=>(

                    <div
                        key={i}
                        className="particle"
                        style={{

                            left:`${Math.random()*100}%`,
                            width:`${Math.random()*4+2}px`,
                            height:`${Math.random()*4+2}px`,
                            animationDuration:`${Math.random()*15+10}s`,
                            animationDelay:`-${Math.random()*20}s`

                        }}
                    />

                ))

            }
        </>

    )

}

function SlideRoot({children}){

    return(

        <section
            className="slide"
            style={{
                width:"100vw",
                height:"100vh",
                position:"relative",
                overflow:"hidden"
            }}
        >

            <Particles/>

            <div className="hero-glow"></div>

            <div className="grid"></div>

            <div
                style={{
                    position:"relative",
                    zIndex:2,
                    width:"100%",
                    height:"100%"
                }}
            >
                {children}
            </div>

        </section>

    )

}

function useCountUp(target,{active}){

    const [count,setCount] = useState(0);

    useEffect(()=>{

        if(!active) return;

        let current = 0;

        const interval = setInterval(()=>{

            current += Math.ceil(target / 50);

            if(current >= target){

                current = target;
                clearInterval(interval);

            }

            setCount(current);

        },30);

        return ()=>clearInterval(interval);

    },[active,target]);

    return count;

}

window.Chrome = {
    SlideRoot,
    useCountUp
}