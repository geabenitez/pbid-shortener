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
        <input
          type="text"
          class="border border-blue-700 rounded-full md:rounded-l-full w-full text-lg focus:outline-none text-gray-900 font-light px-6 h-12"
        />
        <button
          class="bg-blue-700 hover:bg-blue-800 text-white rounded-full md:rounded-r-full w-30 md:flex-1 focus:outline-none font-normal uppercase px-6 h-12 leading-none transform duration-300 hover:scale-110"
        >
          SHORTEN
        </button>
      </div>
      <!-- history -->
      <div class="flex flex-col w-full space-y-1 px-4 md:px-6 xl:px-0">
        <span
          class="text-sm font-semibold tracking-wide uppercase text-blue-900"
          >Las 100 URLS shortened</span
        >
        <div
          class="border border-blue-600 rounded w-full h-110 px-2 py-4 overflow-scroll"
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
                    class="hover:underline text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ url.short }}</a
                  >
                  <span class="hidden lg:inline-block text-gray-500 text-sm">{{
                    url.long
                  }}</span>
                </div>
                <span class="text-gray-500 font-semibold text-sm">{{
                  url.timestamp
                }}</span>
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

export default Vue.extend({
  name: "Index",
  data() {
    return {
      urls: [
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
        {
          short: "https://pbid.io/f3x2ab1c",
          long:
            "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
          timestamp: "2020-07-01 14:23",
        },
      ],
    };
  },
  computed: {
    formatedUrls(): object[] {
      return this.urls.map((u) => {
        return {
          ...u,
          long: truncate(u.long, 90, " (...)"),
        };
      });
    },
  },
});
</script>
