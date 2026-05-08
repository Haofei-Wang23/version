export type Language = 'zh' | 'en';

export const localizedContent = {
  zh: {
    common: {
      scrollHint: '向下探索',
      closeDetails: '关闭详情',
      closeProfile: '关闭人物介绍',
      figureLabel: '人物介绍',
    },
    hero: {
      title: '阊门繁华录',
      subtitle: '一梦入姑苏 · 阅尽千年事',
      description: '“最是红尘中一二等富贵风流之地” —— 《红楼梦》',
      bgImage: './image/changmenquanjing.jpg',
    },
    introduction: {
      title: '水陆双棋盘，东方威尼斯',
      paragraphs: [
        '阊门是苏州古城的西门，始建于春秋时期。因正对楚地，曾名“破楚门”。两千五百年来，它既是姑苏城的军事门户，也是江南水网经济最重要的生命线之一。',
        '明清之际，阊门因大运河而达到鼎盛。水陆交汇、商旅云集，丝绸、茶叶、瓷器与百货由此辐射四方，成为当时中国最繁华的商业地带之一。',
        '然而繁华并非永恒。庚申之劫让阊门盛景化为焦土，但这座城门的精神并未消失。它在历史的废墟之上重生，继续讲述姑苏古城绵延不绝的故事。',
      ],
      image1: './image/changmenshuijing.jpg',
      image2: './image/changmenyejing.jpg',
      image1Alt: '阊门水乡',
      image2Alt: '阊门夜景',
    },
    gallerySection: {
      title: '姑苏繁华图',
    },
    gallery: [
      { title: '水乡晨雾', img: './image/suzhoushuijing.jpg' },
      { title: '古桥遗梦', img: './image/suzhoudaiqiao.jpg' },
      { title: '华灯初上', img: './image/suzhoubangwandengjing.jpg' },
      { title: '粉墙黛瓦', img: './image/suzhouminsujianzhu.jpg' },
      { title: '乌篷摇橹', img: './image/hejingxiaochuan.jpg' },
    ],
    timelineSection: {
      title: '千年沧桑',
    },
    timeline: [
      {
        year: '公元前514年',
        period: '春秋时期',
        title: '阖闾大城，破楚之门',
        description:
          '吴王阖闾命伍子胥营建阖闾大城，阊门作为八门之一正向楚地，因此得名“破楚门”。自此，阊门成为吴地西向的重要防御门户，也见证了吴越争霸的风云岁月。',
        image: './image/gujing.jpg',
      },
      {
        year: '公元1368-1911年',
        period: '明清时期',
        title: '天下第一码头',
        description:
          '大运河带来的水运繁荣，让阊门外成为全国重要的物资集散地。货物堆积如山，商铺林立，昼夜不息，形成了“吴中第一繁华处”的盛景，也是明清江南资本萌芽的重要舞台。',
        image: './image/matougujing.jpg',
      },
      {
        year: '公元1860年',
        period: '晚清时期',
        title: '庚申之劫，繁华落尽',
        description:
          '太平天国战争波及苏州，阊门一带在清军与太平军交战中遭受重创，这场劫难被称为“庚申之劫”。十里街衢焚毁殆尽，数百年积累的市井繁华和建筑遗存毁于兵火。',
        image: './image/taipingtianguo.jpg',
      },
      {
        year: '公元2006年至今',
        period: '现代',
        title: '重塑辉煌，古韵今风',
        description:
          '进入现代后，苏州持续推进阊门片区保护与修复工程，重建城楼，恢复水陆并行的历史风貌。今天的阊门既是古城记忆的见证者，也是苏州文化旅游版图中的重要坐标。',
        image: './image/lishichongjian.jpg',
      },
    ],
    hotspotsSection: {
      title: '古城寻迹',
      hint: '点击地图光点，解锁历史坐标',
      mapAlt: '阊门地图',
    },
    hotspots: {
      image: './image/hengbanchangtu.jpg',
      points: [
        {
          x: 35,
          y: 45,
          title: '水陆城门',
          subtitle: '古代城市防御与交通的精妙结合',
          description:
            '阊门独特的水陆双门结构，一侧控水，一侧通车马。它既增强了城防能力，也极大提升了漕运与商贸效率。战时可闭闸断航，平时则是商船往来的黄金通道。',
        },
        {
          x: 65,
          y: 55,
          title: '吊桥商圈',
          subtitle: '明清时期的财富汇聚地',
          description:
            '这里连接护城河两岸，是明清时期苏州乃至江南最繁盛的商圈之一。米行、布庄、钱庄沿河排布，商旅昼夜往来，成为真正意义上的财货枢纽。',
        },
        {
          x: 50,
          y: 25,
          title: '阊门城楼',
          subtitle: '俯瞰姑苏繁华的制高点',
          description:
            '高耸的城楼曾是俯瞰姑苏盛景的最佳所在，无数文人雅士登楼题咏。它不仅承担军事指挥功能，也作为苏州西部最具象征性的地标，承载着城市的威仪与荣耀。',
        },
        {
          x: 80,
          y: 35,
          title: '山塘街起点',
          subtitle: '七里山塘通向虎丘',
          description:
            '阊门外便是山塘街的起点。白居易任苏州刺史时疏浚山塘河、开辟街道，自此阊门与虎丘被这条繁华长街相连，成为明清士大夫、富商与游人最爱流连的胜地。',
        },
      ],
    },
    routeMap: {
      eyebrow: '推荐路线',
      title: '阊门寻路',
      description: '从运河岸边自南向北行进，依次打卡五龙汇阊、城楼、万人码头与七里山塘街。',
      startButton: '推荐旅游路线',
      resetButton: '重新生成路线',
      planEyebrow: '路线总览',
      planTitle: '自南向北水城线',
      planSummary: '建议时长约 60 分钟。路线从南侧运河出发，经五龙汇阊、城楼与万人码头北上，最终抵达七里山塘街。',
      planHint: '点击路线按钮后，系统会按自南向北的推荐顺序绘制路径；点击地图锚点或路线条目可查看对应详情。',
      mapAlt: '阊门旅游打卡地图',
      checkpointLabel: '打卡点',
      checkedInLabel: '打卡完成',
      backButton: '返回',
      checkInButton: '打卡',
      successTitle: '打卡成功',
      successSummaryTemplate: '你已完成{title}打卡，这一站的阊门记忆已经收入行程。',
      completionTitle: '旅游打卡已完成',
      completionSummary: '恭喜你完成阊门寻路全线打卡。从运河水岸到山塘灯火，这趟路线把水路、城门、码头与街巷串成一段完整的姑苏记忆。',
      stops: [
        {
          title: '运河',
          subtitle: '从城外水道进入阊门水系',
          description:
            '路线由运河左侧岸边起步，先感受城墙之外的水路尺度。这里是外来船只进入城门区域前的缓冲水面，也是整条游线由开阔转向市井的起点。',
          x: 66,
          y: 88,
          url: 'https://www.kivicube.com/scenes/P7dvrG2FaaOjrFQJhYJbuXG1tsrrAeEX',
        },
        {
          title: '五龙汇阊',
          subtitle: '观察多水道汇聚的阊门格局',
          description:
            '五龙汇阊强调多条河道在阊门一带汇聚的空间特征。打卡点落在底图五龙汇阊标识附近，适合回看桥、河、街巷共同交织的水城格局。',
          x: 69,
          y: 69.2,
          url: 'https://www.kivicube.com/scenes/4IGYjug2XTRLcCMhCMJKQmAAUw3DFEJb',
        },
        {
          title: '城楼',
          subtitle: '沿城门边界转入城防叙事',
          description:
            '城楼标记了阊门作为城防节点的身份。行至此处，水路、道路与城门关系开始收束，适合观察古城边界如何组织人流与货流。',
          x: 88,
          y: 77,
          url: 'https://www.kivicube.com/scenes/18OKfDsE7hSGuJOBSv8PFQRQ3FGvIhkK',
        },
        {
          title: '万人码头',
          subtitle: '抵达水陆换乘与货物流动节点',
          description:
            '万人码头对应阊门繁盛的水陆转运记忆。打卡点贴近码头岸线，面向宽阔水面，和桥、城壕、市河共同构成商旅聚散的关键场所。',
          x: 88,
          y: 34,
          url: 'https://www.kivicube.com/scenes/kFeZFNkws95Jk1Vh26PDNU35XghkQvYe',
        },
        {
          title: '七里山塘街',
          subtitle: '抵达山塘街与上方街区',
          description:
            '七里山塘街位于路线的上方收束点，连接山塘河与街巷商业。路线沿山塘河左岸的岸上通道北上，由下至上的行进最终落在这处延展的历史街区。\n\n从运河畔启行，途经五龙汇阊的繁盛旧梦，登上城楼触摸历史的肌理，在万人码头望舟楫如梭，最终驻足于山塘街的灯火阑珊。这一路，是苏州的千年风华在脚下徐徐展开。阊门，这座见证了“五龙汇阊”商贾辐辏的城门，曾以“红尘富贵地”之名镌刻于时光深处，如今城砖斑驳，仍诉说着《红楼梦》中甄士隐避世的烟火，与范仲淹笔下“吴门耸阊阖”的巍峨。祝愿古运河的波光，五龙汇阊的传说，城楼的飞檐，万人码头的喧嚣，与山塘街的市声，皆化作你行囊中的姑苏印记。\n\n旅途在此驻足，而故事未完待续。若你愿停留，可沿山塘街寻访白居易的足迹，或至泰伯庙聆听古韵；若欲启程，请带走一片暮色中的城砖光影——阊门静默，却将苏州的沧桑与风流，酿成了你记忆里的一盏温酒。\n\n下一次，当春风拂过阊门，愿我们重逢于这方浸润了时光的城阙，续写新的姑苏篇章。苏州的富贵风流，从未落幕，它只是化作檐角的斜阳，温柔地落在每个与阊门相逢的过客肩上。',
          x: 53,
          y: 6,
        },
      ],
    },
    figuresSection: {
      watermark: '风流',
      title: '千古风流人物',
      profileLabel: '人物介绍',
      desktopIconLabel: '人物卷轴',
    },
    figures: [
      {
        name: '伍子胥',
        secondaryName: 'Zixu Wu',
        role: '建城始祖 · 楚国流亡者',
        quote: '相土尝水，象天法地。',
        story:
          '伍子胥于公元前514年辅佐吴王阖闾筑城，奠定了苏州“水陆双棋盘”的城市格局。他使阊门正向楚地，并命名为“破楚门”，既寄托了个人复仇之志，也体现了吴国西进的雄心。阊门的历史由此展开，他也因此成为苏州城与阊门最重要的奠基者。',
        image: './image/wuzixu.jpg',
      },
      {
        name: '唐寅',
        secondaryName: 'Yin Tang',
        role: '江南第一风流才子',
        quote: '世间乐土是吴中，中有阊门更擅雄。',
        story:
          '唐伯虎生活于明代繁华江南，常往来于阊门与山塘之间。他在诗文中写尽此地车马喧阗、舟楫纵横与楼台歌吹的盛景。对于他而言，阊门不仅象征财富，也代表着江南文人心中的风流与雅致。',
        image: './image/tangbohu.jpg',
      },
      {
        name: '曹雪芹',
        secondaryName: 'Xueqin Cao',
        role: '文学巨匠 · 红楼梦作者',
        quote: '最是红尘中一二等富贵风流之地。',
        story:
          '曹雪芹在《红楼梦》开篇便以阊门作为“红尘中一二等富贵风流之地”的象征，使其成为中国古典文学中极具分量的地理起点。借由这部巨著，阊门超越了城市地标的意义，成为流传至今的文化意象。',
        image: './image/caoxueqin.jpg',
      },
    ],
    footer: {
      title: '阊门繁华录',
      quote: '“君到姑苏见，人家尽枕河。古宫闲地少，水港小桥多。”',
      closing: '岁月流转，阊门依旧静静守望着这座千年水乡。',
      copyrightSuffix: '阊门繁华录 - CPT208 Studio Project',
      studioTag: 'Designing Playful Experiences · Human-Centric Computing',
      builtWith: 'Built with React, Tailwind CSS & Motion',
    },
  },
  en: {
    common: {
      scrollHint: 'Scroll Down',
      closeDetails: 'Close details',
      closeProfile: 'Close figure profile',
      figureLabel: 'Figure Profile',
    },
    hero: {
      title: 'Changmen Splendor',
      subtitle: 'A Dream into Gusu · Reading a Thousand Years',
      description: '"The foremost place of wealth and worldly romance." — Dream of the Red Chamber',
      bgImage: './image/changmenquanjing.jpg',
    },
    introduction: {
      title: 'Water-and-Land Chessboard, the Venice of the East',
      paragraphs: [
        'Changmen, the western gate of ancient Suzhou, dates back to the Spring and Autumn Period. Originally named Po Chu Men, the Gate of Defeating Chu, it stood as both a military frontier and one of the most important lifelines in the Jiangnan canal network for over 2,500 years.',
        'During the Ming and Qing dynasties, Changmen reached its height of prosperity through the Grand Canal. Merchants, cargo, silk, tea, porcelain, and daily goods converged here, turning the district into one of the busiest commercial centers in late imperial China.',
        'Prosperity did not last forever. The Gengshen Calamity reduced much of Changmen to ruins, yet the spirit of the gate endured. Rebuilt through time, it continues to tell the long, layered story of old Gusu.',
      ],
      image1: './image/changmenshuijing.jpg',
      image2: './image/changmenyejing.jpg',
      image1Alt: 'Changmen waterscape',
      image2Alt: 'Changmen at night',
    },
    gallerySection: {
      title: 'Scenes of Gusu',
    },
    gallery: [
      { title: 'Morning Mist', img: './image/suzhoushuijing.jpg' },
      { title: 'Bridge Reverie', img: './image/suzhoudaiqiao.jpg' },
      { title: 'City Lights', img: './image/suzhoubangwandengjing.jpg' },
      { title: 'White Walls and Black Tiles', img: './image/suzhouminsujianzhu.jpg' },
      { title: 'Black Canopy Boats', img: './image/hejingxiaochuan.jpg' },
    ],
    timelineSection: {
      title: 'A Millennium of Change',
    },
    timeline: [
      {
        year: '514 BC',
        period: 'Spring and Autumn Period',
        title: 'The City of Helu and the Gate Facing Chu',
        description:
          'King Helu of Wu commissioned Wu Zixu to build the great city of Suzhou. As one of its eight gates, Changmen faced the State of Chu and earned the name Po Chu Men, the Gate of Defeating Chu. From the start, it served as a strategic western frontier in the age of Wu-Yue rivalry.',
        image: './image/gujing.jpg',
      },
      {
        year: '1368-1911',
        period: 'Ming and Qing Dynasties',
        title: 'The Greatest Wharf Under Heaven',
        description:
          'With the prosperity of the Grand Canal, Changmen became one of the most important distribution hubs in the empire. Goods piled high, shops lined the streets, and merchants came and went day and night, making the district a defining symbol of Jiangnan commerce.',
        image: './image/matougujing.jpg',
      },
      {
        year: '1860',
        period: 'Late Qing',
        title: 'The Gengshen Calamity',
        description:
          'War reached Suzhou during the Taiping Rebellion, and fierce fighting devastated the Changmen district. This disaster, remembered as the Gengshen Calamity, destroyed whole streets, bringing centuries of urban prosperity and architectural heritage to a sudden end.',
        image: './image/taipingtianguo.jpg',
      },
      {
        year: '2006-Present',
        period: 'Modern Era',
        title: 'Restored Glory, Renewed Heritage',
        description:
          'In the modern era, Suzhou launched sustained preservation and restoration efforts across the Changmen district. The gate tower was rebuilt, the water-land layout was revived, and Changmen re-emerged as both a historical witness and a major cultural landmark of the city.',
        image: './image/lishichongjian.jpg',
      },
    ],
    hotspotsSection: {
      title: 'Tracing the Ancient City',
      hint: 'Tap the glowing points on the map to unlock historic coordinates.',
      mapAlt: 'Map of Changmen',
    },
    hotspots: {
      image: './image/hengbanchangtu.jpg',
      points: [
        {
          x: 35,
          y: 45,
          title: 'Water-and-Land Gate',
          subtitle: 'A refined union of defense and transport',
          description:
            'Changmen once paired a water gate with a land gate, allowing the city to regulate canal traffic and road access at the same time. In wartime, sluices could be shut to block entry; in peacetime, the same system powered trade and mobility.',
        },
        {
          x: 65,
          y: 55,
          title: 'Drawbridge Market Quarter',
          subtitle: 'A concentration of wealth in the Ming and Qing eras',
          description:
            'This area linked both sides of the moat and became one of the most prosperous market zones in Suzhou and Jiangnan. Grain shops, cloth merchants, and money houses lined the banks, turning the district into a true center of circulation and exchange.',
        },
        {
          x: 50,
          y: 25,
          title: 'Changmen Gate Tower',
          subtitle: 'The finest vantage point over Gusu',
          description:
            'The gate tower once offered the best panoramic view of bustling Gusu. Generations of scholars climbed it to write poems and admire the city. It functioned not only as a military watchpoint, but also as one of western Suzhou’s most emblematic landmarks.',
        },
        {
          x: 80,
          y: 35,
          title: 'Shantang Street Trailhead',
          subtitle: 'The beginning of the Seven-Li Shantang route',
          description:
            'Just beyond Changmen lies the entrance to the famous Shantang Street. Since Bai Juyi’s canal works in Suzhou, this corridor has linked Changmen with Tiger Hill and become a favored promenade of merchants, officials, and travelers alike.',
        },
      ],
    },
    routeMap: {
      eyebrow: 'Recommended Route',
      title: 'Changmen Route',
      description: 'Begin by the canal and travel north through Wulong Confluence, the gate tower, the grand wharf, and finally Shantang Street.',
      startButton: 'Show Recommended Route',
      resetButton: 'Replay Route',
      planEyebrow: 'Route Plan',
      planTitle: 'South-to-North Water City Walk',
      planSummary: 'Suggested duration: about 60 minutes. Start at the southern canal edge, then move north through Wulong Confluence, the gate tower, the grand wharf, and finish at Qili Shantang Street.',
      planHint: 'After starting the route, the system draws the recommended path from south to north. Tap a map marker or a route item to view the related details.',
      mapAlt: 'Changmen route check-in map',
      checkpointLabel: 'Checkpoint',
      checkedInLabel: 'Checked In',
      backButton: 'Back',
      checkInButton: 'Check In',
      successTitle: 'Check-in Complete',
      successSummaryTemplate: 'You have completed the {title} check-in and added this place to your Changmen journey.',
      completionTitle: 'Route Complete',
      completionSummary: 'You have completed the full Changmen route. From the canal edge to the lantern glow of Shantang Street, the journey ties waterways, city gates, wharves, and streets into one coherent memory of Suzhou.',
      stops: [
        {
          title: 'Canal',
          subtitle: 'Entering the Changmen water system from outside the walls',
          description:
            'The route begins along the canal outside the city wall. Here you first sense the scale of the waterway beyond the urban edge, a transition zone where outside boats slowed before entering the gate district and where the whole journey turns from open water to city life.',
          x: 66,
          y: 88,
          url: 'https://www.kivicube.com/scenes/P7dvrG2FaaOjrFQJhYJbuXG1tsrrAeEX',
        },
        {
          title: 'Wulong Confluence',
          subtitle: 'Reading the spatial logic of converging waterways',
          description:
            'Wulong Confluence highlights how multiple canals meet around Changmen. The check-in point sits near the label on the base map and is ideal for reading the water city as an interwoven system of bridges, channels, streets, and neighborhoods.',
          x: 69,
          y: 69.2,
          url: 'https://www.kivicube.com/scenes/4IGYjug2XTRLcCMhCMJKQmAAUw3DFEJb',
        },
        {
          title: 'Gate Tower',
          subtitle: 'Turning from circulation to the story of urban defense',
          description:
            'The gate tower marks Changmen’s role as a strategic defensive node. At this point the relationship between waterways, roads, and the city gate becomes more focused, making it a good place to observe how the old urban boundary once organized movement and trade.',
          x: 88,
          y: 77,
          url: 'https://www.kivicube.com/scenes/18OKfDsE7hSGuJOBSv8PFQRQ3FGvIhkK',
        },
        {
          title: 'Grand Wharf',
          subtitle: 'Arriving at the key exchange point of water and land transport',
          description:
            'The Grand Wharf preserves the memory of Changmen’s busy transfer economy. Set near the quay line and facing broad water, it once tied together bridge, moat, canal, and street into one of the most important places for arrival, loading, and departure.',
          x: 88,
          y: 34,
          url: 'https://www.kivicube.com/scenes/kFeZFNkws95Jk1Vh26PDNU35XghkQvYe',
        },
        {
          title: 'Qili Shantang Street',
          subtitle: 'The final arrival at the northern street district',
          description:
            'Qili Shantang Street marks the northern culmination of the route, where the Shantang River meets one of Suzhou’s most storied commercial streets. Walking along the left bank from south to north, the journey finally resolves into this extended historic neighborhood.\n\nYou begin beside the canal, pass through the layered memory of Wulong Confluence, climb toward the gate tower, and pause at the once-busy Grand Wharf before arriving at the lantern glow of Shantang Street. Along the way, a thousand years of Suzhou unfold beneath your feet. Changmen, once known as one of the great places of wealth and worldly elegance, still carries echoes of Dream of the Red Chamber and the grand civic presence praised by Fan Zhongyan.\n\nMay the shimmer of the ancient canal, the legend of Wulong Confluence, the eaves of the gate tower, the bustle of the Grand Wharf, and the voices of Shantang Street all remain with you as lasting memories of Gusu.\n\nThe journey pauses here, but the story does not end. You may continue through Shantang Street in the footsteps of Bai Juyi, or visit Taibo Temple to hear older echoes of the city. When spring returns to Changmen, may we meet again at this gate and begin another chapter in Suzhou.',
          x: 53,
          y: 6,
        },
      ],
    },
    figuresSection: {
      watermark: 'Legends',
      title: 'Timeless Figures',
      profileLabel: 'Figure Profile',
      desktopIconLabel: 'Figure Scroll',
    },
    figures: [
      {
        name: 'Wu Zixu',
        secondaryName: '伍子胥',
        role: 'Founder of the City · Exile from Chu',
        quote: 'Survey the land, taste the waters, and shape the city after heaven and earth.',
        story:
          'In 514 BC, Wu Zixu helped King Helu establish the city layout that gave Suzhou its famous water-and-land chessboard form. He oriented Changmen toward Chu and named it Po Chu Men, the Gate of Defeating Chu, weaving his personal history and Wu’s political ambition into the city’s western threshold. In that sense, Changmen begins with him.',
        image: './image/wuzixu.jpg',
      },
      {
        name: 'Tang Yin',
        secondaryName: '唐寅',
        role: 'Jiangnan’s Most Celebrated Romantic Talent',
        quote: 'The happiest land beneath heaven is Wu, and within it Changmen stands supreme.',
        story:
          'Tang Bohu wandered often between Changmen and Shantang Street. In his poems he described a district crowded with boats, traffic, music, and elegance. To him, Changmen was not merely rich, but a stage on which Jiangnan style, refinement, and worldly pleasure were vividly performed.',
        image: './image/tangbohu.jpg',
      },
      {
        name: 'Cao Xueqin',
        secondaryName: '曹雪芹',
        role: 'Literary Master · Author of Dream of the Red Chamber',
        quote: 'The foremost place of wealth and worldly romance.',
        story:
          'Cao Xueqin placed Changmen at the opening of Dream of the Red Chamber, presenting it as one of the richest and most refined places in the mortal world. Through that literary choice, Changmen became more than a district of Suzhou; it entered the imagination of Chinese literature as a lasting cultural emblem.',
        image: './image/caoxueqin.jpg',
      },
    ],
    footer: {
      title: 'Changmen Splendor',
      quote: '"When you arrive in Suzhou, every home rests beside the river; old palace ground is scarce, while waterways and bridges abound."',
      closing: 'As the years pass, Changmen still stands quietly, watching over this thousand-year-old waterside city.',
      copyrightSuffix: 'Changmen Splendor - CPT208 Studio Project',
      studioTag: 'Designing Playful Experiences · Human-Centric Computing',
      builtWith: 'Built with React, Tailwind CSS & Motion',
    },
  },
} as const;

export type SiteContent = (typeof localizedContent)['zh'];
