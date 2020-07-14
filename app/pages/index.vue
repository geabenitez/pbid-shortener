<template>
  <div class="w-screen h-screen bg-gray-100">
    <div
      class="container mx-auto flex flex-col h-full justify-center items-center space-y-6"
    >
      <!-- logo -->
      <div class="flex items-center space-x-2">
        <span
          class="font-bold text-3xl md:text-4xl xl:text-5xl leading-none tracking-wide"
          >PBIB</span
        >
        <div class="h-1 w-1 rounded-full bg-gray-900"></div>
        <span class="font-light text-base md:text-lg xl:text-xl leading-none"
          >URL Shortener Service</span
        >
      </div>
      <!-- form -->
      <div
        class="flex flex-col md:flex-row w-full xl:w-2/3 px-4 md:px-6 xl:px-0 items-center space-y-2 md:space-y-0"
      >
        <div class="flex flex-col w-full justify-center items-center">
          <input
            type="text"
            class="border rounded-full md:rounded-l-full w-full text-lg focus:outline-none text-gray-900 font-light px-6 h-12"
            :class="{
              'border-red-600': url != '' && !validUrl,
              'border-blue-700': url == '' || validUrl,
            }"
            v-model="url"
            placeholder="Enter the url to be shortened"
          />
          <span
            v-if="url != '' && !validUrl"
            class="text-xs font-semibold uppercase tracking-wide text-red-600"
            >Please enter a valid URL to be shortened.</span
          >
        </div>
        <button
          v-if="url != '' && validUrl"
          class="bg-blue-700 hover:bg-blue-800 text-white rounded-full md:rounded-r-full w-30 md:flex-1 focus:outline-none font-normal uppercase px-6 h-12 leading-none transform duration-300 hover:scale-110"
          :disabled="loading"
          @click="shorten(url)"
        >
          {{ loading ? "..." : "SHORTEN" }}
        </button>
      </div>
      <!-- history -->
      <div class="flex flex-col w-full space-y-1 px-4 md:px-6 xl:px-0">
        <span
          class="text-sm font-semibold tracking-wide uppercase text-blue-900"
          >Las 100 URLS shortened</span
        >
        <div
          class="border border-blue-600 rounded w-full h-110 px-2 py-4 overflow-y-auto"
        >
          <ul>
            <li
              v-for="(url, k) of formatedUrls"
              :key="k"
              class="px-4 py-1 hover:bg-blue-200 rounded"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <a
                    :href="url.short"
                    class="hover:underline text-blue-800 w-45"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ url.short }}</a
                  >
                  <span class="hidden lg:inline-block text-gray-500 text-sm">
                    {{ url.original }}
                  </span>
                </div>
                <span class="text-gray-500 font-semibold text-sm">
                  {{ url.timestamp }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { truncate } from "voca";
import axios from "axios";
import { format } from "date-fns";

const instance = axios.create({
  baseURL: "http://localhost:2001",
});

export default Vue.extend({
  name: "Index",
  data() {
    return {
      url: "",
      urls: [],
      loading: false,
    };
  },
  methods: {
    async shorten(url: string): Promise<void> {
      this.url = "";
      const { data } = await instance.post("/shorten", { url });
      this.urls = data;
    },
  },
  computed: {
    formatedUrls(): object[] {
      return this.urls.map((u: { original: string; created: string }) => {
        return {
          ...u,
          original: truncate(u.original, 90, " (...)"),
          timestamp: format(new Date(u.created), "MM/dd/yyyy hh:mm"),
        };
      });
      return [];
    },
    validUrl(): boolean {
      return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
        this.url
      );
    },
  },
  async fetch(): Promise<void> {
    const { data } = await instance.get("/urls");
    this.urls = data;
  },
  fetchOnServer: false,
});
</script>
