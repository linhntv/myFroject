<template>
  <div
    class="weather w-full h-screen flex items-center justify-center relative"
    @keypress.enter="newSearch"
  >
    <div class="content p-5 w-[350px] rounded-xl">
      <input
        type="text"
        placeholder="Search..."
        class="
          w-full
          px-3
          py-[6px]
          outline-none
          plexho
          focus-input
          text-lg
          shadow-3xl
        "
        v-model="searchCity"
      />
      <div class="mt-10 text-center text-white">
        <h1 class="text-4xl text-white font-bold textShadow">
          <span class="">{{ name }}</span>
          <span>, </span>
          <span class="">{{ country }}</span>
        </h1>
        <div class="text-xs">{{ new Date().toLocaleString("vi") }}</div>
        <div
          class="
            text-6xl
            my-8
            py-8
            w-48
            mx-auto
            rounded-2xl
            cursor-pointer
            shadow-bxl
            textShadow
            value
          "
        >
          <span class="">{{ temps }}</span>
          <span><sup>o</sup>C</span>
        </div>
        <div class="text-4xl font-bold textShadow">
          {{ description }}
        </div>
        <div class="flex justify-between text-base my-6">
          <div class="flex flex-col">
            <eye-outlined class="mb-3" />
            <span>{{ visibility }}m</span>
          </div>
          <div class="flex flex-col">
            <dingtalk-outlined class="mb-3" />
            <span>{{ speed }}m/s</span>
          </div>
          <div class="flex flex-col">
            <ant-cloud-outlined class="mb-3" />
            <span>{{ humidity }}%</span>
          </div>
        </div>
      </div>
    </div>
    <router-link
      to="./"
      class="
        text-white
        absolute
        text-2xl
        top-[5%]
        left-[8%]
        flex
        hover:text-yellow-500
        items-center
        cursor-pointer
      "
    >
      <home-outlined /> Trang chủ
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import {
  EyeOutlined,
  DingtalkOutlined,
  AntCloudOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "weather",
  components: {
    EyeOutlined,
    DingtalkOutlined,
    AntCloudOutlined,
    HomeOutlined,
  },
  data() {
    return {
      searchCity: "tam ky",
      temps: "",
      description: "",
      name: "",
      country: "",
      visibility: "",
      speed: "",
      humidity: "",
    };
  },
  created() {
    this.newSearch()
  },
  methods: {
    newSearch() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
        )
        .then((response) => {
          this.temps = Math.round(response.data.main.temp);
          this.description = response.data.weather[0].description;
          this.name = response.data.name;
          this.country = response.data.sys.country;
          this.visibility = response.data.visibility;
          this.speed = response.data.wind.speed;
          this.humidity = response.data.main.humidity;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
        this.searchCity = ""
    },
  },
};
</script>

<style scope>
.weather {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url(public/img-weather/hot.png) no-repeat center/cover;
  background-attachment: fixed;
}
.content {
  background: url(public/img-weather/hot.png) no-repeat center/cover;
}
.focus-input {
  border-radius: 15px 0 15px 0;
  transition: 0.5s;
}
.focus-input:focus {
  border-radius: 0 15px 0 15px;
  background: rgb(226, 226, 226);
}
.value {
  background: rgba(255, 255, 255, 0.4);
}
.plexho {
  background: rgba(255, 255, 255, 0.8);
}
.textShadow {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
</style>