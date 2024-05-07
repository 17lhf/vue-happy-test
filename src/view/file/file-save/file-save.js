import FileSaver from "file-saver"

export default class fileSave {

  /**
   * 下载Excel文件
   * @param {*} res   文件流
   * @param {*} name  文件名(无需文件后缀)
   */
  static downloadExcel(res, name) {
    let blob = new Blob([res], {
      type: "application/vnd.ms-excel"
    })
    FileSaver.saveAs(blob, name + ".xlsx")
  }

  /**
   * 下载CSV文件
   * @param {*} res   文件流
   * @param {*} name  文件名(无需文件后缀)
   */
  static downloadCsv(res, name) {
    let blob = new Blob([res], {
      type: "application/vnd.ms-excel"
    })
    FileSaver.saveAs(blob, name + ".csv")
  }

  /**
   * 下载图片（通过URL）
   * @param {*} url 图片地址
   * @param {*} name  文件名(无需文件后缀)
   */
  static downloadImgByURL(url, name) {
    let last = url.substring(url.lastIndexOf("."), url.length)
    FileSaver.saveAs(url, `${name}${last}`)
  }
  
  /**
   * 下载JPG图片
   * @param {*} res 文件流
   * @param {*} name  文件名(无需文件后缀)
   */
  static downLoadJpgImg(res, filename) {
    let blob = new Blob([res], {
        type: "image/jpeg"
    })
    FileSaver.saveAs(blob, `${filename}.jpg`)
  }

  /**
   * 保存证书文件
   * @param {*} res 文件流
   * @param {*} fileName 文件名(无需文件后缀)
   */
  static downloadCert(res, fileName) {
    let blob = new Blob([res], {
      type: 'application/x-x509-ca-cert;charset=utf-8'
    })
    FileSaver.saveAs(blob, `${fileName}.crt`)
  }
}
