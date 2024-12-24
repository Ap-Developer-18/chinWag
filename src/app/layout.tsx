import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "Chin Wag",
  description: "Introductions that save you money.",
  metadataBase: new URL("https://chin-wag-01.vercel.app/"),
  openGraph: {
    images: "/meta-img.webp",
  },
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
