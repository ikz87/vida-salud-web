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
    mission: string;
    structure: string;
    sessions: string;
    implementation: string;
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
      toggle: "ES",
      mission: "Mission",
      structure: "Structure",
      sessions: "Sessions",
      implementation: "Resources",
    },
    hero: {
      title: "LiveWell",
      subtitle: "(VidaSalud)",
      tagline: "Comprehensive Student Health & Wellness Program",
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
      text: "The LiveWell Program is designed to equip elementary and middle school students with the knowledge, skills, and habits they need to make healthy choices in their daily lives. At a stage where habits are still being formed, LiveWell emphasizes both physical health (nutrition, sleep, hygiene, exercise) and mental health (emotions, stress management, balance with technology).\n\nThe program\u2019s mission is not only to inform students, but to empower them\u2014helping them understand why health matters and how small daily decisions can make a big difference over time. By combining interactive talks, group activities, and reflection, LiveWell/VidaSalud aims to create a school culture that values wellness, giving students practical tools they can apply at school, at home, and in their community.",
    },
    structure: {
      heading: "Program Structure",
      items: [
        {
          label: "Target group",
          value:
            "Students ages 8\u201312 (upper elementary and middle school)",
        },
        {
          label: "Number of sessions",
          value: "7\u20138 structured talks",
        },
        {
          label: "Duration of each session",
          value:
            "~30 minutes (15 min presentation + 15 min activities/discussion)",
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
      toggle: "EN",
      mission: "Misi\u00f3n",
      structure: "Estructura",
      sessions: "Charlas",
      implementation: "Recursos",
    },
    hero: {
      title: "LiveWell",
      subtitle: "(Vida Salud)",
      tagline:
        "Programa de Cuidado Integral de la Salud para Estudiantes de Middle School",
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
      text: "El programa tiene como objetivo proporcionar a los estudiantes de middle school las herramientas y conocimientos necesarios para asumir la responsabilidad de su salud f\u00edsica y mental. A trav\u00e9s de charlas interactivas, se busca fomentar h\u00e1bitos saludables en \u00e1reas clave como la alimentaci\u00f3n, el sue\u00f1o, el uso de tecnolog\u00eda, la higiene personal y el bienestar emocional.",
    },
    structure: {
      heading: "Estructura del Programa",
      items: [
        {
          label: "Duraci\u00f3n de cada charla",
          value: "30 minutos (presentaci\u00f3n y actividades)",
        },
        {
          label: "N\u00famero total de charlas",
          value: "7\u20138",
        },
        {
          label: "Participantes",
          value: "Estudiantes de primaria (8\u201312 a\u00f1os)",
        },
        {
          label: "Formato",
          value:
            "Presentaciones interactivas, din\u00e1micas grupales, y sesiones de preguntas y respuestas",
        },
        {
          label: "Evaluaci\u00f3n",
          value:
            "Encuestas previas y posteriores al programa para medir cambios en conocimiento, actitudes y h\u00e1bitos",
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
    implementation: {
      heading: "Implementaci\u00f3n y Recursos",
      items: [
        {
          label: "Materiales",
          text: "Presentaciones visuales, folletos informativos, diarios de salud personal y actividades interactivas cortas.",
        },
        {
          label: "Evaluaci\u00f3n",
          text: "Encuestas antes y despu\u00e9s del programa para medir cambios en el conocimiento y la actitud de los estudiantes hacia su salud (estad\u00edsticas que se usar\u00e1n para medir el impacto del programa).",
        },
        {
          label: "Impacto",
          text: "Los estudiantes adquirir\u00e1n habilidades pr\u00e1cticas y h\u00e1bitos m\u00e1s saludables que mejorar\u00e1n su rendimiento acad\u00e9mico, su autoconfianza y su bienestar general.",
        },
      ],
      closing:
        "Con LiveWell (VidaSalud), los estudiantes no solo aprender\u00e1n sobre salud, sino que tambi\u00e9n practicar\u00e1n h\u00e1bitos reales que pueden transformar su estilo de vida. El nombre biling\u00fce del programa refleja su flexibilidad: en espa\u00f1ol (VidaSalud) o en ingl\u00e9s (LiveWell), el mensaje sigue siendo el mismo\u2014vida, salud y equilibrio para cada estudiante.",
    },
  },
};
