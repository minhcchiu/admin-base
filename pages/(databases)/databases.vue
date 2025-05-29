<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const tab = ref(route.fullPath)
console.log({tab: tab.value})

watch(() => tab.value, () => {
    router.replace(tab.value)
})
console.log("Main page called")
</script>


<template>
    <div class="container mx-auto px-4">
        <Header />
        <!-- Card Header -->
        <Card class="p-8 w-full bg-[#ecf2ff] relative z-10 border-0">
            <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-semibold">Databases</h3>
                <!-- breadcrumb -->
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Product</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div class="absolute right-8 top-1/3 z-9">
                <img class="size-32" src="https://modernize-nuxt.adminmart.com/images/breadcrumb/ChatBc.png" alt="">
            </div>
        </Card>

        <Card class="my-8 shadow-none rounded-sm">

            <!-- Headers -->
            <div class="border-b flex justify-start gap-2 text-md">   
                <button @click="tab = '/databases'" :class="tab === '/databases' ? 'border-b border-black' : 'border-0'" class="border-black p-2 cursor-pointer transition-all duration-300  group">
                    <span class=" group-hover:bg-black/10 px-2 py-1 rounded-md">Databases</span>
                </button>  
                <button @click="tab = '/databases/usage'" :class="tab === '/databases/usage' ? 'border-b border-black' : 'border-0'" class="border-black p-2 cursor-pointer transition-all duration-300 group">
                    <span class="group-hover:bg-black/10 px-2 py-1 rounded-md">Usage</span>
                </button>
            </div>

            <!-- Content -->
            <NuxtPage />
        </Card>



        <!-- Tab -->
        <!-- <Card class="my-8 pt-6">
            <Tabs default-value="account" class="w-full border-0">
                <TabsList class="bg-transparent flex gap-2 px-4 w-full justify-start border-b py-6">
                    <TabsTrigger value="account" class="tab">  Databases </TabsTrigger>
                    <TabsTrigger value="password" class="tab">  Usages</TabsTrigger>
                </TabsList>

                <TabsContent value="account" class="my-2">
                    Account
                </TabsContent>

                <TabsContent value="password">
                    Usages
                </TabsContent>
            </Tabs>
        </Card> -->



    </div>
</template>


