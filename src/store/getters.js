// 用户信息
export const userInfo=state=>state.userInfo
// 用户歌单
export const userSongList=state=>state.userSongList
// 用户关注列表
export const userFollowsList=state=>state.userFollowsList

// 用户的收藏
export const subAlbumlist=state=>state.subAlbumlist
export const subSingerlist=state=>state.subSingerlist
export const subMvlist=state=>state.subMvlist

/* 音乐播放 */
// 音乐播放状态
export const isPlaying=state=>state.isPlaying
// 播放模式
export const  playModel=state=>state.playModel
// 当前歌曲url
export const songUrl=state=>state.songUrl
// 当前歌曲详情
export const nowSongDetail=state=>state.nowSongDetail
// 正在播放列表
export const playingList=state=>state.playingList
// 历史记录
export const historyPlay=state=>state.historyPlay
// 是否显示当前歌曲详情页
export const  isShowSongDetail=state=>state.isShowSongDetail
// 当前歌曲播放的实时秒数
export const  currentSecond=state=>state.currentSecond
