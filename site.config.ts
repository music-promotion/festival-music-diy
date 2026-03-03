export const siteConfig = {
  name: "节日音乐DIY工坊",
  domain: "festival-music-diy.top",
  description: "手把手教你制作节日音乐，从零开始DIY专属节日歌曲，涵盖音乐编辑、混音、创作全流程教程",
  keywords: ["节日音乐制作", "DIY音乐", "音乐编辑教程", "节日歌曲创作", "音乐制作入门", "自制节日音乐"],
  
  // 目标产品
  targetProduct: {
    name: "AndMusic.chat",
    url: "https://andmusic.chat",
    description: "AI 音乐生成工具，无需专业技能，一键生成专属节日音乐"
  },
  
  // 站点主题
  theme: {
    primaryColor: "#ff6b35", // 暖橙色
    secondaryColor: "#f7931e", // 金黄色
    accentColor: "#c44569", // 暖粉色
    categories: ["音乐制作入门", "编曲技巧", "混音教程", "创意灵感", "工具推荐", "节日主题"]
  },
  
  // 百度推送
  baidu: {
    siteUrl: "https://festival-music-diy.top",
    token: "" // 待填充
  },
  
  // 关联站点（用于外链推荐）
  relatedSites: [
    { name: "节日歌曲大全", url: "https://jieri-gequs.top" },
    { name: "AI音乐生成工具", url: "https://andmusic.chat" },
    { name: "音乐创作社区", url: "https://music-creator-hub.top" }
  ]
}
