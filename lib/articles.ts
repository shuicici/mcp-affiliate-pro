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
];
