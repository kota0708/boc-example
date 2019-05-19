/**
 * 日付を曜日(日本語表記)に変換する関数
 * @param {string} date - 日付
 * @returns {string} - 日本語の曜日
 */
const calculationDate = date => {
  const dayOfWeek = new Date(date).getDay(); // 曜日(数値)
  const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek]; // dayOfWeekの数値によって曜日(日本語表記)を出力

  return dayOfWeekStr;
};

export default calculationDate;
