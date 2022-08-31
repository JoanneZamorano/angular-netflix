import { filmsInterface, topInterface } from './models/films.interface.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'netflix-app';

  public topFilms: topInterface = {
    section: 'LOS 5 MÁS POPULARES HOY',
    gallery: [{
      title:"LA CASA DE PAPEL",
      top: "1",
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661261862/1-papel_ecrxxs.webp",
      alt: "1-La casa de papel"
    },
    {
      top: "2",
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661261863/4-lostinspace_u7wwh2.webp",
      alt: "4-Lost in the space",
      title:"LOST IN THE SPACE"
    },
    {
      top: "3",
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661261863/7-blacklist_jatqim.webp",
      alt: "7-blacklist",
      title:"BLACKLIST"
    },
    {
      top: "4",
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661261863/9-poder_bbv36v.webp",
      alt: "9-El poder del perro",
      title:"EL PODER DEL PERRO"
    },
    {
      top: "5",
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661261863/10-gooddoctor_gy60pm.webp",
      alt: "10-The good doctor",
      title:"THE GOOD DOCTOR"
    }
  ]
  }
  
  public terrorFilms: filmsInterface = {
    section: 'TERROR',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/multiple_awv85n.webp",
      alt: "1-múltiple",
      title:"MULTIPLE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/reflejos_u9rilr.webp",
      alt: "2-reflejos",
      title:"REFLEJOS"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/apostol_lepz07.jpg",
      alt: "3-el apostol",
      title:"EL APOSTOL"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/infiernoagua_raprxi.webp",
      alt: "4-Infierno bajo el agua",
      title:"INFIERNO BAJO EL AGUA"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/calleterror_yqgaa3.jpg",
      alt: "5-calle del terror, parte 2 1978",
      title:"CALLE DEL TERROR, PART 2: 1978"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/malasana_efwbfy.webp",
      alt: "6-malasaña 32",
      title:"MALASAÑA 32"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/life_szdgqb.webp",
      alt: "7-life",
      title:"LIFE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262266/insidious2_kwmqe6.webp",
      alt: "8-Insidous 2",
      title:"INSIDOUS 2"
    }
  ]
  }
  
  public comedyFilms: filmsInterface = {
    section: 'COMEDIA',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/padresella_xytnto.webp",
      alt: "1-los padres de ella",
      title:"LOS PADRES DE ELLA"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/ted2_zjaizt.webp",
      alt: "2-ted2",
      title:"TED 2"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/erasehollywood_gfhkle.webp",
      alt: "3-Érase una vez en hollywood",
      title:"ERASE UNA VEZ EN HOLLYWOOD"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/regresofuturo_xmtpua.webp",
      alt: "4-Regreso al futuro",
      title:"REGRESO AL FUTURO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/family_guy_f4addc.webp",
      alt: "5-padre de familia",
      title:"PADRE DE FAMILIA"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/juerga_erdggv.webp",
      alt: "6-juerga hasta el fin",
      title:"JUERGA HASTA EL FIN"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/dictador_zewu5s.webp",
      alt: "7-el dictador",
      title:"EL DICTADOR"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/casi300_szs5cb.webp",
      alt: "8-casi 300",
      title:"CASI 300"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262675/cazafantasmas_hchca4.webp",
      alt: "9-los cazafantasmas",
      title:"LOS CAZAFANTASMAS"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262676/laterminal_xrsssw.webp",
      alt: "10-la terminal",
      title:"LA TERMINAL"
    }
  ]
  }
  
  public accionFilms: filmsInterface = {
    section: 'ACCION',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/worldwarz_hzinrb.webp",
      alt: "1-guerra mundial z",
      title:"GUERRA MUNDIAL 2"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/renacido_q833bf.webp",
      alt: "2-el renacido",
      title:"EL RENACIDO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/terminator2_hxylm4.webp",
      alt: "3-terminator 2",
      title:"TERMINATOR 2"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/heat_scwnrt.webp",
      alt: "4-heat",
      title:"HEAT"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/misionimposiblenacion_r1zsys.webp",
      alt: "5-misión imposible, nación secreta",
      title:"MISIÓN IMPOSIBLE: NACIÓN SECRETA"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/killbill2_qz8rat.webp",
      alt: "6-kill bill vol2",
      title:"KILL BILL vol: 2"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/elprotector_rb9scv.webp",
      alt: "7-el protector",
      title:"EL PROTECTOR"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/johnwick2_uqm2e3.webp",
      alt: "8-John Wick",
      title:"JOHN WICK"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/jackreacher_m8qsa1.webp",
      alt: "9-jack reacher",
      title:"JACK REACHER"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262839/equalizer2_tp7s2d.webp",
      alt: "10-the equalizer 2",
      title:"THE EQUALIZER 2"
    }
  ]
  }
  
  public animeFilms: filmsInterface = {
    section: 'ANIME',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262971/mononoke_ueuotx.webp",
      alt: "1-la princesa mononoke",
      title:"LA PRINCESA MONONOKE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262971/laputa_qtbwrq.webp",
      alt: "2-el castillo en el cielo",
      title:"EL CASTILLO EN EL CIELO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262971/perfectblue_zgttry.webp",
      alt: "3-perfect blue",
      title:"PERFECT BLUE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262971/ninokuni_ufvgh7.jpg",
      alt: "4-ninokuni",
      title:"NINOKUNI"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262971/porcorosso_uxderk.webp",
      alt: "5-porco rosso",
      title:"PORCO ROSSO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262970/chihiro_paousc.webp",
      alt: "6-el viaje de chihiro",
      title:"EL VIAJE DE CHIHIRO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262970/evangelion_mibylz.webp",
      alt: "7-evangelion",
      title:"EVANGELION"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262970/gitsarise_n463h9.webp",
      alt: "8-arise",
      title:"ARISE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262970/castilloambulante_gic8o3.webp",
      alt: "9-el castillo ambulante",
      title:"EL CASILLO AMBULANTE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661262970/ajin_d3w5ca.jpg",
      alt: "10-ajin",
      title:"AJIN"
    }
  ]
  }
  
  public dramaFilms: filmsInterface = {
    section: 'DRAMA',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/unicosuperviviente_q5ifkf.webp",
      alt: "1-el único superviviente",
      title:"EL UNICO SUPERVIVIENTE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/sombradiablo_sd2fyj.webp",
      alt: "2-la sombra del diablo",
      title:"LA SOMBRA DEL DIABLO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/schindler_sml1ai.webp",
      alt: "3-la lista de schindler",
      title:"LA LISTA SCHINDLER"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/scarface_g1wpco.webp",
      alt: "4-el precio del poder",
      title:"EL PRECIO DEL PODER"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/naufrago_fg89ye.webp",
      alt: "5-náufrago",
      title:"NAUFRAGO"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/salvaralsoldado_gmvf0p.webp",
      alt: "6-salvar al soldado ryan",
      title:"SALVAR AL SOLDADO RYAN"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/noespais_xxnt0k.webp",
      alt: "7-no es país para viejos",
      title:"NO ES PAIS PARA VIEJOS"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/culpable_tpxvni.jpg",
      alt: "8-culpable",
      title:"CULPABLE"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/1917_nk1xhx.webp",
      alt: "9-1917",
      title:"1917"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263083/clublucha_zyrgjq.webp",
      alt: "10-el club de la lucha",
      title:"EL CLUB DE LA LUCHA"
    }
  ]
  
  }
  
  public scifiFilms: filmsInterface = {
    section: 'SCI-FI',
    gallery: [{
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/jumper_dorrbq.webp",
      alt: "1-Jumper",
      title:"JUMPER"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/watchmen_jis83v.webp",
      alt: "2-watchmen",
      title:"WATCHMEN"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/transformers_z9kdqq.webp",
      alt: "3-transformes",
      title:"TRANSFORMERS"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/startrek_b7hhaf.webp",
      alt: "4-start trek",
      title:"START TREK"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/6dia_dhkqjm.webp",
      alt: "5-el 6º dia",
      title:"EL 6º DIA"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/gits_bwzzot.webp",
      alt: "6-ghost in the shell",
      title:"GHOST IN THE SHELL"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/passengers_x7cv9q.webp",
      alt: "7-passengers",
      title:"PASSANGERS"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/afterearth_qxdb0i.webp",
      alt: "8-after earth",
      title:"AFTER EARTH"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/doom_net0zl.webp",
      alt: "9-doom",
      title:"DOOM"
    },
    {
      src:"https://res.cloudinary.com/djbn99sev/image/upload/v1661263215/deepimpact_popttq.webp",
      alt: "10-deep impact",
      title:"DEEP IMPACT"
    }
  ]
  }
  

}

