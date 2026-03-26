// content.ts
export type Lang = "en" | "es";

export interface Gallery {
  title: string;
  subtitle: string;
  backHome: string;
}

export interface Session {
  number: number;
  title: string;
  goal: string;
  content: string[];
}

export interface Content {
  gallery: Gallery;
  nav: {
    toggle: string;
    categories: {
      title: string;
      items: { label: string; to: string }[];
    }[];
  };
  founder: {
    heading: string;
    description: string;
    messageHeading: string;
    message: string;
  };
  volunteers: {
    heading: string;
    text: string;
  };
  statistics: {
    heading: string;
    text: string;
  };
  testimonies: {
    heading: string;
    list: { text: string; author: string }[];
  };
  articles: {
    heading: string;
    text: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    whyName: {
      heading: string;
      points: string[];
      bilingual: string;
    };
  };
  mission: {
    heading: string;
    text: string;
  };
  structure: {
    heading: string;
    items: { label: string; value: string }[];
  };
  sessions: {
    heading: string;
    list: Session[];
  };
  events: {
    heading: string;
    text: string;
  };
  implementation: {
    heading: string;
    items: { label: string; text: string }[];
    closing: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    gallery: {
      title: "Program Gallery",
      subtitle: "Moments from our health and wellness journey",
      backHome: "Back to Home",
    },
    nav: {
      toggle: "Ver en",
      categories: [
        {
          title: "About us",
          items: [
            { label: "Home", to: "/" },
            { label: "Founder", to: "/founder" },
            { label: "Mission", to: "/mission" },
            { label: "Volunteers", to: "/volunteers" },
          ],
        },
        {
          title: "Our Impact",
          items: [
            { label: "Statistics", to: "/statistics" },
            { label: "Testimonies", to: "/testimonies" },
          ],
        },
        {
          title: "Program",
          items: [
            { label: "Structure", to: "/structure" },
            { label: "Sessions", to: "/sessions" },
            { label: "Events", to: "/events" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Articles", to: "/articles" },
            { label: "Gallery", to: "/gallery" },
          ],
        },
      ],
    },
    founder: {
      heading: "Our Founder",
      description:
        "Ariana Ochoa is a 17 year old eleventh grade student.\n\nAriana has volunteered in hospitals and health centers, driven and motivated by her passion for service, leadership, and medicine.\n\nSince ninth grade, her passion for science has led her to create initiatives aimed at promoting health education among children, thus achieving a positive change in their lives.",
      messageHeading: "Message from the Founder",
      message:
        "It is a great honor for me to share with you the story and mission of the Vida Salud Program.\n\nI founded Vida Salud during my ninth grade, motivated primarily by the reality that many children face due to a lack of access to basic health education, which led me to consider what I could do to generate a positive impact on their lives.\n\nWhat began as a simple idea has become a space where knowledge, care, and hope come together. Thanks to the help of young volunteers, we have been able to deliver interactive and dynamic talks to children on essential health topics such as nutrition, hygiene, dental care, mental health, and the importance of sleep.\n\nGiving these talks has further strengthened my desire to pursue a career in the health field, transforming me and demonstrating that small actions, when done with purpose, can generate a lasting impact.\n\nIt is gratifying to see how these children are becoming aware of the importance of forming lifelong habits through caring for their bodies and minds.\n\nMy vision for the future is that Vida Salud can expand, grow, and reach more children and communities in vulnerable situations, continuing with our objective of sharing knowledge that can also empower and uplift them, as we firmly believe that every child deserves to grow up healthy, informed, and hopeful for their future.\n\nThank you for continuing to be part of this mission, in which we are not only sharing knowledge but also doing our part to build healthier lives and brighter futures.",
    },
    volunteers: {
      heading: "Volunteers",
      text: "TODO: Content about volunteers.",
    },
    statistics: {
      heading: "Statistics",
      text: "TODO: Content about program impact statistics.",
    },
    testimonies: {
      heading: "Testimonies",
      list: [
        {
          text: "I really like the course and the talks I've received; they have taught me and helped me understand diseases and sleep. I like the way they teach us.",
          author: "Thais Blanco",
        },
        {
          text: "Ariana teaches the children her knowledge about health with great enthusiasm; we are very grateful for the talks she gives them.",
          author: "Teacher Lorena Morales Gómez",
        },
        {
          text: "Truly, it was the best experience regarding health care. I learned how to take care of my body, about healthy foods like different types of grains, and how to wash my teeth and hands well. Thank you very much.",
          author: "Anderson",
        },
        {
          text: "I really liked Teacher Ariana's classes because she taught us many things we didn't know about body hygiene, mental health, stress management, the importance of sleeping well, and the consequences of lack of sleep. Now I brush my teeth correctly.",
          author: "Marcela",
        },
      ],
    },
    articles: {
      heading: "Articles",
      text: "TODO: Educational articles and resources.",
    },
    hero: {
      title: "LiveWell",
      subtitle: "",
      tagline: "Children and adolescents from 7-16 years old",
      whyName: {
        heading: 'Why "LiveWell"?',
        points: [
          "Live represents vitality, energy, and growth.",
          "Well reflects balance, wellness, and health.",
          "Together, LiveWell is short, memorable, and directly expresses the purpose of the program: helping students learn to live healthier, happier, and more balanced lives.",
        ],
        bilingual:
          'Outside of school, the program is also known as VidaSalud in Spanish. This name expresses the same idea\u2014"Vida" meaning life and "Salud" meaning health\u2014reflecting vitality and well-being in a simple, positive way. Both names share the same mission: to guide young people toward healthier lifestyles.',
      },
    },
    mission: {
      heading: "Program Mission",
      text: "The LiveWell Program is designed to equip children and adolescents from 7-16 years old with the knowledge, skills, and habits they need to make healthy choices in their daily lives. At a stage where habits are still being formed, LiveWell emphasizes both physical health (nutrition, sleep, hygiene, exercise) and mental health (emotions, stress management, balance with technology).\n\nThe program\u2019s mission is not only to inform students, but to empower them\u2014helping them understand why health matters and how small daily decisions can make a big difference over time. By combining interactive talks, group activities, and reflection, LiveWell/VidaSalud aims to create a school culture that values wellness, giving students practical tools they can apply at school, at home, and in their community.",
    },
    structure: {
      heading: "Program Structure",
      items: [
        {
          label: "Target group",
          value: "Children and adolescents (7-16 years old)",
        },
        {
          label: "Number of sessions",
          value: "7\u20138 structured talks",
        },
        {
          label: "Duration of each session",
          value:
            "~60 minutes (presentation and activities/discussion)",
        },
        {
          label: "Format",
          value:
            "Engaging presentations, group activities, role-play, and Q&A sessions",
        },
        {
          label: "Evaluation",
          value:
            "Pre- and post-program surveys to measure changes in knowledge, attitudes, and habits",
        },
      ],
    },
    sessions: {
      heading: "Session Topics & Descriptions",
      list: [
        {
          number: 1,
          title: "Introduction to Total Health",
          goal: 'Introduce students to the concept of health as something more than "not being sick." Show them that caring for both their body and mind is essential to living well.',
          content: [
            'What "total health" means: physical + mental health',
            "How body and mind affect each other (example: lack of sleep \u2192 stress, bad eating \u2192 low energy)",
            "Short- and long-term benefits of caring for health",
            "Overview of the program and why these skills matter in daily life",
          ],
        },
        {
          number: 2,
          title: "Healthy Eating",
          goal: "Teach students the importance of a balanced diet and how food affects their energy, learning, and mood.",
          content: [
            "The food groups and how each helps the body",
            "What a balanced plate looks like (portion sizes, variety)",
            "How to make smart food choices at home, school, and with snacks",
            "Reading labels in simple ways (sugar, fats, proteins)",
            "The connection between good nutrition, school performance, and emotional well-being",
          ],
        },
        {
          number: 3,
          title: "The Importance of Sleep",
          goal: "Explain why sleep is essential for growth, concentration, and emotions, and give students strategies to improve their sleep routines.",
          content: [
            "What happens during the different sleep stages",
            "Recommended hours of sleep for children and adolescents",
            "Consequences of poor sleep: irritability, poor memory, health problems",
            "Tips for better sleep: consistent bedtime, technology limits, calming routines",
          ],
        },
        {
          number: 4,
          title: "Healthy Technology Use",
          goal: "Promote balance in technology use so students can enjoy the benefits while avoiding negative effects.",
          content: [
            "Positive uses of technology (learning, creativity, connection)",
            "Risks of too much screen time: eye strain, less sleep, reduced focus",
            "Setting healthy limits and taking breaks",
            "Online safety and being responsible digital citizens",
            "How to replace some screen time with active or social activities",
          ],
        },
        {
          number: 5,
          title: "Dental Hygiene",
          goal: "Emphasize the role of oral health in overall health and teach proper daily care practices.",
          content: [
            "Why dental hygiene matters for the whole body",
            "Proper brushing and flossing techniques",
            "Consequences of poor dental care (cavities, gum disease)",
            "Healthy eating for strong teeth",
            "How often to visit the dentist and why it matters",
          ],
        },
        {
          number: 6,
          title: "Personal Hygiene",
          goal: "Help students understand the importance of good hygiene for confidence, health, and social interaction.",
          content: [
            "Daily hygiene routines: bathing, washing hands, caring for skin and hair",
            "Hygiene after sports or physical activity",
            "Hygiene during puberty (menstrual care, sweat, skin changes)",
            "How personal hygiene prevents illness and infections",
            "Building personal responsibility in daily care",
          ],
        },
        {
          number: 7,
          title: "Mental Health & Stress Management",
          goal: "Build awareness about mental health and teach simple tools to manage stress in healthy ways.",
          content: [
            "What mental health means and why it\u2019s important",
            "Identifying emotions and expressing them in safe ways",
            "Everyday stressors for kids and how to handle them",
            "Relaxation and mindfulness techniques (deep breathing, journaling, quiet time)",
            "The importance of talking to someone you trust when feeling overwhelmed",
          ],
        },
        {
          number: 8,
          title: "Creating a Personal Health Plan",
          goal: "Encourage students to take ownership of their health by making a personalized plan that fits their daily routine.",
          content: [
            "Review of lessons from the program",
            "Setting personal health goals (SMART goals: Specific, Measurable, Achievable, Realistic, Timely)",
            "Building a weekly routine: balanced meals, regular sleep, hygiene, emotional care",
            'Keeping a "health journal" to self-monitor progress',
            "How to adjust goals and stay motivated over time",
          ],
        },
      ],
    },
    events: {
      heading: "Special Events",
      text: "At the end of the program, we celebrate a special graduation, in which we recognize the effort and dedication of each child.\n\nWe provide them with an educational manual, which includes the information learned during the talks, and illustrative images that will help them reinforce what they have seen throughout the sessions.\n\nWe want the children, in addition to learning, to be able to promote health in their homes and communities.",
    },
    implementation: {
      heading: "Implementation & Resources",
      items: [
        {
          label: "Materials",
          text: "Visual slides, printed handouts, personal health journals, and short interactive activities",
        },
        {
          label: "Evaluation",
          text: "Before and after surveys to measure knowledge and behavior change (stats that will be used for the measure of the impact of the program)",
        },
        {
          label: "Impact",
          text: "Students will gain practical skills and healthier habits that improve their academic performance, self-confidence, and overall well-being",
        },
      ],
      closing:
        "With LiveWell (VidaSalud), students will not only learn about health but will also practice real habits that can transform their lifestyle. The program\u2019s bilingual name reflects its flexibility: in Spanish (VidaSalud) or in English (LiveWell), the message remains the same\u2014life, health, and balance for every student.",
    },
  },
  es: {
    gallery: {
      title: "Galería del Programa",
      subtitle: "Momentos de nuestro camino hacia el bienestar",
      backHome: "Volver al Inicio",
    },
    nav: {
      toggle: "View in",
      categories: [
        {
          title: "Quienes somos",
          items: [
            { label: "Inicio", to: "/" },
            { label: "Fundadora", to: "/founder" },
            { label: "Misión", to: "/mission" },
            { label: "Voluntarios", to: "/volunteers" },
          ],
        },
        {
          title: "Nuestro Impacto",
          items: [
            { label: "Estadísticas", to: "/statistics" },
            { label: "Testimonios", to: "/testimonies" },
          ],
        },
        {
          title: "Programa",
          items: [
            { label: "Estructura", to: "/structure" },
            { label: "Charlas", to: "/sessions" },
            { label: "Eventos", to: "/events" },
          ],
        },
        {
          title: "Recursos",
          items: [
            { label: "Artículos", to: "/articles" },
            { label: "Galería", to: "/gallery" },
          ],
        },
      ],
    },
    founder: {
      heading: "Nuestra Fundadora",
      description:
        "Ariana Ochoa es una estudiante de 17 años de Onceavo grado.\n\nAriana se ha desempeñado como voluntaria en hospitales y centros de salud impulsada y motivada por su pasión hacia el servicio, liderazgo y la medicina.\n\nDesde noveno grado, su pasión por las ciencias la han llevado a crear iniciativas cuya finalidad son promover la educacion de la salud entre los niños, logrando así un cambio positivo en ellos.",
      messageHeading: "Mensaje de la Fundadora",
      message:
        "Es un gran honor para mí poder compartir con ustedes la historia y misión del Programa Vida Salud.\n\nFunde Vida Salud durante mi noveno grado, motivada principalmente por la realidad en la que muchos niños se encuentran al carecer de acceso a una educación básica en temas de salud, lo que me llevó a plantearme qué podía hacer para generar un impacto positivo en sus vidas.\n\nLo que comenzó como una idea sencilla se ha convertido en un espacio donde el conocimiento, el cuidado y la esperanza se unen.\n\nGracias a la ayuda de jóvenes voluntarios hemos logrado impartir charlas interactivas y dinámicas con niños y niñas sobre temas esenciales de salud como nutrición, higiene, cuidado dental, salud mental y la importancia del sueño.\n\nImpartir estas charlas me han llevado a fortalecer aún más mi vocación de seguir una carrera en el área de la salud, transformándome y demostrándome que acciones pequeñas cuando se realizan con propósito pueden generar un impacto duradero.\n\nEs gratificante poder valorar cómo estos niños están adquiriendo conciencia sobre la importancia de formar hábitos para toda la vida a través del cuidado de su cuerpo y mente.\n\nMi visión a futuro es que Vida Salud pueda expandirse, crecer más, y lograr llegar a más niños, niñas y comunidades en situaciones vulnerables continuando con nuestro objetivo de compartir conocimientos que también puedan empoderar y elevarlos, ya que creemos firmemente que todo niño merece crecer sano, informado y con esperanza en su futuro.\n\nGracias por seguir formando parte de esta misión, en la cual no solo estamos compartiendo conocimiento sino poniendo nuestro granito de arena en construir vidas más saludables y futuros más brillantes.",
    },
    volunteers: {
      heading: "Voluntarios",
      text: "TODO: Contenido sobre los voluntarios.",
    },
    statistics: {
      heading: "Estadísticas",
      text: "TODO: Contenido sobre estadísticas de impacto del programa.",
    },
    testimonies: {
      heading: "Testimonios",
      list: [
        {
          text: "Me gusta mucho el curso, y las charlas que he recibido, me han enseñado y he entendido sobre las enfermedades y el sueño. Me gusta la forma como nos enseñan.",
          author: "Thais Blanco",
        },
        {
          text: "Ariana imparte a los niños con mucho entusiasmo sus conocimientos sobre la salud, estamos muy agradecidos por las charlas que les da.",
          author: "Profesora Lorena Morales Gómez",
        },
        {
          text: "La verdad fue la mejor experiencia sobre el tema del cuido de la salud, aprendí sobre cómo cuidar mi cuerpo, sobre las comidas saludables como los diferentes tipos de granos, cómo lavarme bien los diente y las manos . Muchas gracias.",
          author: "Anderson",
        },
        {
          text: "Me gustaron mucho las clases de la profe Ariana, por qué nos enseñó bastantes cosas que no conocíamos sobre la higiene corporal, la salud mental, manejo del estrés, la importancia de dormir bien y las consecuencias de la falta de sueño, ahora ya me cepillo los dientes correctamente.",
          author: "Marcela",
        },
      ],
    },
    articles: {
      heading: "Artículos",
      text: "TODO: Artículos educativos y recursos.",
    },
    hero: {
      title: "Vida Salud",
      subtitle: "",
      tagline: "Niños y niñas de 7-16 años",
      whyName: {
        heading: "\u00bfPor qu\u00e9 \u201cLiveWell\u201d?",
        points: [
          "\u201cLive\u201d sugiere vida y vitalidad.",
          "\u201cWell\u201d se asocia con bienestar y salud.",
          "\u201cLiveWell\u201d es conciso, positivo y refleja el objetivo del programa de promover un estilo de vida saludable y equilibrado.",
        ],
        bilingual:
          'Fuera de la escuela, el programa tambi\u00e9n se conoce como LiveWell en ingl\u00e9s. Este nombre expresa la misma idea\u2014"Live" significa vivir y "Well" significa bien\u2014reflejando vitalidad y bienestar de una manera simple y positiva. Ambos nombres comparten la misma misi\u00f3n: guiar a los j\u00f3venes hacia estilos de vida m\u00e1s saludables.',
      },
    },
    mission: {
      heading: "Misi\u00f3n del Programa",
      text: "El programa tiene como objetivo proporcionar a niños y niñas de 7-16 años las herramientas y conocimientos necesarios para asumir la responsabilidad de su salud f\u00edsica y mental. A trav\u00e9s de charlas interactivas, se busca fomentar h\u00e1bitos saludables en \u00e1reas clave como la alimentaci\u00f3n, el sue\u00f1o, el uso de tecnolog\u00eda, la higiene personal y el bienestar emocional.",
    },
    structure: {
      heading: "Estructura del Programa",
      items: [
        {
          label: "Participantes",
          value: "Niños y niñas (7-16 años)",
        },
        {
          label: "Número total de charlas",
          value: "7–8",
        },
        {
          label: "Duración de cada charla",
          value: "60 minutos (presentación y actividades)",
        },
        {
          label: "Formato",
          value:
            "Presentaciones interactivas, dinámicas grupales, y sesiones de preguntas y respuestas",
        },
        {
          label: "Evaluación",
          value:
            "Encuestas previas y posteriores al programa para medir cambios en conocimiento, actitudes y hábitos",
        },
      ],
    },
    sessions: {
      heading: "Contenido de las Charlas",
      list: [
        {
          number: 1,
          title: "Introducci\u00f3n a la Salud Integral",
          goal: "Presentar la importancia de cuidar tanto la salud f\u00edsica como mental, y c\u00f3mo estas dos \u00e1reas est\u00e1n interconectadas.",
          content: [
            "Definici\u00f3n de salud integral.",
            "Importancia de un enfoque equilibrado entre cuerpo y mente.",
            "Consecuencias a corto y largo plazo de no cuidar la salud.",
            "Introducci\u00f3n a los temas que se abordar\u00e1n en el programa.",
          ],
        },
        {
          number: 2,
          title: "Alimentaci\u00f3n Saludable",
          goal: "Ense\u00f1ar la importancia de una dieta equilibrada y c\u00f3mo afecta tanto el cuerpo como la mente.",
          content: [
            "Los grupos de alimentos y sus beneficios.",
            "Qu\u00e9 es una dieta equilibrada: porciones adecuadas y variedad.",
            "C\u00f3mo leer etiquetas de alimentos.",
            "Consejos para mejorar h\u00e1bitos alimenticios en casa y en la escuela.",
            "Impacto de la alimentaci\u00f3n en el rendimiento acad\u00e9mico y el estado de \u00e1nimo.",
          ],
        },
        {
          number: 3,
          title: "La Importancia del Sue\u00f1o",
          goal: "Concienciar sobre la importancia del sue\u00f1o para el crecimiento, desarrollo y bienestar emocional.",
          content: [
            "Fases del sue\u00f1o y su funci\u00f3n.",
            "Recomendaciones de horas de sue\u00f1o para adolescentes.",
            "Consecuencias de la falta de sue\u00f1o: problemas de concentraci\u00f3n, \u00e1nimo y salud.",
            "Estrategias para mejorar la calidad del sue\u00f1o: rutinas, ambiente y tecnolog\u00eda.",
          ],
        },
        {
          number: 4,
          title: "Uso Saludable de la Tecnolog\u00eda",
          goal: "Promover un uso equilibrado de la tecnolog\u00eda para que los estudiantes puedan disfrutar de sus beneficios sin sufrir efectos negativos.",
          content: [
            "Usos positivos de la tecnolog\u00eda (aprendizaje, creatividad, conexi\u00f3n).",
            "Riesgos del exceso de tiempo frente a la pantalla: fatiga visual, menos sue\u00f1o, menor concentraci\u00f3n.",
            "Establecer l\u00edmites saludables y tomar descansos.",
            "Seguridad en l\u00ednea y ser ciudadanos digitales responsables.",
            "C\u00f3mo reemplazar parte del tiempo de pantalla con actividades f\u00edsicas o sociales.",
          ],
        },
        {
          number: 5,
          title: "Higiene Dental",
          goal: "Fomentar buenos h\u00e1bitos de higiene dental y su impacto en la salud general.",
          content: [
            "Importancia de la salud dental y su relaci\u00f3n con la salud general.",
            "T\u00e9cnicas correctas de cepillado y uso de hilo dental.",
            "Consejos para prevenir caries y enfermedades de las enc\u00edas.",
            "Alimentaci\u00f3n saludable para dientes fuertes.",
            "Frecuencia recomendada de visitas al dentista.",
          ],
        },
        {
          number: 6,
          title: "Higiene Corporal",
          goal: "Ense\u00f1ar la importancia de mantener una buena higiene corporal diaria.",
          content: [
            "Importancia del ba\u00f1o regular y el uso adecuado de productos de higiene.",
            "Cuidado de la piel y el cabello.",
            "Higiene en situaciones especiales: despu\u00e9s de hacer ejercicio, durante el per\u00edodo menstrual.",
            "Prevenci\u00f3n de infecciones a trav\u00e9s de la higiene corporal.",
            "Construir responsabilidad personal en el cuidado diario.",
          ],
        },
        {
          number: 7,
          title: "Salud Mental y Manejo del Estr\u00e9s",
          goal: "Desarrollar conciencia sobre la salud mental y proporcionar herramientas para manejar el estr\u00e9s.",
          content: [
            "Qu\u00e9 es la salud mental y por qu\u00e9 es importante.",
            "Identificaci\u00f3n de emociones y c\u00f3mo expresarlas de manera saludable.",
            "Estrategias para el manejo del estr\u00e9s: t\u00e9cnicas de relajaci\u00f3n y mindfulness.",
            "La importancia de pedir ayuda y hablar sobre problemas emocionales.",
          ],
        },
        {
          number: 8,
          title: "Creando un Plan Personal de Salud",
          goal: "Ayudar a los estudiantes a integrar lo aprendido y a crear un plan personal para mantener su salud integral.",
          content: [
            "Recapitulaci\u00f3n de los temas abordados en el programa.",
            "C\u00f3mo establecer metas de salud personal (metas SMART: Espec\u00edficas, Medibles, Alcanzables, Realistas, con Tiempo definido).",
            "Elaboraci\u00f3n de un plan diario/semanal que incluya h\u00e1bitos de alimentaci\u00f3n, sue\u00f1o, higiene y cuidado emocional.",
            'Mantener un "diario de salud" para monitorear el progreso.',
            "Importancia de la autoevaluaci\u00f3n y ajustes en el plan personal.",
          ],
        },
      ],
    },
    events: {
      heading: "Eventos Especiales",
      text: "Al finalizar el programa, celebramos una graduación especial, en la cual reconocemos el esfuerzo y dedicación de cada niño.\n\nLes hacemos entrega de un manual educativo, que incluye la información aprendida durante las charlas, e imágenes ilustrativas que les ayudarán a reforzar lo visto lo largo de las charlas.\n\nQueremos que los niños además de aprender, puedan promover la salud en sus hogares y comunidades.",
    },
    implementation: {
      heading: "Implementación y Recursos",
      items: [
        {
          label: "Materiales",
          text: "Presentaciones visuales, folletos informativos, diarios de salud personal y actividades interactivas cortas.",
        },
        {
          label: "Evaluación",
          text: "Encuestas antes y después del programa para medir cambios en el conocimiento y la actitud de los estudiantes hacia su salud (estadísticas que se usarán para medir el impacto del programa).",
        },
        {
          label: "Impacto",
          text: "Los estudiantes adquirirán habilidades prácticas y hábitos más saludables que mejorarán su rendimiento académico, su autoconfianza y su bienestar general.",
        },
      ],
      closing:
        "Con LiveWell (VidaSalud), los estudiantes no solo aprenderán sobre salud, sino que también practicarán hábitos reales que pueden transformar su estilo de vida. El nombre bilingüe del programa refleja su flexibilidad: en español (VidaSalud) o en inglés (LiveWell), el mensaje sigue siendo el mismo—vida, salud y equilibrio para cada estudiante.",
    },
  },
};
