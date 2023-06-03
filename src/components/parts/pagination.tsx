import Pagination from "react-bootstrap/Pagination";

interface PaginationProps {
  totalCount: number;
  pagesIdx: number;
}

const ArticlePagination: React.FC<PaginationProps> = ({totalCount , pagesIdx}): React.ReactElement => {
  const PER_PAGE: number = 7;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div>
      <Pagination>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <Pagination.Item key={index} href={`/blog/pages/${number}`} active={number === pagesIdx}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
export default ArticlePagination;