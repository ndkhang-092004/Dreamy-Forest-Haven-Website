import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s : Dreamy Forest Haven",
    default: "Welcome to Dreamy Forest Haven",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12'>
          <main className='max-w-7xl mx-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
