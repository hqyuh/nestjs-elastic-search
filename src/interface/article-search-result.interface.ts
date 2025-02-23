import ArticleSearchBody from './article-search-body.interface';

interface ArticleSearchResult {
  id: number;
  hits: {
    total: {
      value: number;
    };
    hits: Array<{
      _source: ArticleSearchBody;
    }>;
  };
}

export default ArticleSearchResult;
