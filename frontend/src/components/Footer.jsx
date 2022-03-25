import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
// import GithubButtons from '../GithubButtons/GithubButtons';

// import { githubButtons } from '../../mock/data';

const Footer = () => {
    //   const { footer } = useContext(PortfolioContext);
    //   const { networks } = footer;
    // const { isEnabled } = githubButtons;

    return (
        <footer className="footer navbar-static-bottom">
            <Container>
                {/* <a href="#top" aria-label="Back To Top" className="back-to-top">
                    <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                </a> */}

                <hr />
                <p className="footer__text">
                      2022 © with ❤️ by{' '}
                    <a href="https://mhmdrameez.github.io/" target="_blank" rel="noopener noreferrer">
                        <u>mhmdrameez</u>
                    </a>
                </p>
                <br/>
                <a href="https://www.buymeacoffee.com/mhmdrameez" target="_blank">
                    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee"   />
                </a>

                {/* {isEnabled && <GithubButtons />} */}
            </Container>
        </footer>
    );
};

export default Footer;