import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_SERVER_HOST } from '../../util/jwtUtil';

const ArticleList = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  const StatusBox = ({ status }) => {
    const getStatusStyle = (status) => {
      switch (status) {
        case '진행중':
          return { backgroundColor: '#cd5c5c', color: '#ffffff' };
        case '기본':
          return { backgroundColor: '#cd5c5c', color: '#ffffff' };
        case '완료':
          return { backgroundColor: '#cd5c5c', color: '#ffffff' };
        default:
          return { backgroundColor: '#cd5c5c', color: '#ffffff' };
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case '진행중':
          return '기부진행';
        case '기본':
          return '기부대기';
        case '완료':
          return '기부완료';
        default:
          return status;
      }
    };

    const statusStyle = getStatusStyle(status);
    const statusText = getStatusText(status);

    return (
      <div className="badge position-absolute" style={{ top: '0.3rem', left: '0.3rem', padding: '0.5rem', ...statusStyle }}>
          {statusText}
      </div>
    );

  };


  const getArticleTypeText = (type) => {
    switch (type) {
      case 'DONATION':
        return '기부해요';
      case 'BENEFICIARY':
        return '필요해요';
      case 'CERTIFICATION':
        return '인증해요';
      default:
        return type;
    }
  };

  const getArticleTypeBadgeStyle = (type) => {
    switch (type) {
      case '기부해요':
        return { backgroundColor: '#ffc107', color: '#ffffff' };
      case '필요해요':
        return { backgroundColor: '#007bff', color: '#ffffff' };
      case '인증해요':
        return { backgroundColor: '#28a745', color: '#ffffff' };
      default:
        return { backgroundColor: '#000000', color: '#ffffff' };
    }
  };

  const ProductCard = ({ articleId, title, articleType, images, address, writer, categories, postDate, articleStatus }) => {
    const imageUrl = images.length > 0 ? images[0].imgUrl : 'https://warmwave-bucket.s3.ap-northeast-2.amazonaws.com/common/%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8%E1%84%83%E1%85%AC%E1%86%AB+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%80%E1%85%A1+%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%89%E1%85%B3%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1.jpg';
    const badgeStyle = getArticleTypeBadgeStyle(articleType);

    return (
      <div className="col mb-4">
        <div className="card h-100" style={{ width: '105%' }}>
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Product"
            style={{ maxWidth: '450px', height: '250px', objectFit: 'cover' }}
          />
          <div className="card-body p-4 mb-2" style={{ height: '250px' }}>
            <div className="text-left">
              <div className="badge position-absolute" style={{ top: '0.3rem', right: '0.3rem', padding: '0.5rem', ...badgeStyle }}>
                {getArticleTypeText(articleType)}
              </div>
              <StatusBox status={articleStatus} />

              <h5 className="fw-bolder mb-1 text-center" style={{ color: '#000000', marginBottom: '10px' }}>
                <Link to={`/donate/${articleId}`}>{title}</Link>
              </h5>
              <hr className="my-1" />
              <p className="mb-1" style={{ color: '#212529', marginBottom: '10px' }}><strong>작성자 :</strong> {writer}</p>
              <strong>물품종류 :</strong>
              {categories.map((category, index) => (
                <span key={index} className="badge bg-secondary mx-1" style={{ backgroundColor: '#ffa500' }}>{category}</span>
              ))}
              <p className="mb-1" style={{ color: '#212529', marginBottom: '1px' }}><strong>게시일 :</strong> {formatDate(postDate)}</p>
              <p className="mb-1" style={{ color: '#212529', marginBottom: '10px' }}><strong>기부지역 :</strong> {address}</p>
            </div>
            <br />
          </div>
        </div>
        <div className="card-footer p-4 border-top-0 bg-transparent">
          <div className="text-center">
            <div className="mb-1">
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ArticleList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios(`${API_SERVER_HOST}/api/articles?page=1&size=50`);
          const data = await response.data;
          setProducts(data.content);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    return (
      <section className="py-5" style={{ marginTop: '30px' }}>
        <div className="container-fluid px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-5" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
              <ProductCard
                key={product.articleId}
                articleId={product.articleId}
                articleType={product.articleType}
                title={product.title}
                categories={product.prodCategories}
                images={product.images}
                address={product.address}
                writer={product.writer}
                articleStatus={product.articleStatus}
                postDate={product.createdAt}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return <ArticleList />;
};

export default ArticleList;