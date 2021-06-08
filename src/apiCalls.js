export const fetchArticles = (type) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=2rvh1cCWJXvhMLlWSgPBfnJe7Tb5JsLL`)
  .then(res => res.json())
}