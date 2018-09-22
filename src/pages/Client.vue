<template>
  <q-page class="flex flex-center">
    Client Page
    <q-card>
      <q-card-title>
        Smart Assistant
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-scroll-area style="width: 300px; height: 350px;">
          <q-chat-message
            label='Sunday, 19th'
          />
          <q-chat-message
            name="Artem"
            avatar="statics/assistent_avatar.png"
            :text="['Good day, Veronika!', 'May I help you?']"
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Me"
            :text="['Hi, Artem! I try to buy a pillow, but it is not awailable on stock(( May you solve my problem?']"
            stamp="4 minutes ago"
            sent
          />
          <q-chat-message
            name="Artem"
            avatar="statics/assistent_avatar.png"
            :text="['do you meen this one?']"
            stamp="7 minutes ago"
          />

          <q-chat-message
            name="Me"
            :text="['Exactly!']"
            stamp="4 minutes ago"
            sent
          />
          <q-chat-message
            name="Artem"
            avatar="statics/assistent_avatar.png"
            :text="['Wait a minute, please', 'Unfortunately, there are no such pillows on stock((', 'But there are some very similar available', 'Would you like to see?']"
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Me"
            :text="['Yes, sure']"
            stamp="4 minutes ago"
            sent
          />
          <q-chat-message
            name="Artem"
            avatar="statics/assistent_avatar.png"
          />
          <product></product>
          <!--<img src="https://res.cloudinary.com/lmru/image/upload/w_200,h_200,c_pad,b_white,d_photoiscoming.png/LMCode/17926555.jpg" alt="Smiley face" height="200" width="200">-->
          <q-chat-message
            name="Me"
            :text="['Wow, cool! They are cool! Let me think']"
            stamp="4 minutes ago"
            sent
          />
          <q-chat-message
            name="Artem"
            avatar="statics/assistent_avatar.png"
            :text="['Sure! Take you time)']"
            stamp="7 minutes ago"
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
  </q-page>
</template>

<style>
  @import '../../node_modules/bulma/css/bulma.css';
</style>

<script>
export default {
  name: 'Client',
  data () {
    return {
    }
  },
  components: {
    'product': {
      props: ['productId'],
      template: '<p>Образец</p>'
      // template: '<img src="https://res.cloudinary.com/lmru/image/upload/w_200,h_200,c_pad,b_white,d_photoiscoming.png/LMCode/17926555.jpg" alt="Smiley face" height="200" width="200">'
    }
  }
}
</script>
