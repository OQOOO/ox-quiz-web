//점수카운터 (복사가능)↓
var score = 0;
var count = {
        up:function countUp(){
            score = score + 1;
            //document.querySelector("#count").innerText=score;//디버깅용
        },
        reset:function countReset(){
            score = 0
            document.querySelector("#count").innerText=score; 
        }
    }

// 버튼 이벤트
var page = 0;
var btn = 'none';
var btnCnt = 0;
function btnClick(type) { // 이 함수는 버튼을 누를때 작동함
    btn = type;// o x
    if(btn === 'next'){
        page++;
        btnCnt = 0; //선택반복 방지용 카운터

    } else {
        ++ btnCnt;
    }

    if(page == questionsNum){
        //변수 넘기기
        location.href = "score.html?" + score + ":" + page + ":" + scorePageColorType;
    }
    questions(page);
}
var questionPageFunc = {
    //정답, 오답 여부 판별
    //문제 모음 함수에서 호출함
    answerAndComment:function (ans, cmt) {
        document.getElementById('commentary').innerHTML="";
        document.getElementById('chackAnswer').innerHTML="";
        if(btn === ans && btnCnt === 1) {
            count.up();
            document.getElementById('chackAnswer').innerHTML="정답입니다!";
        } else if(btn !== ans && btnCnt ===1){
            document.getElementById('chackAnswer').innerHTML="오답입니다.";
        }
        if(btn === 'o' || btn ==='x') {
            document.getElementById('commentary').innerHTML = cmt;
        }
    },
    //원 색 변경
    //문제 모음 함수에서 호출함
    setColor:function(small, middle, big, background, text) {
        document.getElementById('small').style.backgroundColor = small;
        document.getElementById('middle').style.backgroundColor = middle;
        document.getElementById('big').style.backgroundColor = big;
        document.body.style.backgroundColor = background;
        document.body.style.color = text;

        animation();
    },
}
function animation() {
    const element1 = document.getElementById("small");
    element1.classList.remove("c1");
    void element1.offsetWidth;
    element1.classList.add("c1");

    const element2 = document.getElementById("middle");
    element2.classList.remove("c2");
    void element2.offsetWidth;
    element2.classList.add("c2");

    const element3 = document.getElementById("big");
    element3.classList.remove("c3");
    void element3.offsetWidth;
    element3.classList.add("c3");
}