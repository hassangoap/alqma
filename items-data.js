// ==========================================================================
// ملف البيانات والبنود الحسية المتطور (items-data.js)
// مركز القمة للتدريب والتأهيل - وحدة العلاج الوظيفي والتكامل الحسي
// ==========================================================================

// مصفوفة البنود والأسئلة للأنظمة الحسية التسعة مع الأيقونات والأسماء المختصرة
const domainsData = [
{
    id: 'v',
    icon: '🌀',
    shortName: 'الدهليزي والتوازن',
    name: '1. الجهاز الدهليزي والتوازن (Vestibular)',
    items: [
        'ينزعج عند تحريكه أو تبديل وضعه فجأة.',
        'يفضل المهام المستقرة ويتحرك ببطء وحذر ويتجنب المخاطرة.',
        'يتشبث جسدياً بشخص كبير عند الحركة أو التنقل.',
        'يبدو قلقاً في البيئة المليئة بالحركة فينتقل إلى زاوية الغرفة.',
        'يعاني من صعوبة في تسلق سلم الحائط أو درجات المرتفعات.',
        'لا يقدّر المسافة الكافية اللازمة لرفع أو خفض جسمه أثناء حركته أو عند تخطيه من فوق الأشياء.',
        'يصعب عليه الصعود على الطاولة أو المقاعد المرتفعة.',
        'يتجنب القفز من الأماكن المرتفعة إلى سطح منخفض.',
        'يحب القفز من الأماكن المرتفعة إلى المنخفضة، مع السقوط المتكرر.',
        'يفقد توازنه بسهولة عند الوقوف على قدم واحدة.',
        'دائم الخوف والقلق من التعرقل أو السقوط أثناء السير.',
        'يخاف من النظر لأسفل أو إلى درج السلم عند الهبوط.',
        'يجد صعوبة في الاستمرار بوضع ساكن لفترة مناسبة لعمره.',
        'يميل لتحريك وهز رأسه باستمرار أثناء الجري أو المشي.',
        'يخبط ويدق قدميه بقوة على الأرض أثناء السير.',
        'يهز جذعه للأمام والخلف عند شعوره بالضيق أو التوتر.',
        'يعاني من صعوبة في حفظ رأسه بوضع ثابت ومستقيم.',
        'يدور ويلف حول نفسه كثيراً لفترات طويلة دون أن يشعر بدوار.',
        'يعاني من صعوبة في الأنشطة التي تتطلب تناسقاً وتآزراً بين جانبي الجسم (اليدين معاً).',
        'يسقط بجسده فجأة على الأرض عمداً.',
        'يلعب بألعاب الملاهي والدوارات لفترات طويلة وبطرق أعنف من أقرانه.',
        'الميل الدائم للجري وتغيير الاتجاهات بشكل عشوائي دون مسار محدد.',
        'يتجنب الأنشطة الحركية الجماعية وألعاب الملاعب.',
        'يواجه صعوبة ملحوظة في حفظ التوازن عند الوقوف على قدم واحدة.',
        'يفقد توازنه ويسقط عند محاولة إغلاق عينيه أثناء الوقوف.'
    ]
},
{
    id: 't',
    icon: '✋',
    shortName: 'النظام اللمسي',
    name: '2. النظام اللمسي (Tactile)',
    items: [
        'يفضل النوم أو الاستلقاء على السيراميك والأسطح الباردة.',
        'يستمتع ويبحث باستمرار عن التلامس الجسدي مع الآخرين.',
        'يصعب عليه التعرف على الأشياء المألوفة بمجرد اللمس دون رؤيتها.',
        'يلمس بشكل متكرر الأسطح والأقمشة ذات الملمس الناعم جداً.',
        'يسعى بنشاط ويستمتع باللعب الفوضوي (كالرمال، الطين، الألوان والصلصال).',
        'يتلمس خامات ناعمة ومحددة مثل البطانيات أو الفرو بشكل نمطي.',
        'يبحث بإلحاح عن العناق القوي والالتصاق الجسدي.',
        'يتلمس ذقن أو شعر الشخص المقابل له باستمرار.',
        'يتجنب الألعاب التي تتطلب ملامسة مباشرة مثل مسك الكرات.',
        'لا ينزعج من الإصابات مثل الجروح والكدمات ولا يظهر رد فعل للألم.',
        'يطلب ويحب التدليك القوي والمساج العميق للجلد والعضلات.',
        'يبصق ويتلمس لعابه أو يتلاعب به بيديه.',
        'يحك ويخربش موضع الجروح السابقة ويزيل القشور المتكونة.',
        'يرفض بشدة قص الشعر أو تقليم الأظافر.',
        'يرفض تماماً ارتداء الجوارب ويخلعها فوراً.',
        'يقاوم بشدة غسل الوجه أو يتجنب وصول الماء إلى وجهه.',
        'يقاوم غسيل الأسنان بالفرشاة ويبدي نفوراً حاداً.',
        'يرفض الالتصاق أو أن يحضنه أحد وينفر من التلامس العفوي.',
        'يتألم ويعطي ردود فعل حادة وسلبية من قطرات رذاذ الماء أو الاستحمام.',
        'يرفض بشدة ارتداء الملابس الجديدة أو الصوفية أو الخشنة.',
        'يمشي على أطراف أصابع قدميه بصفة مستمرة.',
        'لا يلاحظ ولا ينزعج من اتساخ يديه أو وجهه بالطعام أو الألوان.',
        'يتجنب الاصطفاف في طابور مع الآخرين وينفر من الأماكن المزدحمة.',
        'انتقائي للغاية في قوام وطبيعة ملامس الأطعمة في الفم.',
        'يفضل البقاء دون ملابس ويسعى لخلعها باستمرار.',
        'يتلمس الأقمشة الحريرية أو الملساء بشكل قهري متكرر.',
        'يخلع ملابسه في الأماكن العامة لعدم تحمله ملامستها لجسده.',
        'يتلاعب بالبراز أو يدهنه على الأسطح نتيجة لخلل تمييز لمسي.',
        'يرفض ارتداء الجوارب أو الأحذية بشكل قاطع.',
        'يرفض خلع الحذاء بشكل صارم حتى داخل المنزل أو وقت النوم.',
        'يتلمس شفاه أو أذن أو عنق الأشخاص المحيطين به باستمرار.',
        'ينزعج بشدة من خطوط خياطة الملابس أو بطاقات العلامات التجارية (التيكت).',
        'رفض قاطع لارتداء خامات أو أنواع ملابس بعينها.',
        'يصبح رخواً أو ينهار تماماً إذا حاول أحد مسك يده أو توجيهه جسدياً.'
    ]
},
{
    id: 'a',
    icon: '👂',
    shortName: 'النظام السمعي',
    name: '3. النظام السمعي (Auditory)',
    items: [
        'الرفض التام للدخول إلى الأماكن المزدحمة وذات الأصوات العالية كالمراكز التجارية.',
        'لديه حساسية سمعية فائقة تمكنه من سماع أصوات دقيقة لا ينتبه لها الآخرون.',
        'يصرخ أو يصدر أصواتاً حادة وضوضاء لتغطية الأصوات الخارجية المزعجة.',
        'يمتلك ذاكرة سمعية قوية في حفظ النغمات والمقاطع الصوتية وترديدها.',
        'يكرر ويردد كلام الآخرين بشكل فوري أو مؤجل (المصاداة / الإيكولاليا).',
        'يظهر استجابات ضعيفة أو متأخرة للمثيرات السمعية اليومية.',
        'يهمهم ويدندن بنغمات صوتية مستمرة طوال الوقت.',
        'يبدو حائراً وعاجزاً عن تحديد مصدر واتجاه الصوت من حوله.',
        'تاريخ متكرر من التهابات الأذن الوسطى.',
        'يسمع الأصوات الطبيعية جيداً ولكنه يجد صعوبة في الإنصات والتركيز الصوتي.',
        'لا يستجيب عند النداء على اسمه رغم سلامة حاسة السمع لديه.',
        'يهدأ ويسترخي بشكل ملحوظ عند الهمس المنخفض في أذنه.',
        'تضارب في الاستجابات السمعية؛ قد يبدو كفاقد للسمع أحياناً بينما يستجيب لأصوات خافتة أخرى.',
        'يستمتع بإعادة تشغيل مقطع صوتي محدد مراراً وتكراراً.',
        'ينزعج ويبكي بشدة عند سماع صوت بكاء أطفال آخرين.',
        'ينزعج من صوت احتكاك الملاعق بالأواني أو رنين السلاسل والمفاتيح المعدنية.',
        'يردد الكلمات أو الأصوات بنبرة صوت مرتفعة للغاية وغير مناسبة للموقف.',
        'الذعر والارتباك الشديد من الأصوات المفاجئة (فرقعة البالونات، أجهزة الإنذار، الرعد).',
        'ينزعج بشدة من أصوات السيارات الكبيرة والمحركات وضواغط القمامة.',
        'يغلق أذنيه بيديه ويصرخ عند تشغيل الأجهزة المنزلية المعتادة (المكنسة، الخلاط، السشوار).',
        'يهرب ويرتبك في الأماكن ذات الصدى الصوتي العالي (كالصالات والسلالم).',
        'يبدو مشتتاً وشارد الذهن تماماً في البيئات ذات الضوضاء الخلفية.',
        'ظهور نفور مفاجئ من أصوات كان يتقبلها سابقاً.',
        'صعوبة في التمييز بين المسافة النسبية لمصدر الصوت (الصوت القريب والبعيد).',
        'ينزعج بشدة أثناء قص الشعر بسبب صوت ماكينة الحلاقة أو حركة المقص.',
        'يقرب أذنه بشكل ملاصق من مصادر الصوت (سماعات التلفزيون والهاتف).',
        'يضع أذنه أو خده على الأجهزة التي تصدر اهتزازات ورنيناً (الغسالة، الثلاجة، زجاج السيارة).',
        'يضع يديه خلف أذنيه لتضخيم وتجسيم الأصوات المسموعة.',
        'ينزعج ويفزع من صوت فتح وغلق الأبواب أو النوافذ.',
        'يظهر انزعاجاً وتوتراً ملحوظاً من رنات الهاتف أو نغمات موسيقية بعينها.'
    ]
},
{
    id: 'vsl',
    icon: '👁️',
    shortName: 'النظام البصري',
    name: '4. النظام البصري (Visual)',
    items: [
        'يعاني من ضعف وقصور واضح في التواصل البصري المباشر مع الآخرين.',
        'يواجه صعوبة في التتبع البصري الدقيق ونقل انتباهه بسلاسة بين الأشياء.',
        'ينفر من ألوان محددة ويفضل لوناً واحداً بعينه في كل أدواته.',
        'يستمتع بالنظر والتحديق لفترات طويلة وممتدة في مصادر الضوء والمصابيح.',
        'يسكب صندوق الألعاب أو المكعبات ليرى ويدقق في طريقة سقوطها.',
        'يقضي وقتاً طويلاً يتابع بانبهار سريان الماء المتدفق من الصنبور.',
        'يراقب بدقة وانغماس ذرات الغبار أو الرمال المتطايرة في حزم الضوء.',
        'يرفرف بيديه أو يحرك أصابعه أمام عينيه وبمستوى بصره.',
        'يضغط بأصابعه على زوايا عينيه أو يدعكها لتوليد وميض ضوئي.',
        'يفضل البقاء في الظلام أو الإضاءة الخافتة جداً ويبدو أكثر استقراراً فيها.',
        'يشعل المصابيح ويطفئها مراراً وتكراراً بنمط تكراري.',
        'يقرب الأشياء والكتب جداً من عينيه لكي يتمكن من تفحصها.',
        'صعوبة نقل الرموز والرسومات من السبورة أو تذكر الأشكال البصرية.',
        'يكتفي بنظرات خاطفة وسريعة ويتجنب التحديق والملاحظة المتأنية.',
        'ينظر للأشياء بطرف عينيه (نظرة جانبية) أو يميل برأسه ليرى من زاوية مائلة.',
        'ينزعج ويبدي انفعالاً حاداً من فلاش الكاميرا أو الأضواء الساطعة.',
        'ينظر للأعلى أو إلى السقف باستمرار دون مبرر.',
        'يحدق في أصابع يديه ويتفحص خطوطها بشكل تكراري.',
        'يخاف ويرتبك من النظر لدرجات السلم أو الأسطح ذات النقوش الهندسية.',
        'ينجذب بشدة للنظر في الأدوات والأسطح الشفافة أو العاكسة للضوء.',
        'يقلب السيارات اللعبة ليدير عجلاتها ويراقب دورانها بانبهار.',
        'ينجذب بإفراط لفواصل إعلانية محددة تتضمن ألواناً سريعة ومتحركة.',
        'يحب التحديق في الأجسام المائية أو المسابح وانعكاسات الضوء عليها.',
        'يحرك قلماً أو خيطاً أو مسطرة بسرعة أمام عينيه ليشاهد حركتها.',
        'يتتبع بصرياً خطوط ونقوش السجاد أو أشكال ورق الحائط بإلحاح.',
        'يمسك حبلاً أو شريطاً ويؤرجحه في الهواء لمتابعة اهتزازه.',
        'ينظر إلى انعكاس صورته أو تحركاته في المرايا والزجاج لفترات مبالغ فيها.',
        'ينثر الرمال أو الأوراق الصغيرة في الهواء ويراقب سقوطها بدقة.',
        'يعتمد على النظرة الجانبية المتكررة عند التفاعل مع الأدوات أو الأشخاص.',
        'يتتبع باهتمام شديد أشكال الظلال وتحركاتها على الأرض والجدران.',
        'يواجه صعوبة في تقدير الأبعاد والمسافات المكانية بين الأشياء.',
        'صعوبة التمييز بين الرموز والحروف المتشابهة بصرياً.'
    ]
},
{
    id: 'olf',
    icon: '👃',
    shortName: 'حاسة الشم',
    name: '5. حاسة الشم (Olfactory)',
    items: [
        'يرفض تناول أطعمة معينة بمجرد استنشاق رائحتها.',
        'ينفر من روائح خفيفة لا يلاحظها أو ينزعج منها الأشخاص العاديون.',
        'يظهر عليه التوتر والقلق الشديد أثناء طهي الطعام في المنزل.',
        'يبدو أنه لا يميز ولا يلاحظ الروائح النفاذة والقوية من حوله.',
        'يبحث بنشاط عن الروائح الحادة والنفاذة لشمها مراراً.',
        'يشم كل الأطعمة والمشروبات بحذر قبل تناولها.',
        'قد يتناول أو يقترب من مواد خطرة لعدم استجابته للروائح التحذيرية.',
        'يشم الصابون والشامبو والمنظفات المنزلية برغبة شديدة.',
        'يصعب عليه تمييز أو تجنب الروائح الكريهة.',
        'يقترب من أجساد الأشخاص الجالسين حوله ليشتم روائحهم.',
        'يتفحص كافة الألعاب والأدوات المحيطة به عن طريق الشم قبل لمسها.',
        'يرفض تماماً استخدام معجون الأسنان بسبب رائحته.',
        'يشم الألعاب والأغراض البلاستيكية والمطاطية بأسلوب مفرط وغير مألوف.',
        'يقرب يديه وملابسه من أنفه ليشتمها بصفة متكررة طوال اليوم.',
        'يفضل الروائح الحامضية والنفاذة جداً كالخل وعصير الليمون.'
    ]
},
{
    id: 'gus',
    icon: '👅',
    shortName: 'التذوق والمدخل الفموي',
    name: '6. حاسة التذوق والمدخلات الفموية (Gustatory & Oral)',
    items: [
        'يضع مواد غير صالحة للأكل في فمه لتذوقها (كالصلصال، الأوراق، الخيوط).',
        'يقتصر على تناول الأطعمة شديدة السخونة أو شديدة البرودة فقط.',
        'ينفر تماماً من الأطعمة المتبلة أو الحارة ويفضل النكهات المحايدة جداً.',
        'يواجه صعوبة واضحة في مهارات المص والمضغ والبلع المنسق.',
        'يتقيأ أو يظهر رد فعل اختناق (Gagging) عند تذوق ملامس أطعمة متنوعة.',
        'يشم الطعام باستمرار ويفحصه فموياً بحذر شديد قبل قبوله.',
        'يفضل تناول الأطعمة المهروسة أو المقرمشة المقطعة لأجزاء متناهية الصغر.',
        'يحب الأطعمة شديدة القرمشة التي تحدث صوتاً مسموعاً أثناء المضغ.',
        'سيلان مفرط ومستمر للعاب (الريالة) بعد تجاوز عمر السنتين.',
        'يأكل أو يمضغ مواد غير غذائية مثل المناديل الورقية أو الرمال.',
        'يضع المجسمات والألعاب الصلبة داخل فمه بشكل مستمر لتفحصها.',
        'يمضغ أكمام القمصان، الياقات، أو أطراف الأقلام بشكل قهري.',
        'يبحث بشغف عن الأطعمة ذات النكهات القوية والمركّزة جداً.',
        'يفضل النكهات الشديدة (الحارة، الحامضة جداً، أو المالحة بكثافة).',
        'يتصرف كأنه لا يفرق بين مذاق طعام وآخر ويبدو المذاق لديه واحداً.',
        'يضع أصابعه ويديه باستمرار داخل الفم وحول منطقة الشفاه.',
        'يلعق أو يتذوق البراز نتيجة لاضطراب التغذية الراجعة الفموية.',
        'يشترط أطعمة ذات لون محدد ويرفض أي لون آخر.',
        'يلعق الأثاث، الجدران، أو زجاج النوافذ بلسانه.',
        'ينزعج بشدة من المشروبات الغازية أو الفوارة في الفم.',
        'يعشق ويبحث عن المشروبات الفوارة والغازية لإحساس اللسع والفقاعات.',
        'يضع الأجسام ذات الملمس المعدني البارد في فمه بشكل متكرر.',
        'انتقائية غذائية حادة ورفض الجمع بين قوامين مختلفين في اللقمة الواحدة.'
    ]
},
{
    id: 'mus',
    icon: '🫀',
    shortName: 'الحس الأحشائي',
    name: '7. الحس الأحشائي والداخلي (Interoception)',
    items: [
        'يتناول كميات كبيرة من الطعام بحثاً عن الشعور بالامتلاء دون أن يشعر بالشبع.',
        'يرفض الأكل تماماً ويشعر بامتلاء غير حقيقي مع أول لقمة.',
        'يطلب شرب كميات هائلة من الماء بشكل مستمر وغير طبيعي.',
        'يبكي ويصاب بنوبات فزع وتوتر حاد عند شعوره بالعطش البسيط.',
        'يضغط بقوة بيديه على أسفل البطن أثناء محاولة التبول.',
        'يتوتر ويضطرب جداً فور امتلاء مثانته بالبول ولا يستطيع الانتظار.',
        'يركض بقوة وعنف متعمداً لكي يشعر بنبضات قلبه السريعة.',
        'ينتابه الخوف والذعر الشديد عند تسارع نبضات قلبه بعد المجهود.',
        'يجهد عضلات صدره وتنفسه ليسمع صوت أنفاسه العالية بوضوح.',
        'يتوتر وينفعل جداً عند تسارع معدل تنفسه لأي سبب.',
        'يبحث عن الدفء والحرارة العالية لجسمه ويتحمل الملابس الثقيلة صيفاً.',
        'ينزعج بشدة من الإحساس بالحر أو أدنى إفراز للتعرق على جلده.',
        'يضغط بكل قوته على جسمه وأطرافه لتهدئة التوتر الداخلي.',
        'يصرخ ويتألم بشدة من أدنى مغص خفيف أو إحساس هضمي عابر.',
        'يطلب العناق والضغط الشديد على صدره وبطنه عند الإرهاق.'
    ]
},
{
    id: 'p',
    icon: '💪',
    shortName: 'الحس العميق',
    name: '8. الحس العضلي العميق والمفاصل (Proprioceptive)',
    items: [
        'مسكات يد غير متناسبة؛ إما قبضة خفيفة جداً ترتخي أو قوية جداً تمزق الورق.',
        'يمسك الأدوات بمعصمه وقبضة يده كاملة بدلاً من استخدام الأصابع.',
        'صعوبة كبيرة في ارتداء الملابس وغلق الأزرار واستخدام السحابات.',
        'صعوبة في مسك واستخدام الأدوات الوظيفية كالقلم، المقص، والمشط.',
        'صعوبة في رفع رأسه ويميل بجذعه ورأسه على الطاولة والذراع أثناء الجلوس.',
        'ضعف في التنسيق الحركي العام مثل تسلق الدرج، التقاط الكرة، والقفز.',
        'صعوبة واضحة في تعلم تسلسل الخطوات الحركية المتناسقة.',
        'ضعف ردود الفعل الحمائية لمد اليدين عند السقوط.',
        'صعوبة في تدوير مقابض الأبواب أو فتح وغلق العبوات والأغطية.',
        'الميل للعب الخشن، الصدم، والاصطدام المتعمد بالآخرين والأثاث.',
        'يحب الضغط الشديد والعصر للأشياء بين كفيه.',
        'يحتاج إلى الضغط والوزن الثقيل فوق جسده لكي يستطيع النوم.',
        'حساسية مفرطة لأوزان الملابس أو ملامس الأقمشة على المفاصل.',
        'يظهر توتراً عضلياً متصلباً وجسداً مشدوداً بشكل دائم.',
        'يرفض التربيت الخفيف والعناق ويفضل الضغط الشديد فقط.',
        'يسعى بنشاط للقفز العنيف، الاهتزاز، والأنشطة ذات المقاومة العالية.',
        'يضرب قدميه ويدق بقوة على الأرض في كل خطوة يخطوها.',
        'يرمي نفسه عمداً على الأرض أو على الوسائد بشكل متكرر.',
        'يراقب بصرياً حركة يديه وقدميه بدقة لتعويض ضعف الإحساس الموضعي لمفاصله.',
        'يطلب ويستمتع بالضغط الحركي الثقيل والعناق العميق المتماسك.',
        'يضغط ويجز على أسنانه (الصرير) بشكل متكرر خلال اليوم.',
        'يشد شعره، يفرك مفاصل أصابعه، أو يضغط على أصابعه بقوة.',
        'يحب أن يُلف أو يُغطى بإحكام شديد بأغطية ثقيلة وقت النوم.',
        'يفضل ارتداء الملابس الضيقة والأحزمة المشدودة حول جسمه.',
        'يستمتع ويبحث عن أنشطة الدفع، السحب، ورفع الأوزان الثقيلة (Heavy Work).',
        'يتخذ وضعيات جسدية غريبة وغير مريحة لفترات زمنية طويلة.',
        'يمشي على أطراف أصابعه بشكل متكرر لتوليد ضغط إضافي على أوتار الساق.',
        'يجد صعوبة في الحكم والتمييز بين أوزان الأشياء الثقيلة والخفيفة.',
        'يواجه صعوبة في استخدام جانبين مختلفين من الجسم في مهمة مشتركة.',
        'يحب المساج العضلي الضاغط والتدليك العميق للمفاصل.',
        'يبدو غير مدرك لموقع الجزء المضغوط من جسده عند إغلاق عينيه.',
        'يعتمد على يد واحدة فقط ويتجاهل اليد المساندة أثناء المهام.',
        'ضعف قوة القبضة واستخدام أسلوب مسك للأشياء لا يناسب مرحلته العمرية.'
    ]
},
{
    id: 'c',
    icon: '🔄',
    shortName: 'السلوكي والنمطي',
    name: '9. الحسي السلوكي والنمطي (Sensory-Behavioral & Routine)',
    items: [
        'يصر على السير في طريق محدد وثابت في كل مرة يخرج فيها.',
        'يصر على ارتداء ملابس أو طقم بعينه ويرفض استبداله تماماً.',
        'يتحدث بنبرة آلية رتيبة وبطريقة محفوظة وثابتة للرد في مختلف المواقف.',
        'يظهر طريقة مشي نمطية أو آلية متصلبة تشبه حركة الروبوت.',
        'يمسك بكتاب، مجلة، أو غرض محدد بصفة دائمة ويبحث عنه بقلق إذا فُقد.',
        'يتمسك بأدواته الخاصة بشكل صارم ويرفض استخدام أي بديل.',
        'ينزعج بشدة وتظهر عليه علامات الضيق والارتباك الحاد عند تغير الروتين اليومي.',
        'نوبات بكاء وصراخ طويلة ومتكررة خلال اليوم (تتجاوز 30 إلى 60 دقيقة في المرة).',
        'يرفض تماماً الذهاب إلى أماكن جديدة أو غير مألوفة بالنسبة له.',
        'صعوبة بالغة في الاندماج والتفاعل المشترك مع أقرانه أو مع البالغين.',
        'التعلق بلعبة أو أداتين واستخدامهما بطريقة تكرارية نمطية بدون هدف وظيفي.',
        'الانعزال أو الهروب للنوم عند التعرض للمثيرات الكثيفة أو الأماكن المزدحمة.',
        'صعوبة شديدة في الانتقال بين الأنشطة أو اتباع التسلسل اليومي بسهولة.',
        'تكسير الألعاب وتخريب الأدوات بصفة متكررة نتيجة لاندفاعية حسية.',
        'عدم إدراك كيفية التعامل برفق وحذر مع الحيوانات الأليفة أو الأشياء الهشة.',
        'التعلق المفرط وغير المبرر بأشياء أو موضوعات محددة وصعوبة صرف انتباهه.',
        'الاستيقاظ النمطي الصارم مع شروق الشمس يومياً دون مرونة.',
        'انعدام أو تدني إدراك المخاطر مقارنة بالأقران في نفس الفئة العمرية.',
        'مخاوف شديدة ومبالغ فيها وردود فعل فزع غير متناسبة مع الموقف الحقيقي.',
        'الإصرار على الجلوس أو التواجد في ركن ومكان محدد بالمنزل بشكل دائم.',
        'سرعة الانفعال والتأثر العاطفي والارتباك الحاد عند حدوث أي تغير مفاجئ في الأحداث.',
        'تقلبات مزاجية سريعة ونوبات غضب حادة وغير متوقعة.',
        'الإفراط والنشاط الحركي الزائد وغير الموجه في أرجاء المكان.',
        'الاندفاعية الشديدة وسهولة التشتت والارتباك من أي مثير محيط.'
    ]
}
];

// المتغيرات الحالية للتبويب ونوع العرض
let currentDomainTab = 'v';   // التبويب النشط الافتراضي
let currentItemFilter = 'all'; // نوع الفلترة: all (الكل)، affected (المتأثر فقط)

/**
 * دالة بناء شريط تبويبات المجالات التسعة
 */
function renderDomainTabs() {
    const tabsContainer = document.getElementById('domainTabsContainer');
    if (!tabsContainer) return;

    let html = `
        <button type="button" class="domain-tab-btn ${currentDomainTab === 'all' ? 'active' : ''}" onclick="switchDomainTab('all')">
            <span class="tab-icon">🌐</span>
            <span class="tab-title">عرض الكل</span>
            <span class="tab-badge" id="tab_badge_all">0</span>
        </button>
    `;

    domainsData.forEach(domain => {
        const isActive = currentDomainTab === domain.id;
        html += `
            <button type="button" class="domain-tab-btn ${isActive ? 'active' : ''}" id="tab_btn_${domain.id}" onclick="switchDomainTab('${domain.id}')">
                <span class="tab-icon">${domain.icon}</span>
                <span class="tab-title">${domain.shortName}</span>
                <span class="tab-badge" id="tab_badge_${domain.id}">0</span>
            </button>
        `;
    });

    tabsContainer.innerHTML = html;
}

/**
 * دالة التبديل بين تبويبات المجالات
 */
function switchDomainTab(domainId) {
    currentDomainTab = domainId;

    // تحديث أزرار التبويب
    document.querySelectorAll('.domain-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (domainId === 'all') {
        document.querySelector('.domain-tab-btn')?.classList.add('active');
    } else {
        document.getElementById(`tab_btn_${domainId}`)?.classList.add('active');
    }

    // إظهار وإخفاء كروت المجالات
    domainsData.forEach(d => {
        const card = document.getElementById(`domain_card_${d.id}`);
        if (card) {
            if (domainId === 'all' || domainId === d.id) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // تحديث شريط التنقل السفلي (السابق / التالي)
    updateTabStepper();
}

/**
 * تحديث أزرار التنقل السفلية بين المجالات (السابق / التالي)
 */
function updateTabStepper() {
    const stepperContainer = document.getElementById('tabStepperNav');
    if (!stepperContainer) return;

    if (currentDomainTab === 'all') {
        stepperContainer.style.display = 'none';
        return;
    }

    stepperContainer.style.display = 'flex';
    const currentIndex = domainsData.findIndex(d => d.id === currentDomainTab);
    const prevDomain = currentIndex > 0 ? domainsData[currentIndex - 1] : null;
    const nextDomain = currentIndex < domainsData.length - 1 ? domainsData[currentIndex + 1] : null;

    let html = '';
    if (prevDomain) {
        html += `
            <button type="button" class="btn btn-stepper prev" onclick="switchDomainTab('${prevDomain.id}')">
                <span>➡️ السابق: ${prevDomain.shortName}</span>
            </button>
        `;
    } else {
        html += `<div></div>`;
    }

    // زر سريع لتحديد باقي بنود هذا المجال كطبيعي
    html += `
        <button type="button" class="btn btn-quick-normal" onclick="setDomainAllNormal('${currentDomainTab}')" title="جعل كل بنود هذا المجال بدرجة 0 طبيعي لتوفير وقت الإدخال">
            <span>✅ إكمال هذا المجال كطبيعي (0)</span>
        </button>
    `;

    if (nextDomain) {
        html += `
            <button type="button" class="btn btn-stepper next" onclick="switchDomainTab('${nextDomain.id}')">
                <span>التالي: ${nextDomain.shortName} ⬅️</span>
            </button>
        `;
    } else {
        html += `
            <button type="button" class="btn btn-stepper finish" onclick="generateFullReport()">
                <span>استخراج التقرير النهائي 📊</span>
            </button>
        `;
    }

    stepperContainer.innerHTML = html;
}

/**
 * دالة سريعة لضبط كل بنود مجال معين على 0 (طبيعي)
 */
function setDomainAllNormal(domainId) {
    const domain = domainsData.find(d => d.id === domainId);
    if (!domain) return;

    domain.items.forEach((_, idx) => {
        const num = idx + 1;
        setScore(`${domain.id}_${num}`, 0);
    });

    // تفريغ البند اليدوي
    const mScore = document.getElementById(`${domain.id}_manual_score`);
    if (mScore) mScore.value = '0';
    const mText = document.getElementById(`${domain.id}_manual_text`);
    if (mText) mText.value = '';

    updateLiveStats();
}

/**
 * دالة تغيير نوع الفلترة (الكل / المتأثر فقط)
 */
function setFilterView(filterType) {
    currentItemFilter = filterType;

    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    document.getElementById(`filter_${filterType}`)?.classList.add('active');

    // تطبيق الفلترة على البنود الظاهرة
    filterVisibleItems();
}

/**
 * تطبيق الفلترة البصرية على البنود
 */
function filterVisibleItems() {
    const rows = document.querySelectorAll('.item-row');
    rows.forEach(row => {
        const fieldPrefix = row.getAttribute('data-field');
        if (!fieldPrefix) return;

        const scoreInput = document.getElementById(`${fieldPrefix}_score`);
        const score = scoreInput ? parseInt(scoreInput.value) || 0 : 0;

        if (currentItemFilter === 'affected') {
            if (score > 0) {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        } else {
            row.style.display = 'flex';
        }
    });
}

/**
 * تعيين الدرجة بنقرة واحدة سريعة مع تحديث الواجهة التفاعلية
 */
function setScore(fieldPrefix, score) {
    // 1. تحديث الحقل الخفي
    const hiddenInput = document.getElementById(`${fieldPrefix}_score`);
    if (hiddenInput) {
        hiddenInput.value = score;
    }

    // 2. تحديث أزرار الـ Pills لهذا البند
    const parentRow = document.querySelector(`.item-row[data-field="${fieldPrefix}"]`);
    if (parentRow) {
        parentRow.querySelectorAll('.score-pill').forEach(btn => {
            const btnScore = parseInt(btn.getAttribute('data-score'));
            if (btnScore === score) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // تمييز بصري للصف عند وجود صعوبة (درجة > 0)
        if (score > 0) {
            parentRow.classList.add('has-difficulty');
            parentRow.setAttribute('data-difficulty-level', score);
        } else {
            parentRow.classList.remove('has-difficulty');
            parentRow.removeAttribute('data-difficulty-level');
        }
    }

    // 3. تحديث الإحصائيات الحية
    updateLiveStats();

    // 4. تطبيق الفلترة إن كانت نشطة
    if (currentItemFilter === 'affected') {
        filterVisibleItems();
    }
}

/**
 * تعيين نوع الاستجابة (فرط استجابة أو نقص استجابة) بنقرة واحدة سريعة
 */
function setType(fieldPrefix, type) {
    // 1. تحديث الحقل الخفي
    const hiddenInput = document.getElementById(`${fieldPrefix}_type`);
    if (hiddenInput) {
        hiddenInput.value = type;
    }

    // 2. تحديث أزرار الـ Toggle
    const parentRow = document.querySelector(`.item-row[data-field="${fieldPrefix}"]`);
    if (parentRow) {
        parentRow.querySelectorAll('.type-pill').forEach(btn => {
            const btnType = btn.getAttribute('data-type');
            if (btnType === type) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (type === 'hyper') {
            parentRow.classList.add('type-hyper-selected');
            parentRow.classList.remove('type-hypo-selected');
        } else {
            parentRow.classList.add('type-hypo-selected');
            parentRow.classList.remove('type-hyper-selected');
        }
    }

    updateLiveStats();
}

/**
 * دالة بناء وتجميع استمارة المجالات والبنود بنظام أزرار النقر السريع (Fast-Pills)
 */
function renderDomainsForm(filterText = '') {
    const container = document.getElementById('domainsContainer');
    if (!container) return;
    container.innerHTML = '';

    const cleanFilter = filterText.trim().toLowerCase();

    // بناء شريط التبويبات أولاً
    renderDomainTabs();

    domainsData.forEach(domain => {
        // فحص البنود المطابقة للبحث
        const matchingItems = domain.items.map((itemText, index) => ({ text: itemText, index: index }))
            .filter(itemObj => cleanFilter === '' || itemObj.text.toLowerCase().includes(cleanFilter) || domain.name.toLowerCase().includes(cleanFilter));

        if (cleanFilter !== '' && matchingItems.length === 0) {
            return;
        }

        const isCurrentTab = (currentDomainTab === 'all' || currentDomainTab === domain.id);

        let html = `
        <div class="domain-block" id="domain_card_${domain.id}" style="display: ${isCurrentTab ? 'block' : 'none'};">
            <div class="domain-header-bar">
                <div class="domain-title-group">
                    <span class="domain-header-icon">${domain.icon}</span>
                    <h4 class="domain-title">${domain.name}</h4>
                </div>
                <div class="domain-header-actions">
                    <button type="button" class="btn-micro" onclick="setDomainAllNormal('${domain.id}')" title="تحديد جميع بنود هذا المجال كطبيعي (0)">
                        ✅ كل البنود طبيعي
                    </button>
                    <span class="domain-count-badge">${domain.items.length} بند</span>
                </div>
            </div>`;

        // رسم البنود بالأزرار التفاعلية السريعة
        (cleanFilter === '' ? domain.items.map((t, idx) => ({ text: t, index: idx })) : matchingItems).forEach(itemObj => {
            const num = itemObj.index + 1;
            const fieldPrefix = `${domain.id}_${num}`;
            
            let displayedText = itemObj.text;
            if (cleanFilter) {
                const regex = new RegExp(`(${cleanFilter})`, 'gi');
                displayedText = displayedText.replace(regex, '<mark class="highlight-search">$1</mark>');
            }

            html += `
            <div class="item-row" data-domain="${domain.id}" data-field="${fieldPrefix}">
                <div class="item-info">
                    <span class="item-badge-num">${num}</span>
                    <span class="item-text">${displayedText}</span>
                </div>

                <div class="controls-interactive-group">
                    <!-- أزرار تحديد الدرجة بنقرة واحدة -->
                    <div class="score-pills" role="radiogroup" aria-label="درجة الشدة">
                        <button type="button" class="score-pill pill-0 active" data-score="0" onclick="setScore('${fieldPrefix}', 0)" title="0 - طبيعي">0 طبيعي</button>
                        <button type="button" class="score-pill pill-1" data-score="1" onclick="setScore('${fieldPrefix}', 1)" title="1 - بسيط">1 بسيط</button>
                        <button type="button" class="score-pill pill-2" data-score="2" onclick="setScore('${fieldPrefix}', 2)" title="2 - متوسط">2 متوسط</button>
                        <button type="button" class="score-pill pill-3" data-score="3" onclick="setScore('${fieldPrefix}', 3)" title="3 - شديد">3 شديد</button>
                    </div>

                    <!-- أزرار تبديل نوع الاستجابة بنقرة واحدة -->
                    <div class="type-pills" role="radiogroup" aria-label="نوع الاستجابة">
                        <button type="button" class="type-pill pill-hyper active" data-type="hyper" onclick="setType('${fieldPrefix}', 'hyper')" title="فرط استجابة وتجنب">🔴 فرط / تجنب</button>
                        <button type="button" class="type-pill pill-hypo" data-type="hypo" onclick="setType('${fieldPrefix}', 'hypo')" title="نقص استجابة وخمول وبحث">🔵 نقص / بحث</button>
                    </div>

                    <!-- الحقول الخفية لضمان التوافق التام مع الحفظ والتقارير -->
                    <input type="hidden" id="${fieldPrefix}_score" value="0">
                    <input type="hidden" id="${fieldPrefix}_type" value="hyper">
                </div>
            </div>`;
        });

        // صف البند اليدوي المخصص للأخصائي
        const manualNum = domain.items.length + 1;
        html += `
        <div class="manual-row" data-domain="${domain.id}">
            <label class="manual-label">➕ ${manualNum}. إضافة بند سلوكي مخصص (يدوي للأخصائي):</label>
            <div class="manual-controls">
                <input type="text" id="${domain.id}_manual_text" placeholder="اكتب وصف السلوك الملاحظ هنا..." class="manual-input" oninput="updateLiveStats()">
                <div class="score-pills" style="margin: 0;">
                    <select id="${domain.id}_manual_score" class="score-select" onchange="updateLiveStats()" style="padding: 7px 10px; border-radius: 8px; font-weight: bold;">
                        <option value="0">0 - طبيعي</option>
                        <option value="1">1 - بسيط</option>
                        <option value="2">2 - متوسط</option>
                        <option value="3">3 - شديد</option>
                    </select>
                </div>
                <div class="type-pills" style="margin: 0;">
                    <select id="${domain.id}_manual_type" class="type-select" onchange="updateLiveStats()" style="padding: 7px 10px; border-radius: 8px;">
                        <option value="hyper">🔴 فرط استجابة / تجنب</option>
                        <option value="hypo">🔵 نقص استجابة / خمول وبحث</option>
                    </select>
                </div>
            </div>
        </div></div>`;

        container.innerHTML += html;
    });

    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-search-alert">🔍 لا توجد بنود حسية مطابقة لكلمة البحث في هذا التبويب.</div>';
    }

    // تحديث أزرار التنقل السفلية
    updateTabStepper();
}

/**
 * تحديث حالة الأزرار المرئية (Pills) بعد استرجاع درجات من السجل
 */
function refreshPillsUI() {
    domainsData.forEach(domain => {
        domain.items.forEach((_, idx) => {
            const num = idx + 1;
            const fieldPrefix = `${domain.id}_${num}`;
            const hiddenScore = document.getElementById(`${fieldPrefix}_score`);
            const hiddenType = document.getElementById(`${fieldPrefix}_type`);

            if (hiddenScore) {
                const score = parseInt(hiddenScore.value) || 0;
                setScore(fieldPrefix, score);
            }
            if (hiddenType) {
                const type = hiddenType.value || 'hyper';
                setType(fieldPrefix, type);
            }
        });
    });
}
