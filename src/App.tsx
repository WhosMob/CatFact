import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export default function App() {

  const { data: catfact, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ['catfact'],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact")
      return response.data
    },
             refetchOnWindowFocus: false,
             refetchInterval: false,
             refetchOnReconnect: false,
  })
 
  if (isLoading) {
    return (
      <div className="bg-app flex items-center justify-center">
        <p className="text-sm text-zinc-500 tracking-[0.4em] uppercase">
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
    <div className="bg-app flex flex-col items-center justify-center font-sans">

      <div className="relative z-10 w-full max-w-lg px-8 py-24">

        <p className="text-xs flex justify-center text-zinc-500 tracking-[0.3em] uppercase mb-6 text-center">
          Random Facts About Cats
        </p>

        <h1
          className="text-7xl font-black text-white mb-8 text-center leading-[0.85]"
          style={{ fontFamily: "'Bangers', cursive",  letterSpacing: '0.09em' }}
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

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => refetch()}
            className="relative px-6 py-3 bg-cyan-500 text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-colors tracking-wider uppercase"
          >
            <span className="relative z-10">{isFetching? "Fetching..." : "New Fact"}</span>
          </button>

          <span className="text-xs text-zinc-600 tracking-[0.15em] uppercase">
            {catfact.fact.length} chars
          </span>
        </div>

      </div>

    </div>
  )
}
