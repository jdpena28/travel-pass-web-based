<template>
  <section id="admin-page" class="h-screen w-full bg-cover bg-[#0C68ED]">
    <div class="w-[95%] flex justify-between items-center absolute mx-4">
      <img
        class="w-[20%] justify-center items-center ml-20"
        src="~/assets/images/admin/dashboard-logo.png"
        alt="Dashboard Logo"
        height="720px"
        width="1080px" />
      <div class="right-[7%] absolute">
        <h2 class="text-xl font-bold text-white">
          User Administrator <br />
          <span class="text-sm capitalize text-white font-light">{{
            adminName
          }}</span>
        </h2>
      </div>
      <img
        class="w-[4%] justify-center items-center mr-4"
        src="~/assets/images/admin/icon.png"
        alt="Icon"
        height="1080px"
        width="720px" />
    </div>
    <div
      class="container w-full h-screen flex justify-end items-center mx-auto">
      <div class="flex flex-col justify-center items-center mr-10">
        <button
          class="bg-blue-700 border-2 hover:bg-blue-500 text-white font-bold py-2 px-[5.5rem] rounded-full"
          @click="approved">
          Approved
        </button>
        <button
          class="bg-blue-700 border-2 hover:bg-blue-500 text-white font-bold mt-4 py-2 px-[5.8rem] rounded-full"
          @click="rejected">
          Rejected
        </button>
        <button
          class="bg-red-700 border-2 hover:bg-red-900 text-white font-bold mt-4 py-2 px-[6.2rem] rounded-full"
          @click="deleteData">
          Delete
        </button>
      </div>
      <div
        class="bg-white flex justify-end relative w-[100%] h-[80%] rounded-[3rem] mt-20">
        <div
          class="w-[92%] h-[77%] mt-12 mr-[4%] rounded-3xl bg-gray-100 overflow-y-scroll">
          <table
            class="w-[95%] flex-col justify-center mx-auto my-6 shadow-xl h-80 overflow-y-scroll">
            <thead class="bg-gray-50 shadow">
              <tr class="whitespace-nowrap">
                <th class="px-6 py-2"></th>
                <th class="px-6 py-2">ID</th>
                <th class="px-6 py-2">Name</th>
                <th class="px-6 py-2">Email</th>
                <th class="px-6 py-2">Status</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(form, i) in form" :key="i" class="whitespace-nowrap">
                <td class="px-6 py-4 text-center">
                  <input
                    :id="id[i]"
                    v-model="checkbox"
                    type="checkbox"
                    :value="id[i]" />
                </td>
                <td class="px-6 py-4 text-sm text-center">{{ i + 1 }}</td>
                <td class="px-6 py-4 text-sm text-center">
                  {{ `${form.firstName} ${form.lastName} ${form.middleName}.` }}
                </td>
                <td class="px-6 py-4 text-sm text-center">{{ form.email }}</td>
                <td
                  class="px-6 py-4 text-sm text-center font-semibold"
                  :class="
                    form.status === 'Approved'
                      ? 'text-green-400'
                      : 'text-red-400'
                  ">
                  {{ form.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          class="absolute bg-blue-700 hover:bg-blue-500 text-white text-[100%] font-bold mt-[1%] py-[1%] w-[22%] rounded-full left-[74%] bottom-[3%]"
          @click="getData">
          Refresh
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '~/plugins/firebase'
export default {
  name: 'DashboardPage',
  middleware: ['adminOnly'],
  async asyncData() {
    const snapshot = await getDocs(collection(db, 'travel-form'))
    return {
      form: snapshot.docs.map((doc) => doc.data()),
      id: snapshot.docs.map((doc) => doc.id),
    }
  },
  data() {
    return {
      adminName: this.$store.state.adminAuth.displayName,
      form: [],
      id: [],
      checkbox: [],
      forceReload: 1,
    }
  },
  head() {
    return {
      title: '1 Bataan | Admin',
    }
  },
  methods: {
    approved() {
      this.checkbox.forEach((id) => {
        updateDoc(doc(db, 'travel-form', id), {
          status: 'Approved',
        })
      })
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 500)
    },
    rejected() {
      this.checkbox.forEach((id) => {
        updateDoc(doc(db, 'travel-form', id), {
          status: 'Rejected',
        })
      })
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 500)
    },
    deleteData() {
      this.checkbox.forEach((id) => {
        deleteDoc(doc(db, 'travel-form', id))
      })
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 500)
    },
    async getData() {
      const snapshot = await getDocs(collection(db, 'travel-form'))
      return {
        form: snapshot.docs.map((doc) => doc.data()),
        id: snapshot.docs.map((doc) => doc.id),
      }
    },
  },
}
</script>

<style></style>
