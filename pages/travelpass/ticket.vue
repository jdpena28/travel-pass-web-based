<template>
  <section id="ticket" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto">
      <div
        class="w-full flex flex-col justify-center items-center h-screen relative mx-auto">
        <img
          class="w-[84%] mx-auto flex justify-center items-center relative"
          src="~/assets/images/bgtickets.png"
          alt="Ticket Background"
          height="720px"
          width="1280px" />
        <div
          class="w-[84%] flex justify-center items-center bg-[#E91313] p-[4%] rounded-t-[28px] absolute mb-[25%]">
          <img
            class="w-[15%] rounded-full border-[.85vh] border-white absolute top-[15%] left-[5%]"
            src="~/assets/images/ticketlogo.png"
            alt="Ticket Logo"
            height="128px"
            width="128px" />
          <img
            class="absolute left-[5%] top-[200%]"
            src="~/assets/images/qr.png"
            alt="Ticket Logo"
            height="170px"
            width="170px" />
        </div>
        <div
          class="flex justify-center items-center mb-[25%] left-[27%] absolute">
          <h2 class="text-4xl font-bold text-white">BATAAN TRAVEL PASS</h2>
        </div>
        <div
          class="flex justify-center items-center mb-[25%] right-[13%] absolute">
          <h2 class="text-4xl font-bold text-white">
            BOARDING PASS<br /><span class="text-2xl text-white font-normal"
              >Exit</span
            >
          </h2>
        </div>
        <div class="flex justify-center items-center left-[20%] absolute p-4">
          <h6>
            From:<br /><span class="text-4xl font-extrabold">San Agustin</span
            ><br /><span class="text-red-500 text-2xl">MANILA</span><br /><span
              class="text-xs"
              >July 02, 2022</span
            >
          </h6>
          <h6>
            To:<br /><span class="text-4xl font-extrabold">Orani</span
            ><br /><span class="text-red-500 text-2xl">BATAAN</span><br /><span
              class="text-xs"
              >July 09, 2022</span
            >
          </h6>
        </div>
        <div
          class="flex justify-center items-center absolute left-[25%] bottom-[35%]">
          <p>Passenger:<br /><span>John Henrich Dela Pena</span></p>
          <p>Transport:<br /><span>SUV</span></p>
          <p>Contact Number:<br /><span>092345678401</span></p>
          <p class="text-green-700">Status: <br /><span>APPROVED</span></p>
        </div>
        <div
          class="w-[84%] flex justify-center items-center bg-gradient-to-r p-[2%] from-[#58CF00] via-[#AFDD11] to-[#F39F14] rounded-b-[28px] absolute mt-[29%]"></div>
        <div
          class="flex justify-center items-center absolute border-black border-dashed border-l-2 h-[50%] left-[65%]"></div>
        <div
          class="flex-col justify-center items-center left-[67%] top-[37%] absolute">
          <h5 class="text-base">
            From:<br /><span class="text-2xl font-extrabold">San Agustin</span
            ><br /><span class="text-red-500 text-lg">MANILA</span><br /><span
              class="text-xs"
              >July 02, 2022</span
            >
          </h5>
          <h5 class="text-base">
            To:<br /><span class="text-2xl font-extrabold">Orani</span
            ><br /><span class="text-red-500 text-lg">BATAAN</span><br /><span
              class="text-xs"
              >July 09, 2022</span
            >
          </h5>
        </div>
        <div
          class="flex-col justify-center items-center absolute left-[66%] bottom-[30%]">
          <p>Passenger:<br /><span>John Henrich Dela Pena</span></p>
          <p>Transport:<br /><span>SUV</span></p>
        </div>
        <div
          class="flex-col justify-center items-center absolute left-[80%] bottom-[30%]">
          <p>Contact Number:<br /><span>092345678401</span></p>
          <p class="text-green-700">Status: <br /><span>APPROVED</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TicketPage',
}
</script>

<style>
p {
  margin: 1rem;
  font-size: 80%;
  color: red;
  font-weight: bold;
}
span {
  color: black;
  font-weight: bold;
}
h6 {
  margin: 5rem;
}
</style>
