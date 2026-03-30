import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Connect MCP to GitHub: Complete Setup Guide in 2026',
  description:
    'Learn how to connect your AI tools (Claude Desktop, Cursor, VS Code) to GitHub using the Model Context Protocol. Step-by-step tutorial with MCP Inspector for testing.',
  keywords: [
    'mcp github',
    'mcp github integration',
    'connect mcp to github',
    'mcp server github',
    'github mcp claude',
    'github mcp cursor',
  ],
};

export default function McpGithubIntegrationPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 30, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How to Connect MCP to GitHub: Complete Setup Guide in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          GitHub is where developers spend a significant chunk of their day — reviewing PRs, checking
          issues, reading code. Now imagine your AI assistant could do all of that <strong className="text-zinc-200">inside
          your existing chat interface</strong>, without switching tabs or context-switching between
          tools. That is exactly what connecting MCP to GitHub unlocks. This guide walks you through
          the entire setup, from prerequisites to testing with MCP Inspector, in under 30 minutes.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp github',
            'mcp github integration',
            'connect mcp to github',
            'mcp server github',
            'github mcp claude',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why Connect MCP to GitHub?</h2>
          <p>
            Before diving into the how, let us talk about the why. GitHub MCP integration is one of
            the most practical MCP use cases because it eliminates a constant source of friction:
            <strong className="text-zinc-200"> switching between your AI assistant and your code
            repository</strong>.
          </p>
          <p>Here is what changes once your AI is connected to GitHub via MCP:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Ask about code without leaving the chat</strong> — Pull
              request descriptions, recent commit history, file contents, and branch diffs become
              queryable in plain English.
            </li>
            <li>
              <strong className="text-zinc-200">Automate routine GitHub tasks</strong> — Create issues,
              post comments, label PRs, or summarize review threads using conversational prompts.
            </li>
            <li>
              <strong className="text-zinc-200">Faster code reviews</strong> — Feed a PR diff into
              your AI and get a structured review summary in seconds.
            </li>
            <li>
              <strong className="text-zinc-200">Context-aware coding assistance</strong> — Your AI
              can read the actual code in your repository, not just the code you paste into the chat.
            </li>
          </ul>
          <p>
            Whether you are a solo developer or part of a team, this workflow shift — from
            tab-switching to conversational GitHub interaction — translates to real time savings over
            the course of a week.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">What You Need Before Starting</h2>
          <p>Make sure you have the following ready before you begin the setup:</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">1. A GitHub Personal Access Token (PAT)</h3>
              <p>
                MCP servers authenticate to GitHub on your behalf using a PAT. Go to{' '}
                <a
                  href="https://github.com/settings/tokens"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  github.com/settings/tokens
                </a>{' '}
                and generate a new token. Select the following scopes at minimum:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">repo</code> — Full repository access</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">read:user</code> — Read user profile info</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">read:org</code> — Read organization membership (if applicable)</li>
              </ul>
              <p className="text-sm text-zinc-500 mt-2">
                Treat your PAT like a password — never commit it to version control.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">2. An MCP-Compatible AI Host</h3>
              <p>
                You need an AI client with native MCP support. The most common options in 2026:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-zinc-400">
                <li><strong className="text-zinc-300">Claude Desktop</strong> — Full MCP support, easiest for beginners</li>
                <li><strong className="text-zinc-300">Cursor</strong> — MCP support via settings, great for AI-first coding</li>
                <li><strong className="text-zinc-300">VS Code</strong> — MCP extension available from Microsoft</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">3. Node.js (for MCP Inspector)</h3>
              <p>
                If you plan to test your GitHub MCP connection using the MCP Inspector CLI tool (which
                we recommend), you will need Node.js 18+ installed on your machine.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Step-by-Step: Connecting GitHub MCP to Claude Desktop
          </h2>
          <p>
            Claude Desktop is the most straightforward MCP host to configure, making it the best
            starting point. These steps work on macOS and Windows.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 1: Find the GitHub MCP Server</h3>
            <p>
              The most widely-used open-source GitHub MCP server is maintained by the{' '}
              <a
                href="https://github.com/modelcontextprotocol/servers"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                modelcontextprotocol/servers
              </a>{' '}
              GitHub organization. You can also find it on the{' '}
              <a
                href="https://mcpize.com/marketplace"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                MCPize Marketplace
              </a>{' '}
              with pre-configured hosting options. For this guide, we will configure it manually
              using the open-source server.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 2: Locate Your Claude Desktop Config File</h3>
            <p>
              Open your terminal and open (or create) the Claude Desktop configuration file:
            </p>
            <p className="text-sm text-zinc-500">macOS:</p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-3 text-sm overflow-x-auto">
              <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
            </pre>
            <p className="text-sm text-zinc-500 mt-3">Windows:</p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-3 text-sm overflow-x-auto">
              <code>%APPDATA%/Claude/claude_desktop_config.json</code>
            </pre>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 3: Add the GitHub MCP Server Configuration</h3>
            <p>
              Edit the config file to add your GitHub MCP server. Replace{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded">YOUR_GITHUB_TOKEN_HERE</code> with
              your actual GitHub Personal Access Token from Step 1.
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-3 text-sm overflow-x-auto text-zinc-300">
{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN_HERE"
      }
    }
  }
}`}
            </pre>
            <p className="text-sm text-zinc-500">
              Note: The <code className="bg-zinc-800 px-1 py-0.5 rounded">npx</code> approach
              downloads and runs the server on demand. For production, you may want to install it
              globally or use a hosted version via{' '}
              <a
                href="https://mcpize.com?ref=A7RDJ"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                MCPize
              </a>
              .
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 4: Restart Claude Desktop</h3>
            <p>
              Quit Claude Desktop completely (not just minimize), then relaunch it. In the chat
              input box, you should now see a small hammer icon — this indicates that MCP tools are
              available. Click it to expand the list of available GitHub operations.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 5: Test with a Simple Prompt</h3>
            <p>
              Try asking Claude something like: "Show me the last 5 commits in your repository" or
              "List the open pull requests in my account." If the connection is working, Claude will
              call the GitHub MCP server and return real data from your GitHub account.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Using MCP Inspector CLI to Test Your Connection</h2>
          <p>
            MCP Inspector is a command-line tool that lets you test MCP servers in isolation before
            connecting them to your AI host. This is invaluable for debugging connection issues
            without having to restart your AI client repeatedly.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Install and Run MCP Inspector</h3>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-3 text-sm overflow-x-auto">
              <code>{`# Install globally via npm
npm install -g @modelcontextprotocol/inspector

# Run the inspector with your GitHub server
npx @modelcontextprotocol/inspector \\
  npx -y @modelcontextprotocol/server-github`}</code>
            </pre>
            <p>
              Set the <code className="bg-zinc-800 px-1 py-0.5 rounded">GITHUB_PERSONAL_ACCESS_TOKEN</code>{' '}
              environment variable before running if your server requires authentication.
            </p>
          </div>
          <p>
            When MCP Inspector launches, it provides an interactive interface showing all available
            tools exposed by the server. You can invoke each tool directly and inspect the JSON
            request/response cycle. This is the fastest way to verify that your token has the correct
            scopes and that the server is functioning as expected.
          </p>
          <p>
            Once you have validated the connection in MCP Inspector, you can be confident that the
            setup in Claude Desktop (or any other MCP host) will work correctly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Troubleshooting Common Issues</h2>
          <p>
            Even with clear documentation, things can go wrong. Here are the most common issues
            developers hit when connecting MCP to GitHub and how to fix them.
          </p>

          <div className="space-y-3">
            {[
              {
                problem: 'Token scope missing',
                solution: 'If you get a 403 error, your PAT likely lacks the required scopes. Go back to github.com/settings/tokens, edit your token, and add `repo`, `read:user`, and `read:org` scopes.',
              },
              {
                problem: 'Config file not found',
                solution: 'If Claude Desktop does not pick up your config, make sure the JSON is valid (no trailing commas). Use a JSON validator before saving. Also confirm you are editing the correct file path for your OS.',
              },
              {
                problem: 'npx download fails or times out',
                solution: 'Corporate firewalls or slow connections can block npx. Try installing the server package globally with `npm install -g @modelcontextprotocol/server-github` and update the config to point to the global install path instead of using npx.',
              },
              {
                problem: 'MCP hammer icon not showing',
                solution: 'Restart Claude Desktop fully — a simple window close does not restart the underlying MCP client process. If the icon still does not appear, check the Claude Desktop logs for MCP-related error messages.',
              },
              {
                problem: 'Rate limiting from GitHub API',
                solution: 'GitHub API rate limits apply to MCP servers too. If you are hitting rate limits, consider using a hosted MCP server solution like MCPize that manages token rotation and caching for you.',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-semibold text-zinc-100 mb-1">
                  ❌ {item.problem}
                </h3>
                <p className="text-sm text-zinc-400">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Deploying Your Own GitHub MCP Server
          </h2>
          <p>
            Running the GitHub MCP server via <code className="bg-zinc-800 px-1 py-0.5 rounded">npx</code> works
            great for local development and experimentation. But if you want a more robust setup —
            with automatic restarts, better performance, and support for team-wide access — you will
            want to deploy your own GitHub MCP server.
          </p>
          <p>
            Deploying a self-hosted MCP server means your team shares a single authenticated server
            instance, which is especially useful for organizations that want centralized logging,
            token management, and access control.
          </p>
          <p>
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize
            </a>{' '}
            is one of the easiest ways to deploy and manage MCP servers in production. It handles the
            infrastructure complexity — server uptime, scaling, environment variable management, and
            access control — so you can focus on building rather than operating. Their marketplace
            includes pre-configured GitHub MCP server templates that you can deploy in minutes.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Alternative: Deploy to Railway or Render</h3>
            <p>
              If you prefer a more hands-on approach, you can deploy the GitHub MCP server to
              platform-as-a-service providers like Railway or Render. The general pattern is:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-sm text-zinc-400">
              <li>Clone the <code className="bg-zinc-800 px-1 py-0.5 rounded">@modelcontextprotocol/server-github</code> repository</li>
              <li>Set the <code className="bg-zinc-800 px-1 py-0.5 rounded">GITHUB_PERSONAL_ACCESS_TOKEN</code> as an environment variable</li>
              <li>Deploy using the provider\'s Node.js template</li>
              <li>Update your Claude Desktop config to point to the deployed server URL instead of using npx</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Connecting GitHub MCP to Cursor and VS Code</h2>
          <p>
            While Claude Desktop is the primary example in this guide, the GitHub MCP server works
            with other MCP hosts too. Here is how to adapt the setup for Cursor and VS Code.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Cursor</h3>
            <p>
              In Cursor, open <strong className="text-zinc-200">Settings → MCP Servers</strong> and
              add a new server with the same JSON configuration used for Claude Desktop. The GitHub
              server should appear as an available tool in Cursor\'s AI chat panel.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">VS Code</h3>
            <p>
              Microsoft\'s official MCP extension for VS Code is available in the Extensions
              Marketplace. Install it, then add your GitHub MCP server configuration to the
              extension\'s settings panel. If you use{' '}
              <a
                href="https://raycast.com/?via=zhang-yao"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Raycast
              </a>
              , you can also connect MCP servers through Raycast\'s MCP integration, giving you a
              powerful command palette that doubles as an AI-powered GitHub interface.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Getting Started: Your First GitHub + MCP Project</h2>
          <p>
            Ready to put this into practice? Here is a quick project to validate your setup end-to-end:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Generate a GitHub PAT</strong> with <code className="bg-zinc-800 px-1 py-0.5 rounded">repo</code>,{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded">read:user</code>, and{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded">read:org</code> scopes.
            </li>
            <li>
              <strong className="text-zinc-200">Add the GitHub MCP server</strong> to your Claude
              Desktop config using the JSON example above.
            </li>
            <li>
              <strong className="text-zinc-200">Test with MCP Inspector</strong> to verify the
              connection before launching Claude.
            </li>
            <li>
              <strong className="text-zinc-200">Restart Claude Desktop</strong> and look for the MCP
              hammer icon.
            </li>
            <li>
              <strong className="text-zinc-200">Ask Claude:</strong> "Summarize the open pull requests
              in my account and highlight any that are overdue for review."
            </li>
            <li>
              <strong className="text-zinc-200">Scale up:</strong> Once comfortable, connect the
              GitHub MCP server to Cursor or VS Code, or explore deploying a production instance via{' '}
              <a
                href="https://mcpize.com?ref=A7RDJ"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                MCPize
              </a>
              .
            </li>
          </ol>
          <p>
            The whole setup takes about 15–30 minutes if you have your GitHub token ready. Once
            connected, you will wonder how you ever managed GitHub workflows without conversational
            AI assistance.
          </p>
        </section>
      </div>
    </article>
  );
}
