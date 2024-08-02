import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import img from "../img/hashtagimg.svg";
import smallimg from "../img/smallimg.svg";
import search from "../img/serachbox.svg";
import cart from "../img/cart.svg";
import cart2 from "../img/bluecart.svg";
import search2 from "../img/blacksearch.svg";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  width: 1180px;
  font-family: "KIMM_Light";
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-top: 64px;
`;
const Container = styled.div`
  display: flex;
  width: 1188px;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-bottom: 184px;
  margin-top: 44px;
`;

const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: white;
  display: flex;
  height: 61px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid var(--white, #fff);
  margin: 90px auto 74px;
  cursor: pointer;

  &:hover {
    border: 1px solid #3e88d2;
    color: #3e88d2;

    img {
      content: url(${cart2});
    }
  }
`;

const CartIcon = styled.img`
  width: 24px;
  transition: content 0.3s;
`;

const TabContainer = styled.div`
  display: flex;
  width: 1188px;
  justify-content: space-between;
  position: relative;
`;

const Div = styled.div`
  color: #3e88d2;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 21px;
`;

const TabButton = styled.button`
  height: 67px;
  padding: 19px 17px;
  margin-right: 3px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  background-image: ${(props) => (props.active ? `url(${smallimg})` : "none")};
  background-color: transparent;
  color: ${(props) => (props.active ? "#fff" : "#8C8C8C")};
  border: none;
  border-radius: ${(props) => (props.active ? "10px 10px 0 0" : "0")};
  background-size: cover;
  background-position: center;
  &:hover {
    background-image: ${(props) =>
      props.active ? "transparent" : `url(${smallimg})`};
    border-radius: 10px 10px 0 0;
    color: white;
  }
  z-index: ${(props) => (props.active ? "1" : "0")};
  position: ${(props) => (props.active ? "relative" : "static")};
`;

const ContentContainer = styled.div`
  width: 1048px;
  border-radius: ${(props) =>
    props.activeSection === "joint_bone_health" ||
    props.hoverSection === "joint_bone_health"
      ? "0px 30px 30px 30px"
      : "30px 30px 30px 30px"};
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  background-image: ${(props) => (props.active ? `url(${img})` : "none")};
  background-size: cover;
  background-position: center;
  padding: 72px 70px 0px 70px;
`;

const SectionTitle = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-bottom: 1px solid white;
  padding-bottom: 30px;
  margin-bottom: -50px;
`;

const SectionTitle2 = styled.div`
  color: white;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 14px;
`;

const SectionTitle3 = styled.div`
  color: #3e88d2;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0;
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
`;

const SectionContent = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 160%;
  color: white;
`;

const HashtagPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("joint_bone_health");
  const [hoverSection, setHoverSection] = useState(null);

  const sections = [
    {
      id: "joint_bone_health",
      title: "관절/뼈 건강",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              관절/뼈 건강
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            관절은 두 개의 뼈가 연결된 부분으로 관절 연골로 둘러싸여 있습니다.
            또한 뼈는 칼슘과 인이 석회화된 단단한 조직으로 몸을 지탱하고
            보호하는 중요한 역할을 합니다. 관절연골이 손실되지 않고 건강한
            상태를 유지하여 관절을 부드럽게 움직이며, 정상적인 뼈의 분해와
            재형성이 일어나는 것을 건강한 관절/뼈라고 합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              관절/뼈 건강
            </SectionTitle3>
            이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            체내 칼슘이 부족하거나 여러 가지 외부 요인으로 인해 뼈의 분해와
            재형성 균형이 깨지게 되면 골다공증, 골관절염 등 골 관련 질환이 생길
            수 있습니다. 따라서 관절/뼈 건강을 유지하는 것이 중요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              관절/뼈 건강
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [관절/뼈에 필요한 구성성분을 공급하여 뼈 건강에 도움을 줄 수
            있습니다]
            <br /> 대두이소플라본을 원료로 하는 건강기능식품은 골 흡수 및 골
            형성의 균형을 통해 뼈 기능을 개선시킬 수 있습니다. 또한 뮤코다당 ·
            단백, 글루코사민, N-아세틸글루코사민을 원료로 하는 건강기능식품은
            연골의 구성성분 합성 증가 및 연골기질분해 억제 등을 통해 관절 및
            연골 기능을 개선시킬 수 있습니다. 한편, 초록입홍합추출오일복합물,
            지방산복합물, 호프추출물 등을 원료로 하는 건강기능식품은 관절에서
            염증을 유발하는 원료의 생성 억제로 통증 감소 및 관절기능을
            개선시키는 데 도움을 줄 수 있습니다.
          </SectionContent>
          <br />
          <SectionContent>
            [염증반응에 영향을 주어 관절 건강에 도움을 줄 수 있습니다]
            <br />
            초록입홍합추출오일복합물/유니베스틴케이황금 등 복합추출물 등을
            원료로 하는 건강기능식품은 관절에서 염증을 유발하는 물질 또는 이를
            주로 생성하는 세포의 수를 감소시켜 관절건강에 도움을 줄 수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "memory_improvement",
      title: "기억력 개선",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              기억력
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            기억력은 필요한 정보를 받아들여 뇌 속에 저장했다가 필요 할 때 꺼내어
            사용하는 능력입니다. 즉, 기억은 학습에 의해 저장된 정보라 할 수
            있으며, 그 특성에 따라 감각기억, 단기기억, 장기기억으로 나눌 수
            있습니다. 감각기억이란 정보가 감각기관을 통하여 저장되는 과정이며,
            이 정보들 중 주의를 기울인 정보만이 단기기억으로 넘어가게 됩니다.
            단기기억은 현재 의식하고 있는 정보에 대한 상대적으로 짧은
            기억입니다. 장기기억은 나중에 재생할 수 있는 비교적 영구히 저장된
            기억이라고 할 수 있습니다. 망각이란 기억의 쇠잔, 소멸을 뜻하며, 기억
            관련 신경세포들이 활용되지 않을 때 화학적으로 쇠퇴하게 되는 것을
            말합니다. 따라서 기억력을 개선하기 위해서는 특정 단백질 또는 관련
            인자들의 순기능을 높이거나 관련 부위 신경세포의 작용과 생리를
            활성화시킬 수 있는 조치가 필요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              기억력
            </SectionTitle3>
            을 유지하는 것이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            대뇌에서 기억을 저장해 두는 공간은 해마입니다. 신경세포는 연락망을
            만들어 서로 신호를 보내, 순식간에 여러 가지를 판단하고 느낄 수 있게
            하는데 해마의 신경세포가 손상되면, 기억능력이 감퇴하게 됩니다. 또한
            뇌세포가 손상되어 신경전달물질인 아세틸콜린이 부족해지면 알츠하이머
            형 치매를 유발할 수 있으므로 건강한 뇌세포를 유지하는 것이
            중요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              기억력 개선
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [유해물질을 조절하여 인지 능력의 유지에 도움을 줄 수 있습니다]
            <br />
            뇌세포를 손상시키는 물질은 여러 가지가 있습니다. 에너지를 만드는
            과정에서 생긴 활성산소뿐만 아니라 베타아밀로우즈라는 독성물질 역시
            뇌세포를 공격할 수 있습니다. 참당귀주정추출분말 등을 함유한
            건강기능식품은 이런 유해물질을 조절하여 뇌세포가 손상 받지 않도록
            보호하는데 도움을 줄 수 있습니다. <br />
            <br />
            [뇌의 신경전달물질을 조절하여 저하된 인지능력을 개선하는데 도움을 줄
            수 있습니다]
            <br /> 기억력은 대뇌의 피질 특히 해마와 관련이 많습니다. 해마에서
            신경전달물질이 필요한 양만큼 존재해야 뇌세포 간에 신호가 원활히
            이루어 질 수 있고, 인지 능력이 저하된 상태에서는 신경전달물질의
            활동이 적어지는 것을 볼 수가 있습니다. 녹차에 있는 테아닌은
            신경전달물질을 조절하여 저하된 인지능력을 개선하는데 도움을 줄 수
            있습니다. <br />
            <br />
            [뇌의 신경세포나 뇌기능에 필요한 물질로 뇌 기능을 유지하는데 도움을
            줄 수 있습니다]
            <br />
            뇌세포는 다른 세포에 비해 특히 인지질(레시틴, 포스파티딜세린 등)이
            많이 함유되어 있습니다. 인지질은 세포를 보호하는 막을 구성하여,
            뇌세포가 그 기능을 원활히 수행할 수 있도록 도와줍니다. 특히 달걀
            노른자에 있는 레시틴은 신경전달물질인 아세틸콜린의 원료가 되므로
            뇌기능 유지에 도움을 줄 수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "sugar_control",
      title: "혈당 조절",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈당
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            혈당이란 혈액 속에 포함되어 있는 포도당을 의미합니다. 온몸으로
            공급된 혈당은 인슐린이라는 호르몬의 도움을 받아 세포 내부로 들어가
            에너지를 만들어냅니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈당조절
            </SectionTitle3>
            이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            우리 몸이 정상적인 기능을 유지하려면 반드시 에너지가 필요합니다.
            육체적인 활동뿐만 아니라, 잠을 자거나, 숨을 쉬거나, 생각을 할
            때에도, 에너지가 있어야 제 기능을 할 수 있습니다. 따라서 몸 안의
            세포는 혈액으로 흐르는 영양소를 이용하여 끊임없이 에너지를 만들어야
            합니다. 그 중 가장 효율적으로 에너지를 만드는 원료는 포도당으로 특히
            적혈구와 뇌세포의 경우 반드시 에너지원으로 포도당을 사용해야하므로
            혈당 공급이 더욱더 중요합니다. 따라서 혈당이 항상 일정수준으로
            유지되어야 우리 몸이 에너지를 원활하게 공급 받을 수 있게 됩니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈당조절
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [세포에서 포도당을 효율적으로 이용하도록 도와줄 수 있습니다]
            <br />
            포도당을 세포에서 이용할 수 있게 하려면 혈액에 있는 포도당이
            원활하게 세포로 들어가야 합니다. 또한, 식후의 급격한 혈당 상승을
            억제하여 높은 혈당으로 부터의 위험을 줄여야 합니다.
            난소화성말토덱스트린, 구아바잎추출물 등이 함유된 건강기능식품은 장내
            탄수화물 분해효소를 억제하거나 또는 인슐린 저항성 등을 개선시켜
            정상적인 혈당 유지에 도움을 줄 수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "body_fat_reduction",
      title: "체지방 감소",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              체지방
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            우리가 섭취하는 음식은 작은 알갱이로 소화되어 장에서 흡수됩니다.
            흡수된 영양소들은 이동하면서 필요한 부분에 쓰이게 됩니다. 사용하고
            남은 영양소일부는 비상에너지로 간이나 근육에 저장되고, 나머지는 우리
            몸에 지방의 형태로 축적됩니다. 이렇게 저장된 체지방은 우리 몸을
            보호하며, 에너지가 부족할 경우 공급원이 되기도 합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              체지방 감소
            </SectionTitle3>
            가 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            체지방이 과도한 경우 에너지를 생산하는 호르몬에 변화가 일어나고,
            혈관기능, 혈당조절, 간 기능 등에 이상이 초래될 수 있습니다. 따라서
            체지방이 과도한 경우 적정수준 감량을 통해 일정량의 에너지를 생산하여
            체력을 유지하는 것이 중요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              체지방 감소
            </SectionTitle3>
            와 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [당질과 지방의 소화/흡수를 억제하여 체지방 감소에 도움을 줄 수
            있습니다]
            <br /> 식이섬유 등을 함유한 건강기능식품은 당질과 지방의 소화를
            도와주는 효소를 방해하거나, 소장에서의 흡수를 어렵게 하여
            섭취에너지를 줄이는 역할을 할 수 있습니다. 따라서 체지방으로
            합성되는 여분의 에너지를 줄여 체지방 감소에 도움을 줄 수 있습니다.
            또한, 우리가 섭취하는 에너지 중 쓰고 남는 것은 간에서 다시
            지방산으로 합성되며 신체 각 부위의 지방세포에 체지방 형태로
            저장됩니다. 공액리놀렌산 등을 함유한 건강기능식품은 여분의 에너지를
            지방으로 합성하는 과정을 방해하여 체지방 감소에 도움을 줄 수
            있습니다. 한편, 체지방이 세포에서 에너지원으로 쓰이기 위해서는
            카르니틴/지방분해 효소 등의 특정 물질이 필요합니다. 히비스커스 등
            복합추출물/가르시니아캄보지아 등을 함유한 건강기능식품은 이 특정
            물질을 조절해 지방을 에너지로 사용하도록 도움을 줄 수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "skin_health",
      title: "피부 건강",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              피부
            </SectionTitle3>
            의 역할은 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            피부는 체내의 근육들과 기관을 보호하는 조직으로, 제일 바깥의 표피와
            그 아래의 진피, 가장 아래쪽의 피하 조직으로 구성되어 있습니다.
            피부가 하는 역할은 외부 환경에 대해 병원균으로부터 신체를 보호하고
            체온을 조절하고 감각을 느끼는 등의 기능을 합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              건강한 피부
            </SectionTitle3>
            를 유지하는 것이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            건강한 피부는 표면이 매끄럽고 윤기가 있으며 탄력과 촉촉한 느낌이
            있습니다. 피부 자체가 함유하는 수분의 양은 피부 결을 좌우하는 가장
            중요한 요소입니다. 즉 피부 자체의 수분이 충분하면 피부 결이
            매끄럽지만, 부족하면 피부의 감촉은 거칠어집니다. 건강한 표피의
            각질층은 15~20%의 수분을 함유하고 있으며 수분이 부족하면 피부가
            건조해지고 윤기와 탄력이 없어져 주름이 증가하게 됩니다. 피부의
            탄력이나 부드럽고 촉촉한 느낌은 피부의 가장 바깥층인 표피의 각질층에
            존재하는 수분에 의해 유지됩니다. 건강하지 않고 노화된 피부에는
            주름이 생기고, 탄력이 저하되며 검버섯이나 잡티 등이 생기게 됩니다.
            그러므로 건강한 피부의 유지가 무엇보다 중요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              피부 건강
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [피부보습에 도움을 줄 수 있습니다]
            <br />
            N-아세틸글루코사민, 히알우론산나트륨, 곤약감자추출물, 쌀겨추출물,
            지초추출물은 피부의 건조 정도와 수분의 보유량 등을 개선시킴으로써
            피부상태를 개선시키는데 도움을 줄 수 있습니다. 햇볕 또는 자외선에
            의한 피부손상으로부터 피부건강을 유지하는데 도움을 줄 수 있습니다.
            소나무껍질추출물등 복합물, 홍삼, 사상자, 산수유 복합추출물은 햇볕
            또는 자외선에 의한 피부손상으로부터 피부건강을 유지하는데 도움을 줄
            수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "exercise_performance",
      title: "운동 수행 능력",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              근력
              <SectionTitle2 style={{ marginTop: "15px" }}>
                과&nbsp;
              </SectionTitle2>
              운동수행능력
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            근력이란 어떤‘저항(무게·힘)에 대하여 근육이 한 번에 최대로 낼 수
            있는 힘으로서 근육의 능력’즉 근육이나, 근조직이 단 한 번에 발휘할 수
            있는 최대의 힘이라 할 수 있습니다. 운동수행능력이란 이러한 근력을
            이용하여 운동을 수행하는 능력을 말합니다. 근육은 우리가 섭취한
            음식물로부터 체내에서 만들어지는 에너지의 형태인 ATP에너지를
            사용하는데 근육 내부에 존재하는 ATP의 양은 아주 적기 때문에 그것만
            가지고는 1초 이상의 근수축이 이루어질 수 없습니다. 그러나 실제로는
            장시간에 걸쳐 운동을 지속할 수 있는데, 그것은 ATP에너지의 분해 후에
            생성되는 ADP가 ATP로 재합성되기 때문입니다. 이 에너지를 다시
            합성하기 위해서는 세포질내의 인산크레아틴을 인산과 크레아틴으로
            분해하면서 생기는 에너지를 사용합니다. 그러므로 ATP에너지나
            인산크레아틴이 원활히 공급되거나, 근육을 많이 사용할수록 근력 및
            운동수행능력을 향상하는데 도움이 됩니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              운동수행능력의 향상
            </SectionTitle3>
            은 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            근력의 약화로 인하여 운동수행능력이 떨어지게 되거나 불균형을 이루게
            되면, 비정상적인 움직임이나 보행을 초래함으로써 정상적인 움직임을
            손상시키며, 자세를 불량하게 만듭니다. 또한 운동수행능력 저하로 인해
            운동량이 부족하게 되어 체력저하 및 비만, 고지혈증, 고혈압 등의
            문제를 일으킬 수 있습니다. 그러므로 정상적인 건강한 생활을 하기
            위해서는 적절한 근력을 유지하여 운동수행능력을 향상하도록 해야
            합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              운동수행능력
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [에너지 대사에 관여하여 운동수행능력을 향상시키는데 도움을 줄 수
            있습니다] <br />
            운동량이 많고 운동시간이 길 경우 보다 많은 에너지를 필요로 하는데,
            근육에 저장되어 있는 글리코겐과 지방을 효율적으로 써야 에너지의
            부족현상이 나타나지 않습니다. 크레아틴을 함유한 건강기능식품은
            체내에서 인산크레아틴이 전환되어 에너지를 생성하는 과정에 사용되므로
            근력 운동 시 운동수행능력 향상에 도움을 줄 수 있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "immune_function_improvement",
      title: "면역기능개선",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              면역 기능
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            면역기능은 감염 등으로부터 우리 몸을 보호하는 기능을 말합니다. 이는
            몸에 원래 내재된 면역과 적응에 의해 만들어진 면역 기능으로 나눌 수
            있습니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              면역 기능
            </SectionTitle3>
            이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            면역기능은 우리 몸에 유해한 외부 물질이나 비정상적으로 변형된
            세포들을 인식하고 그것들을 제거하는 기능을 의미합니다. 이렇게
            함으로써 사람이 살아가는데 건강한 몸을 유지할 수 있도록 도움을
            줍니다.
          </SectionContent>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              면역 기능
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [면역세포의 활성을 증가시킵니다] <br />
            건강한 면역 기능을 유지하기 위해서는 적절한 면역세포가 제 역할을
            원활히 수행해야 합니다. 인삼/홍삼 등을 함유한 건강기능식품은 필요한
            면역세포를 증가시키거나 그 기능을 조절하여 면역 능력에 도움을 줄 수
            있습니다.
          </SectionContent>
        </>
      ),
    },
    {
      id: "blood_circulation_improvement",
      title: "혈중 중성지방 개선",
      content: (
        <>
          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈중 중성지방
            </SectionTitle3>
            이란 무엇일까요?
          </SectionTitle2>
          <SectionContent>
            혈중 중성지방은 식사로부터 들어오는 지방이나 간에서 합성되는 지방이
            혈액 속에 있는 형태로, 혈중 지방 중 가장 많은 비중을 차지합니다.
            정상수준의 중성지방 농도는 150㎎/㎗ 이하이며, 200~399㎎/㎗ 이면
            경계수준, 400㎎/㎗ 이상이면 고위험군으로 인체에 나쁜 영향을 미칠 수
            있으므로 주의해야 합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈중 중성지방
            </SectionTitle3>
            을 개선하는 것이 왜 중요할까요?
          </SectionTitle2>
          <SectionContent>
            혈중 중성지방은 혈관건강에 나쁜 콜레스테롤 (LDL-콜레스테롤)의 생성을
            돕고, 좋은 콜레스테롤 (HDL-콜레스테롤)의 분해를 촉진하므로, 혈중
            중성지방 수치가 높아지면 동맥경화의 위험이 높아집니다. 따라서 혈중
            중성지질의 수치가 높으면 심장병. 뇌졸중 등 혈관질환이 발생하지
            않도록 주의해야 하며, 특히 당뇨병 환자는 혈중 중성지방 수치가
            높아지지 않도록 유지하는 것이 중요합니다.
          </SectionContent>

          <SectionTitle2>
            <SectionTitle3>
              <img src={search} alt="search icon" />
              혈중 중성지방 개선
            </SectionTitle3>
            과 관련된 건강기능식품은 우리 몸에 어떤 도움을 줄까요?
          </SectionTitle2>
          <SectionContent>
            [어유에 함유된 EPA는 혈중 중성지방을 줄이는데 도움을 줍니다]
            <br /> 흔히 오메가-3라고 불리는 불포화지방산에는 리놀렌산(linolenic
            acid), EPA(eicosapentanoicacid), DHA(docoxahexanoicacid)가 있습니다.
            EPA 및 DHA는 청어, 고등어, 정어리, 참치, 연어 등에 많이 들어
            있습니다. 이들은 간에서의 중성지방 합성을 감소시켜 혈중 중성지방
            농도를 낮추며 혈소판이 뭉쳐서 굳는 것을 억제하여 혈전 생성을
            방지하는 효과가 있습니다. <br />
            <br />
            [섬유소는 당질과 지방의 소화와 흡수를 억제하여 체지방 감소에 도움을
            줄 수 있습니다] <br />
            수용성 섬유소는 음식물이 위에서 장으로 배출되는 것을 느리게 하고,
            장에서의 음식물 이동시간을 증가시키며, 혈당이 급격히 상승하는 것을
            막아주며, 혈중 중성지방을 저하시키는 작용을 갖고 있습니다. 음식이
            장에 머무는 시간에 변화를 주어 몸에 해로운 콜레스테롤이 담즙산과
            결합하여 배설되도록 하는 작용을 돕고 재흡수 되지 않도록 함으로써
            혈중 중성지방의 농도에 영향을 줍니다.
          </SectionContent>
        </>
      ),
    },
  ];

  const handleButtonClick = (sectionId) => {
    const section = sections.find((section) => section.id === sectionId);
    navigate("/Medic/RelatedPage", { state: { sectionTitle: section.title } });
  };

  return (
    <>
      <Header />
      <Title>
        건강 맞춤형 해시태그 알아보기
        <img src={search2} alt="search icon" />
      </Title>
      <Container>
        <TabContainer>
          {sections.map((section) => (
            <TabButton
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setHoverSection(section.id)}
              onMouseLeave={() => setHoverSection(null)}
              active={section.id === activeSection}
            >
              {section.title}
            </TabButton>
          ))}
          <Div>더보기</Div>
        </TabContainer>
        {sections.map(
          (section) =>
            section.id === activeSection && (
              <ContentContainer
                key={section.id}
                activeSection={activeSection}
                hoverSection={hoverSection}
                active={true}
              >
                <SectionTitle>{section.title}</SectionTitle>
                <SectionContent>{section.content}</SectionContent>
                <Button onClick={() => handleButtonClick(section.id)}>
                  관련 제품 보러가기
                  <CartIcon src={cart} alt="cart icon" />
                </Button>
              </ContentContainer>
            )
        )}
      </Container>
    </>
  );
};

export default HashtagPage;
