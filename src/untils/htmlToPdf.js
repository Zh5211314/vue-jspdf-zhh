
// 导出页面为PDF格式
import html2Canvas from 'html2canvas' // cnpm install --save html2canvas
import JsPDF from 'jspdf'      //  cnpm install jspdf --save
import 'jspdf-autotable'         //  cnpm install jspdf-autotable    // 下载完之后要修改源代码，否则表头还是中文乱码
import moo from '../../static/font/font'     // 中文字体文件
export default{
  install (Vue, options) {
    // ====使用html2canvas导出pdf=============================================================================================================
    Vue.prototype.getPdf = function (titles) {
      var title = titles
      html2Canvas(document.querySelector('#pdfDom'), {      // 导出的dom可以传参
        allowTaint: true
    }).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        PDF.setFontSize(22);    //  因为画质模糊，所以这里字体设置大一些，就清晰了
        // pageData    
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      )
    },

    // =======使用动态数据、或者页面数据导出pdf表格==============================================================================================
    Vue.prototype.getPdfTable = function (dom ,titles) {
        var doc = new JsPDF('p', 'pt'); // 获取实例
        var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));    // 这是获取页面已有table的数据导出  ，顺序不能乱放，要不就会乱码，获取的basic-table可以传参
        
        // ===============================  设置字体
        doc.addFileToVFS('pingfang.ttf', moo)
        doc.addFont('pingfang.ttf', 'b', 'normal');

        doc.setFont('b');
        // ===============================
        
        // doc.autoTable({                   // 这是动态获取后台table数据数据导出，如果用这个，则注释掉 46行、69-79行即可
        //     styles: { fillColor: [0, 0, 0], font: 'b', textColor: [255,255,255] },
        //     theme: 'grid',
        //     body: [           // 可以传参
        //         { europe: '大幅度', america: '更丰富', asia: '防辐射' },
        //         { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
        //     ],
        //     columns: [       // 可以传参
        //         { header: '表头1', dataKey: 'europe' },
        //         { header: '表头2', dataKey: 'asia' },
        //         { header: '表头3', dataKey: 'america' },
        //     ],
        // })

        doc.autoTable({                  // 这是获取页面已有table的数据导出  ，顺序不能乱放，要不就会乱码
            styles: { fillColor: [0, 0, 0], font: 'b', textColor: [255,255,255] , halign: 'center',},    // 样式
            theme: 'grid',           // 主题
            startY: 100,          // 距离上边距离
            body: res.data,        // tableDate
            columns: [          // 表头// 可以传参
                { header: '表头1', dataKey: 'europe' },
                { header: '表头2', dataKey: 'asia' },
                { header: '表头3', dataKey: 'america' },
            ],
        })
        
        doc.text(40, 30, '个人号还挺好')      //  渲染title  // 可以传参
        document.getElementById(dom).src = doc.output('datauristring');   // 渲染pdf
        doc.save("table.pdf");   // 导出pdf   // 名字可以传参
    }
  }
}