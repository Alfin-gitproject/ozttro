import svgPaths from "./svg-e6cgud15vi";
import imgOzttro from "./050501e02414c271f1c74ea4920a4ce4b3740e30.png";

function Ozttro() {
  return (
    <div className="h-[52px] relative shrink-0 w-[150px]" data-name="OZTTRO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-[0.01%] w-full" src={imgOzttro} />
      </div>
    </div>
  );
}

function LinkBrandLogo() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[100px] top-1/2" data-name="Link - Brand Logo">
      <Ozttro />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454141] text-[18px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454141] text-[18px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">About</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[#b5c4ff] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4dce8] text-[18px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">Service</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454141] text-[18px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">Contact</p>
      </div>
    </div>
  );
}

function NavigationLinksDesktop() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] top-1/2" data-name="Navigation Links (Desktop)">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[12px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">Explore</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#0266ff] content-stretch drop-shadow-[0px_8px_16px_rgba(2,102,255,0.3)] flex flex-col items-start pb-[12px] pt-[13px] px-[24px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">Global Enquiry</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[1182px] top-[calc(50%-4.5px)]" data-name="Actions">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[80px] left-0 right-0 top-0" data-name="Container">
      <LinkBrandLogo />
      <NavigationLinksDesktop />
      <Actions />
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[#1c1b1c] border-[rgba(0,0,0,0.2)] border-b border-solid drop-shadow-[0px_8px_16px_rgba(0,0,0,0.4)] h-[80px] left-0 right-0 top-[20px]" data-name="Header - TOP NAVIGATION BAR">
      <Container />
    </div>
  );
}

function Ozttro1() {
  return (
    <div className="h-[52px] relative shrink-0 w-[150px]" data-name="OZTTRO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-[0.01%] w-full" src={imgOzttro} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(229,226,227,0.5)] w-full">
        <p className="leading-[22.75px] mb-0">{`Elevating the world's spice markets`}</p>
        <p className="leading-[22.75px] mb-0">through technological precision and</p>
        <p className="leading-[22.75px]">agricultural integrity.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[22.75px] items-start justify-self-stretch pb-[3.75px] relative row-1 self-start shrink-0" data-name="Container">
      <Ozttro1 />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] tracking-[1.8px] w-full">
        <p className="leading-[16px]">Operations</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Strategic Sourcing</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Export Compliance</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Partner Portal</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading2 />
      <List />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] tracking-[1.8px] w-full">
        <p className="leading-[16px]">Company</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Terms of Trade</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.6)] w-full">
        <p className="leading-[24px]">Quality Standards</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] tracking-[1.8px] w-full">
        <p className="leading-[16px]">Newsletter</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(229,226,227,0.5)] w-full">
        <p className="leading-[16px]">Receive global spice market insights monthly.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Email</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] flex-[1_0_0] min-w-px relative rounded-bl-[8px] rounded-tl-[8px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[10px] px-[17px] relative size-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Container">
          <path d={svgPaths.pb36e280} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00dbe9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Button">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading4 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#131314] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_136px] left-[116.31px] max-w-[1440px] px-[80px] py-[48px] right-[112.3px] top-[2653px]" data-name="Container">
      <Container2 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(229,226,227,0.3)] tracking-[1.8px] whitespace-nowrap">
          <p className="leading-[16px]">© 2024 OZTTRO. DEFINING GLOBAL SPICE EXCELLENCE.</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p237be000} fill="var(--fill-0, #E5E2E3)" fillOpacity="0.3" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #E5E2E3)" fillOpacity="0.3" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute bg-[#131314] content-stretch flex items-center justify-between left-[116.31px] max-w-[1440px] pb-[32px] pt-[33px] px-[80px] right-[112.3px] top-[2885px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[2653px]">
      <div className="absolute bg-[#131314] h-[316px] left-0 top-[2654px] w-[1512px]" />
      <Container1 />
      <HorizontalBorder />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] text-center tracking-[3.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SERVICE ECOSYSTEM</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 2:margin">
      <Heading />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Heading2Margin />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">Integrated Export Infrastructure</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 27.5">
        <g id="Container">
          <path d={svgPaths.p1901f300} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">Premium Spice</p>
          <p className="leading-[40px]">Exporting</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">World-class export of AAA-grade</p>
          <p className="leading-[24px] mb-0">spices including Cardamom,</p>
          <p className="leading-[24px] mb-0">Turmeric, and Black Pepper with</p>
          <p className="leading-[24px]">verified origins.</p>
        </div>
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Service 1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <OverlayBorder />
        <Heading5 />
        <Container18 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p29083e80} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(0,219,233,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">Strategic Global</p>
          <p className="leading-[40px]">Sourcing</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">A vast network of farmers and</p>
          <p className="leading-[24px] mb-0">cooperatives across multiple</p>
          <p className="leading-[24px] mb-0">continents, securing direct-from-</p>
          <p className="leading-[24px]">origin pricing.</p>
        </div>
      </div>
    </div>
  );
}

function Service2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Service 2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <OverlayBorder1 />
        <Heading6 />
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p1ec38700} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">Export</p>
          <p className="leading-[40px]">Documentation</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">Full handling of international</p>
          <p className="leading-[24px] mb-0">customs, phytosanitary</p>
          <p className="leading-[24px] mb-0">requirements, and trade finance</p>
          <p className="leading-[24px]">documentation.</p>
        </div>
      </div>
    </div>
  );
}

function Service3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Service 3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <OverlayBorder2 />
        <Heading7 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 20">
        <g id="Container">
          <path d={svgPaths.pc00c480} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(0,219,233,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">International</p>
          <p className="leading-[40px]">Logistics</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">End-to-end supply chain</p>
          <p className="leading-[24px] mb-0">management with priority shipping</p>
          <p className="leading-[24px] mb-0">lanes and real-time shipment</p>
          <p className="leading-[24px]">monitoring.</p>
        </div>
      </div>
    </div>
  );
}

function Service4() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Service 4">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <OverlayBorder3 />
        <Heading8 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.5">
        <g id="Container">
          <path d={svgPaths.peca8400} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">{`Quality &`}</p>
          <p className="leading-[40px]">Processing</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">Climate-controlled processing units</p>
          <p className="leading-[24px] mb-0">ensuring the highest purity</p>
          <p className="leading-[24px]">standards and laboratory testing.</p>
        </div>
      </div>
    </div>
  );
}

function Service5() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Service 5">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[65px] pt-[41px] px-[41px] relative size-full">
        <OverlayBorder4 />
        <Heading9 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Container">
          <path d={svgPaths.pe8b9c80} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(0,219,233,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[40px] mb-0">{`Private Label &`}</p>
          <p className="leading-[40px]">Bulk</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,211,0.7)] w-full">
          <p className="leading-[24px] mb-0">Customized packaging and private</p>
          <p className="leading-[24px] mb-0">labeling services for global retail</p>
          <p className="leading-[24px]">chains and hospitality giants.</p>
        </div>
      </div>
    </div>
  );
}

function Service6() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] col-3 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Service 6">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[65px] pt-[41px] px-[41px] relative size-full">
        <OverlayBorder5 />
        <Heading10 />
        <Container28 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__362px_362px] relative shrink-0 w-full" data-name="Container">
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
    </div>
  );
}

function SectionCoreExportServices() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-start left-[calc(50%+12px)] max-w-[1440px] px-[80px] top-[202px] w-[1280px]" data-name="Section - Core Export Services">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 2:margin">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] tracking-[3.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">STRATEGIC PARTNERS</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[1199px] w-[1120px]" data-name="Container">
      <Heading2Margin1 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[48px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">Who We Serve Globally</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[27px] relative shrink-0 w-[30.141px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1408 27">
        <g id="Container">
          <path d={svgPaths.p3eedaa00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">FOOD DISTRIBUTORS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[153.16px] items-center justify-center left-[196px] px-[25px] py-[47.08px] right-[1149.33px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 24">
        <g id="Container">
          <path d={svgPaths.p3399c200} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">SPICE BRANDS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[150.17px] items-center justify-center left-[386.67px] pb-[47.09px] pt-[47.08px] px-[25px] right-[958.67px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin1 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[32.964px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9636 28.5">
        <g id="Container">
          <path d={svgPaths.pbe0f218} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">RETAIL CHAINS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[154.67px] items-center justify-center left-[577.33px] pb-[47.09px] pt-[47.08px] px-[25px] right-[768px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin2 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[27px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
        <g id="Container">
          <path d={svgPaths.pc611100} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">WHOLESALE MARKETS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[153.16px] items-center justify-center left-[768px] px-[25px] py-[47.08px] right-[577.33px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin3 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[27px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
        <g id="Container">
          <path d={svgPaths.p36df7c0} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">IMPORT COMPANIES</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[153.17px] items-center justify-center left-[958.67px] pb-[47.09px] pt-[47.08px] px-[25px] right-[386.67px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin4 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 30">
        <g id="Container">
          <path d={svgPaths.p280a6f80} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="mb-[-1px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[11px] text-center uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">HOSPITALITY GROUPS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur5() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col h-[156.17px] items-center justify-center left-[1149.33px] pb-[47.09px] pt-[47.08px] px-[25px] right-[196px] rounded-[16px] top-[1351px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin5 />
      <Container41 />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[1199px]">
      <Container29 />
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
      <OverlayBorderOverlayBlur3 />
      <OverlayBorderOverlayBlur4 />
      <OverlayBorderOverlayBlur5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[196px] right-[196px] top-[2183px]" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">The Export Pipeline</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">1. Sourcing</p>
      </div>
    </div>
  );
}

function Heading5Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[38.05px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading11 />
    </div>
  );
}

function Container43() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[0.625px] pl-[5.55px] pr-[5.56px] top-[126.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Direct sourcing from</p>
        <p className="leading-[22.75px]">audited farm networks.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p2d4ee00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container44 />
      <div className="absolute bg-[rgba(181,196,255,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[39.59px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Step() {
  return (
    <div className="h-[173.5px] max-w-[200px] relative shrink-0 w-[159.19px]" data-name="Step 1">
      <Heading5Margin />
      <Container43 />
      <Margin6 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00dbe9] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">2. Inspection</p>
      </div>
    </div>
  );
}

function Heading5Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20.7px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading12 />
    </div>
  );
}

function Container45() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[15.36px] pr-[15.37px] top-[126.75px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Lab testing for</p>
        <p className="leading-[22.75px] mb-0">moisture, oil, and</p>
        <p className="leading-[22.75px]">purity.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[22.571px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5713 22.5">
        <g id="Container">
          <path d={svgPaths.p718edc0} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container46 />
      <div className="absolute bg-[rgba(0,219,233,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[30.19px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Step1() {
  return (
    <div className="h-[196.25px] max-w-[200px] relative shrink-0 w-[140.38px]" data-name="Step 2">
      <Heading5Margin1 />
      <Container45 />
      <Margin7 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">3. Processing</p>
      </div>
    </div>
  );
}

function Heading5Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22.39px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading13 />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[0.625px] px-[5.85px] top-[126.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Climate-controlled</p>
        <p className="leading-[22.75px]">sorting and cleaning.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[23.132px] relative shrink-0 w-[22.54px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5398 23.1324">
        <g id="Container">
          <path d={svgPaths.p1ee3ab40} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container48 />
      <div className="absolute bg-[rgba(181,196,255,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[33.08px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Step2() {
  return (
    <div className="h-[173.5px] max-w-[200px] relative shrink-0 w-[146.17px]" data-name="Step 3">
      <Heading5Margin2 />
      <Container47 />
      <Margin8 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00dbe9] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">4. Documentation</p>
      </div>
    </div>
  );
}

function Heading5Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.44px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading14 />
    </div>
  );
}

function Container49() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[0.625px] pl-[8.08px] pr-[8.09px] top-[126.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Export compliance</p>
        <p className="leading-[22.75px]">and shipping prep.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.5">
        <g id="Container">
          <path d={svgPaths.peca8400} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container50 />
      <div className="absolute bg-[rgba(0,219,233,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[27.93px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Step3() {
  return (
    <div className="h-[173.5px] max-w-[200px] relative shrink-0 w-[135.84px]" data-name="Step 4">
      <Heading5Margin3 />
      <Container49 />
      <Margin9 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">5. Logistics</p>
      </div>
    </div>
  );
}

function Heading5Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26.34px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading15 />
    </div>
  );
}

function Container51() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[0.625px] px-[2.97px] top-[126.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Priority global freight</p>
        <p className="leading-[22.75px]">with live tracking.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 20">
        <g id="Container">
          <path d={svgPaths.pc00c480} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container52 />
      <div className="absolute bg-[rgba(181,196,255,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[30.2px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder4 />
    </div>
  );
}

function Step4() {
  return (
    <div className="h-[173.5px] max-w-[200px] relative shrink-0 w-[140.41px]" data-name="Step 5">
      <Heading5Margin4 />
      <Container51 />
      <Margin10 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00dbe9] text-[12px] text-center tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[16px]">6. Delivery</p>
      </div>
    </div>
  );
}

function Heading5Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[38.71px] pb-[8px] top-[104px]" data-name="Heading 5:margin">
      <Heading16 />
    </div>
  );
}

function Container53() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[0.625px] pl-[1.83px] pr-[1.84px] top-[126.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Door-to-door fulfillment</p>
        <p className="leading-[22.75px]">at your warehouse.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.094px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0938 20">
        <g id="Container">
          <path d={svgPaths.p38c2e700} fill="var(--fill-0, #00DBE9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#131314] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(0,219,233,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container54 />
      <div className="absolute bg-[rgba(0,219,233,0.1)] blur-[6px] inset-px rounded-[9999px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Margin11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104px] items-start left-[39px] pb-[24px] top-0 w-[80px]" data-name="Margin">
      <BackgroundBorder5 />
    </div>
  );
}

function Step5() {
  return (
    <div className="h-[173.5px] max-w-[200px] relative shrink-0 w-[158.02px]" data-name="Step 6">
      <Heading5Margin5 />
      <Container53 />
      <Margin11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[196px] right-[196px] top-[2319px]" data-name="Container">
      <div className="absolute bg-gradient-to-r from-[rgba(0,219,233,0)] h-px left-0 right-0 to-[rgba(0,219,233,0)] top-[40px] via-1/2 via-[#00dbe9]" data-name="Line background" />
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[196px] right-[196px] top-[2183px]">
      <Heading1 />
      <Container42 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[48px] tracking-[-0.96px] w-full">
        <p className="leading-[56px] mb-0">Real-Time Logistics</p>
        <p className="leading-[56px]">Monitoring</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c6d3] text-[18px] w-full">
        <p className="leading-[32px] mb-0">{`Our proprietary "Atlas" system allows Ozttro partners to`}</p>
        <p className="leading-[32px] mb-0">monitor every stage of their shipment with blockchain-</p>
        <p className="leading-[32px]">backed traceability and real-time sensor data.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur7() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#00dbe9] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Live Tracking Active</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] whitespace-nowrap">
        <p className="leading-[21px]">GPS monitored cold-chain containers.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[243.64px]" data-name="Container">
      <Heading18 />
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur7 />
      <Container60 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p382b1fc0} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur8() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container63 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Automated Customs</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(196,198,211,0.6)] whitespace-nowrap">
        <p className="leading-[21px]">Pre-cleared documentation for 120+ ports.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[272.44px]" data-name="Container">
      <Heading19 />
      <Container65 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur8 />
      <Container64 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading17 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(229,226,227,0.5)] tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ACTIVE SHIPMENT: #OZT-7822</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#003e42] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00b1bd] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">IN TRANSIT</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container67 />
        <Background />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(196,198,211,0.5)] whitespace-nowrap">
        <p className="leading-[18px]">Origin</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Kochi, IN</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[128.59px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 30">
        <g id="Margin">
          <path d={svgPaths.p9d63b80} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(196,198,211,0.5)] text-right whitespace-nowrap">
        <p className="leading-[18px]">Destination</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[32px] text-right tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Rotterdam, NL</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[214.58px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Margin12 />
      <Container73 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-gradient-to-r from-[#b5c4ff] inset-[0_35%_0_0] rounded-[9999px] to-[#00dbe9]" data-name="Gradient" />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(196,198,211,0.5)] uppercase w-full">
          <p className="leading-[15px]">TEMP</p>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[16px] w-full">
          <p className="leading-[24px]">22.4° C</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur9() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(196,198,211,0.5)] uppercase w-full">
          <p className="leading-[15px]">HUMIDITY</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e3] text-[16px] w-full">
          <p className="leading-[24px]">58%</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur10() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_73px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur9 />
      <OverlayBorderOverlayBlur10 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container69 />
        <Overlay />
        <Container76 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#080808] col-2 justify-self-stretch relative rounded-[16px] row-1 self-center shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
        <Container66 />
        <Container68 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_384px] relative size-full">
        <Container56 />
        <BackgroundBorder6 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur6() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col items-start p-[49px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function SectionGlobalLogisticsVisualization() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip px-[80px] top-[1604px] w-[1280px]" data-name="Section - Global Logistics Visualization">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 482">
        <g id="SVG" opacity="0.2">
          <path d={svgPaths.p381d7980} id="Vector" stroke="var(--stroke-0, #00DBE9)" strokeWidth="0.482" />
          <path d={svgPaths.p20421c00} id="Vector_2" stroke="var(--stroke-0, #B5C4FF)" strokeWidth="0.482" />
          <path d={svgPaths.p1ab61c28} id="Vector_3" stroke="var(--stroke-0, #00DBE9)" strokeWidth="0.482" />
        </g>
      </svg>
      <OverlayBorderOverlayBlur6 />
    </div>
  );
}

export default function Service() {
  return (
    <div className="bg-black relative size-full" data-name="Service">
      <HeaderTopNavigationBar />
      <Group />
      <SectionCoreExportServices />
      <Group1 />
      <Group2 />
      <SectionGlobalLogisticsVisualization />
    </div>
  );
}