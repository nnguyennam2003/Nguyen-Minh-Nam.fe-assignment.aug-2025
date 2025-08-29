const recommends = [
  {
    image: "./assets/images/recommend_1.png",
    title: "Ghorepani Poon Hill Trek",
    location: "Bhutan, Pokhara",
    price: 569,
    days: 5,
  },
  {
    image: "./assets/images/recommend_2.png",
    title: "Langtang Valley Trekking",
    location: "Bhutan, India, Pokhara",
    price: 600,
    days: 6,
  },
  {
    image: "./assets/images/recommend_3.png",
    title: "Short Trek around Pokhara",
    location: "Bhutan, India, Tibet",
    price: 250,
    days: 6,
  },
  {
    image: "./assets/images/recommend_4.png",
    title: "Island Peak Climbing",
    location: "Nepal, Pokhara, Tibet",
    price: 569,
    days: 3,
  },
  {
    image: "./assets/images/recommend_1.png",
    title: "Ghorepani Poon Hill Trek",
    location: "Bhutan, Pokhara",
    price: 569,
    days: 5,
  },
  {
    image: "./assets/images/recommend_2.png",
    title: "Langtang Valley Trekking",
    location: "Bhutan, India, Pokhara",
    price: 600,
    days: 6,
  },
  {
    image: "./assets/images/recommend_3.png",
    title: "Short Trek around Pokhara",
    location: "Bhutan, India, Tibet",
    price: 250,
    days: 6,
  },
  {
    image: "./assets/images/recommend_4.png",
    title: "Island Peak Climbing",
    location: "Nepal, Pokhara, Tibet",
    price: 569,
    days: 3,
  },
];

const guides = [
  {
    image: "./assets/images/ava_tour_guide_1.jpg",
    name: "Jane Cooper",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_2.jpg",
    name: "Guy Hawkins",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_3.jpg",
    name: "Jenny Wilson",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_4.jpg",
    name: "Jacob Jones",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_1.jpg",
    name: "Jane Cooper",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_2.jpg",
    name: "Guy Hawkins",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_3.jpg",
    name: "Jenny Wilson",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    image: "./assets/images/ava_tour_guide_4.jpg",
    name: "Jacob Jones",
    role: "Tourist Guide",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  }
];

const socialIcons = {
  facebook: "bxl bx-facebook",
  twitter: "bxl bx-twitter",
  instagram: "bxl bx-instagram",
  youtube: "bxl bx-youtube",
};

const recommendWarper = document.getElementById("recommendWrapper");
const tourWrapper = document.getElementById("tourWrapper");

recommendWarper.innerHTML = recommends
  .map(
    (item) => `
    <div class="swiper-slide w-full max-w-[312px] h-[482.98px] flex flex-col rounded-[16px] border-[1px] border-[#BCCED2] overflow-hidden">
      <figure class="h-[272.24px] w-full">
        <img src="${item.image}" alt="RECOMMEND_IMAGE" class="w-full h-full rounded-tl-[16px] rounded-tr-[16px]" />
      </figure>
      <div class="h-full px-[24px] pt-[18.25px] pb-[16.66px] flex flex-col justify-between bg-white">
        <div class="pb-[36.33px]">
          <h3 class="text-[18px]/[25.5px] font-manrope font-medium text-text">${item.title}</h3>
          <p class="text-[16px]/[26px] text-subtext flex items-center font-inter">
            <i class="bx bx-target"></i><span>${item.location}</span>
          </p>
          <p class="font-inter text-[24px]/[36px] tracking-[0.48px] text-text font-medium">
            $${item.price}.00<span class="text-[18px]/[24px] text-subtext font-normal">/Person</span>
          </p>
        </div>
        <div class="flex items-center justify-between">
          <span class="flex items-center text-[16px]/[26px] text-dark-blue font-inter gap-[8px]">
            <i class="bx bx-clock-4"></i> ${item.days} Days
          </span>
          <a href="javascript:void(0)"
            class="flex items-center px-[20.5px] py-[14px] border-[1px] border-[#E1E4E5] rounded-[48px] text-[16px]/[26px] text-dark-blue font-inter gap-[7.68px]">
            Book Now
            <img src="./assets/icons/arrow_right_dark.png" alt="ARROW" class="w-[24px] h-[24px]" />
          </a>
        </div>
      </div>
    </div>
  `
  )
  .join("");

tourWrapper.innerHTML = guides
  .map(
    (guide) => `
    <div class="swiper-slide pt-[100px] relative w-[312px] bg-transparent">
      <figure class="w-[200px] h-[200px] bg-white rounded-full p-[3px] absolute top-0 left-[50%] translate-x-[-50%]">
        <img src="${guide.image}" alt="${
      guide.name
    }" class="w-full h-full rounded-full" />
      </figure>
      <div class="bg-white rounded-[16px] p-[130px_16px_16px_16px] flex items-end">
        <div class="bg-light-blue w-full rounded-[16px] p-[16px]">
          <h3 class="text-center font-manrope font-semibold text-[24px]/[34px] text-text">${
            guide.name
          }</h3>
          <p class="font-inter text-center text-[16px]/[26px] text-text mb-[15px]">${
            guide.role
          }</p>
          <ul class="flex justify-center gap-[5px]">
            ${guide.socials
              .map(
                (s) => `
              <li class="w-[32px] h-[32px] rounded-full border-[1px] border-blue flex items-center justify-center">
                <a href="javascript:void(0)" class="text-[16px]/[16px] text-blue">
                  <i class="${socialIcons[s]}"></i>
                </a>
              </li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `
  )
  .join("");
