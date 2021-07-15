let canvas = {
    c: null,
    canvas: null,
    sprite: null,
    frame: 0,
    init() {
        this.c = document.getElementById('canvas').getContext('2d')
        this.canvas = document.getElementById('canvas')

        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    },
    anim() {
        setInterval(()=> {
            this.frame++ 
            if(this.frame > 22) {
                this.frame = 0;
            }
        }, 30)
    },
    render() {
        this.c.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.sprite = new Image()
        this.sprite.src = '../img/sonic1.png'
        // this.c.drawImage(this.sprite, 0, 0)
        this.c.drawImage(this.sprite, this.frame * 100, 0, 100, 100, 0, 0, 100, 100)
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render()
            this.run()
        })
    },
    start() {
        this.init()
        this.anim()
        this.run()
    },
}

window.addEventListener('load', () => {
    canvas.start()
})
