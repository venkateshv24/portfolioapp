import Header from "@/components/header/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
