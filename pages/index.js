import Head from "next/head";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaTools,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";
import profile from "../images/profile.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thompson Vieira - Desenvolvedor Web</title>
        <meta
          name="description"
          content="Portfólio de Thompson Raul dos Santos Vieira, desenvolvedor web adepto de React, Next.js e Flask."
        />
        <meta
          name="keywords"
          content="Desenvolvedor Web, React, Next.js, Flask, Portfólio"
        />
        <meta name="author" content="Thompson Raul dos Santos Vieira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full border border-gray-200">
          <div className="text-center">
            <Image
              src={profile}
              width={120}
              height={120}
              alt="Foto de perfil"
              className="rounded-full border-4 border-gray-300 mx-auto"
            />
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              Thompson Raul dos Santos Vieira
            </h1>
            <p className="text-gray-700 text-lg">
              Desenvolvedor Web | Ciência da Computação
            </p>
            <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
              Apaixonado por tecnologia e inovação, tenho experiência no
              desenvolvimento de aplicações web, otimização de desempenho e
              criação de interfaces intuitivas. Busco constantemente aprimorar
              minhas habilidades e contribuir para projetos impactantes.
            </p>
          </div>
          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col items-center space-y-3 text-gray-700">
            <a
              href="mailto:thompson.vieira@outlook.com"
              className="flex items-center space-x-2 hover:text-blue-700"
            >
              <FaEnvelope className="text-blue-500" />
              <span>thompson.vieira@outlook.com</span>
            </a>
            <a
              href="https://wa.me/73991391598"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-700"
            >
              <FaPhone className="text-green-500" />
              <span>(73) 9 9139-1598</span>
            </a>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Itabuna - BA</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/thompson-raul-dos-santos-vieira-8a1a391aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/ThompsonRaul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <hr className="my-6 border-gray-300" />

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Habilidades
            </h2>
            <div className="grid grid-cols-1 gap-2 text-gray-700 mt-2">
              <h3 className="text-lg font-semibold text-gray-800">Front-end</h3>
              <p className="flex items-center">
                <FaCode className="mr-2 text-blue-500" /> JavaScript, React,
                Next.js, HTML, CSS
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Back-end
              </h3>
              <p className="flex items-center">
                <FaCode className="mr-2 text-green-500" /> Python, Flask,
                Express, NodeJS
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Banco de Dados
              </h3>
              <p className="flex items-center">
                <FaDatabase className="mr-2 text-yellow-500" /> MySQL,
                PostgreSQL
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Versionamento de Código
              </h3>
              <p className="flex items-center">
                <FaTools className="mr-2 text-gray-500" /> Git, GitHub
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Outros
              </h3>
              <p className="flex items-center">
                <FaGlobe className="mr-2 text-purple-500" /> Inglês B1
              </p>
            </div>
          </section>
          <hr className="my-6 border-gray-300" />

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Experiência Profissional
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-800">
                  Estágio em Desenvolvimento Web
                </p>
                <p className="text-sm text-gray-600">
                  Universidade Estadual de Santa Cruz (Janeiro de 2024 -
                  presente)
                </p>
                <p className="text-gray-700 mt-1">
                  Desenvolvi o layout do projeto utilizando React e realizei
                  aprimoramentos no back-end com Flask para otimizar a
                  integração e manipulação de dados. O sistema, voltado para os
                  INCITEs do SENAI CIMATEC, tem como foco inicial a Indústria
                  4.0, permitindo que os gestores da mesma acompanhem e mensurem
                  o desempenho dos pesquisadores de forma eficiente.
                </p>
                <a
                  href="https://simcc.uesc.br/incite/industria4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center space-x-1 hover:underline"
                >
                  <span>Ver projeto</span> <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-800">
                  Estágio em Desenvolvimento Web
                </p>
                <p className="text-sm text-gray-600">
                  Universidade Estadual de Santa Cruz (Novembro de 2022 - Maio
                  de 2023)
                </p>
                <p className="text-gray-700 mt-1">
                  Refatorei a interface do Sistema de Mapeamento de Competências
                  Científicas da Bahia (SIMCC) utilizando React, tornando-a mais
                  responsiva e acessível. No back-end, trabalhei com Flask para
                  otimizar requisições, melhorando a eficiência do sistema e
                  proporcionando uma experiência de usuário mais fluida.
                </p>
                <a
                  href="https://simcc.uesc.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center space-x-1 hover:underline"
                >
                  <span>Ver projeto</span> <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </section>
          <hr className="my-6 border-gray-300" />

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Educação</h2>
            <p className="text-gray-700 mt-2">
              Bacharelado em Ciência da Computação - Universidade Estadual de
              Santa Cruz (Previsão: 2025.2)
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
