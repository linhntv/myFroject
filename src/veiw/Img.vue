<template>
  <Header />
  <div class="warper bg-[#efefef] relative">
    <div
      class="
        max-w-[1200px]
        w-full
        p-4
        mx-auto
        flex
        justify-start
        items-start
        gap-y-3
        md:gap-y-3
        lg:gap-3
        flex-wrap
      "
    >
      <div
        class="
          w-[98%]
          md:w-[48%]
          lg:w-[24%]
          mx-auto
          h-52
          rounded-md
          overflow-hidden
        "
        v-for="(photo, index) in photos"
        :key="index"
      >
        <img
          :src="photo.thumb"
          alt="dcd"
          class="
            w-full
            h-full
            object-cover
            hover:scale-105
            duration-500
            cursor-pointer
            hover:animate-pulse
          "
          @click="showImg(photo, index)"
        />
      </div>
    </div>
    <div
      class="
        fixed
        top-0
        left-0
        w-full
        h-[100vh]
        bg-rgba
        z-50
        flex
        items-center
        justify-center
      "
      :class="{ 'show-img': done }"
    >
      <poweroff-outlined
        class="
          absolute
          top-[5%]
          right-[8%]
          !text-white
          cursor-pointer
          text-5xl
          hover:scale-110
        "
        @click="hidenImg"
      />
      <div class="w-2/3 h-3/4 rounded-xl overflow-hidden">
        <img :src="newThumb.thumb" alt="" class="object-cover w-full h-full" />
      </div>
      <div>
        <left-outlined
          class="
            absolute
            text-5xl
            !text-bold !text-gray-500
            left-[5%]
            -translate-y-1/2
            cursor-pointer
            hover:scale-110
          "
          :class="{ prev: prev }"
          @click="prevImg()"
        />
      </div>
      <div>
        <right-outlined
          class="
            absolute
            text-5xl
            !text-bold !text-gray-500
            right-[5%]
            -translate-y-1/2
            cursor-pointer
            hover:scale-110
          "
          :class="{ next: next }"
          @click="nextImg()"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {
  PoweroffOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "img",
  components: { Header, Footer, PoweroffOutlined, LeftOutlined, RightOutlined },
  data() {
    return {
      photos: [
        {
          thumb: "public/img-img/n10.jpg",
        },
        {
          thumb: "public/img-img/n9.jpeg",
        },
        {
          thumb: "public/img-img/n8.jpeg",
        },
        {
          thumb: "public/img-img/n6.jpg",
        },
        {
          thumb: "public/img-img/n5.jpg",
        },
        {
          thumb: "public/img-img/n4.jpg",
        },
        {
          thumb: "public/img-img/n3.jpg",
        },
        {
          thumb: "public/img-img/n1.JPG",
        },
        {
          thumb: "public/img-img/n2.jpeg",
        },
        {
          thumb: "public/img-img/n7.jpg",
        },
        {
          thumb: "public/img-img/n11.jpg",
        },
        {
          thumb: "public/img-img/n12.jpg",
        },
      ],
      newThumb: {
        thumb: "",
      },
      done: true,
      prev: false,
      next: false,
      imgIndex: 0,
    };
  },
  methods: {
    show() {
      if (this.imgIndex == 0) {
        this.prev = true;
      } else {
        this.prev = false;
      }
      if (this.imgIndex == this.photos.length - 1) {
        this.next = true;
      } else if (this.imgIndex < this.photos.length - 1) {
        this.next = false;
      }
      this.done = false;
      this.newThumb = this.photos[this.imgIndex];
    },
    showImg(photo, index) {
      this.imgIndex = index;
      this.show();
    },
    hidenImg() {
      this.done = true;
    },
    prevImg() {
      if (this.imgIndex > 0) {
        this.imgIndex--;
        this.show();
      }
    },
    nextImg() {
      if (this.imgIndex < this.photos.length - 1) {
        this.imgIndex++;
        this.show();
      }
    },
  },
};
</script>

<style lang="css" scope>
.bg-rgba {
  background-color: rgba(0, 0, 0, 0.9);
}
.show-img,
.prev,
.next {
  display: none;
  transition: 0.5s;
}
</style>