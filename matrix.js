//Intialising the canvas
var canvas= document.querySelector('canvas'),
context = canvas.getContext('2d');

//Setting the height and width of the canvas
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

//Setting the text to be displayed
var binary =
'0101010101110011010101010101010001011101011101001011011010110110101101101100001111010101010101110110';
binary = binary.split('');

//setting up the columns 
var fontsize = 16;
columns= canvas.width / fontsize;

//setting the drops
var drop = [];
for (var i=0; i<columns;i++){
    drop[i] = 1;
}

//rain effect
function rain() {
    context.fillStyle = 'rgba(0,0,0,0.1)';
    context.fillRect(0,0,canvas.width,canvas.height);
    for(var i =0; i<drop.length;i++){
        var number = binary[Math.floor(Math.random() * binary.length)];
        context.fillStyle = '#00c100ff';
        context.fillText(number, i * fontsize, drop[i] * fontsize);
        drop[i]++;
        if (drop[i] * fontsize > canvas.height && Math.random() > 0.95) {
            drop[i]= 0;
        }   
    }

}
setInterval(rain,31);
