// 引入XLSX
import * as XLSX from 'xlsx'

/**
 * 生成n个sheet的excel文件
 * @param {*} data 要写入的数据，以三维数组表示, 每个二维数组表示一个工作表的数据，每个一维数组表示一行数据, 默认第一行为列名
 * @param {*} colWidth 列的宽度，以二维数组表示，colWidth.length = data.length，每个一维数组表示一个工作表的各个列的宽度，每个宽度的表示用数字就行，不要加px之类，可行的如：'100'
 * @param {*} rowHeight 行的高度，以二维数组表示，rowHeight.length = data.length，每个一维数组表示一个工作表的各个行的高度，每个高度的表示用数字就行，不要加px之类，可行的如：'100'
 * @param {*} sheetName 工作表的名称，一维数组表示，sheetName.length = data.length，每个数据表示一个工作表的名称
 * @param {*} fileName 最终输出的文件名，单个字符串
 */
export function genExcelFile (data, colWidth, rowHeight, sheetName, fileName) {
  // 创建book，即Excel一整个文档对应的对象
  let workBook = XLSX.utils.book_new()

  for (let i = 0; i < data.length; i++) {
    // 创建工作表（利用二维数组进行转换）
    let workSheet = XLSX.utils.aoa_to_sheet(data[i])

    // 设置列宽，默认似乎是8.38
    // (如果输入的列宽不是数字，则会导致列宽直接被定义成0，使得内容显示不出来，得去用鼠标重设列宽才能展示)
    let colWidths = []
    for (let k = 0; k < colWidth[i].length; k++) {
      let item = {width: colWidth[i][k]} // width in Excel "Max Digit Width", width*256 is integral
      // let item = {hidden: false} // if true, the column is hidden
      // let item = {wch: colWidth[i][k]} // width in characters
      // let item = {wpx: colWidth[i][k]} // width in screen pixels
      colWidths.push(item)
    }
    workSheet['!cols'] = colWidths

    // 设置行高, 默认似乎是：13.5
    let rowHeights = []
    for (let k = 0; k < rowHeight[i].length; k++) {
      let item = {hpx: rowHeight[i][k]} // height in screen pixels
      // let item = {hidden: false} // if true, the row is hidden
      // let item = {hpt: rowHeight[i][k]} // height in points
      rowHeights.push(item)
    }
    workSheet["!rows"] = rowHeights

    // 往book里添加工作表
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetName[i])
  }
  
  // 生成excel的配置项
  let opts = {
    // 要生成的文件类型，默认就是xlsx
    bookType: 'xlsx',
    // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    bookSST: false,
    type: 'binary'
  }
  // 以文件形式输出
  // 为了与Excel兼容，输出将始终包含UTF-8的BOM标记，文件本身就是以UTF-8编码
  XLSX.writeFile(workBook, fileName, opts)
}