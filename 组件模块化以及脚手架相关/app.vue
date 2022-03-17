<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 引入子组件
import school from './school.vue'
import student from './student.vue'

export default {
  components:{
    school,
    student
  }
}
</script>

<style>

</style>