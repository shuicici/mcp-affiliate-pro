import Link from 'next/link';
import { articles } from '@/lib/articles';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="py-20 space-y-6 max-w-3xl">
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
          Model Context Protocol — 2026 Edition
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          MCP Guide — Everything You Need to Know About{' '}
          <span className="text-emerald-400">Model Context Protocol</span> in 2026
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          MCP (Model Context Protocol) is rapidly becoming the universal standard for connecting AI
          applications to external tools, data sources, and services. This guide covers what MCP is,
          how to deploy MCP servers, and the best hosting platforms in 2026.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/blog/what-is-mcp"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Reading
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            All Articles
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 hover:bg-zinc-900/50 transition-all"
            >
              <p className="text-xs text-zinc-500 mb-3">{article.date}</p>
              <h3 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-3">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-zinc-950 p-10 text-center space-y-5">
        <h2 className="text-2xl font-bold">Ready to Deploy Your First MCP Server?</h2>
        <p className="text-zinc-400 max-w-lg mx-auto">
          Join the MCP ecosystem today. Get started with a managed MCP hosting platform and start
          building the next generation of AI applications.
        </p>
        <a
          href="https://mcpize.com?ref=A7RDJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started with MCPize →
        </a>
        <p className="text-xs text-zinc-600">
          Affiliate link. We may earn a commission at no extra cost to you.
        </p>
      </section>
    </div>
  );
}
