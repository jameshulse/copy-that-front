import * as React  from 'react';
import { Mutation } from 'react-apollo';
import Button from '../styles/StyledButton';
import FormStyles from './NewThingFormStyles';
import CREATE_THAT_MUTATION from './createThatMutation';
import Input from './Input';

/*
 * CURRENT STATE OF THIS PAGE:
 * TODO pleasant form validation
 * TODO test
 */

export type Difficulty = 'HIGH' | 'MEDIUM' | 'LOW';

interface NewThingFormState {
  title: string;
  description: string;
  source: string;
  tags: string; // converted to array later
  skills: string; // convewrted to array later
  difficulty: Difficulty;
  image: string;
  largeImage: string;
};

const NewThingForm = () => {
  const defaultState: NewThingFormState = {
    title: '',
    description: '',
    source: '',
    tags: '',
    skills: '',
    difficulty: 'MEDIUM',
    image: '',
    largeImage: '',
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

  const uploadFile = async e => {
    const files = e.target.files;
    if (files.length < 1) {
      setState({ image: '', largeImage: '' });
      return;
    }
    const data = new FormData();
    data.append('file', files[0]);
    // append Cloudinary upload preset
    data.append('upload_preset', 'copy-that-that');
    const res = await fetch('https://api.cloudinary.com/v1_1/copy-that/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
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
              console.log('res: ', res);
              // TODO redirect to That page
            }}>
              <fieldset>
                <label htmlFor='file'>
                  Image
                  <input
                    name="file"
                    id='file'
                    onChange={uploadFile}
                    type="file"
                  />
                </label>
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

export default NewThingForm;
