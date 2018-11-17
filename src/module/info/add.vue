<template>
  <Row>
    <Col span="24">
      <Row >
        <div class="title_cre">
          <h4>新建mas服务</h4>
          <h6>请选择服务类型</h6>
        </div>
        <Col span="6" align="center">
          <Card style="width:180px" @click.native="seri('标准服务')">
            <div style="text-align:center">
              <img src="../../assets/bzfu.png">
              <h3>创建自定义服务 可以编写一些自定义脚本服务、定时器</h3>
            </div>
          </Card>
          <Button>上一步</Button>
          <Button>下一步</Button>
        </Col>
        <Col span="6" align="center">
          <Card style="width:180px" @click.native="seri('自定义服务')">
            <div style="text-align:center">
              <img src="../../assets/zdyfu.png">
              <h3>创建基于MAS的标准服务可以创建接口工程和web工程</h3>
            </div>
          </Card>
          <Button>完成</Button>
          <Button>取消</Button>
        </Col>
      </Row>



    </Col>

  </Row>
</template>

<script>
  /* eslint-disable key-spacing,indent,space-before-function-paren */

  export default {
  data () {
    return {
      vertical: 'AXIS2接口',
    }
  },
    methods:{
      seri(o){
        console.log(o)
      }
    }
}
</script>
<style scoped lang="less">
@import "../../assets/reset.less";
  h4{
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: bold;
  }
  h6{
    font-size: 10px;
    padding: 0 0 20px 0;
  }
  h4,h6{
    margin-left: 80px;
  }
h4,h6,h3{
  color: @font-color;
}
  .ivu-card-bordered{
    margin: 10px 0;
  }
  .ivu-btn-default{
    color: @font-color;
    padding: 8px 15px;
    margin: 0 20px;
  }
  .title_cre{
    width: 100%;
    height: 100px;
  }
</style>
