import img41 from "./images/details-41.jpeg";
import img42 from "./images/details-42.jpeg";
import img43 from "./images/details-43.jpeg";
import img44 from "./images/details-44.jpeg";
import img45 from "./images/details-45.jpeg";
import img46 from "./images/details-46.jpeg";
import img35 from "./images/room-35.jpeg";
import img36 from "./images/room-36.jpeg";
import img37 from "./images/room-37.jpeg";
import img38 from "./images/room-38.jpeg";
import img39 from "./images/room-39.jpeg";
import img40 from "./images/room-40.jpeg";


export const  data = [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "«Студенческий листопад»",
      slug: "single-economy",
      type: "song",
      price: 'для перехода кликните',
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
      [
        "Участники в номинации «солист-вокалист» представляют одно произведение продолжительностью до 4-х минут в сопровождении фонограммы (-1).",
        " Участники в номинации «Вокальный ансамбль» должны подготовить две песни:",
        <td>-первая песня – славянских авторов;</td>, 
        "-вторая песня – по выбору."],
      extras: [
        "вокальный ансамбль",
        "солист – вокалист",
      ],
      images: [
        {
          fields: {
            file: {
              url: img35
            }
          }
        },
        {
          fields: {
            file: {
              url: img36
            }
          }
        },
        {
          fields: {
            file: {
              url: img37
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "«Танцы 100%»",
      slug: "single-standard",
      type: "dance",
      price: 'для перехода кликните',
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: true,
      description:
      [
        <td>"Участники конкурса исполняют не более 2-х танцев в жанре."</td>,
        "Критерии оценки участников:",
        <td>- исполнительское мастерство участников;"</td>,
        "- техника исполнения;",
        <td>- артистичность;</td>,
        "- музыкальность;",
        <td>- сюжетно-образное решение танца;</td>,
        "- соответствие музыкального материала хореографической лексике;",
        <td>- соответствие внешнего вида исполнителей сценическому образу.</td>,
        "Не допускается участие в показе руководителей коллективов."],
      extras: [
        "эстрадный танец",
        "современный танец (джаз - модерн, свободная пластика, вог, брейк-данс, хип-хоп, и др.)",
        "театр танца (танцевальное, светодиодное шоу и др.)"
      ],
      images: [
        {
          fields: {
            file: {
              url: img40
            }
          }
        },
        {
          fields: {
            file: {
              url: img39
            }
          }
        },
        {
          fields: {
            file: {
              url: img38
            }
          }
        }
      ]
    }
  },
  
  {
   sys: {
      id: "3"
    },
    fields: {
      name: "«Teaтр+»",
      slug: "double-economy",
      type: "theatre",
      price: 'для перехода кликните',
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: true,
      description:
      [
        "Участники представляют на конкурс творческие номера, отражающие культурно-историческое единство Беларуси и России.",
        <td>Продолжительность выступления - до 10 минут.</td>,
        "Критерии оценки участников:",
        <td>- подбор репертуара;</td>,
        "- степень воздействия на зрителя;",
        <td>- сценическое воплощение образа;</td>,
        "- ясная дикция и манера исполнения;", 
        <td>- артистичность;</td>,
        "- искренность;",
        <td>- исполнительское мастерство.</td>],
      extras: [
        "чтец",
        "театральная миниатюра (до пяти участников)."
      ],
      images: [
        {
          fields: {
            file: {
              url: img43
            }
          }
        },
        {
          fields: {
            file: {
              url: img42
            }
          }
        },
        {
          fields: {
            file: {
              url: img41
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "«Фотоконкурс»",
      slug: "single-basic",
      type: "photo",
      price: 'для перехода кликните',
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
      ["В номинации «Студенческий АРТ-ПОЛЕТ» участвуют фотоработы, передающие студенческие традиции, традиции творческих коллективов, творческие проекты студенческих центров, факультетов, фрагменты показательных выступлений, культурно-досуговых мероприятий, фестивалей, проводимых учреждением образования.",
      "На конкурс в номинации «Мой родной уголок Земли» принимаются фотографии, в которых прослеживается связь с природой родного края, культурными традициями народа."],
      extras: [
        "Студенческий АРТ-ПОЛЕТ",
        "Мой родной уголок Земли"
      ],
      images: [
        {
          fields: {
            file: {
              url: img44
            }
          }
        },
        {
          fields: {
            file: {
              url: img45
            }
          }
        },
        {
          fields: {
            file: {
              url: img46
            }
          }
        }
      ]
    }
  },
];
