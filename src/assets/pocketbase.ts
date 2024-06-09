import PocketBase, {type AuthModel} from "pocketbase"
import {ip} from "@/assets/pocketbaseIP";

import {ref} from "vue";

export const pb:PocketBase = new PocketBase(ip);

export const currentUser = ref<AuthModel>(pb.authStore.model)

pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model;
})
