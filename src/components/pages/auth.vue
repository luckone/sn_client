<template>
<div class="landing-page">
  <div class="content-bg-wrap">
    <div class="content-bg"></div>
  </div>


  <!-- Landing Header -->

  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div id="site-header-landing" class="header-landing">
          <a href="#" class="logo">
            <h5 class="logo-title">Vsn</h5>
          </a>

          <ul class="profile-menu">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#" class="js-expanded-menu">
                <svg class="olymp-menu-icon">
                  <use xlink:href="icons/icons.svg#olymp-menu-icon"></use>
                </svg>
                <svg class="olymp-close-icon">
                  <use xlink:href="icons/icons.svg#olymp-close-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ... end Landing Header -->

  <!-- Login-Registration Form  -->

<div class="container">
  <div class="row display-flex">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <div class="landing-content">
        <h1>Welcome to the Valentor's Social Network</h1>
        <p>Хотя не имеет смысла, деревья еще растут.
          Их можно увидеть в окне, но лучше издалека.
          И воздух почти скандал, ибо так раздут,
          что нетрудно принять Боинг за мотылька.
        </p>
        <a href="#" class="btn btn-md btn-border c-white" @click="loginMode = !loginMode">
          Register Now!
        </a>
      </div>
    </div>
      <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="registration-login-form">
          <div class="tab-content">
            <transition name="slide-top">
              <sign-in v-if="loginMode"></sign-in>
            </transition>
            <transition name="slide-top">
              <sign-up v-if="!loginMode"></sign-up>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import signIn from '@/components/pages/auth/common/signIn';
import signUp from '@/components/pages/auth/common/signUp';

export default {
  name: 'HelloWorld',
  components: { signIn, signUp },
  data() {
    return {
      loginMode: false,
    };
  },
};
</script>
<style>
  .slide-top-enter-active {
    transition: all .3s ease;
  }
  .slide-top-leave-active {
    transition: opacity 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-top-enter, .slide-top-leave-to {
    opacity: 0;
  }

  .slide-top-enter {
    transform: translateY(100px);
  }
</style>
