<template>
  <section id="admin-page" class="h-screen w-full bg-cover bg-[#0C68ED]">
    <div class="w-[95%] flex justify-between items-center absolute mx-4">
      <img
        class="w-[20%] justify-center items-center ml-20"
        src="~/assets/images/admin/dashboard-logo.webp"
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
        src="~/assets/images/admin/icon.webp"
        alt="Icon"
        height="1080px"
        width="720px" />
    </div>
    <div
      class="container w-full h-screen flex justify-end items-center mx-auto">
      <div class="flex flex-col justify-center items-center mr-10">
        <button
          class="
            bg-blue-700
            border-2
            hover:bg-blue-500
            text-white
            font-bold
            py-2
            px-[5.5rem]
            rounded-full
          "
          @click="approved">
          Approved
        </button>
        <button
          class="
            bg-blue-700
            border-2
            hover:bg-blue-500
            text-white
            font-bold
            mt-4
            py-2
            px-[5.8rem]
            rounded-full
          "
          @click="rejected">
          Rejected
        </button>
        <button
          class="
            bg-red-700
            border-2
            hover:bg-red-900
            text-white
            font-bold
            mt-4
            py-2
            px-[6.2rem]
            rounded-full
          "
          @click="deleteData">
          Delete
        </button>
      </div>
      <div
        class="
          bg-white
          flex
          justify-end
          relative
          w-[100%]
          h-[80%]
          rounded-[3rem]
          mt-20
        ">
        <div
          class="
            w-[92%]
            h-[77%]
            mt-12
            mr-[4%]
            rounded-3xl
            bg-gray-100
            overflow-y-scroll
          ">
          <table
            class="
              w-[95%]
              flex-col
              justify-center
              mx-auto
              my-6
              shadow-xl
              h-80
              overflow-y-scroll
            ">
            <thead class="bg-gray-50 shadow">
              <tr class="whitespace-nowrap">
                <th class="px-6 py-2"></th>
                <th class="px-6 py-2">ID</th>
                <th class="px-6 py-2">Name</th>
                <th class="px-6 py-2">Email</th>
                <th class="px-6 py-2">Status</th>
                <th class="px-6 py-2">Documents</th>
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
                      : form.status === 'Pending'
                      ? 'text-yellow-500'
                      : 'text-red-400'
                  ">
                  {{ form.status }}
                  <p class="text-gray-600 text-xs">{{form.lastViewed}}</p>
                </td>
                <td
                  class="
                    px-6
                    py-4
                    text-sm text-center
                    underline underline-offset-2
                    cursor-pointer
                    text-blue-400
                  "
                  @click="showModal(id[i])">
                  View Documents
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          class="
            absolute
            bg-blue-700
            hover:bg-blue-500
            text-white text-[100%]
            font-bold
            mt-[1%]
            py-[1%]
            w-[22%]
            rounded-full
            left-[74%]
            bottom-[3%]
          "
          @click="getData">
          Refresh
        </button>
      </div>
    </div>
    <V-Modal  name="files" :width="400" :height="200" :adaptive="true">
      <div class="space-y-2">
      <p class="pl-2 pt-3">Files Submitted: </p>
      <div v-for="(file,i) in fileName" :key="i" class="text-center">
        <p class="text-blue underline underline-offset-3 cursor-pointer" @click="viewPreview(file.fullPath)">{{file.name}}</p>
      </div>
      </div>
    </V-Modal>
    <V-Modal class="w-full" name="declined" :width="400" :height="260" :adaptive="true">
      <div class="space-y-2">
      <p class="pl-2 pt-3">Reason for decline: </p>
      <div class="flex justify-center">
      <textarea id="reason"  v-model="reason" class="w-[97%] p-2 border-black border-[1px]" name="reason" cols="30" rows="6"  placeholder="Insert text here"/>
      </div>
      <div class="flex flex-row-reverse pr-3">
      <button @click="rejectSubmit" class="bg-blue-500 hover:bg-blue-700 p-2 text-white font-semibold rounded-sm">Submit</button>
      </div>
      </div>
    </V-Modal>
  </section>
</template>

<script>
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import { PublishCommand } from '@aws-sdk/client-sns'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { db, storage } from '~/plugins/firebase'
import { sns } from '~/plugins/AmazonSNS'

export default {
  name: 'DashboardPage',
  middleware: ['adminOnly'],
  async asyncData() {
    const snapshot = await getDocs(collection(db, 'travel-form'))
    return {
      form: snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          lastViewed: doc.data().lastViewed.toDate().toLocaleString({
            timeZone: 'Asia/Manila',
          }),
        }
      }),
      id: snapshot.docs.map((doc) => doc.id),
    }
  },
  data() {
    return {
      adminName: this.$store.state.adminAuth.displayName,
      form: [],
      id: [],
      checkbox: [],
      fileName: [],
      reason:''
    }
  },
  head() {
    return {
      title: '1 Bataan | Admin',
    }
  },
  methods: {
    async SNS(contactNum) {
      /* Before we cand send sms on the phone number we should verify first their phone number
      then we can send them the message output
      Code Example: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/sns/src
      Reference: https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox-verifying-phone-numbers.html */
      console.log(contactNum.replace(/^(09)/,"+639"))
      const data = await sns(this.$config.AWS_ACCESS_KEY_ID,this.$config.AWS_SECRET_ACCESS_KEY).send(
        new PublishCommand({
          Message: 'Your travel form has been approved.',
          PhoneNumber: contactNum.replace(/^(09)/,"+639"),
        })
      ).then(data => {
        setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 1000)
      }).catch(err => {
        console.log(err)
        })
        console.log(data)
    },
    async approved() {
      this.checkbox.forEach((id) => {
        updateDoc(doc(db, 'travel-form', id), {
          status: 'Approved',
        })
      })
      const docRef = doc(db,'travel-form',this.checkbox[0])
      const docSnap =  await getDoc(docRef)
      const contactNum = docSnap.data().contactNum
      this.SNS(contactNum)
    },
    rejected() {
      this.$modal.show('declined')
    },
    async rejectSubmit() {
      const docRef = doc(db,'travel-form',this.checkbox[0])
      const docSnap =  await getDoc(docRef)
      const contactNum = docSnap.data().contactNum
      const data = await sns(this.$config.AWS_ACCESS_KEY_ID,this.$config.AWS_SECRET_ACCESS_KEY).send(
        new PublishCommand({
          Message: "Your travelpass has been denied, " + this.reason,
          PhoneNumber: contactNum,
        })
      ).then(data => {
         this.checkbox.forEach((id) => {
        updateDoc(doc(db, 'travel-form', id), {
          status: 'Rejected',
        })
      })
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 1000)
      }).catch(err => {
        console.log(err)
        })
        console.log(data)
    },
    deleteData() {
      this.checkbox.forEach((id) => {
        deleteDoc(doc(db, 'travel-form', id))
      })
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 500)
    },
    getData() {
      this.$router.go(this.$router.currentRoute)
    },
    async showModal(id) {
      const storageRef = ref(storage, id)
      await listAll(storageRef).then((res) => {
        res.items.forEach((itemRef) => {
          if(!this.fileName.find(file => file.name === itemRef.name)) {
            this.fileName.push(itemRef)
          }
        })
        this.$modal.show('files')
      })
    },
    async viewPreview(file) {
      await getDownloadURL(ref(storage, file)).then((res) => {
        window.open(res,'_blank')
      })
    },
  },
}
</script>

<style></style>
