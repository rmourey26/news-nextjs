import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import NewsArticleGrid from '@/components/NewsArticleGrid'

interface NewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=ca&apiKey=' + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }
  // let error go to 500 page
}

export default function NewsPage({ newsArticles }: NewsPageProps) {
  return (
    <>
      <Head>
        <title key='title'>News</title>
      </Head>
      <main>
        <h1>News</h1>

        {/* This page uses getServerSideProps to fetch data server-side on every request
            This allows search engines to crawl the page content and improves SEO. */}
        <NewsArticleGrid articles={newsArticles} />
      </main>
    </>
  )
}
