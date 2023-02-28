<template>
  <div class="user-form">
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="旧密码" name="oldPwd" :rules="[{ required: true, message: 'Please input your 旧密码!' }]">
        <a-input v-model:value="formState.oldPwd" />
      </a-form-item>

      <a-form-item label="新密码" name="newPwd" :rules="[{ required: true, message: 'Please input your 新密码!' }]">
        <a-input-password v-model:value="formState.newPwd" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">修改</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { reqUpdatePass } from '../../../api';
import router from '../../../router';
interface FormState {
  oldPwd: string;
  newPwd: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      oldPwd: '',
      newPwd: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
      //调用后端接口
      let params = {
        oldPwd: formState.oldPwd,
        newPwd: formState.newPwd,
      }
      reqUpdatePass(params).then((response) => {
        if (response.status === 0) {
          message.success('恭喜你，修改成功')
          console.log(response)
          router.push({
            path: '/login',
          })
        }
        else {
          message.error('很遗憾，修改失败');
        }
      })
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
<style>
.user-form {
  width: 330px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
  
  