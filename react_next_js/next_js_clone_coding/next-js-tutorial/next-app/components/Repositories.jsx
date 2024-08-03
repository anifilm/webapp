import css from 'styled-jsx/css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import formatDistance from 'date-fns/formatDistance';

const style = css`
  .repository-pagination {
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 3px;
    width: fit-content;
    margin: auto;
    margin-top: 20px;
  }
  .repository-pagination button {
    padding: 6px 12px;
    font-size: 14px;
    border: 0;
    color: #0366d6;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
  .repository-pagination button:first-child {
    border-right: 1px solid rgba(27, 31, 35, 0.15);
  }
  .repository-pagination button:hover:not([disabled]) {
    background-color: #0366d6;
    color: white;
  }
  .repository-pagination button:disabled {
    cursor: no-drop;
    color: rgba(27, 31, 35, 0.3);
  }
`;

const name =({ user, repos }) => {
  const router = useRouter();
  const { page = '1' } = router.query;
  if (!user || !repos) {
    return null;
  }
  return (
    <div>
      <div className="repository-pagination">
        <Link href={`/users/${user.login}?page=${Number(page) - 1}`}>
          <a>
            <button type="button" disabled={page && page === "1"}>
              Previous
            </button>
          </a>
        </Link>

        <Link href={`/users/${user.login}?page=${!page ? "2" : Number(page) + 1}`}>
          <a>
            <button type="button" disabled={repos.length < 10}>
              Next
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default name;