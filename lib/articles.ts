export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
}

export const articles: Article[] = [
  {
    slug: 'what-is-mcp',
    title: 'What is MCP? A Beginner\'s Guide to the Model Context Protocol in 2026',
    date: '2026-03-25',
    description: 'MCP (Model Context Protocol) is rapidly becoming the backbone of how AI applications connect to external tools. Learn what it is and why developers should care.',
    keywords: ['what is mcp', 'model context protocol', 'mcp ai', 'anthropic mcp'],
  },
  {
    slug: 'best-mcp-hosting-2026',
    title: 'Best MCP Hosting Platforms 2026: Complete Guide',
    date: '2026-03-25',
    description: 'A comprehensive breakdown of the best MCP hosting platforms in 2026, including MCPize, Fast.io, Railway, and DigitalOcean.',
    keywords: ['best mcp hosting', 'mcp server hosting', 'mcp hosting platform'],
  },
  {
    slug: 'deploy-mcp-server',
    title: 'How to Deploy Your First MCP Server: Step-by-Step Guide',
    date: '2026-03-25',
    description: 'A complete walkthrough for deploying your first MCP server, from choosing a platform to configuring your AI client.',
    keywords: ['deploy mcp server', 'mcp server setup', 'mcp deployment'],
  },
  {
    slug: 'cursor-vs-claude-code',
    title: 'Cursor AI vs Claude Code: Which AI Coding Assistant Wins in 2026?',
    date: '2026-03-25',
    description: 'A comprehensive comparison of Cursor AI and Claude Code for developers. Includes affiliate links for both platforms.',
    keywords: ['cursor vs claude', 'cursor ai', 'claude code', 'ai coding assistant'],
  },
  {
    slug: 'build-first-mcp-server',
    title: 'How to Build Your First MCP Server: A Complete Beginner\'s Guide',
    date: '2026-03-25',
    description: 'Step-by-step tutorial for building a Model Context Protocol server from scratch. Includes MCPize tool and hosting recommendations.',
    keywords: ['build mcp server', 'mcp tutorial', 'model context protocol', 'mcp development'],
  },
  {
    slug: 'best-mcp-servers-2026',
    title: 'Best MCP Servers for AI Applications in 2026',
    date: '2026-03-26',
    description: 'A curated breakdown of the most useful MCP servers you can deploy today — from file systems and databases to Slack, GitHub, and Brave Search.',
    keywords: ['best mcp servers', 'mcp server list', 'model context protocol servers', 'mcp github', 'mcp filesystem'],
  },
  {
    slug: 'n8n-mcp-workflow-automation',
    title: 'n8n + MCP: Automate AI Workflows with Workflow Automation in 2026',
    date: '2026-03-26',
    description: 'Learn how to combine n8n workflow automation with MCP servers to create powerful AI-powered automations. Step-by-step guide with examples.',
    keywords: ['n8n mcp', 'n8n workflow automation', 'mcp server automation', 'ai workflow n8n', 'n8n tutorial'],
  },
];
