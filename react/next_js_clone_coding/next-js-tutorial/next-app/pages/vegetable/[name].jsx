import Link from 'next/link';
import { useRouter } from 'next/router';

const name = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  return (
    <div>
      <h2>Hello!! {name}</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
}

export default name;
