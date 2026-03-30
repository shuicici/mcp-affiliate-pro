import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Security Best Practices: Protect Your AI Connections in 2026',
  description:
    'A comprehensive guide to securing your MCP servers and connections. Learn about authentication, access control, network security, and best practices for production MCP deployments.',
  keywords: [
    'mcp security',
    'mcp best practices',
    'mcp authentication',
    'mcp access control',
    'mcp production security',
  ],
};

export default function MclSecurityBestPracticesPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 30, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          MCP Security Best Practices: Protect Your AI Connections in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          MCP servers expose your AI applications to real-world tools, data, and services — which means
          they also expose you to real-world security risks. This guide covers everything you need to
          lock down your MCP connections before going to production.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp security',
            'mcp best practices',
            'mcp authentication',
            'mcp access control',
            'mcp production security',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why MCP Security Matters</h2>
          <p>
            MCP servers are not just innocent connectors. Depending on their configuration, they can
            read files, query databases, send messages on your behalf, access cloud resources, and
            interact with third-party APIs. That is powerful — and with power comes risk.
          </p>
          <p>
            In development environments, a misconfigured MCP server might expose your local files to
            an AI model. In production, the same misconfiguration could mean unauthorized access to
            customer data, cloud credentials, or financial systems. The stakes are real.
          </p>
          <p>
            The challenge is compounded because MCP is still maturing as a standard. Many developers
            adopt it quickly without fully understanding the security surface area. Attackers know
            this. Now is the time to build security-conscious habits before the ecosystem scales further.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Authentication Patterns for MCP Servers</h2>
          <p>
            The first line of defense for any MCP server is ensuring that only authorized clients can
            connect. Without proper authentication, anyone with network access to your server can
            invoke its tools.
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">API Keys</h3>
              <p className="text-sm text-zinc-400">
                The simplest authentication method. Each MCP client is issued a unique API key,
                which must be included in the connection request. Rotate keys regularly and revoke
                immediately if a key is suspected to be compromised. Avoid embedding keys directly in
                configuration files that get committed to version control.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">OAuth 2.0</h3>
              <p className="text-sm text-zinc-400">
                The right choice when your MCP server needs to act on behalf of users across multiple
                accounts. OAuth provides scoped access tokens, meaning you can grant an MCP server
                read-only GitHub access without giving it permission to push code. Most major API
                providers (GitHub, Slack, Google) support OAuth natively.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">JWT Tokens</h3>
              <p className="text-sm text-zinc-400">
                JSON Web Tokens are ideal for short-lived, stateless authentication. A signed JWT
                encodes both the identity of the caller and permissions, without requiring a database
                lookup on every request. Set reasonable expiration times (15–60 minutes) and use
                algorithms like RS256 rather than HS256 for signing.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Mutual TLS (mTLS)</h3>
              <p className="text-sm text-zinc-400">
                For high-security environments, mTLS goes beyond passwords and tokens. Both the client
                and server present certificates, creating a two-way trust relationship. This is
                particularly valuable when your MCP servers run in a zero-trust network perimeter.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Least-Privilege Access Control</h2>
          <p>
            The principle of least privilege is straightforward: grant an MCP server only the
            permissions it absolutely needs to function. In practice, this means scoping access at
            multiple levels.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Resource-level scoping</strong> — A GitHub MCP server
              connecting to one repository should not have access to your entire GitHub organization.
              Use repository-specific tokens instead of personal access tokens.
            </li>
            <li>
              <strong className="text-zinc-200">Operation-level scoping</strong> — Can your MCP server
              do <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">read</code> only, or can
              it also <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">write</code> and
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm"> delete</code>? Disable
              write operations unless explicitly required.
            </li>
            <li>
              <strong className="text-zinc-200">Time-based access</strong> — For sensitive operations,
              consider temporary elevation. A database MCP server might get write access only during
              a maintenance window, then automatically revert to read-only.
            </li>
            <li>
              <strong className="text-zinc-200">User isolation</strong> — If your MCP server serves
              multiple users, ensure each user sees only their own data. Query parameters should
              always be scoped by user identity, never trusted blindly.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Network Security: TLS, VPN, and Firewall Rules</h2>
          <p>
            MCP connections traverse the network, which means they can be intercepted if not properly
            protected. Here is how to secure the transport layer.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Always Use TLS</h3>
            <p>
              Never run an MCP server over plain HTTP in production. TLS encryption prevents
              man-in-the-middle attacks where an attacker intercepts and modifies requests in transit.
              Obtain certificates via Let&apos;s Encrypt for free, or use your cloud provider&apos;s
              certificate manager.
            </p>
            <p>
              At minimum, use TLS 1.2. TLS 1.3 is preferred for better performance and security.
              Disable older protocol versions and cipher suites known to be vulnerable (SSL v3,
              TLS 1.0, RC4).
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Firewall Rules</h3>
            <p>
              Configure your firewall so that MCP servers are not directly exposed to the public
              internet unless intentionally designed to be. The ideal setup is:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>MCP servers listen only on internal IPs or localhost</li>
              <li>A reverse proxy (Nginx, Caddy) handles external traffic on port 443</li>
              <li>The proxy enforces TLS and forwards requests to the MCP server over localhost</li>
              <li>Database servers accept connections only from known IP ranges</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">VPN for Internal Services</h3>
            <p>
              For MCP servers that connect to internal services — databases, message queues, internal
              APIs — consider routing traffic through a VPN. This adds an authentication layer at the
              network level, making it significantly harder for unauthorized actors to reach your
              infrastructure even if they somehow obtain network access.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Securing Credentials and Environment Variables</h2>
          <p>
            MCP servers frequently need credentials to connect to downstream services — database
            passwords, API tokens, OAuth secrets. How you manage these secrets is critical.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Never commit secrets to version control.</strong> Use
              a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.gitignore</code> or, better,
              a secrets manager. Tools like Doppler, HashiCorp Vault, or AWS Secrets Manager are
              purpose-built for this.
            </li>
            <li>
              <strong className="text-zinc-200">Load secrets at runtime, not at build time.</strong>{' '}
              Environment variables injected at startup are easier to audit and rotate than hardcoded
              values in source code.
            </li>
            <li>
              <strong className="text-zinc-200">Rotate credentials regularly.</strong> Set a schedule —
              monthly or quarterly — to rotate API keys and tokens. If a credential is compromised,
              rotation limits the blast radius.
            </li>
            <li>
              <strong className="text-zinc-200">Use scoped tokens wherever possible.</strong> A GitHub
              token limited to a single repository is far less dangerous than a personal access token
              with full organization access.
            </li>
          </ul>
          <p>
            If you are deploying MCP servers at scale, look for a hosting platform that handles secret
            management natively.{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize
            </a>{' '}
            provides built-in secret management with encrypted storage, automatic rotation, and
            per-environment separation — removing the operational burden of managing secrets yourself.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Rate Limiting and Request Validation</h2>
          <p>
            Without rate limiting, a compromised or malfunctioning MCP client can overwhelm your
            server with requests — causing denial of service for all other users. More insidiously,
            an attacker can use your MCP server as an amplification vector, making requests on behalf
            of your infrastructure.
          </p>
          <p>
            Implement rate limiting at multiple layers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Per-client rate limits</strong> — Cap the number of
              requests a single authenticated client can make per minute. Token bucket and sliding
              window algorithms are common approaches.
            </li>
            <li>
              <strong className="text-zinc-200">Per-endpoint rate limits</strong> — Some MCP tools
              are more expensive to execute than others. A database query should have a lower rate
              limit than a simple file read.
            </li>
            <li>
              <strong className="text-zinc-200">Input validation</strong> — Validate all incoming
              request parameters before passing them to downstream services. A SQL MCP server
              receiving raw user input without validation is an SQL injection waiting to happen.
            </li>
            <li>
              <strong className="text-zinc-200">Timeout limits</strong> — Set maximum execution
              timeouts for each MCP tool. A runaway database query should not hang your entire server.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Monitoring and Audit Logging</h2>
          <p>
            Security is not a one-time configuration — it is an ongoing process. You need visibility
            into what your MCP servers are doing so you can detect anomalies, investigate incidents,
            and demonstrate compliance.
          </p>
          <p>
            At a minimum, every MCP server should log:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Which client connected (identity, IP address, timestamp)</li>
            <li>Which tools were invoked and with what parameters</li>
            <li>Responses, especially errors and failures</li>
            <li>Authentication attempts (successful and failed)</li>
          </ul>
          <p>
            Store these logs in a centralized platform — Elasticsearch, Datadog, or a simple
            cloud-native log service. Set up alerts for suspicious patterns: a spike in failed
            authentication attempts, unusual tool usage from a specific client, or requests from
            IP addresses outside your expected geolocation.
          </p>
          <p>
            Audit logs should be treated as immutable. Once written, they should not be modifiable
            by the MCP server itself — otherwise a compromised server could erase evidence of a breach.
            Write logs to a append-only store or a dedicated logging service with access controls
            independent of your application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Tools and Platforms with Built-In MCP Security</h2>
          <p>
            You do not have to build everything from scratch. Several platforms handle MCP security
            concerns as first-class features.
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-semibold text-zinc-100 mb-2">
                <a
                  href="https://mcpize.com?ref=A7RDJ"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  MCPize
                </a>
              </h3>
              <p className="text-sm text-zinc-400">
                MCPize handles MCP server hosting with built-in authentication, TLS, secret management,
                rate limiting, and monitoring. It is designed for teams that want production-grade MCP
                infrastructure without managing it themselves. Their marketplace includes pre-configured
                secure templates for common MCP server types.{' '}
                <a
                  href="https://mcpize.com?ref=A7RDJ"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Get started at mcpize.com →
                </a>
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-semibold text-zinc-100 mb-2">Cloud-Native API Gateways</h3>
              <p className="text-sm text-zinc-400">
                AWS API Gateway, Cloudflare Workers, and similar services can sit in front of your
                MCP servers to handle authentication, TLS termination, rate limiting, and logging
                without adding code to your application.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-semibold text-zinc-100 mb-2">Service Mesh Solutions</h3>
              <p className="text-sm text-zinc-400">
                If you are running multiple MCP services internally, a service mesh like Istio or Linkerd
                provides mutual TLS between services, fine-grained access policies, and automatic
                observability without modifying application code.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Security Checklist for Production MCP Deployments</h2>
          <p>
            Before going live with any MCP server, work through this checklist:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <ul className="space-y-3">
              {[
                {
                  item: 'All MCP connections use TLS 1.2 or higher',
                  label: 'Transport encryption',
                },
                {
                  item: 'Authentication is required for every MCP connection (API key, OAuth, or JWT)',
                  label: 'Authentication enforced',
                },
                {
                  item: 'Each MCP client has its own scoped credentials, not shared tokens',
                  label: 'Per-client credentials',
                },
                {
                  item: 'OAuth tokens use minimal scopes required for the task',
                  label: 'OAuth scoped correctly',
                },
                {
                  item: 'MCP servers run with least-privilege access to downstream services',
                  label: 'Least-privilege access',
                },
                {
                  item: 'Database and internal service credentials are stored in a secrets manager, not in source code or env files that are committed',
                  label: 'Secrets managed properly',
                },
                {
                  item: 'Rate limiting is configured at both client and endpoint levels',
                  label: 'Rate limiting active',
                },
                {
                  item: 'All incoming request parameters are validated before processing',
                  label: 'Input validation',
                },
                {
                  item: 'Request timeouts are set for every MCP tool handler',
                  label: 'Timeouts configured',
                },
                {
                  item: 'All MCP activity is logged to an append-only, centralized log store',
                  label: 'Audit logging enabled',
                },
                {
                  item: 'Firewall rules block direct public access to MCP servers',
                  label: 'Firewall configured',
                },
                {
                  item: 'A reverse proxy handles TLS termination and external traffic',
                  label: 'Reverse proxy in place',
                },
                {
                  item: 'An alert exists for unusual authentication failures or traffic patterns',
                  label: 'Security alerts set up',
                },
                {
                  item: 'Credentials are rotated on a defined schedule (monthly or quarterly)',
                  label: 'Credential rotation scheduled',
                },
                {
                  item: 'A security review has been conducted before production deployment',
                  label: 'Security review done',
                },
              ].map((checkItem) => (
                <li key={checkItem.label} className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-0.5">✓</span>
                  <div>
                    <span className="text-zinc-300">{checkItem.item}</span>
                    <span className="text-zinc-600 text-sm ml-2">({checkItem.label})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
