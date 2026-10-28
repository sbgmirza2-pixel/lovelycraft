import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogsData } from "../blogsData";

export const instant = false;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} - Lovely Craft APK`,
    description: blog.description,
    alternates: {
      canonical: `https://lovelycraftapk.org/blogs/${blog.slug}/`,
    },
    openGraph: {
      title: `${blog.title} - Lovely Craft APK`,
      description: blog.description,
      url: `https://lovelycraftapk.org/blogs/${blog.slug}/`,
      siteName: "Lovely Craft APK",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const blogIndex = blogsData.findIndex((b) => b.slug === resolvedParams.slug);

  if (blogIndex === -1) {
    notFound();
  }

  const blog = blogsData[blogIndex];
  const nextBlog = blogsData[(blogIndex + 1) % blogsData.length];

  // Markdown Links [Text](URL) Parser using React Link Component
  const parseMarkdownLinks = (text) => {
    if (!text || typeof text !== "string") return text;

    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const linkText = match[1];
      const linkUrl = match[2];

      parts.push(
        <Link
          key={match.index}
          href={linkUrl}
          className="text-[#23891A] font-bold underline hover:text-[#15251B] transition-colors inline"
        >
          {linkText}
        </Link>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderTextWithBullets = (text) => {
    if (!text || typeof text !== "string") return null;
    return text.split("\n\n").map((paragraph, pIdx) => {
      if (paragraph.startsWith("- ")) {
        const listItems = paragraph.split("\n- ");
        return (
          <ul key={pIdx} className="list-disc pl-6 my-4 flex flex-col gap-2 text-[#51655A] text-base md:text-lg">
            {listItems.map((item, i) => (
              <li key={i}>{parseMarkdownLinks(item.replace("- ", ""))}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={pIdx} className="text-[#51655A] text-base md:text-lg leading-relaxed mb-4">
          {parseMarkdownLinks(paragraph)}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      <Navbar />

      <main className="py-12 md:py-16 flex-grow relative">
        <div className="max-w-[800px] mx-auto px-4">

          {/* Main Blog Card */}
          <div className="w-full p-6 md:p-12 bg-white border border-[#23891A]/30 rounded-none shadow-[0_0_25px_rgba(35,137,26,0.18)] relative overflow-hidden">
            
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#23891A]/10 blur-3xl pointer-events-none"></div>

            {/* Category & Date */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-[#23891A] mb-3 uppercase tracking-wider">
              <span>{blog.category}</span>
              <span>•</span>
              <span className="text-[#6B7E74]">{blog.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-[var(--font-display)] font-bold text-[#15251B] mb-4 tracking-tight leading-snug">
              {blog.title}
            </h2>

            <div className="w-16 h-1 bg-[#23891A] mb-6"></div>

            {/* Banner Image */}
            <div className="w-full max-w-[550px] aspect-square mx-auto relative mb-8 overflow-hidden bg-[#F5F9F1] border border-[#23891A]/30 shadow-[0_0_15px_rgba(35,137,26,0.1)]">
              <Image
                src="/featured-image-of-lovely-craft.webp"
                alt={blog.title}
                fill
                sizes="(max-width: 800px) 100vw, 550px"
                className="object-cover object-center"
              />
            </div>

            {/* Intro Content */}
            {blog.content?.intro && (
              <div className="mb-6">
                {renderTextWithBullets(blog.content.intro)}
              </div>
            )}

            {/* Sections & Tables Loop */}
            <div className="flex flex-col gap-6">
              {blog.content?.sections?.map((sec, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-bold font-[var(--font-display)] text-[#15251B] mt-4 mb-2">
                    {sec.heading}
                  </h3>

                  {sec.text && renderTextWithBullets(sec.text)}

                  {sec.table && (
                    <div className="overflow-x-auto my-4 border border-[#23891A]/30">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-[#23891A] text-white">
                            {sec.table.headers.map((th, thIdx) => (
                              <th key={thIdx} className="p-3 font-bold text-sm md:text-base border-b border-[#23891A]">
                                {th}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-[#F5F9F1]/50" : "bg-white"}>
                              {row.map((td, tdIdx) => (
                                <td key={tdIdx} className="p-3 text-sm md:text-base text-[#51655A] border-t border-[#DCE8D6]">
                                  {parseMarkdownLinks(td)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interlinking: Next Recommended Blog Section */}
            <div className="mt-12 pt-8 border-t border-[#DCE8D6]">
              <span className="text-xs font-bold text-[#23891A] uppercase tracking-wider block mb-2">
                Read Next Article
              </span>
              <Link
                href={`/blogs/${nextBlog.slug}`}
                className="group flex flex-col p-4 bg-[#F5F9F1] border border-[#23891A]/30 hover:border-[#23891A] transition-all no-underline"
              >
                <h4 className="text-base md:text-lg font-bold text-[#15251B] group-hover:text-[#23891A] transition-colors m-0">
                  {nextBlog.title} &rarr;
                </h4>
                <p className="text-xs md:text-sm text-[#51655A] m-0 mt-1 line-clamp-2">
                  {nextBlog.description}
                </p>
              </Link>
            </div>

            {/* Back to All Blogs Button */}
            <div className="mt-8 text-center">
              <Link 
                href="/blogs" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#23891A] text-[#23891A] font-bold text-sm rounded-none shadow-[0_0_12px_rgba(35,137,26,0.15)] hover:bg-[#23891A] hover:text-white transition-all no-underline"
              >
                &larr; Back to all blogs
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}