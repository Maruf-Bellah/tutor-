import React from 'react';
import TeachersInfo from './TeachersInfo';

const Teachers = () => {

     const teachers = [
          {
               id: 1,
               img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
               name: 'Maruf Bellah',
               job: 'Arabic Teacher',
               paragraph: "This center is very beautiful and very comfortable, we had a lot of fun here and the people here are very nice, so you can come and see it once, the place is also very beautiful."
          },
          {
               id: 2,
               img: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
               name: 'Alamin Hosain',
               job: 'English Teacher',
               paragraph: "This center is very beautiful and very comfortable, we had a lot of fun here and the people here are very nice, so you can come and see it once, the place is also very beautiful."
          },
          {
               id: 3,
               img: 'https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
               name: 'Tarikul Islam',
               job: 'Math Teacher ',
               paragraph: "This center is very beautiful and very comfortable, we had a lot of fun here and the people here are very nice, so you can come and see it once, the place is also very beautiful."
          },
     ]

     return (
          <div className='px-3'>
               <div class=" my-5 py-5">
                    <h1 class="text-center pb-4 fw-bold text-primary">Happy <span class=" button-color">Clients</span> says</h1>
                    <div class="">
                         <div class="">
                              <div class="card-group ">
                                   {
                                        teachers.map(teacher => <TeachersInfo
                                             key={teacher.id}
                                             teacher={teacher}

                                        ></TeachersInfo>)
                                   }
                              </div>
                         </div>

                    </div>
               </div>








          </div>
     );
};

export default Teachers;