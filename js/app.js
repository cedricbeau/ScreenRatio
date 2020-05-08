var app = new Vue({
  el: "#app",

  data: {
    // Site title
    title: "Screen Ratio",

    // Links site & Repo
    links: {
      site: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repo: "https://github.com/cedricbeau/ScreenRatio",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    // Consignes
    instructions: [
      {
        id: 0,
        value: "Sélectionner un ratio.",
      },
      {
        id: 1,
        value:
          "Renseigner la largeur (width) afin d'obtenir la hauteur (height).",
      },
      {
        id: 2,
        value: "Attention: ni lettres ni nombres à virgule.",
      },
    ],

    isVisible: false,
    toggleConsignesClass: "is-down",

    ratio: '',
    ratios : {
      169: '16:9',
      219: '21:9',
      43: '4:3'
    },

    isDisplay: false,

    hasError: false
  },

  // Methods
  methods: {

    /**
     * Display the instructions box
     */
    toggleInstructions: function () {
      this.isVisible = !this.isVisible;
    },

    /**
     *
     * @param {*} e
     */
    onChange: function(e) {
      this.ratio = e
      // Display the calc box
      this.displayCalcBox()
      // Do the calc ratio
      this.calcRatio(e)
    },

    /**
     * Display the calc box
     */
    displayCalcBox: function () {
      this.isDisplay = true
    },

    /**
     * Do the calc ratio
     */
    calcRatio: function (e) {

      // Get the input value
      let checkRadio = document.querySelectorAll('.check-radio')
      let width = document.querySelector('#width')
      let height = document.querySelector('#height')
      let valueWidth = width.value
      let valueHeight
      valueWidth *= 1

      // The calc ratio depend of checbox checked
      checkRadio.forEach(function(event){

        if(event.checked === true) {

          if(event.id === '43') {
            valueHeight = Math.round((valueWidth/4)*3)
          } else if(event.id === '169') {
            valueHeight = Math.round((valueWidth/16)*9)
          } else if (event.id === '219') {
            valueHeight = Math.round((valueWidth/64)*27)
          }
        }
      })

      height.value = valueHeight

      // Display alert box
      this.alertBox()
    },

    /**
     * Reset value
     */
    resetValue: function () {

      let width = document.querySelector('#width')
      let height = document.querySelector('#height')

      width.value = ''
      height.value = ''

      // Close the alert box
      this.alertBox()
    },

    /**
     * Alert NaN
     */
    alertBox: function () {

      let height = document.querySelector('#height')

      isNaN(height.value) ? this.hasError = !this.hasError : this.hasError = false
    }
  }
});
