import React from 'react';
import './Footer.css'

const Footer = () => {
     return (
          <div>
             
             <div  className='footer bg-secondary text-white mt-4'>
                  <div>
                       <h5>Home Tutor</h5>
                       <p>Great lesson ideas and lesson plans for ESL teachers! I can best customize the lesson plans.</p>
                  </div>
                  <div>
                       <h5>Lessons</h5>
                       <ul>
                            <li>Bangla</li>
                            <li>English</li>
                            <li>Math</li>
                            <li>History</li>
                            <li>Arabic</li>
                            <li>Islamic</li>
                            <li>Hadid</li>
                       </ul>
                  </div>
                  <div>
                       <h5>Free Time</h5>
                       <ul>
                            <li>Morming 9.30</li>
                            <li>Noon 6.50</li>
                            <li>Evening 12.30</li>
                            <li>Morming 1.20</li>
                            <li>Night 2.30</li>
                            <li>Morming 9.23</li>
                            <li>Evening 4.30</li>
                       </ul>
                  </div>
                  <div>
                       <p>
                            <input type="text" />
                            <input type="submit" value="Go now" />
                       </p>
                  </div>
             </div>
          </div>
     );
};

export default Footer;