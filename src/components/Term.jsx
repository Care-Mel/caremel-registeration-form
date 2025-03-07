import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Term = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-[24px] font-semibold text-secondary text-center mb-4">
        Term & Conditions of Care Me! service
      </h1>

      <p className="text-[16px] text-center  font-bold text-secondary mb-6">
        Before proceeding, we kindly ask that you review and agree to our terms and conditions.
      </p>

      {/* Information Privacy Section */}
      <section className="mb-6">
        <h2 className="text-[20px] font-medium text-secondary mb-3">
          Service အသုံးပြုသူ၏ တာဝန်ဝတ္တရားများ{" "}
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-gray-600 text-[16px]">
            စောင့်ရှောက်မှု Service သုံးစွဲလိုသူသည် ကြိုတင် Booking မှာယူသည့် ဝန်ဆောင်မှုရယူရန်
            မိမိ၏ ကိုယ်ရေးအချက်အလက်များဖြင့် စာရင်းသွင်းရမည်ဖြစ်သည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            မိမိတို့အကောင့်လုံခြုံရေးအတွက် တာဝန်ရှိပြီး အကောင့်လုံခြုံရေး ချိုးဖျက်ခံရပါက
            ပလက်ဖောင်းသို့ ချက်ချင်းအကြောင်းကြားရမည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            ရည်ညွှန်းထားသည့် Caregiver ဝန်ဆောင်မှုပေးသူသည် ယခင်က တာဝန်ပေးခဲ့ဖူးခြင်း (သို့မဟုတ်)
            အခြားနည်းဖြင့် ဆက်သွယ်ခြင်းများရှိပါက ပလက်ဖောင်းအား ချက်ချင်း အသိပေးရန်။
          </li>
          <li className="text-gray-600 text-[16px]">
            ပလက်ဖောင်းသည် Caregiver ဝန်ဆောင်မှုပေးသူ၏ စောင့်ရှောက်ခြင်းဆိုင်ရာ လုပ်ငန်းတာဝန်များအား
            ချုပ်ကိုင်လမ်းညွှန်ခြင်းမရှိပါ။ Service အသုံးပြုသူတွင်သာ Caregiver
            ဝန်ဆောင်မှုပေးသူများအား လိုအပ်ချက်များနှင့်အညီ စီမံခန့်ခွဲရန် တာဝန်အပြည့်ရှိပါသည်။
          </li>
        </ul>
      </section>

      {/* Payment Rule Section */}
      <section className="mb-6">
        <h2 className="text-[20px] font-medium text-secondary mb-3">ငွေပေးချေမှုနှုန်းထား</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-gray-600 text-[16px]">
            နေ့စဉ်၊ အပတ်စဉ်၊ လစဉ် လုပ်ငန်းတာဝန်များအတွက် ငွေတောင်းခံလွှာများ ထုတ်ပေးမည်ဖြစ်ပြီး
            ငွေပေးချေမှုကို ပလက်ဖောင်း၏ ငွေပေးချေမှုစနစ်မှတစ်ဆင့် ပေးချေရမည်ဖြစ်ပါသည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            ငွေပေးချေမှုကို Caregiver ဝန်ဆောင်မှုပေးသူများထံ တိုက်ရိုက်ပေးချေခြင်းပြုလုပ်၍မရပါ။
            ထိုသို့ တိုက်ရိုက်ပေးချေခြင်းပြုလုပ်ပါက ဝန်ဆောင်မှုအတွက် မလိုလားအပ်သည့်
            အနှောင့်အယှက်များ ဖြစ်ပေါ်လာနိုင်ပါသည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            အစိုးရရုံးပိတ်ရက်များတွင် ဝန်ဆောင်ခများအား နေ့စဉ်ပုံမှန်နှုန်းထားထက် ၁.၅ ဆ တိုး၍
            ကောက်ခံသွားမည်ဖြစ်ပါသည်။
          </li>
        </ul>
      </section>

      {/* Safety Promises Section */}
      <section className="mb-6">
        <h2 className="text-[20px] font-medium text-secondary mb-3">
          Caregiver ဝန်ဆောင်မှုပေးသူအား စစ်ဆေးခြင်းနှင့် အရည်အချင်း
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-gray-600 text-[16px]">
            ပလက်ဖောင်းသည် Caregiver ဝန်ဆောင်မှုပေးသူများ၏ နောက်ကြောင်း ရာဇဝင်နှင့် အ‌ရည်အချင်းများ
            အမှန်တကယ် ရှိ/မရှိကို တင်းကြပ်စွာ စစ်ဆေးပါသည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            ပလက်ဖောင်းမှ မှန်ကန်သောအချက်အလက်များကိုသာ ဖော်ပြပေးမည်ဖြစ်သော်လည်း Caregiver
            ဝန်ဆောင်မှုပေးသူ၏ အချက်အလက်သည် ထိုသူ၏အကြောင်းအရာ အလုံးစုံ ဖြစ်ကြောင်း အာမ မခံနိုင်ပါ။
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-[20px] font-medium text-secondary mb-3">
          Service Booking ပယ်ဖျက်ခြင်းနှင့်ပြန်အမ်း‌ငွေ မူဝါဒ
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-gray-600 text-[16px]">
            Service အသုံးပြုသူများအား ကောင်းမွန်သည့်ဝန်ဆောင်မှုပေးစွမ်းနိုင်ရန်အတွက် Service
            အသုံးပြုသည် ကြိုတင် Booking မှာကြားခြင်း မပြုလုပ်မီ မိမိတို့လိုအပ်ချက်နှင့်ကိုက်ညီသည့်
            Caregiver ဝန်ဆောင်မှုပေးသူအား သေချာစွာ ရွေးချယ်ထားရှိရန်။
          </li>
          <ul className="space-y-2 list-disc list-inside">
            <p className="text-gray-600 font-bold text-[16px] my-5">ပယ်ဖျက်ခြင်း မူဝါဒ</p>
            <li className="text-gray-600 text-[16px]">
              နေ့ပိုင်း duty နှင့် Live-in (client နေအိမ်တွင်နေထိုင်ရမည့်) booking များအတွက် :
              Service ပေးရမည့်နေ့မတိုင်မီ ညနေ (၆း၀၀) နာရီအချိန်အထိ ပယ်ဖျက်ခွင့်ရှိပါသည်။
            </li>
            <li className="text-gray-600 text-[16px]">
              ညပိုင်း duty များအတွက် : Service ပေးရမည့်ညမတိုင်မီ မွန်းလွဲ (၁း၀၀) နာရီအချိန်အထိ
              ပယ်ဖျက်ခွင့်ရှိပါသည်။
            </li>
          </ul>
          <ul className="space-y-2 list-disc list-inside">
            <p className="text-gray-600 text-[16px] font-bold my-5">ဖျက်သိမ်းခွင့်</p>
            <li className="text-gray-600 text-[16px]">
              ဖျက်သိမ်းခွင့်ရှိသည့်အချိန်အတိုင်းအတာအတွင်း ဖျက်သိမ်းခအဖြစ် တစ်ခါဖျက်သိမ်းလျှင် ၅,၀၀၀
              ကျပ်သတ်မှတ်ထားပါသည်။ ယင်းသို့ အခကြေးငွေ သတ်မှတ်ခြင်းသည် အချိန်နီးကပ်မှ
              ဖျက်သိမ်းခြင်းများ မရှိစေရန်နှင့် Caregiver ဝန်ဆောင်မှု ပေးသူနှင့် service
              အသုံးပြုသူတို့အကြား အခက်အခဲပြဿနာမရှိ ကောင်းမွန်မျှတသော ဆက်ဆံရေးဖြစ်စေလို၍
              သတ်မှတ်ထားခြင်းဖြစ်ပါသည်။
            </li>
          </ul>
          <li className="text-gray-600 text-[16px]">
            အချိန်နီးကပ်မှဖျက်သိမ်းခြင်းကြောင့် ဖြစ်ပေါ်လာသော အခက်အခဲများနှင့်ပတ်သက်၍ : Caregiver
            ဝန်ဆောင်မှုပေးသူနှင့် service အသုံးပြုသူတို့အကြား အခက်အခဲပြဿနာ ဖြစ်စေနိုင်သဖြင့်
            ဖျက်သိမ်းခွင့်ရှိသည့်အချိန်အတိုင်းအတာပြင်ပမှ ဖျက်သိမ်းခြင်းတို့အတွက် ငွေပြန်အမ်းမည်
            မဟုတ်ပါ။
          </li>
          <li className="text-gray-600 text-[16px]">
            ပြန်အမ်းငွေပြန်လည်ပေးအပ်ခြင်း : ငွေပြန်အမ်းရန် ရုံးဖွင့်ရက်အတွင်း အချိန် (၂) ရက်ကြာ
            မြင့်မည်ဖြစ်ပါသည်။
          </li>
        </ul>
      </section>

      {/* Payment Rule Section */}
      <section className="mb-6">
        <h2 className="text-[20px] font-medium text-secondary mb-3">
          {" "}
          Caregivers ဝန်ဆောင်မှုပေးသူများအား တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်း
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-gray-600 text-[16px]">
            Service သုံးစွဲသူမှ ပလက်ဖောင်းမှတစ်ဆင့်မဟုတ်ဘဲ Caregiver ဝန်ဆောင်မှု ပေးသူများအား
            တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ပါက ၎င်းတို့၏ အရည်အသွေးများ၊ နောက်ကြောင်း ရာဇဝင်များအား
            ကိုယ်တိုင်စစ်ဆေးရမည်ဖြစ်ပါသည်။
          </li>
          <li className="text-gray-600 text-[16px]">
            ယင်းကဲ့သို့ တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်းကြောင့် ဖြစ်ပေါ်လာနိုင်သည့် နောက်ဆက်တွဲ
            ပြဿနာများအတွက် ပလက်ဖောင်းတွင် တာဝန်မရှိပါ။
          </li>
        </ul>
      </section>

      {show && (
        <div>
          {/* Payment Rule Section */}
          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3"> စောင့်ထိန်းရန်</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                ကုမ္ပဏီမှ မိမိတို့၏ Service သုံးစွဲသူများထံမှ ပေးအပ်ထားသည့်/ ကောက်ယူထားသည့်
                သတင်းအချက်အလက်ဒေတာများအား ပြင်ပသို့မပေါက်ကြားစေရန် စနစ်တကျ တင်းကြပ်စွာ
                သိမ်းဆည်းစောင့်ထိန်းထားပါမည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                Service သုံးစွဲသူများမှ ကုမ္ပဏီထံမှရရှိသော သတင်းအချက်အလက်များအား
                ပြင်ပသို့မပေါက်ကြားစေရန် သိမ်းဆည်း စောင့်ထိန်းရပါမည်။ Service သက်တမ်းကုန်ဆုံးချိန်
                တွင်ဖြစ်စေ (သို့မဟုတ်) ကုမ္ပဏီမှ စာဖြင့်ပြန်လည် တောင်းခံသည့်အချိန်တွင်ဖြစ်စေ
                စာရွက်စာတမ်း နှင့်ပစ္စည်းများအား ပြန်လည်အပ်နှံရပါမည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              {" "}
              အိမ်တွင်း ဘေးကင်းလုံခြုံရေးနှင့်တာဝန်ယူမှု/တာဝန်ခံမှုများ
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                Service သုံးစွဲသူများသည် မိမိတို့နေအိမ်၏ ဘေးကင်းလုံခြုံမှုကိုအဓိကထားရမည်ဖြစ်ပြီး
                အိမ်တွင်ရှိသည့် အန္တရာယ်ဖြစ်စေနိုင်သည့် ပစ္စည်းများ၊ ကန့်သတ်ချက်များ၊
                အိမ်မွေးတိရစ္ဆာန်များ (သို့မဟုတ်) ကူးစက်‌ရောဂါများအကြောင်းကို Caregiver
                ဝန်ဆောင်မှုပေးသူအား အသိပေးထား ရပါမည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                Service သုံးစွဲသူများသည် Caregiver ဝန်ဆောင်မှုပေးသူအတွက် လိုအပ်သည့်
                ပစ္စည်းကိရိယာများ၊ သန့်ရှင်းသပ်ရပ်သည့် ပတ်ဝန်းကျင်နှင့်နေရာထိုင်ခင်းများကို
                (ပြင်ဆင်ပေး နိုင်ပါက) ပြင်ဆင်ထားရှိပေးရပါမည်။
              </li>
              <li>
                Caregiver ဝန်ဆောင်မှုပေးသူရှိနေချိန်တွင် ဆေးလိပ်သောက်ခြင်း၊ ဥပဒေနှင့်မကင်းလွတ် သော
                ပစ္စည်းများသုံးစွဲခြင်းတို့ကို ရှောင်ကျဉ်ရမည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              အငြင်းပွားမှုပြဿနာများ၊ တိုင်ကြားမှုများနှင့် ဝန်ဆောင်မှုကို တိုင်းတာစောင့်ကြပ်ခြင်း
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                အငြင်းပွားမှုပြဿနာ (သို့မဟုတ်) တိုင်ကြားချက်များအတွက် စိတ်ကျေနပ်မှုမရှိပါက Service
                သုံးစွဲသူများသည် ပလက်ဖောင်းကို Care Mel ၏ Social Media Messenger (သို့မဟုတ်)
                ဖုန်းနံပါတ်မှတစ်ဆင့် ဆက်သွယ်တိုင်ကြားနိုင်ပါသည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              Caregivers ဝန်ဆောင်မှုပေးသူများအား တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်း
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                Service သုံးစွဲသူမှ ပလက်ဖောင်းမှတစ်ဆင့်မဟုတ်ဘဲ Caregiver ဝန်ဆောင်မှု ပေးသူများအား
                တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ပါက ၎င်းတို့၏ အရည်အသွေးများ၊ နောက်ကြောင်း ရာဇဝင်များအား
                ကိုယ်တိုင်စစ်ဆေးရမည်ဖြစ်ပါသည်။
              </li>

              <li className="text-gray-600 text-[16px]">
                ယင်းကဲ့သို့ တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်းကြောင့် ဖြစ်ပေါ်လာနိုင်သည့် နောက်ဆက်တွဲ
                ပြဿနာများအတွက် ပလက်ဖောင်းတွင် တာဝန်မရှိပါ။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              ကြိုတင်မှန်းဆ၍မရသည့် ကိစ္စရပ်များ
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                သဘာဝဘေးအန္တရာယ်များ၊ လျှပ်စစ်မီးပြတ်တောက်မှုများ၊ ဆန္ဒပြ သပိတ်မှောက်ခြင်း များနှင့်
                အခြား ကြိုတင်မှန်းဆ၍လည်းမရ၊ ထိန်းချုပ်ဟန့်တား၍လည်းမရသည့် ဖြစ်ရပ်များ
                ကြောင့်ဖြစ်ပေါ်လာသည့် နှောင့်နှေးကြန့်ကြာမှုများအတွက် ပလက်ဖောင်းတွင် တာဝန်မရှိပါ။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">သဘောတူညီမှု ရပ်ဆဲခြင်း</h2>
            <p className="text-[16px] font-bold my-5">
              အောက်ပါအခြေအနေများတွင် ချက်ချင်းရပ်စဲနိုင်သည်
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                Service အသုံးပြုသူမှ လိုက်နာရမည့်စည်းကမ်းများအား ချိုးဖောက်၍ (၁၄) ရက် ကြာသည်အထိ
                ချိုးဖောက်မှုအား အပြည့်အဝ ပြင်ဆင်ခြင်းမရှိပါက
              </li>
              <li className="text-gray-600 text-[16px]">
                ဝန်ဆောင်မှုအတွက် ငွေပေးချေမှုအား အချိန်မီပေးချေနိုင်ခြင်းမရှိပါက
              </li>
              <li className="text-gray-600 text-[16px]">
                ဝန်ဆောင်မှုအတွက် ငွေပေးချေမှုအား အချိန်မီပေးချေနိုင်ခြင်းမရှိပါက
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              သဘောတူညီမှုကာလလွန်တွင် တာဝန်ယူရမည့် ဝတ္တရားများ
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                သဘောတူညီမှုရပ်ဆဲသည့်အချိန်တွင် Service အသုံးပြုသူသည် ပေးရန်ကျန်ရှိသည့်
                ဝန်ဆောင်ခများအား အကျေပေးချေရန်နှင့် သဘောတူညီမှုရယူခဲ့စဉ်က စောင့်ထိန်းလိုက်နာ ရမည့်
                အချက်များအတိုင်း မလွဲမသွေ လိုက်နာဆောင်ရွက်ရမည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              Service သုံးစွဲမှုရပ်ဆဲခြင်း
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                Monthly Package(လပြတ်ခေါ်ယူမှုများ): Caregiver အားလပြတ်ဖြင့် ခေါ်ယူနေစဉ်အတွင်း
                သဘောတူထားသည့် နားရက်၂ရက်မှအပ Customer များဘက်မှ Service သုံးစွဲခြင်းကို‌
                ခေတ္တရပ်နားလိုသည်ဆိုပါက (သို့မဟုတ်) Service ကိုအပြီးရပ်နားလိုသည်ဆိုပါက
                ရပ်နားလိုသည့်ရက်မှ ၇ရက်ကြို၍ Care Mel Platform အားအကြောင်းကြားပေးရမည်ဖြစ်ပါသည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                ခေတ္တရပ်နားခြင်း: Service သုံးစွဲမှုကို ကြိုတင်အကြောင်းကြားခြင်းမရှိဘဲ ခေတ္တ
                ရပ်နားလိုသည်ဆိုပါက လစာပေးသည့်နေရာတွင် Customer ဘက်မှခေတ္တရပ်နားထားသည့်ရက်များကိုပါ
                ထက်ဝက်စာ ထည့်တွက်ပေးရမည်ဖြစ်ပါသည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                အပြီးတိုင် ရပ်နားခြင်း : Service သုံးစွဲမှုကို ကြိုတင်အကြောင်းကြားခြင်းမရှိဘဲ
                အပြီးတိုင် ရပ်နားမည်ဆိုပါက Customer ဘက်မှ Service သုံးစွဲခဲ့သည့်ရက်များကို Daily
                Duty Fees ဖြင့်တွက်ပေးရမည်ဖြစ်ပြီး အပိုကြေးအနေဖြင့် ၃သောင်းပေးဆောင်ရမည်ဖြစ်ပါသည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">လျော်ကြေးပေးခြင်း</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                Caregiver ဝန်ဆောင်မှုပေးသူ-Serviceသုံးစွဲသူတို့အကြား ဖြစ်ပေါ်လာသော
                ပိုင်ဆိုင်မှုဆိုင်ရာပြဿနာများ၊ ထိခိုက်ဆုံးရှုံးမှုများ (သို့မဟုတ်)
                တာဝန်ခံမှုများအတွက် ပလက်ဖောင်း အသုံးပြုသူများမှ တာဝန်ယူ
                လျော်ကြေးငွေပေးချေရန်သဘောတူပါသည်။ ဤတွင် မတရားမှု (သို့မဟုတ်)
                အလွဲသုံးစားပြုမှုများပါဝင်သည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">ပလက်ဖောင်းမူဝါဒ</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                ဤပလက်ဖောင်းသည် Caregiving စောင့်ရှောက်မှု Service အသုံးပြုလိုသူနှင့် Service
                ပေးလိုသူ Caregiver တို့အကြား ကြားခံအဖြစ်သာ ရပ်တည်လုပ်ဆောင်ပါသည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                Caregiving စောင့်ရှောက်မှု Service အသုံးပြုလိုသူများသည် ပိုမိုသေချာစေရန်အတွက်
                မိမိတို့ကိုယ်တိုင် Caregiver များ၏ နောက်ကြောင်းရာဇဝင်များအား ပြန်လည်စစ်ဆေးရန်
                အကြံပြုပါသည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                လိုက်နာရမည့် စည်းမျဉ်းစည်းကမ်းများ၊ သိရှိရန် အချက်များအား ပလက်ဖောင်းမှ
                လိုအပ်သလိုပြန်လည် ပြင်ဆင်ခွင့်ရှိပါသည်။
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[20px] font-medium text-secondary mb-3">
              ကိုယ်ရေးကိုယ်တာအချက်အလက် မူဝါဒ
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600 text-[16px]">
                ပလက်ဖောင်း အသုံးပြုသူများမှ ပေးပို့ထားသော လုပ်ငန်းအတွက်လိုအပ်သည့်
                ကိုယ်ရေးကိုယ်တာအချက်အလက်များ ဖြစ်သည့် - နာမည်အပြည့်အစုံ၊ email လိပ်စာ၊ လိင်
                (ကျား/မ)၊ IP လိပ်စာ၊ သန်းခေါင်စာရင်းဆိုင်ရာ အချက်အလက်များနှင့် အခြားလိုအပ်သည့်
                အချက်အလက်များ စသည်တို့ကို ပလက်ဖောင်းမှ စုစည်းသိမ်းဆည်းထားမည်ဖြစ်ပါသည်။
              </li>
              <li className="text-gray-600 text-[16px]">
                ပလက်ဖောင်းအသုံးပြုသူများ၏ အချက်အလက်များသည် ဤပလက်ဖောင်း၏ အဓိက အခန်းကဏ္ဍဖြစ်သကဲ့သို့
                အသုံးပြုသူများ၏ အချက်အလက်များ ပြင်ပသို့ ငှားရမ်းခြင်း၊ ရောင်းချခြင်းများ (လုံးဝ)
                မရှိစေရ။
              </li>
            </ul>
          </section>
        </div>
      )}

      <div className="mt-20 mb-5">
        <button
          className="border-2 border-primary p-5 w-full text-primary font-bold rounded-xl active:bg-gray-200"
          onClick={() => setShow(!show)}
        >
          {show ? <p> Close Terms & Conditions </p> : <p> Read Full Terms & Conditions </p>}
        </button>
        <button
          className=" bg-primary p-5 w-full text-white mt-5 font-bold rounded-xl active:bg-secondary"
          onClick={() => navigate("/form")}
        >
          Agree and Continue
        </button>
      </div>
    </div>
  );
};

export default Term;
