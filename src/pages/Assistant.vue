<template>
  <q-page>
    <div class="doc-container">
      <div class="columns">
        <div class="column">
          <q-list>
            <q-list-header>Folders</q-list-header>
            <!-- insert QItems... -->
            <q-item-separator />
            <q-list-header>Files</q-list-header>
            <!-- insert QItems... -->
          </q-list>
          <!-- and/or -->
          <q-list>
            <q-item ...>...</q-item>
            <!-- Inset separator example -->
            <q-item-separator inset />
            <q-item ...>...</q-item>
            <q-item-separator />
            <q-item ...>...</q-item>
            <q-item-separator />
            <q-list-header>Files</q-list-header>
            <q-item ...>...</q-item>
          </q-list>
          <!--{{ active_clients }}-->
        </div>
        <div class="column">
          Second column
        </div>
        <div class="column">
          <q-card>
            <q-card-title>
              Veronika
            </q-card-title>
            <q-card-separator />
            <q-card-main>
              <q-scroll-area class="fl" style="width: 270px; height: 500px;">
                <q-chat-message
                  label='Sunday, 19th'
                />
                <q-chat-message
                  name="Me"
                  :text="['Good day, Veronika!', 'May I help you?']"
                  stamp="7 minutes ago"
                  sent
                />
                <q-chat-message
                  name="Veronika"
                  :text="['Hi, Artem! I try to buy a pillow, but it is not awailable on stock(( May you solve my problem?']"
                  stamp="4 minutes ago"
                />
                <q-chat-message
                  name="Me"
                  :text="['do you meen this one?']"
                  stamp="7 minutes ago"
                  sent
                />

                <q-chat-message
                  name="Veronika"
                  :text="['Exactly!']"
                  stamp="4 minutes ago"
                />
                <q-chat-message
                  name="Me"
                  :text="['Wait a minute, please', 'Unfortunately, there are no such pillows on stock((', 'But there are some very similar available', 'Would you like to see?']"
                  stamp="7 minutes ago"
                  sent
                />
                <q-chat-message
                  name="Veronika"
                  :text="['Yes, sure']"
                  stamp="4 minutes ago"
                />
                <q-chat-message
                  name="Me"
                  sent
                />
                <img src="https://res.cloudinary.com/lmru/image/upload/w_200,h_200,c_pad,b_white,d_photoiscoming.png/LMCode/17926555.jpg" alt="Smiley face" height="200" width="200">
                <q-chat-message
                  name="Veronika"
                  :text="['Wow, cool! They are cool! Let me think']"
                  stamp="4 minutes ago"
                />
                <q-chat-message
                  name="Me"
                  :text="['Sure! Take you time)']"
                  stamp="7 minutes ago"
                  sent
                />
              </q-scroll-area>
            </q-card-main>
            <q-card-separator />
            <q-card-main>
              <article class="media">
                <div class="media-content">
                  <textarea class="textarea" placeholder="Write a message..." rows="2"></textarea>
                </div>
                <div class="media-right">
                  <q-btn round color="secondary" size="sm" icon="fas fa-arrow-up" />
                </div>
              </article>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Assistant',
  data () {
    return {
      active_clients: [],
      interval: null
    }
  },
  methods: {
    loadData: function () {
      this.$store.commit('clients/getActiveClients')
      this.active_clients = this.$store.state.clients.active_clients
    }
  },
  // функция запускается каждые 2 секунды, обновляя список клиентов
  mounted: function () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.loadData()
      }, 2000)
    })
  }
}
</script>

<style>
  @import '../../node_modules/bulma/css/bulma.css';
  .doc-container {
    padding: 15px;
    max-height: 1000px
  }
</style>
