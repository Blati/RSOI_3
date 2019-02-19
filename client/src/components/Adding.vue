<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">FILMS (date: {{this.$route.params.date}}) </h1><br>
      </div>
      <table class="table col-md-10 mx-auto">
        <tbody>
              <ul>
                <li v-for="value in info">
                  <tr>
                    <td>Title:</td>
                    <td> {{ value[0].title}} </td>
                  </tr>
                  <tr>
                    <td>Rating:</td>
                    <td> {{ value[0].rating }} </td>
                  </tr><br>
                </li>
              </ul>
        </tbody>
		<tr>
		  <td>
		  <router-link :to="'../'  + 'add/' + prevpage">Preious Day</router-link>
		  </td>
		  <td>
		  <router-link :to="'../'  + 'add/' + nextpage" >Next Day</router-link>
		  </td>
		</tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  computed: {
    prevpage: function () {
	  var newStr = this.$route.params.date[0] + this.$route.params.date[1]
	  var newInt = parseInt(newStr,10) - 1
	  
	  if (newInt < 10) { 
 	    newStr = '0' + newInt + this.$route.params.date[2] + this.$route.params.date[3] + this.$route.params.date[4] + this.$route.params.date[5] + this.$route.params.date[6] + this.$route.params.date[7]
	  }else {
	    newStr = newInt + this.$route.params.date[2] + this.$route.params.date[3] + this.$route.params.date[4] + this.$route.params.date[5] + this.$route.params.date[6] + this.$route.params.date[7]
	  }
	  
	  return newStr
	},
    nextpage: function () {
	  var newStr = this.$route.params.date[0] + this.$route.params.date[1]
	  var newInt = parseInt(newStr,10) + 1
	  
	  if (newInt < 10) { 
 	    newStr = '0' + newInt + this.$route.params.date[2] + this.$route.params.date[3] + this.$route.params.date[4] + this.$route.params.date[5] + this.$route.params.date[6] + this.$route.params.date[7]
	  }else {
	    newStr = newInt + this.$route.params.date[2] + this.$route.params.date[3] + this.$route.params.date[4] + this.$route.params.date[5] + this.$route.params.date[6] + this.$route.params.date[7]
	  }
	  
	  return newStr
	}	
  },
  mounted () {
    axios
      .get('http://127.0.0.1:5000/users/' + this.$route.params.id + '/bookings/add/' + this.$route.params.date)
      .then(response => (this.info = response.data))
  }
}
</script>
