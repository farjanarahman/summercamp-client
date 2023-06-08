import { useEffect } from "react";

const useTitle = title =>{
    useEffect(() =>{
        document.title = `RoboPlayground | ${title}`;
    }, [title])
};

export default useTitle;