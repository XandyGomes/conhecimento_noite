<template>
  <div class="user-admin">
    <h1>Teste de Usuário Componente</h1>
  </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
  name: 'UserAdmin',
  data: function(){
    return{
      user: {},
      users: []
    }
  },

  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users`
      axios.get(url).then(res => {
        this.users = res.data
      })
    }
  },
  
  mounted() {
    this.loadUsers()
  }

}
</script>

<style>

</style>