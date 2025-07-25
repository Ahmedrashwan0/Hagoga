import { Marhey } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/Nav/navbar";
import Footer from "./_components/footer/Footer";
import { Toaster } from "react-hot-toast";

const marhey = Marhey({
  subsets: ["latin"],
  weight:["400","500","700"],
  preload:true,
});



export const metadata = {
  title: "Hagogah",
  description: "Generated by create next app",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={marhey.className}>
        <NavBar/>
        {children}
         <Toaster position="bottom-right" reverseOrder={false} />
        <Footer/>
      </body>
    </html>
  );
}
