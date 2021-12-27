import MessageList from '../components/MessageList';
import fetcher from '../fetcher';

const Home = ({ startMesssages, users }) => (
  <>
    <h1>SIMPLE SNS</h1>
    <MessageList startMesssages={startMesssages} users={users} />
  </>
);

export const getServerSideProps = async () => {
  const startMesssages = await fetcher('get', '/messages');
  const users = await fetcher('get', '/users');
  return {
    props: { startMesssages, users },
  };
};

export default Home;
