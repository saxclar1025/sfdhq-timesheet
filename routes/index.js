module.exports = (app, db) => {
  require("api-routes")(app,db);
  require("http-routes")(app,db);
}