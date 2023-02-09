import './ShowAllPublicArticles.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useEffect, useState } from 'react';
import PublicArticleHomeCard from '../../TemplatePages/1-PublicArticleHomeCard/PublicArticleHomeCard';

export default function ShowAllPublicArticles() {
  const [allPublicArticles, setAllPublicArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    const fetchPublicArticles = async () => {
      try {
        const response = await fetch(`${backendUrl}article`);
        const result = await response.json();

        // -- ok
        if (response.ok) {
          setAllPublicArticles(result.message);
          setisLoading(false);
        }

        // -- not ok
        if (!response.ok) {
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPublicArticles();
  }, []);

  //-- return jsx
  return isLoading ? (
    <div className='publicArticlesAreLoading'>loading...</div>
  ) : (
    <div className='ShowAllPublicArticles'>
      <div className='ShowAllPublicArticlesContent'>
        {allPublicArticles.map((item) => {
          return <PublicArticleHomeCard key={item.article_id} item={item} />;
        })}
      </div>
    </div>
  );
}
