import Link from 'next/link';
import { articles } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All articles about MCP, AI integrations, and the best MCP hosting platforms.',
};

export default function BlogPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-3">Blog</h1>
        <p className="text-zinc-400">
          Everything about MCP (Model Context Protocol), AI tool integrations, and hosting guides.
        </p>
      </div>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block border border-zinc-800 rounded-xl p-7 hover:border-emerald-500/40 hover:bg-zinc-900/30 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <p className="text-xs text-zinc-500">{article.date}</p>
                <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{article.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-zinc-600 group-hover:text-emerald-400 transition-colors mt-6">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
