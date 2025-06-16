import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/img/21-Year-Old Makeup Artist Uses His Face And Body As A Canvas To Recreate Famous Paintings (10 Pics).jpg';
import pic2 from '../assets/img/453412094_743366897838949_1354772992283071017_n.jpg';
import pic3 from '../assets/img/tải xuống (1).jpg';
import like from '../assets/img/sm_5b321ca743d4a-removebg-preview.png';
import love from '../assets/img/loveicon-removebg-preview.png';
import haha from '../assets/img/hahaicon-removebg-preview.png';

const Home: React.FC = () => {
    return (
        <div className="container-fluid main-home">
            <div className="item item-left">
                <ul>
                    <li className="item_list-info">
                        <div className="info">
                            <div className="avatar">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <div className="name">User</div>
                        </div>
                    </li>
                    <li className="item_list-info">
                        <div className="info">
                            <div className="avatar">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <div className="name">Friendship</div>
                        </div>
                    </li>
                    <li className="item_list-info">
                        <div className="info">
                            <div className="avatar">
                                <i className="bi bi-clock-history"></i>
                            </div>
                            <div className="name">History</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="item item-mid">
                <div className="box_container">
                    <div className="up_post">
                        <div className="info_user">
                            <div className="avatar"><img src={pic3} alt="avatar" /></div>
                            <div className="user_name">MessiNgô</div>
                        </div>
                        <div className="input_content">
                            <input type="text" name='input_post' placeholder='Hãy Nhập Gì Đó' />
                            <input type="submit" value="Đăng" />
                        </div>
                    </div>
                    <div className="post_1">
                        <div className="info_user-post">
                            <div className="avatar"><img src={pic3} alt="avatar" /></div>
                            <div className="info_user">
                                <div className="user_name">MessiNgô</div>
                                <div className="info_public">Public</div>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                Messi Ngoo He He He He
                            </p>
                        </div>
                        <div className="interact">
                            <div className="like_count">
                                <div className="img">
                                    <img src={like} alt="img" />
                                    <img src={love} alt="img" />
                                    <img src={haha} alt="img" />
                                </div>
                                <span className='count'>35k</span>
                            </div>
                        </div>
                        <div className="btn_like_cmt_share">
                            <button className='btn-like'><i className="bi bi-hand-thumbs-up"></i> Like</button>
                            <button className='btn-cmt'><i className="bi bi-chat"></i> Comment</button>
                            <button className='btn-share'><i className="bi bi-box-arrow-up"></i> Share</button>
                        </div>
                    </div>

                    <div className="post_1">
                        <div className="info_user-post">
                            <div className="avatar"><img src={pic1} alt="avatar" /></div>
                            <div className="info_user">
                                <div className="user_name">Ngọc Ân</div>
                                <div className="info_public">Public</div>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                CR7 GOAT , còn MESSINGO
                            </p>
                        </div>
                        <div className="interact">
                            <div className="like_count">
                                <div className="img">
                                    <img src={like} alt="img" />
                                    <img src={love} alt="img" />
                                </div>
                                <span className='count'>12k</span>
                            </div>
                        </div>
                        <div className="btn_like_cmt_share">
                            <button className='btn-like'><i className="bi bi-hand-thumbs-up"></i> Like</button>
                            <button className='btn-cmt'><i className="bi bi-chat"></i> Comment</button>
                            <button className='btn-share'><i className="bi bi-box-arrow-up"></i> Share</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item item-right">
                <div className="name_info--column">
                    <p>Người Liên Hệ</p>
                </div>
                <ul>
                    <li className="item_friend-list">
                        <div className="info_list">
                            <div className="avatar">
                                <img src={pic1} alt="avatar" />
                            </div>
                            <div className="user_name">Ngọc Ân</div>
                        </div>
                    </li>
                    <li className="item_friend-list">
                        <div className="info_list">
                            <div className="avatar">
                                <img src={pic2} alt="avatar" />
                            </div>
                            <div className="user_name">Hiếu Kiên</div>
                        </div>
                    </li>
                    <li className="item_friend-list">
                        <div className="info_list">
                            <div className="avatar">
                                <img src={pic3} alt="avatar" />
                            </div>
                            <div className="user_name">MessiNgô</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
