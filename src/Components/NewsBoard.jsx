import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch news articles');
                }

                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError(error.message); // Set error state for displaying error message
            }
        };

        fetchArticles();
    }, [category]); // Add category to the dependency array

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge text-bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
};

export default NewsBoard;
