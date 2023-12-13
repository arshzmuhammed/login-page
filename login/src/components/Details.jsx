import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Details = () => {
    const [detail, setDetails] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            setDetails(res.data)
        })
    }, [])
    return (
        <div className='container1'>
            <h1>Details</h1>
            <div className="container">
                {detail.slice(0, 8).map((x, index) => {
                    return (
                        <div key={index}>
                            <div className="details">

                                <Link to="/detailPerson">
                                    <div className='details-img'>
                                        <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-blue-wall_158538-24057.jpg" alt="" />

                                    </div>
                                </Link>

                                <div className="title">
                                    <h3>Id :{x.id}</h3>
                                    <h5>title :{x.title}</h5>
                                    <p>body :{x.body}</p>
                                 </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container">
                {detail.slice(9, 40).map((x, index) => {
                    return (
                        <div key={index}>
                            <div className="details">
                                <div className='details-img'>

                                    <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-blue-wall_158538-24057.jpg" alt="" />

                                </div>
                                <div className="title">
                                    <h3>Id :{x.id}</h3>
                                    <h5>title :{x.title}</h5>
                                    <p>body :{x.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Details
