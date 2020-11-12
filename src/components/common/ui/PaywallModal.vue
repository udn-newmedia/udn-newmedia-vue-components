<template>
  <div class="paywall-modal">
    <!-- use the expression : this.$store.dispatch("triggerModal");
      to open the modal -->
    <div :class="{ fade: modalIsOpen }" />

    <div class="paywall-login" v-if="modalIsOpen" @click.self="triggerModal">
      <div class="paywall-login-area" :class="{ show: modalIsOpen }">
        <button type="button" class="paywall-dismiss" @click="triggerModal">
          X
        </button>
        <div class="member-limited">聯合報付費會員限定</div>
        <p>還不是會員嗎？馬上加入會員，即可享有7天免費試用！</p>
        <div class="button-area">
          <a
            class="login"
            target="_blank"
            href="https://member.udn.com/member/login.jsp?from=udn_topicmember_login_cate"
            >會員登入</a
          >
          <a
            class="signup"
            target="_blank"
            href="https://member.udn.com/member/ShowMember?from=udn_topicmember_ShowMember_cate"
            >加入會員</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";

export default {
  name: "PaywallModal",
  mixins: [sendGaMethods],
  computed: {
    modalIsOpen() {
      return this.$store.state.modalIsOpen;
    }
  },
  methods: {
    checkIdentity() {
      this.$store.dispatch("checkIdentity");
    },
    triggerModal() {
      console.log("open");
      this.$store.dispatch("triggerModal");
    }
  },
  mounted() {
    this.checkIdentity();
  }
};
</script>
<style lang="scss" scope>
.fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 4000;
  opacity: 0.5;
  filter: blur(5px);
}
.paywall-login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4001;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paywall-login-area {
  display: none;
  &.show {
    display: block;
  }
  background-color: #fff;
  padding: 50px;
  text-align: center;
  position: relative;
  & > p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.44;
    color: #7b7b7b;
    margin-top: 11px;
    margin-bottom: 27px;
    @media screen and (max-width: 1024.98px) {
      font-size: 10px;
    }
  }
}
.paywall-dismiss {
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 900;
  color: #000;
  font-size: 50px;
}
.member-limited {
  font-size: 30px;
  line-height: 1.47;
  letter-spacing: 1.5px;
  @media screen and (max-width: 1024.98px) {
    font-size: 18px;
  }
  @media screen and (max-width: 413.98px) {
    font-size: 16px;
  }
}
.button-area {
  display: flex;
  justify-content: center;
  & > a {
    // @include clean-btn;
    text-decoration: none;
    @media screen and (min-width: 1025px) {
      width: 50%;
      min-width: 250px;
    }
    @media screen and (max-width: 1024.98px) {
      min-width: 150px;
      font-size: 10px;
    }
    @media screen and (max-width: 413.98px) {
      min-width: 139px;
    }
    color: #fff;
    border-radius: 3px;
    padding-bottom: 12px;
    padding-top: 12px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    &.login {
      background-color: rgb(201, 41, 47);
    }
    &.signup {
      background-color: rgb(112, 112, 112);
    }
  }
}
</style>
