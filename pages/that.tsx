import ThatPage from '../components/ThatPage';

export default ({ query }) =>
  <div>
    <ThatPage id={query.id} />
  </div>;
