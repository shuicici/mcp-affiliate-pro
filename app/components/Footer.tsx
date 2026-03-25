import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © 2026 MCPGuide. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <Link href="/blog" className="hover:text-zinc-300 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-zinc-300 transition-colors">About</Link>
          <a
            href="https://mcpize.com?ref=A7RDJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            MCPize ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
