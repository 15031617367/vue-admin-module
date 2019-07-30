<template>
  <div class="div">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <div class="btns">bar</div>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div{
  width: 100%;
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-container{
  height: 100%;
  width: 100%;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-main {
  text-align: center;
}
.btns{
  width: 100%;
  height: 50px;
  border: 1px solid #EEE;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
