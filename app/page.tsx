import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-pink-50">
      {/* Header */}
      <header className="border-b-4 border-orange-300 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{siteConfig.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Banner */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-pink-200/30 blur-3xl -z-10"></div>
            <div className="inline-block mb-4">
              <span className="text-6xl">🎵</span>
              <span className="text-6xl ml-2">✂️</span>
              <span className="text-6xl ml-2">🎨</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              手工打造你的<br/>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                专属节日音乐
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              从零开始学习音乐制作，用创意和热情，为每个节日创作独一无二的旋律 🎶
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>🚀</span>
                <span>AI 一键生成音乐</span>
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg border-3 border-orange-400 hover:bg-orange-50 hover:shadow-lg transition-all duration-300"
              >
                <span>📚</span>
                <span>学习制作教程</span>
              </Link>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              🎨 探索创作主题
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.theme.categories.map((category, index) => {
                const emojis = ['🎹', '🎸', '🎧', '💡', '🛠️', '🎄']
                const colors = [
                  'from-orange-400 to-amber-400',
                  'from-pink-400 to-rose-400',
                  'from-amber-400 to-yellow-400',
                  'from-rose-400 to-pink-400',
                  'from-yellow-400 to-orange-400',
                  'from-orange-500 to-pink-500'
                ]
                return (
                  <Link
                    key={category}
                    href="/articles"
                    className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 hover:-translate-y-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                    <div className="text-5xl mb-3">{emojis[index]}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                    <p className="text-sm text-gray-600">手工制作指南 →</p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Feature Section */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border-4 border-orange-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                ✨ 为什么选择 DIY 音乐？
              </h3>
              <p className="text-gray-600">用双手创造，用心感受音乐的魅力</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">独一无二</h4>
                <p className="text-sm text-gray-600">每一首都是专属于你的原创作品</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💪</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">技能提升</h4>
                <p className="text-sm text-gray-600">从零基础到音乐制作人的成长之路</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">情感表达</h4>
                <p className="text-sm text-gray-600">用音乐传递你的节日祝福和心意</p>
              </div>
            </div>
          </div>

          {/* AI Tool Promotion */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 rounded-3xl p-10 text-white mb-16 shadow-2xl">
            <div className="absolute top-0 right-0 text-9xl opacity-10">🎵</div>
            <div className="absolute bottom-0 left-0 text-9xl opacity-10">✨</div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🤖</span>
                <h3 className="text-3xl font-bold">没时间手工制作？</h3>
              </div>
              <p className="text-xl mb-6 text-orange-50 leading-relaxed">
                {siteConfig.targetProduct.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span>🚀</span>
                  <span>立即免费体验</span>
                </a>
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-full text-white font-semibold">
                  <span>⚡</span>
                  <span>30秒生成完整歌曲</span>
                </span>
              </div>
            </div>
          </div>

          {/* Related Sites */}
          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>🔗</span>
              <span>相关推荐</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white rounded-xl hover:bg-orange-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-orange-300"
                >
                  <span className="text-base font-bold text-gray-900 block mb-1">{site.name}</span>
                  <span className="text-sm text-orange-600 font-semibold">探索更多 →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-orange-300 mt-20 py-10 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-3">🎨🎵✨</div>
          <p className="text-gray-700 font-semibold text-lg">{siteConfig.name}</p>
          <p className="text-gray-600 text-sm mt-2">用创意和热情，打造专属节日音乐</p>
          <p className="text-gray-500 text-xs mt-4">© 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
