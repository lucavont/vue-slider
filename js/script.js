const data = [{
        "src": "../images/image1.jpg"
    },
    {
        "src": "../images/image2.jpg"
    },
    {
        "src": "../images/image3.jpg"
    },
    {
        "src": "../images/image4.jpg"
    }
]

const myApp = new Vue({
    el: '#root',
    data: {
        imageSrc: data.map(e => e.src),
        currentIndex: 0
    },
    methods: {
        prevImg: function() {
            if (this.currentIndex === 0) {
                this.currentIndex = data.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        nextImg: function() {
            if (this.currentIndex === data.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        }
    }
})