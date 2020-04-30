<template>
  <div class="hello">
      <button @click="getPdf('范德萨发的')">用html2canvans导出文件PDF</button>
      <p>我的优点：可以导出任何东西，图片或者文章或者表格，总之就是将你要导出的东西转成一张图片导出</p>
      <p>我的缺点：导出画质模糊，字体偏小</p>
      <div id="pdfDom">
          <table border="1">
              <tr>
                  <td>第三方</td>
                  <td>虚线</td>
              </tr>
              <tr>
                  <td>是发v</td>
                  <td>程序</td>
              </tr>
          </table>
          <img src="../assets/logo.png">
          <div style="font-size: 20px;">
              <p>哎呀呀呀</p>
              <p>你瞅啥</p>
              <p>瞅你咋地</p>
          </div>
      </div>



      <p style="line-height: 180px;background: #ccc;color: #000;">------------------------------------------------------------------------------我是一条分割线--------------------------------------------------------------------------------------------------------</p>
      
      
      
      
      
      <button @click="getPdfTable('tableDom' ,'吃的饭')">用autotable导出表格文件pdf</button>
      <p>我的优点：可以导出页面上的table，或者后台动态返回的table数据，画质清晰</p>
      <p>我的缺点：只能导出table</p>
      <iframe id="tableDom" width="100%" height="500px">
          
      </iframe>
      <div>
          <table id="basic-table" border="2">
                <tr>
                    <td>芙蓉</td>
                    <td>方如果他不</td>
                    <td>大V发的</td>
                </tr>
                <tr>
                    <td>个人个投入</td>
                    <td>不放过会让你</td>
                    <td>存放的</td>
                </tr>
                <tr>
                    <td>如果他人吧</td>
                    <td>亏空</td>
                    <td>辅导班</td>
                </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello >p{
  color: red;
}
#pdfDom{
  width: 100%;
  border: 1px solid;
}
</style>
