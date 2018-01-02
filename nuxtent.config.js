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
      "speaking",
      {
        page: "/speaking/_slug",
        permalink: "/speaking/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ]
  ]
};
