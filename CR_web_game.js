var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"START"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"START":[{"->":".^.wake"},{"wake":[["^　　你醒來時，已經開始墜落。","\n","^　　獵獵風聲簇擁著你，你察覺髮絲被糊上自己的臉，可你沒有力氣撥開。","\n","^　　你隔著眼皮看見顏色形狀變換的光班浮在黑暗之中，它們籠著朦朧的噪點，你看得越仔細，它跑得就越快。","\n","^　　不一會兒，光班吞噬了黑暗，化為純白的光，你的視野被照亮了。","\n","^　　這時你終於找回了呼吸，好似之前忘記一樣。","\n","^　　你大口呼吸，身體內部多了一股力氣。","\n","^　　你終於睜開眼睛。","\n","ev","str","^查看自己","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"START.first"},{"#f":5}]}],{"#f":1}],"first":[["^　　你低頭查看自己，仍有些暈眩。","\n","^　　身上的衣服被人換過了，你從沒穿過這種純白的連身衣褲。","\n","^　　你身處於一個以純白無機質建成的圓廳，四周環繞著數扇門，你可以繞滿整整一圈。","\n","^　　而中間是櫃台，一個人影坐於其後，似乎在忙碌些什麼。","\n","^　　櫃檯上擺放著辦公用具，出乎意料的是轉盤式復古電話以及一個類似於打字機的工具。","\n","^　　你不知道自己到底闖入了什麼地方，像是突然間被抽換了時空一樣。","\n","^　　你決定……","\n",["ev",{"^->":"START.first.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^　　走向人影",{"->":"$r","var":true},null]}],["ev",{"^->":"START.first.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^　　睡回去",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"START.first.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"^。","\n","^　　那是一個瘦削的男人。他窩在純黑的沙發裡，他的髮色和皮膚相融，全身皆是一片雪白，襯得他明亮又蒼白。他有滿頭蓬鬆的亂髮，耳旁翹起的髮絲像狐狸的鬃毛，其中一縷飄垂過眼前落於下巴。","\n","^　　當他轉頭時，你注意到他參差不齊的過長鬢髮，和短得出奇的後髮。你想這個人一定是得罪髮型設計師了。偏偏這人五官無有一處歪斜，精準地英俊，能成起這般亂糟糟的造型。","\n","^　　細長的方框眼鏡嵌在他高挺的鼻樑上，鐳射鏡片反射出冰冷的光，你仔細一看，那鏡片上隱隱約約有數字跑動。","\n","^　　他瞧見你，摘下他的眼鏡。他起身笑道：「歡迎來到Chronos，親愛的玩家。」","\n","^　　鐳射光停止了，鏡片恢復成朦朧的墨色。你才注意到他有一雙圓潤的眼，眼尾上挑，濃密的下睫毛鋪在眼瞼。他的唇是這片空白裡最濃郁的艷色。稍薄的唇向外一開，你瞧見他明媚的笑意中，殷紅舌尖隱隱探出，不由心下一悸，說不出是驚艷還是害怕。","\n",["ev","str","^一直盯著看","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^警惕詢問","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^睡回去","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^你一直盯著他看。","\n",{"->":"START.SEE628"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　「你是什麼人？」你問。","\n","^　　他笑著說：「我是6/28，是替代的bishop，姑且算是管理員的存在。」","\n","^　　你聽不懂，但他已經開始展開新的話題。","\n",{"->":"2_SAVE"},{"#f":5}],"c-2":["^ 你閉上眼。","\n","ev",{"VAR?":"628_level_of_interest"},1,"+",{"VAR=":"628_level_of_interest","re":true},"/ev",{"->":"2_SAVE.sleep"},{"->":"2_SAVE"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"START.first.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"^。","\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev",{"->":"2_SAVE.sleep"},{"#f":5}]}],{"#f":1}],"TRY":[{"->":".^.^.SEE628"},{"#f":1}],"SEE628":[["ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　你似乎看見他的瞳孔中泛著一圈狹窄的日輪光圈，一閃便融入一片墨色裡，令人疑心自己眼花。","\n","^　　他問：「怎麼了嗎？」","\n","^　　你的視線讓他說不出他準備好的開場白。","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"CNT?":".^.^"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　他問：「怎麼了嗎？」","\n",{"->":".^.^.^.14"},null]}],"nop","\n","ev","str","^一直盯著看","/str",{"CNT?":".^.^"},2,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^一直盯著看","/str",{"CNT?":".^.^"},1,"==","/ev",{"*":".^.c-1","flg":5},["ev",{"^->":"START.SEE628.0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^視線轉移",{"->":"$r","var":true},null]}],["ev",{"^->":"START.SEE628.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^睡回去",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^你沒有回應，持續地盯著對方看。","\n","^　　他看著你，你似乎聽見很輕微的「嘖」了一聲。","\n","^　　他問：「看夠了沒？」","\n","^　　你小聲道歉。","\n",[["ev",{"^->":"START.SEE628.0.c-0.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^轉移視線",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"START.SEE628.0.c-0.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}]}],{"#f":5}],"c-1":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^你持續地盯著對方看。","\n",{"->":"START.TRY"},{"#f":5}],"c-2":["ev",{"^->":"START.SEE628.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}],"c-3":["ev",{"^->":"START.SEE628.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}]}],{"#f":1}],"#f":1}],"2_SAVE":[["^　　「或許是初來乍到，你還有不適應的地方。」他說，「請不用擔心，你在這裡很安全，只要你聆聽神的隻言片語，神就會保佑你。」","\n","^　　他將手覆蓋在自己的胸口，深深呼吸。","\n","^　　通道雖然空蕩蕩的，幾扇門看上去也稀鬆平常，你卻無法安心，總有一種不祥的預感趴在你心口，壓得你焦躁不安。","\n","^　　他溫和的語氣並不能安撫你，你想趕快離開這個陌生的地方。","\n","^　　","\n","ev","str","^一次詢問多個問題(關於地點、身份與緣由)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^詢問能不能回家","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^等待下文","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　你懷疑自己是不是誤入什麼邪教組織，忍住拔腿就跑的衝動，一次詢問很多問題：「這裡是哪裡，你又是誰，我為什麼在這裡？」","\n","^　　「我是6/28，是今天櫃檯的替班。」他有條不紊的道，「這裡是Chronos，靈魂的希望之地，恭喜您，玩家☐ ☐，編號☐ ☐ ☐ ☐——」","\n","^　　他的聲音像是被消音了一樣，一些字眼消失了，他露出了困惑的表情，又再次嘗試開口，「玩家☐ ☐⋯⋯？」","\n","^　　他開始翻找著一本小冊子，嘴裡喃喃著什麼。","\n",["ev","str","^搶過他的冊子","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^等待","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},2,"-","/ev",{"VAR=":"628_Favorability_Rating","re":true},"^你一把搶過他的冊子。","\n","^　　「嘿。」他沉下了臉，一瞬間你往後退了一步。","\n","^　　他重新掛上笑容。","\n","^　　「這些東西是你不能碰的。」他說，「下次可以先跟我講。」","\n","^　　他並沒有解釋他那些被消音的話。你看著他的臉，只覺得四肢發冷。","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}],"c-1":["^你靜靜地等待他。","\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　他有點困擾地笑笑，說：「畢竟我只是替班，並不清楚這是什麼異常事件。」","\n","^　　你低頭，纏著自己的手指，更加焦躁了。","\n","^　　 ",{"->":"3_WHERE_IS_IT"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["\n","^　　　「那麼，」你仔細篩選自己的措辭，「我什麼時候能回家呢？」","\n","^　　「不。」他說，「你已經死了，永遠不能回家了。死去的靈魂應該歸屬於Chronos，歸屬於神的懷抱。」","\n","^　　他張開雙臂轉了一圈，臉上洋溢著笑容。","\n","^　　「能活在有神的世界，是多麼幸福的事情──你從來沒有體驗過吧？」","\n","^　　","\n",["ev","str","^順從","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^反抗","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　你看著他轉圈，精神狀況不是很穩定的樣子。","\n","^　　你等笑聲平息，才小聲地說：「請和我解釋清楚吧。」","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　「鬼扯，我才不信！」你瞪著他，「你的神只是綁架犯吧，快讓我離開！」","\n","^　　你環顧一圈，並沒有找到出口。","\n","^　　「行吧。」他說，「那只好盡快跟你解釋了。」","\n","^　　你看見他的手放在腰間，那裡掛著奇特模樣的鞭子。","\n","^　　你按捺住自己沸騰的情緒。","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}]}],{"#f":5}],"c-2":["\n","ev",{"VAR?":"628_Favorability_Rating"},2,"+","/ev",{"VAR=":"628_Favorability_Rating","re":true},"^　　","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}]}],{"sleep":["^　　「親愛的玩家，請睜開眼睛。」你聽見男人帶著笑意的聲音，「這是裝睡的一種嗎？」","\n","^　　你睜開眼睛，還有點睏。你看見他的嘴角弧度，好像沒那麼疏離了。","\n",{"->":".^.^"},{"#f":1}],"#f":1}],"3_WHERE_IS_IT":[["^　　他想了想，手伸向復古電話，繞著按鍵轉了一圈，再按一個鈕，你聽到標準無感情的電子合成人聲，來自四面八方的音響。不過你沒有看到哪裡有音響。","\n","^　　他示意你仔細聽廣播內容。","\n","ev","str","^你仔細傾聽","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"4_Teach"},{"#f":5}]}],{"#f":1}],"4_Teach":[["^「歡迎來到Chronos的系統空間，幸運的玩家們，恭喜你們被主神選中，本應在原本世界死去的你們將在這裡獲得重生的機會。」","\n","^　　「你們一定很困惑現在的情況，但不論如何，請先認真傾聽以下關於Chronos的說明，提醒你，本廣播只會播放一次。」","\n","ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「Chronos是什麼，有很多說法，我們Bishop最喜歡用法是希望永存的應許之地，而你們人類或許會稱之為天堂、地獄、陰間或仙境⋯⋯，總結來說就是死後的中繼站，當然，對於部分的玩家們來說也有可能是終點站。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「在Chronos的每一個人都將獲得自己獨有的技能，你可以召喚你的面板，查看自己的狀態、積分和技能道具，在系統空間時可額外查看地圖、交流平台與兌換系統。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「積分，是在Chronos中最重要的物品，它源自於你參與的任何活動—包含主副本任務、不定期系統遊戲以及賭場活動，並決定了你的排名、地位以及重生的機會。所有玩家的初始積分為 100 點，且在系統中每經過 1 天扣除 1 點生存積分。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「在這裡的任何『東西』包含食物、衣服、道具與技能皆需以積分進行購買或是以物換物。系統面板中的三個特殊兌換選項【回家】、【新生】、【復甦】只允許以積分進行兌換。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「關於副本，每一陣子，系統空間內會出現一扇新的門，玩家可以通過門去到不一樣的『世界』，所有的門各不相同，且不會重複，玩家們必須在時間內完成任務才能返回系統空間中並獲得積分。」","\n","^　　「在副本期間，玩家可能面臨各種生理或心理上的危險，請確保自己能安全健康的活著直到離開副本空間，只要能成功離開，不管多嚴重的傷口醫護中心的Bishop都能將你從鬼門前帶回來，但請注意，在副本中死亡即為真正意義上的Game over，不管是靈魂或是身體都將永遠停留在副本之中。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「玩家們請各位努力進行各項副本任務！」","\n","^　　「獲得積分，換取生存、新生或復活。」","\n","^　　電話那頭落下最後一句話，回歸「嘟——嘟——」的忙音。","\n",["ev","str","^轉頭看向青年","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"5_CALL"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"5_CALL":[["^　　「解釋完了。」他說，「聽懂了嗎？」","\n","ev","str","^聽懂了","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^沒聽懂","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^沒在聽","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev","ev",{"VAR?":"628_level_of_interest"},1,"+",{"VAR=":"628_level_of_interest","re":true},"/ev",{"->":"5_CALL.you_know"},{"#f":5}],"c-1":["^;","\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev",{"->":"5_CALL.you_dont_know"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev",{"->":"5_CALL.you_dont_care"},{"#f":5}]}],{"you_know":[["^　　你大致上聽懂了，你問：「剛才我可以召喚面板，是嗎？」","\n","^　　「是的，請依照我的指示做。」他說，「首先，閉上眼睛。」","\n","ev","str","^閉上眼睛","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　你閉上眼睛。","\n","^　　「默念三次我要召喚面板。」","\n",["ev","str","^我要召喚面板","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　這有點傻，你還是照著做了一次。","\n","^　　我要召喚面板。","\n",["ev","str","^我要召喚面板","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　我要召喚面板──數不到第三次，你覺得身體被輕輕震動了一下。","\n","^　　你睜開眼睛，一塊發光的晶亮螢幕就在眼前，上面條列各種資訊。","\n","^　　 ",{"->":"Bag"},"\n","^　　","\n",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"you_dont_know":[["^　　鋪天蓋地的文字向你砸來，你發昏的腦袋更痛了。你茫然地看向他。","\n","^　　他似乎被你的表情取悅：「你看起來很不舒服。過來。」","\n","^　　你不太喜歡他的語氣，但是頭太痛了，只好將腦袋湊過去，手撐在櫃台。","\n","^　　他的手撫上你的臉，指腹抵上太陽穴。你們一瞬間靠得很近，你不知道該看哪裡，只好低垂著眼。他的手心溫熱，卻無端有清涼的風自皮膚滲進你的腦袋，像是一道奇特的力量消弭掉所有昏脹和疼痛。你感覺好多了。","\n","^　　你睜開眼，他的眸子深邃且柔和，裡面。","\n","^　　他拉開距離，好讓彼此的氣息不再交融。","\n","^　　他說：「在心裡默數三遍召喚面板，你就能做到了。」","\n","ev","str","^召喚面板","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　你乖乖照著做了一次。","\n","^　　召喚面板。","\n","^　　召喚面板──數不到第三次，你覺得身體被輕輕震動了一下。","\n","^　　你睜開眼睛，一塊發光的晶亮螢幕就在眼前，上面條列各種資訊。","\n",{"->":"Bag"},{"#f":5}]}],{"#f":1}],"you_dont_care":[["^　　你忍受著長篇大論，終於忍不住了。","\n","^　　「我得回家。」你說，「至少讓我聯繫一下家人。電話借我用一下。」","\n","^　　「你已經死了。」他搖了搖頭，「沒用的。」","\n","ev","str","^堅持","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"5_CALL.you_dont_care.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^妥協",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　你走向電話，大聲說：「我才不會相信，我怎麼可能死了？你肯定是個騙子！」","\n","^　　他抓住你。他比看上去的強壯許多。","\n","^　　他說：「請不要再鬧了。你現在是Chronos的玩家，也許待在這兒，你可以獲得你想要的。」","\n","^　　他的語氣很嚴肅。","\n",["ev","str","^繼續堅持","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"5_CALL.you_dont_care.0.c-0.15.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^妥協",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"628_Favorability_Rating"},1,"-",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　你試圖推搡他。他並不為所動。","\n","^　　你用更大的力氣，他被你推開，你乘機再補一拳，目標是他的臉。","\n","^　　你失敗了。他握著你的拳頭，面上笑意全無。","\n","^　　「根據規章第四章第二十九條，無意願成為玩家且施以反抗者，依情節輕重，Bishop有權處置。」他說，手撫上腰間，將鞭子摘下，輕輕一抖打向地板，響亮的聲音在大廳迴蕩。","\n","^　　你看見鞭子上似乎有一閃而過的光芒，你下意識後退。","\n","^　　他抬起手，一個響指，你的腳被地板上冒出的拘束索纏住了。","\n","^　　你試著抬起腳，繩索反而越纏越緊。奇特的繩紋讓你破皮流血，深深陷入肉裡。","\n","^　　你無法掙脫，重心不穩，跪倒在地。","\n","^　　你看見他一步一步向走來，短靴的腳步聲很響。","\n","^　　他俯視著你。「我給過你機會。」他說。","\n","^　　光線被他的身形蓋過，你壟罩在陰影裡。長長的鞭子劃破空氣落在你的皮肉上。鞭子帶有電流，電流在你的身體裡流竄，你全身抽搐，痛得翻滾。","\n","^　　你失去了意識。","\n",{"->":"BAD_END"},{"#f":5}],"c-1":["ev",{"^->":"5_CALL.you_dont_care.0.c-0.15.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"628_Favorability_Rating"},1,"+",{"VAR=":"628_Favorability_Rating","re":true},"/ev","^　　你洩出憋在胸口的氣，說：「好吧，聽你的，我現在要幹嘛？」","\n","^　　他說：「很高興聽到你這麼說。你可以嘗試在心裡喊召喚面板三次，藉此查看你目前的狀況。」","\n","^　　真蠢。你想。反覆做了好幾次心理建設，你在心裡說：","\n","^　　召喚面板。","\n","^　　召喚面板──數不到第三次，你覺得身體被輕輕震動了一下。","\n","^　　你睜開眼睛，一塊發光的晶亮螢幕就在眼前，上面條列各種資訊。","\n",{"->":"Bag"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"5_CALL.you_dont_care.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","^　　你洩出憋在胸口的氣，說：「好吧，聽你的，我現在要幹嘛？」","\n","^　　他說：「很高興聽到你這麼說。你可以嘗試在心裡喊召喚面板三次，藉此查看你目前的狀況。」","\n",["ev","str","^召喚面板","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　真蠢。你想。反覆做了好幾次心理建設，你在心裡說：","\n","^　　召喚面板。","\n",["ev","str","^召喚面板","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^　　召喚面板──數不到第三次，你覺得身體被輕輕震動了一下。","\n","^　　你睜開眼睛，一塊發光的晶亮螢幕就在眼前，上面條列各種資訊。","\n",{"->":"Bag"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"#f":1}],"Other":[["^你關閉了介面。","\n","ev","str","^召喚面板","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^詢問問題","/str",{"CNT?":".^.^.The_origin_of_the_name"},"!",{"CNT?":".^.^.Option"},"!","||","/ev",{"*":".^.c-1","flg":5},{"c-0":["\n",{"->":"Bag"},{"#f":5}],"c-1":["\n",{"->":"Other.Option"},{"#f":5}]}],{"First":["^「我?我叫做 6/28 ，替班的Bishop。」青年如此自我介紹。","\n",{"->":".^.^"},{"#f":1}],"About":[["^「關於我？」6/28 挑眉反問。","\n","ev","str","^對","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^難道我不該感到好奇嗎","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^畢竟這裡只剩下你和我","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^「對。」","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ 「難道我不該感到好奇嗎？」","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["^「畢竟這裡只剩下你和我。」","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^介紹","\n",{"->":"Other.Option"},{"#f":5}]}],{"#f":1}],"Option":[["ev","str","^可以說說關於你的事嗎？","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^為什麼叫做6/28?","/str","/ev",{"*":".^.c-1","flg":20},["ev",{"^->":"Other.Option.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^你在這裡很久了嗎? ",{"->":"$r","var":true},null]}],{"*":".^.c-3","flg":24},{"c-0":[{"->":"Other.About"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Other.The_origin_of_the_name"},"\n",{"#f":5}],"c-2":["ev",{"^->":"Other.Option.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"->":"Other.long_time"},"\n",{"#f":5}],"c-3":[{"->":"Other"},"\n",{"#f":5}]}],{"#f":1}],"long_time":["^「比起這個問題，你應該先定義什麼叫做『很久』。」6/28用食指點著自己的下唇，一副正在思考的樣子。「又或者先把愚蠢的哲學問題擺在你我都看不見的角落。」","\n",{"->":".^.^.Option"},{"#f":1}],"Bishop":["^「管理者之類的存在？或許可以這麼說。」他歪著頭轉了轉眼珠。","\n","^「更詳細一點，是協助運行一切的『人們』。」","\n","ev","choiceCnt",0,">","/ev",[{"->":".^.b","c":true},{"b":[{"->":"Other"},{"->":".^.^.^.10"},null]}],"nop","\n",{"#f":1}],"The_origin_of_the_name":[["^「為甚麼會叫做 6/28？」你很好奇，6/28 聽上去根本不像名字。","\n","^「因為我是二十八月六日出生的——如果你要相信，那我也沒辦法。」","\n","ev","str","^那是什麼意思","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^你還真可惡","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ 「那是什麼意思？」","\n","^「就是那個意思。如果你硬要說哪個，肯定不是你腦袋裡的那個。」 ",{"->":"Other.Option"},"\n",{"#f":5}],"c-1":["^「你還真可惡」你嘴上碎念著。","\n","^6/28 愉悅地笑了笑。","\n",{"->":"Other"},{"#f":5}]}],{"#f":1}],"#f":1}],"Bag":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^你回到面板介面。",{"->":".^.^.17"},null],"#f":5}],"\n","ev","str","^==================","/str","/ev",{"temp=":"lines"},"ev",{"VAR?":"lines"},"out","/ev","\n","^玩家 ☐☐","\n","^編號 ☐☐☐☐☐☐☐☐","\n","^狀態 異常","\n","^積分 0 point","\n","^技能 【上帝視角】","\n","^道具 無","\n","^地圖(鎖)","\n","^交流平台(鎖)","\n","^兌換系統(鎖)","\n","ev",{"VAR?":"lines"},"out","/ev","\n","ev","str","^使用技能【上帝視角】","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^關閉面板","/str",{"CNT?":"Other"},"!",{"CNT?":"NPC"},2,"<","||","/ev",{"*":".^.c-1","flg":5},"ev","str","^關閉面板","/str",{"CNT?":"Other"},{"CNT?":"NPC"},2,"==","&&","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n",{"->":"Bag.Who"},{"#f":5}],"c-1":["^ ",{"->":"6_Trial"},"\n",{"#f":5}],"c-2":["^ ",{"->":"6_Trial"},"\n",{"#f":5}]}],{"Who":["ev",{"CNT?":"NPC"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^你注意到你的技能，試著用手指點擊。","\n","^　　畫面出現文字：「檢測到可使用對象僅有一位，是否對6/28使用？」","\n","ev","str","^是","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^否","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.5"},{"c-0":["\n","^　　你在心裡點頭。","\n","^　　螢幕切換，自上方開始跑動文字。","\n","^　　 ",{"->":"Bag.USE"},"\n",{"#f":5}],"c-1":["\n",{"->":"Bag"},{"#f":5}]}]}],"nop","^　　","\n","^　","\n","ev",{"CNT?":"NPC"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　你再次使用了一次技能，文字消失，這次浮現了一張圖片。","\n","^　　 ",{"->":"Bag.USE"},"\n",{"->":".^.^.^.16"},null]}],"nop","\n","ev",{"CNT?":"NPC"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　你再次使用了一次技能，文字消失，新出現的文字開始跑動。","\n","^　　~ 628_Favorability_Rating --","\n","^　　 ",{"->":"Bag.USE"},"\n",{"->":".^.^.^.24"},null]}],"nop","\n",{"#f":1}],"USE":["^使用技能【上帝視角】(","<>","\n",["ev","visit",4,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^1",{"->":".^.^.35"},null],"s1":["pop","^2",{"->":".^.^.35"},null],"s2":["pop","^3",{"->":".^.^.35"},null],"s3":["pop","^4",{"->":".^.^.35"},null],"s4":["pop","^5",{"->":".^.^.35"},null],"#f":5}],"\n","<>","^/5)","\n",{"->":"NPC"},{"#f":1}],"#f":1}],"NPC":[["ev","str","^==================","/str","/ev",{"temp=":"lines"},"ev",{"VAR?":"lines"},"out","/ev","\n","^NPC : 6/28","\n","^身分：Bishop","\n","^特徵：狂信者","\n","^個性：表裡不一，耐心少，好面子，掌控欲高，心軟","\n","^愛好：野餐，賭博，保養","\n","^目前好感度：","\n","^狀態：","\n","ev",{"CNT?":"NPC"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^內心活動：","\n","^「好笨。」","\n",{"->":"NPC.0.31"},null]}],"nop","\n","ev",{"CNT?":"NPC"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^內心活動：","\n","^「好睏，想回家。」","\n","^「上次賭博輸了兩百，今天晚上要贏回來。」","\n","^「好想去曬太陽。」","\n","^「我應該快下班了吧。」","\n",{"->":"NPC.0.39"},null]}],"nop","\n","ev",{"CNT?":"NPC"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^「主神......」","\n",{"->":"NPC.0.47"},null]}],"nop","\n","ev",{"VAR?":"lines"},"out","/ev","\n","ev",{"CNT?":"NPC"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^你看見一張牛皮紙繪製而成的畫像，上面的人面容模糊，長袍曳地，身姿聖潔，似乎還寫了幾行小字。你正要細看，眼前的面板突然被關閉了。","\n","^　　6/28看著你，微笑道：「看得開心嗎？」","\n","^　　他沒有表現出生氣的樣子，但你覺得他生氣了。","\n","ev","str","^保持安靜","/str","/ev",{"*":".^.c-0","flg":4},{"->":"NPC.0.60"},{"c-0":["\n","^　　你閉上嘴巴。","\n","^　　 ",{"->":"6_Trial"},"\n",{"#f":5}]}]}],"nop","\n","ev","str","^退出","/str",{"CNT?":"NPC"},3,"!=","/ev",{"*":".^.c-0","flg":5},{"c-0":["\n",["ev","visit",6,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"nop",{"s0":["pop","\n","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 朝著你微笑 。","\n",{"->":".^.^.47"},null],"s1":["pop","\n","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 困惑地看著你 。","\n",{"->":".^.^.47"},null],"s2":["pop","\n","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 用手指敲了敲桌子 。","\n",{"->":".^.^.47"},null],"s3":["pop","\n","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 正盯著你，看起來在思考著什麼 。","\n",{"->":".^.^.47"},null],"s4":["pop","\n","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 露出有些微妙的表情。","\n",{"->":".^.^.47"},null],"s5":["pop","\n","^「請不要再看了」","ev",{"VAR?":"NPC_Name"},"out","/ev","^ 說，「我並不是很喜歡被窺視內心。」他抱著胸、上半身微傾，嘴角掛著微笑，直勾勾看著你說道。","\n",{"->":".^.^.47"},null],"s6":["pop",{"->":".^.^.47"},null],"#f":5}],"\n","^你關閉了介面。","\n",{"->":"Bag"},{"#f":5}]}],{"#f":1}],"6_Trial":[["^　　他翻看小冊子，對你說：「那麼接下來，我得帶你去辦正式錄入的手續……」","\n","^　　「鈴鈴鈴鈴鈴鈴──」電話響了，打斷他的解說。","\n","^　　他示意你稍等，按下按鍵，將聽筒放到耳旁。","\n","^　　「……我是6/28。──對，我是替班。──有。──隨意處置？──好。──再會。」","\n","^　　他放下聽筒，轉過身來。你看見他沒有那麼笑著了。","\n","ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　","ev",{"VAR?":"628_level_of_interest"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　 ",{"->":"TRUE_END"},"\n",{"->":".^.^.^.8"},null]}],"nop","\n","^　　","ev",{"VAR?":"628_Favorability_Rating"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　 ",{"->":"HAPPY_END"},"\n",{"->":".^.^.^.17"},null]}],"nop","\n","^　　","ev",{"VAR?":"628_Favorability_Rating"},1,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　 ",{"->":"BAD_END"},"\n",{"->":".^.^.^.26"},null]}],"nop","\n",{"->":"TRUE_END"},{"#f":5}]}],{"#f":1}],"TRUE_END":[["^好感度：","ev",{"VAR?":"628_Favorability_Rating"},"out","/ev","\n","^興趣程度：","ev",{"VAR?":"628_level_of_interest"},"out","/ev","\n","^　　「內部傳來消息，你不是名冊上的玩家。不過，你確實是死了，否則不會來到這裡。」","\n","^　　「也就是說，你是錯誤的數據。」他說，「我該拿你怎麼辦呢？」","\n","^　　他站起身，推開櫃檯的門朝你走來。你發現他其實非常高大，挺立的眉骨擋去眼睛裡的光，他的眼眸純粹又漆黑。你找不著任何生機。","\n","^　　你頭皮發麻，大腦當機，每個細胞都叫囂著逃跑。你慢慢往後，直到後背撞到冰冷的牆壁。你無路可退。","\n","^　　他彎下腰和你平視。你在他眼裡看到了殺意。你想著，這次恐怕是真的要死了。","\n","^　　「兩條路。」","\n","^　　他豎起兩根手指，說：「我可以給你兩個選擇，一是走向神的懷抱，歸化而成為祂的子民，奉獻你的身心靈，乞求垂憐而信仰於祂。我可以免你一死。」","\n","^　　「第二條路。」他說，「反抗。你應該知曉，你幾乎沒有勝算。」","\n","ev","str","^加入","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^拒絕","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":".^.^.^.join"},"\n",{"#f":5}],"c-1":[{"->":".^.^.^.die"},"\n",{"#f":5}]}],{"join":["^　　你攥緊自己的手指，顫抖著聲音說：「我要加入。」","\n","^　　他揚起眉毛，很滿意你的回答。","\n","^　　「很好。」他低下頭來，捧住你的臉。你被強迫著抬起頭，忍不住閉上眼睛。","\n","^　　像是羽毛般的觸感落在你的額間。你陷入昏迷。","\n","^TRUE_END","\n","end",{"#f":1}],"die":[["^　　９－２－２．拒絕","\n","^　　「真的？」他微微笑開，手放在你的脖子。你被他提了起來。","\n","^　　腦袋裡的氧氣削減，你試圖去掰開他的手。他紋絲不動。","\n","^　　脖子被越束越緊，心跳在猛力地擊打你的耳膜，你的腦袋像快撐破的氣球，幾乎快暈厥過去。","\n","^　　「再給你一次機會。」他說，「回心轉意的話，就說出來。」","\n","ev","str","^加入","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^拒絕","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"TRUE_END.join"},"\n","^　　你敵不過求生的渴望。","\n","^　　你的喉嚨在燒，像被荊棘狠狠磨過，肌肉難以自抑地抽動起來，你全身都在掙扎。","\n","^　　你嘶啞著尖叫出來：「我要加入！」","\n","^　　你用盡全力，儘管聲音很微弱，他還是聽到了。","\n","^　　他揚起眉毛，很滿意你的回答。","\n","^　　「很好。」他鬆開手，你摔落在地，摀著脖子大口呼吸。","\n","^　　你眼前一黑，沉睡了一段時間。","\n","^　　","\n","^TRUE_END","\n","end",{"#f":5}],"c-1":["\n","^　　「去你媽的！」你用剩下的力氣辱罵他，「誰他媽要待在這個鬼地方，我要回家！」","\n","^　　「真遺憾。」他嘆了口氣。他殘忍地用雙手把你的脖子擰成毛巾。","\n","^　　死亡將至。你的眼前閃過你愛過的人的臉，和他們愛你的樣子。你想起你最快樂的，和最挫折的時光。你甚至看見自己的葬禮，那些你一生中最在乎的人們在哭。","\n","^　　你希望忍受這些無端的痛苦之後，你能過去擁抱他們，說：「我在這裡呢。」","\n","^　　你鬆開氣，安穩地閉上眼睛。如願以償地死了。","\n","^You die","\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"HAPPY_END":["^好感度：","ev",{"VAR?":"628_Favorability_Rating"},"out","/ev","\n","^興趣程度：","ev",{"VAR?":"628_level_of_interest"},"out","/ev","\n","^　　他垂下眼眸，你看見他長長的眼睫顫動。","\n","^　　「親愛的玩家。」他說，「內部傳來消息，有一份特別的禮物要送給您。」","\n","^　　他伸出手，一束花憑空落在他的臂彎。它們小巧且潔白，花蕊挺立，香氣淡雅。","\n","^　　他折下一朵，汁液染綠了他淡粉色的指甲。","\n","^　　你瞧見小白花嵌在他白皙的指骨間，他微微傾身，手靠近你的臉龐。","\n","^　　你稍稍往後縮，知曉反抗可能沒什麼好下場，於是放任他將花朵別在你髮間。","\n","^　　你覺得香氣似乎濃郁許多。儘管閉氣，它仍使你頭暈得劇烈，只能勉強站直。","\n","^　　「花……」你艱難地開口，「我接下來會怎麼樣……」","\n","^　　「我們很快就不會再見面了。」他說，「真可惜。」","\n","^　　你一心抵抗如潮水般湧上的睡意，無暇分析他說的話。","\n","^　　他在你額上輕輕烙下一個吻。","\n","^　　他嘆息著，溫柔地誘哄：「好好睡吧。」","\n","^　　你晃了晃，和花一起被他的臂彎穩穩承接住。","\n","^　　你陷入漫長的夢境。","\n","^Happy end","\n","end",{"#f":1}],"BAD_END":[["^好感度：","ev",{"VAR?":"628_Favorability_Rating"},"out","/ev","\n","^興趣程度：","ev",{"VAR?":"628_level_of_interest"},"out","/ev","\n","^　　「內部傳來消息，你不是名冊上的玩家。不過，你確實是死了，否則不會來到這裡。」","\n","^　　「也就是說，你是錯誤的數據。」他說，「恰好。我早就看你不順眼了。」","\n","^　　他站起身，推開櫃檯的門朝你走來。","\n","^　　他取下腰間的鞭子，用力一抖打向地板，「啪」地一聲清脆響亮，你的心臟狠狠跳動，雙腿發麻，背脊發寒。","\n","^　　他寬闊的肩背擋住光線。你在陰影裡，尋不著任何生機。","\n","ev","str","^逃跑","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^道歉","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":".^.^.^.die"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.faint"},"\n",{"#f":5}]}],{"die":["^　　你在他抵達你面前先往旁跑。你慌不擇路，選了一扇門就要邁入。","\n","^　　他嘖了一聲。長長的鞭子劃破空氣落在你的背部。鞭子帶有電流，電流在你的身體裡流竄，你全身抽搐，痛得翻滾。","\n","^　　你被鞭子捲起拖回去，蜷縮在他的腳邊。","\n","^　　他再次揮鞭，這次電流力度加大，你癱軟在地上，意識模糊。","\n","^　　你隱約察覺他的軍靴走過你身邊，他似乎執起話筒，說：「任務完成。」","\n","^　　你昏了過去，並且再也沒有醒過來。","\n","^　　","\n","^You die","\n","^　　 ","end","\n",{"#f":1}],"faint":["^　　你看見鞭子上彈跳的閃電，你知道自己在劫難逃。","\n","^　　他這副模樣實在駭人，你忍不住啜泣起來。","\n","^　　「對不起、對不起……」你把自己蜷縮著，一迭聲地道，「請不要殺死我，對不起……」","\n","^　　他蹲下身，強硬地掐住你的下巴。你抬起滿是淚痕的臉。","\n","^　　他沉默了很久。威壓使你不敢造次。","\n","^　　「嘖。」他說，一掌砍向你的後頸。","\n","^　　你暈倒了。你無知地昏睡，並且沒有再醒過來。","\n","^You die","\n","end",{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"player_attitude"},0,{"VAR=":"628_level_of_interest"},1,{"VAR=":"628_first_impression"},0,{"VAR=":"628_Favorability_Rating"},0,{"VAR=":"six_decide"},"str","^青年","/str",{"VAR=":"NPC_Name"},"/ev","end",null],"#f":1}],"listDefs":{}};