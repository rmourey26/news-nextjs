export interface NewsArticle {
    author: string,
    title: string,
    descritpion: string,
    url: string,
    urlToImage?: string,
    publishedAt: string,
    content: string,
}

export interface NewsResponse {
    articles: NewsArticle[],
}