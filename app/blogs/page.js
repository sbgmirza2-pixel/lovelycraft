import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogsData } from "./blogsData";

const SITE_URL = "https://lovelycraftapk.org";
const PAGE_URL = `${SITE_URL}/blogs`;
const LOGO_URL = `${SITE_URL}/logo.jpg`;
const TITLE = "Lovely Craft APK Blogs - Guides, Tips & Tutorials";
const DESCRIPTION =
  "Explore guides, trap tutorials, piston mechanics, and compatibility tips for Lovely Craft APK.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Lovely Craft",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Lovely Craft APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_URL],
  },
};

export default function BlogsPage() {
  const featuredBlog = blogsData[0];
  const regularBlogs = blogsData.slice(1);

  // ---------- JSON-LD Schema ----------
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogsData.map((blog, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blogs/${blog.slug}`,
            name: blog.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blogs", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F9F1] flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-grow max-w-[1050px] w-full mx-auto px-4 py-12 md:py-16">

        {/* Visible Breadcrumb (schema ke saath match karta hai) */}
        <nav className="text-xs text-[#6B7E74] mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#23891A]">Home</Link>
          <span>/</span>
          <span>Blogs</span>
        </nav>

        {/* Simple & Clean Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-[var(--font-display)] font-extrabold text-[#15251B] tracking-tight mb-3">
            Blogs
          </h1>
          <div className="w-16 h-1 bg-[#23891A] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-[#51655A] max-w-[550px] mx-auto leading-relaxed">
            Explore Lovely Craft building ideas, creative trap designs, crafting tips, and simple gameplay guides to help you get more out of the game.
          </p>
        </div>

        {/* 1. Featured Big Post (Hero Card) */}
        {featuredBlog && (
          <div className="mb-12">
            <Link
              href={`/blogs/${featuredBlog.slug}`}
              className="group bg-white border border-[#23891A]/35 rounded-none shadow-[0_0_30px_rgba(35,137,26,0.12)] hover:shadow-[0_0_35px_rgba(35,137,26,0.25)] hover:border-[#23891A] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden no-underline relative"
            >
              {/* Image Box - Proportional Aspect Fit */}
              <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] lg:aspect-square relative overflow-hidden bg-[#F5F9F1] border-b lg:border-b-0 lg:border-r border-[#DCE8D6]">
                <Image
                  src="/featured-image-of-lovely-craft.webp"
                  alt={featuredBlog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text Box */}
              <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#23891A] uppercase tracking-wider mb-3">
                    <span>{featuredBlog.category}</span>
                    <span className="text-[#6B7E74] font-medium">• {featuredBlog.date}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-display)] text-[#15251B] group-hover:text-[#23891A] transition-colors leading-snug mb-4">
                    {featuredBlog.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#51655A] leading-relaxed mb-6">
                    {featuredBlog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE8D6]">
                  <span className="text-sm font-bold text-[#23891A] uppercase tracking-wider inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read Full Article &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 2. Grid for Remaining Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-white border border-[#23891A]/25 rounded-none shadow-[0_0_15px_rgba(35,137,26,0.08)] hover:shadow-[0_0_25px_rgba(35,137,26,0.22)] hover:border-[#23891A] transition-all duration-300 flex flex-col justify-between overflow-hidden relative no-underline p-6"
            >
              <div>
                {/* Banner Thumbnail */}
                <div className="w-full aspect-video md:aspect-[4/3] relative overflow-hidden bg-[#F5F9F1] border border-[#DCE8D6] mb-5">
                  <Image
                    src="/featured-image-of-lovely-craft.webp"
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-[#23891A] mb-2 uppercase tracking-wider">
                  <span>{blog.category}</span>
                  <span className="text-[#6B7E74] font-medium">{blog.date}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold font-[var(--font-display)] text-[#15251B] group-hover:text-[#23891A] transition-colors leading-snug mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#51655A] leading-relaxed line-clamp-2 mb-6">
                  {blog.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE8D6]/60 mt-auto">
                <span className="text-xs font-bold text-[#23891A] uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}