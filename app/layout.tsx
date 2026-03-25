import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MCP Guide — Model Context Protocol in 2026',
    template: '%s | MCP Guide',
  },
  description:
    'Everything you need to know about MCP (Model Context Protocol) in 2026. Reviews, tutorials, and the best MCP hosting platforms.',
  keywords: ['MCP', 'Model Context Protocol', 'AI tools', 'MCP hosting', 'AI integrations'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
