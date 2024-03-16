class Counter {
    num = null;
    constructor(num, wew) {
      this.number = num;
      this.wew = wew;
    }
    write() {
      console.log(this.number);
      return this;
    }
    add(x = 1) {
      this.number += x;
      return this;
    }
}

class Sentence{
    arr = null
    constructor(text){
        this.arr = text.split(' ')
    }
    words(){
        console.log(this.arr)
    }
    longest(){
        console.log(this.arr.sort((a, b) => a.length - b.length).at(-1))
        return this
    }
    shuffle(){
        for (let i = this.arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        }
        console.log(this.arr.join(' '))
        return this
    }
    push(word){
        this.arr.push(word)
        console.log(this.arr.join(' '));
        return this
    }
    pop(){
        console.log(this.arr.slice(0, -1))
        return this
    }
}


