async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.googleusercontent.com/a/macros/escola.pr.gov.br/echo?user_content_key=OKxuGnyAmrNH0Or1kAnCRqtmcdfx_4RKt_VjETNsN1dGbcoYpRGNNVhK7LTH5sdlbCfcnMgBQ_2Kuu-vWcHqn24yF5ZHwatGOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBGCNaBo701naU8cM07sy4y4YFj_89rZFUGO16ou2x7uOWdolcXkqpO8a5rYxKgAUcLehfBmg8-q3geJoP_AbuArzX-PE2A8re95lVjdCjIlhfZFEebSWm4U3WbTlMMtfgYZpTak_o22Q&lib=MnjbyjzSVuXXN-l88BVovZb0EK-iT8Fdm'
    const res = await fetch(url)
    const dados = await res.json()

    console.table(dados)

}

redesSociaisFavoritasMinhaEscola()