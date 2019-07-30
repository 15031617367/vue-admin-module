<template>
    <div class="">
        <h1>模块化echarts图表</h1>
        <div>
            <el-button type="primary" @click="btnsBar(0)">一月</el-button>
            <el-button type="success" @click="btnsBar(1)">二月</el-button>
            <el-button type="info" @click="btnsBar(2)">三月</el-button>
        </div>
        <div class="charts" id="chartsBar"></div>
    </div>
</template>
<script>
import test from "../module/echarts/bar"
export default {
    data() { 
        return {
            month:['../../static/json/bar/1month.json','../../static/json/bar/2month.json','../../static/json/bar/3month.json']
        }
    },
    mounted(){
    //    test.test('chartsBar')
    this.btnsBar(0)
    },

    methods:{
        btnsBar(index){
            this.$axios({
                methods:'get',
                url:this.month[index]
            }).then((response)=>{
                test.test(response.data.data,'chartsBar')
            })
        }
    },
}
</script>

<style scoped>
.charts{
    width: 100%;
    height: 500px;
}
</style>