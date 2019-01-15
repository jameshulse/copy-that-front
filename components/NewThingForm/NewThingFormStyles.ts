import styled from '../styles/styled-components';

const NewThingFormStyles = styled.div`
  box-shadow: ${props => props.theme.standardShadow};
  padding: 32px;
  border-radius: 8px;
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
  }
  label > span {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
  input, textarea {
    width: 100%;
  }

  button {
    margin-top: 8px;
  }
`;

export default NewThingFormStyles;
