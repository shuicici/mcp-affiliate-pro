import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About MCPGuide — your resource for everything about MCP (Model Context Protocol) in 2026.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">About MCPGuide</h1>
        <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />
      </div>

      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <p>
          MCPGuide is an independent resource for developers and AI builders learning about{' '}
          <strong className="text-zinc-100">MCP (Model Context Protocol)</strong>. We publish
          tutorials, hosting reviews, and practical guides to help you get the most out of this
          emerging standard.
        </p>

        <p>
          MCP was introduced by Anthropic in late 2024 and has since been adopted by OpenAI, Google,
          and virtually every major AI platform. By December 2025, the specification was donated to
          the Linux Foundation, cementing its status as an industry-wide standard.
        </p>

        <p>
          This site is designed to help you understand MCP quickly, deploy your own MCP servers,
          and find the best hosting platforms for your needs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">What We Cover</h2>
        <ul className="space-y-2">
          {[
            'MCP basics and conceptual explanations',
            'Step-by-step MCP server deployment guides',
            'MCP hosting platform reviews and comparisons',
            'Affiliate program details for MCP-related services',
            'Best practices for AI tool integrations',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-zinc-400">
              <span className="text-emerald-400 mt-1">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-7 space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Affiliate Disclosure</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          MCPGuide contains affiliate links. When you click certain links and make a purchase or
          sign up for a service, we may earn a commission at no extra cost to you. We only recommend
          products and services we genuinely believe in. Our editorial content is not influenced by
          affiliate partnerships.
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Currently, we participate in the{' '}
          <a
            href="https://mcpize.com?ref=A7RDJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            MCPize affiliate program
          </a>
          , which offers recurring commissions for referred customers.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Get In Touch</h2>
        <p className="text-zinc-400">
          Have a question, suggestion, or want to collaborate? Feel free to reach out via the
          channel you used to find this site.
        </p>
      </div>
    </div>
  );
}
