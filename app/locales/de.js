export default {

  "app":
  {
    "name": "Skillforge"
  },
  "back": "Zurück",
  "next": "Weiter",
  "customize": "Anpassen",
  "save": "Speichern",
  "header":
  {
    "character-creation":
      {
        "title": "NEUER CHARAKTER"
      },
    "settings":
    {
      "title": "EINSTELLUNGEN",
      "language": "Sprache",
      "sound": "Musik"
    }
  },
  "footer":
  {
    "credits":
    {
      "link": "Mitwirkende"
    },
    "patchnotes":
    {
      "link": "Patchnotes"
    },
    "terms-of-service":
    {
      "link": "Nutzungsbedingungen"
    },
    "privacy-policy":
    {
      "link": "Datenschutzerklärung"
    },
    "report-a-bug":
    {
      "link": "Melde einen Bug"
    },
    "make-a-wish":
    {
      "link": "Wünsche"
    }
  },
  "character":
  {
    "gender":
      {
        "female":
        {
          "name": "weiblich"
        },
        "male":
        {
          "name": "männlich"
        }
      },
    "race":
    {
      "name": "Rasse",
      "human":
      {
        "name": "Mensch",
            "description": "Vor langer Zeit verloren die Menschen ihre Heimat und strandeten auf Dunya. Ohne eigenes Land, lebten sie lange Zeit als Nomaden und trieben Handel mit den einheimischen Völkern. Ein findiger Kaufmann konnte eines Tages einen geschickten Handel mit den Elfen abschließen und so ein Stück Land erwerben. Hoch im Norden gelegen, war das Land rau und kalt. Doch die Menschen ließen sich dort nieder und gründeten das Reich Nordend. Schritt für Schritt wurden sie wieder ein starkes, stolzes Volk mit vielseitigen Talenten.Sie sind auch bekannt als das junge Volk von Dunya."
      },
      "elf":
      {
        "name": "Elf",
        "description": "Die Elfen sind auch als das Waldfolk von Dunya bekannt. Sie leben in Harmonie mit Mutter Natur und sind in viele ihrer Geheimnisse eingeweiht. Sie sind hervorragende Jäger und bewegen sich leise wie Nachtschatten."
      },
      "dwarf":
      {
        "name": "Zwerg",
            "description": "Die Zwerge mögen zwar klein sein, aber sie sind sehr stark und robust. Sie würden alles tun, um ihr zu Hause und ihre Familie zu beschützen. Sie sind auch bekannt als das Bergfolk von Dunya."
      },
      "fairy":
      {
        "name": "Fee",
            "description": "Die Feen sind das älteste Volk von Dunya und werden daher auch das alte Volk genannt. Sowohl Elfen als auch Zwerge stammen von ihnen ab. Eine Fee kann mehrere hundert Jahre alt werden. Sie wurden aus Magie geboren und haben daher ein natürliches Talent dafür."
      }
    },
    "class":
      {
        "name": "Klasse",
        "mage":
        {
          "name": "Magier",
          "description": "Ein Magier ist ein Meister des Geistes. Er kann die ihn umgebende Energie durch die bloße Kraft seiner Gedanken transformieren und mächtige Zaubersprüche wirken.",
          "specializations":
          {
            "elementalist":
            {
              "name": "Elementalist"
            },
            "summoner":
            {
              "name": "Beschwörer"
            },
            "illusionist":
            {
              "name": "Illusionist"
            }
          }
        },
        "warrior":
        {
          "name": "Krieger",
          "description": "Krieger fühlen sich bei einem Kampf an der Front am wohlsten. Sie verteidigen ihre Gefährten um jeden Preis.",
          "specializations":
          {
            "attacker":
            {
              "name": "Angreifer"
            },
            "defender":
            {
              "name": "Verteidiger"
            },
            "all-rounder":
            {
              "name": "All-Rounder"
            }
          }
        },
        "priest":
        {
          "name": "Priester",
          "description": "Priester kanalisieren die Kraft einer mentalen Quelle, hell oder dunkel. Durch ihre Gebete und Wunder können sie ihre Gefährten heilen und stärken oder ihre Gegner durch dunkle Flüche schwächen.",
          "specializations":
          {
            "medicus":
            {
              "name": "Priester des Lichts"
            },
            "bard_siren":
            {
              "name": "Barde (m) / Sirene (w)"
            },
            "curse_caster":
            {
              "name": "Priester der Schatten"
            }
          }
        },
        "hunter":
        {
          "name": "Jäger",
          "description": "Jäger können exzellent schleichen und nutzen die Schatten um sich in ihnen zu verstecken. Sie können das Verhalten ihrer Gegner oft vorausahnen und ihnen so einen Schritt voraus sein.",
          "specializations":
          {
            "beastmaster":
            {
              "name": "Bestienmeister"
            },
            "nightshade":
            {
              "name": "Nachtschatten"
            },
            "trapper":
            {
              "name": "Fallensteller"
            }
          }
        },
        "specialization":
        {
          "name": "Spezialisierung",
          "possible_specializations_are": "Mögliche Spezialisierungen sind"
        }
      },
    "attributes":
    {
      "concentration":
        {
          "name": "Konzentration",
          "description": "Magier und Priester benötigen Konzentration, um ihre Zauber und Wunder zu wirken, Krieger und Jäger für ihre Spezialattacken.",
          "recovery_rate": "Konzentrationsregeneration"
        },
        "health":
        {
          "name": "Gesundheit",
          "description": "Die Rate der Gesundheitsregeneration bestimmt, wie schnell sich die Gesundheit eines Charakters erholt.",
          "recovery_rate": "Gesundheitsregeneration"
        },
        "defense":
        {
           "name": "Verteidigung",
           "description": "Der Verteidigungswert entscheidet, wie viel Schaden absorbiert werden kann."
        },
        "dexterity":
        {
           "name": "Geschicklichkeit",
           "description": "Geschicklichkeit erhöht die Wahrscheinlichkeit kritischer Treffer und die Fähigkeit, gegnerischen Angriffen auszuweichen."
        },
          "endurance":
          {
            "name": "Ausdauer",
            "description": "Die Ausdauer eines Charakters legt die maximale Länge von Angriffsketten und die Regenerationsrate der Lebensenergie fest."
          },
          "strength":
      {
        "name": "Stärke",
        "description": "Die Stärke eines Charakters entscheidet, welche Waffen und Rüstungen verwendet werden können und wie viel physischen Schaden ein Angriff verursacht."
      },
      "willpower":
      {
        "name": "Willenskraft",
        "description": "Willenskraft erhöht den Schaden magischer Angriffe und die Konzentrationsfähigkeit."
      },
          "wisdom":
          {
            "name": "Weisheit",
            "description": "Ein hohes Maß an Weisheit wird benötigt, um komplexe Zaubersprüche anzuwenden und um schnell neue Erfahrung zu sammeln und neues Wissen zu erlernen."
          }
    },
    "customization":
    {
      "title": "ANPASSEN"
    }
  }

};
