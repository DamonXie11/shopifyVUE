<template>
    <div class="print-box" v-show="printProFlag">
        <div class="print-main">
            <div class="print-box-title">
                My Desgins
                <i class="iconfont close" @click="printProFlag=false">&#xe617;</i>
            </div>
            <div class="print-box-main">
                <div class="print-box-left">
                    <div class="area-list-box">
                        <div class="area-list">
                            <span class="area-item" @click="changeType(areaList.areaType)">{{areaList.areaName}}</span>
                        </div>
                    </div>
                    <div class="print-canvas-box">
                        <div>
                            <img :src="areaList.img" alt="">
                        </div>
                        <canvas height="500" width="500" id="canvasa"></canvas>
                    </div>
                    <!-- 背景图提前加载 -->
                    <div class="print-canvas-box" style="display:none">
                        <div> 
                            <canvas height="500" width="500" id="canvasimga"></canvas>
                        </div>
                    </div>
                    <div class="tips">
                        <p class="tips-title">Printable Area</p>
                    </div>
                    <div class="print-range-box">
                        <input type="range" v-model="operaObj.scale" @change="changeScale" min=0.1 max=2 step=0.1 class="print-range">
                        <div class="center-line"></div>
                    </div>
                    <div class="opera-type">
                        <div class="opera-rotate">
                            <span class="title">Rotate：</span>
                            <div class="print-opera-num"> 
                                <span class="reduce" @click="reduceAngle">
                                    <i class="iconfont">&#xe603;</i>
                                </span>
                                <input class="num" type="text" v-model="operaObj.angle" @blur="blurAngel()" @input="numberInput('anglel')">
                                <span class="add" @click="addAngle">
                                    <i class="iconfont">&#xe606;</i>
                                </span>
                            </div>
                        </div>
                        <div class="opera-move">
                            <i class="iconfont" @click="alignCenterFun()">&#xe615;</i>
                            <i class="iconfont middle" @click="middleCenterFun()">&#xe615;</i>
                            <span class="opera-reset" @click="resetFun()">Reset</span>
                        </div>
                    </div>
                </div>
                <div class="print-box-right">
                    <div class="print-tab-list">
                        <span class="print-tab-item curr">Desgin Layer</span>
                    </div>
                    <div class="pring-right-main" v-show="showType==1">
                        <div class="print-level">
                            <p class="title">
                                Layer<span class="right">{{layerList.length}}/20</span>
                            </p>
                            <div class="print-level-list" v-if="layerList.length>0">
                                <div class="print-level-item" v-for="(item,index) in layerList" :class="{curr:item.isShow}" :key="index">
                                    <div class="main" @click="chooseFun(index)">
                                        <img class="img" v-if="item.type=='Picture'" :src="item.imgsrc" alt="">
                                        <div class="text" v-if="item.type=='Text'">Content</div>
                                        <div class="detail">
                                            <p class="detail-title">
                                                <i class="icon">{{item.type}}</i>
                                            </p>
                                            <p class="detail-title" :title="item.title">
                                                {{item.title}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="opera-list" v-show="item.isShow">
                                        <span class="opera-item" @click="moveUp(index)">
                                            <i class="iconfont">&#xe612;</i>
                                            <span class="tips">Move Up Layer</span>
                                        </span>
                                        <span class="opera-item" @click="moveDown(index)" >
                                            <i class="iconfont">&#xe614;</i>
                                            <span class="tips">Move Down Layer</span>
                                        </span>
                                        <span class="opera-item" v-if="item.type=='Text'" @click="editItem(index)">
                                            <i class="iconfont">&#xe610;</i>
                                            <span class="tips">Edit Layer</span>
                                        </span>
                                        <span class="opera-item">
                                            <button @click="copyFun(index)">Copy</button>
                                            <i class="iconfont">&#xe601;</i>
                                            <span class="tips">Copy Layer</span>
                                        </span>
                                        <span class="opera-item" @click="resetFun(index)">
                                            <i class="iconfont">&#xe650;</i>
                                            <span class="tips">Reset Layer</span>
                                        </span>
                                        <span class="opera-item" @click="delItem(index)">
                                            <i class="iconfont">&#xe60b;</i>
                                            <span class="tips">Cancel Layer</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="print-level-nodata" v-show="layerList.length==0">
                                Nothing Changed
                            </div>
                            <div class="print-btn-group level-group" v-show="layerList.length<20">
                                <span class="ui-btn" @click="upLoadItemImg">Upload Image
                                    <!-- <input class="file" @change="upLoadItemImg(this.files)" accept=".jpg,.png,.jpeg,.bmp"> -->
                                </span>
                                <span class="ui-btn" @click="showAddText">Add Text</span>
                            </div>
                        </div> 
                        
                        <div class="print-btn-group all">
                            <span class="ui-btn" @click="printProFlag=false">Cancel</span>
                            <span class="ui-btn org" @click="saveFun">Save</span>
                        </div>
                    </div>
                    <div class="pring-right-main pring-right-color" v-show="showType==3">
                        <div class="mask"></div>
                        <div class="pring-right-color-box">
                            <div class="info-item">
                                <p class="title">Add Text</p>
                                <textarea class="textarea" name="" @input="textInput" maxlength="50" v-model="fontObj.val" placeholder="Please Input the Text" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div class="print-select">
                                <p class="title">Select Text Color</p>
                                <div class="select ui-select" @click="isshowColor=!isshowColor">
                                    <span class="square" :style="{background:fontObj.fill}"></span>{{fontObj.colorName}}
                                </div>
                                <ul class="color-list" v-show="isshowColor">
                                    <li class="color-item" v-for="(item,index) in colorListTxt" :key="index" :style="{background:item.color}" @click="changeTextColor(item)"></li>
                                </ul>
                            </div>
                            <div class="opera-list">
                                <div class="opera-item">
                                    <p class="title">Font Size</p>
                                    <div class="print-opera-num">
                                        <span class="reduce" @click="reduceFont('size')">
                                            <i class="iconfont">&#xe603;</i>
                                        </span>
                                        <input class="num" type="text" v-model="fontObj.fontSize" @blur="fontBlur('size')" @input="numberInput('size')">
                                        <span class="add" @click="addFont('size')">
                                            <i class="iconfont">&#xe606;</i>
                                        </span>
                                    </div>
                                </div>
                                <div class="opera-item">
                                    <p class="title">Font Space</p>
                                    <div class="print-opera-num">
                                        <span class="reduce" @click="reduceFont('space')">
                                            <i class="iconfont">&#xe603;</i>
                                        </span>
                                        <input class="num" v-model="fontObj.charSpacing" type="text" @blur="fontBlur('space')" @input="numberInput('space')">
                                        <span class="add" @click="addFont('space')">
                                            <i class="iconfont">&#xe606;</i>
                                        </span>
                                    </div>
                                </div>
                                <div class="opera-item">
                                    <p class="title">Rotate</p>
                                    <div class="print-opera-num">
                                        <span class="reduce" @click="reduceFont('angle')">
                                            <i class="iconfont">&#xe603;</i>
                                        </span>
                                        <input class="num" v-model="fontObj.angle" type="text" @blur="fontBlur('angle')" @input="numberInput('anglef')">
                                        <span class="add" @click="addFont('angle')">
                                            <i class="iconfont">&#xe606;</i>
                                        </span>
                                    </div>
                                </div>
                                <div class="opera-item">
                                    <p class="title">Edge Pixel</p>
                                    <div class="print-opera-num">
                                        <span class="reduce" @click="reduceFont('stroke')">
                                            <i class="iconfont">&#xe603;</i>
                                        </span>
                                        <input class="num" v-model="fontObj.strokeWidth" type="text" @blur="fontBlur('stroke')" @input="numberInput('stroke')">
                                        <span class="add" @click="addFont('stroke')">
                                            <i class="iconfont">&#xe606;</i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="print-btn-group">
                                <span class="ui-btn org" @click="addTextFun()">Save</span>
                                <span class="ui-btn" @click="showType=1">Cancel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import podData from '../assets/js/pod'
import { Loading } from 'element-ui';
export default {
  name: 'pod',
  props:{
      id:''
  },
  data: () => ({
    title: 'pod',
    printProFlag:false,//是否显示弹框
    showType:1,//1:图层；2：产品信息；3：文字编辑
    areaObj:{//区域参数
        width: 150, 
        height: 100,
        radius: 50,
        fill: '',
        scaleY: 1,
        scaleX: 1,
        left:80,
        top:80,
        angle:0,
        originX: 'center',
        originY: 'center',
        selectable:false,
        strokeWidth: 1,
        stroke: '#EE501F',
        strokeDashArray:[3,1]
    },
    operaObj:{//设计操作参数
        scale:1,
        angle:0
    },
    areaList:{},//区域数据
    ocanvas:'',
    ocanvasImg:'',//背景图片
    layerList:[],//图层列表
    isshowColor:false,
    chooseIndex:0,
    colorListTxt:[],
    fontObj:{//字体数据
        type:"Text",
        left: 0,
        top: 0,
        fill: '#000',
        strokeWidth: 0,
        stroke: '#000',
        scaleX:1,
        scaleY:1,
        originX: 'center',
        originY: 'center',
        fontFamily:'Arial',
        fontSize:16,
        angle:0,
        charSpacing:0,
        val:'',
        colorName:'black',
        editable:false
    },
    sendData:{
        printItemName:'',
        description:'',
        shopMethod:''
    },
    tips:{
        noFound:'No layer Found, please add it and try again',
        noSelect:'No layer selected, please select it and try again'
    },
    activeObj:{//选择时边框样式
        hasBorders: true,
        transparentCorners: false,
        borderColor:'#EE501F',
        cornerColor: '#fff',
        cornerStrokeColor: '#EE501F',
        cornerSize:6,
        rotatingPointOffset:15
    }
  }),
  mounted() {
    this.dataInit();
    this.imgBack();
  },
  watch:{
      ocanvas:function(){
          let that = this;
          this.ocanvas.on('mouse:down', function(options) {
                var olist = that.layerList;
                if(that.ocanvas.getActiveObject()&&!that.ocanvas.getActiveObject()._objects){
                    that.ocanvas.item(0).set({
                        strokeWidth:1
                    })
                    that.ocanvas.requestRenderAll();
                    that.operaObj= {
                        angle:that.ocanvas.getActiveObject().angle,
                        scale:that.ocanvas.getActiveObject().scaleX
                    }
                    that.changeItemCurr(that.getCurrentIndex());
                    if (options.target.hasOwnProperty('text')) { 
                        console.log(options.target)
                        that.layerList[that.getCurrentIndex()].title = options.target.text;
                        that.fontObj.val = options.target.text;
                        that.fontObj.fontSize = options.target.fontSize;
                        that.fontObj.charSpacing = options.target.charSpacing;
                        that.fontObj.angle = options.target.angle;
                        that.fontObj.fontFamily = options.target.fontFamily;
                        that.fontObj.strokeWidth = options.target.strokeWidth;
                        for(let i=0;i<that.colorListTxt.length;i++){
                            if(options.target.fill==that.colorListTxt[i].color){
                                that.fontObj.colorName=that.colorListTxt[i].name;
                                that.fontObj.fill=that.colorListTxt[i].color;
                            }
                        }
                    }else{
                        that.showType=1;
                    }   
                }else{
                    for(var i=0;i<olist.length;i++){
                        that.layerList[i].isShow=false;
                    }
                }
            });
            that.ocanvas.on('mouse:up', function(options) {
                if(that.ocanvas.item(0)){
                    that.ocanvas.item(0).set({
                        strokeWidth:0
                    })
                    that.ocanvas.requestRenderAll();
                }
            })
            that.ocanvas.on('object:modified', function(options) {
                console.log(options)
                if(!options.target._objects){
                    if(options.target.hasOwnProperty('text')){
                        that.layerList[that.getCurrentIndex()].title = options.target.text;
                        that.fontObj.val = options.target.text;
                    }
                    that.operaObj.angle = that.ocanvas.getActiveObject().angle;
                    that.fontObj.angle = that.ocanvas.getActiveObject().angle;
                }
            });
      }
  },
  methods:{
    dataInit(){
        if(this.$route.query.id){
            this.areaList= podData.areaList[1];
        }else{
            this.areaList= podData.areaList[0];
        }
        
        this.colorListTxt = podData.colorListTxt;
        this.ocanvas = this.__canvas = new fabric.Canvas('canvasa');
        this.ocanvas.lockScalivX = this.ocanvas.lockScalivY = true;
        this.areaObj.scaleX=this.areaList.scaleX;
        this.areaObj.scaleY=this.areaList.scaleX;
        this.areaObj.left=this.areaList.left;
        this.areaObj.top=this.areaList.top;
        this.areaObj.angle=this.areaList.angle;
        this.areaObj.width=this.areaList.width;
        this.areaObj.height=this.areaList.height;
        this.fontObj.left=this.areaList.left;
        this.fontObj.top=this.areaList.top;
        let oclipPath = new fabric.Rect(this.areaObj);
        let oclipPath1 = new fabric.Rect(this.areaObj);
        this.ocanvas.clipPath = oclipPath;
        this.ocanvas.add(oclipPath1);
        this.imgBack();
    },
    imgBack(){
        let that = this;
        this.ocanvasImg = this.__canvas = new fabric.Canvas('canvasimga');
        this.ocanvasImg.lockScalivX = this.ocanvasImg.lockScalivY = true;
        let oImage = new Image();
        oImage.src = this.areaList.img+'?timeStamp='+new Date().getTime();
        oImage.setAttribute('crossOrigin', 'anonymous');
        oImage.onload = function(){
            let omultiple;
            if(oImage.width>oImage.height){
                omultiple=500/oImage.width;
            }else{
                omultiple=500/oImage.height; 
            }
            let oimg = new fabric.Image(oImage,{
                scaleX: omultiple,
                scaleY: omultiple,
                selectable: false,
                left: 250, 
                top: 250,
                originX: 'center',
                originY: 'center',
            });
            that.ocanvasImg.add(oimg);
        }
    },
    changeScale(){
        console.log(this.operaObj.scale)
    },
    upLoadItemImg() {
        let links = [];
        let that = this;
        window.cjUtils.readLocalFile({}).then(res => {
            let loadingInstance = Loading.service({});
            res.FileArr.forEach(json => {
                window.cjUtils.uploadFileToOSS({
                    file: json.file,
                    signatureURL: 'https://app.cjdropshipping.com/app/oss/policy'
                })
                .then(link => {
                    links.push(link);
                    that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                        loadingInstance.close();
                    });
                    if (links.length === res.FileArr.length) {
                        console.log('图片链接 ->', links)
                        let obj = {
                            type:'Picture',
                            imgsrc:links[0],
                            title:json.file.name,
                            isShow:true,
                            angle:0
                        }
                        let oscalex;
                        let oImage = new Image();
                        oImage.src = links[0]+'?timeStamp='+new Date().getTime();
                        oImage.setAttribute('crossOrigin', 'anonymous');
                        oImage.onload = function(){
                            if(parseFloat(that.areaList.scaleX)*100<oImage.width){//当图片大于当前区域时
                                oscalex = parseFloat(that.areaList.scaleX)*100/oImage.width;
                            }else{
                                oscalex=1;
                            }
                            var oimg = new fabric.Image(oImage,{
                                left: that.areaList.left, 
                                top: that.areaList.top,
                                originX: 'center',
                                originY: 'center',
                                scaleX:oscalex,
                                scaleY:oscalex,
                            });
                            obj.imgScalex = oscalex;
                            that.ocanvas.add(oimg).setActiveObject(oimg);
                            that.layerList.splice(0,0,obj);
                            that.changeItemCurr(0);
                            that.ocanvas.item(that.layerList.length).set(that.activeObj);
                            that.ocanvas.requestRenderAll();
                        }
                    }
                })
            })
        })
    },
    //减少旋转角度
    reduceAngle(){
        if(this.operaObj.angle<=-360){
            this.operaObj.angle=-360;
            return;
        }
        if(this.ocanvas.getActiveObject()){
            this.operaObj.angle = parseInt(this.operaObj.angle)-1;
            this.fontObj.angle =  this.operaObj.angle;
            this.layerList[this.getCurrentIndex()].angle =this.operaObj.angle;
            this.ocanvas.getActiveObject().set({
                'angle':this.operaObj.angle
            })
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
    },
    //增加旋转角度
    addAngle(){
        if(this.operaObj.angle>=360){
            this.operaObj.angle=360;
            return;
        }
        if(this.ocanvas.getActiveObject()){
            this.operaObj.angle = parseInt(this.operaObj.angle)+1;
            this.fontObj.angle =  this.operaObj.angle;
            this.layerList[this.getCurrentIndex()].angle =this.operaObj.angle;
            this.ocanvas.getActiveObject().set('angle', this.operaObj.angle);
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
    },
    blurAngel(){
        if(this.ocanvas.getActiveObject){
            this.ocanvas.getActiveObject().set('angle', this.operaObj.angle);
            this.fontObj.angle =  this.operaObj.angle;
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
        
    },
    //缩小或扩大
    changeScale(){
        if(this.ocanvas.getActiveObject()){
            this.ocanvas.getActiveObject().set({
                'scaleX':this.operaObj.scale,
                'scaleY':this.operaObj.scale
            });
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
        
    },
    //水平居中
    alignCenterFun(){
        if(this.ocanvas.getActiveObject()){
            this.ocanvas.getActiveObject().set({
                'left':this.areaList.left
            });
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
    },
    //垂直居中
    middleCenterFun(){
        if(this.ocanvas.getActiveObject()){
            this.ocanvas.getActiveObject().set({
                'top':this.areaList.top
            });
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
    },
    changeTextColor(item){
        this.fontObj.fill  =item.color;
        this.fontObj.colorName  =item.name;
        if(this.ocanvas.getActiveObject()){
            this.ocanvas.getActiveObject().set({
                'fill':item.color
            });
            this.ocanvas.requestRenderAll();
            this.layerList[this.getCurrentIndex()].fill = item.color;
        }else{
            this.noTips();
        }
    },
    noTips(){
        if(this.layerList.length==0){
            this.$message(this.tips.noFound);
        }else{
            this.$message(this.tips.noSelect);
        }
    },
    showAddText(){
        this.showType=3;
    },
    addTextFun(){

    },
    //获取编辑的当前图层index
    getCurrentIndex(){
        let oindex;
        for(var i=0;i<this.ocanvas.getObjects().length;i++){
            if(this.ocanvas.getObjects()[i]==this.ocanvas.getActiveObject()){
                oindex=this.ocanvas.getObjects().length-1-i;
            }
        }
        return oindex;
    },
    textInput(){
        if(this.ocanvas.getActiveObject()){
            if(this.fontObj.val){
                this.ocanvas.getActiveObject().set({
                    'text':this.fontObj.val
                });
                this.operaObj= {
                    angle:this.ocanvas.getActiveObject().angle,
                    scale:this.ocanvas.getActiveObject().scaleX
                }
                this.changeItemCurr(this.getCurrentIndex());
                this.layerList[this.getCurrentIndex()].title = this.fontObj.val;
                this.ocanvas.requestRenderAll();
            }else{
                this.ocanvas.remove(this.ocanvas.getActiveObject());
                this.layerList.splice(this.getCurrentIndex(),1)
            }
        }else{
            if(!this.isEditText){
                var obj = {
                    type:'Text',
                    title:this.fontObj.val,
                    isShow:true,
                    fill: '#000',
                    strokeWidth: 0,
                    stroke: '#000',
                    scaleX:1,
                    scaleY:1,
                    originX: 'center',
                    originY: 'center',
                    fontFamily:'Arial',
                    fontSize:16,
                    angle:0,
                    charSpacing:0,
                    val:'Default Font',
                }
                this.fontObj.left = this.areaList.left;
                this.fontObj.top = this.areaList.top;
                var otext = new fabric.IText(this.fontObj.val,this.fontObj);
                this.ocanvas.add(otext).setActiveObject(otext);
                this.layerList.splice(0,0,obj);
                var olen = this.layerList.length;
                this.ocanvas.item(olen).set(this.activeObj);
                this.changeItemCurr(olen-1);
                this.ocanvas.requestRenderAll();
            }
        }
    },
    resetFun(index){
        if(this.ocanvas.getActiveObject()){
            this.fontObj.left=this.areaList.left;
            this.fontObj.top=this.areaList.top;
            this.fontObj.angle=0;
            this.operaObj.angle=0;
            this.operaObj.scale=1;
            if(!this.ocanvas.getActiveObject().hasOwnProperty('text')){
                this.fontObj.scaleX=this.layerList[this.getCurrentIndex()].imgScalex;
                this.fontObj.scaleY=this.layerList[this.getCurrentIndex()].imgScalex;
            }
            this.ocanvas.getActiveObject().set(this.fontObj)
            this.ocanvas.requestRenderAll();
        }else{
            this.noTips();
        }
    },
    changeItemCurr(index){
        var olist = this.layerList;
        for(var i=0;i<olist.length;i++){
            this.layerList[i].isShow=false;
        }
        this.layerList[index].isShow=true;
        this.chooseIndex = index;
    },
    chooseFun(index){
        this.changeItemCurr(index);
        let canvasI = this.ocanvas.getObjects().length-index-1;
        this.ocanvas.setActiveObject(this.ocanvas.item(canvasI));
        this.ocanvas.requestRenderAll();
    },
    //上移图层
    moveUp(index){
        var selected=this.ocanvas.getActiveObject();
        if(index!=0){
            selected.bringForward();
            this.layerList[index] = (this.layerList).splice(index-1,1,this.layerList[index])[0];
        }
    },
    //下移图层
    moveDown(index){
        var selected=this.ocanvas.getActiveObject();
        var list = this.layerList;
        if(index<list.length-1){
            selected.sendBackwards();
            this.layerList[index] = (this.layerList).splice(index+1,1,this.layerList[index])[0];
        }
    },
    //编辑图层
    editItem(index){
        this.showType=3;
        this.isEditText = true;
        this.fontObj.val=this.layerList[index].title;
    },
    //复制图层
    copyFun(index){
        var _clipboard;
        let that = this;
        if(this.layerList.length<20){
            if(this.ocanvas.getActiveObject().hasOwnProperty('text')){//当前为文字时
                var _obj = this.layerList[index];
                var newObj = {};
                for(var key in _obj){
                    newObj[key] = _obj[key];
                }
                newObj.isShow = false;
                this.ocanvas.getActiveObject().clone(function(cloned) {
                    _clipboard = cloned;
                })
                _clipboard.set({
                    left: _clipboard.left + 10,
                    top: _clipboard.top + 10,
                    evented: true,
                });
                this.ocanvas.add(_clipboard).setActiveObject(_clipboard);
                this.layerList.splice(0,0,newObj);
                this.ocanvas.item(this.layerList.length).set(this.activeObj)
                this.changeItemCurr(0);
                this.ocanvas.requestRenderAll();
            }else{
                var obj = {
                    type:'Picture',
                    imgsrc:this.layerList[this.getCurrentIndex()].imgsrc,
                    title:this.layerList[this.getCurrentIndex()].title,
                    info:'Excellent/178DPI',
                    isShow:true,
                    angle:this.layerList[this.getCurrentIndex()].angle,
                    imgScalex:this.layerList[this.getCurrentIndex()].imgScalex
                }
                var oImage = new Image();
                oImage.src = obj.imgsrc+'?timeStamp='+new Date().getTime();
                oImage.setAttribute('crossOrigin', 'anonymous');
                oImage.onload = function(){
                    var oimg = new fabric.Image(oImage,{
                        left: that.areaList.left, 
                        top: that.areaList.top,
                        originX: 'center',
                        originY: 'center',
                        scaleX:that.layerList[that.getCurrentIndex()].imgScalex,
                        scaleY:that.layerList[that.getCurrentIndex()].imgScalex,
                    });
                    that.ocanvas.add(oimg).setActiveObject(oimg);
                    that.layerList.splice(0,0,obj);
                    that.changeItemCurr(0);
                    that.ocanvas.item(that.layerList.length).set(that.activeObj);
                    that.ocanvas.requestRenderAll();
                }
            }
        }else{
            this.$message('20 Layers Maximum');
            return false;
        }
    },
    //删除图层
    delItem(index){
        let canvasI = this.ocanvas.getObjects().length-index-1;
        this.layerList.splice(index,1);
        this.ocanvas.remove(this.ocanvas.item(canvasI))
    },
    //添加文字增加操作
    addFont(type){
        console.log(type)
        if(this.ocanvas.getActiveObject()){
            if(type=='size'){
                this.fontObj.fontSize = parseFloat(this.fontObj.fontSize)+1;
                this.ocanvas.getActiveObject().set({
                    'fontSize':this.fontObj.fontSize
                });
                this.layerList[this.getCurrentIndex()].fontSize = this.fontObj.fontSize;
            }else if(type=='space'){
                this.fontObj.charSpacing = parseFloat(this.fontObj.charSpacing)+10;
                this.ocanvas.getActiveObject().set({
                    'charSpacing':this.fontObj.charSpacing
                });
                this.layerList[this.getCurrentIndex()].charSpacing = this.fontObj.charSpacing;
            }else if(type=='angle'){
                this.fontObj.angle = parseFloat(this.fontObj.angle)+1;
                this.ocanvas.getActiveObject().set({
                    'angle':this.fontObj.angle
                });
                this.layerList[this.getCurrentIndex()].angle = this.fontObj.angle;
            }else if(type=='stroke'){
                this.fontObj.strokeWidth = parseFloat(this.fontObj.strokeWidth)+1;
                this.ocanvas.getActiveObject().set({
                    'strokeWidth':this.fontObj.strokeWidth
                });
                this.layerList[this.getCurrentIndex()].strokeWidth = this.fontObj.strokeWidth;
            }
        }else{
            this.noTips();
        }
        this.ocanvas.requestRenderAll();
    },
    //减少文字增加操作
    fontBlur(type){
        console.log(type)
        if(this.ocanvas.getActiveObject()){
            if(type=='size'){
                if(this.fontObj.fontSize<12) {
                    this.fontObj.fontSize=12;
                }
                this.fontObj.fontSize = parseFloat(this.fontObj.fontSize);
                this.ocanvas.getActiveObject().set({
                    'fontSize':this.fontObj.fontSize
                });
                this.layerList[this.getCurrentIndex()].fontSize = this.fontObj.fontSize;
            }else if(type=='space'){
                this.fontObj.charSpacing = parseFloat(this.fontObj.charSpacing);
                this.ocanvas.getActiveObject().set({
                    'charSpacing':this.fontObj.charSpacing
                });
                this.layerList[this.getCurrentIndex()].charSpacing = this.fontObj.charSpacing;
            }else if(type=='angle'){
                this.fontObj.angle = parseFloat(this.fontObj.angle);
                this.ocanvas.getActiveObject().set({
                    'angle':this.fontObj.angle
                });
                this.layerList[this.getCurrentIndex()].angle = this.fontObj.angle;
            }else if(type=='stroke'){
                this.fontObj.strokeWidth = parseFloat(this.fontObj.strokeWidth);
                this.ocanvas.getActiveObject().set({
                    'strokeWidth':this.fontObj.strokeWidth
                });
                this.layerList[this.getCurrentIndex()].strokeWidth = this.fontObj.strokeWidth;
            }
        }else{
            this.noTips();
        }
        this.ocanvas.requestRenderAll();
    },
    //失去焦点
    reduceFont(type){
        console.log(type)
        if(this.ocanvas.getActiveObject()){
            if(type=='size'){
                if(this.fontObj.fontSize==12) return false;
                this.fontObj.fontSize = parseFloat(this.fontObj.fontSize)-1;
                this.ocanvas.getActiveObject().set({
                    'fontSize':this.fontObj.fontSize
                });
                this.layerList[this.getCurrentIndex()].fontSize = this.fontObj.fontSize;
            }else if(type=='space'){
                this.fontObj.charSpacing = parseFloat(this.fontObj.charSpacing)-10;
                this.ocanvas.getActiveObject().set({
                    'charSpacing':this.fontObj.charSpacing
                });
                this.layerList[this.getCurrentIndex()].charSpacing = this.fontObj.charSpacing;
            }else if(type=='angle'){
                if(this.fontObj.angle==0){
                    return;
                }
                this.fontObj.angle = parseFloat(this.fontObj.angle)-1;
                this.ocanvas.getActiveObject().set({
                    'angle':this.fontObj.angle
                });
                this.layerList[this.getCurrentIndex()].angle = this.fontObj.angle;
            }else if(type=='stroke'){
                if(this.fontObj.strokeWidth==0){
                    return;
                }
                this.fontObj.strokeWidth = parseFloat(this.fontObj.strokeWidth)-1;
                this.ocanvas.getActiveObject().set({
                    'strokeWidth':this.fontObj.strokeWidth
                });
                this.layerList[this.getCurrentIndex()].strokeWidth = this.fontObj.strokeWidth;
            }
        }else{
            this.noTips();
        }
        this.ocanvas.requestRenderAll();
    },
    numberInput (type){
        if(type=='anglel'){
            this.operaObj.angle=(this.operaObj.angle).replace(/[^\d]/g,'');
        }else if(type=='anglef'){
            this.fontObj.angle=(this.fontObj.angle).replace(/[^\d]/g,'');
        }else if(type=='size'){
            this.fontObj.fontSize = this.fontObj.fontSize.replace(/[^\d]/g,'');
        }else if(type=='space'){
            this.fontObj.charSpacing=(this.fontObj.charSpacing).replace(/[^\d]/g,'');
        }else if(type=='stroke'){
            this.fontObj.strokeWidth = (this.fontObj.strokeWidth).replace(/[^\d]/g,'');
        }
    }, 
    showAddText(){
        this.showType=3;
        this.isshowColor=false;
        if(this.ocanvas.getActiveObject()){
            this.ocanvas.discardActiveObject();
        }
        this.isEditText=false;
        // 数据初始化
        this.fontObj =  {
            type:"Text",
            left: this.areaList.left,
            top: this.areaList.top,
            fill: '#000',
            strokeWidth: 0,
            stroke: '#000',
            scaleX:1,
            scaleY:1,
            originX: 'center',
            originY: 'center',
            fontFamily:'Arial',
            fontSize:16,
            angle:0,
            charSpacing:0,
            val:'',
            colorName:'black',
            editable:false
        }
        this.ocanvas.requestRenderAll();
    },
    addTextFun(){
        if(!this.fontObj.val){
            this.$message("Please Input the Text");
            return false;
        }
        this.showType=1;
    },
    dataURLtoFile(dataurl, filename) { //将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    },
    saveFun(){
        let that = this;
        let prodetail = this.$store.state.pod.designList;
        console.log(prodetail)
        this.ocanvas.item(0).set({
            strokeWidth:0
        });
        this.ocanvas.renderAll();
        let loadingInstance = Loading.service({});
        
        let areaImg = this.ocanvas.toDataURL();
        console.log(areaImg)
        let imgIcon = new Image();
        imgIcon.src = areaImg;
        imgIcon.onload = function(){
            let acimg = new fabric.Image(imgIcon,{
                left: 250, 
                top: 250,
                originX: 'center',
                originY: 'center'
            });
            that.ocanvasImg.add(acimg);
            that.ocanvasImg.renderAll();
            let htmlImg = that.ocanvasImg.toDataURL();
            window.cjUtils.uploadFileToOSS({
                file: that.dataURLtoFile(htmlImg,''),
                signatureURL: 'https://app.cjdropshipping.com/app/oss/policy'
            })
            .then(link => {
                that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                    loadingInstance.close();
                });
                console.log(link)
                that.setData(link);
            })
        }

    },
    setData(img){
        let that = this;
        let odata={
            "title": "pod设计测试",
            "stylist": "Mr.liu",
            "message": "简介信息",
            "price": 1,
            "property": "属性",
            "sku": "sku",
            "weight": "10",
            "chang": "10",
            "kuan": "10",
            "gao": "10",
            "design": JSON.stringify(this.layerList),
            "image":img
        }
        this.$store.dispatch('AddProduct',odata).then((data) => {
            console.log(data)
            that.$router.push({
                path:'/mgr/minePack',
                query:{

                }
            })
        }).catch((err) => {
            throw err
        })
    }
}
}
</script>

<style scoped>
canvas{
  border:1px solid #f2f2f2;
}
</style>