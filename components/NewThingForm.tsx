import * as React  from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Button from './styles/StyledButton';
import styled from './styles/styled-components';

/*
 * CURRENT STATE OF THIS PAGE:
 * TODO images
 * TODO test
 */


const FormStyles = styled.div`
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

const CREATE_THAT_MUTATION = gql`
  mutation CREATE_THAT_MUTATION(
    $title: String!
    $description: String!
    $source: String!
    $tags: [String]!
    $skills: [String]!
    $difficulty: Difficulty!
  ) {
    createThat(
      title: $title
      description: $description
      source: $source
      tags: $tags
      skills: $skills
      difficulty: $difficulty
    ) {
      id
      title
      skills
      difficulty
      tags
    }
  }
`;

type Difficulty = 'HIGH' | 'MEDIUM' | 'LOW';

interface NewThingFormState {
  title: string;
  description: string;
  source: string;
  tags: string; // converted to array later
  skills: string; // convewrted to array later
  difficulty: Difficulty;
  // TODO image
};

const NewThingForm = () => {
  // TODO image
  const defaultState: NewThingFormState = {
    title: '',
    description: '',
    source: '',
    tags: '',
    skills: '',
    difficulty: 'MEDIUM',
  };

  const [state, setState] = React.useReducer(
    (
      state: Partial<NewThingFormState>,
      newState: Partial<NewThingFormState>,
    ) => ({ ...state, ...newState }),
    defaultState,
  );

  // TODO type this properly. Needs to match input props
  const handleChange: React.EventHandler<any> = ({ target }) => {
    setState({ [target.name]: target.value });
  };

  const formatToArray = (s: string) =>
    s.toLowerCase().split(', ').filter(s => s !== '');

  return (
  <FormStyles>
    <Mutation
      mutation={CREATE_THAT_MUTATION}
      variables={{
        ...state,
        // split strings into formatted arrays
        tags: formatToArray(state.tags),
        skills: formatToArray(state.skills),
      }}
    >
      {
        (createThat, { error, loading }) => {
          if (loading) return <p>Loading</p>
          if (error) return <p>Error: {error.message}</p>
          return (
            <form onSubmit={async e => {
              e.preventDefault();
              console.log('creating');
              console.log({
                ...state,
                tags: state.tags.toLowerCase().split(', '),
              });
              const res = await createThat();
              console.log('created: ', res);
            }}>
              <fieldset>
                <Input<'text', string>
                  name='title'
                  type='text'
                  value={state.title}
                  changeHandler={handleChange}
                />
                <Input<'textarea', string>
                  name='description'
                  type='textarea'
                  value={state.description}
                  changeHandler={handleChange}
                />
                <Input<'text', string>
                  name='source'
                  type='text'
                  value={state.source}
                  changeHandler={handleChange}
                  placeholder='https://somesite.com'
                />
                <label>
                  <span>difficulty</span>
                  <select
                    name='difficulty'
                    value={state.difficulty}
                    onChange={handleChange}
                  >
                    <option value='EASY'>Easy</option>
                    <option value='MEDIUM'>Medium</option>
                    <option value='HARD'>Hard</option>
                  </select>
                </label>
                <Input
                  name='tags'
                  type='text'
                  value={state.tags}
                  changeHandler={handleChange}
                  placeholder='Animations, '
                />
                <Input
                  name='skills'
                  type='text'
                  value={state.skills}
                  changeHandler={handleChange}
                />
                <p>
                  Note: Tags and skills should be comma-seperated and kebab-case
                  e.g. animations, flex-box, css-grid
                </p>
              </fieldset>
              <Button type="submit">
                Upload
              </Button>
            </form>
          );
        }
      }
    </Mutation>
  </FormStyles>
  );
}

// INPUT ==================================================

type Input = 'text' | 'number' | 'textarea';
type Value = string | number;

interface InputProps<I extends Input, V extends Value> {
  name: string;
  type: I;
  value: V;
  changeHandler: React.EventHandler<any>;
  placeholder?: string;
}

/** A Generic, labelled input for a form */
const Input = <I extends Input, V extends Value>({
  name,
  value,
  type,
  changeHandler,
  placeholder,
}: InputProps<I, V>) =>
  <label htmlFor={name}>
    <span>{name}</span>
    {
      type === 'textarea'
        ? <textarea
            id={name}
            name={name}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
          />
        : <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
          />
    }
  </label>;

export default NewThingForm;
