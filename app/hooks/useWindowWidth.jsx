// Window object is not accessible on the Server Side so this is a way to force CSR on production

"use client"

import {useEffect, useState} from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return {width};
}


