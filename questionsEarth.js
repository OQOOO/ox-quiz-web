//문제 파일에서 호출함
//qSource 파일에서 호출함
function questions(a) {
    switch(a){
        case 0: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "지구의 나이";
            document.getElementById('question').innerHTML=
            "지구의 나이는 태양의 나이와 큰 차이가 없다.";
            questionPageFunc.answerAndComment('o',   
            "지구의 나이는 45.4억년, 태양은 46억년으로 상대적으로 큰 차이가 없습니다.");
            break;
        case 1: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "달의 탄생";
            document.getElementById('question').innerHTML=
            "달은 태양을 돌다가 지구의 중력에 잡혀 위성이 되었다.";
            questionPageFunc.answerAndComment('x',
            "달은 과거 지구와 화성크기의 행성 테이아가 충돌했을 때 생긴 파편이 뭉쳐 만들어졌습니다. 실제로 지구와 달의 구성요소는 비슷합니다.");
            break;
    }
}