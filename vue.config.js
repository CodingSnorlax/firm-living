module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/firm-living/' // 資料夾路徑，儲存庫名稱
      : '/',
  };