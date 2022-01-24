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

        <div class="flex left-[25%] bottom-[44%] pr-[2rem] absolute">
          <h6 class="ml-[1rem] mr-[4rem]">
            From:<br /><span class="text-3xl font-extrabold">San Agustin</span
            ><br /><span class="text-red-500 text-2xl">MANILA</span><br /><span
              class="text-xs"
              >July 02, 2022</span
            >
          </h6>
          <h6 class="ml-[1.5rem] pr-[12rem]">
            To:<br /><span class="text-3xl font-extrabold">Orani</span
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
            <h2 id="title" class="text-4xl font-bold text-white">
              BATAAN TRAVEL PASS
            </h2>
          </div>
          <div class="flex right-[7%] absolute">
            <h2 id="board-exit" class="text-3xl font-bold text-white">
              BOARDING PASS<br /><span
                id="board-exit"
                class="text-xl text-white font-normal"
                >Exit</span
              >
            </h2>
          </div>
          <div id="right" class="flex-col top-[103%] left-[70%] absolute">
            <h5 id="right" class="text-sm mb-1">
              From:<br /><span
                id="place"
                class="text-lg font-extrabold leading-none"
                >San Agustin</span
              ><br /><span
                id="right"
                class="text-red-500 text-base leading-none"
                >MANILA</span
              ><br /><span id="date" class="text-xs leading-none"
                >July 02, 2022</span
              >
            </h5>
            <h5 id="right" class="text-sm">
              To:<br /><span
                id="place"
                class="text-lg font-extrabold leading-none"
                >Orani</span
              ><br /><span
                id="right"
                class="text-red-500 text-base leading-none"
                >BATAAN</span
              ><br /><span id="date" class="text-xs leading-none"
                >July 09, 2022</span
              >
            </h5>
          </div>
          <div class="flex-col left-[68.5%] top-[310%] absolute pr-16">
            <p>Passenger:<br /><span>John Henrich Dela Pena</span></p>
            <p>Transport:<br /><span>SUV</span></p>
          </div>
          <div class="flex-col absolute left-[85%] top-[310%]">
            <p>Contact Number:<br /><span>092345678401</span></p>
            <p class="text-green-700">Status: <br /><span>APPROVED</span></p>
          </div>
        </div>
        <div
          id="line"
          class="flex justify-center items-center absolute border-black border-dashed border-l-2 h-[48vh] left-[65%]"></div>
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
  font-size: 75%;
  color: red;
  font-weight: bold;
}
span {
  color: black;
  font-weight: bold;
}
@media only screen and (max-width: 1280px) {
  body {
    font-size: 75%;
  }

  #board-exit,
  #title {
    font-size: 1.5rem;
    line-height: 1;
  }
  #right {
    font-size: 0.75rem;
    line-height: 1.3;
  }
  #place {
    font-size: 1rem;
  }
  #date {
    font-size: 0.6rem;
  }
}
@media only screen and (max-width: 1386px) {
  #line {
    height: 65%;
  }
}
</style>
