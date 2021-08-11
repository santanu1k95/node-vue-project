<template>
  <div class="intro" id="intro">
    <div class="left">
      <div class="bgdrop"></div>
    </div>
    <div class="right">
                <div className="wrapper">
                    <h2>Hi There I am</h2>
                    <h1>Santanu Phukan</h1>
                    <h3>Frelance <span ref="textRef"></span></h3>
                    
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png"/>
                </a>
            </div>
  </div>
</template>

<script>
import { init } from 'ityped'

export default {
  name: "Intro",
  mounted () {
    init(this.$refs.textRef,{
            showCursor:true,
            strings:["Developer","Designer","Content Creator"],
            backDelay: 1500
        })
  },
  // methods: {
    
  //   init(this.$refs.textRef,{
  //           showCursor:true,
  //           strings:["Developer","Designer","Content Creator"],
  //           backDelay: 1500
  //       })
  // },
};
</script>

<style scoped lang="scss">
.intro {
  display: flex;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  .left {
    flex: 0.5;
    justify-content: flex-start;
    position: relative;
    flex-wrap: wrap;
    .bgdrop {
      position: absolute;
      transform: rotate(40deg);
      left: -300px;
      top: 50px;
      width: 1000px;
      height: 1100px;
      background-color: crimson;
      border-radius: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      float: left;
      justify-self: start;
      align-self: start;
    }
  }
  .right {
    flex: 0.5;
    background-color: white;
    position: relative;

    .wrapper {
      width: 100%;
      height: 100%;
      padding: 50px auto;
      margin: auto 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1 {
        font-size: 60px;
        margin: 10px 0;
      }

      h2 {
        font-size: 35px;
      }

      h3 {
        font-size: 30px;
        span {
          font-size: inherit;
          color: red;
        }
        .ityped-cursor {
          font-size: 2.2rem;
          opacity: 1;
          -webkit-animation: blink 1s infinite;
          -moz-animation: blink 1s infinite;
          animation: blink 1s infinite;
          animation-direction: alternate;
        }

        @keyframes blink {
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @-webkit-keyframes blink {
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @-moz-keyframes blink {
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
    a {
      position: absolute;
      bottom: 10px;
      left: 40%;
      img {
        width: 30px;
        animation: arrowBlink 2s infinite;
      }
      @keyframes arrowBlink {
        100% {
          opacity: 0;
        }
      }
    }
  }
}
</style>