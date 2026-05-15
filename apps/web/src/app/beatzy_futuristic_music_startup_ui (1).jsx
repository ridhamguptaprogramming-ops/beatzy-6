export default function BeatzyUI() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 via-black to-cyan-900/20 blur-3xl"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Beatzy
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-pink-400 transition">Features</a>
          <a href="#ai" className="hover:text-pink-400 transition">AI Tools</a>
          <a href="#marketplace" className="hover:text-pink-400 transition">Marketplace</a>
          <a href="#community" className="hover:text-pink-400 transition">Community</a>
        </div>

        <button className="px-5 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-pink-500/30">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-24 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-400 mb-6">
            🚀 AI Powered Music Ecosystem
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            The Future Of
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Music Creation
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
            Beatzy combines AI music generation, streaming, creator monetization,
            social music reels, and a beat marketplace into one futuristic platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:scale-105 transition shadow-2xl shadow-pink-500/30">
              Start Creating
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <h3 className="text-3xl font-bold text-pink-400">10M+</h3>
              <p className="text-gray-400 text-sm mt-1">AI Songs Generated</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-violet-400">500K+</h3>
              <p className="text-gray-400 text-sm mt-1">Creators Joined</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">120+</h3>
              <p className="text-gray-400 text-sm mt-1">Countries Reached</p>
            </div>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative flex justify-center">
          <div className="absolute w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-6 w-[340px] shadow-2xl shadow-pink-500/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-400 text-sm">Now Playing</p>
                <h3 className="text-2xl font-bold mt-1">Chill Vibes</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-xl">
                🎵
              </div>
            </div>

            <div className="h-40 rounded-3xl bg-gradient-to-br from-pink-500/30 to-cyan-500/20 border border-white/10 flex items-center justify-center text-6xl mb-6">
              🌌
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>AI Music Generation</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Beat Marketplace</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:scale-105 transition">
              Generate AI Track
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 lg:px-20 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            Core <span className="text-pink-500">Features</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Everything creators need to build, grow, and monetize music in one ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Music Generator',
              icon: '🤖',
              desc: 'Generate beats, melodies, lyrics, vocals, and album art using AI prompts.'
            },
            {
              title: 'Smart Streaming',
              icon: '🎧',
              desc: 'Discover personalized playlists powered by AI recommendations.'
            },
            {
              title: 'Beat Marketplace',
              icon: '💰',
              desc: 'Buy and sell beats, loops, drum kits, and vocal packs globally.'
            },
            {
              title: 'Short Music Reels',
              icon: '📱',
              desc: 'Create viral vertical music clips and remix challenges.'
            },
            {
              title: 'Music Community',
              icon: '👥',
              desc: 'Live rooms, fan clubs, battles, collaborations, and livestreams.'
            },
            {
              title: 'AI Creator Assistant',
              icon: '🧠',
              desc: 'Generate lyrics, captions, hashtags, promotion plans, and cover art.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/10"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Startup Potential Section */}
      <section className="relative z-10 px-8 lg:px-20 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6 backdrop-blur-md">
            📈 Massive Startup Potential
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight max-w-5xl mx-auto">
            Building The Future Of
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {' '}Digital Music
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beatzy combines Artificial Intelligence, Music Streaming, Creator Economy,
            and Social Entertainment into one futuristic ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI Music Industry',
              value: '$38B+',
              icon: '🤖',
              desc: 'The AI music market is growing rapidly with massive global demand.'
            },
            {
              title: 'Creator Economy',
              value: '$250B+',
              icon: '🎤',
              desc: 'Creators and independent artists are becoming the future of entertainment.'
            },
            {
              title: 'Music Streaming',
              value: '1B+',
              icon: '🎧',
              desc: 'Billions of users consume music digitally every single day.'
            },
            {
              title: 'Short Video Market',
              value: 'Fastest Growing',
              icon: '📱',
              desc: 'Short-form music content is dominating social media platforms.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:scale-105 transition duration-300 shadow-2xl shadow-pink-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {item.value}
                </h3>

                <h4 className="text-xl font-bold mb-4">{item.title}</h4>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 p-12 lg:p-20 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,128,0.15),transparent_40%)]"></div>

          <div className="relative z-10">
            <div className="text-7xl mb-8">🚀</div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto">
              AI + Music + Community + Creator Economy
            </h2>

            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              That combination gives Beatzy massive startup potential in the future digital entertainment industry.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-3xl font-black text-pink-400">Global Scale</h3>
                <p className="text-gray-400 mt-2">Worldwide creator ecosystem</p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-3xl font-black text-violet-400">AI Powered</h3>
                <p className="text-gray-400 mt-2">Future-ready technology</p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-3xl font-black text-cyan-400">Creator First</h3>
                <p className="text-gray-400 mt-2">Monetization & growth tools</p>
              </div>
            </div>

            <button className="mt-12 px-10 py-5 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-lg hover:scale-105 transition shadow-2xl shadow-pink-500/30">
              Build The Future With Beatzy
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 lg:px-20 py-10 border-t border-white/10 text-center text-gray-500">
        © 2026 Beatzy — AI Powered Music Ecosystem
      </footer>
    </div>
  );
}
