import Sidebar from '../sidebar/Sidebar';
import SinglePost from '../singlePost/SinglePost';
import React from './single.css';

const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single