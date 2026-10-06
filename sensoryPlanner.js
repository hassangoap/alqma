import { GoogleGenAI, Type } from "@google/genai";

// 1. تهيئة الكائن مع مفتاح API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * دالة لتوليد الخطة الحسية المخصصة من التقرير
 * @param {string} reportText - نص التقرير الحسي للطفل
 */
async function generateSensoryPlan(reportText) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `الرجاء تحليل التقرير الحسي التالي وتوليد الخطة العلاجية المخصصة:

--- بداية التقرير ---
${reportText}
--- نهاية التقرير ---

تنبيه هام: يجب الالتزام الكامل بعدم تكرار أي نشاط عبر البنود مختلفة.`,
      config: {
        systemInstruction: `أنت أخصائي علاج شغلي وتكامل حسي متقدم. 
مهامك هي تحليل التقرير الحسي المرفق وإنشاء خطة علاجية مخصصة للطفل.
قواعد صارمة:
1. يمنع تكرار النشاط نفسه لأكثر من بند حسي؛ يجب اختيار نشاط فريد ومخصص لكل حاسة وشدة.
2. لفرط الاستجابة: اختر أنشطة ضغط عميق وتهدئة واستقرار وتقليل للمثيرات.
3. لنقص الاستجابة: اختر أنشطة تحفيز وعمل ثقيل (Heavy Work) وحركة ديناميكية.
4. اضبط التكرار والمدة حسب مستوى الشدة (1/3 خفيف، 2/3 متوسط، 3/3 مكثف ومقسم).`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            child_summary: {
              type: Type.OBJECT,
              properties: {
                overall_sensory_profile: { 
                  type: Type.STRING, 
                  description: "ملخص الحالة الحسية العامة للطفل" 
                },
                primary_goals: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "الأهداف العلاجية الرئيسية"
                }
              },
              required: ["overall_sensory_profile", "primary_goals"]
            },
            sensory_plan: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  sensory_system: { 
                    type: Type.STRING, 
                    description: "اسم النظام الحسي (مثلاً: الدهليزي، الحس العميق...)" 
                  },
                  response_type: { 
                    type: Type.STRING, 
                    enum: ["فرط استجابة", "نقص استجابة"],
                    description: "نوع الاستجابة الحسية"
                  },
                  severity_level: { 
                    type: Type.STRING, 
                    description: "مستوى الشدة (مثال: 1/3, 2/3, 3/3)" 
                  },
                  activity_name: { 
                    type: Type.STRING, 
                    description: "اسم النشاط الفريد والمستهدف" 
                  },
                  activity_description: { 
                    type: Type.STRING, 
                    description: "وصف دقيق لطريقة تنفيذ النشاط" 
                  },
                  frequency_and_duration: { 
                    type: Type.STRING, 
                    description: "المدة والتكرار اليومي الموصى به" 
                  },
                  safety_precautions: { 
                    type: Type.STRING, 
                    description: "تعليمات الأمان أثناء تنفيذ النشاط" 
                  }
                },
                required: [
                  "sensory_system",
                  "response_type",
                  "severity_level",
                  "activity_name",
                  "activity_description",
                  "frequency_and_duration"
                ]
              }
            }
          },
          required: ["child_summary", "sensory_plan"]
        }
      }
    });

    // تحويل النتيجة لـ JSON Object جاهز للفرز والاستخدام
    const resultJson = JSON.parse(response.text);
    return resultJson;

  } catch (error) {
    console.error("خطأ أثناء توليد الخطة الحسية:", error);
    throw error;
  }
}

// --- مثال على التشغيل ---
const sampleReport = `
الطفل أحمد 6 سنوات:
- ينزعج بشكل شديد جداً من أصوات الخلاط والمكانس الكهربائية (سمعي 3/3).
- يخاف من الأرجوحة ولا يحب ترك قدميه بعيداً عن الأرض (دهليزي 2/3).
- يحب القفز المستمر والصدم بجسمه في الحوائط والأثاث بصفة دائمة (حس عميق - نقص استجابة 3/3).
- يستمتع بتتبع الأضواء المتحركة والألعاب المضيئة (بصري - نقص استجابة 1/3).
`;

generateSensoryPlan(sampleReport).then((plan) => {
  console.log("الخطة الحسية المGenerated:", JSON.stringify(plan, null, 2));
});
