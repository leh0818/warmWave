import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtAxios, { API_SERVER_HOST } from '../../util/jwtUtil';
import axios from 'axios';
import { getCookie } from '../../util/cookieUtil';
import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const ArticleDetails = () => {
  const [article, setArticle] = useState(null);
  const [showImages, setShowImages] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_SERVER_HOST}/api/articles/${params.articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [params.articleId]);

  

  const formattedDate = article?.createdAt
    ? new Date(article.createdAt)
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .replace(/ /g, "")
    : "로딩 중...";

  const getArticleTypeText = (type) => {
    return type || "기본값";
  };

  const getArticleTypeStyle = (type) => {
    switch (type) {
      case "기부해요":
        return { backgroundColor: "#ffc107", borderColor: "#ffc107", color: "#ffffff" };
      case "필요해요":
        return { backgroundColor: "#007bff", borderColor: "#007bff", color: "#ffffff" };
      case "인증해요":
        return { backgroundColor: "#28a745", borderColor: "#28a745", color: "#ffffff" };
      default:
        return { backgroundColor: "#000000", borderColor: "#000000", color: "#ffffff" };
    }
  };

  const renderBadges = () => {
    if (!article?.articleType) {
      return null;
    }

    const badgeStyle = getArticleTypeStyle(article.articleType);
    const badgeText = getArticleTypeText(article.articleType);

    return (
      <div className="badge" style={{ ...badgeStyle, padding: "0.5rem", fontSize: "1.2rem", marginRight: "0.5rem" }}>
        {badgeText}
      </div>
    );
  };

  const handleDelete = async () => {
    try {
      await jwtAxios.delete(`${API_SERVER_HOST}/api/articles/${params.articleId}`);

      // 삭제 후 목록 페이지로 이동
      navigate("/donate");
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleUpdate = () => {
    // '수정' 버튼 클릭 시, PatchForm 페이지로 이동하고 현재 글의 정보를 전달
    navigate(`/update/${params.articleId}`, { state: { article } });
  };

  const loggedInUserId = getCookie("user")?.id; // 토큰이 없을 때를 대비해 ?. 연산자 추가
  const articleWriterId = article?.userId;

  const showEditButtons = loggedInUserId && loggedInUserId === articleWriterId;

  const handleChatButtonClick = () => {
    // 채팅방 데이터 정의
    const chatRoomData = {
      articleId: article.articleId,
      otherId: article.userId,
    };

    jwtAxios.put(`${API_SERVER_HOST}/api/articles/status/${params.articleId}?articleStatus=진행중`);

    // 채팅방 생성을 위한 POST 요청 보내기
    jwtAxios
      .post(`${API_SERVER_HOST}/api/chatRoom`, chatRoomData)
      .then((response) => {
        console.log("Chat room created successfully:", response.data);

        // Redirect to the chat page
        navigate("/chat");
      })
      .catch((error) => {
        console.error("Error creating chat room:", error);
      });
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


  return (
    <section className="py-5" style={{ marginTop: '30px' }}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-start">

          <div className="col-md-6" style={{ padding: "15px" }}>
            {showImages && article?.images && article.images.length > 0 ? (
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {article.images.map((image, index) => (
                    <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="image-container" style={{ height: "400px", width: "100%", margin: "auto", backgroundColor: "#f0f0f0", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img className="d-block w-100" src={image.imgUrl} alt={image.imgName} style={{ height: "100%", objectFit: "contain", border: "1px solid #ddd" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators" style={{ position: 'static', marginBottom: '10px' }}>
                  {article.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                      aria-current={index === 0 ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      style={{ backgroundColor: "#333" }}
                    ></button>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              <div className="image-container" style={{ height: "400px", width: "100%", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img className="card-img-top mb-5 mb-md-0" 
                  src="https://warmwave-bucket.s3.ap-northeast-2.amazonaws.com/common/%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8%E1%84%83%E1%85%AC%E1%86%AB+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%80%E1%85%A1+%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%89%E1%85%B3%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1.jpg" 
                  alt="true" style={{ height: "100%", objectFit: "contain", border: "1px solid #ddd" }} />
              </div>
            )}
          </div>


          <div className="col-md-6">
            <div className="d-flex align-items-start mb-1" style={{ flexDirection: "column" }}>
              <div className="d-flex align-items-center">
                <StatusBox status={article?.articleStatus || '기본'} />
                {renderBadges()}
                <h1 className="fw-bolder display-5 ms-0.5 text-left" style={{ fontSize: "2rem" }}>
                  {article?.title || "로딩 중..."}
                </h1>
              </div>
            </div>
            <br />
            <div className="d-flex flex-wrap">
              <p style={{ fontSize: "19px", marginRight: "8px", color: "#212529" }}>물품종류 :</p>
              {article?.prodCategories &&
                article.prodCategories.map((category, index) => (
                  <span
                    key={index}
                    className="btn btn-outline-dark me-2 mb-2"
                    disabled
                    style={{
                      fontSize: "16px",
                      padding: "0.25rem 0.5rem",
                      paddingTop: "0.1rem",
                      paddingBottom: "0rem",
                      color: "#ffffff",
                      backgroundColor: "#6c757d",
                      borderColor: "#6c757d",
                    }}
                  >
                    {category}
                  </span>
                ))}
            </div>
            <div className="fs-5 mb-3 d-flex justify-content-between">
              <p style={{ fontSize: "19px", color: "#212529" }}>작성자 : {article?.writer || "로딩 중..."}</p>

              <div>
                <span className="me-3" style={{ fontSize: "19px", color: "#212529" }}>
                </span>
                <span style={{ fontSize: "19px", color: "#212529" }}>게시날짜 : {formattedDate}</span>
              </div>
            </div>
            <hr style={{ borderColor: "#212529", marginTop: "1rem", marginBottom: "1rem" }} />
            <div className="lead" style={{ color: "#666666", alignItems: "flex-start", flexDirection: "column", display: "flex" }}>
              <div style={{ color: "#666666", fontWeight: "500" }}>{article?.content || "로딩 중..."}</div>
            </div>
            <div className="mt-3 d-flex justify-content-end">
              {showEditButtons && (
                <>
                  <button
                    className="btn btn-secondary me-2"
                    type="button"
                    onClick={handleUpdate}
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#999999",
                      color: "#999999",
                    }}
                  >
                    수정
                  </button>

                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleDelete}
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#999999",
                      color: "#999999",
                    }}
                  >
                    삭제
                  </button>
                </>
              )}
            </div>
            <hr style={{ borderColor: "#212529", marginTop: "1rem", marginBottom: "1rem" }} />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-4" style={{ fontSize: "20px", color: "#212529" }}>
                <span className="me-2" style={{ fontSize: "19px", color: "#212529", fontWeight: "normal" }}>
                  기부지역 :
                </span>{" "}
                {article?.address || "로딩 중..."}
              </p>
              <button
                className="btn"
                type="button"
                onClick={handleChatButtonClick}
                style={{
                  backgroundColor: "#87CEEB",
                  borderColor: "#87CEEB",
                  color: "#ffffff",
                  padding: "6px",
                }}
              >
                <i className="bi-cart-fill me-1"></i>
                <span style={{ fontSize: "18px", display: "inline-block", lineHeight: "1" }}>채팅하기</span>
              </button>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;