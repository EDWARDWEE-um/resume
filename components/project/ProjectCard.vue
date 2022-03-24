<template>
  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
    <div data-aos="fade-right" class="timeline-arrow"></div>
    <div data-aos="fade-down-right">
      <h1>{{ title }}</h1>
      <h2>{{ start_date }} - {{ end_date }}</h2>
      <div v-if="category">
        <h2>{{$t('projects_page.category')}} : {{ category }}</h2>
      </div>
      <div v-if="status">
        <h2>{{$t('projects_page.status')}} : {{ status }}</h2>
      </div>
      <div data-aos="flip-up" v-if="image_1">
        <img class="project-image" :src="image_1" />
      </div>
       <div data-aos="flip-down" v-if="image_2">
        <img class="project-image" :src="image_2" />
      </div>
      <div class="embed-container" v-if="youtube_url">
        <iframe
          data-aos="flip-right"
          :src="youtube_url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        {{ description }}
      </p>
      <div v-if="link_url">
        <p>{{$t('projects_page.link')}}: <a :href="link_url" target="_blank"> {{$t('projects_page.click_here')}} </a></p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    link_url: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    image_1: {
      type: String,
      default: "",
    },
    image_2: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    start_date: {
      type: String,
      default: "",
    },
    end_date: {
      type: String,
      default: "",
    },
    youtube_url: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
img.project-image {
  width: 100%;
  height: 50vh;
  margin-bottom: 5%;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
li.timeline-item {
  margin: 20px 0;
}

/* Timeline item arrow */
.timeline-arrow {
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid #fff;
  border-bottom: 0.5rem solid transparent;
  display: block;
  position: absolute;
  left: 2rem;
}

/* Timeline item circle marker */
li.timeline-item::before {
  content: " ";
  background: #ddd;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #fff;
  left: 11px;
  width: 14px;
  height: 14px;
  z-index: 400;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

h1 {
  font-variant: bold;
  font-weight: 700;
  font-size: 1.4vw;
  letter-spacing: 0.82px;
}
h2 {
  font-variant: bold;
  font-weight: 600;
  font-size: 1.4vw;
  letter-spacing: 0.82px;
}
p {
  font-size: 1vw;
  line-height: 20px;
  letter-spacing: 0.21px;
}
@media only screen and (max-width: 768px) {
  img.project-image {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  h1 {
    font-size: 4vw;
  }
  h2 {
    font-size: 3vw;
  }
  p {
    font-size: 2.5vw;
  }
}
</style>