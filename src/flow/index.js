/* @flow */

// videoのトップで使うやつ
export type TVideoCard = {
  category: string,
  title: string,
  id: string,
  images: Array<string>,
  body: string
};

// goodsとかpanel系で使うtype
export type TPanel = {
  name: string,
  link: string
}

// liveのトップで使う
export type TLiveTop = {
  imgUrl?: string, // 画像のurlを受け取る
  link?: string, // liveの中ページのurlを受け取る
  title?: string, // liveのタイトルを受け取る
  year?: string // ツアーの年を受け取る
}

// liveの個別ページで使う
export type TLiveDetail = {
  imgUrl?: string, // 画像のurlを受け取る
  year?: string, // 記事の年を受け取る
  title?: string, // 記事のタイトルを受け取る
  freeMessage?: string, // フリーテキスト項目を受け取る
  ticketMessage?: string, // チケットのテキストを受け取る
  // スケジュールのリストを受け取る
  ScheduleList?: Array<{
    date?: string,
    place?: string,
    description?: string
  }>
}
// newsのトップ
export type TNewsPickup = {
  title: string,
  id: string
};

// newsトップのlist
export type TNewsList = {
  date: string,
  category: string,
  description: string,
  id: string
};

// newsの詳細ページ
export type TNewsDetail = {
  title: string,
  id: string,
  category: Array<string>,
  date: string,
  body: string
};

// history
export type THistory = {
  date: string,
  description: string
};
