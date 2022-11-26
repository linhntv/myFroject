<template>
  <a-result
    status="403"
    title="403"
    sub-title="Sorry, this page is not developed yet."
  >
    <template #extra>
      <router-link to="./">
        <a-button type="primary">Back Home</a-button>
      </router-link>
    </template>
  </a-result>
</template>
<script>
export default {
  name: "game",
};
</script>