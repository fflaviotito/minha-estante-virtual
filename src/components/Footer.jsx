import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
    background-color: #E1DBD9;
    width: 100%;
    padding: 16px 0;
    text-align: center;
    font-size: 0.85rem;
    border-top: 1px solid #ddd;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 4px;
`;

const IconLink = styled.a`
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #0077b5;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
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
        </FooterContainer>
    );
};

export default Footer;
