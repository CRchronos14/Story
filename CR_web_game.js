var storyContent = ﻿{"inkVersion":20,"root":[["^　　歡迎來到Chronos。","\n","^　　您可能會開始思考「這是什麼情況?」","\n","^　　別擔心，因為您再如何絞盡腦汁也無法用小巧精緻的腦袋明瞭這一切。","\n","^　　只需要牢記以下一點 : 您已經死了——由衷希望您明白「死亡」這個單詞的意義。","\n","^　　無法歸屬的靈魂，也就是您，榮幸或不幸地被帶到了這裡。","\n","^　　接下來請您睜開雙眼，與此同時，也別忘記自己的身分。","\n","ev","str","^START","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^END","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["\n",{"->":"START"},{"->":"0.g-0"},{"#f":5}],"c-1":["\n","^　　你以為你擁有選擇，但其實路走到底，所有人的歸宿都在那裏。","\n",["ev","str","^START","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"START"},{"->":"0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"START":[{"->":".^.wake"},{"wake":[["^　　你醒來時，已經開始墜落。","\n","^　　獵獵風聲簇擁著你，你察覺髮絲被糊上自己的臉，可你沒有力氣撥開。","\n","^　　你隔著眼皮看見顏色形狀變換的光班浮在黑暗之中，它們籠著朦朧的噪點，你看得越仔細，它跑得就越快。","\n","^　　不一會兒，光班吞噬了黑暗，化為純白的光，你的視野被照亮了。","\n","^　　這時你終於找回了呼吸，好似之前忘記一樣。","\n","^　　你大口呼吸，身體內部多了一股力氣。","\n","^　　你終於睜開眼睛。","\n","ev","str","^查看自己","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"START.first"},{"#f":5}]}],{"#f":1}],"first":[["^　　你低頭查看自己，仍有些暈眩。","\n","^　　身上的衣服被人換過了，你從沒穿過這種純白的連身衣褲。","\n","^　　你身處於一個以純白無機質建成的圓廳，四周環繞著數扇門，你可以繞滿整整一圈。","\n","^　　而中間是櫃台，一個人影坐於其後，似乎在忙碌些什麼。","\n","^　　櫃檯上擺放著辦公用具，出乎意料的是轉盤式復古電話以及一個類似於打字機的工具。","\n","^　　你不知道自己到底闖入了什麼地方，像是突然間被抽換了時空一樣。","\n","^　　你決定……","\n",["ev",{"^->":"START.first.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^　　走向人影",{"->":"$r","var":true},null]}],["ev",{"^->":"START.first.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^　　睡回去",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"START.first.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"^。","\n","^　　那是一個瘦削的男人。他窩在純黑的沙發裡，他的髮色和皮膚相融，全身皆是一片雪白，襯得他明亮又蒼白。他有滿頭蓬鬆的亂髮，耳旁翹起的髮絲像狐狸的鬃毛，其中一縷飄垂過眼前落於下巴。","\n","^　　當他轉頭時，你注意到他參差不齊的過長鬢髮，和短得出奇的後髮。你想這個人一定是得罪髮型設計師了。偏偏這人五官無有一處歪斜，精準地英俊，能成起這般亂糟糟的造型。","\n","^　　細長的方框眼鏡嵌在他高挺的鼻樑上，鐳射鏡片反射出冰冷的光，你仔細一看，那鏡片上隱隱約約有數字跑動。","\n","^　　他瞧見你，摘下他的眼鏡。他起身笑道：「歡迎來到Chronos，親愛的玩家。」","\n","^　　鐳射光停止了，鏡片恢復成朦朧的墨色。你才注意到他有一雙圓潤的眼，眼尾上挑，濃密的下睫毛鋪在眼瞼。他的唇是這片空白裡最濃郁的艷色。稍薄的唇向外一開，你瞧見他明媚的笑意中，殷紅舌尖隱隱探出，不由心下一悸，說不出是驚艷還是害怕。","\n",["ev","str","^一直盯著看","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^警惕詢問","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^睡回去","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^　　你一直盯著他看。","\n",{"->":"START.SEE628"},{"#f":5}],"c-1":["\n","^　　「你是什麼人？」你問。","\n","^　　他笑著說：「我是6/28，是替代的bishop，姑且算是管理員的存在。原本的工作並不是站櫃檯的，但最近被臨時抓來替班。」","\n","^　　你聽不懂，但他已經開始展開新的話題。","\n",{"->":"2_SAVE"},{"#f":5}],"c-2":["^ 你閉上眼。","\n",{"->":"2_SAVE.sleep"},{"->":"2_SAVE"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"START.first.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"^。","\n",{"->":"2_SAVE.sleep"},{"#f":5}]}],{"#f":1}],"TRY":[{"->":".^.^.SEE628"},{"#f":1}],"SEE628":[["ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　你似乎看見他的瞳孔中泛著一圈狹窄的日輪光圈，一閃便融入一片墨色裡，令人疑心自己眼花。","\n","^　　他問：「怎麼了嗎？」","\n","^　　你的視線讓他說不出他準備好的開場白。","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"CNT?":".^.^"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^　　他問：「怎麼了嗎？」","\n",{"->":".^.^.^.14"},null]}],"nop","\n","ev","str","^一直盯著看","/str",{"CNT?":".^.^"},2,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^一直盯著看","/str",{"CNT?":".^.^"},1,"==","/ev",{"*":".^.c-1","flg":5},["ev",{"^->":"START.SEE628.0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^微笑",{"->":"$r","var":true},null]}],["ev",{"^->":"START.SEE628.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^視線轉移",{"->":"$r","var":true},null]}],["ev",{"^->":"START.SEE628.0.36.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^睡回去",{"->":"$r","var":true},null]}],{"c-0":["^  　　你沒有回應，持續地盯著對方看。","\n","^　　他看著你，你似乎聽見很輕微的「嘖」了一聲。","\n","^　　他問：「看夠了沒？」","\n","^　　你小聲道歉。","\n",[["ev",{"^->":"START.SEE628.0.c-0.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^轉移視線",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"START.SEE628.0.c-0.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}]}],{"#f":5}],"c-1":["^  　　你持續地盯著對方看。","\n",{"->":"START.TRY"},{"#f":5}],"c-2":["ev",{"^->":"START.SEE628.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}],"c-3":["ev",{"^->":"START.SEE628.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}],"c-4":["ev",{"^->":"START.SEE628.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.36.s"},[{"#n":"$r2"}],"\n",{"->":"2_SAVE"},{"#f":5}]}],{"#f":1}],"#f":1}],"2_SAVE":[["^　　「也許初來乍到，你還有不適應的地方。」他說，「請不用擔心，你在這裡很安全，只要你聆聽神的隻言片語，神就會保佑你。」","\n","^　　他將手覆蓋在自己的胸口，深深呼吸。","\n","^　　通道雖然空蕩蕩的，幾扇門看上去也稀鬆平常，你卻無法安心，總有一種不祥的預感趴在你心口，壓得你焦躁不安。","\n","^　　他溫和的語氣並不能安撫你，你想趕快離開這個陌生的地方。","\n","^　　","\n","ev","str","^詢問很多問題","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^詢問能不能回家","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^等待下文","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^　　你懷疑自己是不是誤入什麼邪教組織，忍住拔腿就跑的衝動，一次詢問很多問題：「這裡是哪裡，你又是誰，我為什麼在這裡？」","\n","^　　「我是6/28，是今天櫃檯的替班。」他有條不紊的道，「這裡是Chronos，靈魂的希望之地，恭喜您，玩家☐ ☐，編號☐ ☐ ☐ ☐——」","\n","^　　他的聲音像是被消音了一樣，一些字眼消失了，他露出了困惑的表情，又再次嘗試開口，「玩家☐ ☐⋯⋯？」","\n","^　　他開始翻找著一本小冊子，嘴裡喃喃著什麼。","\n",["ev","str","^搶過他的冊子","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^等待","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^　　你一把搶過他的冊子。","\n","^　　「嘿。」他沉下了臉，一瞬間你往後退了一步。","\n","^　　他重新掛上笑容。","\n","^　　「這些東西是你不能碰的。」他說，「下次可以先跟我講。」","\n","^　　他並沒有解釋他那些被消音的話。你看著他的臉，只覺得四肢發冷。","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}],"c-1":["^你靜靜地等待他。","\n","^　　他有點困擾地笑笑，說：「畢竟我只是替班，並不清楚這是什麼異常事件。」","\n","^　　你低頭，纏著自己的手指，更加焦躁了。","\n","^　　 ",{"->":"3_WHERE_IS_IT"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["\n","^　　　「那麼，」你仔細篩選自己的措辭，「我什麼時候能回家呢？」","\n","^　　「不。」他說，「你已經死了，永遠不能回家了。死去的靈魂應該歸屬於Chronos，歸屬於神的懷抱。」","\n","^　　他張開雙臂轉了一圈，臉上洋溢著笑容。","\n","^　　「能活在有神的世界，是多麼幸福的事情──你從來沒有體驗過吧？」","\n","^　　","\n",["ev","str","^順從","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^反抗","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^　　你看著他轉圈，精神狀況不是很穩定的樣子。","\n","^　　你等笑聲平息，才小聲地說：「請和我解釋清楚吧。」","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}],"c-1":["\n","^　　「鬼扯，我才不信！」你瞪著他，「你的神只是綁架犯吧，快讓我離開！」","\n","^　　你環顧一圈，並沒有找到出口。","\n","^　　「行吧。」他說，「那只好盡快跟你解釋了。」","\n","^　　你看見他的手放在腰間，那裡掛著奇特模樣的鞭子。","\n","^　　你按捺住自己沸騰的情緒。","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^　　","\n",{"->":"3_WHERE_IS_IT"},{"#f":5}]}],{"sleep":["^　　「親愛的玩家，請睜開眼睛。」你聽見男人帶著笑意的聲音，「這是裝睡的一種嗎？」","\n","^　　你睜開眼睛，還有點睏。你看見他的嘴角弧度，好像沒那麼疏離了。","\n",{"->":".^.^"},{"#f":1}],"#f":1}],"3_WHERE_IS_IT":[["^　　他想了想，手伸向復古電話，繞著按鍵轉了一圈，再按一個鈕，你聽到標準無感情的電子合成人聲，來自四面八方的音響。不過你沒有看到哪裡有音響。","\n","^　　他示意你仔細聽廣播內容。","\n",["ev",{"^->":"3_WHERE_IS_IT.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^你仔細傾聽",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"3_WHERE_IS_IT.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^。","\n",{"->":"4_Teach"},{"#f":5}]}],{"#f":1}],"4_Teach":[["^「歡迎來到Chronos的系統空間，幸運的玩家們，恭喜你們被主神選中，本應在原本世界死去的你們將在這裡獲得重生的機會。」","\n","^　　「你們一定很困惑現在的情況，但不論如何，請先認真傾聽以下關於Chronos的說明，提醒你，本廣播只會播放一次。」","\n","ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「Chronos是什麼，有很多說法，我們Bishop最喜歡用法是希望永存的應許之地，而你們人類或許會稱之為天堂、地獄、陰間或仙境⋯⋯，總結來說就是死後的中繼站，當然，對於部分的玩家們來說也有可能是終點站。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「在Chronos的每一個人都將獲得自己獨有的技能，你可以召喚你的面板，查看自己的狀態、積分和技能道具，在系統空間時可額外查看地圖、交流平台與兌換系統。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「積分，是在Chronos中最重要的物品，它源自於你參與的任何活動—包含主副本任務、不定期系統遊戲以及賭場活動，並決定了你的排名、地位以及重生的機會。所有玩家的初始積分為 100 點，且在系統中每經過 1 天扣除 1 點生存積分。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「在這裡的任何『東西』包含食物、衣服、道具與技能皆需以積分進行購買或是以物換物。系統面板中的三個特殊兌換選項【回家】、【新生】、【復甦】只允許以積分進行兌換。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「關於副本，每一陣子，系統空間內會出現一扇新的門，玩家可以通過門去到不一樣的『世界』，所有的門各不相同，且不會重複。」","\n","^　　「在副本期間，玩家可能面臨各種生理或心理上的危險，請確保自己能安全健康的活著直到離開副本空間，只要能成功離開，不管多嚴重的傷口醫護中心的Bishop都能將你從鬼門前帶回來，但請注意，在副本中死亡即為真正意義上的Game over，不管是靈魂或是身體都將永遠停留在副本之中。」","\n",["ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^　　「玩家們請各位努力進行各項副本任務！」","\n","^　　「獲得積分，換取生存、新生或復活。」","\n","^　　電話那頭落下最後一句話，回歸「嘟——嘟——」的忙音。","\n",["ev","str","^轉頭看向青年","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"5_CALL"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"5_CALL":[["^　　「解釋完了。」他說，「聽懂了嗎？」","\n","^　　你沒聽懂，但你好像可以召喚面板？","\n","ev","str","^END","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"TRUE_END"},{"#f":5}]}],{"#f":1}],"TRUE_END":["^暈倒了","\n","end",{"#f":1}],"HAPPY_END":["^happt end","\n","end",{"#f":1}],"BAD_END":["^you die","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"player_attitude"},0,{"VAR=":"628_level_of_interest"},1,{"VAR=":"628_first_impression"},0,{"VAR=":"628_Favorability_Rating"},0,{"VAR=":"six_decide"},"str","^青年","/str",{"VAR=":"NPC_Name"},"/ev","end",null],"#f":1}],"listDefs":{}};