<template>
  <div class="works" id="works">
    
    <div class="container">
      <h1>Works/ Events</h1>
      <div class="wrapper">
        
        <ul class="sessions">
          <li>
            <div class="time">09:00 AM</div>
            <p>How is it already 9:00? Just how??? 🤯🤯</p>
          </li>
          <li>
            <div class="time">09:05 AM</div>
            <p>Few more minutes of sleep won't do anyone any harm 🤷..</p>
          </li>
          <li>
            <div class="time">09:30 AM</div>
            <p>Get up 🙄</p>
          </li>
          <li>
            <div class="time">1:00 PM</div>
            <p>How can I feel sleepy again?😵</p>
          </li>
          <li>
            <div class="time">01:30 PM</div>
            <p>
              Lunch time after which sleep just doesn't want to let go of me. 🤝
            </p>
          </li>
          <li>
            <div class="time">3:30 PM</div>
            <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
          </li>
          <li>
            <div class="time">4:30 PM</div>
            <p>
              The only time I don't feel sleepy cause it's work out time. I mean
              walking time. 😹
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
};
</script>

<style lang="scss" scoped>
.works {
  @mixin tablet-and-up {
    @media screen and (min-width: 769px) {
      @content;
    }
  }
  @mixin mobile-and-up {
    @media screen and (min-width: 601px) {
      @content;
    }
  }
  @mixin tablet-and-down {
    @media screen and (max-width: 768px) {
      @content;
    }
  }
  @mixin mobile-only {
    @media screen and (max-width: 600px) {
      @content;
    }
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    background: linear-gradient(45deg, #209cff, #68e0cf);
    padding: 3rem 0;
    overflow: hidden;
    overflow: none;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    background: #eaf6ff;
    padding: 2rem;
    border-radius: 15px;
  }
  h1 {
    font-size: 1.1rem;
    font-family: sans-serif;
  }
  .sessions {
    margin-top: 2rem;
    border-radius: 12px;
    position: relative;
  }
  li {
    transition: all 0.4s ease-out;
    opacity: 1;
    height: 2em;
    .show{
      opacity: 1;
    }
    padding-bottom: 1.5rem;
    border-left: 1px solid #abaaed;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
    &:last-child {
      border: 0px;
      padding-bottom: 0;
    }
    &:before {
      content: "";
      width: 15px;
      height: 15px;
      background: white;
      border: 1px solid #4e5ed3;
      box-shadow: 3px 3px 0px #bab5f8;
      box-shadow: 3px 3px 0px #bab5f8;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 0px;
    }
    .time {
    color: #005f7c;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    float: left;
    text-align: left;
    @include mobile-and-up {
      font-size: 0.9rem;
    }
    @include mobile-only {
      margin-bottom: 0.3rem;
      font-size: 0.85rem;
    }
  }
  p {
    color: #4f4f4f;
    font-family: sans-serif;
    line-height: 1.5;
    margin-top: 0.4rem;
    text-align: left;
    @include mobile-only {
      font-size: 0.9rem;
    }
  }
  }
  
}
</style>