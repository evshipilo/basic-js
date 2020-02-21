const chainMaker = {
    arrLink: [],

    getLength() {
        return this.arrLink.length;
    },
    addLink(value) {
        this.arrLink.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if ((position ^ 0) != position || position > this.arrLink.length || position < 1) throw new Error('wrong position');
        this.arrLink.splice(position-1, 1);
        return this;
    },
    reverseChain() {
        this.arrLink.reverse();
        return this;
    },
    finishChain() {
 let fin=this.arrLink.join('~~');
 this.arrLink=[];
 return fin;
    }
};

module.exports = chainMaker;
