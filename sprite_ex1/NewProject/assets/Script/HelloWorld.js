cc.Class({
    extends: cc.Component,

    properties: {
        imgCocos: cc.Sprite,
    },

    // use this for initialization
    onLoad: function () {
        var size = cc.winSize;
        cc.log("width : " + size.width);

        // position
        // this.imgCocos.node.x = 300;
        // this.imgCocos.node.y = 100;
        // this.imgCocos.node.setPosition(-300, 100);
        this.imgCocos.node.position = cc.v2(-300, 100);

        //anchor point
        // this.imgCocos.node.anchorX = 0.5;
        // this.imgCocos.node.anchorY = 0.5;
        this.imgCocos.node.setAnchorPoint(1, 1);

        //scale
        this.imgCocos.node.setScale(2, 2);

        //size
        this.imgCocos.node.setContentSize(100,100);
    },

    // called every frame
    update: function (dt) {

    },
});
