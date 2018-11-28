import styled from 'styled-components';

const Style = styled.div`
  color: ${props => props.theme.purple};
`;

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor urna, efficitur venenatis ante rutrum, suscipit commodo lectus. Praesent aliquam nisi vitae erat tempus blandit. Ut lobortis facilisis orci faucibus condimentum. Proin sit amet risus efficitur, pellentesque neque a, malesuada mauris. Nulla gravida, ligula sed gravida hendrerit, odio purus semper velit, a iaculis augue mi id nulla.
`;

const Home = () => <Style>{content}</Style>;

export default () => <Home />;
