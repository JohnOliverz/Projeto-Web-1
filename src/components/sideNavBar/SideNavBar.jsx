import React from "react";
import './SideNavBar.css';
import logo from '../../assets/bola2.svg';
import { Link } from "react-router-dom";

export class SideNavBar extends React.Component {
    render() {
        return (
            <>
                <aside className="sidebar">
                    <div className="sidebar-header">

                    <img className="logo" src={logo}/><h2>PlayerSpotlight</h2>
                    </div>
                    <ul className="sidebar-links">
                        <h4>
                            <span id="span-color">Menu Principal</span>
                            <div className="menu-separator"></div>
                        </h4>
                        <li>
                            <Link to="/"><span className="material-symbols-outlined">home</span>Home</Link>
                            <Link to="/favoritos"><span className="material-symbols-outlined">star</span>Favoritos</Link>
                            <Link to="#"><span className="material-symbols-outlined">info</span>Sobre</Link>
                        </li>
                    </ul>

                </aside>
            </>
        );
    }
}


