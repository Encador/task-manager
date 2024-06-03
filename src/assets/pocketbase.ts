import PocketBase, {type AuthModel} from "pocketbase"

import {ref} from "vue";

export const pb:PocketBase = new PocketBase("http://68.154.50.85");

export const currentUser = ref<AuthModel>(pb.authStore.model)

pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model;
})
