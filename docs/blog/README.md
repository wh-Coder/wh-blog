# 测试 element-ui
  
 ### button
 
 <template>
   <div class="test-demo">
     <el-button>{{msg}}</el-button>
   </div>
 </template>
 
 ### select
 
 <template>
   <el-select v-model="value" placeholder="请选择">
     <el-option
       v-for="item in options1"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
 </template>
 
 <script>
   export default {
     data() {
       return {
       msg: 'Hello VuePress!',           
         options1: [{
           value: '选项1',
           label: '黄金糕'
         }, {
           value: '选项2',
           label: '双皮奶'
         }, {
           value: '选项3',
           label: '蚵仔煎'
         }, {
           value: '选项4',
           label: '龙须面'
         }, {
           value: '选项5',
           label: '北京烤鸭'
         }],
         value: ''
       }
     }
   }
 </script>
 