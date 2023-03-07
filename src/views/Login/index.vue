<template>
    <div class="user-form">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
                <a-button @click="logIn" :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <a @click="register">
                    register now!
                </a>
            </a-form-item>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import routes from '../../router/routes';
import { commonProps } from 'ant-design-vue/lib/date-picker/generatePicker/props';
import { useRouter } from 'vue-router'
import { reqLogin } from '../../api';
import { setToken } from '../../utils/auth';
import { reqGetUserInfo } from "../../api/";
import { message } from 'ant-design-vue';
import { Spin } from "ant-design-vue";
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
    },
    setup() {
        const formState = reactive<FormState>({
            username: '',
            password: '',
            remember: true,
        });
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        const disabled = computed(() => {
            return !(formState.username && formState.password);
        });

        //跳转到注册页
        const router = useRouter()
        const register = () => {
            router.push({
                path: '/register'
            })
        };
        //跳转到主页
        const logIn = () => {
            let params = {
                username: formState.username,
                password: formState.password,
            }
            reqLogin(params).then((response) => {
                if (response.status === 0) {
                    router.push({
                        name: 'Home',
                        params: {
                            username: formState.username,
                            password: formState.password,
                            data: response.data
                        }
                    })
                    //将用户名保存在浏览器里
                    localStorage.setItem('userInfo', JSON.stringify(params));
                    setToken(response.data);
                    // reqGetUserInfo();
                }
                else
                    message.warn('登录失败')
            })
        }
        return {
            formState,
            onFinish,
            onFinishFailed,
            disabled,
            logIn,
            register
        };
    },
});
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

#components-form-demo-normal-login .login-form {
    max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
    float: right;
}

#components-form-demo-normal-login .login-form-button {
    width: 100%;
}
</style>
