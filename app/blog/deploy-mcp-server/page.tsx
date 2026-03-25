import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Deploy Your First MCP Server: Step-by-Step Guide',
  description:
    'A complete walkthrough for deploying your first MCP server, from choosing a platform to configuring your AI client. No prior MCP experience required.',
  keywords: ['deploy mcp server', 'mcp server setup', 'mcp deployment guide'],
};

export default function DeployMcpServerPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 25, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How to Deploy Your First MCP Server: Step-by-Step Guide
        </h1>
        <p className="text-zinc-400 text-lg">
          You&apos;ve heard about MCP. You understand why it matters. Now you want to actually deploy
          your first MCP server and see it working with an AI client. This guide walks you through
          the process from scratch — no prior MCP experience required.
        </p>
        <div className="flex flex-wrap gap-2">
          {['deploy mcp server', 'mcp server setup', 'mcp deployment'].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Prerequisites</h2>
          <p>Before you start, make sure you have:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-400">
            <li>A basic understanding of what MCP is (see our <a href="/blog/what-is-mcp" className="text-emerald-400 hover:text-emerald-300">What is MCP? guide</a>)</li>
            <li>Node.js 18+ installed (for most MCP server SDKs)</li>
            <li>A hosting platform account (we&apos;ll use MCPize for this walkthrough)</li>
            <li>An MCP-compatible AI client (Claude Desktop, Cursor, or similar)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Step 1: Choose Your MCP Server</h2>
          <p>MCP servers range from general-purpose to highly specialized. Common options include:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-400">
            <li><strong className="text-zinc-200">Filesystem MCP</strong> — Give AI access to your local files</li>
            <li><strong className="text-zinc-200">GitHub MCP</strong> — Connect AI to GitHub repositories, issues, PRs</li>
            <li><strong className="text-zinc-200">Database MCP</strong> — Connect AI to PostgreSQL, MySQL, or other databases</li>
            <li><strong className="text-zinc-200">Browser MCP</strong> — Let AI control a web browser</li>
            <li><strong className="text-zinc-200">Custom MCP</strong> — Build your own for specific business needs</li>
          </ul>
          <p>For your first deployment, let&apos;s start simple: deploy a GitHub MCP server.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Step 2: Set Up Your Hosting</h2>
          <p>Sign up for an MCP hosting platform. We&apos;ll use MCPize as our example:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-zinc-400">
            <li>Go to <a href="https://mcpize.com?ref=A7RDJ" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">mcpize.com</a> and create an account</li>
            <li>Navigate to the marketplace</li>
            <li>Find the &quot;GitHub MCP Server&quot; option</li>
            <li>Click &quot;Deploy&quot;</li>
          </ol>
          <p>Most platforms will ask you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-400">
            <li>Connect your GitHub account (for CI/CD)</li>
            <li>Provide your GitHub Personal Access Token (for repository access)</li>
            <li>Set environment variables</li>
            <li>Choose your region/plan</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Step 3: Configure Your AI Client</h2>
          <p>
            Once your MCP server is deployed, you&apos;ll get a server URL that looks something like:
          </p>
          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm text-emerald-400 overflow-x-auto">
            https://your-server.mcpize.com/github
          </pre>
          <p>In your AI client (e.g., Claude Desktop), add this server configuration to your config file (~/.config/claude/):</p>
          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm text-zinc-300 overflow-x-auto">
{`{
  "mcpServers": {
    "github": {
      "url": "https://your-server.mcpize.com/github"
    }
  }
}`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Step 4: Test It</h2>
          <p>Restart your AI client and try a command that would use the MCP server:</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <p className="text-sm text-zinc-400 italic">
              &quot;Show me the last 5 open issues in my repository called `my-project`&quot;
            </p>
          </div>
          <p>
            If your MCP server is configured correctly, Claude will use the GitHub MCP connection to
            fetch real data from your repository.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Step 5: Monitor and Scale</h2>
          <p>Once deployed, monitor your MCP server&apos;s:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-400">
            <li><strong className="text-zinc-200">Latency</strong> — How fast is it responding?</li>
            <li><strong className="text-zinc-200">Error rate</strong> — Are connections failing?</li>
            <li><strong className="text-zinc-200">Usage</strong> — How many requests are you processing?</li>
          </ul>
          <p>Most hosting platforms provide dashboards for this. Set up alerts for when error rates spike above 1%.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Common Issues and Fixes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-2 text-zinc-400">Problem</th>
                  <th className="text-left py-2 text-zinc-400">Likely Cause</th>
                  <th className="text-left py-2 text-zinc-400">Fix</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {[
                  ['Connection timeout', 'Server still starting', 'Wait 30s, try again'],
                  ['401 Unauthorized', 'Invalid access token', 'Regenerate and update token'],
                  ['403 Forbidden', 'Insufficient permissions', 'Check token scopes'],
                  ['High latency', 'Server region far from client', 'Choose a region closer to you'],
                ].map(([prob, cause, fix]) => (
                  <tr key={prob} className="border-b border-zinc-800">
                    <td className="py-2 text-zinc-400">{prob}</td>
                    <td className="py-2 text-zinc-400">{cause}</td>
                    <td className="py-2 text-emerald-400">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Next Steps</h2>
          <p>Congratulations — you&apos;ve deployed your first MCP server! From here, you can:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-zinc-400">
            <li><strong className="text-zinc-200">Deploy additional MCP servers</strong> — Database access, browser control, etc.</li>
            <li><strong className="text-zinc-200">Build a custom MCP server</strong> — For your specific use case</li>
            <li><strong className="text-zinc-200">Explore the MCP ecosystem</strong> — Browse the growing list of pre-built servers</li>
            <li>
              <strong className="text-zinc-200">Monetize your MCP knowledge</strong> — Join affiliate
              programs and earn recurring commissions by recommending MCP hosting
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Resources</h2>
          <ul className="space-y-2 ml-4">
            <li>
              <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                MCP Official Documentation →
              </a>
            </li>
            <li>
              <a href="https://mcpize.com/marketplace?ref=A7RDJ" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                MCPize Marketplace →
              </a>
            </li>
            <li>
              <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                Anthropic&apos;s MCP Introduction →
              </a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="rounded-xl border border-emerald-500/20 bg-zinc-900/50 p-6 space-y-3">
          <p className="font-semibold text-zinc-100">Ready to deploy your first MCP server?</p>
          <p className="text-sm text-zinc-400">
            Get started with managed MCP hosting on MCPize — native protocol support, auto-scaling,
            and generous affiliate commissions for content creators.
          </p>
          <a
            href="https://mcpize.com?ref=A7RDJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
          >
            Deploy on MCPize →
          </a>
        </div>
      </div>
    </article>
  );
}
