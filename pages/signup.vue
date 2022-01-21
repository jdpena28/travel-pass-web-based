<template>
    <section id="Sign-up" class="h-screen w-full bg-cover">
     <div class="container h-[90%] flex justify-center items-center mx-auto">
         <div id ="card items-center" class="bg-white w-[35%]  h-[65%] rounded-3xl shadow-lg">
             <div class="header">
             <h3 class="Create">Create a new account</h3>
              <p class="Continue.">To Continue</p>
             </div>
           <form
            class="w-full px-8 flex flex-col items-center gap-y-2"
            action=""
            >
            <InputField
              v-model="email"
              type="email"
              label="Email or Username"
              placeholder="Example@email.com" />
            <InputField
              type="password"
              label="Password"
              placeholder="password" />
               <InputField
              type="password"
              label="Retype-Password"
              placeholder="Retype-password" />
            <div 
               class="w-full cursor-pointer text-right font-medium text-red-500"></div>
            <div
              class="w-max text-center p-[3px] rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <button
                class="bg-white px-16 py-1 font-semibold rounded-full"
                type="Create">
                Create
              </button>
            </div>
          </form>
            </div>
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
        <div class="flex flex-col w-full rounded-md pl-15 py-1 bg-cyan-500">
            <p class="text-xl font-bold text-white">Travel Information</p>
        </div> 
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
        
        
        
      

   
    
    </section>
</template>

<script>
export default {
     name: 'SignUp',
}
</script>

<style>
.header {
  padding: 3.2rem;
  margin-top: 1.1rem;
  color: black;
}
.Create {
  font-weight: 700;
  font-size: 1.5rem;
  background: -webkit-linear-gradient(
    120deg,
    rgba(135, 204, 254, 0.93),
    rgb(12, 104, 237, 1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.Continue {
  line-height: 0;
  font-size: 1rem;
  font-weight: bold;
}

</style>