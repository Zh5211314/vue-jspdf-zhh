# vue-jspdf-zhh
vue使用jspdf导出pdf页面、导出pdf表格，关于里面表格的配置项看官方github：https://github.com/simonbengtsson/jsPDF-AutoTable

# cnpm install

# cnpm install jspdf-autotable

# 修改autotable.js源代码
打开这个地址'vue-jspdf-zhh\node_modules\ _jspdf-autotable@3.5.2@jspdf-autotable\dist'，找到jspdf.plugin.autotable.js，打开这个js文件找到function getTheme(name)这个函数，将主题样式里面的所有head和foot的fontStyle改为normal

# 修改config文件夹下的index.js的启动的host改为localhost，或者自己的启动ip

# cnpm run dev

