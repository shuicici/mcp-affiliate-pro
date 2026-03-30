import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Inspector CLI Tutorial: Debug and Test Your MCP Servers in 2026',
  description:
    'A practical guide to using the MCP Inspector CLI — Anthropic\'s official tool for testing, debugging, and validating MCP servers. Includes step-by-step examples and workflow tips.',
  keywords: [
    'mcp inspector',
    'mcp cli',
    'mcp debugging',
    'mcp server test',
    'model context protocol',
    'mcp inspector tutorial',
  ],
};

export default function McpInspectorCliPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 30, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          MCP Inspector CLI Tutorial: Debug and Test Your MCP Servers in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          Building an MCP server is one thing. Making sure it actually works — correctly, reliably,
          and without cryptic errors — is another. That is where the{' '}
          <strong className="text-zinc-200">MCP Inspector CLI</strong> comes in. This official
          Anthropic tool is the fastest way to test-drive any MCP server, inspect its capabilities,
          and debug issues before connecting it to your AI host. In this guide, you will learn
          everything you need to go from zero to confident debug session.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp inspector',
            'mcp cli',
            'mcp debugging',
            'mcp server test',
            'model context protocol',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">What Is MCP Inspector and Why Do You Need It?</h2>
          <p>
            The <strong className="text-zinc-200">MCP Inspector CLI</strong> is an official command-line
            tool released by Anthropic that lets you interact with any MCP server directly — no AI
            client required. You pass it a server command, and it opens an interactive session where
            you can call tools, inspect resources, and read server responses in real time.
          </p>
          <p>
            Think of it as a <em>Postman for MCP servers</em>. Before you trust a server with your AI
            workflow, you want to verify it handles requests correctly, returns the right schema, and
            does not throw unexpected errors. MCP Inspector gives you that confidence without the
            overhead of a full AI host setup.
          </p>
          <p>
            Here is when MCP Inspector becomes essential:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Validating a new server</strong> — Confirm it loads,
              advertises the right tools, and responds correctly before connecting it to Claude or Cursor.
            </li>
            <li>
              <strong className="text-zinc-200">Debugging failures</strong> — When a server works in
              one host but not another, Inspector strips away the host layer to isolate the problem.
            </li>
            <li>
              <strong className="text-zinc-200">Schema verification</strong> — Inspect exactly what
              tools, resources, and prompts a server exposes before writing any integration code.
            </li>
            <li>
              <strong className="text-zinc-200">CI/CD validation</strong> — You can script Inspector
              calls to validate servers automatically in your deployment pipeline.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Installation and Requirements</h2>
          <p>
            MCP Inspector is distributed as an npm package and runs via <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">npx</code>,
            so you do not need to install it globally. The only hard requirement is{' '}
            <strong className="text-zinc-200">Node.js 18 or later</strong>.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Prerequisites</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong className="text-zinc-200">Node.js 18+</strong> — Check your version with{' '}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">node --version</code>
              </li>
              <li>
                <strong className="text-zinc-200">npm or npx</strong> — Bundled with Node.js; verify with{' '}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">npx --version</code>
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-zinc-100 mt-4">Installation Command</h3>
            <p>
              No separate install step. Just run the following to launch Inspector with a server:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`npx @anthropic-ai/mcp-inspector --server-command "node /path/to/your/server.js"`}
            </pre>
            <p className="text-xs text-zinc-500">
              Replace the server command with whatever runs your specific MCP server (e.g.,{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded">python server.py</code>,{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded">./your-server-binary</code>, etc.)
            </p>
          </div>
          <p>
            If you want to install it globally for convenience:
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto mt-2">
              {`npm install -g @anthropic-ai/mcp-inspector`}
            </pre>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Basic Usage: Testing an MCP Server Step by Step</h2>
          <p>
            Let us walk through a complete test session. We will use a fictional MCP server called{' '}
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">example-mcp-server</code> that
            exposes a file browsing tool. The same steps apply to any server.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 1: Launch the Inspector</h3>
            <p>Run the following in your terminal:</p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`npx @anthropic-ai/mcp-inspector --server-command "node ./example-mcp-server.js"`}
            </pre>
            <p className="text-sm text-zinc-500">
              Inspector will start, connect to your server, and print the server manifest — a list
              of all available tools, resources, and prompts.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 2: Read the Server Manifest</h3>
            <p>
              On launch, Inspector displays a manifest like this:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`✓ Connected to example-mcp-server
Manifest:
  tools:
    - browse_files(path: string, recursive?: boolean): FileTree
    - read_file(path: string, start?: number, end?: number): string
  resources:
    - file:/// (root directory)
  prompts:
    - summarize_project: Summarizes the project structure
  `}
            </pre>
            <p className="text-sm text-zinc-500">
              Review this carefully. If a tool you expected is missing, the server may not be
              registering it correctly — a good first clue for debugging.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 3: Call a Tool</h3>
            <p>
              In the Inspector prompt, type a tool call in the following format:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`> tool: browse_files
> arguments: { "path": "/Users/me/projects", "recursive": true }`}
            </pre>
            <p>
              Inspector sends the request to the server and prints the raw JSON response. This is
              exactly what your AI host will receive — so you can verify the response shape matches
              what your integration expects.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Step 4: Inspect Multiple Tools in Sequence</h3>
            <p>
              Keep calling tools to build confidence in the server. Try error cases too:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`> tool: read_file
> arguments: { "path": "/nonexistent/file.txt" }`}
            </pre>
            <p>
              Does it return a clean error? Or does it crash? You want clean, structured errors — not
              unhandled exceptions bubbling up.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Reading Server Response Logs</h2>
          <p>
            One of MCP Inspector\'s most valuable features is its <strong className="text-zinc-200">verbose
            logging mode</strong>. By default, Inspector shows you tool calls and responses. With
            verbose mode enabled, you also see every JSON-RPC message going over the wire.
          </p>
          <p>
            Enable verbose logging with the <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">--verbose</code> flag:
          </p>
          <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
            {`npx @anthropic-ai/mcp-inspector \\
  --server-command "node ./example-mcp-server.js" \\
  --verbose`}
          </pre>
          <p>
            Verbose output reveals the full request/response cycle:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Request ID</strong> — Correlate responses to specific calls.
            </li>
            <li>
              <strong className="text-zinc-200">Timestamps</strong> — Spot latency between request and response.
            </li>
            <li>
              <strong className="text-zinc-200">Full JSON payloads</strong> — Inspect exact schemas passed between client and server.
            </li>
            <li>
              <strong className="text-zinc-200">Error objects</strong> — See structured error codes and messages vs. raw stack traces.
            </li>
          </ul>
          <p>
            For a production deployment workflow, consider using{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize
            </a>{' '}
            to host your server — it captures server-side logs while you use Inspector for client-side
            validation. Together they give you full observability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Common Error Messages and How to Fix Them</h2>
          <p>
            MCP servers fail in predictable ways. Here are the most common errors you will encounter
            in Inspector, and what to do about them.
          </p>

          <div className="space-y-3">
            {[
              {
                error: 'Error: Server process exited with code 1',
                cause: 'The server command crashed on startup. Often a missing dependency or syntax error.',
                fix: 'Run the server command directly in your terminal (outside Inspector) to see the full error output. Common fixes: npm install, check Node/Python version, verify file paths.',
              },
              {
                error: 'Error: Cannot connect to server — ECONNREFUSED',
                cause: 'The server is not listening on the expected port or Unix socket.',
                fix: 'Verify the server\'s --port flag matches what Inspector expects. Some servers use stdin/stdout by default instead of a network port.',
              },
              {
                error: 'Error: Method not found — tool "X" does not exist',
                cause: 'The tool name in your call does not match the manifest. Likely a typo or version mismatch.',
                fix: 'Re-check the manifest Inspector printed on startup. Tool names are case-sensitive.',
              },
              {
                error: 'Error: Invalid JSON in server response',
                cause: 'The server returned malformed JSON. Usually a logging statement mixed into stdout.',
                fix: 'Server debug output (console.log) and MCP protocol messages both go to stdout. Redirect debug logs to stderr so they do not corrupt the JSON stream.',
              },
              {
                error: 'Error: Timeout waiting for server response',
                cause: 'The server took too long to respond. Could be a slow query, network issue, or an infinite loop in the handler.',
                fix: 'Test the underlying operation outside MCP (e.g., run the SQL query directly). If it is genuinely slow, add a timeout parameter to the tool definition.',
              },
            ].map(({ error, cause, fix }) => (
              <div key={error} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <p className="font-mono text-red-400 text-sm mb-2">{error}</p>
                <p className="text-sm text-zinc-500 mb-1">
                  <strong className="text-zinc-300">Likely cause:</strong> {cause}
                </p>
                <p className="text-sm text-zinc-400">
                  <strong className="text-zinc-300">Fix:</strong> {fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Advanced Tips</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Custom Ports and Transport Modes</h3>
            <p>
              By default, MCP Inspector and servers communicate over stdin/stdout using JSON-RPC over
              stdio transport. Some servers expose HTTP endpoints. You can specify the transport mode:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`# Stdio transport (default)
npx @anthropic-ai/mcp-inspector --server-command "node server.js"

# HTTP/SSE transport (if server exposes an endpoint)
npx @anthropic-ai/mcp-inspector --server-url "http://localhost:3000/mcp"

# Custom port for HTTP servers
npx @anthropic-ai/mcp-inspector --server-url "http://localhost:8080/mcp" --port 8080`}
            </pre>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Verbose Mode for Deep Debugging</h3>
            <p>
              As mentioned earlier, <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">--verbose</code> shows
              every JSON-RPC message. For even more detail, combine it with a log file:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`npx @anthropic-ai/mcp-inspector \\
  --server-command "node server.js" \\
  --verbose \\
  2>&1 | tee inspector-debug.log`}
            </pre>
            <p className="text-xs text-zinc-500">
              This pipes all output (including verbose JSON-RPC messages) to both the terminal and
              a log file for later review.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Testing a Specific Server Build</h3>
            <p>
              If you have multiple versions of a server (e.g., staging vs. production), test each one:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`# Test staging build
npx @anthropic-ai/mcp-inspector --server-command "node ./dist/staging/server.js"

# Test production build
npx @anthropic-ai/mcp-inspector --server-command "node ./dist/prod/server.js"`}
            </pre>
            <p>
              Compare the manifests between versions to catch capability regressions before deploying.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Environment Variables</h3>
            <p>
              Pass environment variables through to the server using your shell:
            </p>
            <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
              {`API_KEY=sk-test-123 npx @anthropic-ai/mcp-inspector \\
  --server-command "node server.js"`}
            </pre>
            <p className="text-xs text-zinc-500">
              Useful for testing servers that require API keys or other secrets without hardcoding
              them into your server code.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            MCP Inspector vs. Testing Directly in Your AI Host
          </h2>
          <p>
            A natural question arises: why not just test in Claude Desktop or Cursor? The answer comes
            down to <strong className="text-zinc-200">isolation and speed</strong>.
          </p>
          <p>
            When you test directly in an AI host, the MCP server interacts with the full AI pipeline —
            including the model, the host\'s tool-calling logic, and prompt construction. If something
            goes wrong, you have to untangle all of those layers. MCP Inspector removes the AI model
            entirely. You are testing only the server and the protocol.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
              <thead className="bg-zinc-800 text-zinc-300">
                <tr>
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">Use Inspector?</th>
                  <th className="text-left p-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900">
                  <td className="p-3">New server, first validation</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                  <td className="p-3 text-zinc-400">Fast, no AI host needed. Spot obvious issues instantly.</td>
                </tr>
                <tr className="bg-zinc-950">
                  <td className="p-3">Debugging tool response format</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                  <td className="p-3 text-zinc-400">See exact JSON response without model interference.</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-3">Testing end-to-end AI workflow</td>
                  <td className="p-3 text-yellow-400">⚠ Partial</td>
                  <td className="p-3 text-zinc-400">Use Inspector first for schema; then test in host for UX.</td>
                </tr>
                <tr className="bg-zinc-950">
                  <td className="p-3">Verifying error handling in context</td>
                  <td className="p-3 text-yellow-400">⚠ Partial</td>
                  <td className="p-3 text-zinc-400">Inspector shows raw errors; AI host shows how the model handles them.</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-3">CI/CD pipeline validation</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                  <td className="p-3 text-zinc-400">Scriptable. Combine with assert statements on manifest and tool responses.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            For the fastest development loop, use{' '}
            <a
              href="https://raycast.com/?via=zhang-yao"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Raycast
            </a>{' '}
            as your AI productivity hub — it has solid MCP support and pairs well with Inspector for
            a tight local development workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Quick Reference / Cheat Sheet</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Launch Commands</h3>
              <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
{`# Basic launch (stdio transport)
npx @anthropic-ai/mcp-inspector --server-command "node server.js"

# With verbose logging
npx @anthropic-ai/mcp-inspector --server-command "node server.js" --verbose

# HTTP/SSE server
npx @anthropic-ai/mcp-inspector --server-url "http://localhost:3000/mcp"

# Custom port
npx @anthropic-ai/mcp-inspector --server-url "http://localhost:8080/mcp" --port 8080

# With environment variables
API_KEY=sk-xxx npx @anthropic-ai/mcp-inspector --server-command "node server.js"

# Global install
npm install -g @anthropic-ai/mcp-inspector
mcp-inspector --server-command "node server.js"`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Inspector Prompt Commands</h3>
              <pre className="bg-black text-green-400 text-sm p-4 rounded overflow-x-auto">
{`# Call a tool
> tool: tool_name
> arguments: { "param": "value" }

# List available tools
> list

# Exit Inspector
> exit

# Toggle verbose output (while running)
> verbose on
> verbose off`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Common Issues</h3>
              <ul className="text-sm space-y-1 text-zinc-400">
                <li><span className="text-red-400">Server exit code 1</span> → Run server directly to see error</li>
                <li><span className="text-red-400">ECONNREFUSED</span> → Check port / transport mode matches</li>
                <li><span className="text-red-400">Method not found</span> → Verify tool name in manifest (case-sensitive)</li>
                <li><span className="text-red-400">Invalid JSON</span> → Redirect debug logs (console.log) to stderr</li>
                <li><span className="text-red-400">Timeout</span> → Test underlying operation separately; add timeouts to tool def</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Requirements</h3>
              <ul className="text-sm space-y-1 text-zinc-400">
                <li>Node.js 18 or later</li>
                <li>npm/npx (bundled with Node.js)</li>
                <li>No global install required — runs via npx</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
