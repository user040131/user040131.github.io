// import type { NextConfig } from "next";
// import createMDX from "@next/mdx";
// import remarkGfm from "remark-gfm";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       rehypeSlug,
//       [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "anchor" } }],
//     ],
//   },
// });

// const nextConfig: NextConfig = {
//   pageExtensions: ["ts", "tsx", "mdx"],
// };

// export default withMDX(nextConfig);
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;