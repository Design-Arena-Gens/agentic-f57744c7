export const metadata = {
  title: 'DS App',
  description: 'Simple and elegant DS application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
