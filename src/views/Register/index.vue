<template>
  <div class="user-form">
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive } from 'vue';
import { reqRegister } from '../../api';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';

const router = useRouter()

interface FormState {
  username: string;
  password: string;
  email: string
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  email: '',
  remember: true,
});

const onFinish = (values: any) => {
  let params = {
    username: formState.username,
    password: formState.password,
    email: formState.email,
  }
  reqRegister(params).then((response) => {
    if (response.status === 0) {
      message.warn("恭喜您，注册成功,请登录！！！！")
      console.log("我是toLogin方法@@@@", router)
      router.push({
        path: '/'
      })
    }
    else {
      message.error('很遗憾，注册失败！！！')
    }
  })
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>
<style>
body {
  background-image: linear-gradient(to right, rgb(46, 209, 214), rgb(167, 213, 214));
}

.user-form {
  width: 330px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

