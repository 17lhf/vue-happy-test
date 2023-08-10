// 引入XLSX
import * as XLSX from 'xlsx'

/**
 * 只处理每个工作表的第一列的数据，默认第一行是标题，除了标题外的数据作为列表返回
 * 如果有多个工作表，则会拼在同一个数组里进行返回
 * @param {*} file 文件对象
 */
 export function handleOnlyFirstColExcelFile (file) {
  // 异步处理
  return new Promise(function (resolve) {
    // 将文件读取成workbook对象
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      let data = e.target.result
      // 0.14.3读取大数字时，默认数字会变成科学计数法的字符串问题解决（如：123456780000090会变成1.23457E+14）
      // 但是这样的话，如果原本是用科学计数法表示，因为强制要求遵循原文，所以读取出来也会是科学计数法
      // let workBook = XLSX.read(data, {type: 'binary', raw: true})
      // 0.18.5读取大数字时，默认数字不会变成科学计数法的字符串，即便是用科学计数法表示的字符串，也会变成数字形式
      let workBook = XLSX.read(data, {type: 'binary'})
      // console.log(workBook)
      let firstColData = []
      // 遍历每个工作表来获取数据
      for (let sheetName in workBook.Sheets) {
        // 依据获取到的工作表的名称来获取工作表信息对象
        let sheet = workBook.Sheets[sheetName]
        // console.log(sheet)
        let sheetJson = XLSX.utils.sheet_to_json(sheet)
        // console.log(sheetJson)
        // 工作表行数=实际行数-1 （这个1表示的是标题行）
        console.log('工作表行数：' + sheetJson.length)
        // 获取标题行（SheetJson已经自动将第一行作为标题行了，这里是随便拿一项获取key值）
        let keys = Object.keys(sheetJson[0])
        console.log(keys[0])
        for (let i = 0; i < sheetJson.length; i++) {
          firstColData.push(sheetJson[i][keys[0]])
        }
      }
      resolve(firstColData)
    }
    fileReader.readAsBinaryString(file.raw)
  })
}

/**
 * 处理每个工作表的指定列范围内的数据，默认第一行是标题，除了标题外的数据作为列表返回
 * 如果有多个工作表，则会按列拼在同一个数组里进行返回
 * @param {*} file 文件对象
 * @param {*} startColNum 起始列（从0开始计数）
 * @param {*} endColNum 结束列(必须大于等于起始列)
 */
 export function handleSpecifiesRangeColExcelFile (file, startColNum, endColNum) {
  // 异步处理
  return new Promise(function (resolve) {
    // 将文件读取成workbook对象
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      let data = e.target.result
      let workBook = XLSX.read(data, {type: 'binary'})
      // console.log(workBook)
      // 初始化等下要用于返回的数据
      let resultData = []
      for (let i = 0; i < endColNum - startColNum + 1; i++) {
        let colData = []
        resultData.push(colData)
      }
      // 遍历每个工作表来获取数据
      for (let sheetName in workBook.Sheets) {
        // 依据获取到的工作表的名称来获取工作表信息对象
        let sheet = workBook.Sheets[sheetName]
        // console.log(sheet)
        let sheetJson = XLSX.utils.sheet_to_json(sheet)
        // console.log(sheetJson)
        // 工作表行数=实际行数-1 （这个1表示的是标题行）
        console.log('工作表行数：' + sheetJson.length)
        // 获取标题行（SheetJson已经自动将第一行作为标题行了，这里是随便拿一项获取key值）
        let keys = Object.keys(sheetJson[0])
        // console.log(keys)
        for (let i = 0; i < sheetJson.length; i++) {
          for (let j = startColNum, k = 0; j <= endColNum; j++, k++) {
            resultData[k].push(sheetJson[i][keys[j]])
          }
        }
      }
      resolve(resultData)
    }
    fileReader.readAsBinaryString(file.raw)
  })
}

/**
 * 解析Excel里所有可能附带的数据（这里主要做作为示例目的）
 * 建议附带阅读官方文档说明
 * @param {*} file 文件对象
 */
export function handleExcelAllDataFile (file) {
  // 异步处理
  return new Promise(function (resolve) {
    // 将文件读取成workbook对象
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      let data = e.target.result
      let workBook = XLSX.read(data, {type: 'binary'})
      // 这里可以读取到很多Excel文件相关的信息,比如最后编辑者和时间
      console.log('workBook: ')
      console.log(workBook)
      // 遍历每个工作表来获取数据
      for (let sheetName in workBook.Sheets) {
        // 依据获取到的工作表的名称来获取工作表信息对象
        let sheet = workBook.Sheets[sheetName]
        console.log('sheet: ')
        console.log(sheet) // 此时你会发现，sheet其实附带了很多数据信息
        // 使用 XLSX.utils.sheet_to_json(sheet) 其实就会丢失很多信息
        let range = XLSX.utils.decode_range(sheet['!ref']) // 转换单元格的范围
        console.log("sheet['!ref']: ")
        console.log(sheet['!ref'])
        console.log('range: ')
        console.log(range) // 转换后得到的单元格范围，包含行的范围和列的范围
        let dense = sheet['!data'] != null // 检测是否有!data这个字段数据，有无这个字段数据，获取单元格数据的方式不一样
        console.log('dense: ' + dense)
        for(let R = range.s.r; R <= range.e.r; ++R) { // R=Row,行号，从0开始计数
          for(let C = range.s.c; C <= range.e.c; ++C) { // C=Col，列号，从0开始计数
            let cellAddr = {c:C, r:R} // 单元格地址对象的存储格式为{c:C, r:R}，其中C和R分别代表的是0索引列和行号。
            console.log('cellAddr: ')
            console.log(cellAddr)
            let cellRef = XLSX.utils.encode_cell(cellAddr) // encode_cell可以把{c:1, r:2} 转换成 B3
            console.log('cellRef: ' + cellRef)
            let cell = dense ? sheet['!data'][R][C] : sheet[cellRef]
            // cell实际上是一个单元格对象，拥有好几个key和value的对应关系，有需要可以查阅官方文档
            console.log('cell: ')
            console.log(cell)
            // 如果这个单元格没输入过值，就会是undefined
            if (cell != undefined) {
              console.log('cell.w: ' + cell.w) // w是格式化后的文本（实测好像有点问题，格式化文本：1.2w（原始值：12345，单元格格式：#!.#,"万"）会被解析成.12w ?）
              console.log('cell.v: ' + cell.v) // v是原始值,可以获得单元格最原始的值，而非格式化后的文本（这个也是sheet_to_json后会获得的value）
            }
          }
        }
      }
      resolve('parser over')
    }
    fileReader.readAsBinaryString(file.raw)
  })
}