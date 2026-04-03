import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Built Ten Apps. Nobody Uses Them. Here\'s the Part Nobody Talks About.',
  description:
    'Vibe coding tools got good at getting you to "working product" fast. Distribution is still entirely on you — and almost no one talks about this gap until it is too late.',
  keywords: [
    'vibe coding distribution',
    'indie maker marketing',
    'app launch strategy',
    'vibe coding tools',
    'indie hacker distribution',
    'phantom buster',
  ],
};

export default function VibeCodedAppsNoDistributionPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 2, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          You Built Ten Apps. Nobody Uses Them. Here&apos;s the Part Nobody Talks About.
        </h1>
        <p className="text-zinc-400 text-lg">
          A poster on r/SideProject said something last week that stuck with me. He had built
          more than a dozen apps. Solid apps. Useful apps. Problem: zero pathway to getting any
          of them in front of people. No audience, no distribution, no real sense of whether
          anyone was actually looking for what he had made.
        </p>
        <p className="text-zinc-400 text-lg">
          I have seen this exact pattern repeated dozens of times in maker communities. The
          vibe coding tools got good — really good — at solving the "can we build it?" problem.
          They have gotten nowhere on the "can anyone find it?" problem, because that is not
          something a tool can solve for you.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'vibe coding distribution',
            'indie maker marketing',
            'app launch strategy',
            'vibe coding tools',
            'indie hacker distribution',
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
            The Structural Blind Spot in Every Vibe Coding Platform
          </h2>
          <p>
            Cursor, Bolt, Lovable, Claude Code, Replit Agent — these tools share a design
            assumption that nobody states explicitly: your job is to make the next thing.
            They optimize for the loop of "new project, working product." They do not have
            an opinion about what happens after you publish.
          </p>
          <p>
            This is not a bug in any of them. It is a structural blind spot. Imagine a gym
            that said "come work out" but left the front door locked and the street address
            off their website. Most people would choose the gym that is easy to get to. Vibe
            coding is the equivalent of a gym with great equipment and no address.
          </p>
          <p>
            The platforms do encourage you to publish — there are share buttons, deployment
            integrations, App Store connectors. What they do not give you is any reason for
            anyone to show up. That part is still entirely yours, and most indie makers are
            not equipped for it by default. The skill that got you to a working app — building
            things — does not automatically transfer to the skill of getting people to notice
            the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Distribution Is Not a Launch Problem. It Is a Before-You-Build Problem.
          </h2>
          <p>
            The counterintuitive thing nobody tells you early enough: the highest-leverage
            move is not to build your tenth app. It is to spend two evenings figuring out
            whether anyone is already asking for what you are about to build.
          </p>
          <p>
            One maker on r/microsaas described exactly this realization: he spent months
            building a product management tool, launched to silence, and only afterward
            discovered threads on Reddit and Indie Hackers where people were describing
            the exact problem he had solved — they just had no way to find him. The product
            was right. The timing was wrong. He had built before validating, and validating
            after building is twice as hard as validating before.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              The Reddit Research Playbook (Before You Write a Line)
            </h3>
            <p>
              Reddit is still the best place to find people who are actively complaining
              about problems — not people who might theoretically be interested in a product.
              The distinction matters. Complaining means pain right now. Hypothetical interest
              means a market research survey you do not have.
            </p>
            <p>
              Tools like{' '}
              <a
                href="https://phantombuster.com?ref=affiliate"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                PhantomBuster
              </a>{' '}
              let you systematically search Reddit, Twitter, and LinkedIn for discussions
              matching your target keywords — not post by post, but in bulk, with filters
              for recency and engagement. You can pull 200 threads about a specific pain
              point in an afternoon and get a real read on whether five people or five
              hundred are already stuck on what you are planning to build.
            </p>
            <p>
              The question you are answering is not "is this a good idea?" It is "are
              five people already complaining about this right now?" If yes, you have
              distribution. If no, you have a project, not a product.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            The Free Tier Problem Is Getting Worse, Not Better
          </h2>
          <p>
            A thread on r/vibecoding caught my attention this week: users of free tier
            vibe coding platforms reporting that the experience has degraded significantly —
            long queue times, failed builds, no communication about what the actual limits
            are. I have hit this myself on at least one platform — the free tier
            worked fine six months ago, now it queues for five minutes and then errors
            out with no explanation. The product did not change. The business math did.
          </p>
          <p>
            The uncomfortable implication: the platforms that were supposed to democratize
            building are increasingly tiering in a direction that punishes the people who
            can least afford it. Free users are effectively subsidizing the demo experience
            for people who will pay. The users who need the tools most — indie makers with
            no budget — are getting the worst version of them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            What You Actually Need Is a Distribution Stack, Not a Better Stack
          </h2>
          <p>
            Most indie makers I see spending their evenings building more features would be
            better served by spending those evenings on one of the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-100">Systematic Reddit research</strong> — find the
              communities where your target users already congregate, not where you hope
              they might appear.
            </li>
            <li>
              <strong className="text-zinc-100">A distribution-first landing page</strong> —
              one page that explains the problem you solve, in language your users use,
              with a clear action. Not a features list. Not a demo video. A single sentence
              that makes someone think "finally, someone who gets it."
            </li>
            <li>
              <strong className="text-zinc-100">Two genuine conversations per week</strong> —
              not cold outreach, not Twitter polls. Real conversations with people who have
              the problem you are solving. These become your distribution, your feedback
              loop, and your first cohort of beta users simultaneously.
            </li>
          </ul>
          <p>
            None of this requires a new tool. None of it requires a budget. It requires
            doing something different from what the vibe coding platforms are optimized
            to get you to do, which is build more.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            The App Store Is Not Distribution. It Is a Filing Cabinet.
          </h2>
          <p>
            Submitting to the App Store or Product Hunt because you have a working product
            is not a distribution strategy — it is a filing system. You have made your app
            available. Nobody knows it exists.
          </p>
          <p>
            Real distribution means going to where people already are and joining the conversation
            they are already having. Not broadcasting what you built, but showing up as someone
            who understands the problem they have. The makers who figure this out early stop
            building for a week and start reading. The ones who do not figure it out keep
            building, accumulating apps, and wondering why the usage numbers look like a
            flat line.
          </p>
          <p>
            Vibe coding gave you permission to build fast. The distribution part is still
            the hardest part in indie software — it just looks different now than it did
            ten years ago. The guys who figured this out stopped building for a week and
            started reading. The rest kept shipping to nobody. That is the split.
          </p>
        </section>
      </div>
    </article>
  );
}
