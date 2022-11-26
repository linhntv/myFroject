<template>
  <a-layout>
    <Header />
    <div>
      <div class="flex flex-col-reverse md:flex-row gap-x-2 bg-[#efefef] p-2">
        <div class="w-full mx-auto md:w-1/3 md:p-2 bg-[#617db3]">
          <a-carousel autoplay class="!mb-4">
            <div v-for="(thumb, index) in thumbs" :key="index">
              <a href="" class="">
                <img
                  :src="thumb.photo"
                  alt=""
                  class="w-[445px] h-[200px] rounded-md object-cover"
                />
              </a>
            </div>
          </a-carousel>
          <div class="">
            <android-outlined
              class="
                !animate-bounce
                !text-pink-400 !text-4xl
                lg:!text-5xl
                !leading-8
              "
            />
            <android-outlined
              class="
                !animate-bounce
                !text-pink-400 !text-4xl
                lg:!text-5xl
                !leading-8
                !float-right
              "
            />
          </div>
          <div class="flex justify-center items-center h-56">
            <drag-outlined
              spin
              class="!text-[#A32742] text-[250px] lg:text-[300px]"
            />
          </div>
          <div class="">
            <android-outlined
              class="
                animate-bounce
                !text-pink-400 !text-4xl
                lg:!text-5xl
                !leading-8
              "
            />
            <android-outlined
              class="
                !animate-bounce
                !text-pink-400 !text-4xl
                lg:!text-5xl
                !leading-8
                !float-right
              "
            />
          </div>
          <div class="">
            <h1 class="text-lg underline decoration-2 text-white">
              Phim ưu thích:
            </h1>
            <div class="flex flex-wrap gap-y-3">
              <a
                :href="film.href"
                class="
                  w-full
                  md:w-1/2
                  lg:w-1/3
                  h-86
                  md:h-[160px]
                  lg:h-48
                  mx-auto
                "
                v-for="(film, index) in films"
                :key="index"
              >
                <img
                  :src="film.F1"
                  :alt="film.alt"
                  class="
                    w-[90%]
                    h-full
                    mx-auto
                    rounded-md
                    hover:-translate-y-1 hover:animate-pulse
                    object-cover
                  "
                />
              </a>
            </div>
          </div>
          <div class="mt-3 text-white text-center font-bold">
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            CẢM
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            ƠN
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            VÌ
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            TẤT
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            CẢ
            <drag-outlined class="!text-3xl !text-sky-500" spin />
            !
          </div>
        </div>
        <div class="w-full md:w-2/3 font-serif bg-white px-3 ">
          <a-divider class="!text-4xl !text-teal-500 !font-bold">
            Linh nguyễn
          </a-divider>
          <router-link to="./Login" class="">
            <h4
              class="
                text-xl
                font-semibold
                rounded-lg
                w-52
                text-center
                bg-lime-200
              "
              :class="{ done: this.done }"
            >
              hello guys!
              <br />
              I'm Linh.
            </h4>
          </router-link>
          <p>❖Date of birth: February 14, 1996.</p>
          <p>❖Phone: 0348875160.</p>
          <p>❖Email: nguyenvanlinhdt14svl02@gmail.com.</p>
          <p>❖Address: Binh Đinh Băc - Thang Binh - Quang Nam.</p>
          <!--<p>
            ❖Website:
            <a
              href="https://www.facebook.com/profile.php?id=100035161784246"
              class="text-black cursor-default"
            >
              https://www.facebook.com/profile.php?id=100035161784246.
            </a>
          </p>-->
          <a-divider orientation="left">
            <span
              class="
                text-lg
                bg-amber-500
                text-white
                px-2
                py-1
                font-bold
                rounded-xl
                animate-pulse
                cursor-default
              "
            >
              SKILLS
            </span>
          </a-divider>
          <div class="">
            <h4 class="font-bold">🌟 Vue js:</h4>
            <p class="mb-2 ml-4">
              ️️🎖️ 7 month working with vue js framework(vue 2 ).
            </p>
            <p class="mb-2 ml-4">️️🎖️ Grasp the vue 2 anthills..</p>
            <p class="mb-2 ml-4">
              ️️🎖️ Understanding of life cycle mechanism of action.
            </p>
            <p class="mb-2 ml-4">
              ️️🎖️ Make good use of the built-in hooks in vue.
            </p>
            <p class="mb-2 ml-4">️️🎖️ Works with vue router.</p>
            <p class="mb-2 ml-4">
              ️️🎖️ Make good use of supported ui libraries
            </p>
          </div>
          <div class="mt-4">
            <h4 class="font-bold">🌟 Extra Skill:</h4>
            <p class="mb-2 ml-4">️️💎 Works well with HTML/CSS.</p>
            <p class="mb-2 ml-4">
              ️️💎 Use large css libraries like Tailwind css, SCSS...
            </p>
            <p class="mb-2 ml-4">️️💎 Understand and work well with axios.</p>
            <p class="mb-2 ml-4">️️💎 Good knowledge of javascript.</p>
            <p class="mb-2 ml-4">
              ️️💎 Proficient in UI ant design and bootstrap libraries.
            </p>
          </div>
          <a-divider orientation="left">
            <span
              class="
                text-lg
                bg-cyan-400
                text-white
                px-2
                py-1
                font-bold
                rounded-xl
                animate-pulse
                cursor-default
              "
            >
              INFORMATION
            </span>
          </a-divider>
          <div class="">
            <p class="mb-2 ml-4">
              ️️🔴 Nearly 1 year of experience with Front-end.
            </p>
            <p class="mb-2 ml-4">
              ️️🔴 7 month working with vue js framework(vue 2 ).
            </p>
            <p class="mb-2 ml-4">
              ️️🔴 Ability to work in a team as well as independently.
            </p>
            <p class="mb-2 ml-4">️️🔴 Fun, sociable, friendly.</p>
          </div>
          <a-divider orientation="right-1">
            <span
              class="
                text-lg
                bg-indigo-500
                text-white
                px-2
                py-1
                font-bold
                rounded-xl
                animate-pulse
                cursor-default
              "
            >
              INTERESTS
            </span>
          </a-divider>
          <div>
            <p class="mb-2 ml-4">
              ️️♻️ play games.
              <br />
              ♻️ listen to music.
              <br />
              ♻️ read a book.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </a-layout>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { DragOutlined, AndroidOutlined } from "@ant-design/icons-vue";

export default {
  name: "root",
  components: {
    Header,
    Footer,
    DragOutlined,
    AndroidOutlined,
  },
  data() {
    return {
      thumbs: [
        { photo: "public/img-slider/img1.jpeg" },
        { photo: "public/img-slider/image2.jpeg" },
        { photo: "public/img-slider/image3.jpeg" },
        { photo: "public/img-slider/image4.jpeg" },
      ],
      done: false,
      films: [
        {
          F1: "public/img-film/duogtam.jpeg",
          alt: "Đấu la đại lục",
          href: "https://hh3dhay.com/dau-la-dai-luc",
        },
        {
          F1: "public/img-film/hanlap.jpeg",
          alt: "Phàm nhân tu tiên",
          href: "https://hh3dhay.com/pham-nhan-tu-tien-phan-2",
        },
        {
          F1: "public/img-film/lufy.jpeg",
          alt: "Vua hải tặc",
          href: "https://hh3dhay.xyz/hai-tac-mu-rom/",
        },
        {
          F1: "public/img-film/naruto.jpeg",
          alt: "Naruto",
          hreft: "https://hh3dhay.com/boruto-naruto-the-he-tiep-theo",
        },
        {
          F1: "public/img-film/thanmo.jpeg",
          alt: "Thần mộ",
          href: "https://hh3dhay.com/than-mo-thuyet-minh-phim-hay",
        },
        {
          F1: "public/img-film/tieuviem.jpeg",
          alt: "Đấu phá thương khung",
          href: "https://hh3dhay.com/dau-pha-thuong-khung-full-phan-1-den-phan-4-full-ova",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 250px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.done {
  background-color: bisque;
}
</style>