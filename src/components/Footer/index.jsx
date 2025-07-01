import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, FooterContent, IconContainer, IconLink } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <IconContainer>
                    <IconLink href="https://linkedin.com/in/franciscoflavio/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </IconLink>
                    <IconLink href="https://github.com/fflaviotito" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </IconLink>
                </IconContainer>
                <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
                <p>Realizado por Francisco Flávio</p>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
