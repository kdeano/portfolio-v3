import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

const Home = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div name="home" className="w-full h-screen bg-body">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <ScrollUpButton style={{ backgroundColor: "#db2777" }} ToggledStyle={{ opacity: 0.75 }} AnimationDuration={1000} />

                <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.3 }}>
                    <p className="pb-[.1rem] pl-1 text-pink-600">Hi, my name is</p>
                </motion.div>
                <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    <h1 className="pb-4 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kyle Dean</h1>
                </motion.div>
                <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
                    <h2 className="pb-2 text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
                </motion.div>
                <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.9 }}>
                    <p className="pl-1 text-[#8892b0] py-4 max-w-[700px]">
                        I'm a full-stack developer specialising in building and designing exceptional digital experiences. Currently, I'm
                        focused on building responsive full-stack web applications.
                    </p>
                </motion.div>

                <div>
                    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
                        <button className="ml-1 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 ease-in-out">
                            <Link className="group flex" onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
                                View Work{""}
                                <span className="group-hover:rotate-90 duration-300 ease-in-out">
                                    <HiArrowNarrowRight className="ml-4 mt-1" />
                                </span>
                            </Link>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
