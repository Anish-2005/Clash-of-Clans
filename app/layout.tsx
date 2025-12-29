import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clash of Clans",
  description: "Answer the call of the mustache! Join the international fray that is Clash of Clans. Customize your village, build an army and crush your opponents. Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians.",
  icons: {
    icon: "/icons/castle.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Clash of Clans official-style background image (publicly available)
  // Example: https://wallpapers.com/images/hd/clash-of-clans-village-4k-0v7k7v7k7k7k7k7k.jpg
  // You can swap for any other official COC background if you prefer
  const cocBg =
    "https://i.pinimg.com/originals/fd/45/3e/fd453ec9ad549466b8251bd3d17d61e1.png";
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage: `url(${cocBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}