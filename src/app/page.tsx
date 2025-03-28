import Layout from "@/components/layout/Layout";
import About from "@/components/section/About";
import HeroSection from "@/components/section/HeroSection";
import BlogsSection from "@/components/section/BlogsSection";
import ContactUs from "@/components/section/ContactUs";

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <About/>
      <BlogsSection/>
      <ContactUs/>
    </Layout>
  );
}
