
import ChildComponant from "./ChildComponant"
import React, { useState } from "react"
import Navbar from './Navbar';
// import SiginDailog from "./SiginDailog"
// import ProfileDailog from "./ProfileDailog";
const Parentcomponant = () => {
    // const [parent, setParent] = useState("")
    const [open, setOpen] = useState(false);
    const [data, setData] = useState()
    // const childCall = (res) => {
    //     console.log("gh", res)
    // }
    // const test = 'this is parent data'

    const parentCall = (dataAccess) => {
        setData(dataAccess)
        console.log("Parent Call", dataAccess)
        console.log("first name", parent.firstName)
    }
    return <>

        <Navbar
            setOpen={setOpen} />
        {/* <SiginDailog
            open={open}
            setOpen={setOpen}
            parent={parentCall}
        />
        <ProfileDailog
             open={open}
             setOpen={setOpen}
        /> */}

        <ul>
            <li >FirstName : {data?.firstName}</li>
            <li>Last Name : {data?.lastName}</li>
            <li> DOB : {data?.dob}</li>
            <li>State : {data?.state}</li>
            <li>Qualification :{data?.qualification}</li>
            <li>Pincode : {data?.pincode}</li>

        </ul>
        {/* <ChildComponant
            data={test}
            passData={parent}
            parent={setParent}
            childCall={childCall}
        /> */}
    </>
}
export default Parentcomponant


