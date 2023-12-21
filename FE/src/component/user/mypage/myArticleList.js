import Link, { useEffect, useState } from "react";
import jwtAxios, { API_SERVER_HOST } from "../../util/jwtUtil";

function MyArticleList(props) {
  const { userId } = props.userInfo
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await jwtAxios.get(`${API_SERVER_HOST}/api/articles/${userId}/all?page=1&size=10`)
        const data = await response.data
        console.log(data)
        setArticleList(data.content);
        console.log('article list')
        console.log(articleList)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-md-8 mt-5">
      <div className="card mb-3">
        <div className="card-body">
          <table class="table table-hover">
            <colgroup>
              <col width="*" />
              <col width="80%" />
              <col width="11%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>번호</th>
                <th scope="col" style={{ textAlign: "center" }}>게시글 제목</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articleList.map(article => {
                <tr key={article.id}>
                  <th style={{ textAlign: "center", verticalAlign: "middle" }} scope="row">{article.articleId}</th>
                  <td style={{ verticalAlign: "middle" }}>{article.title}</td>
                  <td style={{ textAlign: "center" }}>
                    <button className='btn btn-danger'>삭제</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyArticleList;