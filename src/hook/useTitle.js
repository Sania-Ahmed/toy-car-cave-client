/* eslint-disable no-unused-vars */
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `cCave|${title}`;
    },[title])
}

export default useTitle ;