<template>
<div class="tab-pane active">
  <div class="title h6">Login to your Account</div>
  <form class="content">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="form-group label-floating is-empty">
          <label class="control-label">Your Email</label>
          <input class="form-control" placeholder="" type="email">
        </div>
        <div class="form-group label-floating is-empty">
          <label class="control-label">Your Password</label>
          <input class="form-control" placeholder="" type="password">
        </div>

        <div class="remember">

          <div class="checkbox">
            <label>
              <input name="optionsCheckboxes" type="checkbox">
              Remember Me
            </label>
          </div>
          <a href="#" class="forgot">Forgot my Password</a>
        </div>

        <a href="#" class="btn btn-lg btn-primary full-width">Login</a>
        <div class="or"></div>
        <a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left">
          <i class="fa fa-facebook" aria-hidden="true"></i>Login with Facebook
        </a>
        <a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left">
          <i class="fa fa-twitter" aria-hidden="true"></i>Login with Twitter
        </a>
        <p>Don’t you have an account?
          <a href="#">Register Now!</a>
          it’s really simple and you can start enjoing all the benefits!
        </p>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'signIn',
};
</script>

<style scoped>

</style>
