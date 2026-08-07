import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export default function App() {

  const { data: catfact, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['catfact'],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact")
      return response.data
    }
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-sm text-zinc-500 tracking-[0.2em] uppercase">
          Loading...
        </p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        {error.message || 'error, something wrong'}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden font-sans">

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-600 h-125 rounded-full opacity-70 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, #06b6d4 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-8 pt-28">

        <p className="text-xs text-zinc-500 tracking-[0.3em] uppercase mb-4 text-center">
          Random Facts
        </p>

        <h1
          className="text-7xl font-black text-white mb-8 text-center leading-[0.85]"
          style={{ fontFamily: "'Bangers', cursive", letterSpacing: '0.05em' }}
        >
          CAT FACT
        </h1>

        <div
          className="rounded-2xl p-6 mb-8 h-40 overflow-y-auto border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <p
            className="text-lg text-zinc-300 leading-relaxed"
            style={{ letterSpacing: '-0.01em' }}
          >
            {catfact.fact}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-600 tracking-[0.15em] uppercase">
            {catfact.fact.length} chars
          </span>

          <button
            onClick={() => refetch()}
            className="relative px-6 py-3 bg-cyan-500 text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-colors tracking-[0.05em] uppercase"
          >
            <span className="relative z-10">New Fact</span>
          </button>
        </div>

      </div>

    </div>
  )
}
