export default function LandingPage({ onOpenLogin, onOpenRegister }) {
    return (
        <div className="h-screen overflow-y-auto flex items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center my-auto">
                <div className="mb-10 fade-in-up">
                    <div className="mb-8">
                        <span className="text-9xl glow float">⚡</span>
                    </div>
                    <h1 className="text-7xl md:text-8xl font-bold gradient-text mb-6">Analytica</h1>
                    <p className="text-slate-300 text-2xl md:text-3xl mb-4 font-light">
                        AI-Powered Analytics Platform
                    </p>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Transform your data into actionable insights with the power of artificial intelligence.
                        Upload, analyze, and visualize your datasets effortlessly.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 fade-in-up">
                    <button
                        onClick={onOpenLogin}
                        className="btn-primary btn-rotating-border px-12 py-4 text-lg w-full sm:w-auto"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={onOpenRegister}
                        className="btn-secondary px-12 py-4 text-lg w-full sm:w-auto"
                    >
                        Create Account
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
                    <div className="glass-card p-8 hover:scale-105 transition-all duration-500">
                        <div className="text-5xl mb-4">🤖</div>
                        <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                        <p className="text-slate-400">Leverage Google Gemini AI for intelligent data analysis</p>
                    </div>
                    <div className="glass-card p-8 hover:scale-105 transition-all duration-500">
                        <div className="text-5xl mb-4">📊</div>
                        <h3 className="text-xl font-bold text-white mb-2">Visualizations</h3>
                        <p className="text-slate-400">Beautiful charts and graphs generated automatically</p>
                    </div>
                    <div className="glass-card p-8 hover:scale-105 transition-all duration-500">
                        <div className="text-5xl mb-4">💬</div>
                        <h3 className="text-xl font-bold text-white mb-2">Chat Interface</h3>
                        <p className="text-slate-400">Ask questions about your data in natural language</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
