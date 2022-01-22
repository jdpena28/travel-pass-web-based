<template>
  <section id="admin-page" class="h-screen w-full bg-cover bg-[#0C68ED]">
    <div class="w-[95%] flex justify-between items-center absolute mx-4">
      <img
        class="w-[20%] justify-center items-center ml-20"
        src="~/assets/images/dashboard-logo.png"
        alt="Dashboard Logo"
        height="720px"
        width="1080px" />
      <div class="flex justify-center items-center right-[7%] absolute">
        <h2 class="text-xl font-bold text-white">
          User Administrator<br />
          <span class="text-sm text-white font-light"
            >Rovic Troy Ocasiones</span
          >
        </h2>
      </div>
      <img
        class="w-[4%] justify-center items-center mr-4"
        src="~/assets/images/icon.png"
        alt="Icon"
        height="1080px"
        width="720px" />
    </div>
    <div
      class="container w-full h-screen flex justify-end items-center mx-auto">
      <div class="flex-col justify-center items-center">
        <button
          class="bg-blue-700 border-2 hover:bg-blue-500 text-white font-bold py-2 px-[5.5rem] rounded-full">
          Approved
        </button>
        <button
          class="bg-blue-700 border-2 hover:bg-blue-500 text-white font-bold mt-4 py-2 px-[5.8rem] rounded-full">
          Rejected
        </button>
      </div>
      <div
        class="bg-white flex justify-end relative w-[100%] h-[80%] rounded-[3rem] mt-20">
        <input
          class="absolute bg-gray-100 hover: border-1 border-gray text-black py-2 pl-4 pr-12 w-[31%] outline-none rounded-full left-[65%] top-[3%]"
          type="search"
          placeholder="Search..." />
        <button
          class="absolute w-[13%] left-[91%] top-[3.5%] mx-auto"
          type="button">
          <img
            class="absolute w-[2rem] rounded-full"
            src="~/assets/images/search-icon.svg"
            alt="Ticket Logo"
            height="1980px"
            width="1080px" />
        </button>
        <div
          class="w-[92%] h-[77%] mt-20 mr-[4%] absolute rounded-3xl bg-gray-100"></div>
        <button
          class="absolute bg-blue-700 hover:bg-blue-500 text-white text-[100%] font-bold mt-[1%] py-[1%] w-[22%] rounded-full left-[74%] bottom-[3%]">
          Refresh
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminPage',
  head() {
    return {
      title: '1 Bataan | Admin',
    }
  },
}
</script>

<style></style>
