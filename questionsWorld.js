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
            "인간이 수렵채집인으로 살았던 시간이 문명인으로 살았던 시간보다 더 길다";
            //qSource 를 호출함
            questionPageFunc.answerAndComment('o', 
            "구인류는 약 300만년 전, 현생인류는 약 30만년 전에 탄생했습니다. \
            기록이 남아있는 가장 오래된 문명은 기원전 약 6,500년 전에 탄생한 수메르 문명입니다.\
            둘을 비교해보면 인류는 지구에 탄생한 후 대부분의 기간을 수렵채집인으로 살아왔음을 알 수 있습니다.");
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
            "상호확증파괴란 핵 선제공격을 받은 이후에도 핵무기를 통한 보복공격으로 \
            상대국을 파괴할 수 있는 국가들 간에 이루어지는 관계를 의미합니다. \
            단순 핵무기 보유만이 아니라 핵공격을 받은 후에도\
            상대 국가를 파괴할 수 있는 타격능력을 보유해야 상호확증파괴가 성립합니다.");
            break;
        case 2:
            questionPageFunc.setColor('#050037', '#FFFFFA', '#6F0E11', '#050037', 'white');
            document.getElementById('qTitle').innerHTML=
            "가장 큰 영토";
            document.getElementById('question').innerHTML=
            "대영제국은 역사상 가장 큰 영토를 가졌던 국가이다.";
            questionPageFunc.answerAndComment('o', 
            "대영제국은 전세계 육지 면적의 1/4을 차지하여 해가 지지 않는 나라로 불리었으며 세계 문화와 역사에 큰 영향을 주었습니다.");
            break;
        case 3:
            questionPageFunc.setColor('#73061A', '#BF9515', '#73061A', '#BFA893', 'white');
            document.getElementById('qTitle').innerHTML=
            "로마의 멸망";
            document.getElementById('question').innerHTML=
            "로마 제국은 476년에 완전히 멸망하였다.";
            questionPageFunc.answerAndComment('x', 
            "476년은 당시 양분된 로마 제국 중 서로마 제국의 멸망 시기이며 이는 유럽의 고대시대와 중세시대를 구분하는 기준이 됩니다. 동로마 제국은\
            1453년 콘스탄티노폴리스(현 이스탄불)이 오스만 제국 에게 함락당하기 전까지 유지되며, 동로마 제국의 멸망 또한 중세시대와 근대시대를 구분하는 기준이 됩니다.");
            break;
        case 4:
            questionPageFunc.setColor('#004990', '#EAEBE7', '#118ACB', '#004990', 'white');
            document.getElementById('qTitle').innerHTML=
            "NATO";
            document.getElementById('question').innerHTML=
            "대한민국은 NATO의 일원이다";
            questionPageFunc.answerAndComment('x',   
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
            questionPageFunc.setColor('#3C7E60', '#64D99B', '#45965E', '#E9E7CF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#2B3361', '#921D16', '#F2ECE4', '#921D16', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "대륙의 형태";
            document.getElementById('question').innerHTML=
            "유라시아 대륙의 형태는 비교적 문명 발전에 유리했다.";
            questionPageFunc.answerAndComment('o',   
            "유라시아 대륙의 형태는 가로로 길어 같은 위도를 공유하는 지역이 많습니다.\
            기후가 비슷하기 때문에 한 지역의 작물과 가축이 다른 지역에 적응하기 쉬웠으며, \
            문명들 간에 문화와 지식이 빠르게 전파되어 문명발달을 가속시키는 결과를 낳았습니다.");
            break;
        case 8:
            questionPageFunc.setColor('#3C7E60', '#64D99B', '#45965E', '#E9E7CF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#2B3361', '#921D16', '#F2ECE4', '#921D16', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "이란인";
            document.getElementById('question').innerHTML=
            "이란의 주요 민족은 아랍인이다.";
            questionPageFunc.answerAndComment('x',   
            "'이란'은 '아리아인의 땅' 이라는 뜻을 가지고 있으며 이름대로 이란의 주요 민족은 이란계 아리아인 입니다.");
            break;
        case 9: //
            questionPageFunc.setColor('#3C7E60', '#64D99B', '#45965E', '#E9E7CF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#2B3361', '#921D16', '#F2ECE4', '#921D16', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "그레이트 게임";
            document.getElementById('question').innerHTML=
            "그레이트 게임은 제국주의 시대 영국과 프랑스의 패권 경쟁을 의미한다.";
            questionPageFunc.answerAndComment('x',   
            "그레이트 게임은 제국주의 시대에 유라시아 대륙의 패권을 두고 영국과 러시아가 벌인 경쟁을 의미하며 당시 세계 정세에 큰 영향을 미쳤습니다.");
            break;
        case 10: //
            questionPageFunc.setColor('#3C7E60', '#64D99B', '#45965E', '#E9E7CF', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#2B3361', '#921D16', '#F2ECE4', '#921D16', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "전염병";
            document.getElementById('question').innerHTML=
            "인류사의 치명적인 전염병들은 대부분 야생동물과의 접촉에서 시작되었다.";
            questionPageFunc.answerAndComment('x',   
            "역사에 이름을 남긴 치명적인 전염병들은 대부분 가축의 질병이 변이되어 인간에게 전염된 것으로 시작되었습니다. \
            유라시아 대륙의 인간들은 오랜 시간동안 이들에 대한 저항력을 길러나갔고 유럽인의 아메리카 대륙 탐사는\
            이러한 질병에 저항력이 거의 없는 아메리카 원주민들을 대부분 절멸시키는 결과를 낳았습니다.\
            .");
            break;
        
            
    }
}