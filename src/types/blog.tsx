export type Blog = {
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
  thumbnail_img: Thumbnail;
  };
  
export type Genre = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  genre: string
};

export type Tags = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  tag: string
};

export type Thumbnail = {
  url: string;
  height: number;
  width: number;
}

export type BlogGeneralPageProps = {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
}

export type BlogContentProps = {
  blogs: Blog[];
  genres: Genre[];
  tags: Tags[];
  blog: Blog;
}