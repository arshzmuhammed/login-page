import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css'

const DetailPerson = () => {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        setPersonal(res.data)
      });
  }, []);

  return (
    <div className="container">
      <div className='main'>
        <div className="detail">
          <div className='detail-img'>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-blue-wall_158538-24057.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Id: {personal.id}</h3>
            <h5>Title: {personal.title}</h5>
            <p>Body: {personal.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;
