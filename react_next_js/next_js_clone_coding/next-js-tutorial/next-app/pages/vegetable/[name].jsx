import Link from 'next/link';
import { useRouter } from 'next/router';

const name = () => {
  const { query } = useRouter();
  return (
    <div>
      <h2>Hello!! {query.name}</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};

export default name;
