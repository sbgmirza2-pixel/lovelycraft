import { blogsData } from "./blogs/blogsData";

export default function sitemap() {
  
  const baseUrl = "https://lovelycraftapk.org";

  
  const pages = [
    { path: "", priority: 1.0 },
    { path: "/download", priority: 0.9 },
    { path: "/blogs", priority: 0.8 },
    { path: "/about-us", priority: 0.3 },
    { path: "/contact-us", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-and-conditions", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
    { path: "/dmca", priority: 0.3 },
    { path: "/faqs", priority: 0.3 },
  ];


  const blogPages = blogsData.map((blog) => ({
    path: `/blogs/${blog.slug}`,
    priority: 0.7,
  }));

  return [...pages, ...blogPages].map((page) => ({
    url: `${baseUrl}${page.path}`,
    
    lastModified: new Date("2026-10-29"),
    priority: page.priority,
  }));
}