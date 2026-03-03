import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-[#FEF2F2]">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-4 border-[#7C2D12] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <svg className="w-10 h-10 text-[#CA8A04]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <span className="text-2xl font-bold text-[#7C2D12]" style={{ fontFamily: "'Amatic SC', cursive" }}>
              {siteConfig.name}
            </span>
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-[#7C2D12] mb-4" style={{ fontFamily: "'Amatic SC', cursive" }}>
              教程文章
            </h1>
            <p className="text-xl text-[#450A0A]" style={{ fontFamily: "'Cabin', sans-serif" }}>
              手把手教你制作节日音乐
            </p>
          </div>
          
          {/* Category Navigation - Sticker Style */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, i) => {
              const rotations = ['rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[1deg]']
              const colors = ['#7C2D12', '#B91C1C', '#CA8A04', '#7C2D12', '#B91C1C', '#CA8A04']
              
              return (
                <a
                  key={category}
                  href={`#${category}`}
                  className={`px-6 py-3 rounded-2xl text-white font-bold hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer ${rotations[i]}`}
                  style={{ 
                    fontFamily: "'Cabin', sans-serif",
                    backgroundColor: colors[i]
                  }}
                >
                  {category}
                </a>
              )
            })}
          </div>

          {/* Articles by Category - Collage Layout */}
          {categories.map((category, catIndex) => {
            const categoryArticles = articles.filter(a => a.category === category)
            const categoryColors = ['#7C2D12', '#B91C1C', '#CA8A04', '#7C2D12', '#B91C1C', '#CA8A04']
            
            return (
              <div key={category} id={category} className="mb-16">
                {/* Category Header - Tape Style */}
                <div className="relative mb-8">
                  <div 
                    className="inline-block px-8 py-4 rounded-2xl shadow-lg transform -rotate-1"
                    style={{ backgroundColor: categoryColors[catIndex] }}
                  >
                    <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Amatic SC', cursive" }}>
                      {category}
                    </h2>
                  </div>
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7C2D12] to-transparent opacity-20"></div>
                </div>
                
                {/* Articles Grid - Polaroid/Scrapbook Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryArticles.map((article, i) => {
                    const rotations = ['rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[1deg]']
                    
                    return (
                      <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                        className={`group block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 hover:-translate-y-2 cursor-pointer ${rotations[i % rotations.length]}`}
                        style={{ borderColor: categoryColors[catIndex] }}
                      >
                        {/* Article Content */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#7C2D12] mb-3 group-hover:text-[#CA8A04] transition-colors" style={{ fontFamily: "'Amatic SC', cursive" }}>
                            {article.title}
                          </h3>
                          <p className="text-[#450A0A] text-sm mb-4 line-clamp-3" style={{ fontFamily: "'Cabin', sans-serif" }}>
                            {article.description}
                          </p>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t-2 border-[#FEF2F2]">
                          <span className="text-sm text-gray-500" style={{ fontFamily: "'Cabin', sans-serif" }}>
                            {article.date}
                          </span>
                          <span className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all" style={{ color: categoryColors[catIndex], fontFamily: "'Cabin', sans-serif" }}>
                            阅读
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                        
                        {/* Decorative corner */}
                        <div 
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-50 group-hover:scale-125 transition-transform"
                          style={{ backgroundColor: categoryColors[catIndex] }}
                        ></div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* CTA Section - Handmade Banner */}
          <div className="mt-20 relative bg-gradient-to-br from-[#7C2D12] to-[#B91C1C] rounded-3xl p-12 text-white shadow-2xl transform rotate-[-1deg]">
            <div className="absolute -top-4 left-1/4 w-32 h-8 bg-[#CA8A04] opacity-50 transform -rotate-12"></div>
            <div className="absolute -bottom-4 right-1/4 w-32 h-8 bg-[#FEF2F2] opacity-30 transform rotate-12"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Amatic SC', cursive" }}>
                想快速生成音乐？
              </h3>
              <p className="text-xl mb-8" style={{ fontFamily: "'Cabin', sans-serif" }}>
                试试 AI 音乐生成工具，30秒创作完整歌曲
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#CA8A04] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#B8860B] hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                style={{ fontFamily: "'Cabin', sans-serif" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                立即免费体验
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-[#7C2D12] mt-20 py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <svg className="w-12 h-12 text-[#7C2D12]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <svg className="w-12 h-12 text-[#CA8A04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
            </svg>
          </div>
          <p className="text-[#7C2D12] font-bold text-2xl mb-2" style={{ fontFamily: "'Amatic SC', cursive" }}>
            {siteConfig.name}
          </p>
          <p className="text-[#450A0A] mb-4" style={{ fontFamily: "'Cabin', sans-serif" }}>
            用创意和热情，打造专属节日音乐
          </p>
          <p className="text-gray-500 text-sm">© 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
