import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/News.css'

const allNews = [
  { img: '/src/assets/news1.jpg', tag: 'CORPORATE', date: '7 JULY 2026', title: 'LAMBORGHINI X APPLE VISION PRO', desc: '' },
  { img: '/src/assets/news2.jpg', tag: 'URUS', date: '1 JULY 2026', title: 'LAMBORGHINI URUS SE PERFORMANTE: THE SUPER SUV AT ITS PEAK', desc: 'Fenomeno: Under approval, not available for sale. Revuelto: Combined energy consumption: 4,7 kWh/100 Km plus 15 l/100km; Combined CO2 emissions: 350 g/km.' },
  { img: '/src/assets/news3.jpg', tags: ['EVENTS', 'ESPERIENZA'], date: '29 JUNE 2026', title: '"ESPERIENZA LAMBORGHINI": THE WORLD FROM BEHIND THE WHEEL', desc: 'Revuelto: Combined energy consumption: 4,7 kWh/100 Km plus 15 l/100km; Combined CO2 emissions: 350 g/km; CO2 class with discharged battery: G.' },
  { img: '/src/assets/news4.jpg', tag: 'CORPORATE', date: '26 JUNE 2026', title: 'CHRISTIAN MASTRO NAMED CEO OF LAMBORGHINI AMERICA', desc: '' },
  { img: '/src/assets/news5.jpg', tag: 'EXPLORE', date: '25 JUNE 2026', title: 'SAVE THE DATE', desc: '' },
  { img: '/src/assets/news6.jpg', tag: 'SUSTAINABILITY', date: '25 JUNE 2026', title: 'LAMBORGHINI PUBLISHES 2025 SUSTAINABILITY REPORT', desc: '' },
  { img: '/src/assets/news7.jpg', tag: 'MOTORSPORT', date: '22 JUNE 2026', title: 'LAMBORGHINI SUPER SUVS: FROM LM002 TO URUS SE', desc: '' },
  { img: '/src/assets/news8.jpg', tag: 'DESIGN', date: '18 JUNE 2026', title: "FENOMENO ROADSTER: DESIGN THROUGH MITJA BORKERT'S EYES", desc: '' },
]

const News = () => {
  const [visibleCount, setVisibleCount] = useState(6)
  const featured = allNews[0]
  const grid = allNews.slice(1, visibleCount + 1)

  return (
    <div className="news-page">

      {/* Breadcrumb */}
      <div className="news-page-breadcrumb">
        <Link to="/">HOME</Link>
        <span>|</span>
        <span className="active">NEWS</span>
      </div>

      {/* Header */}
      <div className="news-page-header">
        <p className="news-page-label">NEWS</p>
        <h1 className="news-page-title">LAMBORGHINI WORLD</h1>
      </div>

      {/* Featured article */}
      <div className="news-page-featured">
        <img src={featured.img} alt={featured.title} className="news-page-featured-img" />
        <div className="news-page-featured-meta">
          <p className="news-page-date">{featured.date}</p>
          <h2 className="news-page-featured-title">{featured.title}</h2>
        </div>
      </div>

      {/* Grid */}
      <div className="news-page-grid">
        {grid.map((article, i) => (
          <div className="news-page-card" key={i}>
            <img src={article.img} alt={article.title} className="news-page-card-img" />
            <div className="news-page-card-meta">
              <div className="news-page-tags">
                {article.tags
                  ? article.tags.map((t, j) => <span key={j} className="news-page-tag">{t}</span>)
                  : <span className="news-page-tag">{article.tag}</span>
                }
              </div>
              <p className="news-page-date">{article.date}</p>
              <h3 className="news-page-card-title">{article.title}</h3>
              {article.desc && <p className="news-page-card-desc">{article.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {visibleCount < allNews.length - 1 && (
        <div className="news-page-loadmore">
          <button onClick={() => setVisibleCount(visibleCount + 3)} className="news-loadmore-btn">
            LOAD MORE
          </button>
        </div>
      )}

    </div>
  )
}

export default News