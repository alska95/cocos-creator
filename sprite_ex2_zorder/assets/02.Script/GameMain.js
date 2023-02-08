cc.Class({
    extends: cc.Component,

    properties: {
        imgParent: cc.Sprite,
        imgMan: cc.Sprite,
        imgWoman: cc.Sprite,
        mainCam: cc.Camera,
    },

    onLoad: function () {

        this.mainCam.backgroundColor = cc.color(255,255,255);
        this.imgMan.node.zIndex = 1;
        this.imgMan.node.setPosition(-200, 0);
        this.imgMan.node.setScale(2, 2);
        this.imgMan.node.angle = -20;


        // this.imgMan.node.color = cc.color(0,0,255);
        // this.imgMan.node.opacity = 100;
        // this.imgMan.node.active = true;

        //flip은 지원하지 않지만 action으로 사용 가능.

        //부모 회전
        this.imgParent.node.angle = 100;

        let parentSize = this.imgParent.node.getContentSize();
        cc.log(parentSize.width);

        this.imgMan.node.setPosition(parentSize.width/2, 0);
    },

    // update: function (dt) {},
});
