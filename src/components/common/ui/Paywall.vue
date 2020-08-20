<template>
  <div class="paywall-container">
    <template v-if="!memberStatus.isPaid">
      <div class="paywall-cover" />
      <div class="paywall-login">
        <div class="paywall-login-area">
          <div class="member-limited">聯合報付費會員限定</div>
          <p>還不是會員嗎？馬上加入會員，即可享有7天免費試用！</p>
          <div class="button-area">
            <button type="button" class="login" @click="login">會員登入</button>
            <button type="button" class="signup">加入會員</button>
          </div>
        </div>
      </div>
    </template>
    <div class="content">
      <slot name="isPaid" v-if="memberStatus.isPaid" />
      <slot name="isNotPaid" v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: "Paywall",
  data() {
    return { memberStatus: { isMember: false, isPaid: false } };
  },
  methods: {
    login() {
      console.log("log in");
    },
    checkIdentity() {
      const cors = "https://cors-anywhere.herokuapp.com/";
      const url = "https://vip.udn.com/api/paywall_article";

      const data = {
        account: "cookie udnland",
        udngold: "cookie udngold",
        checkIdentity: true,
      };

      fetch(`${cors}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((jsonData) => console.log(jsonData));
      fetch(`${cors}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((jsonData) => console.log(jsonData));
      // identity:0 未登入
      // identity:1 登入但未付費
      // identity:2 登入且已付費
    },
  },
  mounted() {
    this.checkIdentity();
  },
  // updated() {
  //   this.checkIdentity()
  // },
};
</script>
<style lang="scss" scope>
.paywall-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.paywall-cover {
  position: absolute;
  z-index: 4000;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: rgb(236, 236, 236, 0.9);
  // transform: rotate(-10deg);
}
.paywall-login {
  position: absolute;
  z-index: 4001;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paywall-login-area {
  text-align: center;
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
  & > button {
    @include clean-btn;
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
.content {
  filter: blur(5px);
}
</style>
