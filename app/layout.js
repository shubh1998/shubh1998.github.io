import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Gupta - Senior Software Engineer",
  description: `
    My name is SHUBHAM GUPTA. 
    I am a Senior Full-Stack JavaScript Engineer and Team Lead with 6+ years of experience building, scaling, and leading high-performance web, mobile, and real-time applications across iGaming, Fintech, E-commerce, SaaS, Hospitality, and Storage Virtualization domains.
    I specialize in end-to-end product development—from system architecture and design to development, deployment, and optimization—using React, Node.js, TypeScript, Angular, Next.js, along with AWS, Azure, Docker, CI/CD pipelines, and microservice architectures.
    I have delivered real-time platforms handling 5000+ concurrent users (WebRTC, Socket.io) and scalable SaaS systems supporting 10K–20K active sessions, including secure payment systems, admin dashboards, analytics, and reporting engines. 
    My focus is on performance, scalability, reliability, and clean architecture.
    Beyond coding, I bring strong technical leadership—mentoring developers, owning modules and products, 
    collaborating with international clients, and translating business requirements into scalable technical 
    solutions. I thrive in Agile environments and enjoy taking ownership from idea to production.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
