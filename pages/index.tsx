import styled from "styled-components";
import Test from '../posts/test.mdx';

const Style = styled.div`
  color: ${props => props.theme.purple};
`;


const Home = () =>
  <Style>
    <Test/>
  </Style>;

export default () => <Home />;
