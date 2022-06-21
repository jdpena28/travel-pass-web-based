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
            From:<br /><span class="text-3xl font-extrabold">{{
              form.from
            }}</span
            ><br /><br /><span class="text-xs">{{ form.arrivalDate }}</span>
          </h6>
          <h6 class="ml-[1.5rem] pr-[12rem]">
            To:<br /><span class="text-3xl font-extrabold">{{
              form.destination
            }}</span
            ><br /><span class="text-red-500 text-2xl"></span><br /><span
              class="text-xs"
              >{{ form.exitDate }}</span
            >
          </h6>
          <div class="flex absolute pr-[4.5rem] top-[110%]">
            <p>
              Passenger:<br /><span>{{
                `${form.lastName} ${form.firstName} , ${form.middleName}`
              }}</span>
            </p>
            <p>
              Transport:<br /><span>{{ form.modeOfTransport }}</span>
            </p>
            <p>
              Contact Number:<br /><span>{{ form.contactNum }}</span>
            </p>
            <p class="text-green-700">Status: <br /><span>Approved</span></p>
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

          <qrcode-vue
            class="w-[13%] absolute left-[5%] top-[270%]"
            :value="value"
            :size="size"
            level="H"></qrcode-vue>

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
                class="text-lg font-extrabold leading-none text-red-400"
                >{{ form.from }}</span
              ><br /><span id="date" class="text-xs leading-none">{{
                form.arrivalDate
              }}</span>
            </h5>
            <h5 id="right" class="text-sm">
              To:<br /><span
                id="place"
                class="text-lg font-extrabold leading-none text-red-400"
                >{{ form.destination }}</span
              ><br /><span id="date" class="text-xs leading-none">{{
                form.exitDate
              }}</span>
            </h5>
          </div>
          <div class="flex-col left-[68.5%] top-[310%] absolute pr-16">
            <p>
              Passenger:<br /><span>{{
                `${form.lastName} ${form.firstName} , ${form.middleName}`
              }}</span>
            </p>
            <p>
              Transport:<br /><span>{{ form.modeOfTransport }}</span>
            </p>
          </div>
          <div class="flex-col absolute left-[85%] top-[310%]">
            <p>
              Contact Number:<br /><span>{{ form.contactNum }}</span>
            </p>
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
import QrcodeVue from 'qrcode.vue'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '~/plugins/firebase'
export default {
  name: 'TicketPage',
  components: {
    QrcodeVue,
  },
  async asyncData({ params }) {
    const ref = doc(db, 'travel-form', params.id)
    const data = await getDoc(ref)
    return {
      form: data.data(),
    }
  },
  data() {
    return {
      value: `travel-pass-web-based.vercel.app/travelpass/view/qr-pass/${this.$route.params.id}`,
      size: 140,
    }
  },
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
