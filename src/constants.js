export const routes = [
  { path:"/", component:"Home", name:"Grey Matters" },
  { path:"/search", component:"Search", name:"Search" },
  { path:"/articles", component:"Articles", name:"Articles" },
  { path:"/podcasts", component:"Podcasts", name:"Podcasts" },
  { path:"/videos", component:"Videos", name:"Videos" },
  { path:"/events", component:"Events", name:"Events" },
  { path:"/learningsection", component:"LearningSection", name:"The Basics" },
  { path:"/terms", component:"Terms", name:"Glossary" },
  { path:"/term", component:"Term", name:"Glossary Page" },
  { path:"/store", component:"Store", name:"Store" },
  { path:"/profile", component:"Profile", name:"Profile" },
  { path:"/settings", component:"Settings", name:"Settings" },
];

export const creatorTitles = {
  article: "author",
  podcast: "host",
  video: "producer",
};
