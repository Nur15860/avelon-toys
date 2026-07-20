export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-300/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
            Avelon Toys
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Smart, modern toy shopping built for every family.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover curated toys, fast delivery, and playful designs that make every day more fun.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card title="Featured Toys" description="Explore best sellers and newest arrivals." />
            <Card title="Gift Ideas" description="Find the perfect gift for every age." />
            <Card title="Safe Shipping" description="Fast, secure delivery with friendly support." />
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 text-left shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-none">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
