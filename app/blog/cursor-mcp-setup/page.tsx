import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Set Up MCP in Cursor: Complete Setup Guide in 2026',
  description:
    'Learn how to connect MCP servers to Cursor AI. Step-by-step guide covering Cursor settings, JSON configuration, and the best MCP servers to use with Cursor.',
  keywords: [
    'cursor mcp',
    'cursor mcp setup',
    'cursor ai mcp server',
    'cursor extension mcp',
    'mcp cursor',
  ],
};

export default function CursorMcpSetupPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 30, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How to Set Up MCP in Cursor: Complete Setup Guide in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          Cursor is one of the most AI-native code editors available today, and adding{' '}
          <strong className="text-zinc-200">Model Context Protocol (MCP)</strong> support takes it to
          the next level. This guide walks you through the complete setup — from enabling MCP in
          Cursor to connecting production-grade servers — in about 15 minutes.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'cursor mcp',
            'cursor mcp setup',
            'cursor ai mcp server',
            'cursor extension mcp',
            'mcp cursor',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Why Use MCP with Cursor?
          </h2>
          <p>
            Cursor already brings powerful AI assistance directly into your code editor — autocompletes,
            chat, and refactoring all powered by large language models. But by itself, Cursor operates
            in a sandbox. It knows your open files. It does not know your GitHub repos, your running
            databases, or your production logs.
          </p>
          <p>
            <strong className="text-zinc-200">MCP bridges that gap.</strong> When you connect an MCP
            server to Cursor, your AI assistant gains real-time access to external tools and data. You
            can ask Cursor to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pull the latest commits and issues from your GitHub repository</li>
            <li>Query your PostgreSQL or MySQL database directly from a chat prompt</li>
            <li>Search the web without leaving the editor</li>
            <li>Read and write files outside the current project directory</li>
            <li>Interact with Slack, Notion, or other workplace tools</li>
          </ul>
          <p>
            The result is an AI coding assistant that is genuinely aware of your entire development
            context — not just the file you happen to have open.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Prerequisites</h2>
          <p>Before starting, make sure you have the following:</p>
          <div className="space-y-3">
            {[
              {
                name: 'Cursor installed',
                desc: 'Download Cursor from cursor.com. The free tier supports MCP connections, though some advanced features require a Pro subscription.',
              },
              {
                name: 'Node.js 18+',
                desc: 'Most MCP servers run on Node.js. Install it via nodejs.org or use a version manager like nvm. Verify with: node --version',
              },
              {
                name: 'npm or pnpm',
                desc: ' Comes bundled with Node.js. You will need this to install MCP server packages.',
              },
              {
                name: 'A Cursor account',
                desc: 'Sign up at cursor.com. An account is required to enable MCP features and sync settings across devices.',
              },
            ].map((item) => (
              <div key={item.name} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-semibold text-zinc-100">{item.name}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            How to Enable MCP in Cursor
          </h2>
          <p>
            Cursor does not expose MCP settings through a dedicated UI panel yet. Instead, MCP
            configuration is managed through a JSON file that Cursor reads on startup. Here is the
            full walkthrough.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 1: Open Cursor Settings</h3>
            <p>
              Launch Cursor and open the settings panel. You can do this by pressing{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">Cmd + ,</code> (macOS) or{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">Ctrl + ,</code> (Windows/Linux).
              Navigate to the <strong className="text-zinc-200">Features</strong> section and scroll
              down to <strong className="text-zinc-200">MCP</strong>.
            </p>
            <p>
              If you do not see an MCP section yet, make sure you are on the latest version of Cursor
              — the feature was added in version 0.4x. Update Cursor if needed.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 2: Locate the MCP Configuration File</h3>
            <p>
              Cursor stores MCP configuration in a JSON file at:
            </p>
            <p>
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm block mt-1">
                ~/Library/Application Support/Cursor/cursor_mcp_config.json
              </code>
            </p>
            <p className="text-sm text-zinc-500">
              (macOS) — On Windows it is at{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">%APPDATA%/Cursor/cursor_mcp_config.json</code>
            </p>
            <p>
              You can also access this file directly from Cursor Settings &rarr; Features &rarr; MCP
              by clicking <strong className="text-zinc-200">Edit JSON</strong>.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 3: Add Your First MCP Server</h3>
            <p>
              Open the configuration file and add your first MCP server. Below is a complete example
              using the popular <strong className="text-zinc-200">filesystem</strong> MCP server:
            </p>
            <pre className="bg-zinc-950 border border-zinc-700 rounded-lg p-4 overflow-x-auto text-sm text-zinc-300">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": {
        "allowedDirectory": "/Users/yourname/projects"
      }
    }
  }
}`}
            </pre>
            <p className="text-sm text-zinc-500">
              This config tells Cursor to launch a filesystem MCP server that is only allowed to
              access <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">/Users/yourname/projects</code>.
              Always scope access with <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">allowedDirectory</code> for security.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Adding MCP Servers to Cursor — JSON Config Deep Dive
          </h2>
          <p>
            The JSON configuration format follows the standard MCP client specification. Each server
            entry requires at minimum a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">command</code>{' '}
            and <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">args</code> field. Here is
            the anatomy of a full Cursor MCP config:
          </p>
          <pre className="bg-zinc-950 border border-zinc-700 rounded-lg p-4 overflow-x-auto text-sm text-zinc-300">
{`{
  "mcpServers": {
    "server-name": {
      "command": "npx",           // or "node" for local JS servers
      "args": ["-y", "package-name"],
      "env": {
        "KEY": "VALUE"            // server-specific environment variables
      },
      "scope": "project"          // "project" or "global"
    }
  }
}`}
          </pre>
          <p>
            The <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">scope</code> field
            determines whether the server is available to just the current project or to all Cursor
            projects. Use <strong className="text-zinc-200">project</strong> scope for team-specific
            servers and <strong className="text-zinc-200">global</strong> for universal tools like
            web search.
          </p>
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-300">
              <strong>Production tip:</strong> For servers that need to run continuously and handle
              real workloads, consider hosting them with{' '}
              <a
                href="https://mcpize.com?ref=A7RDJ"
                className="underline"
              >
                MCPize
              </a>
              . It handles deployment, scaling, and access management — no server运维 required.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Testing MCP Connections Inside Cursor
          </h2>
          <p>
            After saving your configuration file, restart Cursor. You should see an MCP indicator
            (usually a small tool icon) in the Cursor AI chat panel when servers are active.
          </p>
          <p>
            To verify a connection is working, try asking Cursor a question that triggers the MCP
            server. For example, with the filesystem server:
          </p>
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 italic text-zinc-400">
            "List all the TypeScript files in my projects directory that were modified in the last 7 days."
          </div>
          <p>
            If Cursor responds using the MCP tool, the connection is live. If it fails or says the
            tool is unavailable, check the console for error messages and verify your JSON config
            is valid.
          </p>
          <p>
            You can also use the{' '}
            <a
              href="/blog/mcp-inspector-cli"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCP Inspector CLI
            </a>{' '}
            to test server connections independently before connecting them to Cursor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Recommended MCP Servers for Cursor Users
          </h2>
          <p>
            Here are the most useful MCP servers to connect to Cursor in 2026, all available on the{' '}
            <a
              href="https://mcpize.com/marketplace"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize Marketplace
            </a>
            :
          </p>
          <div className="space-y-3">
            {[
              {
                name: 'Filesystem',
                package: '@modelcontextprotocol/server-filesystem',
                desc: 'Read and write files outside the current project. Essential for cross-directory searches and bulk edits. Scope carefully with allowedDirectory.',
              },
              {
                name: 'GitHub',
                package: '@modelcontextprotocol/server-github',
                desc: 'Browse repos, read issues, review PRs, and check CI status — all from inside Cursor. Set up with a personal access token.',
              },
              {
                name: 'Brave Search',
                package: '@modelcontextprotocol/server-brave-search',
                desc: 'Web search directly from the Cursor chat. Great for looking up documentation, library versions, or Stack Overflow answers without switching tabs.',
              },
              {
                name: 'PostgreSQL',
                package: '@modelcontextprotocol/server-postgres',
                desc: 'Run SQL queries against your database and get results back in natural language. Useful for debugging data issues or generating reports.',
              },
              {
                name: 'Slack',
                package: '@modelcontextprotocol/server-slack',
                desc: 'Send messages, check channel activity, and manage notifications from Cursor. Perfect for dropping a quick "deployment done" message mid-sprint.',
              },
            ].map((server) => (
              <div key={server.name} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-semibold text-zinc-100">
                  {server.name}{' '}
                  <span className="text-xs text-zinc-500 font-normal">
                    ({server.package})
                  </span>
                </h3>
                <p className="text-sm text-zinc-400">{server.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Common Issues and Fixes</h2>
          <div className="space-y-3">
            {[
              {
                problem: 'MCP section not visible in Cursor settings',
                solution: 'Update Cursor to the latest version. MCP support was added in Cursor 0.4x. If it is still missing after updating, check that you are signed into a Cursor account.',
              },
              {
                problem: 'Server starts but Cursor shows "tool unavailable"',
                solution: 'Check the JSON config for typos. A missing comma or unmatched brace will silently prevent servers from loading. Validate your JSON at jsonformatter.curiouscat.com or similar.',
              },
              {
                problem: '"command not found" error for npx',
                solution: 'Ensure Node.js is installed and npx is in your PATH. Run which npx in your terminal to confirm. If missing, reinstall Node.js.',
              },
              {
                problem: 'Filesystem server access denied errors',
                solution: 'The allowedDirectory in your config must exactly match the directory you are trying to access. Trailing slashes matter — use a normalized path without trailing slashes.',
              },
              {
                problem: 'GitHub server returns 401 Unauthorized',
                solution: 'Generate a new personal access token at github.com/settings/tokens. Make sure it has the required scopes (repo for full repo access, read:user for user data). Paste it into the env.GITHUB_PERSONAL_ACCESS_TOKEN field.',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-semibold text-zinc-100 mb-1">❌ {item.problem}</h3>
                <p className="text-sm text-zinc-400">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Boost Your Cursor Workflow with Raycast</h2>
          <p>
            While Cursor handles your AI-assisted coding,{' '}
            <a
              href="https://raycast.com/?via=zhang-yao"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Raycast
            </a>{' '}
            supercharges the rest of your macOS workflow. Think of it as a universal command bar
            that launches apps, runs scripts, manages clipboard history, and integrates with
            dozens of tools — all without leaving the keyboard.
          </p>
          <p>
            Used together, Cursor and Raycast form a powerful pair: Cursor for AI-first code
            editing, Raycast for everything else. Many developers find that once they go all-in
            on Raycast, switching back to Spotlight feels like downgrading.
          </p>
          <p>
            <a
              href="https://raycast.com/?via=zhang-yao"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Get Raycast free →
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Get Started Today</h2>
          <p>
            Setting up MCP in Cursor takes less than 15 minutes. Here is your action plan to get
            running right now:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-zinc-200">Open Cursor Settings</strong> (Cmd + ,) and
              navigate to Features &rarr; MCP. Click <strong className="text-zinc-200">Edit JSON</strong>.
            </li>
            <li>
              <strong className="text-zinc-200">Add the filesystem MCP server</strong> using the
              JSON config example above. Replace <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">/Users/yourname/projects</code>{' '}
              with your actual project directory.
            </li>
            <li>
              <strong className="text-zinc-200">Restart Cursor</strong> and look for the MCP
              tool indicator in the AI chat panel.
            </li>
            <li>
              <strong className="text-zinc-200">Ask Cursor</strong> to read or write a file
              outside your current project to verify the connection works.
            </li>
            <li>
              <strong className="text-zinc-200">Browse the MCPize Marketplace</strong> and add
              more servers — the GitHub and Brave Search servers are particularly powerful
              additions.
            </li>
          </ol>
          <p>
            Once you have your first MCP server connected and working, you will immediately see how
            much more context-aware your Cursor AI assistant becomes. From there, it is a matter of
            exploring which servers fit your workflow best.
          </p>
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-300">
              <strong>Ready to scale?</strong>{' '}
              <a
                href="https://mcpize.com?ref=A7RDJ"
                className="underline"
              >
                Deploy production MCP servers with MCPize
              </a>{' '}
              — no server management required. Their marketplace has one-click installs for
              GitHub, PostgreSQL, Slack, and dozens more.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
