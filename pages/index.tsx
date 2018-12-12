import styled from "styled-components";

const Style = styled.div`
  color: ${props => props.theme.purple};
`;

const content = `lorem`;

const Home = () => <Style>{content}</Style>;

export default () => <Home />;
