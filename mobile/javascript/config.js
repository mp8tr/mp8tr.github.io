	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="No";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.showThicknessOnMobile="no";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#226276";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=36;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1272;;bookConfig.securityType="1";bookConfig.bookTitle="HAK DAN KEWAJIBANKU";bookConfig.bookmarkCR="2f2a60ef6f8fcc16dcf9861be34acce4739012b4";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557589088","alpha":"1","location":{"tannoName":"sound1","x":"0","y":"0.7773109243697479","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/1.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557584166","alpha":"1","location":{"tannoName":"sound2","x":"-0.004453681710213777","y":"0.7794117647058824","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/2.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557583240","alpha":"1","location":{"tannoName":"sound3","x":"-0.007422802850356294","y":"0.7815126050420168","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/3.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557589620","alpha":"1","location":{"tannoName":"sound4","x":"0.0029691211401425177","y":"0.773109243697479","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/4.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557587447","alpha":"1","location":{"tannoName":"sound5","x":"-0.004453681710213777","y":"0.7836134453781513","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/5_1.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557587930","alpha":"1","location":{"tannoName":"sound6","x":"-0.0029691211401425177","y":"0.7899159663865546","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/5_2.mp3","volume":"1","replay":"1"}],[],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557585665","alpha":"1","location":{"tannoName":"sound7","x":"-0.0014845605700712589","y":"0.7815126050420168","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/6.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557584430","alpha":"1","location":{"tannoName":"sound8","x":"-0.008907363420427554","y":"0.7836134453781513","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/7.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557588379","alpha":"1","location":{"tannoName":"sound9","x":"-0.007422802850356294","y":"0.7878151260504201","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/8.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557586482","alpha":"1","location":{"tannoName":"sound10","x":"0","y":"0.7899159663865546","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/9.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557584707","alpha":"1","location":{"tannoName":"sound11","x":"-0.007422802850356294","y":"0.7962184873949579","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/10.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557586046","alpha":"1","location":{"tannoName":"sound12","x":"-0.004453681710213777","y":"0.773109243697479","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/11_1.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557586582","alpha":"1","location":{"tannoName":"sound13","x":"0","y":"0.7836134453781513","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/11_2.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557582555","alpha":"1","location":{"tannoName":"sound14","x":"-0.004453681710213777","y":"0.7773109243697479","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/12.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557587724","alpha":"1","location":{"tannoName":"sound15","x":"-0.008907363420427554","y":"0.7878151260504201","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/13.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557586905","alpha":"1","location":{"tannoName":"sound16","x":"-0.0014845605700712589","y":"0.7815126050420168","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/14.mp3","volume":"1","replay":"1"}],[],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557582227","alpha":"1","location":{"tannoName":"sound17","x":"-0.007422802850356294","y":"0.7878151260504201","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/15.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557584960","alpha":"1","location":{"tannoName":"sound18","x":"-0.010391923990498812","y":"0.7899159663865546","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/16.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557583352","alpha":"1","location":{"tannoName":"sound19","x":"-0.004453681710213777","y":"0.7857142857142857","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/17_1.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557585177","alpha":"1","location":{"tannoName":"sound20","x":"0.004453681710213777","y":"0.7941176470588235","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/17_2.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557588893","alpha":"1","location":{"tannoName":"sound21","x":"-0.0059382422802850355","y":"0.7962184873949579","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/18.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557584362","alpha":"1","location":{"tannoName":"sound22","x":"-0.008907363420427554","y":"0.7836134453781513","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/19.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"20212155758999","alpha":"1","location":{"tannoName":"sound23","x":"-0.0014845605700712589","y":"0.792016806722689","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/20.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557588954","alpha":"1","location":{"tannoName":"sound24","x":"-0.008907363420427554","y":"0.7815126050420168","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/21.mp3","volume":"1","replay":"1"}],[],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557589234","alpha":"1","location":{"tannoName":"sound26","x":"0.007422802850356294","y":"0.792016806722689","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/22.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557581382","alpha":"1","location":{"tannoName":"sound27","x":"-0.004453681710213777","y":"0.7962184873949579","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/23_1.mp3","volume":"1","replay":"1"}],[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202121557582254","alpha":"1","location":{"tannoName":"sound28","x":"-0.008907363420427554","y":"0.7857142857142857","width":"0.15201900237529692","height":"0.21512605042016808","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"842","pageHeight":"595"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","soundURL":"./files/pageConfig/23_2.mp3","volume":"1","replay":"1"}],[],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}