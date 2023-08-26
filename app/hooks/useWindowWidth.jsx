"use client"

import {useEffect, useState} from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Initial call to set initial window width
        handleResize();

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {width};
}


