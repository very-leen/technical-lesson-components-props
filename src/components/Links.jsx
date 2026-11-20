import React from "react"
function Links({ github, linkedIn }) {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href={github} target="_blank">Github</a>
            <a href={linkedIn} target="_blank">LinkedIn</a>
        </div>
    )
}
export default Links;