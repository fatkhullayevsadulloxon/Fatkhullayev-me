<template>
    <div
        class="modal  bg-white w-full lg:max-w-[379px] shadow-xl relative max-h-screen md:overflow-y-auto rounded-xl p-5 !overflow-visible">
        <div class="p-2">
            <div class="flex items-center justify-between">
                <h3 class="font-poppins text-dark font-bold text-2xl">Welcome</h3>
                <button @click="$emit('onCloseModal')" class="hover:opacity-70 active:opacity-50">
                    <img src="../public/assets/images/close-icon.svg" alt="" width="30" height="30">
                </button>
            </div>
            <p class="text-white-200 font-poppins text-sm mb-5">Confirm your email address</p>
            <form @submit.prevent="postApp()">
                <div>
                    <Label title="First name">
                        <Input v-model="firstname" placeholder="Enter your first name" type="text">
                        </Input>
                    </Label>
                </div>
                <div class="mt-3">
                    <Label class="mt-10" title="Last name">
                        <Input v-model="lastname" placeholder="Enter your last name" type="text">
                        </Input>
                    </Label>
                </div>
                <div class="mt-3">
                    <Label class="mt-10" title="E-mail">
                        <Input v-model="country" placeholder="Enter your country" type="text">
                        </Input>
                    </Label>
                </div>
                <div class="mt-3">
                    <Label class="mt-10" title="E-mail">
                        <Input v-model="email" placeholder="Enter your e-mail address" type="text">
                        </Input>
                    </Label>
                </div>
                <Button @click="postApp()" class="mt-5" variant="success" title="Join"></Button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import client from '../api/api';
import Input from './form/Input.vue';
import Label from './form/Label.vue';

const firstname = ref('')
const lastname = ref('')
const country = ref('')
const email = ref('')


const postApp = async () => {
    try {
        const { data } = await client.post(`/landing/EmailSubscribeRequestCreate/`, {
            first_name: firstname.value,
            last_name: lastname.value,
            country: country.value,
            email: email.value,
        })
        // coinLists.value = data.results
    } catch (error) {
        console.log(error)
    }
}

</script>
<style lang="css" scoped></style>