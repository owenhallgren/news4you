export const fetchArticles = (genre) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=2rvh1cCWJXvhMLlWSgPBfnJe7Tb5JsLL`)
  .then(res => res.json())
}