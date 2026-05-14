import './globals.css';

export const metadata = {
  title: 'Beatzy',
  description: 'AI-powered creator music ecosystem'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

