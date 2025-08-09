import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import translations from "../language/translations";
import useThemeAndLanguage from "../hooks/useThemeAndLanguage";

export default function Home() {
  const { language, darkMode, toggleLanguage, toggleTheme } =
    useThemeAndLanguage();
  const t = (key) => translations[language][key] || key;

  const isPt = language === "pt";
  const langLabel = isPt ? "PT" : "EN";

  const skillGroups = [
    {
      label: t("skills_programming"),
      color: "blue",
      items: [
        { name: "JavaScript", icon: "simple-icons:javascript" },
        { name: "Python", icon: "simple-icons:python" },
        { name: "C#", icon: "simple-icons:csharp" },
      ],
    },
    {
      label: t("skills_frameworks"),
      color: "green",
      items: [
        { name: "React", icon: "simple-icons:react" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "Express.js", icon: "simple-icons:express" },
        { name: "Flask", icon: "simple-icons:flask" },
        { name: ".NET", icon: "simple-icons:dotnet" },
      ],
    },
    {
      label: t("skills_databases"),
      color: "yellow",
      items: [
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "MySQL", icon: "simple-icons:mysql" },
        { name: "MongoDB", icon: "simple-icons:mongodb" },
      ],
    },
    {
      label: t("skills_tools"),
      color: "indigo",
      items: [
        { name: "Linux", icon: "simple-icons:linux" },
        { name: "Docker", icon: "simple-icons:docker" },
        { name: "VSCode", icon: "simple-icons:visualstudiocode" },
        { name: "Git", icon: "simple-icons:git" },
        { name: "GitHub", icon: "simple-icons:github" },
        { name: "Postman", icon: "simple-icons:postman" },
      ],
    },
    {
      label: t("skills_english_title"),
      color: "purple",
      items: [{ name: t("skills_english_level"), icon: "mdi:translate" }],
    },
  ];

  const experiences = [
    {
      title: t("exp1_title"),
      company: t("exp1_company"),
      period: t("exp1_period"),
      desc: t("exp1_desc"),
      link: "https://simcc.uesc.br/incite/industria4/",
      color: "blue",
    },
    {
      title: t("exp2_title"),
      company: t("exp2_company"),
      period: t("exp2_period"),
      desc: t("exp2_desc"),
      link: "https://dinamizando-ingles.vercel.app/",
      color: "green",
    },
    {
      title: t("exp3_title"),
      company: t("exp3_company"),
      period: t("exp3_period"),
      desc: t("exp3_desc"),
      link: "https://simcc.uesc.br/",
      color: "purple",
    },
  ];

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* Botões fixos */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-2.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          title={darkMode ? "Light Mode" : "Dark Mode"}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Icon
              icon="mdi:weather-sunny"
              className="text-yellow-400"
              width="20"
              height="20"
            />
          ) : (
            <Icon
              icon="mdi:weather-night"
              className="text-gray-600"
              width="20"
              height="20"
            />
          )}
        </button>
        <button
          onClick={toggleLanguage}
          className="p-2 sm:p-2.5 bg-blue-200 dark:bg-blue-800 rounded hover:bg-blue-300 dark:hover:bg-blue-700 transition-colors font-semibold"
          title={isPt ? "Switch to English" : "Trocar para Português"}
          aria-label={isPt ? "Switch to English" : "Trocar para Português"}
        >
          {langLabel}
        </button>
      </div>

      {/* Mais espaço */}
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 flex justify-center items-stretch sm:items-center p-4 sm:p-6 lg:p-10 xl:p-16 2xl:p-20">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-none sm:rounded-2xl p-4 sm:p-8 lg:p-10 xl:p-12 w-full max-w-6xl xl:max-w-[90rem] 2xl:max-w-[96rem] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
          {/* Header */}
          <div className="text-center">
            <Image
              src="/profile.jpg"
              width={120}
              height={120}
              alt={t("profile_photo_alt")}
              className="rounded-full border-4 border-gray-300 dark:border-gray-600 mx-auto"
              priority
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
              Thompson Raul dos Santos Vieira
            </h1>
            <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400">
              {t("developer")}
            </p>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {t("bio")}
            </p>
          </div>

          <hr className="my-8 sm:my-10 border-gray-300 dark:border-gray-600" />

          {/* Contato */}
          <div className="flex flex-col items-center space-y-3">
            <a
              href="mailto:thompson.vieira@outlook.com"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
            >
              <Icon
                icon="mdi:email-outline"
                className="text-blue-500"
                width="18"
                height="18"
              />
              <span>thompson.vieira@outlook.com</span>
            </a>
            <a
              href="https://wa.me/73991391598"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-500 transition-colors"
            >
              <Icon
                icon="mdi:phone"
                className="text-green-500"
                width="18"
                height="18"
              />
              <span>(73) 9 9139-1598</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Icon
                icon="mdi:map-marker"
                className="text-red-500"
                width="18"
                height="18"
              />
              <span>{t("location")}</span>
            </div>
          </div>

          {/* Links sociais */}
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ThompsonRaul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Icon icon="simple-icons:linkedin" width="30" height="30" />
            </a>
            <a
              href="https://github.com/ThompsonRaul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <Icon icon="simple-icons:github" width="30" height="30" />
            </a>
          </div>

          <hr className="my-8 sm:my-10 border-gray-300 dark:border-gray-600" />

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("skills")}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillGroups.map((group, idx) => {
                const colorRing = {
                  blue: "ring-blue-300 dark:ring-blue-700",
                  green: "ring-green-300 dark:ring-green-700",
                  yellow: "ring-yellow-300 dark:ring-yellow-700",
                  indigo: "ring-indigo-300 dark:ring-indigo-700",
                  purple: "ring-purple-300 dark:ring-purple-700",
                }[group.color];

                const headerText = {
                  blue: "text-blue-700 dark:text-blue-300",
                  green: "text-green-700 dark:text-green-300",
                  yellow: "text-yellow-700 dark:text-yellow-300",
                  indigo: "text-indigo-700 dark:text-indigo-300",
                  purple: "text-purple-700 dark:text-purple-300",
                }[group.color];

                const chipBg = {
                  blue: "bg-blue-50 dark:bg-blue-900/30",
                  green: "bg-green-50 dark:bg-green-900/30",
                  yellow: "bg-yellow-50 dark:bg-yellow-900/30",
                  indigo: "bg-indigo-50 dark:bg-indigo-900/30",
                  purple: "bg-purple-50 dark:bg-purple-900/30",
                }[group.color];

                const iconColor = {
                  blue: "text-blue-500",
                  green: "text-green-500",
                  yellow: "text-yellow-500",
                  indigo: "text-indigo-500",
                  purple: "text-purple-500",
                }[group.color];

                const GroupIcon = group.items[0]?.icon || null;

                return (
                  <div
                    key={idx}
                    className={`group rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ring-1 ${colorRing}`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg ${chipBg} mr-2`}>
                        {GroupIcon ? (
                          <Icon
                            icon={GroupIcon}
                            className={`w-6 h-6 ${iconColor}`}
                          />
                        ) : null}
                      </div>
                      <h3 className={`text-lg font-semibold ${headerText}`}>
                        {group.label}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 ${chipBg} transition-transform duration-150 group-hover:border-transparent transform hover:scale-[1.03]`}
                          title={item.name}
                        >
                          <Icon
                            icon={item.icon}
                            className={`w-4 h-4 ${iconColor}`}
                          />
                          <span className="whitespace-nowrap">{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <hr className="my-8 sm:my-10 border-gray-300 dark:border-gray-600" />

          {/* Experiência */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("experience")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => {
                const borderColors = {
                  blue: "border-blue-500",
                  green: "border-green-500",
                  purple: "border-purple-500",
                };
                const textColors = {
                  blue: "text-blue-600 dark:text-blue-400",
                  green: "text-green-600 dark:text-green-400",
                  purple: "text-purple-600 dark:text-purple-400",
                };
                const linkColors = {
                  blue: "text-blue-500 hover:text-blue-700",
                  green: "text-green-500 hover:text-green-700",
                  purple: "text-purple-500 hover:text-purple-700",
                };

                return (
                  <div
                    key={index}
                    className={`border-l-4 pl-4 ${borderColors[exp.color]}`}
                  >
                    <h3
                      className={`text-lg md:text-xl font-medium ${
                        textColors[exp.color]
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {exp.desc}
                    </p>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        linkColors[exp.color]
                      } inline-flex items-center hover:underline transition-colors`}
                    >
                      <span>{t("see_project")}</span>
                      <Icon
                        icon="mdi:open-in-new"
                        width="12"
                        height="12"
                        className="ml-1"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </section>

          <hr className="my-8 sm:my-10 border-gray-300 dark:border-gray-600" />

          {/* Educação */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("education")}</h2>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {t("education_desc")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
