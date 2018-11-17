<template>
  <Row>
    <Col span="24">
      <h4>选择向导</h4>
      <h6>请根据需求填写如下字段</h6>
      <RadioGroup align="left" v-model="vertical" vertical size="large" @on-change="chan">
        请求类型：
        <Radio :label="item.id" v-for="item in typeList">
          <Icon type="social-apple"></Icon>
          <span>{{item.name}}</span>
        </Radio>
        <Button>上一步</Button>
        <Button>下一步</Button>
        <Button>完成</Button>
        <Button>取消</Button>
      </RadioGroup>
    </Col>

  </Row>
</template>

<script>
  /* eslint-disable key-spacing,indent,space-before-function-paren */

  export default {
  data () {
    return {
      vertical: 'AXIS2接口',
      typeList:[
        {
          name: 'AJAX接口',
          id: 'AJAX接口'
        },
        {
          name: 'AXIS2接口',
          id: 'AXIS2接口'
        },
        {
          name: 'AXIS接口',
          id: 'AXIS接口'
        },
        {
          name: 'JDBC接口',
          id: 'JDBC接口'
        },
        {
          name: 'LDAP接口',
          id: 'LDAP接口'
        },
        {
          name: 'SFCACHE接口',
          id: 'SFCACHE接口'
        },
        {
          name: 'SFS接口',
          id: 'SFS接口'
        },
        {
          name: 'SOAP接口',
          id: 'SOAP接口'
        },
        {
          name: 'WEBRW数据抓取接口',
          id: 'WEBRW数据抓取接口'
        },
        {
          name: 'WEBRW提交接口',
          id: 'WEBRW提交接口'
        },
        {
          name: '空接口',
          id: '空接口'
        }
      ]
    }
  },
    methods:{
      chan(){
        console.log(this.vertical)
      }
    }
}
</script>
<style scoped lang="less">
  @import "../../assets/reset.less";
  h4{
    padding: 0 0 5px 0;
    font-size: 18px;
    font-weight: bold;
    color: @font-color;
  }
  h6{
    font-size: 10px;
    color: @font-color;
    padding: 0 0 20px 0;
  }
  .ivu-btn-default{
    color: @font-color;
  }
  button{
    padding: 10px;
  }
</style>
