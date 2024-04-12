<template>
  <div>
    <a-modal v-model="visibleModel" title="设置 3" width="800px">
      <a-form :form="form" :label-col="{ span: 3 }" >
        <a-card class="cardModle" title="用户名/密码" >
          <a-form-item label="可见光     用户名">
            <a-input
              class="inputLeft"
            />
            <a-input
              class="inputRight"
            />
          </a-form-item>
          <a-form-item label="红外光     用户名">
            <a-input
              class="inputLeft"
            />
            <a-input
              class="inputRight"
            />
          </a-form-item>
        </a-card>
        <a-card class="cardModleTow" title="端口" >
          <a-form-item label="可见光">
            <a-input
              placeholder="请输入可见光IP地址"
              class="inputLeft"
            />
            <span class="inputRight">
              气体设备可见光的端口，默认<span style="color:red">8000</span>
            </span>
          </a-form-item>
          <a-form-item label="红外光">
            <a-input
              placeholder="请输入红外光"
              class="inputLeft"
            />
            <span class="inputRight">
              气体设备红外光的端口，默认<span style="color:red">15777</span>
            </span>
          </a-form-item>
          <a-form-item label="继电器">
            <a-input
              placeholder="请输入继电器"
              class="inputLeft"
            />
            <span class="inputRight">
              气体设备继电器的端口，默认<span style="color:red">12345</span>
            </span>
          </a-form-item>
        </a-card>
        <a-card class="cardModleThree" title="检测程序" >
          <a-form-item label="IP地址">
            <a-input
              class="inputLeft"
            />
            <span class="inputRight">
              检测程序所在的IP地址，默认<span style="color:red">127.0.0.1</span>
            </span>
          </a-form-item>
          <a-form-item label="端口">
            <a-input
              class="inputLeft"
            />
            <span class="inputRight">
              检测程序所用端口，默认<span style="color:red">15777</span>
            </span>
          </a-form-item>
        </a-card>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="visibleModel=false">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleSubmit">
          保存设置
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  computed: {
    visibleModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    // handleOk(e) {
    //   console.log(e);
    //   this.visible = false;
    //   e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //     }
    //   });
    // },
     handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
<style>
#ant-modal{
  width:70%
}
.cardModle .ant-card-head{
    background-color: #6c757d;
    border-radius: 3px;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #fff;
}
.cardModle {
  border:none;
  box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
      margin-bottom: 20px;
}
.cardModleTow .ant-card-head{
    background-color: #6c757d;
    border-radius: 3px;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #fff;
}
.cardModleTow {
  border:none;
  box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
      margin-bottom: 20px;
          margin: 10px;
}
.cardModleThree .ant-card-head{
    background-color: #6c757d;
    border-radius: 3px;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #fff;
}
.cardModleThree{
  border:none;
  box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
      margin-bottom: 20px;
          margin: 15px;
}
/* .ant-form-item-label{
      text-align: left;
} */
/* .ant-col-12{
      width: 80%;
} */
.body-light .ant-form-item-label > label {
      font-weight: 700;
}
.inputLeft {
      width: 50%;
}
.inputRight {
      width: 50%;
}
</style>
