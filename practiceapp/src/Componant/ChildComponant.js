import { useState } from "react"

const ChildComponant = (props) => {
    const { data, passData, parent, childCall } = props
    console.log("parent data i child componet", data)
    // const [show, setShow] = useState("")
    const test1 = "this is child component"
    const handleclick = () => {
        parent(data)
        childCall(test1)

    }
    console.log("setdata", passData)
    return <>
        <h1>{passData}</h1>
        <button onClick={handleclick}>Show Data</button>
        <h1>heading tah</h1>

    </>
}
export default ChildComponant