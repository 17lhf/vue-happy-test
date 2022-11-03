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
      // 遍历每个工作表来获取数据
      let firstColData = []
      for (let sheetName in workBook.Sheets) {
        // 依据获取到的工作表的名称来获取工作表信息对象
        let sheet = workBook.Sheets[sheetName]
        // console.log(sheet)
        let sheetJson = XLSX.utils.sheet_to_json(sheet)
        // console.log(sheetJson)
        for (let i = 0; i < sheetJson.length; i++) {
          let keys = Object.keys(sheetJson[i])
          // console.log(keys)
          firstColData.push(sheetJson[i][keys[0]])
        }
      }
      resolve(firstColData)
    }
    fileReader.readAsBinaryString(file.raw)
  })
}