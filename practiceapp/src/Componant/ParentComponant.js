import Button from '@mui/material/Button';
import React, { useState } from "react"
import ChildComponant from "./ChildComponant"
import Practice from "./Practice "
const Parentcomponant = () => {
    const [parent, setParent] = useState("")
    const [open, setOpen] = useState(false);
    const childCall = (res) => {
        console.log("gh", res)
    }
    const test = 'this is parent data'

    const handleClick = (data) => {
        setOpen(true)
    }
    return <>
        <Practice
            open={open}
            setOpen={setOpen}

        />
        {/* <ChildComponant
            data={test}
            passData={parent}
            parent={setParent}
            childCall={childCall}
        /> */}


        <Button variant="contained" color="success" onClick={handleClick}>
            Success
        </Button>
        <ul>
            <li></li>
        </ul>

    </>
}
export default Parentcomponant