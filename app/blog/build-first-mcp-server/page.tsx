import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Build Your First MCP Server: A Complete Beginner\'s Guide',
  description:
    'Step-by-step tutorial for building a Model Context Protocol server from scratch. Uses MCPize for fast scaffolding and covers local testing and connecting to AI clients.',
  keywords: ['build mcp server', 'mcp tutorial', 'model context protocol', 'mcp development', 'mcpize'],
};

export default function BuildFirstMcpServerPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 25, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How to Build Your First MCP Server: A Complete Beginner&apos;s Guide
        </h1>
        <p className="text-zinc-400 text-lg">
          The Model Context Protocol (MCP) is becoming the standard for connecting AI assistants to
          external tools and data sources. In this guide, you&apos;ll build your first MCP server
          from scratch.
        </p>
        <div className="flex flex-wrap gap-2">
          {['mcp', 'model context protocol', 'tutorial', 'development', 'mcpize'].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You&apos;ll Need</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Node.js 18+ installed</li>
          <li>A text editor (Cursor, VS Code, or any editor you prefer)</li>
          <li>Basic JavaScript/TypeScript knowledge</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 1: Install MCPize</h2>
        <p className="text-zinc-300">
          The fastest way to create an MCP server is using <strong>MCPize</strong>, a tool that
          scaffolds MCP servers automatically:
        </p>
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm overflow-x-auto">
          <code className="text-emerald-400">npm install -g @modelcontextprotocol/mcpize</code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 2: Scaffold Your Server</h2>
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm overflow-x-auto">
          <code className="text-zinc-300">
            {`mcpize create my-first-server --template typescript
cd my-first-server
npm install`}
          </code>
        </pre>
        <p className="text-zinc-300">
          This creates a TypeScript project with the MCP SDK pre-configured.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 3: Define Your Tools</h2>
        <p className="text-zinc-300">Open `src/index.ts` and add your first tool:</p>
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm overflow-x-auto">
          <code className="text-zinc-300">
            {`import { mcp } from '@modelcontextprotocol/sdk';

export const server = mcp.server({
  name: 'my-first-server',
  version: '1.0.0',
});

server.tool(
  'get_weather',
  'Get the current weather for a city',
  {
    city: { type: 'string', description: 'City name' }
  },
  async ({ city }) => {
    // Your tool logic here
    return { content: \`The weather in \${city} is sunny.\` };
  }
);`}
          </code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 4: Test Locally</h2>
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm overflow-x-auto">
          <code className="text-zinc-300">
            {`npm run build
npm start`}
          </code>
        </pre>
        <p className="text-zinc-300">
          You should see output indicating your MCP server is running and ready to accept
          connections.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 5: Connect to an AI Client</h2>
        <p className="text-zinc-300">
          Once running, you can connect to clients that support MCP (like Cursor or Claude Desktop)
          by adding this to your client config:
        </p>
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm overflow-x-auto">
          <code className="text-zinc-300">
            {`{
  "mcpServers": {
    "my-first-server": {
      "command": "node",
      "args": ["/path/to/your/server/dist/index.js"]
    }
  }
}`}
          </code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-zinc-300">Now that you have a working MCP server, you can:</p>
        <ol className="list-decimal list-inside text-zinc-300 space-y-2">
          <li>
            <strong>Add more tools</strong> — Each tool you add extends what AI assistants can do
          </li>
          <li>
            <strong>Deploy it</strong> — Use a hosting platform to make your server accessible
          </li>
          <li>
            <strong>Share it</strong> — Publish to GitHub or npm for others to use
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Recommended Hosting</h2>
        <p className="text-zinc-300">
          For development testing, localhost works fine. For production MCP servers, consider
          platforms with good uptime and easy deployment. Check out our{' '}
          <a href="/blog/best-mcp-hosting-2026" className="text-emerald-400 hover:underline">
            MCP hosting comparison guide
          </a>{' '}
          for detailed recommendations.
        </p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-zinc-200">Affiliate note:</p>
          <p className="text-sm text-zinc-400">
            Using our MCPize referral link supports this guide at no extra cost:
          </p>
          <a
            href="https://mcpize.com?ref=A7RDJ"
            className="text-emerald-400 hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCPize → (mcpize.com?ref=A7RDJ)
          </a>
        </div>
      </section>
    </article>
  );
}
