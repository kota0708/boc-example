/**
 * 日付を整形する関数
 * @param {string} date - 日付
 * @param {string} type - 整形するタイプ
 * @returns {string} - 整形後の日付
 */
const shapingDate = (date, type = 'text') => {
  let resultDate = '';

  if (type === 'text') {
    const result = date.split('-');
    resultDate = `${result[0]}年${result[1]}月${result[2]}日`; // yyyy年mm月dd日に変換
  } else if (type === 'slash') {
    resultDate = date.replace(/-/g, '/'); // yyyy/mm/ddに変換する
  }

  return resultDate;
};

export default shapingDate;
