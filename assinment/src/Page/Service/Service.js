import React from 'react';
import Student from '../Student/Student';
import './Service.css';

const Service = () => {
  const students = [
    {id:1, people: 'Science student', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course12.jpg', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work', address: {
      name: 'Alamain Howlader',
      home: 'Dhaka , Mirpur',
      mobile: '021234354545'
    }},
    {id:2, people: 'Humanities students', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course11.jpg', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work', address: {
      name: 'Alamain Howlader',
      home: 'Dhaka , Mirpur',
      mobile: '021234354545'
    }},
    {id:3, people: 'Commerce student', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course10.png', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work', address: {
      name: 'Alamain Howlader',
      home: 'Dhaka , Mirpur',
      mobile: '021234354545'
    }}
  
  ];
     return (
        <div>
          <h3  style={{fontWeight: 'bold'}} className=' pb-5 mb-4 text-center text-primary'>All The Students Are Here </h3>
        <div  className='service container'>
        {
            students.map(student=> <Student 
            
              key={student.id}
              student={student}

              
            ></Student>)
          }
        </div>
         
     
        </div>
     
     
     )};

export default Service;