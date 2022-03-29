<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 引入子组件
import school from './components/school.vue'
import student from './components/student.vue'

export default {
  components:{
    school,
    student
  }
}
</script>

<style>

</style>