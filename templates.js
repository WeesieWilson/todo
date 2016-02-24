
var templates = {
  todo : [
  "<div data-idx='<%= idx %>' class='todo'>",
  "<button class='complete ",
  "<% if(complete) { %>",
  "line",
  "<% } %>",
  "'></button>",
  "<p><%= post %></p>",
  "<button class='delete'>delete</button>",
  "</div>"].join("")
};
