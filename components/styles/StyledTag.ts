import styled from './styled-components';

const StyledTag = styled.span`
  border: 2px solid ${props => props.theme.primaryPurple};
  border-radius: 16px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.primaryPurple};
`;

export default StyledTag;
