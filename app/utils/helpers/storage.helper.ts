import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type { User } from "~/types/pre-built/2-user";
import type { AuthTokens } from "~/types/pre-built/9-token";

export const useStorage = defineStore("storage", () => {
  const user = ref<User | null>(null);
  const tokens = ref<AuthTokens | null>(null);
  const carts = ref<any[] | null>(null);

  // Chỉ khởi tạo từ localStorage ở client
  onMounted(() => {
    const userString = localStorage.getItem("_user");
    const tokenString = localStorage.getItem("_app_login");
    const cartsString = localStorage.getItem("carts");

    user.value = userString ? JSON.parse(userString) : null;
    tokens.value = tokenString ? JSON.parse(tokenString) : null;
    carts.value = cartsString ? JSON.parse(cartsString) : null;
  });

  function setUser(newUser: User) {
    user.value = newUser;
    localStorage.setItem("_user", JSON.stringify(newUser));
  }

  function setTokens(newTokens: AuthTokens) {
    tokens.value = newTokens;
    localStorage.setItem("_app_login", JSON.stringify(newTokens));
  }

  function setCarts(newCarts: any[]) {
    carts.value = newCarts;
    localStorage.setItem("carts", JSON.stringify(newCarts));
  }

  function clearAuth() {
    user.value = null;
    tokens.value = null;
    localStorage.removeItem("_user");
    localStorage.removeItem("_app_login");
  }

  function clearCarts() {
    carts.value = null;
    localStorage.removeItem("carts");
  }

  return {
    user,
    tokens,
    carts,
    setUser,
    setTokens,
    setCarts,
    clearAuth,
    clearCarts,
  };
});
