export interface Blog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  genre: Genre;
  tags: Tags[];
  thumbnail: string;
  body: string[];
  thumbnail_img?: Thumbnail;
}
  
export interface Genre {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  genre: string
}

export interface Tags {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  tag: string
}

export interface Thumbnail {
  url: string;
  height: number;
  width: number;
}

export interface BlogGeneralPageProps {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
  totalCount: number;
  pagesIdx: number;
}

export interface ArticleProps {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
  blog: Blog;
}

export interface GenreTagListProps {
  genres: Genre[];
  tags: Tags[];
}

export interface BlogGenreContentProps {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
  genre: Genre;
}

export interface BlogTagContentProps {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
  tag: Tags;
}
