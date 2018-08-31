cc.Class({
    extends: cc.Component,

    properties: {
        inimigoPrefab: cc.Prefab,
        area: 10,
        intervalo: 2,
    },

    onLoad() {
        this.schedule(this.gerar, this.intervalo);
    },

    gerar: function () {
        let inimigo = cc.instantiate(this.inimigoPrefab);
        inimigo.parent = this.node.parent;

        let posicao = new cc.Vec2(Math.random() - 0.5, Math.random() - 0.5);
        posicao = posicao.normalize();
        posicao = posicao.mul(this.area);
        posicao = this.node.position.add(posicao);

        inimigo.position = posicao;
    },

    start() {

    },

    update(dt) {

    },
});