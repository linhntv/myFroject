<template>
  <div>
    <div class="flex flex-wrap justify-evenly bg-neutral-300 p-3">
      <div class="mx-auto w-[90%] md:w-[45%] lg:w-[30%]">
        <h2 class="text-xl font-bold underline decoration-1">Ứng dụng:</h2>
        <div class="flex items-center justify-evenly md:justify-start w-full">
          <a href="https://www.facebook.com/" alt="facebook" class="w-[40%]">
            <img
              src="public/img-footer/fb.jpeg"
              alt=""
              class="w-full md:w-[90%] h-16 rounded-md my-3 mr-1 hover:animate-pulse object-cover"
            />
          </a>
          <a
            href="https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F%3Fnull"
            alt="zalo"
            class="w-[40%]"
          >
            <img
              src="public/img-footer/zalo.jpeg"
              alt=""
              class="w-full md:w-[90%] rounded-md h-16 hover:animate-pulse object-cover"
            />
          </a>
        </div>
      </div>
      <div class="mx-auto w-[90%] md:w-[45%] lg:w-[30%]">
        <h2 class="text-xl font-bold underline decoration-1">
          Thông tin liên hệ
        </h2>
        <p class="flex m-0 items-center mb-2">
          <phone-outlined
            class="
              !mr-2
              !text-base
              !leading-3
              !bg-orange-500
              !text-slate-600
              !p-[2px]
            "
          />
          Liên hệ: 0348875160
        </p>
        <a
          href="https://mail.google.com"
          class="flex m-0 items-center text-black mb-3"
        >
          <mail-outlined
            class="
              !mr-2
              !text-gray-500 !text-base
              !leading-3
              !bg-pink-400
              !p-[2px]
            "
          />
          Email: nguyenvanlinhdt14svl02@gmail.com
        </a>
        <p class="flex m-0 items-center">
          <rocket-outlined
            spin
            class="!mr-2 !text-lg !leading-3 !bg-fuchsia-500 !p-[1px]"
          />
          Address: Thăng Binh - Quang Nam.
        </p>
      </div>
      <div class="mx-auto w-[90%] lg:w-[30%]">
        <h2 class="text-xl font-bold underline decoration-1">Mục tiêu</h2>
        <p class="text-gray-600 text-justify">
          Là người có tư duy logic và khả năng sáng tạo tốt, tôi mong muốn trở
          thành một trong những lập trình viên chủ chốt của công ty để mang lại
          những giải pháp công nghệ tối ưu cho khách hàng. Đồng thời, tôi muốn
          được nâng cao trình độ chuyên môn và năng lực nghề nghiệp thông qua
          môi trường làm việc chuyên nghiệp của công ty.
        </p>
      </div>
    </div>
    <div class="col-span-3 p-4 text-center bg-slate-400 text-xs text-gray-700">
      © 1996 - 2022 Quá trình lớn lên và trưởng thành / Địa chỉ: Tổ 6 - thôn
      Đồng Dương - xã Bình Định Bắc - Thăng Bình - Quảng Nam / Điện thoại:
      0348875160. Email: nguyenvanlinhdt14svl02@gmail.com. Chịu trách nhiệm nội
      dung: Nguyễn văn Linh.
    </div>
  </div>
</template>
<script>
import {
  PhoneOutlined,
  MailOutlined,
  RocketOutlined,
} from "@ant-design/icons-vue";
export default {
  components: { PhoneOutlined, MailOutlined, RocketOutlined },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>