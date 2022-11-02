// 引入XLSX
import * as XLSX from 'xlsx'

/**
 * 生成单个sheet的excel文件
 * @param {*} data 要写入的数据，以二维数组表示, 每个数组表示一行数据, 默认第一行为列名
 * @param {*} colWidth 列的宽度，以一维数组表示，每个宽度的表示用数字就行，不要加px之类，可行的如：'100'
 * @param {*} rowHeight 行的高度，以一维数组表示，每个高度的表示用数字就行，不要加px之类，可行的如：'100'
 * @param {*} sheetName 工作表的名称，单个字符串
 * @param {*} fileName 最终输出的文件名，单个字符串
 */
export function genOneSheetExcelFile (data, colWidth, rowHeight, sheetName, fileName) {
  /*
  // 构造json形式的数据
  let jsonData = []
  let colNames = []
  // 先读取第一项，也就是第一行数据，这一行数据作为每个列的列名
  for (let m = 0; m < data[0].length; m++) {
    let colName = data[0][m]
    // 有的列可能没有列名
    if (colName === undefined) {
      colName = ''
    }
    colNames.push(colName)
  }
  // 从第二行开始读取，此时的数据就都是excel里各列的数据了
  for (let i = 1; i < data.length; i++) {
    let item = []
    for (let j = 0; j < data[i].length; j++) {
      item[colNames[j]] = data[i][j]
    }
    jsonData.push(item)
  }
  // console.log(jsonData)
  // 创建工作表（利用json进行转换）
  let workSheet = XLSX.utils.json_to_sheet(jsonData)
  */
  // 创建工作表（利用二维数组进行转换）
  let workSheet = XLSX.utils.aoa_to_sheet(data)

  // 设置列宽，默认似乎是8.38
  // (如果输入的列宽不是数字，则会导致列宽直接被定义成0，使得内容显示不出来，得去用鼠标重设列宽才能展示)
  let colWidths = []
  for (let k = 0; k < colWidth.length; k++) {
    let item = {width: colWidth[k]} // width in Excel "Max Digit Width", width*256 is integral
    // let item = {hidden: false} // if true, the column is hidden
    // let item = {wch: colWidth[k]} // width in characters
    // let item = {wpx: colWidth[k]} // width in screen pixels
    colWidths.push(item)
  }
  workSheet['!cols'] = colWidths

  // 设置行高, 默认似乎是：13.5
  let rowHeights = []
  for (let k = 0; k < rowHeight.length; k++) {
    let item = {hpx: rowHeight[k]} // height in screen pixels
    // let item = {hidden: false} // if true, the row is hidden
    // let item = {hpt: rowHeight[k]} // height in points
    rowHeights.push(item)
  }
  workSheet["!rows"] = rowHeights

  // 创建book，即Excel一整个文档对应的对象
  let workBook = XLSX.utils.book_new()
  // 往book里添加工作表
  XLSX.utils.book_append_sheet(workBook, workSheet, sheetName)
  
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