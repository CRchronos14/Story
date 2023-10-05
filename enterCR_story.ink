VAR your_temper = 0 //  玩家態度

VAR six_first_impression = 1 //  第一印象
VAR six_Favorability_Rating = 0 //  6/28好感度
VAR six_decide = 0  //  6/28的判斷

VAR NPC_Name = "青年" //    6/28名稱

VAR who_NPC_times = 0
VAR who_I_times = 0
VAR book_times = 0
VAR box_times = 0

~ six_decide = six_first_impression*(six_Favorability_Rating+20)



歡迎來到Chronos。

您可能會開始思考「這是什麼情況?」
別擔心，因為您再如何絞盡腦汁也無法用小巧精緻的腦袋明瞭這一切。
只需要牢記以下一點 : 您已經死了——由衷希望您明白「死亡」這個單詞的意義。
無法歸屬的靈魂，也就是您，榮幸或不幸地被帶到了這裡。
接下來請您睜開雙眼，與此同時，也別忘記自己的身分。->START


=== START ===  //遊戲最開始的節點
    * [START]
        你睜開眼，一眼就看見了面前通道後的空間——那是一個白色圓形的大廳，四周環繞著數扇門，中間有著圓環狀的櫃台，你仔細一看，櫃檯上擺放著轉盤式復古電話、一本冊子、一個小櫃子以及一個類似於打字機的工具。
        而最顯眼的部分則是櫃檯後方正對著你微笑的青年。
        你不明白自己為何出現在這裡，但那位青年似乎是這裡唯一能溝通的對象。 -> White_Hall.First
    
    * [END]你以為你擁有選擇，但其實路走到底，所有人的歸宿都在那裏。->START


=== White_Hall === //白色大廳
    
    = First  //第一次進到白色大廳
        + [前往白色大廳]  
            回過神來，你已經站在大廳正中央的櫃檯前了，面前的青年依舊保持著過分完美的笑容。-> Option_0
    
    = Other //其他每次進到白色大廳時
        這是一個白色圓形的大廳，四周環繞著數扇門，中間有著圓環狀的櫃台，你仔細觀察了一下，發現櫃檯上擺放著轉盤式復古電話、一本冊子、一個小櫃子以及一個類似於打字機的工具。->Option_0
        
    = Option //NPC對話選項
    
        // 關於CR的說明廣播(主線)
        * {not Where_Is_It} [這裡是哪裡] -> Where_Is_It 
    
        // 關於CR
        + {Where_Is_It } [可以告訴我更多關於Chronos的事情嗎] ->About_CR
        
        // 回電(主線)
        + {Where_Is_It } [我{Phone:真的不能}{not Phone:可以}播電話回去嗎？]
        「我{Phone:真的不能}{not Phone:可以}播電話回去嗎？」-> Phone
        * {not Where_Is_It } 我可以打電話嗎  ->Phone
        
        // 關於6/28(互動主線)
        + {not Who_Are_You }[你是誰{Who_Are_You:(重複詢問)}]「你是誰？」
        ->Who_Are_You.First
        + {Who_Are_You && who_NPC_times < 5}[你是誰] 「你是誰？」
        ~ who_NPC_times++
        ->Who_Are_You.Again
        
        //(6/28互動支線)
        * {Who_Are_You} [可以說更多關於你的事嗎?]-> Who_Are_You.About
        + {Who_Are_You && Who_Are_You.About && Who_Are_You.Option < 6} [可以說更多關於你的事嗎?] 
       -> Who_Are_You.Option
        
        + {Who_Are_You && not Who_Are_You.Bishop} [Bishop是什麼?]「Bishop是什麼？」 ->Who_Are_You.Bishop
        
        //(我是誰 -- 玩家本質)
        + 我是誰(選了會睡著結束) ->End_Story
        * {Where_Is_It && not Bag} 如何召喚面板? 
        你正想詢問如何召喚面板，隨即發現面前突然出現了藍色的屏幕，你似乎只要想一下面板他就會出現。
        ->Bag
        
        //回到玩家行動選項
        + [算了，沒事] ->Option_0
    
    = Option_0 //玩家行動選項
    
        + [與{NPC_Name}對話] -> Option
        
        //聽過廣播才可召喚面板
        + {Where_Is_It} [{!嘗試|}召喚面板]你{!成功的|}召喚了系統面板。
        -> Bag
        
        + {not Touch_Cabinet.Other}[觸摸桌面上的小櫃子]你觸摸桌面上的小櫃子。
        {->Touch_Cabinet|->Touch_Cabinet.Other}
        * [拿起桌面上的小冊子]你拿起桌面上的小冊子。 ->Touch_Book
        
        + {TURNS_SINCE(-> Where_Is_It) > 100} 你逐漸熟悉這裡，你開始覺得有點無聊，昏昏欲睡 ->End_Story


=== Touch_Book === //碰觸書本

= first
~ six_decide = six_first_impression*(six_Favorability_Rating+20)
    { 
        -six_decide <= 20:
            ~ six_first_impression = 0.8
            「難道你不知道亂碰他人的東西很失禮嗎?」{NPC_Name}阻止了你的行動，並將小冊子收了起來。
            ~ six_Favorability_Rating--
        -six_decide > 20:
            「雖然給你看也沒關係......」
            
            你看到了一堆名字與編號以及一些你看不懂的符號
            
            + 這是什麼名冊嗎
                【就是】-> White_Hall.Option_0
            +道歉
                【0000】
            
            
            -> White_Hall.Option_0
        
    }
    
    
    
    -> White_Hall.Option_0


=== Touch_Cabinet === //碰觸小櫃子


= First
    ~ six_decide = six_first_impression*(six_Favorability_Rating+20)
    { 
        -six_decide <= 20 :
            ~ six_first_impression = 0.8
            「難道你不知道亂碰他人的東西很失禮嗎?」{NPC_Name}阻止了你的行動。
            ~ six_Favorability_Rating--
        -six_decide > 20:
            「你很好奇裡面的東西嗎?」
            
            + 對
                「沒辦法，誰叫小貓咪都這麼努力了呢。」{NPC_Name}把下巴抬起、往櫃子那邊示意你打開。
                -> White_Hall.Option_0
                
            +道歉
                【0000】
            
            
            -> White_Hall.Option_0
        
    }
    
    
    
    -> White_Hall.Option_0
    
= Other
    ~ six_decide = six_first_impression*(six_Favorability_Rating+20)
    { 
        -six_decide <= 20 :
            ~ six_first_impression = 0.8
            「......真不想再說一次相同的話語。」{NPC_Name}無語地阻止了你的行動。
            ~ six_Favorability_Rating = six_Favorability_Rating-3
        -six_decide > 20:
            「你很好奇裡面的東西嗎?」
            
            + 對
                「沒辦法，誰叫小貓咪都這麼努力了呢。」{NPC_Name}把下巴抬起、往櫃子那邊示意你打開。
                -> White_Hall.Option_0
                
            +道歉
                【0000】
            
            
            -> White_Hall.Option_0
        
    }
    
    
    
    -> White_Hall.Option_0


=== Where_Is_It=== // 關於CR的說明廣播(主線)

    = First //6/282的開場 *隨好感度有所差別
    
    {
    
        - six_decide == 20 :
            「這裡是哪裡？」你對著{NPC_Name}開口問道。
            
            「這裡是Chronos，靈魂的希望之地，恭喜您，玩家☐ ☐，編號☐ ☐ ☐ ☐——」{NPC_Name}的聲音像是被消音了一樣，一些字眼消失了，他露出了困惑的表情，又再次嘗試開口，「玩家☐ ☐⋯⋯？」
            
            {NPC_Name}小聲地又說了你聽不見的兩個字眼，一臉迷惘地望著你，隨後像是意識到了什麼露出了慌亂的表情漲紅了臉，他輕咳兩下，故作冷靜，開始播電話——
            
            嘟——嘟——
            
            他冷靜地將話筒遞到你面前，而你反射性的接了過來將話筒放在耳邊，你聽見另一邊的聲音響起，帶著因電磁訊號不穩而導致的雜音：->Introduce
    
        - six_Favorability_Rating < 20 :
            「這裡是哪裡？」你對著{NPC_Name}開口問道。
            
            他看了你一眼並沒有回話，低下頭轉了一圈電話轉盤——
            
            嘟——嘟——
            
            {NPC_Name}冷靜地將話筒遞到你面前，而你反射性的接了過來將話筒放在耳邊，你聽見另一邊的聲音響起，帶著因電磁訊號不穩而導致的雜音：->Introduce
    
        - else:
                   「這裡是哪裡？」你對著那位6/28開口問道。
            「老實說我不太擅長說明......你不介意我直接撥廣播吧?」6/28 有點靦腆的笑了一下，他睜著好看的綠色眼眸期待地望著你。
            	+  [同意]你同意了他的請求。
            	    他對你露出了孩子般快樂的笑容，然後開始播電話——
                嘟——嘟——
                他歡快的將話筒遞到你面前，而你反射性的接了過來將話筒放在耳邊，你聽見另一邊的聲音響起，帶著因電磁訊號不穩而導致的雜音： ->Introduce
            
            	+ [不同意]
            		「哈，就算你不同意我也要這樣做!」他快速地播了電話，然後在你還沒反應過來時將話筒塞到你手裡，一副得逞的表情。
    	你無奈地看了6/28一眼，只能將話筒放在耳邊，你聽見另一邊的聲音響起，帶著因電磁訊號不穩而導致的雜音： ->Introduce
    }
    
    = Introduce
    
    「歡迎來到Chronos的系統空間，幸運的玩家們，恭喜你們被主神選中，本應在原本世界死去的你們將在這裡獲得重生的機會。」
    
    「你們一定很困惑現在的情況，但不論如何，請先認真傾聽以下關於Chronos的說明，提醒你，本廣播只會播放一次。」
    
    「Chronos是什麼，有很多說法，我們Bishop最喜歡用法是希望永存的應許之地，而你們人類或許會稱之為天堂、地獄、陰間或仙境⋯⋯，總結來說就是死後的中繼站，當然，對於部分的玩家們來說也有可能是終點站。」
    
    「在Chronos的每一個人都將獲得自己獨有的技能，你可以召喚你的面板，查看自己的狀態、積分和技能道具，在系統空間時可額外查看地圖、交流平台與兌換系統。」
    
    「積分，是在Chronos中最重要的物品，它源自於你參與的任何活動—包含主副本任務、不定期系統遊戲以及賭場活動，並決定了你的排名、地位以及重生的機會。所有玩家的初始積分為 100 點，且在系統中每經過 1 天扣除 1 點生存積分。」
    
    「在這裡的任何『東西』包含食物、衣服、道具與技能皆需以積分進行購買或是以物換物。系統面板中的三個特殊兌換選項【回家】、【新生】、【復甦】只允許以積分進行兌換。」
    
    「關於副本，每一陣子，系統空間內會出現一扇新的門，玩家可以通過門去到不一樣的『世界』，所有的門各不相同，且不會重複。」
    
    「在副本期間，玩家可能面臨各種生理或心理上的危險，請確保自己能安全健康的活著直到離開副本空間，只要能成功離開，不管多嚴重的傷口醫護中心的Bishop都能將你從鬼門前帶回來，但請注意，在副本中死亡即為真正意義上的Game over，不管是靈魂或是身體都將永遠停留在副本之中。」
    
    「玩家們請各位努力進行各項副本任務！」
    
    「獲得積分，換取生存、新生或復活。」
    
    電話那頭落下最後一句話，回歸「嘟——嘟——」的忙音。
    
    
    
    {
    
        - six_decide == 20:
            ⋯⋯字太多了，你發現你小巧的腦袋裝不下這些資訊——你並不能完全明白電話後頭的話語，於是你轉頭看向那位臉上潮紅尚未退去的青年。 ->White_Hall.Option
    
        - six_Favorability_Rating < 20:
             ⋯⋯字太多了，你發現你小巧的腦袋裝不下這些資訊——你並不能完全明白電話後頭的話語，於是你轉頭看向{NPC_Name}。 ->White_Hall.Option
    
        - else:
                  ⋯⋯字太多了，你發現你小巧的腦袋裝不下這些資訊——你並不能完全明白電話後頭的話語，於是你轉頭看向 6/28。 ->White_Hall.Option
    }

=== About_CR ===

「例如？」

+ 積分是什麼?(no)
+ 副本是什麼?(no)
+ 玩家指的是我嗎?(no)
+ 返回 ->White_Hall.Option_0

-

->White_Hall.Option


=== Who_Are_You ===

    = Again
        {who_NPC_times >= 1 && who_NPC_times <= 3: 
            {!「你剛剛不是問過了嗎?」| 「怎麼了嗎?」 |「你沒事吧?」}
        }
        
        {who_NPC_times == 4 && six_Favorability_Rating < 3: 「你的腦袋該鍍鋅了，對吧?」}
        
        {who_NPC_times == 4 && six_Favorability_Rating >= 3: 「親愛的，我不太喜歡被這樣試探。」6/28的笑容收斂了一些。}
        
        {
            -who_NPC_times == 4 : 
                ~ six_Favorability_Rating--
            -who_NPC_times == 5: 
                ~ six_Favorability_Rating = six_Favorability_Rating - 3
            }
            
        {who_NPC_times == 5 : 6/28靜靜看了你一會，嘆了一口氣，「你是故意的嗎?真不可愛呢。」}
    
        -> White_Hall.Option
    
    = First
        「我?我叫做 6/28 ，替班的Bishop。」青年如此自我介紹。
        ~  NPC_Name = "6/28"
        ~ who_NPC_times++
        
        -> White_Hall.Option_0
        
    = About
        {not Where_Is_It && not Touch_Cabinet && not Touch_Book: 
            ~six_first_impression = 1.2
            }
        「你對我感到好奇嗎?」6/28 眼睛亮了起來。
        ~ six_Favorability_Rating++
        
        * [對]「對。」
        ~ six_Favorability_Rating++
        * [難道我不該感到好奇嗎] 「難道我不該感到好奇嗎？」
        * [畢竟這裡只剩下你和我]「畢竟這裡只剩下你和我。」
        -「也是，我想想......我呢，名字叫 6/28 ，興趣是交朋友。原本的工作並不是站櫃檯的，但最近被臨時抓來替班......大概是這樣吧？你有什麼其他好奇的部分嗎?」->Option
    
    = Option   
        * 你原本是做什麼的？
        * 我可以和你交朋友嗎？
        ~ six_Favorability_Rating++
        * [為什麼叫做6/28?] -> The_origin_of_the_name
        * 除了交朋友以外呢?你還喜歡什麼?
        「打電話吧，可以遇到很多不一樣的人，跟很多不同的人交朋友。」6/28 笑了笑的，語氣有點像是在開玩笑，聽不出真假。
            ** {not Where_Is_It}這裡{not Phone:真的不}可以打電話嗎？->Phone
            ** {Where_Is_It}這裡可以回撥電話嗎？->Phone
        
        * 你在這裡很久了嗎? 
            「比起這個問題，你應該先定義什麼叫做『很久』。」6/28用食指點著自己的下唇，一副正在思考的樣子。「又或者先把愚蠢的哲學問題擺在你我都看不見的角落。」
         -   
        {CHOICE_COUNT()>0:-> Option}
        {CHOICE_COUNT() == 0:->White_Hall.Option_0}
        
    
    = Bishop
        「管理者之類的存在？或許可以這麼說。」他歪著頭轉了轉眼珠。
        「更詳細一點，是協助運行一切的『人們』。」
        
        -> White_Hall.Option_0
        
    = The_origin_of_the_name
        「為甚麼會叫做 6/28？」你很好奇，6/28 聽上去根本不像名字。
        「因為我是二十八月六日出生的——如果你要相信，那我也沒辦法。」
        
        * [那是什麼意思] 「那是什麼意思？」
        「就是那個意思。如果你硬要說哪個，肯定不是你腦袋裡的那個。」-> Option
        
        * [你還真可惡]「你還真可惡」你嘴上碎念著。
        6/28 愉悅地笑了笑。 
        ~ six_Favorability_Rating ++
        
        -> Option
    

=== Phone ===


    {
    
        - six_Favorability_Rating <= 0:
            「不可以。」-> White_Hall.Option
            
        - six_Favorability_Rating > 0 && six_Favorability_Rating <=3:
        「取決於你的表現囉。」-> White_Hall.Option_0

            
        - six_Favorability_Rating >3:
            「如果你想的話......」-> Call
    }


    = Call
            「其實就算你回撥它們也不一定會回應的，最近內部很忙啊。」6/28將手肘撐在櫃檯上，一隻手托著腮、一邊說著一邊用另一隻手轉著電話輪盤撥號。
        
        * 你們在忙什麼（忙副本籌備）
        * 沒關係
        * 你不需要去「內部」幫忙嗎?
        -
        -> White_Hall.Option
        
    = 0_Shop //商店
    -> White_Hall.Option_0

=== Bag ===
    ~ temp lines = "=================="
     {lines}
    玩家 ☐☐
    編號 ☐☐☐☐☐☐☐☐
    狀態 異常
    積分 0 point
    技能 【上帝視角】
    道具 無
    地圖(鎖)
    交流平台(鎖)
    兌換系統(鎖)

    
     {lines}
    + {NPC_Name=="青年"}[使用技能【上帝視角】]
    【沒有可以選擇使用的對象】 
    -> White_Hall.Option_0
    + {NPC_Name=="6/28"}[使用技能【上帝視角】]
                選擇使用對象 ->Who
    = Who
        + 6/28
        使用技能【上帝視角】(<>
        {1|2|3|4|5|技能使用次數已達上限<>/5) -> White_Hall.Other}
        <>/5)
    ->NPC
    
    + 退出 -> White_Hall.Other

=== NPC === 
    ~ temp lines = "=================="
     {lines}
    NPC : {NPC_Name}
    ~ six_decide = six_first_impression*(six_Favorability_Rating+20)-20
    目前好感度：{six_decide}
     {lines}
    狀態：*隨好感度和角色個性產生不同點數
     
    + [退出]
    { once:
    	- {NPC_Name} 朝著你微笑 。
    	- {NPC_Name} 困惑地看著你 。
    	- {NPC_Name} 用手指敲了敲桌子 。
    	- {NPC_Name} 正盯著你，看起來在思考著什麼 。
        - {NPC_Name} 露出有些微妙的表情。
        -「請不要再看了」{NPC_Name} 說，「我並不是很喜歡被窺視內心。」他抱著胸、上半身微傾，嘴角掛著微笑，直勾勾看著你說道。
    }
    
    -> White_Hall.Other


=== End_Story ===
    - 你重新閉上眼，睡著了.
        -> END
        
        
=== End_Die ===
-> White_Hall.Option_0

=== End_Work ===
-> White_Hall.Option_0
