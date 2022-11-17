import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Appart from './Appart';

const Gallery = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
        .then((res) => setData(res.data));
    }, []);

    return (
        <div className='gallery'>
          <ul>
          {
            data.map((title, id, cover) => (
                <Appart key={id} title={title} cover={cover} />
            ))
          }</ul>  
        </div>
    );
};

export default Gallery;