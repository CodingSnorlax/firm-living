// 匯入 mitt 套件
import mitt from 'mitt'

const emitter = mitt()
// 匯出 mitt 套件，到其他檔案也能使用
export default emitter
