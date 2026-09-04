import Nav from '../components/Nav'

export default function About() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center pt-8 px-4">
      <Nav />
      <main className="mt-16 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">About</h1>
      </main>
    </div>
  )
}
