//이 파일은 qSource 파일과 같이 호출해서 사용함

//문제 파일에서 호출함
//qSource 파일에서 호출함
function questions(a) {
    switch(a){
        case 0:
            questionPageFunc.setColor('#F2ECCE', '#F2DEA2', '#BF9A84', '#A6746F', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#010D26', '#071A40', '#6E8C2E', '#164F73', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "우주의 나이";
            document.getElementById('question').innerHTML=
            "우주의 시작 이후 100억년 이상의 시간이 지났다.";    
            //qSource 를 호출함
            questionPageFunc.answerAndComment('o', 
            "빅뱅 이후 137억 7(±4)천만년이 경과했습니다.");
            break;
        case 1:                         //작은원, 중간원, 큰 원, 배경, 글자색
            questionPageFunc.setColor('#BF6734', '#8C2108', '#590202', '#260101', 'white');
            if(btnCnt >= 1){//버튼이 눌린 횟수. qSource에 있음
                questionPageFunc.setColor('#0D0D0D', '#AC78FF', '#FFFFFF', '#DBC4FF', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "가장 큰 단일 천체";
            document.getElementById('question').innerHTML=
            "발견된 가장 큰 단일 천체는 적색 초거성 중의 하나이다.";
            questionPageFunc.answerAndComment('x',
            "발견된 가장 큰 단일 천체는 초대질량 블랙홀중 하나인 TON 618입니다.\
            지름이 3,960억 km에 달하는 블랙홀로 태양의 660억 배의 질량을 가지고 있으며, \
            흡수중인 물질을 마찰열로 가열해 태양의 140조 배에 달하는 빛을 방출하고 있습니다.");
            break;
        case 2:
            questionPageFunc.setColor('#403824', '#BFB8A4', '#736440', '#8A8577', 'white');
            document.getElementById('qTitle').innerHTML=
            "명왕성의 크기";
            document.getElementById('question').innerHTML=
            "명왕성은 달보다 작다.";
            questionPageFunc.answerAndComment('o', 
            "명왕성의 지름은 2,376km, 달의 지름은 3,474km로 명왕성은 달보다 작습니다.");
            break;
        case 3:
            questionPageFunc.setColor('#F2F2F2', '#F2E5BD', '#D9C8A9', '#AEC1C9', 'black');
            document.getElementById('qTitle').innerHTML=
            "태양의 크기";
            document.getElementById('question').innerHTML=
            "태양은 우주의 별들 중 비교적 큰 편에 속한다.";
            questionPageFunc.answerAndComment('o', 
            "태양은 상위 1% 정도의 질량을 가진 G형 주계열성 입니다.");
            break;
        case 4:
            questionPageFunc.setColor('#243D40', '#F2CA80', '#1D2F40', '#101B24', 'white');
            document.getElementById('qTitle').innerHTML=
            "우리 은하의 크기";
            document.getElementById('question').innerHTML=
            "우리 은하는 국부 은하군에서 가장 큰 은하이다.";
            questionPageFunc.answerAndComment('x',
            "국부 은하군은 우리 은하를 포한한 40개 이상의 은하 집단이며\
            우리 은하는 그곳에서 두번째로 큰 은하입니다.<br>\
            국부 은하군에서 가장 큰 은하는 안드로메다 은하 이며<br>\
            지름 220,000광년으로 우리 은하의 두배정도의 크기를 지니고 있습니다.");
            break;
        case 5:
            questionPageFunc.setColor('#164F73', '#6E8C2E', '#071A40', '#010D26', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#010D26', '#071A40', '#6E8C2E', '#164F73', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "우주의 중심";
            document.getElementById('question').innerHTML=
            "지구는 관측 가능한 우주의 중심이다";
            questionPageFunc.answerAndComment('o', 
            "빛이 지구에 도달해 관측할 수 있는 범위의 우주를 관측 가능한 우주라고 합니다.\
            빛의 속도가 유한하기 때문에 관측 가능한 우주는 지구를 중심으로 구면을 이루며,\
            오래전 방출된 빛이 지구에 도달함에 따라 점점 확장되고 있습니다. 사실 개인의 입장에서 관측 가능한 우주의 중심은 자기 자신입니다.");
            break;
        case 6:
            questionPageFunc.setColor('#000000', '#072740', '#1A3F5B', '#101B24', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#243D40', '#F2CA80', '#1D2F40', '#101B24', 'white');
            }
            document.getElementById('qTitle').innerHTML=
            "암흑물질";
            document.getElementById('question').innerHTML=
            "암흑물질은 검은색으로 보인다";
            questionPageFunc.answerAndComment('x', 
            "암흑물질은 전자기파로 관측되지 않고 오직 중력을 통해서만 존재한다는것을 알 수 있는 물질입니다. 검다기보단 투명하다고 할 수 있겠습니다");
            break;
        case 7:
            questionPageFunc.setColor('#BF8756', '#D9AF8B', '#8C7764', '#0D0D0D', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#1B2459', '#446FF2', '#395BBF', '#0D1526', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "가장 강한 폭풍";
            document.getElementById('question').innerHTML=
            "태양계에서 가장 강한 바람이 부는 행성은 목성이다.";
            questionPageFunc.answerAndComment('x', 
            "태양계에서 가장 강한 바람이 부는 행성은 해왕성으로 \
            해왕성의 폭풍의 풍속은 2100km/h에 이릅니다.");
            break;
        case 8:
            questionPageFunc.setColor('#0D0D0D', '#F2AD85', '#BF573F', '#59271C', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#000000', '#141414', '#1C1919', '#191716', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "블랙홀의 소멸";
            document.getElementById('question').innerHTML=
            "블랙홀도 오랜 시간이 지나면 언젠가는 사라진다.";
            questionPageFunc.answerAndComment('o', 
            "사건의 지평선 주변에서 일어나는 양자 요동으로 인해 블랙홀의 질량이 줄어드는 현상을 호킹 복사라고 합니다.\
            태양질량의 블랙홀이 호킹 복사로 소멸될 때까지 걸리는 시간은\
            2x10^66년 정도로 계산되며 관측된 가장 큰 블랙홀 TON 618이 소멸하는데 걸리는 시간은\
            6x10^99년 정도로 계산됩니다.");
            break;
        case 9:
            questionPageFunc.setColor('#F2ECCE', '#F2DEA2', '#BF9A84', '#A6746F', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#000000', '#141414', '#1C1919', '#191716', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "우주의 종말";
            document.getElementById('question').innerHTML=
            "우주는 모든 물질이 다시 한 점으로 모이는 것으로 종말을 맞이할 가능성이 높다.";
            questionPageFunc.answerAndComment('x', 
            "우주 전체의 질량이 우주가 팽창하려는 에너지보다 큰 경우\
            우주의 모든 물질이 빅뱅 이전과 같은 상태로 다시 모이는 종말론을 빅 크런치라고 합니다\
            최근의 관측에 따르면 우주 팽창은 더욱 빨라지고 있기 때문에 빅 크런치의 가능성은 거의 없으며\
            우주가 끝없이 팽창하여 긴 시간에 걸쳐 모든 물질이 점차 흩어지는 빅 프리즈로 끝날 가능성이 높습니다.");
            break;
        case 10:
            questionPageFunc.setColor('#141C26', '#778BA6', '#223240', '#495F73', 'white');
            document.getElementById('qTitle').innerHTML=
            "기본 상호작용";
            document.getElementById('question').innerHTML=
            "우주의 기본 상호작용은 4가지이다";
            questionPageFunc.answerAndComment('o', 
            "우주의 기본 상호작용은 중력, 전자기력, 강한핵력, 약한핵력으로 4가지입니다.");
            break;
        case 11:
            questionPageFunc.setColor('#243D40', '#F2CA80', '#1D2F40', '#101B24', 'white'); 
            document.getElementById('qTitle').innerHTML=
            "초은하단";
            document.getElementById('question').innerHTML=
            "우리 은하는 라니아케아 초은하단의 일부이다.";
            questionPageFunc.answerAndComment('o', 
            "우리 은하를 포함한 국부 은하군은 처녀자리 초은하단의 일부이며, 처녀자리 초은하단은 라니아케아 초은하단의 일부입니다. \
            라니아케아는 하와이어로 끝없는 하늘이라는 뜻을 가지고 있으며 그 이름을 딴 초은하단의 길이는 5억 광년에 이릅니다.");
            break;
        case 12:
            questionPageFunc.setColor('#F2DB66', '#F2A81D', '#BF6B04', '#734002', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#D5F2F2', '#B0D1D9', '#8EB1BF', '#72788C', 'black');
            }     
            document.getElementById('qTitle').innerHTML=
            "1광년";
            document.getElementById('question').innerHTML=
            "1광년은 1억 5천만km이다.";
            questionPageFunc.answerAndComment('x', 
            "1광년은 빛이 진공에서 1년동안 진행하는 거리로 약 9조 4600억km 입니다. 1억 5천만km는 지구와 태양의 평균 거리로 태양계 내의 천체 사이의 거리를 나타내는 단위(AU)로 사용됩니다.");
            break;
        case 13:
            questionPageFunc.setColor('#00020D', '#010A26', '#011640', '#073673', 'white');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#00020D', '#010A26', '#011640', '#073673', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "거시공동";
            document.getElementById('question').innerHTML=
            "거시공동(void) 내부엔 암흑물질이 다른곳보다 적다.";
            questionPageFunc.answerAndComment('o', 
            "거시공동이란 은하 필라멘트 사이에 존재하는 은하가 없거나 극소수로 구성된 아주 거대한 공간입니다. \
            이 내부엔 물질 뿐 아니라 암흑물질도 거의 존재하지 않습니다. 우주 물질의 배치는 거시공동을 사이에 둔 은하 필라멘트의 그물과 같은 구조를 나타내는데 \
            이는 초기 우주에서 양자 요동으로 인해 발생한 밀도의 비대칭이 우주의 팽창에 따라 지금의 형태를 이루게 된 것으로 추정되고 있습니다.");
            break;
        case 14:
            questionPageFunc.setColor('#F2F0CE', '#F28972', '#8C3730', '#260B01', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#F9F5F8', '#DCE4F1', '#C1C9D6', '#9CAABA', 'black');
            }     
            document.getElementById('qTitle').innerHTML=
            "별빛";
            document.getElementById('question').innerHTML=
            "항성은 핵분열을 통해 에너지를 얻는다";
            questionPageFunc.answerAndComment('x', 
            "항성은 핵융합을 통해 에너지를 얻습니다. 핵융합은 고에너지 상태에서 원자핵들이 융합되어 더 무거운 원자핵이 되는 반응을 의미하며, 이때 손실된 질량이 에너지로 방출됩니다.");
            break;
        case 15:
            questionPageFunc.setColor('#FFFEF5', '#F0F7E8', '#DBE8CF', '#BAD1B5', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#33818C', '#FFBE76', '#2A5D73', '#142436', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "태양의 최후";
            document.getElementById('question').innerHTML=
            "태양은 최후에 초신성 폭발로 생을 마감한다";
            questionPageFunc.answerAndComment('x', 
            "태양 질량의 항성은 초신성을 일으키지 못합니다. 약 50억년 후 적색거성이 된 태양은 항성풍으로 자신의 외피를 날려보내 행성상 성운을 형성하고 \
            중심에 지구 크기의 백색외성을 남겨놓는것으로 최후를 맞이하게 됩니다.");
            break;
        case 16:
            questionPageFunc.setColor('#FFFEF5', '#F0F7E8', '#DBE8CF', '#BAD1B5', 'black');
            if(btnCnt >= 1){
                questionPageFunc.setColor('#33818C', '#FFBE76', '#2A5D73', '#142436', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "감마선 폭발";
            document.getElementById('question').innerHTML=
            "감마선 폭발은 일반적인 초신성보다 강하다.";
            questionPageFunc.answerAndComment('o', 
            "감마선 폭발은 우주에서 관측되는 가장 강한 전자기파 발산 현상으로서 태양이 일생동안 내는 에너지보다 많은 에너지를 수 초 사이에 방출합니다. \
            극히 좁은 영역으로 에너지가 집중되어 방출되는것이 특징이며 원인으론 초거대 항성의 붕괴와 중성자별의 충돌이 있습니다.");
            break;
        case 17:
            questionPageFunc.setColor('#FFFEF5', '#F0F7E8', '#DBE8CF', '#BAD1B5', 'black');//
            if(btnCnt >= 1){
                questionPageFunc.setColor('#33818C', '#FFBE76', '#2A5D73', '#142436', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "가장 오래사는 별";
            document.getElementById('question').innerHTML=
            "가장 수명이 긴 종류의 항성은 청색 주계열성이다.";
            questionPageFunc.answerAndComment('x',
            "가장 수명이 긴 종류의 항성은 적색외성으로 태양질량의 절반 이하의 질량을 가진 작고 어두운 항성들입니다. 이들의 수명은 일반적으로 10조 년 이상으로 추정되는데 이는 현재 우주의 나이의 수백 배 이상에 달하는 시간입니다.");
            break;
        case 18:
            questionPageFunc.setColor('#FFFEF5', '#F0F7E8', '#DBE8CF', '#BAD1B5', 'black');//
            if(btnCnt >= 1){
                questionPageFunc.setColor('#33818C', '#FFBE76', '#2A5D73', '#142436', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "뜨거운 행성";
            document.getElementById('question').innerHTML=
            "태양계에서 표면온도가 가장 높은 행성은 수성이다.";
            questionPageFunc.answerAndComment('x',
            "태양계에서 가장 표면온도가 높은 행성은 금성입니다. 극단적 온실효과로 인해 태양에 가까운 수성보다 높은 온도를 가지게 되었습니다.");
            break;
        case 19:
            questionPageFunc.setColor('#FFFEF5', '#F0F7E8', '#DBE8CF', '#BAD1B5', 'black');//
            if(btnCnt >= 1){
                questionPageFunc.setColor('#33818C', '#FFBE76', '#2A5D73', '#142436', 'white');
            }     
            document.getElementById('qTitle').innerHTML=
            "새로운 별";
            document.getElementById('question').innerHTML=
            "우리 은하에선 매년 태어나는 별의 수는 100개 이하다.";
            questionPageFunc.answerAndComment('o',
            "우리 은하엔 수천억개의 별이 있지만 매년 태어나는 별은 약 3개 입니다. 우주의 별들은 이미 대부분 만들어진 상태입니다.");
            break;
    }
}
