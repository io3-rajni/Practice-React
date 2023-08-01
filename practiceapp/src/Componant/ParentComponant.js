import react, { useState } from "react"
import ChildComponant from "./ChildComponant"
const Parentcomponant = () => {
    const [parent, setParent] = useState("")
    const childCall = (res) => {
        console.log("gh", res)
    }
    const test = 'this is parent data'
    return <>
        {/* <ChildComponant
            data={test}
            passData={parent}
            parent={setParent}
            childCall={childCall}
        /> */}

    </>
}
export default Parentcomponant