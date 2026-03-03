import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEF2F2]">
      {/* Floating Header with handmade feel */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-4 border-[#7C2D12] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-[#CA8A04]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold text-[#7C2D12]" style={{ fontFamily: "'Amatic SC', cursive" }}>
                {siteConfig.name}
              </h1>
            </div>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center gap-2 bg-[#CA8A04] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all cursor-pointer"
            style={{ fontFamily: "'Cabin', sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            教程
          </Link>
        </div>
      </header>

      {/* Hero Section - Collage Style */}
      <main className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero with rotated elements */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <h2 className="text-6xl md:text-8xl font-bold text-[#7C2D12] mb-6 leading-tight" style={{ fontFamily: "'Amatic SC', cursive" }}>
                手工打造<br/>
                <span className="text-[#CA8A04]">专属节日音乐</span>
              </h2>
              <p className="text-xl text-[#450A0A] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Cabin', sans-serif" }}>
                从零开始学习音乐制作，用创意和热情，为每个节日创作独一无二的旋律
              </p>
            </div>

            {/* CTA Buttons - Staggered */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#CA8A04] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer transform rotate-[-2deg] hover:rotate-0"
                style={{ fontFamily: "'Cabin', sans-serif" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI 一键生成音乐
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-3 bg-white text-[#7C2D12] px-10 py-5 rounded-2xl font-bold text-lg border-4 border-[#7C2D12] hover:bg-[#FEF2F2] hover:shadow-lg transition-all duration-300 cursor-pointer transform rotate-[2deg] hover:rotate-0"
                style={{ fontFamily: "'Cabin', sans-serif" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                学习制作教程
              </Link>
            </div>
          </div>

          {/* Categories - Collage/Scrapbook Layout */}
          <div className="mb-20">
            <h3 className="text-5xl font-bold text-center mb-12 text-[#7C2D12]" style={{ fontFamily: "'Amatic SC', cursive" }}>
              探索创作主题
            </h3>
            
            {/* Masonry-style collage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.theme.categories.map((category, index) => {
                const icons = [
                  <svg key="piano" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>,
                  <svg key="guitar" className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>,
                  <svg key="headphones" className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>,
                  <svg key="lightbulb" className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                  <svg key="tools" className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  <svg key="tree" className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                ]
                
                const rotations = ['rotate-[-3deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[3deg]', 'rotate-[-2deg]', 'rotate-[1deg]']
                const colors = ['#7C2D12', '#B91C1C', '#CA8A04', '#7C2D12', '#B91C1C', '#CA8A04']
                
                return (
                  <Link
                    key={category}
                    href="/articles"
                    className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 hover:-translate-y-2 cursor-pointer ${rotations[index]}`}
                    style={{ borderColor: colors[index] }}
                  >
                    <div className="text-center">
                      <div className="mb-4 flex justify-center" style={{ color: colors[index] }}>
                        {icons[index]}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Amatic SC', cursive", color: colors[index] }}>
                        {category}
                      </h3>
                      <p className="text-sm text-[#450A0A]" style={{ fontFamily: "'Cabin', sans-serif" }}>
                        手工制作指南
                      </p>
                    </div>
                    <div className="absolute -top-3 -right-3 bg-[#CA8A04] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold transform rotate-12 group-hover:rotate-0 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Feature Section - Tape/Sticker Style */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-12 mb-20 border-8 border-[#7C2D12] transform rotate-[-1deg]">
            {/* Decorative tape */}
            <div className="absolute -top-4 left-1/4 w-32 h-8 bg-[#CA8A04] opacity-50 transform -rotate-12"></div>
            <div className="absolute -bottom-4 right-1/4 w-32 h-8 bg-[#B91C1C] opacity-50 transform rotate-12"></div>
            
            <div className="text-center mb-10">
              <h3 className="text-5xl font-bold text-[#7C2D12] mb-4" style={{ fontFamily: "'Amatic SC', cursive" }}>
                为什么选择 DIY 音乐？
              </h3>
              <p className="text-[#450A0A] text-lg" style={{ fontFamily: "'Cabin', sans-serif" }}>
                用双手创造，用心感受音乐的魅力
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                  title: '独一无二',
                  desc: '每一首都是专属于你的原创作品'
                },
                {
                  icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  title: '技能提升',
                  desc: '从零基础到音乐制作人的成长之路'
                },
                {
                  icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  title: '情感表达',
                  desc: '用音乐传递你的节日祝福和心意'
                }
              ].map((feature, i) => (
                <div key={i} className="text-center transform hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4 text-[#CA8A04]">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-[#7C2D12]" style={{ fontFamily: "'Amatic SC', cursive" }}>
                    {feature.title}
                  </h4>
                  <p className="text-[#450A0A]" style={{ fontFamily: "'Cabin', sans-serif" }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tool Promotion - Polaroid Style */}
          <div className="relative bg-gradient-to-br from-[#7C2D12] to-[#B91C1C] rounded-3xl p-12 text-white mb-20 shadow-2xl transform rotate-[1deg]">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#CA8A04] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FEF2F2] rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-4xl font-bold" style={{ fontFamily: "'Amatic SC', cursive" }}>
                  没时间手工制作？
                </h3>
              </div>
              <p className="text-xl mb-8 leading-relaxed" style={{ fontFamily: "'Cabin', sans-serif" }}>
                {siteConfig.targetProduct.description}
              </p>
              <div className="flex flex-wrap gap-4">
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
                <span className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-5 rounded-2xl font-semibold" style={{ fontFamily: "'Cabin', sans-serif" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30秒生成完整歌曲
                </span>
              </div>
            </div>
          </div>

          {/* Related Sites - Pin Board Style */}
          <div className="bg-white rounded-3xl p-10 border-4 border-[#7C2D12] shadow-lg">
            <h3 className="text-4xl font-bold text-[#7C2D12] mb-8 flex items-center gap-3" style={{ fontFamily: "'Amatic SC', cursive" }}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              相关推荐
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.relatedSites.map((site, i) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-[#FEF2F2] rounded-2xl hover:bg-[#CA8A04] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-3 border-[#7C2D12] cursor-pointer transform ${i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
                >
                  <span className="text-xl font-bold block mb-2" style={{ fontFamily: "'Amatic SC', cursive" }}>
                    {site.name}
                  </span>
                  <span className="text-sm font-semibold flex items-center gap-2" style={{ fontFamily: "'Cabin', sans-serif" }}>
                    探索更多
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
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
