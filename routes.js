const indexRouter = require("./routes/index"),
aboutRouter = require("./routes/about"),
blogRouter = require("./routes/blog"),
contactRouter = require("./routes/contact"),
portfolioRouter = require("./routes/portfolio"),
servicesRouter = require("./routes/services");

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/sobre", aboutRouter);
  app.use("/blog", blogRouter);
  app.use("/contato", contactRouter);
  app.use("/portfolio", portfolioRouter);
  app.use("/servicos", servicesRouter);
}