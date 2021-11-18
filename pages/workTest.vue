<template>
  <div class="pa-0 ma-0">
    <div class="app">
      <div class="cardList">
        <button class="cardList__btn btn btn--left">
          <div class="icon">
            <v-icon>mdi-chevron-left</v-icon>
          </div>
        </button>

        <div class="cards__wrapper">
          <div class="card current--card">
            <div class="card__image">
              <v-img src="https://source.unsplash.com/Z8dtTatMVMw"></v-img>
            </div>
          </div>

          <div class="card next--card">
            <div class="card__image">
              <v-img src="https://source.unsplash.com/9dmycbFE7mQ"></v-img>
            </div>
          </div>

          <div class="card previous--card">
            <div class="card__image">
              <v-img src="https://source.unsplash.com/m7K4KzL5aQ8"></v-img>
            </div>
          </div>
        </div>

        <button class="cardList__btn btn btn--right">
          <div class="icon">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </button>
      </div>

      <div class="infoList">
        <div class="info__wrapper">
          <h2 class="text name">Highlands</h2>
          <h4 class="text location">Scotland</h4>
          <p class="text description">The mountains ard calling</p>
        </div>

        <div class="info next--info" style="background:none;border:none">
          <h2 class="text name">Machu Pichu</h2>
          <h4 class="text location">Peru</h4>
          <p class="text description">Adventure is never far away</p>
        </div>

        <div class="info previous-info" style="background:none;border:none">
          <h2 class="text name">Chamonix</h2>
          <h4 class="text location">France</h4>
          <p class="text description">Let your dreams come true</p>
        </div>
      </div>

      <div class="app__bg">
        <div class="app__bg__image current--image">
          <v-img src="https://source.unsplash.com/Z8dtTatMVMw" />
        </div>
        <div class="app__bg__image next--image">
          <v-img src="https://source.unsplash.com/9dmycbFE7mQ" />
        </div>
        <div class="app__bg__image previous--image">
          <v-img src="https://source.unsplash.com/m7K4KzL5aQ8" />
        </div>
      </div>
    </div>

    <div class="loading__wrapper">
      <div class="loader--text">Loading...</div>
      <div class="loader">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    cardsContainerEl:'',
    appBgContainerEl:'',
    cardInfosContainerEl:'',
    gsap:'',
    imagesLoaded:''
  }),
  methods:{
    getReady(){
      this.gsap= window;
      this.imagesLoaded = window

      const buttons = {
          prev: document.querySelector(".btn--left"),
          next: document.querySelector(".btn--right"),
      };
      this.cardsContainerEl = document.querySelector(".cards__wrapper");
      this.appBgContainerEl = document.querySelector(".app__bg");

      this.cardInfosContainerEl = document.querySelector(".info__wrapper");

      buttons.next.addEventListener("click", () => swapCards("right"));

      buttons.prev.addEventListener("click", () => swapCards("left"));
    },
    

    swapCards(direction) {
        const currentCardEl = this.cardsContainerEl.querySelector(".current--card");
        const previousCardEl = this.cardsContainerEl.querySelector(".previous--card");
        const nextCardEl = this.cardsContainerEl.querySelector(".next--card");

        const currentBgImageEl = this.appBgContainerEl.querySelector(".current--image");
        const previousBgImageEl = this.appBgContainerEl.querySelector(".previous--image");
        const nextBgImageEl = this.appBgContainerEl.querySelector(".next--image");

        changeInfo(direction);
        swapCardsClass();

        removeCardEvents(currentCardEl);

        function swapCardsClass() {
            currentCardEl.classList.remove("current--card");
            previousCardEl.classList.remove("previous--card");
            nextCardEl.classList.remove("next--card");

            currentBgImageEl.classList.remove("current--image");
            previousBgImageEl.classList.remove("previous--image");
            nextBgImageEl.classList.remove("next--image");

            currentCardEl.style.zIndex = "50";
            currentBgImageEl.style.zIndex = "-2";

            if (direction === "right") {
                previousCardEl.style.zIndex = "20";
                nextCardEl.style.zIndex = "30";

                nextBgImageEl.style.zIndex = "-1";

                currentCardEl.classList.add("previous--card");
                previousCardEl.classList.add("next--card");
                nextCardEl.classList.add("current--card");

                currentBgImageEl.classList.add("previous--image");
                previousBgImageEl.classList.add("next--image");
                nextBgImageEl.classList.add("current--image");
            } else if (direction === "left") {
                previousCardEl.style.zIndex = "30";
                nextCardEl.style.zIndex = "20";

                previousBgImageEl.style.zIndex = "-1";

                currentCardEl.classList.add("next--card");
                previousCardEl.classList.add("current--card");
                nextCardEl.classList.add("previous--card");

                currentBgImageEl.classList.add("next--image");
                previousBgImageEl.classList.add("current--image");
                nextBgImageEl.classList.add("previous--image");
            }
        }
    },

    changeInfo(direction) {
        let currentInfoEl = this.cardInfosContainerEl.querySelector(".current--info");
        let previousInfoEl = this.cardInfosContainerEl.querySelector(".previous--info");
        let nextInfoEl = this.cardInfosContainerEl.querySelector(".next--info");

        this.gsap.timeline()
            .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 0.5,
            pointerEvents: "none",
        })
            .to(
            currentInfoEl.querySelectorAll(".text"),
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "-120px",
                opacity: 0,
            },
            "-="
        )
            .call(() => {
            swapInfosClass(direction);
        })
            .call(() => initCardEvents())
            .fromTo(
            direction === "right"
            ? nextInfoEl.querySelectorAll(".text")
            : previousInfoEl.querySelectorAll(".text"),
            {
                opacity: 0,
                translateY: "40px",
            },
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "0px",
                opacity: 1,
            }
        )
            .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 1,
            pointerEvents: "all",
        });

        function swapInfosClass() {
            currentInfoEl.classList.remove("current--info");
            previousInfoEl.classList.remove("previous--info");
            nextInfoEl.classList.remove("next--info");

            if (direction === "right") {
                currentInfoEl.classList.add("previous--info");
                nextInfoEl.classList.add("current--info");
                previousInfoEl.classList.add("next--info");
            } else if (direction === "left") {
                currentInfoEl.classList.add("next--info");
                nextInfoEl.classList.add("previous--info");
                previousInfoEl.classList.add("current--info");
            }
        }
    },

    updateCard(e) {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const centerPosition = {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2,
        };
        let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
        this.gsap.set(card, {
            "--current-card-rotation-offset": `${angle}deg`,
        });
        const currentInfoEl = this.cardInfosContainerEl.querySelector(".current--info");
        this.gsap.set(currentInfoEl, {
            rotateY: `${angle}deg`,
        });
    },

    resetCardTransforms(e) {
        const card = e.currentTarget;
        const currentInfoEl = this.cardInfosContainerEl.querySelector(".current--info");
        this.gsap.set(card, {
            "--current-card-rotation-offset": 0,
        });
        this.gsap.set(currentInfoEl, {
            rotateY: 0,
        });
    },

    initCardEvents() {
        const currentCardEl = this.cardsContainerEl.querySelector(".current--card");
        currentCardEl.addEventListener("pointermove", this.updateCard);
        currentCardEl.addEventListener("pointerout", (e) => {
            resetCardTransforms(e);
        });
    },

    

    removeCardEvents(card) {
        card.removeEventListener("pointermove", this.updateCard);
    },

    init() {

        let tl = this.gsap.timeline();

        tl.to(this.cardsContainerEl.children, {
            delay: 0.15,
            duration: 0.5,
            stagger: {
                ease: "power4.inOut",
                from: "right",
                amount: 0.1,
            },
            "--card-translateY-offset": "0%",
        })
            .to(this.cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
        })
            .to(
            [buttons.prev, buttons.next],
            {
                duration: 0.4,
                opacity: 1,
                pointerEvents: "all",
            },
            "-=0.4"
        );
    },

    waitForImages() {
        const images = [...document.querySelectorAll("img")];
        const totalImages = images.length;
        let loadedImages = 0;
        const loaderEl = document.querySelector(".loader span");

        this.gsap.set(this.cardsContainerEl.children, {
            "--card-translateY-offset": "100vh",
        });
        this.gsap.set(this.cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
            translateY: "40px",
            opacity: 0,
        });
        this.gsap.set([buttons.prev, buttons.next], {
            pointerEvents: "none",
            opacity: "0",
        });

        images.forEach((image) => {
            this.imagesLoaded(image, (instance) => {
                if (instance.isComplete) {
                    loadedImages++;
                    let loadProgress = loadedImages / totalImages;

                    this.gsap.to(loaderEl, {
                        duration: 1,
                        scaleX: loadProgress,
                        backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
                    });

                    if (totalImages == loadedImages) {
                        this.gsap.timeline()
                            .to(".loading__wrapper", {
                            duration: 0.8,
                            opacity: 0,
                            pointerEvents: "none",
                        })
                            .call(() => init());
                    }
                }
            });
        });
    },



  },
  mounted(){
    this.getReady();
    this.initCardEvents();
    this.waitForImages();
  }
}
</script>

<style>

</style>