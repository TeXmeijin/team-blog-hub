export const config = {
  siteMeta: {
    title: "Meijin",
    teamName: "meijin",
    description: "Meijin Blogs",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://meijin.dev"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "GitHub",
      href: "https://github.com/TeXmeijin",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/meijin_garden",
    },
  ],
};
