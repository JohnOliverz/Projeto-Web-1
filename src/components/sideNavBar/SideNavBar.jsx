import React from "react";
import './SideNavBar.css';
import { Link } from "react-router-dom";

export class SideNavBar extends React.Component {
    render() {
        return (
            <>
                <aside className="sidebar">
                    <div className="sidebar-header">

                    <span className="material-symbols-outlined" id="icon">circle</span><h2>Projeto</h2>
                    </div>
                    <ul className="sidebar-links">
                        <h4>
                            <span>Menu Principal</span>
                            <div className="menu-separator"></div>
                        </h4>
                        <li>
                            <Link to="/">
                            <span className="material-symbols-outlined">home</span>Home</Link>
                        </li>

                    </ul>

                </aside>
            </>
        );
    }

}


