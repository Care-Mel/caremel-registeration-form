// import React from "react";
import { head } from "framer-motion/client";
import plus from "./../../assets/image/faPlus.png";

const CaregiverPower = () => {
  const infoList = [
    {
      title: "Caregiver ၏ လုပ်ပိုင်ခွင့်အာဏာ",
      content: [
        "Caregiver များသည် ပလက်ဖောင်းမှ ကမ်းလှမ်းသော အလုပ်များကို လက်မခံမီ ငြင်းပယ်ပိုင်ခွင့်ရှိသည်။",
        "Caregiver များသည် ဝန်ဆောင်မှုပေးစဉ်ကာလအတွင်း အရေးပေါ်အကူအညီ လိုအပ်ပါက အရေးပေါ်ဌာနကို (ဥပမာ- 911 ကို ခေါ်ဆိုခြင်း) အကူအညီတောင်းခံနိုင်သည်။",
        "Caregiver များသည် မိမိ Duty မဆင်းနိုင်သော ရက်များကို ကြိုတင်အသိပေးနိုင်သည်။",
        "Caregiver များသည် Service သုံးစွဲသူများအားစောင့်‌‌ရှောက်ရန် တရားဝင်နှင့် ပရော်ဖက်ရှင်နယ် လိုအပ်ချက်များ၊ အသိအမှတ်ပြုစာရွက်စာတမ်းများကို ဖြည့်ဆည်းထားရှိ ရမည်။",
      ],
    },
  ];

  const ruleList = [
    {
      title: "သဘောတူညီချက်ကို ရပ်စဲခြင်း   ",
      header:
        " နှစ်ဦးနှစ်ဖက်စလုံးသည် တစ်ပတ်ကြိုတင် အသိပေးခြင်းဖြင့် ဤသဘောတူညီချက်ကို ရပ်စဲနိုင်သည်။",
      content: [
        {
          desc: "အောက်ပါအခြေအနေများတွင် ချက်ချင်းရပ်စဲနိုင်သည်",
          body: [
            "Caregiver သည် အရည်အချင်းမပြည့်မီတော့ခြင်း (သို့မဟုတ်) တရားဝင်အလုပ် လုပ်ခွင့် ဆုံးရှုံးခြင်း။",
            "Service သုံးစွဲသူသည် သေဆုံးခြင်း (သို့မဟုတ်) အခြားအကြောင်းကြောင့် ဝန်ဆောင်မှု မလိုအပ်တော့ခြင်း။",
            "Caregiver သည် ငွေကြေးဆိုင်ရာ ချိုးဖောက်ခြင်း (သို့မဟုတ်) တရားဝင် အမှန်တကယ် မသန်စွမ်းဖြစ်ခြင်း။",
          ],
        },
      ],
    },
    {
      title: "ရပ်စဲခြင်း၏ အကျိုးသက်ရောက်မှု",
      content: [
        {
          desc: "ရပ်စဲခြင်းအပြီးတွင်",
          body: [
            "ပလက်ဖောင်း (သို့မဟုတ်) Service သုံးစွဲသူများနှင့် သက်ဆိုင်သည့် မှတ်တမ်းများ၊ ပစ္စည်းများနှင့် စာရွက်စာတမ်းများအားလုံးကို ချက်ချင်း ပြန်လည်ပေးအပ်ရမည်။Caregiver သည် ပလက်ဖောင်းနှင့် ဆက်စပ်မှု (သို့မဟုတ်) ကိုယ်စားပြုမှုအားလုံးကို ရပ်စဲရမည်။",
            "ဤစည်းမျဉ်းစည်းကမ်းများသည် Caregiver များနှင့် Service သုံးစွဲသူများ အကြား နှစ်ဦးနှစ်ဖက်လုံးကို ကာကွယ်ရန်နှင့် Care Mel ပလက်ဖောင်းတွင် ပရော်ဖက်ရှင်နယ်ဆန်၍ လုံခြုံသော ဝန်ဆောင်မှုများကို ပေးစွမ်းနိုင်စေရန် ရည်ရွယ်၍ ချမှတ်ထားသည့် စည်းမျဉ်း စည်းကမ်းများ ဖြစ်ပါသည်။",
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="space-y-2">
        {infoList.map((item, index) => (
          <div key={index} className="mb-10">
            <span className="font-bold text-[16px] text-secondary">
              {item.title}
            </span>
            <div className="pl-4 mt-5">
              {" "}
              {/* Reduced margin for closer spacing */}
              {item.content.map((content, idx) => (
                <div key={idx} className="flex items-start mb-5 text-[14px]">
                  {/* Added 'items-center' and some margin */}
                  <img src={plus} className="mr-2 mt-3" />
                  {/* Adjusted color */}
                  <span className="leading-[36px]">{content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 mt-10">
        {ruleList.map((item, index) => (
          <div key={index} className="mb-10">
            <span className="font-bold text-[16px] text-secondary">
              {item.title}
            </span>
            {item.header && (
              <div className="pl-4 mt-5 flex items-start mb-5">
                <img src={plus} className="mr-2 mt-3" />
                <span className="text-[14px] leading-[32px]">
                  {item.header}
                </span>
              </div>
            )}
            <div className="pl-4 mt-10">
              {/* Reduced margin for closer spacing */}
              {item.content.map((content, idx) => (
                <div key={idx} className="text-[14px]">
                  <p className="ms-5 mb-5 font-bold text-secondary">
                    {content.desc}
                  </p>
                  {content.body.map((b, i) => (
                    <div key={i} className="flex items-start mb-5">
                      <img src={plus} className="mr-2 mt-3" />
                      <span className="leading-[32px]">{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverPower;
