<template>
    <div class="portfolio" id="portfolio">
       <div class="container">
      <h1>Portfolio Projects</h1>
      <div class="wrapper">
        <ul class="sessions">
          <li>
            <div class="time">March 2020 - Present</div>
            <div class="desig">
              MTS, Application Development | Metricstream, Bangaluru
            </div>
            <p>
              • Developed and released fresh product Case Incident Management
              (CSM) bundled with (CIM, Observation, ISM-Issue Management)<br />
              • Key Technologies used- Java, Groovy, JavaScript, Spring MVC,
              HTML 5, Angular, Sql, Unit-Testing: Junit5, Mockito, PowerMockito, Mocha, Chai, Karate.
            </p>
          </li>
          <li>
            <div class="time">May 2018 - July 2018</div>
            <div class="desig">
              Web Development Intenship | insAnalytics, Kolkata
            </div>
            <p>
              • Developed a python flask and django based web app which
              considered input data and produced output after processing through
              various ML algorithims<br />
              • Key Technologies used- Python, Flask, JavaScript, HTML 5,
              Angular.
            </p>
          </li>
          
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"Portfolio",
}
</script>

<style lang="scss" scoped>
.portfolio {
  height: calc(100vh - 70px) !important;
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
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    background: white;
    padding: 3rem 0;
    overflow: hidden;
    overflow: none;
  }
  .wrapper {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    background: #eaf6ff;
    padding: 2rem;
    border-radius: 15px;
  }
  h1 {
    padding-top: 0;
    margin-top: 0;
    font-size: 1.1rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;;
  }
  .sessions {
    margin-top: 2rem;
    border-radius: 12px;
    position: relative;
  }
  li {
    transition: all 0.4s ease-out;
    opacity: 1;
    height: auto;
    .show {
      opacity: 1;
    }
    padding-bottom: 1.5rem;
    border-left: 1px solid #abaaed;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
    &:not(:last-child) {
      margin-bottom: 0px;
    }
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
    .desig {
      width: 100%;
      text-align: left;
      font-weight: 600;
      font-family: Avenir, Helvetica, Arial, sans-serif;;
      padding: 0;
      float: left;
      font-size: 0.9rem;
      margin-bottom: 4px;
      // @include mobile-and-up {
      //   font-size: 0.9rem;
      // }
      // @include mobile-only {
      //   padding: 0;
      //   margin: 0;
      //   margin-bottom: 0.3rem;
      //   font-size: 0.85rem;
      // }
    }
    .time {
      color: #005f7c;
      width: 100%;
      font-family: Avenir, Helvetica, Arial, sans-serif;;
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