<template>
  <section id="ticket" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto">
      <div
        class="w-full flex flex-col justify-center items-center h-[90vh] relative mx-auto">
        <img
          class="w-[84%] flex justify-center items-center absolute"
          src="~/assets/images/bgtickets.png"
          alt="Ticket Background"
          height="720px"
          width="1280px" />
        <div
          class="w-[84%] flex justify-center items-center bg-gradient-to-r p-[2%] from-[#58CF00] via-[#AFDD11] to-[#F39F14] rounded-b-[28px] absolute mt-[29%]"></div>

        <div
          class="flex ml-[6rem] mb-[1rem] left-[17%] pr-[10rem] pt-[3rem] absolute">
          <h6 class="ml-[1rem]">
            From:<br /><span class="text-4xl font-extrabold">San Agustin</span
            ><br /><span class="text-red-500 text-2xl">MANILA</span><br /><span
              class="text-xs"
              >July 02, 2022</span
            >
          </h6>
          <h6 class="ml-[9rem]">
            To:<br /><span class="text-4xl font-extrabold">Orani</span
            ><br /><span class="text-red-500 text-2xl">BATAAN</span><br /><span
              class="text-xs"
              >July 09, 2022</span
            >
          </h6>
          <div class="flex absolute pr-[4.5rem] top-[110%]">
            <p>Passenger:<br /><span>John Henrich Dela Pena</span></p>
            <p>Transport:<br /><span>SUV</span></p>
            <p>Contact Number:<br /><span>092345678401</span></p>
            <p class="text-green-700">Status: <br /><span>APPROVED</span></p>
          </div>
        </div>

        <div
          class="w-[84%] flex justify-center items-center bg-[#E91313] p-[3%] rounded-t-[28px] absolute mb-[25%]">
          <img
            class="w-[15%] rounded-full border-[.85vh] border-white absolute top-[15%] left-[5%]"
            src="~/assets/images/ticketlogo.png"
            alt="Ticket Logo"
            height="128px"
            width="128px" />
          <img
            class="w-[13%] absolute left-[5%] top-[270%]"
            src="~/assets/images/qr.png"
            alt="Ticket Logo"
            height="256px"
            width="256px" />

          <div class="flex left-[23%] absolute">
            <h2 class="text-4xl font-bold text-white">BATAAN TRAVEL PASS</h2>
          </div>
          <div class="flex right-[7%] absolute">
            <h2 class="text-3xl font-bold text-white">
              BOARDING PASS<br /><span class="text-xl text-white font-normal"
                >Exit</span
              >
            </h2>
          </div>
          <div class="flex-col top-[103%] left-[70%] absolute">
            <h5 class="text-sm mb-1">
              From:<br /><span class="text-lg font-extrabold leading-none"
                >San Agustin</span
              ><br /><span class="text-red-500 text-base leading-none"
                >MANILA</span
              ><br /><span class="text-xs leading-none">July 02, 2022</span>
            </h5>
            <h5 class="text-sm">
              To:<br /><span class="text-lg font-extrabold leading-none"
                >Orani</span
              ><br /><span class="text-red-500 text-base leading-none"
                >BATAAN</span
              ><br /><span class="text-xs leading-none">July 09, 2022</span>
            </h5>
          </div>
          <div class="flex-col left-[69%] top-[310%] absolute pr-16">
            <p>Passenger:<br /><span>John Henrich Dela Pena</span></p>
            <p>Transport:<br /><span>SUV</span></p>
          </div>
          <div class="flex-col absolute left-[85%] top-[310%]">
            <p>Contact Number:<br /><span>092345678401</span></p>
            <p class="text-green-700">Status: <br /><span>APPROVED</span></p>
          </div>
        </div>
        <div
          class="flex justify-center items-center absolute border-black border-dashed border-l-2 h-[48vh] left-[65%]"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TicketPage',
  head() {
    return {
      title: '1Bataan |  Ticket Page',
    }
  },
}
</script>

<style>
p {
  margin: 1rem;
  font-size: 75%;
  color: red;
  font-weight: bold;
}
span {
  color: black;
  font-weight: bold;
}
</style>
