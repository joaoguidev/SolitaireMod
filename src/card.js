export default class Card {
    constructor() {
        this.width = 20;
        this.heigth = 20;
        this.position = {
            x: 100,
            y: 100,
        };
    }

    draw(context) {

        
        context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.heigth
        );
    }
}
