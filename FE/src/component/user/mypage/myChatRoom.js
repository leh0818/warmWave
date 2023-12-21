import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtAxios, { API_SERVER_HOST } from '../../util/jwtUtil';

function MyChatRoom(props) {
  const [chatRoomList, setChatRoomList] = useState([]);
  const { userId } = props.userInfo;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await jwtAxios.get(`${API_SERVER_HOST}/api/chatRoom/${userId}?page=1&size=10`)
        console.log('Response:', response); // Log the entire response
        console.log('Content:', response.data.content);
        setChatRoomList(prevState => [...(response.data.content || [])]);
        console.log('Articles:', chatRoomList || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, [])

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
                <th scope="col" style={{ textAlign: "center" }}>채팅방</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td><h1>To be updated...</h1></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyChatRoom;