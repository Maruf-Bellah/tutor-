import React from 'react';
import './Footer.css'

const Footer = () => {
     return (
          <div>
             
             <div  className='footer bg-dark text-white mt-4'>
                  <div>
                       <h5>Home Tutor</h5>
                       <p>If you like to come here once and see, you and your son and daughter will come to study with me, just visit once</p>
                        <p>Mobile : 0243494589</p>
                        <p><small>mdmaruf5511507@gmail.com</small></p>

                  </div>
                  <div>
                       <h5 className='ms-4'>All Subject</h5>
                       <ul>
                            <li>Bangla Subject</li>
                            <li>English Subject</li>
                            <li>Math Subject</li>
                            <li>History Subject</li>
                            <li>Arabic Subject</li>
                            <li>Islamic Subject</li>
                            <li>Hadid Subject</li>
                       </ul>
                  </div>
                  <div>
                       <h5 className='ms-4'>Free Time</h5>
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
                       <h4 >Subscribe</h4>
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