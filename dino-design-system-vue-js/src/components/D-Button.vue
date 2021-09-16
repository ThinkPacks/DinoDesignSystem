<template>
  <button  :class="`d-btn`" >
    <span>Test</span>
  </button>
</template>

<script>
export default {
  name: 'D-Button',
  props: {
     borderRadius:{
       type:String,
       default:'8px'
     },
     paddingX:{
       type:String,
       default:'8px'
     },
     paddingY:{
       type:String,
       default:'8px'
     },
     textColor:{
       type:String,
       default:'#FFFFFF'
     },
     backgrounColor:{
       type:String,
       default:'#0079EA'
     },
     borderColor:{
       type:String,
       default:'#0079EA'
     },
      textHoverColor:{
       type:String,
       default:'#FFFFFF'
     },
     backgrounHoverColor:{
       type:String,
       default:'#084298'
     },
     borderHoverColor:{
       type:String,
       default:'#084298'
     },
      textActiveColor:{
       type:String,
       default:'#FFFFFF'
     },
     backgrounActiveColor:{
       type:String,
       default:'#3D8BFD'
     },
     borderActiveColor:{
       type:String,
       default:'#3D8BFD'
     },
    styles: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    console.log(this.btnType);
    console.log(this.borderRadiusRW)
    return {
      butttonStyles: {
        ...this.styles
      },
    };
  },
}
</script>

<style scoped lang="scss">
.d-btn{
  border-radius: v-bind(borderRadius); 
  padding: v-bind(paddingX) v-bind(paddingY); 
  background-color: v-bind(backgrounColor);
  border:1px solid v-bind(borderColor);
  text-align: center;
  span{
    color: v-bind(textColor);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  &:hover{
    background-color: v-bind(backgrounHoverColor);
    border: 1px solid v-bind(textHoverColor);
  }
  &:active{
    background-color: v-bind(backgrounActiveColor);
    border: 1px solid v-bind(textActiveColor);
  }
}
</style>
