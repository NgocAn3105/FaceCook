import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/img/21-Year-Old Makeup Artist Uses His Face And Body As A Canvas To Recreate Famous Paintings (10 Pics).jpg';
import pic2 from '../assets/img/453412094_743366897838949_1354772992283071017_n.jpg';
import pic3 from '../assets/img/tải xuống (1).jpg';
import like from '../assets/img/sm_5b321ca743d4a-removebg-preview.png';
import love from '../assets/img/loveicon-removebg-preview.png';
import haha from '../assets/img/hahaicon-removebg-preview.png';

interface Post {
    id: number;
    user_id: number;
    content: string;
    created_at: string;
    status: number;
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [newPostContent, setNewPostContent] = useState('');
    const [posting, setPosting] = useState(false);
    const [deletingPostId, setDeletingPostId] = useState<number | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://facecook-sever.onrender.com/api/users/post');
            const data = await response.json();

            if (data.status === 200) {
                // Lọc bài viết có status = 1 và sắp xếp theo thời gian tạo, mới nhất lên đầu
                const filteredAndSortedPosts = data.message
                    .filter((post: Post) => post.status === 1)
                    .sort((a: Post, b: Post) =>
                        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                    );
                setPosts(filteredAndSortedPosts);
            } else {
                setError('Failed to fetch posts');
            }
        } catch (err) {
            setError('Error fetching posts');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handlePostSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newPostContent.trim()) {
            alert('Vui lòng nhập nội dung bài viết!');
            return;
        }

        setPosting(true);

        try {
            const response = await fetch('https://facecook-sever.onrender.com/api/users/post/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: 1,
                    content: newPostContent
                })
            });

            const data = await response.json();

            if (data.status === 200) {
                // Tạo bài viết mới với thời gian hiện tại
                const newPost: Post = {
                    id: data.message.id,
                    user_id: 1,
                    content: newPostContent,
                    created_at: new Date().toISOString(),
                    status: 1
                };

                // Thêm bài viết mới vào đầu danh sách
                setPosts(prevPosts => [newPost, ...prevPosts]);
                setNewPostContent(''); // Reset input
            } else {
                alert('Có lỗi xảy ra khi đăng bài!');
            }
        } catch (err) {
            console.error('Error posting:', err);
            alert('Có lỗi xảy ra khi đăng bài!');
        } finally {
            setPosting(false);
        }
    };

    const handleDeletePost = async (postId: number) => {
        setDeletingPostId(postId);

        try {
            const response = await fetch(`https://facecook-sever.onrender.com/api/users/post/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: postId,
                })
            });

            const data = await response.json();

            if (data.status === 200) {
                // Xóa bài viết khỏi danh sách local
                setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
            } else {
                alert('Có lỗi xảy ra khi xóa bài viết!');
            }
        } catch (err) {
            console.error('Error deleting post:', err);
            alert('Có lỗi xảy ra khi xóa bài viết!');
        } finally {
            setDeletingPostId(null);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="container-fluid main-home">
                <div className="text-center">
                    <p>Đang tải bài viết...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container-fluid main-home">
                <div className="text-center">
                    <p>Lỗi: {error}</p>
                </div>
            </div>
        );
    }

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
                        <form onSubmit={handlePostSubmit} className="input_content">
                            <input
                                type="text"
                                name='input_post'
                                placeholder='Hãy Nhập Gì Đó'
                                value={newPostContent}
                                onChange={(e) => setNewPostContent(e.target.value)}
                                disabled={posting}
                            />
                            <input
                                type="submit"
                                value={posting ? "Đang đăng..." : "Đăng"}
                                disabled={posting || !newPostContent.trim()}
                            />
                        </form>
                    </div>

                    {posts.map((post, index) => (
                        <div key={post.id} className="post_1">
                            <div className="info_user-post">
                                <div className="avatar"><img src={pic1} alt="avatar" /></div>
                                <div className="info_user">
                                    <div className="user_name">MessiNgô</div>
                                    <div className="info_public">Public • {formatDate(post.created_at)}</div>
                                </div>
                                <div className="post-actions">
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeletePost(post.id)}
                                        disabled={deletingPostId === post.id}
                                    >
                                        {deletingPostId === post.id ? (
                                            <i className="bi bi-hourglass-split"></i>
                                        ) : (
                                            <i className="bi bi-trash"></i>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="content">
                                <p>{post.content}</p>
                            </div>
                            <div className="interact">
                                <div className="like_count">
                                    <div className="img">
                                        <img src={like} alt="img" />
                                        <img src={love} alt="img" />
                                        <img src={haha} alt="img" />
                                    </div>
                                    <span className='count'>10k</span>
                                </div>
                            </div>
                            <div className="btn_like_cmt_share">
                                <button className='btn-like'><i className="bi bi-hand-thumbs-up"></i> Like</button>
                                <button className='btn-cmt'><i className="bi bi-chat"></i> Comment</button>
                                <button className='btn-share'><i className="bi bi-box-arrow-up"></i> Share</button>
                            </div>
                        </div>
                    ))}
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
