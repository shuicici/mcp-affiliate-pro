import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Security Best Practices for Production Deployments in 2026',
  description:
    'A practical guide to securing your MCP servers and AI agent connections in production. Covers authentication, secret management, network isolation, and real-world security patterns from developer workflows.',
  keywords: [
    'mcp security',
    'mcp production security',
    'ai agent security',
    'secret management mcp',
    'mcp authentication',
  ],
};

export default function McpSecurityProductionPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published March 31, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          MCP Security Best Practices for Production Deployments in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          AI agents are no longer confined to chat interfaces. With MCP, they can read your files,
          query your databases, push to your repositories, and interact with your cloud infrastructure
          — often with more permissions than a junior developer. This guide is about locking that down
          before something goes wrong.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp security',
            'mcp production security',
            'ai agent security',
            'secret management mcp',
            'mcp authentication',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why MCP Security Is Different</h2>
          <p>
            Traditional API security assumes human operators making deliberate decisions. MCP flips
            that assumption. When an AI agent holds your MCP credentials, it can invoke tools
            autonomously — sometimes hundreds of calls in a single session — without pausing to ask
            if the file it is about to overwrite is the one you meant to keep.
          </p>
          <p>
            Developers building with tools like{' '}
            <a href="https://raycast.com/?via=zhang-yao" className="text-blue-400 hover:text-blue-300 underline">
              Raycast
            </a>{' '}
            or Claude Code have experienced this firsthand: agents that seemed helpful until a
            poorly-prompted session started rewriting config files or duplicating resources at scale.
            The attack surface is not theoretical. It is the gap between what you told the agent to
            do and what the agent actually did.
          </p>
          <p>
            Production MCP security is about closing that gap — with architecture, not oversight.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Real Risks: What Can Go Wrong</h2>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Silent Data Overwrites</h3>
              <p className="text-sm text-zinc-400">
                An MCP server with file-system access can read and write to disk without the user
                noticing each individual operation. A context-hungry agent processing a large codebase
                might overwrite a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.env</code>{' '}
                file, a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">package.json</code>,
                or a database migration script. These changes can propagate silently through
                subsequent agent steps, producing corrupted state that is only discovered much later.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Credential Exposure in Agent Runtimes</h3>
              <p className="text-sm text-zinc-400">
                AI agents frequently log their reasoning, tool calls, and responses for debugging.
                If an API key or database password appears in a tool parameter and your logging
                pipeline stores those parameters without sanitization, your secrets end up in
                observability platforms — or worse, in training data. Several early MCP adopters
                discovered this the hard way when credential strings appeared in shared debug logs.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Supply Chain Attacks on npm</h3>
              <p className="text-sm text-zinc-400">
                MCP server implementations are npm packages. That means they inherit npm&apos;s
                supply chain risks. In 2024–2025, multiple widely-used npm packages were
                compromised through maintainer account takeovers, injecting malicious code that
                exfiltrated environment variables. If your MCP server depends on a compromised
                package, the attacker gains access to every secret loaded in that process — database
                URLs, cloud credentials, OAuth tokens. Vet your dependencies, lock your versions,
                and use a package lockfile that you review before each deployment.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Unintended Destructive Actions</h3>
              <p className="text-sm text-zinc-400">
                A GitHub MCP server with write access can force-push to a branch. A database MCP
                server with delete permissions can drop tables. An agent operating with elevated
                context — a long conversation where it has accumulated significant state about your
                project — may take destructive actions that are locally rational but globally
                catastrophic. The agent is not malicious; it is operating on an incomplete model
                of the world. This is arguably the most underappreciated production risk in MCP
                deployments today.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Authentication and Access Control for MCP Servers</h2>
          <p>
            Every MCP server endpoint in production must require authentication. No exceptions.
            Unauthenticated endpoints are a direct path to unauthorized tool invocation.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">API Keys, OAuth, and mTLS</h3>
            <p>
              For most use cases, a combination of methods works best:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-zinc-200">API keys</strong> for machine-to-machine connections
                where you control both the client and server. Rotate keys on a schedule and revoke
                immediately on any suspicion of compromise.
              </li>
              <li>
                <strong className="text-zinc-200">OAuth 2.0</strong> when MCP servers act on behalf of
                users. Use granular scopes — a GitHub integration should get repo read access, not
                organization admin.
              </li>
              <li>
                <strong className="text-zinc-200">mTLS</strong> for high-trust environments where both
                client and server present certificates. This is particularly effective in zero-trust
                internal networks.
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Least-Privilege Principle</h3>
            <p>
              Design your MCP tool permissions as if the agent is a new intern on day one — it gets
              only what it needs, nothing more. Scoping decisions include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Read-only by default; write access granted explicitly per tool</li>
              <li>Repository-specific tokens instead of organization-wide credentials</li>
              <li>Time-boxed elevation for maintenance operations</li>
              <li>Per-user isolation in multi-tenant deployments</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Secret Management for AI Agents</h2>
          <p>
            This is where most production MCP deployments fail — not because they lack security
            controls, but because they expose secrets to agents that should never see them.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Never Expose Raw API Keys to Agents</h3>
            <p>
              The instinct is to pass <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">API_KEY=sk-xxxx</code>{' '}
              as an environment variable to the MCP server process. But when that server logs its
              startup environment or produces an error dump, your key is in the log stream. More
              critically: if the MCP server framework serializes tool call parameters for debugging,
              the key appears in plaintext in those traces.
            </p>
            <p>
              Instead, store secrets in a dedicated secrets manager (AWS Secrets Manager, Doppler,
              HashiCorp Vault, or your cloud provider&apos;s equivalent) and inject them at runtime
              through a secrets proxy.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">The Secret Proxy Pattern</h3>
            <p>
              The secret proxy pattern is the recommended approach for production MCP deployments.
              Instead of giving the agent direct access to a secret, you give it a reference:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The MCP server exposes a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">get-secret</code> tool</li>
              <li>The agent calls <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">get-secret(ref="github-token")</code> when it needs a credential</li>
              <li>The proxy validates the request against a policy (is this agent allowed to access this secret?)</li>
              <li>The proxy retrieves the secret from the vault and returns it for that specific call only</li>
            </ul>
            <p>
              The agent never sees the raw secret. The secret proxy handles logging, access control,
              and rotation. If the agent&apos;s request log is later reviewed, it shows references,
              not values.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Environment Variable Best Practices</h3>
            <p>
              If you must use environment variables for secrets in the near term:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Load from a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.env</code> file that is excluded from version control via <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.gitignore</code></li>
              <li>Use environment-specific env files (staging vs. production) with distinct credentials</li>
              <li>Never print or log environment variables in application code</li>
              <li>Prefer short-lived, scoped tokens over long-lived static keys</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Network Security for MCP Deployments</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">TLS Enforcement</h3>
            <p>
              Every production MCP connection must use TLS. This is non-negotiable. Unencrypted MCP
              traffic can be intercepted anywhere along the network path — on a shared Wi-Fi, at a
              cloud provider&apos;s hop, or through DNS manipulation. Use TLS 1.3 where supported,
              and configure TLS 1.2 as the minimum fallback. Let&apos;s Encrypt provides free
              certificates; there is no excuse for running plain HTTP in 2026.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Firewall Rules</h3>
            <p>
              MCP servers should not be directly exposed to the internet. The recommended architecture:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>MCP server binds to <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">127.0.0.1</code> or an internal-only network interface</li>
              <li>A reverse proxy (Nginx, Caddy) terminates TLS on port 443 and forwards to the MCP server over localhost</li>
              <li>Database servers and internal services accept connections from known IP ranges only</li>
              <li>Cloud provider security groups restrict inbound traffic to necessary ports only</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">VPC Isolation</h3>
            <p>
              For deployments handling sensitive data — healthcare records, financial information,
              user PII — consider deploying MCP servers inside a Virtual Private Cloud. VPC isolation
              ensures that your MCP infrastructure&apos;s network traffic does not share a path with
              other tenants&apos; workloads. Pair VPC isolation with private subnets for your MCP
              servers and a NAT gateway for outbound requests, so the servers can reach the internet
              without being reachable from it.
            </p>
            <p>
              In AWS, this means placing your MCP server instances in private subnets behind an
              Application Load Balancer in a public subnet. In GCP, use a private Google Cloud
              network with Cloud NAT for outbound connectivity. The added complexity is worthwhile
              when the data you are protecting has regulatory implications (HIPAA, SOC 2, PCI-DSS).
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Monitoring and Audit Logging</h2>
          <p>
            You cannot secure what you cannot see. Production MCP deployments require structured
            observability at the protocol level — not just server-level metrics.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">What to Log</h3>
            <p>
              Every MCP interaction should produce a log entry capturing:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Client identity and source IP</li>
              <li>Tool name and sanitized parameters (never log secret values)</li>
              <li>Response status, latency, and any error codes</li>
              <li>Authentication events (success, failure, token refresh)</li>
              <li>Session start and end timestamps</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Detecting Anomalous Behavior</h3>
            <p>
              Beyond reactive logging, build proactive detection. Set up alerts for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Spike in failed authentication attempts from a single IP or client</li>
              <li>Tool invocation rates that exceed normal baselines for a given agent</li>
              <li>Unusual hour-of-day activity — an agent running at 3 AM when it typically does not</li>
              <li>Requests to tools that are rarely used in normal workflows (e.g., delete operations)</li>
              <li>Geographic anomalies — connections from IP ranges outside your expected regions</li>
            </ul>
            <p>
              Treat your MCP access logs the same way you treat financial audit logs: immutable,
              centralized, and reviewed periodically even when no alerts have fired.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">When to Use a Managed MCP Platform vs. Self-Hosting</h2>
          <p>
            Self-hosting gives you full control — and full responsibility. Managing TLS certificates,
            secret rotation, network isolation, log aggregation, and incident response for MCP
            infrastructure is a significant operational commitment. For small teams or early-stage
            products, it may not be the best use of engineering time.
          </p>
          <p>
            Managed MCP platforms handle the security hardening as a service.{' '}
            <a href="https://mcpize.com?ref=A7RDJ" className="text-blue-400 hover:text-blue-300 underline">
              MCPize
            </a>{' '}
            is purpose-built for this: it provides built-in secret proxying, mTLS between client
            and server, VPC-ready deployments, and audit logging without requiring you to configure
            each layer yourself. Their security-first defaults mean you get a hardened production
            setup on day one, rather than building it incrementally and risking misconfiguration.
          </p>
          <p>
            Self-hosting makes sense when you have specific compliance requirements that a managed
            platform cannot meet, when you need complete visibility and control over the runtime
            environment, or when the cost at scale becomes significantly better than managed pricing.
            For most teams shipping an MVP or early-stage product, the operational simplicity of
            a managed platform is worth the trade-off.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Security Checklist for Production MCP</h2>
          <p>
            Run through this checklist before taking any MCP deployment live:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <ul className="space-y-3">
              {[
                {
                  item: 'All MCP connections use TLS 1.2 or higher',
                  label: 'Transport encryption active',
                },
                {
                  item: 'Every MCP server endpoint requires authentication (API key, OAuth, or mTLS)',
                  label: 'Authentication enforced',
                },
                {
                  item: 'Raw secrets are never passed to the agent — a secret proxy or vault is used instead',
                  label: 'Secret proxy in place',
                },
                {
                  item: 'API keys and tokens are scoped to the minimum required permissions',
                  label: 'Least-privilege scopes applied',
                },
                {
                  item: 'Write and delete operations are disabled by default; enabled per-tool where needed',
                  label: 'Destructive ops scoped down',
                },
                {
                  item: 'Secrets are loaded from a vault or secrets manager, not hardcoded in source or .env files committed to git',
                  label: 'Secrets properly managed',
                },
                {
                  item: 'npm dependencies are audited, locked, and reviewed before each deployment',
                  label: 'Supply chain checked',
                },
                {
                  item: 'Firewall rules block direct public internet access to MCP servers',
                  label: 'Firewall configured',
                },
                {
                  item: 'MCP servers run in private network segments or VPC private subnets',
                  label: 'Network isolated',
                },
                {
                  item: 'Rate limiting is configured at per-client and per-endpoint levels',
                  label: 'Rate limiting active',
                },
                {
                  item: 'All incoming request parameters are validated before processing',
                  label: 'Input validated',
                },
                {
                  item: 'Timeouts are set for every tool handler to prevent runaway operations',
                  label: 'Timeouts configured',
                },
                {
                  item: 'All MCP activity is logged to an append-only, centralized store with immutable retention',
                  label: 'Audit logging enabled',
                },
                {
                  item: 'Anomaly alerts are configured for unusual auth failures, traffic spikes, and out-of-hours activity',
                  label: 'Anomaly detection active',
                },
                {
                  item: 'Credential rotation is scheduled (monthly minimum for API keys, per-provider best practice for OAuth tokens)',
                  label: 'Rotation scheduled',
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
