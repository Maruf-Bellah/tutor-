import CeckOutDetail from "./CeckOutDetail/CeckOutDetail";


const CheckOut = () => {
     const students = [
          {id:1, people: 'Science student', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course12.jpg', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work',
            name: 'Sadia Sultana Akter',
            home: 'Dhaka , Mirpur',
            mobile: '021234354545'
          },
          {id:2, people: 'Humanities students', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course11.jpg', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work',
            name: 'Samiya, Raikib, Selim',
            home: 'Dhaka, Dhanmondi',
            mobile: '0981234354545'
          },
          {id:3, people: 'Commerce student', img: 'https://bdevs.net/wp/educal/wp-content/uploads/2021/09/course10.png', post: 'Students of any level can study here, but the condition is that you have to work hard to study here, and if you keep trying with all your might, you will get the result, and we will give you as many guidelines as you need, we ask you for one. That is hard work',
            name: 'Mariya Sultana',
            home: 'Khulna , Rupsha',
            mobile: '023434354545'
          }
        
        ];
  
     return (
          <div className='container'>
                <h3 className="text-center text-primary">Student Information </h3>
               <div className="check-out">
                    {
                         students.map(student => <CeckOutDetail
                              key={student.id}
                              student={student}
                         ></CeckOutDetail>)
                    }
               </div>
          </div>
     );
};

export default CheckOut;