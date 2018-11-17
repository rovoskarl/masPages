<template>
  <Row>
    <Col span="24">
      <div class="title_cre">
        <h4>新建mas服务</h4>
        <h6>请根据需求填写如下字段</h6>
      </div>
      <Row>
        <Col span="8">
          <Form :model="formItem" :label-width="80">
            <FormItem label="服务名称:">
              <Input v-model="formItem.sericeName" placeholder="请输入服务名称"></Input>
            </FormItem>
            <FormItem label="端口:">
              <Input v-model="formItem.sericePort" placeholder="请输入端口"></Input>
            </FormItem>
            <FormItem label="描述:">
              <Input v-model="formItem.sericeDescribe" placeholder="请输入描述"></Input>
            </FormItem>
            <FormItem label="请求类型">
              <RadioGroup v-model="formItem.sericeType">
                <Radio label="HTTP">HTTP</Radio>
                <Radio label="HTTPS">HTTPS</Radio>
              </RadioGroup>
            </FormItem>
            <div style="margin-left: 80px;">
              <Button>上一步</Button>
              <Button>下一步</Button>
              <Button>完成</Button>
              <Button>取消</Button>
            </div>

          </Form>
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
      formItem:{
        sericeName:'',
        sericePort:'',
        sericeDescribe:'',
        sericeType:'',
      }
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
    padding: 0 0 5px 0;
    font-size: 18px;
    font-weight: bold;
  }
  h6{
    font-size: 10px;
    padding: 0 0 20px 0;
  }
  h4,h6{
    color: @font-color;
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
    margin: 20px 10px;
  }
.title_cre{
  width: 100%;
  height: 100px;
}
  .ivu-form-item{
    margin: 10px 0 0 50px;

  }
  .ivu-form .ivu-form-item-label{
    color: @font-color !important;
  }
</style>
