class FirstBoss extends MovableObject {

    height = 350;
    width = 350;
    y = 150;
    x = 1400;

    IMAGES_WALKING = [
       'img/4_enemie_boss_chicken/2_alert/G5.png',
       'img/4_enemie_boss_chicken/2_alert/G6.png',
       'img/4_enemie_boss_chicken/2_alert/G7.png',
       'img/4_enemie_boss_chicken/2_alert/G8.png',
       'img/4_enemie_boss_chicken/2_alert/G9.png',
       'img/4_enemie_boss_chicken/2_alert/G10.png',
       'img/4_enemie_boss_chicken/2_alert/G11.png',
       'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() {
        this.otherDirection = true;
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        }, 200); 
    }
}