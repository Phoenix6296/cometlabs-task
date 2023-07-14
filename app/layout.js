import "./globals.css";

export const metadata = {
  title: "Assignment",
  description: "Assignment Round",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
