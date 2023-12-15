
// Escopo global
NivelJogo = false;
PocioneBarcos = false;

if(NivelJogo == false){
    console.log("Selecione um nivel de jogo");
}
if(PocioneBarcos == false){
    console.log("Posicione os barcos");
}
function Dificil(){
    NivelJogo = true;
    QteTiros = 15;
    QteBarcos = 10;
    alert("Nivel facil!");
};
function Facil(){
    NivelJogo = true;
    QteTiros = 10;
    QteBarcos = 5;
    alert("Nivel dificil!");
};
function PosicionaBarcos(){
    PocioneBarcos = true;
    console.log("Barcos posicionados");
    if(NivelJogo == false){
        alert("Selecione um nivel de jogo!");
        window.location.reload(true);
    }
    Pontos = 0;
    let min = 0, max = 4;
    tabela = [[false,false,false,false,false],
             [false,false,false,false,false],
             [false,false,false,false,false],
             [false,false,false,false,false],
             [false,false,false,false,false]];

    for(let i=0;i<QteBarcos;i++){
        let numeroAleatoriolinha = Math.floor(Math.random() * (max - min + 1)) + min;
        let numeroAleatoriocoluna = Math.floor(Math.random() * (max - min + 1)) + min;
        tabela[numeroAleatoriolinha][numeroAleatoriocoluna] = true;
    }
};
function revelar00(){
    let PosicaoLinha = 0, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        vet = "0";
        //alert("Barco afundado");
        var img = document.querySelector("#quadro00");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro00");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar01(){
    let PosicaoLinha = 0, PosicaoColuna = 1;
    
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro01");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro01");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar02(){
    let PosicaoLinha = 0, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro02");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro02");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar03(){
    let PosicaoLinha = 0, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro03");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro03");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar04(){
    let PosicaoLinha = 0, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro04");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro04");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar10(){
    let PosicaoLinha = 1, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro10");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro10");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar11(){
    let PosicaoLinha = 1, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro11");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro11");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar12(){
    let PosicaoLinha = 1, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro12");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro12");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar13(){
    let PosicaoLinha = 1, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro13");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro13");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar14(){
    let PosicaoLinha = 1, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro14");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro14");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar20(){
    let PosicaoLinha = 2, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro20");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro20");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar21(){
    let PosicaoLinha = 2, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro21");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro21");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar22(){
    let PosicaoLinha = 2, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro22");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro22");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar23(){
    let PosicaoLinha = 2, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro23");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro23");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar24(){
    let PosicaoLinha = 2, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro24");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro24");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar30(){
    let PosicaoLinha = 3, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro30");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro30");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar31(){
    let PosicaoLinha = 3, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro31");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro31");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar32(){
    let PosicaoLinha = 3, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro32");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro32");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar33(){
    let PosicaoLinha = 3, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro33");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro33");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar34(){
    let PosicaoLinha = 3, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro34");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro34");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar40(){
    let PosicaoLinha = 4, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro40");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        console.log("Tiro na agua");
        console.log(QteTiros);
        console.log(Pontos);
        var img = document.querySelector("#quadro40");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar41(){
    let PosicaoLinha = 4, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro41");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro41");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar42(){
    let PosicaoLinha = 4, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro42");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro42");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar43(){
    let PosicaoLinha = 4, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro43");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro43");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar44(){
    let PosicaoLinha = 4, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro44");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro44");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
