export const metadata = {
  title: 'n8n + MCP: Automate AI Workflows with Workflow Automation in 2026',
  description: 'Learn how to combine n8n workflow automation with MCP servers to create powerful AI-powered automations. Step-by-step guide with examples.',
  keywords: ['n8n mcp', 'n8n workflow automation', 'mcp server automation', 'ai workflow n8n', 'n8n tutorial'],
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <p className="text-zinc-500 text-sm">2026-03-26</p>
      <h1 className="text-3xl font-bold text-zinc-100">
        n8n + MCP: Automate AI Workflows with Workflow Automation in 2026
      </h1>
      <p className="text-zinc-400 leading-relaxed">
        n8n is a powerful workflow automation platform that lets you connect apps and automate tasks
        without writing code. When combined with MCP servers, n8n becomes a central nervous system
        for your AI agents — orchestrating what they can access, when they run, and what they do with
        the results. Here is how to set it up.
      </p>

      <div className="prose prose-zinc prose-invert prose-headings:text-zinc-100 prose-body:text-zinc-300 prose-links:text-emerald-400 space-y-6">

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">What is n8n?</h2>
        <p>
          n8n (pronounced &ldquo;n-eight-n&rdquo;) is an open-source workflow automation tool that
          connects over 400 apps and services. Think of it as a visual programming language for
          automations — you drag and drop nodes to define triggers and actions, no code required.
          Unlike Zapier, n8n runs on your own infrastructure (or cloud), giving you full control
          and no per-task pricing caps.
        </p>
        <p>
          For AI workflows specifically, n8n is exceptionally powerful because it can:
        </p>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Trigger AI agents on webhooks, schedules, or database events</li>
          <li>Pass data between MCP servers and other tools in real time</li>
          <li>Chain multiple AI model calls into complex pipelines</li>
          <li>Store results in Notion, Airtable, or any connected database</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">What are MCP Servers in n8n?</h2>
        <p>
          MCP (Model Context Protocol) servers are the bridges between your AI models and external
          tools. In n8n, you can deploy MCP servers as Docker containers or Node.js processes,
          then expose their tools as n8n nodes. This means your AI assistant — whether it is
          Claude, GPT-4, or a local model — can invoke real-world actions through n8n workflows.
        </p>
        <p>
          A practical example: a user messages your AI assistant, which calls an MCP server to
          fetch CRM data, which triggers a n8n workflow that updates a Google Sheet, which sends
          a Slack notification — all in under two seconds.
        </p>

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">How to Connect n8n to an MCP Server</h2>

        <h3 className="text-lg font-medium text-zinc-200">Step 1: Deploy an MCP Server</h3>
        <p>
          First, you need a running MCP server. If you do not have one deployed yet, MCPize
          offers managed hosting with a one-click setup:
        </p>
        <p>
          <a href="https://mcpize.com?ref=A7RDJ" className="text-emerald-400 hover:text-emerald-300">
            Deploy an MCP Server with MCPize →
          </a>
        </p>

        <h3 className="text-lg font-medium text-zinc-200">Step 2: Install the n8n MCP Nodes Package</h3>
        <p>
          n8n supports MCP via its nodes framework. You can add MCP functionality using the
          community nodes feature. In your n8n instance:
        </p>
        <ol className="list-decimal list-inside text-zinc-300 space-y-1">
          <li>Go to <strong>Settings → Nodes → Community</strong></li>
          <li>Search for &ldquo;MCP&rdquo; or install via CLI: <code className="bg-zinc-800 px-1 rounded">npm install n8n-nodes-mcp</code></li>
          <li>Restart n8n and add the MCP node to your workflow canvas</li>
        </ol>

        <h3 className="text-lg font-medium text-zinc-200">Step 3: Configure the MCP Node</h3>
        <p>
          In your n8n workflow, add the MCP node and configure your server URL and authentication:
        </p>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li><strong>Server URL:</strong> The endpoint of your deployed MCP server</li>
          <li><strong>API Key:</strong> If your MCP server requires authentication</li>
          <li><strong>Tool selection:</strong> Choose which MCP tools to expose to n8n</li>
        </ul>

        <h3 className="text-lg font-medium text-zinc-200">Step 4: Build Your First AI Workflow</h3>
        <p>
          A practical automation chain looks like this:
        </p>
        <ol className="list-decimal list-inside text-zinc-300 space-y-1">
          <li><strong>Trigger:</strong> Incoming webhook from your website form</li>
          <li><strong>AI Step:</strong> Call Claude API to analyze the submitted data</li>
          <li><strong>MCP Step:</strong> Use the MCP server to fetch related CRM records</li>
          <li><strong>Action:</strong> n8n creates a HubSpot contact and sends a Slack alert</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">Why n8n is the Best Fit for MCP Ecosystems</h2>
        <p>
          MCP servers excel at giving AI models structured, tool-like access to the world. n8n
          excels at orchestrating those tools into reliable, observable workflows. Together, they
          create a system where:
        </p>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Every AI action is logged and auditable in n8n</li>
          <li>Errors trigger retry logic automatically</li>
          <li>Human approval gates can be inserted before sensitive actions</li>
          <li>Data flows are visible in a visual canvas, not hidden in code</li>
        </ul>
        <p>
          This makes n8n particularly valuable for teams deploying AI in production — where
          reliability and auditability matter as much as raw capability.
        </p>

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">Getting Started with n8n</h2>
        <p>
          n8n offers a generous free tier suitable for small automations and testing. Self-host
          it on your own server, or use their managed cloud for faster setup:
        </p>
        <p>
          <a href="https://n8n.io" className="text-emerald-400 hover:text-emerald-300">
            Get started with n8n →
          </a>
        </p>
        <p className="text-sm text-zinc-500">
          Affiliate link. We may earn a commission at no extra cost to you.
        </p>

        <h2 className="text-xl font-semibold text-zinc-100 mt-8">n8n + MCP: A Powerful Combination</h2>
        <p>
          The Model Context Protocol is reshaping how AI applications interact with the real world.
          n8n sits at the center of this transformation, providing the workflow orchestration layer
          that makes MCP servers production-ready. Whether you are building AI assistants,
          autonomous agents, or simply connecting AI models to your existing tools, n8n + MCP is
          a combination worth mastering in 2026.
        </p>
      </div>
    </div>
  );
}
