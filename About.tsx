import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <header className="profile-header">
        <h1>Fang-Yu Liang</h1>
        <h2>梁芳瑀</h2>
        <h3>淡江大學 資訊管理系 四年級生</h3>
        <p>這是一個展示我的技能與經歷的個人頁面</p>
      </header>

      <section className="skills-section card">
        <h4>專業技能</h4>
        <ul>
          <li>Python 程式設計基礎</li>
          <li>初級滲透測試技能</li>
          <li>使用 SwiftUI 進行 iOS 應用程式開發</li>
        </ul>
      </section>

      <section className="contact-section card">
        <h4>聯絡資訊</h4>
        <ul>
          <li><strong>Line:</strong> 未提供</li>
          <li><strong>電子郵件:</strong> 未提供</li>
        </ul>
      </section>
