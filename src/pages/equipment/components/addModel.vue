<template>
  <div>
    <a-modal v-model="visibleModel" title="添加气体检测设备" width="800px">
      <a-form :form="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }" >
        <a-form-item label="设备名称">
          <a-input
            v-decorator="['设备名称', { rules: [{ required: true, message: '请输入设备名称！' }] }]"
            placeholder="请输入设备名称！"
          />
          <div>
            你可以用设备所在区域命名你的设备名称,<span style="color:red">比如“焦油区域”，“储气罐区域”</span>
          </div>
        </a-form-item>
        <a-card class="cardModle" title="网络信息 IP 地址" >
          <a-form-item label="可见光IP地址">
            <a-input
              v-decorator="['可见光IP地址', { rules: [{ required: true, message: '请输入可见光IP地址！' }] }]"
              placeholder="请输入可见光IP地址"
            />
            <div>
              气体设备红外光的IP地址,比如 ,<span style="color:red">192.168.1.101”</span>
            </div>
          </a-form-item>
          <a-form-item label="红外光IP地址">
            <a-input
              v-decorator="['红外光IP地址', { rules: [{ required: true, message: '请输入红外光IP地址！' }] }]"
              placeholder="请输入红外光IP地址"
            />
            <div>
              气体设备红外光的IP地址,比如 ,<span style="color:red"> 192.168.1.101”</span>
            </div>
          </a-form-item>
          <a-form-item label="继电器IP地址">
            <a-input
              v-decorator="['继电器IP地址', { rules: [{ required: true, message: '请输入继电器IP地址！' }] }]"
              placeholder="请输入继电器IP地址"
            />
            <div>
              气体设备继电器的IP地址,比如 ,<span style="color:red">192.168.1.102”</span>
            </div>
          </a-form-item>
        </a-card>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="visibleModel=false">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleSubmit">
          提交
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // visible: true,
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
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
  methods: {
    showModal () {
      this.visibleModel = true
    },
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
.cardModle .ant-card-head{
    border-radius: 3px;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #fff;
}
.cardModle {
  border:none;
  box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
}
/* .ant-form-item-label{
      text-align: left;
} */
/* .ant-col-12{
      width: 80%;
} */
</style>
