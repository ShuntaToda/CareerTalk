import type { Metadata } from "next";
// import localFont from "next/font/local";

// TODO: 今後必要になるフォントを設定する
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "CareerTalk",
  description: "一人一人が納得いくキャリアを実現できる世界",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}