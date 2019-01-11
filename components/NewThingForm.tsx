import * as React  from 'react';

/* CURRENT STATE OF THIS PAGE:
 * Working on getting the inputs working
 * TODOs are a good guide: getting prisma types in would be great
 * Nothing tested (strictly or visually)
 *
 * TODO control props usng the userReducer setState
 * TODO style
 * TODO add prisma type import
 * TODO test
 */


// TODO make this a generated difficulty enum from prisma
enum Difficulty {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

interface NewThingFormState {
  title: string;
  description: string;
  source: string;
  tags: string[];
  skills: string[];
  difficulty: Difficulty;
  // TODO image
};

const NewThingForm = () => {
  // TODO image
  // TODO difficulty
  // TODO tags
  // TODO skills

  const defaultState: NewThingFormState = {
    title: '',
    description: '',
    source: '',
    tags: [],
    skills: [],
    difficulty: Difficulty.MEDIUM,
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
    // TODO type cast the value if I use a number
    setState({ [target.name]: target.value });
  };

  return (
  <div>
    <form>
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
        {/* TODO difficulty */}
        {/* TODO tags */}
        {/* TODO skills */}
      </fieldset>
    </form>
  </div>
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
    {name}
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
