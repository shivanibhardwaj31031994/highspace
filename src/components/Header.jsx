import React from "react"
import Avatar from "./MinorComponents/Avatar"


const Header = () => {
    return(
        <div className="d-flex bg-secondary header">
            <div className="p-2 mr-auto bg-info">Flex item 1</div>
            <div className="p-2 bg-warning">
                <ul className="list-group list-group-horizontal flex-row">
                    <li className="list-group-item flex-fill">About</li>
                    <li className="list-group-item flex-fill">Blog</li>
                    <li className="list-group-item flex-fill">Contact</li>
                </ul>
            </div>
            <Avatar />
        </div>
    );
}

export default Header;