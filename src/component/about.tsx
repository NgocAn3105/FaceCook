import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Giới thiệu</h1>
            <p>Trang này giới thiệu về ứng dụng React + TypeScript mà bạn đang xem.</p>
            <p>Đây là dự án được build bằng ReactJS, sử dụng TypeScript để tăng tính an toàn và ổn định khi lập trình.</p>
        </div>
    );
}

export default About;
