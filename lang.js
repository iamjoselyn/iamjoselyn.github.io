const languages = {
    bioTitle: { eng: "Hi there",
                spa: "Hola",
                chi: "你好"},
    bioSub: {   eng: "I'm a Web Developer based in Peru China Spain",
                spa: "Soy un Desarrolladora Web residiendo en Perú China España",
                chi: "我是一个网站开发者。现在我住在秘鲁，中国，西班牙 "},
    bioPara: { eng: "Glad to meet you! I'm Joselyn, a Full Stack Web Developer. I got into this industry by curiosity and I'm still enjoying being part of it! I was born in Peru but I grow up in Europe. I moved to China where I finished my Bachelor Degree and I ended up living in New Zealand. What an adventure huh?!  Back in Spain, I specialized as a Full Stack Dev and I've been freelancing for the last months.",
                spa: "Encantada de conocerte! Soy Joselyn, una Desarrolladora Web Full Stack. Me adentré en esta industria por curiosidad y hasta ahora sigo disfrutando ser parte de ella! Nací en Perú pero crecí en Europa. Me mudé a China donde acabé mi Grado universitario y terminé viviendo en Nueva Zelanda. Vaya aventura eh?! Devuelta a España, me especialicé como Desarrolladora Full Stack y durante los últimos meses he estado trabajando como freelance.",
                chi: "很高兴见到你！我叫乔思琳，一个全栈Web开发人员。我是出于好奇才进入这个行业的，我仍然很享受成为其中的一员！我出生在秘鲁，但在欧洲长大。我搬到了中国，在那里我完成了我的学士学位，最后我住在新西兰。多冒险啊？！回到西班牙后，我专门从事全栈开发，过去几个月一直是自由职业者。"}

}

const buttonValue = document.querySelector("#")

function lang (buttonValue) {
    for (let id of languages) {
        document.querySelector(`#${id}`).innerHTML = languages[id][buttonValue]
    }
}