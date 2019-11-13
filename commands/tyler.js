const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});



const fs = require('fs');
const http = require('http');
var request = require('request');
const {
    get
} = require("snekfetch");
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        const tyler = [
            "https://media.discordapp.net/attachments/627915749599477770/630499783068483585/images.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/629133018933493790/TylerLookingResonance.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/629132893788045323/weeb2.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/629132846593867807/wtf.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/629132844609830922/q.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/629132838121242635/tyler-mcvicker.jpg",
            "https://cdn.discordapp.com/attachments/258412663573446657/628056971148394516/freeme.jpg",
            "https://cdn.discordapp.com/attachments/258412663573446657/628054801434804244/tyler_dumpster.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054502678986772/excite.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054501403918366/ED0sq3VU4AAqqRF.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054500107747328/ded.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054497138311180/avagagagaz.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054497205288970/D7SAtefXkAcRKjI.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054496408371220/capac.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054493514432513/aaaaaaaaahhhhh.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054492100952076/where_am_I.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054489701548045/TylerShocked.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054487688282146/tylers_a_nerd_lmao.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054458877607946/tyler_armless.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054457627705388/Screenshot_20190822-211503_Twitter.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054456512020500/sellout.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054454297428028/Screenshot_20190812-103016_Twitter.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054452095680515/ProfilePicture.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054450707103764/mic.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054448538910720/isleep.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054447200796690/image0.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054445493583892/huh.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/628054445241925632/happy.png",
            "https://cdn.discordapp.com/attachments/627915749599477770/630512157129179148/unknown.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/630511529858564107/unknown.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/630511747786342427/Unbenannt.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/630512489733292032/unknown.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/630512563184074781/unknown.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/630512384410386454/unknown.png",
            "https://media.discordapp.net/attachments/572662006692315138/587569748854833162/tyler.gif",
            "https://media.discordapp.net/attachments/628054414170652675/630787307468881920/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630783860929724436/JPEG_20191003_111552.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630762321844764672/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630606116576821258/hello.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630603390874943508/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630603229314416650/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630603350252978176/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602994660147210/bignose.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602969775210518/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602849897676811/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602687091572776/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602778607353859/unknown.png",
            "https://media.discordapp.net/attachments/258324481074921472/630602782147215370/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/630599687531134996/boom.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/630568807760658432/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630598902294380544/zoomer.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/635514815754010634/badtime.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/630952735021465611/image0.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/630952783864004609/image0.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/630952812406112279/image0.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/630952911387623440/image0.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/631162288623058944/JPEG_20191008_121327.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/631225254873661451/JPEG_20191008_162333.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/631226473189081088/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/631332446956290058/pleasegaben.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/631386170877542401/unknown.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/631563501545979962/JPEG_20191009_144739.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/631582647130521610/JPEG_20191009_160342.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/636588526443560980/JPEG_20191023_113508.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/635889133126025216/ceofreak.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/635885530546044949/EHaRkoQWsAA7zw_.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/634601828914561034/tylerecstatic.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/634601588668891156/tyler_portal.jpg",
            "https://media.discordapp.net/attachments/628054414170652675/634601366916169749/tyler_axe.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/588075637106016256/3ce6b116f4d51bf461c0614e9263eba6.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/587367909089738760/unknown.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/634434191731326977/IMG_20191017_124847.jpg",
            "https://media.discordapp.net/attachments/258324481074921472/634210729628663808/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/633750524440608768/IMG_20191013_205325_01.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/632707762580750344/avagagagaz.PNG",
            "https://cdn.discordapp.com/attachments/579481334657974273/632337980278964224/000046.jpg",
            "https://cdn.discordapp.com/attachments/628054414170652675/631874464812105763/best.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637053194220077076/JPEG_20191024_182147.jpg",
            "https://cdn.discordapp.com/attachments/63670672468580766/637053972732969005/EHrUTHbXkAAxwH-.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052472401330197/JPEG_20191024_181856.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637055585489125388/AnVagthp1PXMAAAAAElFTkSuQmCC.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637053168890544138/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052689657757736/JPEG_20191024_181933.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052374489235476/JPEG_20191024_181831.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052315261599755/JPEG_20191024_181819.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052262018973736/JPEG_20191024_181804.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052187318550579/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052174085652490/JPEG_20191024_181744.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637052111762227216/JPEG_20191024_181728.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637054516348583936/JPEG_20191024_182659.jpg",
            "https://cdn.discordapp.com/attachments/579481334657974273/637112326461587491/image0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/637112260073881635/oof.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/637111730786402317/image0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/637111662091960331/image0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/637111588184129536/image0.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637134273991933962/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637134568918482965/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637477191076282414/tyler_OHNO.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637477782611296275/TYLER_demo.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637474782434164745/TYLERbeta.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602060231868446/cascade.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/637790866320130048/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637792578313650216/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637789151529271318/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/638104358373949503/JPEG_20191027_155837.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/638124037108662302/IMG_20191027_171631.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/638124722697011221/JPEG_20191027_171938.jpg",
            "https://cdn.discordapp.com/attachments/397630085366022146/638098351359000576/IMG_20191026_114025_01.jpg",
            "https://cdn.discordapp.com/attachments/579481334657974273/638193620721074216/image0.png",
            "https://cdn.discordapp.com/attachments/628054414170652675/638261023366971393/BiABYoZwkFDrOPN-800x450-noPad.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/638293613414973440/tyler_firepit.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/638293463087185940/0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/638293683464306688/0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/638293760299630593/0.png",
            "https://cdn.discordapp.com/attachments/579481334657974273/638556018783289354/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/639634379231985666/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/639634269505060871/unknown.png",
            "https://cdn.discordapp.com/attachments/258449773143523328/641808367534342169/unknown.png",
            "https://cdn.discordapp.com/attachments/258449773143523328/641807886770634752/unknown.png",
            "https://media.discordapp.net/attachments/258412663573446657/554826470250250250/tyler-mcnetwork.gif",
            "https://cdn.discordapp.com/attachments/258449773143523328/641745449048473600/EIt-40IXkAEz-PT.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641723571667992618/image0.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/641697336749457428/JPEG_20191106_125554.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/641465211492237322/DO-U-KNOW-DE-WAE.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641370888440381450/JPEG_20191105_151847.jpg",
            "https://cdn.discordapp.com/attachments/258449773143523328/641840194324267018/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641839535126478858/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641831778813739018/ok.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/641831157138325504/unlimited.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641830136139874304/unlimited.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641829903335161856/fixedtwiced.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641829732404690962/unlimited.png",
            "https://media.discordapp.net/attachments/258324481074921472/641829296029040640/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641820654139867151/3fiowe.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/641820165398462504/sadsaasd.png",
            "https://cdn.discordapp.com/attachments/640348000274612249/643652144385490955/tylermcstahp.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/643653337698533376/unknown.png",
            "https://cdn.discordapp.com/attachments/640348000274612249/643654622598397993/unknown.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/643164970866966531/JPEG_20191024_181819.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/643213655332356096/JPEG_20191110_172113.jpg",
            "https://cdn.discordapp.com/attachments/258324481074921472/643230526961877002/mcvickler.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/643232735879757824/mail.png",
            "https://media.discordapp.net/attachments/258324481074921472/643235571426394112/unknown.png",
            "https://media.discordapp.net/attachments/258324481074921472/644280056948195338/tyler_soup.png"
        ];
        message.channel.send("", {
            file: `${tyler[Math.floor(Math.random() * tyler.length)]}`
        });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
