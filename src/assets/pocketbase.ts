import PocketBase, {type AuthModel} from "pocketbase"

import {computed, type ComputedRef} from "vue";

const pb:PocketBase = new PocketBase("http://68.154.50.85");

export const currentUser:ComputedRef<AuthModel> = computed(() => {return pb.authStore.model})
