<template>
  <div id="container">
    <div class="header md:px-5 h-[50vh] md:h-[35vh] lg:h-[44vh] w-full relative">
      <div
        class="absolute top-[8%] left-1/2 translate-x-[-50%] text-center navDiv"
      >
        <h3 class="text-2xl text-[#D5B0F3]" :class="{ hide: hidenn }">
          "LINH NGUYỄN" XIN CHÀO CÁC BẠN !
        </h3>
        <img
          src="public/imgz.png"
          alt=""
          class="w-[300px] h-52 mx-auto rounded-md"
          :class="{ hide: hidenn }"
        />
      </div>
      <nav
        class="
          w-[200px]
          h-[30vh]
          md:h-[100px] md:w-4/5 md:mx-auto
          relative
          top-0
          p-6
        "
        :class="{ navBg: hidenn }"
      >
        <div
          class="flex flex-col md:flex-row justify-between text-lg font-medium"
          :class="{ hide: !hidenn }"
        >
          <router-link
            to="./"
            class="
              flex
              items-center
              transition
              duration-500
              ease-in-out
              text-white
              hover:text-[#F2AE30]
              mb-2
              md:mb-0
            "
            ><home-outlined /> Trang chủ</router-link
          >
          <router-link
            to="./contact"
            class="
              flex
              items-center
              transition
              duration-500
              ease-in-out
              text-white
              hover:text-[#F2AE30]
              mb-2
              md:mb-0
            "
            ><user-outlined /> Todo-List</router-link
          >
          <router-link
            to="./img"
            class="
              flex
              items-center
              transition
              duration-500
              ease-in-out
              text-white
              hover:text-[#F2AE30]
              mb-2
              md:mb-0
            "
            ><picture-outlined /> Hình ảnh</router-link
          >
          <router-link
            to="./game"
            class="
              transition
              duration-500
              ease-in-out
              text-white
              hover:text-[#F2AE30]
              flex
              items-center
              mb-2
              md:mb-0
            "
            ><android-outlined /> Trò chơi</router-link
          >
          <router-link
            to="./weather"
            class="
              flex
              items-center
              transition
              duration-500
              ease-in-out
              text-white
              hover:text-[#F2AE30]
              mb-2
              md:mb-0
            "
            ><global-outlined /> thời tiết</router-link
          >
        </div>
      </nav>
      <div
        class="absolute text-white text-3xl top-[5%] right-[5%]"
        @click="menu"
      >
        <menu-outlined />
      </div>
    </div>
  </div>
</template>

<script>
import {
  BarsOutlined,
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  AndroidOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    BarsOutlined,
    HomeOutlined,
    UserOutlined,
    PictureOutlined,
    AndroidOutlined,
    GlobalOutlined,
    MenuOutlined,
  },
  data() {
    return {
      hidenn: false,
    };
  },
  methods: {
    menu() {
      this.hidenn = !this.hidenn;
    },
  },
};
</script>

<style scope>
.header {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url(public/img-weather/hot.png) no-repeat center/cover;
  transition: all 0.8s ease-in-out;
}
.navBg {
  background: url(public/img-weather/hot.png) no-repeat center/cover;
}
.hide {
  display: none;
  opacity: 0;
  top: 40px;
}
nav,
navDiv {
  transition: all 0.5s ease-in-out;
}
</style>