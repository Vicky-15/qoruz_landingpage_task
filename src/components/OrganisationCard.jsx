import {
  Apartment,
  Arrow,
  Building,
  CheckHex,
  Factory,
  MapPin,
} from "../assets/icons";
import Button from "./Button";

const OrganisationCard = ({
  orgLogo,
  isVerified,
  name,
  description,
  services,
  employeesCount,
  country,
  establishedYear,
  agency,
}) => {
  return (
    <>
      {/* :mobile */}
      <article className="sm:hidden p-6 border-b w-full border-[#00000026] rounded-3xl shadow-[0_1px_3px_0px_#00000026]">
        <div>
          <div className="mb-2 flex items-start gap-x-4">
            <span className="relative">
              <img
                src={orgLogo}
                alt={"org_logo " + name}
                className="w-[70px] min-w-[70px] rounded-lg"
              />

              {isVerified && (
                <CheckHex
                  sx={{
                    className:
                      "bottom-0 right-0 translate-x-2/4 absolute z-[8]",
                  }}
                  color="#02AC5B"
                  width={20}
                  height={20}
                />
              )}
            </span>

            <div className="w-fit">
              <h2 className="text-primary-black-600 font-bold text-[20px] leading-[26px] tracking-[-0.02em]">
                {name}
              </h2>
              <p className="text-[#4D3D33] text-[12px] leading-[19px]">
                {employeesCount} employees
              </p>
            </div>
          </div>

          <div className="mb-2 flex flex-wrap gap-2">
            {services?.map((service) => {
              return (
                <span
                  key={service}
                  className="inline-block bg-[#F5F1EA] py-1 px-2 rounded-[5px] text-[16px] text-[#4D3D33] font-bold leading-[26px]"
                >
                  {service}
                </span>
              );
            })}
          </div>

          <p className="mb-6 text-[#4D3D33] leading-[26px]">{description}</p>

          <div className="mb-6 flex items-center flex-wrap gap-x-6">
            <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#4D3D33] text-[14px] ">
              <MapPin color="#4D3D33" width={14} height={16} />
              {country}
            </span>
            <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#4D3D33] text-[14px] ">
              <Building color="#4D3D33" width={16} height={16} />
              {establishedYear}
            </span>
            <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#4D3D33] text-[14px] ">
              <Factory color="#4D3D33" width={16} height={16} />
              {agency}
            </span>
          </div>
        </div>

        <Button
          className="
          bg-primary-orange-600
          hover:bg-primary-orange-700
          text-white
          text-[14px]
          leading-[21px]
          py-[10px]
          font-semibold
          rounded-[10px]
          w-full"
          iconRight={<Arrow color="#fff" width={12} height={12} />}
        >
          Post Brief
        </Button>
      </article>

      {/* :desktop */}
      <article className="hidden sm:flex p-6 border-b last:border-none  w-full justify-between gap-x-4 items-center border-[#00000026]">
        <div className="mb-2 flex items-start gap-x-5">
          <span className="relative">
            <img
              src={orgLogo}
              alt={"org_logo " + name}
              className="w-[50px] min-w-[50px] rounded-lg"
            />

            {isVerified && (
              <CheckHex
                sx={{
                  className: "bottom-0 right-0 translate-x-2/4 absolute z-[8]",
                }}
                color="#02AC5B"
                width={20}
                height={20}
              />
            )}
          </span>

          <div>
            <h2 className="mb-2 text-primary-black-600 font-bold text-[20px] leading-[26px] tracking-[-0.02em]">
              {name}
            </h2>

            <div className="mb-2 flex flex-wrap gap-2">
              {services?.map((service) => {
                return (
                  <span
                    key={service}
                    className="inline-block bg-[#F5F1EA] py-1 px-2 rounded-[5px] text-[12px] text-[#4D3D33] font-bold leading-[19px]"
                  >
                    {service}
                  </span>
                );
              })}
            </div>

            <p className="mb-4 text-[#4D3D33] text-[14px] leading-[22.5px]">
              {description}
            </p>

            <div className="flex items-center flex-wrap gap-x-6">
              <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#98908A] text-[14px] ">
                <Apartment color="#98908A" width={14} height={16} />
                {employeesCount} employees
              </span>
              <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#98908A] text-[14px] ">
                <MapPin color="#98908A" width={14} height={16} />
                {country}
              </span>
              <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#98908A] text-[14px] ">
                <Building color="#98908A" width={16} height={16} />
                {establishedYear}
              </span>
              <span className="inline-flex items-center gap-x-1 leading-[24px] text-[#98908A] text-[14px] ">
                <Factory color="#98908A" width={16} height={16} />
                {agency}
              </span>
            </div>
          </div>
        </div>

        <Button
          className="bg-transparent hover:bg-primary-black-100
          text-primary-black-600 text-[14px] leading-[21px] py-[9px] px-[12px]
          font-semibold
          border
          border=[#99999933]
          rounded-[10px]"
          iconRight={<Arrow color="#200D00" width={12} height={12} />}
        >
          Post Brief
        </Button>
      </article>
    </>
  );
};

export default OrganisationCard;
