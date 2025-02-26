// import React from "react";
import plus from "./../../assets/image/faPlus.png";

const HomeRule = () => {
  const infoList = [
    {
      title: "နေအိမ်/လုပ်ငန်းခွင် စည်းကမ်းများ",
      content: [
        " Caregiver များသည် Service သုံးစွဲသူများ၏ ကိုယ်ပိုင်နေရာများ (သို့မဟုတ်) ပိုင်ဆိုင်သည့်ပစ္စည်းဥစ္စာများကို ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်ခွင့်/ကိုင်တွယ်အသုံးပြုခွင့် မရှိပါ။",
        "Caregiver များသည် Service သုံးစွဲသူများ၏ သဘောတူညီချက်မရှိဘဲ မိမိသဘောဖြင့် ၎င်းတို့၏နေအိမ်၊ တည်နေရာ (သို့မဟုတ်) နေ့စဉ်လုပ်ငန်းဆောင်တာ လှုပ်ရှားမှုများအား အခြားသူစိမ်းများ (သို့မဟုတ်) တတိယပုဂ္ဂလိုလ်များထံ မျှဝေခြင်းမပြုရပါ။",
      ],
    },
    {
      title: "ဆောင်ရွက်ရမည့် လုပ်ငန်းတာဝန်များ",
      content: [
        "သက်ကြီးရွယ်အိုများ (သို့မဟုတ်) ကလေးသူငယ်များကို စောင့်ရှောက်ရန်အတွက် ပလက်ဖောင်း၏ အခြေခံအရည်အသွေးများနှင့် ပြည့်မီသော Caregiver များကိုသာ အတည်ပြု ရွေးချယ်ပါမည်။",
        "Caregiver များသည် Service သုံးစွဲသူများကို လေးစားရန်နှင့် ၎င်းတို့၏ နေရာများကို အစဉ်အမြဲ ဘေးကင်းလုံခြုံမှုရှိစေရန် ဂရုပြုရမည်။",
        "Caregiver များသည် မိမိတို့၏ ကျွမ်းကျင်မှုအပေါ် မူတည်၍ အထူးဝန်ဆောင်မှု အမျိုးအစားများ (ဥပမာ- သက်ကြီးရွယ်အိုစောင့်ရှောက်မှု၊ ကလေးသူငယ်စောင့်ရှောက်မှု) တို့ကို ရွေးချယ်နိုင်သည်။",
        "အပိုဝန်ဆောင်မှုများအတွက် ခွင့်ပြုချက်အရ အပိုဝန်ဆောင်ခများ ကမ်းလှမ်းနိုင်ပါသည်။",
        "Caregiver များသည် Service သုံးစွဲသူများထံမှ ငွေကြေး (သို့မဟုတ်) ပစ္စည်း လက်ဆောင်များ လက်ခံခြင်းကို တင်းကြပ်စွာ တားမြစ်ထားသည်။",
        "ဤသဘောတူညီချက်ကို ချိုးဖောက်သည့် Caregiver များသည် ပျက်စီးဆုံးရှုံးမှုများ အတွက် ပလက်ဖောင်းကို ထိုက်သင့်သည့်လျော်ကြေးပေးဆောင်ရမည်။",
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
                  <img src={plus} className="mr-2 mt-2" />
                  {/* Adjusted color */}
                  <span className="leading-[32px]">{content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRule;
