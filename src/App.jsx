import {
  location_1,
  location_2,
  location_3,
  partnership_illustration,
  qoruz_logo_white,
  user_1,
} from "./assets";
import {
  Arrow,
  Check,
  Chevron,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "./assets/icons";
import Accordian from "./components/Accordian";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";
import NavBar from "./components/NavBar";
import OrganisationCard from "./components/OrganisationCard";
import UserBadge from "./components/UserBadge";
import { footerLinks, organizations } from "./data";

export default function App() {
  return (
    <>
      <NavBar />

      {/* Heading */}
      <div className="py-12 px-6 sm:px-20 bg-primary-black-600">
        <h3
          className="mb-1 sm:mb-2 sm:text-[16px] sm:leading-4 sm:font-bold sm:tracking-[.10em] uppercase tracking-[.15em] text-center
 font-extrabold text-primary-orange-600 leading-3 text-xs"
        >
          Reach and connect with Top Agencies
        </h3>

        <h2 className="sm:mb-12 text-[32px] sm:text-[48px] sm:leading-[48px] tracking-[-.02em] font-extrabold leading-[42px] text-white text-center">
          Top 100 Public Relations Agencies in India (2024)
        </h2>

        <ExpandableText
          limit={150}
          className="hidden sm:block font-normal text-[18px] leading-[29px] text-[#FFFFFF80] text-center"
        >
          With a user base of around 100M, India stands next to the US in the
          Instagram users count. With the advent of the internet in India, there
          was a huge spike in the total social media users and also the
          Influencers. Among different Social media platforms, Instagram always
          remains a
        </ExpandableText>
      </div>

      {/* curated by:desktop */}
      <div className="border-b border-[#99999933] hidden sm:flex justify-between items-center py-4 px-20">
        <UserBadge
          profileUrl={user_1}
          title="Curated by"
          name="Jithin"
          from="Qoruz"
        />
        <p className="text-primary-black-600 font-medium text-[12px] leading-[19px]">
          Updated on Feb 25th 2024
        </p>
      </div>

      {/* organizations */}
      <div className="p-6 my-12 sm:mt-0  sm:py-12 sm:px-20 flex flex-wrap gap-y-7">
        {organizations.map((organization) => (
          <OrganisationCard key={organization.name} {...organization} />
        ))}
      </div>

      {/* curated by :mobile */}
      <UserBadge
        className=" px-6 sm:hidden"
        profileUrl={user_1}
        title="Curated by"
        name="Jithin"
        from="Qoruz"
      />

      {/* path */}
      <div className="my-12 sm:mb-20 px-6 sm:px-20 flex sm:block justify-between gap-x-3">
        <span className="cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis flex-1 inline-flex items-center leading-[24px] font-medium text-[#4D3D33] text-[14px] ">
          Agency Partnership{" "}
          <Chevron
            sx={{
              className: "ml-2 rotate-[-90deg]",
            }}
            color="#4D3D33"
            width={12}
            height={12}
          />
        </span>
        <span className="cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis flex-1 inline-flex items-center leading-[24px] font-medium text-[#4D3D33] text-[14px] ">
          Public Relations Agencies{" "}
          <Chevron
            sx={{
              className: "ml-2 rotate-[-90deg]",
            }}
            color="#4D3D33"
            width={12}
            height={12}
          />
        </span>
        <span className=" cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis flex-1 inline-flex items-center leading-[24px] font-medium text-primary-orange-600 text-[14px] ">
          Top 100 Public Relations Agencies in India (2024)
        </span>
      </div>

      <ExpandableText
        limit={180}
        className=" px-6 mb-12 sm:hidden font-normal text-[16px] leading-[24px] text-[#4D3D33] text-center"
      >
        With a user base of around 100M, India stands next to the US in the
        Instagram users count. With the advent of the internet in India, there
        was a huge spike in the total social media users and also the
        Influencers. Among different Social media platforms, Instagram always
        remains a.Influencers. Among different Social media platforms, Instagram
        always remains a
      </ExpandableText>

      {/* Second Heading */}
      <div className=" px-6 sm:px-20 bg-transparent mb-12 sm:mb-20">
        <h3 className="mb-2 uppercase tracking-[.15em] sm:tracking-[.10em] text-center sm:text-[16px] sm:font-bold font-extrabold text-primary-orange-600 leading-3 sm:leading-[16px] text-xs">
          Leverage influencer tools
        </h3>

        <h2 className="mb-2 text-[24px] tracking-[-.02em] font-bold sm:text-[32px] sm:leading-[32px] leading-[31px] text-primary-black-600 text-center">
          Explore More Top Public Relations Agencies
        </h2>

        <p className="text-center font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#4D3D33]">
          Discover more top PR agencies for effective communication that
          elevates your brand. Explore innovation and influence in every
          strategy. remains a
        </p>
      </div>

      {/*  */}

      <div className="mb-12 flex flex-col sm:flex-row justify-between gap-y-12 gap-x-[35px] px-6 lg:px-20 xl:px-40">
        <article className="rounded-[16px] flex-1 overflow-hidden border border-[#99999933]">
          <img src={location_1} alt="location_1" className="object-cover" />
          <div className="p-6">
            <h2 className="mb-12 font-bold text-[20px] leading-[26px] tracking-[-0.02em] text-primary-black-600">
              Top 100 Public Relations Agencies in India (2024)
            </h2>

            <Button
              className="bg-transparent
              text-bg-primary-black-600
              leading-[24px]
              font-semibold
              rounded-[12px]
              "
              iconRight={<Arrow color="#200D00" width={14} height={14} />}
            >
              Explore
            </Button>
          </div>
        </article>
        <article className="rounded-[16px] flex-1 overflow-hidden border border-[#99999933]">
          <img src={location_2} alt="location_1" className="object-cover" />
          <div className="p-6">
            <h2 className="mb-12 font-bold text-[20px] leading-[26px] tracking-[-0.02em] text-primary-black-600">
              Top 25 Public Relations Agencies in Mumbai (2024)
            </h2>

            <Button
              className="bg-transparent
              text-bg-primary-black-600
              leading-[24px]
              font-semibold
              rounded-[12px]
              "
              iconRight={<Arrow color="#200D00" width={14} height={14} />}
            >
              Explore
            </Button>
          </div>
        </article>
        <article className="rounded-[16px] flex-1 overflow-hidden border border-[#99999933]">
          <img src={location_3} alt="location_1" className="object-cover" />
          <div className="p-6">
            <h2 className="mb-12 font-bold text-[20px] leading-[26px] tracking-[-0.02em] text-primary-black-600">
              Top 25 Public Relations Agencies in Bangalore (2024)
            </h2>

            <Button
              className="bg-transparent
              text-bg-primary-black-600
              leading-[24px]
              font-semibold
              rounded-[12px]
              "
              iconRight={<Arrow color="#200D00" width={14} height={14} />}
            >
              Explore
            </Button>
          </div>
        </article>
      </div>

      {/* Are you an agency?
       */}
      <div className="mb-12 flex gap-y-6 flex-col sm:flex-row mx-6 lg:mx-20 xl:mx-40 bg-[#F5F1EA] rounded-[24px] overflow-hidden">
        <div
          className="flex-1 p-6 sm:px-[48px] sm:py-[48px] lg:py-[68px] xl:py-[98px] 
          bg-[#F5F1EA]
        "
        >
          <h2 className="mb-2 text-primary-black-600 text-[32px] sm:text-[48px] sm:leading-[48px] leading-[42px] font-extrabold tracking-[-0.02em] ">
            Are you an agency?
          </h2>
          <p className="mb-6 text-primary-black-600 text-[18px] sm:text-[24px] sm:leading-[28px] leading-[29px]">
            Join the Qoruz agency partnership programme!
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-x-[30px] items-center justify-center gap-y-[26px] ">
            <Button
              className="bg-primary-black-600
              hover:bg-primary-black-700
              text-white
              text-[14.28px]
              leading-[14.28px]

              sm:text-[16px]
              sm:leading-[16px]

              py-[18px]
              px-[29px]

              sm:py-[20px]
              sm:px-[32px]
              font-bold
              rounded-[10px]
              w-fit
              "
              iconRight={<Arrow color="#fff" width={13} height={13} />}
            >
              Register Now
            </Button>

            <div className="group z-30 w-fit h-fit relative">
              <Button
                className="bg-transparent
              text-bg-primary-black-600
              text-[14.28px]
              leading-[14.28px]

              sm:text-[16px]
              sm:leading-[16px]


              w-fit
              font-bold
              rounded-[12px]
              
              "
                iconRight={<Arrow color="#200D00" width={13} height={13} />}
              >
                Why Register{" "}
              </Button>

              {/* hover info */}
              <ul
                className={`z-40 group-hover:flex hidden translate-x-6 w-[200px] md:w-[300px] mt-2  right-[0] absolute sm:top-[-50%] sm:left-[90%]	 rounded-[10px] bg-[#0D1319]
                list-none	
                 text-white 
                 flex-col gap-y-[10px] p-[10px] `}
              >
                <li className="flex items-start gap-x-2">
                  <Check
                    color="#02AC5B"
                    sx={{
                      className: "min-w-[15px]",
                    }}
                  />
                  <p className=" text-[12px] sm:text-[18px] leading-[18px] text-white">
                    Become listed among industry top marketing agencies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <img
            className="w-full h-full object-cover "
            src={partnership_illustration}
            alt="partnership_illustration"
          />
        </div>
      </div>

      {/*  */}

      <footer className="py-[28px] sm:py[48px] px-6 lg:px-20 xl:px-40 bg-primary-black-600">
        <div className="flex flex-col sm:flex-row gap-x-5 gap-y-6">
          <div className="max-w-[313px] ">
            <img
              className="mb-[22px] sm:mb-[26px] w-[112px] h-[38px] sm:w-[122px] sm:h-[42px] "
              src={qoruz_logo_white}
              alt="qoruz-logo"
            />
            <p className="text-[#FFF4EE] text-[14px] sm:text-[16px] leading-[20px] font-medium ">
              Qoruz is an influencer marketing and intelligence platform, that
              enables superior influencer discovery, quick and easy influencer
              outreach.
            </p>

            {/* social links */}
            <div className="mt-[26px] hidden sm:flex gap-x-[25px] items-center ">
              <Facebook color="#FF6435" width={17} height={18} />
              <Instagram color="#FF6435" width={17} height={18} />
              <Twitter color="#FF6435" width={17} height={18} />
              <Linkedin color="#FF6435" width={17} height={18} />
            </div>
          </div>

          {/* links grid */}
          <nav className="flex-1 sm:grid grid-flow-col gap-3 auto-cols-auto justify-items-end">
            {footerLinks.map((item) => {
              return <Accordian key={item.title} {...item} />;
            })}
          </nav>
        </div>

        <div className="flex gap-x-[10px] justify-between py-[24px] items-center ">
          <p className="text-[#FFF4EE] text-[14px] sm:text-[16px] sm:leading-[24px] leading-[16px] font-medium ">
            2023 Qoruz, inc. All rights reserved.
          </p>

          {/* social links */}
          <div className="sm:hidden flex gap-x-[16px] items-center ">
            <Facebook color="#FF6435" width={17} height={18} />
            <Instagram color="#FF6435" width={17} height={18} />
            <Twitter color="#FF6435" width={17} height={18} />
            <Linkedin color="#FF6435" width={17} height={18} />
          </div>
        </div>
      </footer>
    </>
  );
}
