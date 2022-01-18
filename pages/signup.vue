<template>
   <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto space-y-2"> 
        <div class="flex flex-col rounded-3xl w-full bg-cyan-500 mt-2 pb-36">                      
        </div>
        <div class="flex flex-col w-[full] pl-32 mx-auto">
            <p class="text-xl font-bold text-cyan-400">Personal Information</p>
        </div>
        <form
        class="w-full flex flex-wrap mx-auto pl-28"
        action="">
        <div class="w-full flex gap-x-[5%]">
        <SignUp class="w-[30%] "
            type="text"
            label="Last Name"
            placeholder="Licnep" />
        <SignUp class="w-[30%] "
            type="text"
            label="First Name"
            placeholder="Rodis" />
        <SignUp class="w-[20%]"
            type="text"
            label="Middle"
            placeholder="B" />
        </div>
        <div class="w-full flex gap-x-[5%]"> 
        <SignUp class="w-[15%]"
            type="number"
            label="Age"
            placeholder="e.g 18" />
        <SignUp class="w-[35%]"
            type="email"
            label="Email Address"
            placeholder="deeznut@gmail.com" />
        <SignUp class="w-[30%]"
            type="date"
            label="Birthday"/>
        </div>   
        <div class="w-full flex gap-x-[5%]">  
        <SignUp class="w-[30%]"
            type="number"
            label="Contact Number"
            placeholder="e.g 0912" />
        <SignUp class="w-[30%]"
            type="File"
            label="Travel Requirements"
            placeholder="Upload Files" />
        </div> 
        <div class="flex w-[150%] pl-32 rounded-md bg-cyan-500 ml-[-7rem]">
            <p class="text-xl font-bold text-white">Travel Information</p>
        </div> 
        <div class="w-full flex gap-x-[5%]">  
        <SignUp class="w-[30%]"
            type="text"
            label="From"
            placeholder="Manila" />
        <SignUp class="w-[20%]"
            type="date"
            label="Arrival Date" />
         <SignUp class="w-[30%]"
            type="text"
            label="Purpose of Visit"
            placeholder="e.g" />
        </div>
        <div class="w-full flex gap-x-[5%]">  
        <SignUp class="w-[30%]"
            type="text"
            label="Destination"
            placeholder="Balanga, Bataan" />
        <SignUp class="w-[20%]"
            type="Date"
            label="Exit Date" />
         <SignUp class="w-[30%]"
            type="text"
            label="Mode of tranport"
            placeholder="SUV" />
        </div>
        </form>
    </div>
    </section>
</template>

<script>
export default {
  name: 'SignupPage',
}
</script>

<style>

</style>