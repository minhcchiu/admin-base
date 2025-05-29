<script setup lang="ts">
const formatNumber = (num: number) => {
  if (num > 1000000) {
    return `${num / 1000000}M`;
  } else if (num > 10000) {
    return `${num / 10000}K`;
  }

  const res = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return res;
};
const cards = [
  {
    title: "Employees",
    image:
      "https://modernize-nuxt.adminmart.com/images/svgs/icon-user-male.svg",
    count: 96,
    color: "bg-blue-400/10 text-blue-400 ",
  },
  {
    title: "Clients",
    image:
      "https://modernize-nuxt.adminmart.com/images/svgs/icon-briefcase.svg",
    count: 3650,
    color: "bg-yellow-400/10 text-yellow-400 ",
  },
  {
    title: "Projects",
    image: "https://modernize-nuxt.adminmart.com/images/svgs/icon-mailbox.svg",
    count: 356,
    color: "bg-green-400/10 text-green-400 ",
  },
  {
    title: "Events",
    image:
      "https://modernize-nuxt.adminmart.com/images/svgs/icon-favorites.svg",
    count: 696,
    color: "bg-green-400/10 text-green-400 ",
  },
  {
    title: "Payroll",
    image:
      "https://modernize-nuxt.adminmart.com/images/svgs/icon-speech-bubble.svg",
    count: 965200,
    color: "bg-orange-400/10 text-orange-400 ",
  },
  {
    title: "Reports",
    image: "https://modernize-nuxt.adminmart.com/images/svgs/icon-connect.svg",
    count: 59,
    color: "bg-red-400/10 text-red-400 ",
  },
];
</script>

<template>
  <div>
    <Header />
    <div class="h-full w-full gap-4 p-4 pt-0">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="card.color"
          class="flex aspect-video flex-col items-center justify-center gap-1 rounded-xl py-5"
        >
          <div class="flex flex-1/2 items-center">
            <img :src="card.image" class="size-12 rounded-full object-cover" >
          </div>

          <div class="flex flex-1/2 flex-col items-center">
            <h3 class="text-md font-semibold">{{ card.title }}</h3>
            <p class="text-xl font-semibold">{{ formatNumber(card.count) }}</p>
          </div>
        </div>
      </div>
      <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
