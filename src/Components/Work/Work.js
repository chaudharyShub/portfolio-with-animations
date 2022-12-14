import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import AnimationHero from '../AnimationHero/AnimationHero';
import { loadTopBar, workHeroHeading, scrollToTop, workHeroHeadingDark, workHeroHeadingLight } from '../Details';
import { StateContext } from '../../App';
import './Work.css';


function Work() {

    const context = useContext(StateContext);
    const style = context.state.style;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        loadTopBar(setProgress, 20, 500);
    }, []);

    return (
        <>
            <LoadingBar
                height={2}
                color={style.color}
                loaderSpeed={450}
                progress={progress}
            />
            <AnimationHero
                hero={style.glimpse}
                to={'work_main'}
                text={context.state.mode ? workHeroHeadingDark : workHeroHeadingLight}
                arrow={style.arrow}
            />
            <section className='work_main' style={{ color: style.color }}>
                <NavLink style={{ color: style.color }} to='personal'>Personal</NavLink>
                <p>/</p>
                <NavLink style={{ color: style.color }} to='professional'>Professional</NavLink>
            </section>
            <Outlet />
        </>
    );
}

export default Work;
