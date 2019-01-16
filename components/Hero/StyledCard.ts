import styled from '../styles/styled-components';

const StyledCard = styled.div`
  box-shadow: ${props => props.theme.standardShadow};
  padding: 32px;
  border-radius: 16px;
  width: 50%;
  background-color: ${props => props.theme.notWhite};
`;

export default StyledCard;
