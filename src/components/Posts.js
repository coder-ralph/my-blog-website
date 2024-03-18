import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa';

const Posts = ({ posts }) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className='posts-container'>
      {posts?.map(post => (
        <div className="posts-box" key={post.id}>
          <div className="posts-img brighten">
            <Link to={`/article/${post.slug}`}>
              <img src={post.coverPhoto.url} alt="" />
            </Link>
            <div className="categories">
              {post.categories?.map(category => (
                <Link
                  to={`/posts/${category.slug}`}
                  key={category.id}
                  className="category"
                  style={{ background: category.color.css }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="posts-text">
            <div className="category-time">
              {post.categories?.map(category => (
                <Link
                  to={`/posts/${category.slug}`}
                  key={category.id}
                  style={{ color: category.color.css }}
                >
                  {category.name}
                </Link>
              ))}
              <span className='published-time'>
                  <FaCalendar className='purple-icon' /> {formatDate(post.updatedAt)}
                </span>
            </div>

            <Link to={`/article/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>

            <p className='excerpt'>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
