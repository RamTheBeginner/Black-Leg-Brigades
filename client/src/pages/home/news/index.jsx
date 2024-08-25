import React, { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  useEffect(() => {
    // Fetch news from the provided API URL
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.articles); // Store all articles for pagination
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Business News</h2>
      {currentArticles.length === 0 ? (
        <p className="text-center">No news articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentArticles.map((article, index) => (
            <div key={index} className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                <div className="flex justify-center h-[60%]">
                  <img
                    src={article.urlToImage || 'https://via.placeholder.com/400x200'} // Fallback image
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;

