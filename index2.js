module.exports = {
    foo: function(){
        document.getElementById("button").onclick = ()=>{this.bar()};
    },

    bar: function(){
        console.log("bar")
    }
}