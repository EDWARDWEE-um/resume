<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 mx-auto">
        <ul class="timeline">
          <PrProjectCard
            :title="this.$t('projects_page.project_9.title')"
            :start_date="this.$t('projects_page.project_9.start_date')"
            :end_date="this.$t('projects_page.project_9.end_date')"
            :description="this.$t('projects_page.project_9.description')"
            :category="this.$t('projects_page.project_9.category')"
            :status="this.$t('projects_page.project_9.status')"
            :link_url="'https://github.com/EDWARDWEE-um/resume'"
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_8.title')"
            :start_date="this.$t('projects_page.project_8.start_date')"
            :end_date="this.$t('projects_page.project_8.end_date')"
            :description="this.$t('projects_page.project_8.description')"
            :category="this.$t('projects_page.project_8.category')"
            :status="this.$t('projects_page.project_8.status')"
            :image_1="require('@/assets/images/project/expensetracker.gif')"
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_7.title')"
            :start_date="this.$t('projects_page.project_7.start_date')"
            :end_date="this.$t('projects_page.project_7.end_date')"
            :description="this.$t('projects_page.project_7.description')"
            :category="this.$t('projects_page.project_7.category')"
            :status="this.$t('projects_page.project_7.status')"
            :image_1="require('@/assets/images/project/drsbxfe.png')"
            :image_2="require('@/assets/images/project/drsbxbe.png')"
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_6.title')"
            :start_date="this.$t('projects_page.project_6.start_date')"
            :end_date="this.$t('projects_page.project_6.end_date')"
            :description="this.$t('projects_page.project_6.description')"
            :category="this.$t('projects_page.project_6.category')"
            :status="this.$t('projects_page.project_6.status')"
            :image_1="
              require('@/assets/images/project/hexferehrmsjetsonnano.png')
            "
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_5.title')"
            :start_date="this.$t('projects_page.project_5.start_date')"
            :end_date="this.$t('projects_page.project_5.end_date')"
            :description="this.$t('projects_page.project_5.description')"
            :category="this.$t('projects_page.project_5.category')"
            :status="this.$t('projects_page.project_5.status')"
            :image_1="require('@/assets/images/project/pifwebsite.png')"
            :link_url="'https://payitforward.io'"
          />

          <PrProjectCard
            :title="this.$t('projects_page.project_4.title')"
            :start_date="this.$t('projects_page.project_4.start_date')"
            :end_date="this.$t('projects_page.project_4.end_date')"
            :description="this.$t('projects_page.project_4.description')"
            :category="this.$t('projects_page.project_4.category')"
            :status="this.$t('projects_page.project_4.status')"
            :image_1="require('@/assets/images/project/pifmobile.png')"
            :link_url="'https://apps.apple.com/my/app/pay-it-forward-pif/id1578149369'"
          />

          <PrProjectCard
            :title="this.$t('projects_page.project_3.title')"
            :start_date="this.$t('projects_page.project_3.start_date')"
            :end_date="this.$t('projects_page.project_3.end_date')"
            :description="this.$t('projects_page.project_3.description')"
            :category="this.$t('projects_page.project_3.category')"
            :status="this.$t('projects_page.project_3.status')"
            :image_1="require('@/assets/images/project/algoproject.gif')"
            :link_url="'https://algoprojq1.herokuapp.com/'"
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_2.title')"
            :start_date="this.$t('projects_page.project_2.start_date')"
            :end_date="this.$t('projects_page.project_2.end_date')"
            :description="this.$t('projects_page.project_2.description')"
            :category="this.$t('projects_page.project_2.category')"
            :status="this.$t('projects_page.project_2.status')"
            :image_1="require('@/assets/images/project/animetracker.gif')"
            :link_url="'https://animetracker123.netlify.app/'"
          />
          <PrProjectCard
            :title="this.$t('projects_page.project_1.title')"
            :start_date="this.$t('projects_page.project_1.start_date')"
            :end_date="this.$t('projects_page.project_1.end_date')"
            :description="this.$t('projects_page.project_1.description')"
            :category="this.$t('projects_page.project_1.category')"
            :status="this.$t('projects_page.project_1.status')"
            :image_1="require('@/assets/images/project/befitter.png')"
            :link_url="'https://befitter.herokuapp.com/login/?next=/'"
          />
        </ul>
      </div>
      <button
        :class="checkScroll"
        @click="scrollToTop()"
        id="myBtn"
        title="Go to top"
      >
        Top
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
var mybutton = document.getElementById("myBtn");
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    checkScroll() {
      window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scrollTop);
        if (scroll > 10) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      scrollTop: "common/getScrollTop",
    }),
  },
};
</script>

<style>
ul.timeline {
  list-style-type: none;
  position: relative;
  padding-left: 2.5rem;
  padding-bottom: 2.5rem;
}

/* Timeline vertical line */
ul.timeline:before {
  content: " ";
  background: var(--bg-secondary);
  display: inline-block;
  position: absolute;
  left: 16px;
  width: 4px;
  height: 100%;
  z-index: 400;
  border-radius: 1rem;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  width: 50px;
}

#myBtn:hover {
  background-color: #555;
}
</style>