import React from "react";
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>Informações </h4>
                            <ul className="links">
                                <li><a href="#">Termos de Uso</a></li>
                                <li><a href="#">Politica de Privacidade</a></li>
                                <li>© 2025 IFCE - Campus Crato -  Web 1</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        );
    }

}





