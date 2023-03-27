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
        // console.log(keys)
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