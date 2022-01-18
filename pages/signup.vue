<template>
   <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto space-y-2"> 
        <div class="flex flex-col rounded-3xl w-full bg-cyan-500 mt-2">
             <br><br><br><br><br><br>                       
        </div>
        <div class="flex flex-col w-full pl-32 mx-auto">
            <p class="text-xl font-bold text-cyan-400">Personal Information</p>
        </div>
        <form
        class="w-full px-28 flex flex-wrap mx-auto mb-16"
        action="">
        <div class="w-full flex gap-x-[10%]">
        <SignUp class="w-[30%] "
            type="String"
            label="Last Name"
            placeholder="Licnep" />
        <SignUp class="w-[30%] "
            type="String"
            label="First Name"
            placeholder="Rodis" />
        <SignUp class="w-[20%]"
            type="String"
            label="Middle"
            placeholder="B" />
        </div>
        <div class="w-full flex gap-x-[10%]"> 
        <SignUp class="w-[15%]"
            type="Number"
            label="Age"
            placeholder="e.g. 18" />
        <SignUp class="w-[35%]"
            type="String"
            label="Email Address"
            placeholder="deeznut@gmail.com" />
        <SignUp class="w-[30%]"
            type="date"
            label="Birthday"
            placeholder="B" />
        </div>   
        <div class="w-full flex gap-x-[10%]">  
        <SignUp class="w-[30%]"
            type="Number"
            label="Contact Number"
            placeholder="e.g 0912" />
        <SignUp class="w-[30%]"
            type="Number"
            label="Travel Requirements"
            placeholder="Upload Files" />
        </div> 
        </form>
        <div class="flex flex-col w-full rounded-md pl-32 py-1 bg-cyan-500">
            <p class="text-xl font-bold text-white">Travel Information</p>
        </div> 
        
        <form class= "w-full flex flex-wrap px-28" action="">
        <div class="w-full flex gap-x-[10%]">  
        <SignUp class="w-[30%]"
            type="String"
            label="From"
            placeholder="Manila" />
        <SignUp class="w-[20%]"
            type="Date"
            label="Arrival Date" />
         <SignUp class="w-[30%]"
            type="String"
            label="Purpose of Visit"
            placeholder="e.g" />
        </div>
        <div class="w-full flex gap-x-[10%]">  
        <SignUp class="w-[30%]"
            type="String"
            label="Destination"
            placeholder="Balanga, Bataan" />
        <SignUp class="w-[20%]"
            type="Date"
            label="Exit Date" />
         <SignUp class="w-[30%]"
            type="String"
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