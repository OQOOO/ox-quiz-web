//문제 파일에서 호출함
//qSource 파일에서 호출함
function questions(a) {
    switch(a){
        case 0:
            questionPageFunc.setColor('#D9AD5B', '#D99D55', '#BF7C41', '#A65A2E', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#C0D904', '#618C03', '#2E5902', '#022601', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "문명의 역사";
            document.getElementById('question').innerHTML=
            "인간은 수렵채집인으로 살았던 시간이 문명인으로 살았던<br>시간보다 더 길다";
            //qSource 를 호출함
            questionPageFunc.answerAndComment('o', 
            "구인류는 약 300만년 전, 현생인류는 약 30만년 전에 탄생했습니다. \
            기록이 남아있는 가장 오래된 문명은 기원전 약 6,500년 전에 탄생한 수메르 문명입니다. \
            비교해보면 인류는 지구에 탄생한 후 대부분의 기간을 수렵채집인으로 살아왔음을 알 수 있습니다.");
            break;
        case 1:
            questionPageFunc.setColor('#BFBFBF', '#A6A6A6', '#737373', '#404040', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#F2F0CE', '#F28972', '#8C3730', '#260B01', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "상호확증파괴";
            document.getElementById('question').innerHTML=
            "상호확증파괴는 핵무기를 보유한 국가간에 성립하는 관계이다.";
            questionPageFunc.answerAndComment('x',
            "상호확증파괴란 핵 선제공격을 받은 이후에도 보복 핵공격으로 \
            상대국을 파괴할 수 있는 수단을 가진 국가들 간에 이루어지는 관계를 의미합니다. \
            단순 핵무기 보유만이 아니라 핵공격을 받은 후에도\
            상대 국가를 파괴할 수 있는 타격능력을 보유해야 상호확증파괴가 성립합니다.");
            break;
        case 2:
            questionPageFunc.setColor('#035AA6', '#0367A6', '#8C8045', '#565902', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#021F59', '#FFFFFA', '#6F0E11', '#050037', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "가장 큰 영토";
            document.getElementById('question').innerHTML=
            "몽골제국은 역사상 가장 큰 영토를 가졌던 국가이다.";
            questionPageFunc.answerAndComment('x', 
            "역사상 가장 큰 영토를 차지한 국가는 대영제국입니다. 전세계 육지 면적의 1/4을 차지하여 해가 지지 않는 나라로 불리었으며 세계 문화와 역사에 큰 영향을 주었습니다.");
            break;
        case 3:
            questionPageFunc.setColor('#BFA893', '#BF9515', '#73061A', '#DECFB2', 'black');
            document.getElementById('qTitle').innerHTML=
            "로마의 멸망";
            document.getElementById('question').innerHTML=
            "로마 제국은 476년에 완전히 멸망하였다.";
            questionPageFunc.answerAndComment('x', 
            "476년은 당시 양분된 로마 제국 중 서로마 제국의 멸망 시기이며 이는 유럽의 고대시대와 중세시대를 구분하는 기준이 됩니다. 동로마 제국은\
            1453년 콘스탄티노폴리스(현 이스탄불)가 오스만 제국에게 함락당해 멸망하게 되며, 이 또한 중세시대와 근대시대를 구분하는 기준이 됩니다.");
            break;
        case 4:
            questionPageFunc.setColor('#004990', '#EAEBE7', '#118ACB', '#224459', 'white');
            document.getElementById('qTitle').innerHTML=
            "NATO";
            document.getElementById('question').innerHTML=
            "대한민국은 NATO의 일원이 아니다.";
            questionPageFunc.answerAndComment('o',   
            "NATO는 북대서양 조약기구입니다. 북미와 유럽국가들이 주로 가입되어있으며 북대서양과는 거리가 먼 대한민국이 가입할 일은 없습니다.");
            break;
        case 5:
            questionPageFunc.setColor('#30588C', '#D7D8D9', '#30588C', '#D7D8D9', 'white');
            document.getElementById('qTitle').innerHTML=
            "상임이사국";
            document.getElementById('question').innerHTML=
            "유엔 안보리 상임이사국은 미국, 영국, 프랑스, 중국, 러시아, 독일, 일본으로 구성되어 있다.";
            questionPageFunc.answerAndComment('x',   
            "유엔 안보리 상임이사국은 미국, 영국, 프랑스, 중국, 러시아로 구성되어 있습니다. 모두 2차 세계대전의 승전국이며 핵무기 보유 국가입니다. \
            상임이사국은 안보리 결의에 대한 거부권을 가지고 있으며 유엔에서 상정되는 모든 안건은 이중 단 한 국가만 반대하더라도 \
            결의될 수 없습니다.");
            break;
        case 6:
            questionPageFunc.setColor('#3C7E60', '#64D99B', '#45965E', '#E9E7CF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#2B3361', '#921D16', '#F2ECE4', '#921D16', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "최대의 석유생산국가";
            document.getElementById('question').innerHTML=
            "세계 최대의 석유생산국은 사우디아라비아다.";
            questionPageFunc.answerAndComment('x',   
            "세계 최대의 석유생산국은 미국입니다.");
            break;
        case 7:
            questionPageFunc.setColor('#D4FFB3', '#FFF3FA', '#EA7B6D', '#C7CCB5', 'black');
            document.getElementById('qTitle').innerHTML=
            "이란인";
            document.getElementById('question').innerHTML=
            "이란의 주요 민족은 아리아인이다.";
            questionPageFunc.answerAndComment('o',   
            "'이란'은 '아리아인의 땅' 이라는 뜻을 가지고 있으며 이름대로 이란의 주요 민족은 이란계 아리아인 입니다.");
            break;
        case 8: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "그레이트 게임";
            document.getElementById('question').innerHTML=
            "그레이트 게임은 제국주의 시대 영국과 프랑스의 패권 경쟁을 의미한다.";
            questionPageFunc.answerAndComment('x',   
            "그레이트 게임은 제국주의 시대에 유라시아 대륙의 패권을 두고 영국과 러시아가 벌인 경쟁을 의미하며 당시 세계 정세에 큰 영향을 미쳤습니다.");
            break;
        case 9: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "인간의 수";
            document.getElementById('question').innerHTML=
            "인간의 생물량이 야생 포유류보다 많다.";
            questionPageFunc.answerAndComment('o',   
            "새를 포함한 육상 척추동물중 야생동물은 단 3%로 불과합니다. 나머지 32%는 인간이, 그리고 가축이 65%를 차지합니다.");
            break;
        case 10: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "청나라";
            document.getElementById('question').innerHTML=
            "청나라의 지배층은 한족이 아니었다.";
            questionPageFunc.answerAndComment('o', 
            "청나라의 지배층은 대부분 만주족 이었습니다.");
            break;
        case 10:
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "청나라";
            document.getElementById('question').innerHTML=
            "청나라의 지배층은 한족이 아니었다.";
            questionPageFunc.answerAndComment('o', 
            "청나라의 지배층은 대부분 만주족 이었습니다.");
            break;
        case 10:
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "국공내전";
            document.getElementById('question').innerHTML=
            "국공내전의 승자는 중화민국이다.";
            questionPageFunc.answerAndComment('x', 
            "국공내전은 청나라의 멸망 이후 2차대전의 막바지까지 진행된 중국의 내전입니다. \
            장제스가 이끄는 국민당과 마오쩌둥이 이끄는 공산당의 싸움에서 \
            최종적으로 공산당이 승리하여 중화인민공화국을 수립하게 됩니다.");
            break;
        case 10: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "쿠바 미사일 위기";
            document.getElementById('question').innerHTML=
            "쿠바 미사일 위기는 핵전쟁 위기였다.";
            questionPageFunc.answerAndComment('o', 
            "소련이 미국 바로 밑에있는 쿠바에 핵미사일 기지를 건설하여 시작된 위기사태로 핵전쟁에 가장 근접한 사건입니다.");
            break;

            //////////////////////////////////////////////////////////
        case 10: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "가장 위험한 동물";
            document.getElementById('question').innerHTML=
            "인간을 가장 많이 죽인 동물은 모기다.";
            questionPageFunc.answerAndComment('o',   
            "모기가 옮기는 말라리아와 뇌염 등으로 전세계에서 매년 72만명이 사망합니다.");
            break;
        case 10: //
            questionPageFunc.setColor('#3C4959', '#D7D9CC', '#BF5A5A', '#F2F2DF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D7D9CC', '#3C4959', '#BF5A5A', '#F2F2DF', 'black');
            }
            document.getElementById('qTitle').innerHTML=
            "온도 세계기록";
            document.getElementById('question').innerHTML=
            "인간이 만든 가장 높은 온도는 핵폭발에서 만들어진 1억°C 이다.";
            questionPageFunc.answerAndComment('x',
            "인간이 만든 가장높은 온도는 유럽 입자물리연구소의 거대 강입자가속기에서 만들어진 5.5조°C 입니다. 이는 광속에 가까운 속도로 가속시킨 납 이온을 충돌시켜 만들었습니다.");
            break;
    }
}