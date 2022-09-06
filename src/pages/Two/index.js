import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Stack, Button } from "components";

const TwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate28() {
    navigate("/eight");
  }
  function handleNavigate37() {
    navigate("/landingpage");
  }
  function handleNavigate38() {
    navigate("/three");
  }
  function handleNavigate39() {
    navigate("/three");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center mx-[auto] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
        <Row className="items-end w-[94%]">
          <Column className="mb-[1px] w-[60%]">
            <Img
              src="images/img_frame_9.svg"
              className="common-pointer 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] w-[37%]"
              onClick={handleNavigate37}
              alt="Frame"
            />
            <Img
              src="images/img_tshirt1011_1.png"
              className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] lg:mt-[131px] xl:mt-[150px] 2xl:mt-[169px] 3xl:mt-[202px] w-[96%]"
              alt="tshirt1011"
            />
          </Column>
          <Column className="items-center 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] w-[40%]">
            <Column className="bg-white_A700 border border-black_900 border-solid items-center lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius27 w-[100%]">
              <Row className="justify-between w-[96%]">
                <Text className="font-normal mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  Color Theme
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[3%]"
                  alt="arrowright"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
                <div className="bg-white_A700 border border-black_900 border-solid lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-light_green_500 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-teal_700 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-teal_900 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-light_blue_400 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-indigo_800 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                <div className="bg-black_900 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
              </Row>
              <Row className="items-center justify-between xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[98%]">
                <div className="bg-white_A700 border border-black_900 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
                <div
                  className="common-pointer bg-indigo_600 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
                  onClick={handleNavigate38}
                ></div>
                <div className="bg-yellow_700 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
                <div className="bg-yellow_800 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
                <div className="bg-yellow_900 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
                <div className="bg-pink_700 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
                <div className="bg-black_900 lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"></div>
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-black_900 border-solid justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius27 w-[100%]">
              <Text className="font-normal lg:mr-[260px] xl:mr-[298px] 2xl:mr-[335px] 3xl:mr-[402px] mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                Color Code
              </Text>
              <Row className="items-center lg:mb-[53px] xl:mb-[61px] 2xl:mb-[69px] 3xl:mb-[82px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[190px] xl:mr-[217px] 2xl:mr-[245px] 3xl:mr-[294px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[45%]">
                <div className="border-2 border-black_900 border-solid lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius10 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"></div>
                <Stack className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[63%]">
                  <Text className="absolute font-medium h-[max-content] inset-y-[0] left-[14%] my-[auto] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    Pantone
                  </Text>
                  <div className="absolute border-2 border-black_900 border-solid lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius10 w-[100%]"></div>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-black_900 border-solid items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius27 w-[100%]">
              <Text className="font-medium leading-[normal] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[68%]">
                You can choose your own colors for the
                <br />
                widget, just enter the code in the field
                <br />
                (Pantone) or by clicking on the color <br />
                theme
              </Text>
              <Row className="items-center justify-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[60%]">
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                  shape="RoundedBorder10"
                >
                  CANCEL
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                  onClick={handleNavigate39}
                  shape="RoundedBorder10"
                >
                  NEXT
                </Button>
              </Row>
            </Column>
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              T - Shirt
            </Text>
          </Column>
        </Row>
        <Row className="items-end justify-between xl:mb-[103px] 2xl:mb-[116px] 3xl:mb-[139px] lg:mb-[90px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[62%]">
          <Text className="font-normal mb-[4px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
            T - Shirt color 1/5
            <br />
          </Text>
          <Button
            className="common-pointer font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[13%]"
            onClick={handleNavigate28}
            shape="RoundedBorder10"
          >
            DONE
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default TwoPage;
