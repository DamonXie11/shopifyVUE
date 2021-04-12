<template>
    <div>
        <div class="show" @click="showPod">show POD</div>
        <pod ref="pod"></pod>
    </div>
</template>
<script>
import Pod from '../components/pod.vue'
export default {
  name: 'canvas1',
  components: {Pod},
  data: () => ({
    title: 'pod',
  }),
  mounted() {
      this.showPod();
  },
  methods:{
    showPod(){
        this.setData();
        this.getData();
        this.$refs.pod.printProFlag=true;

    },
    setData(){
        let odata={
            "id":101,
            "title": "标题",
            "stylist": "设计师名字",
            "message": "简介信息",
            "price": 1,
            "property": "属性",
            "sku": "sku",
            "weight": "10",
            "chang": "10",
            "kuan": "10",
            "gao": "10",
            "design": "前端保存设计json对象的字段",
            "image":''
        }
        this.$store.dispatch('AddProduct',odata).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(123)
            throw err
        })
    },
    getData(){
        let that = this;
        let odata={id:'101'};
        this.$store.dispatch('GetDesign',odata).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(123)
            throw err
        })
    }
  }
}
</script>
<style scoped>
.show{
    padding: 10px;
    background: #f00;
    color: #fff;
}
</style>
