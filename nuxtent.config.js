module.exports = {
  content: [
    [
      "projects",
      {
        page: "/projects/_slug",
        permalink: "/projects/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ],
    [
      "engagements",
      {
        page: "/engagements/_slug",
        permalink: "/engagements/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "http://stnetwork.surge.sh"
        : "http://localhost:3000"
  }
}